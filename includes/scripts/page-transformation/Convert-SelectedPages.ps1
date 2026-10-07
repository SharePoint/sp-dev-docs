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
    [switch]$PreflightOnly,

    [Parameter(Mandatory = $false)]
    [switch]$Force
)

Set-StrictMode -Version Latest
# Use the same source validation and conversion engine as the representative run.
. "$PSScriptRoot\PageTransformation.Common.ps1"

# Expansion always requires all three artifacts: the pages to add, the original
# representative manifest, and the manually validated representative results.
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

# Rebuild the complete representative scope from the current manifest. A newly included
# pattern cannot be ignored simply because it has no result yet.
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

$transformationProfile = Get-PageWaveTransformationProfile
$includedManifestHash = Get-PageWaveIncludedManifestHash -Rows $includedRepresentativeRows
$includedPatterns = @($includedRepresentativeRows.PatternKey | Sort-Object -Unique)
$selectedPatterns = @($representativeRows.PatternKey | Sort-Object -Unique)
$patternsWithoutRepresentative = @(
    $includedPatterns |
        Where-Object { $_ -notin $selectedPatterns }
)
if ($patternsWithoutRepresentative.Count -gt 0) {
    throw "Every included pattern needs a selected representative: $($patternsWithoutRepresentative -join ', ')"
}

# Normalize manifest and result rows by Assessment identity, rejecting duplicates before
# any target page can be created.
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

# Bind each approval to both the complete manifest row and the transformation profile.
# This blocks stale results and prevents a different PnP or mapping configuration from
# inheriting an earlier validation decision.
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
        throw "Representative results used a different PnP version or script profile: $($manifestRow.PageUrl)"
    }
    if ($resultRow.IncludedManifestHash -ne $includedManifestHash) {
        throw "Representative results don't match the complete included manifest."
    }
    if ($resultRow.TransformationStatus -ne 'Created' -or
        $resultRow.ValidationStatus -ne 'Passed') {
        throw "Every representative page must be Created and validated as Passed before expanding the wave: $($manifestRow.PageUrl)"
    }
    foreach ($validationField in @('ValidationNotes', 'ValidatedBy', 'ValidatedAt')) {
        if ([string]::IsNullOrWhiteSpace($resultRow.$validationField)) {
            throw "Passed representative result requires $validationField`: $($manifestRow.PageUrl)"
        }
    }
    $validatedAt = [datetimeoffset]::MinValue
    if (-not [datetimeoffset]::TryParse([string]$resultRow.ValidatedAt, [ref]$validatedAt)) {
        throw "ValidatedAt must be an ISO-8601 timestamp: $($manifestRow.PageUrl)"
    }
    if ([string]::IsNullOrWhiteSpace($resultRow.LogPath) -or
        -not (Test-Path -LiteralPath $resultRow.LogPath -PathType Leaf)) {
        throw "Passed representative result requires a retained LogPath: $($manifestRow.PageUrl)"
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
    if ($row.PSObject.Properties.Name -notcontains 'PatternKey' -or
        [string]::IsNullOrWhiteSpace($row.PatternKey)) {
        throw "Every approved page requires PatternKey: $($row.PageUrl)"
    }
}

# Bind every approved page to the original included manifest. The caller cannot assign
# a passed PatternKey to an unknown or altered page.
$includedRowsByKey = @{}
foreach ($row in $includedRepresentativeRows) {
    $key = Get-PageWaveKey -Row $row
    if ($includedRowsByKey.ContainsKey($key)) {
        throw "Duplicate included manifest row: $($row.PageUrl)"
    }
    $includedRowsByKey[$key] = $row
}

# Representative pages are already transformed and validated.
$representativeKeys = @{}
foreach ($row in $representativeResults) {
    $representativeKeys[(Get-PageWaveKey -Row $row)] = $true
}

$pagesToTransform = [Collections.Generic.List[object]]::new()
foreach ($approvedRow in $pages) {
    $key = Get-PageWaveKey -Row $approvedRow
    if ($representativeKeys.ContainsKey($key)) {
        continue
    }
    if (-not $includedRowsByKey.ContainsKey($key)) {
        throw "Approved page isn't present in the included representative manifest: $($approvedRow.PageUrl)"
    }

    $manifestRow = $includedRowsByKey[$key]
    if ((Get-PageWaveCandidateHash -Row $approvedRow) -ne
        (Get-PageWaveCandidateHash -Row $manifestRow)) {
        throw "Approved page doesn't match the reviewed manifest row: $($approvedRow.PageUrl)"
    }
    if (-not $passedPatterns.ContainsKey($manifestRow.PatternKey)) {
        throw "Page pattern doesn't have a passed representative: $($approvedRow.PageUrl)"
    }

    # PatternKey is authoritative from the reviewed manifest.
    $approvedRow.PatternKey = $manifestRow.PatternKey
    $pagesToTransform.Add($approvedRow)
}

if ($pagesToTransform.Count -eq 0) {
    throw "No additional pages remain after excluding validated representative pages."
}

# Keep preview and execution evidence separate and refuse implicit result replacement.
$pagesFolder = Split-Path -Parent $PagesPath
if ([string]::IsNullOrWhiteSpace($ResultPath)) {
    $resultName = if ($WhatIfPreference) {
        'selected-page-preview.csv'
    }
    elseif ($PreflightOnly) {
        'selected-page-preflight.csv'
    }
    else {
        'selected-page-results.csv'
    }
    $ResultPath = Join-Path $pagesFolder $resultName
}
if ([string]::IsNullOrWhiteSpace($LogFolder)) {
    $LogFolder = Join-Path $pagesFolder 'selected-page-logs'
}

# Preserve the High-impact confirmation behavior of this entry script when the shared
# engine asks permission for each page.
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

# Persist each page result at the moment it finishes, rather than after the full wave.
$resultWriter = New-PageWaveResultWriter -Path $ResultPath -Force:$Force
$ResultPath = $resultWriter.Path

$results = Invoke-AssessmentPageWave `
    -Rows $pagesToTransform `
    -ClientId $ClientId `
    -AuthenticationMode $AuthenticationMode `
    -ShouldProcessCallback $shouldProcess `
    -ResultWriter $resultWriter.Write `
    -TransformationProfile $transformationProfile `
    -IncludedManifestHash $includedManifestHash `
    -Tenant $Tenant `
    -Thumbprint $Thumbprint `
    -CertificatePath $CertificatePath `
    -CertificatePassword $CertificatePassword `
    -AzureEnvironment $AzureEnvironment `
    -LogFolder $LogFolder `
    -PreflightOnly:$PreflightOnly

# Surface a failing process exit after every individual error has been written.
$failed = @($results | Where-Object TransformationStatus -eq 'Failed')
if ($failed.Count -gt 0) {
    throw "$($failed.Count) selected page transformations failed. Review $ResultPath."
}

Write-Host "Selected page results: $ResultPath" -ForegroundColor Green
