<#
.SYNOPSIS
Transforms all approved representative Wiki and Web Part pages from an Assessment manifest.

.DESCRIPTION
Requires one or more rows marked Selected=true for every IncludePattern=true PatternKey.
Generated pages remain drafts and source pages aren't renamed or overwritten.

.EXAMPLE
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<client-id>" `
  -AuthenticationMode Interactive `
  -Confirm

.EXAMPLE
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<client-id>" `
  -AuthenticationMode CertificateThumbprint `
  -Tenant "contoso.onmicrosoft.com" `
  -Thumbprint "<certificate-thumbprint>" `
  -Confirm:$false
#>

[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'High')]
param(
    [Parameter(Mandatory = $true)]
    [string]$ManifestPath,

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
# Keep shared authentication, manifest validation, and conversion behavior identical
# between the representative and expanded-wave entry points.
. "$PSScriptRoot\PageTransformation.Common.ps1"

# Resolve the manifest once so result and log defaults stay next to the reviewed input.
if (-not (Test-Path -LiteralPath $ManifestPath -PathType Leaf)) {
    throw "Manifest not found: $ManifestPath"
}

$ManifestPath = (Resolve-Path -LiteralPath $ManifestPath).Path
$manifest = @(Import-Csv -LiteralPath $ManifestPath)
if ($manifest.Count -eq 0) {
    throw "The representative manifest is empty."
}

foreach ($column in @('PatternKey', 'IncludePattern', 'Selected', 'ExpectedVisibleContent', 'ValidationOwner')) {
    if ($manifest[0].PSObject.Properties.Name -notcontains $column) {
        throw "The representative manifest requires a $column column."
    }
}

# IncludePattern defines the patterns in the planned migration. Selected identifies
# the concrete pages that must prove those patterns before the wave can expand.
$includedRows = @(
    $manifest |
        Where-Object {
            ConvertTo-PageWaveBoolean `
                -Value $_.IncludePattern `
                -Name "IncludePattern for $($_.PageUrl)"
        }
)
$selectedRows = @(
    $includedRows |
        Where-Object {
            ConvertTo-PageWaveBoolean `
                -Value $_.Selected `
                -Name "Selected for $($_.PageUrl)"
        }
)

if ($includedRows.Count -eq 0) {
    throw "No patterns are marked IncludePattern=true."
}
if ($selectedRows.Count -eq 0) {
    throw "No pages are marked Selected=true."
}

# A representative run is incomplete when any included pattern lacks a selected page.
$includedPatterns = @($includedRows.PatternKey | Sort-Object -Unique)
$selectedPatterns = @($selectedRows.PatternKey | Sort-Object -Unique)
$missingPatterns = @($includedPatterns | Where-Object { $_ -notin $selectedPatterns })
if ($missingPatterns.Count -gt 0) {
    throw "Select at least one representative page for each included pattern: $($missingPatterns -join ', ')"
}

foreach ($row in $selectedRows) {
    if ([string]::IsNullOrWhiteSpace($row.PatternKey)) {
        throw "Every selected representative page needs PatternKey: $($row.PageUrl)"
    }
    if ([string]::IsNullOrWhiteSpace($row.ExpectedVisibleContent) -or
        [string]::IsNullOrWhiteSpace($row.ValidationOwner)) {
        throw "Every selected representative page needs ExpectedVisibleContent and ValidationOwner: $($row.PageUrl)"
    }
}

# Preview runs use a separate result name. Existing evidence is never replaced unless
# the caller explicitly supplies -Force.
$manifestFolder = Split-Path -Parent $ManifestPath
if ([string]::IsNullOrWhiteSpace($ResultPath)) {
    $resultName = if ($WhatIfPreference) {
        'representative-page-preview.csv'
    }
    elseif ($PreflightOnly) {
        'representative-page-preflight.csv'
    }
    else {
        'representative-page-results.csv'
    }
    $ResultPath = Join-Path $manifestFolder $resultName
}
if ([string]::IsNullOrWhiteSpace($LogFolder)) {
    $LogFolder = Join-Path $manifestFolder 'representative-page-logs'
}

# Capture the entry script's High-impact ShouldProcess context. The shared engine calls
# this closure before it authenticates or reads SharePoint.
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
# Validate every included row before sealing the complete migration scope.
Test-AssessmentPageWaveRows -Rows $includedRows

# The profile binds validation to the exact script version, PnP.PowerShell version,
# and exact page wave scripts used during this representative run.
$transformationProfile = Get-PageWaveTransformationProfile
$includedManifestHash = Get-PageWaveIncludedManifestHash -Rows $includedRows

# Reserve the result file before the first SharePoint write, then append every result
# immediately so an interrupted wave retains completed evidence.
$resultWriter = New-PageWaveResultWriter -Path $ResultPath -Force:$Force
$ResultPath = $resultWriter.Path

$results = Invoke-AssessmentPageWave `
    -Rows $selectedRows `
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

# The detailed per-page failures are already durable in the result CSV.
$failed = @($results | Where-Object TransformationStatus -eq 'Failed')
if ($failed.Count -gt 0) {
    throw "$($failed.Count) representative page transformations failed. Review $ResultPath."
}

Write-Host "Representative page results: $ResultPath" -ForegroundColor Green
