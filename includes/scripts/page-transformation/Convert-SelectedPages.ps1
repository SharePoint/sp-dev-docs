<#
.SYNOPSIS
Transforms all user-selected Wiki and Web Part pages after representative validation passes.

.DESCRIPTION
Refuses to expand the wave unless every representative result has TransformationStatus=Created
and ValidationStatus=Passed. Generated pages remain drafts.

.EXAMPLE
.\Convert-SelectedPages.ps1 `
  -PagesPath .\approved-pages.csv `
  -RepresentativeManifestPath .\representative-page-groups.csv `
  -RepresentativeResultsPath .\representative-page-results.csv `
  -ClientId "<client-id>" `
  -AuthenticationMode Interactive `
  -Confirm

.EXAMPLE
.\Convert-SelectedPages.ps1 `
  -PagesPath .\approved-pages.csv `
  -RepresentativeManifestPath .\representative-page-groups.csv `
  -RepresentativeResultsPath .\representative-page-results.csv `
  -ClientId "<client-id>" `
  -AuthenticationMode CertificateFile `
  -Tenant "contoso.onmicrosoft.com" `
  -CertificatePath .\page-transformation.pfx `
  -CertificatePassword (Read-Host "Certificate password" -AsSecureString) `
  -Confirm:$false
#>

[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'High')]
param(
    [Parameter(Mandatory = $true)]
    [string]$PagesPath,

    [Parameter(Mandatory = $true)]
    [string]$RepresentativeResultsPath,

    [Parameter(Mandatory = $true)]
    [string]$RepresentativeManifestPath,

    [Parameter(Mandatory = $true)]
    [string]$ClientId,

    [Parameter(Mandatory = $false)]
    [ValidateSet('Interactive', 'DeviceLogin', 'CertificateThumbprint', 'CertificateFile')]
    [string]$AuthenticationMode = 'Interactive',

    [Parameter(Mandatory = $false)]
    [string]$Tenant,

    [Parameter(Mandatory = $false)]
    [string]$Thumbprint,

    [Parameter(Mandatory = $false)]
    [string]$CertificatePath,

    [Parameter(Mandatory = $false)]
    [securestring]$CertificatePassword,

    [Parameter(Mandatory = $false)]
    [string]$AzureEnvironment = 'Production',

    [Parameter(Mandatory = $false)]
    [string]$ResultPath,

    [Parameter(Mandatory = $false)]
    [string]$LogFolder,

    [Parameter(Mandatory = $false)]
    [string]$WebPartMappingFile,

    [Parameter(Mandatory = $false)]
    [switch]$AllowModifiedPages,

    [Parameter(Mandatory = $false)]
    [switch]$Force
)

Set-StrictMode -Version Latest
. "$PSScriptRoot\PageTransformation.Common.ps1"

foreach ($path in @($PagesPath, $RepresentativeResultsPath, $RepresentativeManifestPath)) {
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        throw "Input file not found: $path"
    }
}

$PagesPath = (Resolve-Path -LiteralPath $PagesPath).Path
$RepresentativeResultsPath = (Resolve-Path -LiteralPath $RepresentativeResultsPath).Path
$RepresentativeManifestPath = (Resolve-Path -LiteralPath $RepresentativeManifestPath).Path
$representativeManifest = @(Import-Csv -LiteralPath $RepresentativeManifestPath)
$representativeResults = @(Import-Csv -LiteralPath $RepresentativeResultsPath)
if ($representativeManifest.Count -eq 0 -or $representativeResults.Count -eq 0) {
    throw "The representative manifest and results files must both contain rows."
}

$includedRepresentativeRows = @(
    $representativeManifest |
        Where-Object {
            ConvertTo-PageWaveBoolean -Value $_.IncludePattern -Name "IncludePattern for $($_.PageUrl)"
        }
)
$representativeRows = @(
    $includedRepresentativeRows |
        Where-Object {
            ConvertTo-PageWaveBoolean -Value $_.Selected -Name "Selected for $($_.PageUrl)"
        }
)
if ($representativeRows.Count -eq 0) {
    throw "The representative manifest has no included selected rows."
}

$transformationProfile = Get-PageWaveTransformationProfile -WebPartMappingFile $WebPartMappingFile
$includedPatterns = @($includedRepresentativeRows.PatternKey | Sort-Object -Unique)
$selectedPatterns = @($representativeRows.PatternKey | Sort-Object -Unique)
$patternsWithoutRepresentative = @(
    $includedPatterns |
        Where-Object { $_ -notin $selectedPatterns }
)
if ($patternsWithoutRepresentative.Count -gt 0) {
    throw "Every included pattern needs a selected representative: $($patternsWithoutRepresentative -join ', ')"
}

$representativeRowsByKey = @{}
foreach ($row in $representativeRows) {
    $key = Get-PageWaveKey -Row $row
    if ($representativeRowsByKey.ContainsKey($key)) {
        throw "Duplicate representative manifest row: $($row.PageUrl)"
    }
    $representativeRowsByKey[$key] = $row
}

$representativeResultsByKey = @{}
foreach ($result in $representativeResults) {
    $key = Get-PageWaveKey -Row $result
    if ($representativeResultsByKey.ContainsKey($key)) {
        throw "Duplicate representative result row: $($result.PageUrl)"
    }
    $representativeResultsByKey[$key] = $result
}

if ($representativeRowsByKey.Count -ne $representativeResultsByKey.Count) {
    throw "Representative manifest and result row counts don't match."
}

$passedPatterns = @{}
foreach ($key in $representativeRowsByKey.Keys) {
    if (-not $representativeResultsByKey.ContainsKey($key)) {
        throw "Representative result is missing for $($representativeRowsByKey[$key].PageUrl)."
    }

    $manifestRow = $representativeRowsByKey[$key]
    $resultRow = $representativeResultsByKey[$key]
    if ($resultRow.ManifestRowHash -ne (Get-PageWaveManifestHash -Row $manifestRow)) {
        throw "Representative result doesn't match the current manifest row: $($manifestRow.PageUrl)"
    }
    if ($resultRow.TransformationProfileHash -ne $transformationProfile.Hash) {
        throw "Representative results used a different PnP version or Web Part mapping: $($manifestRow.PageUrl)"
    }
    if ($resultRow.TransformationStatus -ne 'Created' -or
        $resultRow.ValidationStatus -ne 'Passed') {
        throw "Every representative page must be Created and validated as Passed before expanding the wave: $($manifestRow.PageUrl)"
    }

    $passedPatterns[$manifestRow.PatternKey] = $true
}

$pages = @(Import-Csv -LiteralPath $PagesPath)
if ($pages.Count -eq 0) {
    throw "The approved pages file is empty."
}
foreach ($column in @('ExpectedVisibleContent', 'ValidationOwner')) {
    if ($pages[0].PSObject.Properties.Name -notcontains $column) {
        throw "The approved pages file requires a $column column."
    }
}
foreach ($row in $pages) {
    if ([string]::IsNullOrWhiteSpace($row.ExpectedVisibleContent) -or
        [string]::IsNullOrWhiteSpace($row.ValidationOwner)) {
        throw "Every approved page needs ExpectedVisibleContent and ValidationOwner: $($row.PageUrl)"
    }
    if ([string]::IsNullOrWhiteSpace($row.PatternKey) -or
        -not $passedPatterns.ContainsKey($row.PatternKey)) {
        throw "Page pattern doesn't have a passed representative: $($row.PageUrl)"
    }
}

$representativeKeys = @{}
foreach ($row in $representativeResults) {
    $representativeKeys["$($row.ScanId)|$($row.SiteUrl)|$($row.WebUrl)|$($row.PageUrl)"] = $true
}

$pagesToTransform = @(
    $pages |
        Where-Object {
            $key = "$($_.ScanId)|$($_.SiteUrl)|$($_.WebUrl)|$($_.PageUrl)"
            -not $representativeKeys.ContainsKey($key)
        }
)

if ($pagesToTransform.Count -eq 0) {
    throw "No additional pages remain after excluding validated representative pages."
}

$pagesFolder = Split-Path -Parent $PagesPath
if ([string]::IsNullOrWhiteSpace($ResultPath)) {
    $resultName = if ($WhatIfPreference) {
        'selected-page-preview.csv'
    }
    else {
        'selected-page-results.csv'
    }
    $ResultPath = Join-Path $pagesFolder $resultName
}
if ([string]::IsNullOrWhiteSpace($LogFolder)) {
    $LogFolder = Join-Path $pagesFolder 'selected-page-logs'
}

$entryCmdlet = $PSCmdlet
$shouldProcess = {
    param($target, $action)
    $entryCmdlet.ShouldProcess($target, $action)
}.GetNewClosure()
Test-PageWaveAuthentication `
    -AuthenticationMode $AuthenticationMode `
    -Tenant $Tenant `
    -Thumbprint $Thumbprint `
    -CertificatePath $CertificatePath
Test-AssessmentPageWaveRows -Rows $pagesToTransform
$resultWriter = New-PageWaveResultWriter -Path $ResultPath -Force:$Force
$ResultPath = $resultWriter.Path

$results = Invoke-AssessmentPageWave `
    -Rows $pagesToTransform `
    -ClientId $ClientId `
    -AuthenticationMode $AuthenticationMode `
    -ShouldProcessCallback $shouldProcess `
    -ResultWriter $resultWriter.Write `
    -TransformationProfile $transformationProfile `
    -Tenant $Tenant `
    -Thumbprint $Thumbprint `
    -CertificatePath $CertificatePath `
    -CertificatePassword $CertificatePassword `
    -AzureEnvironment $AzureEnvironment `
    -LogFolder $LogFolder `
    -AllowModifiedPages:$AllowModifiedPages

$failed = @($results | Where-Object TransformationStatus -eq 'Failed')
if ($failed.Count -gt 0) {
    throw "$($failed.Count) selected page transformations failed. Review $ResultPath."
}

Write-Host "Selected page results: $ResultPath" -ForegroundColor Green
