Set-StrictMode -Version Latest

# CSV values arrive as strings. Parse safety-critical values strictly instead of
# treating blanks or misspellings as False.
function ConvertTo-PageWaveBoolean {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Value,

        [Parameter(Mandatory = $false)]
        [string]$Name = 'Boolean value'
    )

    if ($Value -is [bool]) {
        return $Value
    }

    $text = [string]$Value
    if ([string]::IsNullOrWhiteSpace($text)) {
        throw "$Name can't be empty."
    }

    switch ($text.Trim().ToLowerInvariant()) {
        { $_ -in @('true', 'yes', '1') } { return $true }
        { $_ -in @('false', 'no', '0') } { return $false }
        default { throw "$Name must be True or False. Received '$text'." }
    }
}

# Use bounded integer parsing for Assessment counts and readiness percentages.
function ConvertTo-PageWaveInteger {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Value,

        [Parameter(Mandatory = $true)]
        [string]$Name,

        [Parameter(Mandatory = $false)]
        [int]$Minimum = 0,

        [Parameter(Mandatory = $false)]
        [int]$Maximum = [int]::MaxValue
    )

    $parsed = 0
    if (-not [int]::TryParse([string]$Value, [ref]$parsed) -or
        $parsed -lt $Minimum -or
        $parsed -gt $Maximum) {
        throw "$Name must be an integer from $Minimum through $Maximum. Received '$Value'."
    }

    return $parsed
}

# Reconstruct the exact web URL from the Assessment SiteUrl + WebUrl contract.
function Get-PageWaveSourceUrl {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Row
    )

    if ([string]::IsNullOrWhiteSpace($Row.SiteUrl) -or
        [string]::IsNullOrWhiteSpace($Row.WebUrl)) {
        throw "SiteUrl and WebUrl are required for $($Row.PageUrl)."
    }

    if ($Row.WebUrl -eq '/') {
        return $Row.SiteUrl.TrimEnd('/')
    }

    return "$($Row.SiteUrl.TrimEnd('/'))$($Row.WebUrl)"
}

# Read optional manifest/result properties without breaking StrictMode error handling.
function Get-PageWaveValue {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Row,

        [Parameter(Mandatory = $true)]
        [string]$Name
    )

    if ($Row.PSObject.Properties.Name -contains $Name) {
        return $Row.$Name
    }

    return ''
}

# This key uniquely identifies one assessed page across scans, sites, and webs.
function Get-PageWaveKey {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Row
    )

    return (
        '{0}|{1}|{2}|{3}' -f
            (Get-PageWaveValue -Row $Row -Name 'ScanId'),
            (Get-PageWaveValue -Row $Row -Name 'SiteUrl'),
            (Get-PageWaveValue -Row $Row -Name 'WebUrl'),
            (Get-PageWaveValue -Row $Row -Name 'PageUrl')
    ).ToLowerInvariant()
}

# Hash every transformation-relevant manifest value. The expansion script uses this
# hash to prove that the validated representative row hasn't changed.
function Get-PageWaveManifestHash {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Row
    )

    $fields = @(
        'ScanId',
        'SiteUrl',
        'WebUrl',
        'PageUrl',
        'PageType',
        'ListUrl',
        'ListTitle',
        'ListId',
        'ModifiedAt',
        'AssessmentTimeZoneId',
        'Layout',
        'HomePage',
        'WebPartCount',
        'MappingPercentage',
        'UnmappedWebParts',
        'WebPartSignature',
        'PatternKey',
        'IncludePattern',
        'Selected',
        'ExpectedVisibleContent',
        'ValidationOwner'
    )
    $payload = ($fields | ForEach-Object { [string](Get-PageWaveValue -Row $Row -Name $_) }) -join [char]0x1f
    $sha256 = [Security.Cryptography.SHA256]::Create()
    try {
        return [Convert]::ToHexString(
            $sha256.ComputeHash([Text.Encoding]::UTF8.GetBytes($payload))
        ).ToLowerInvariant()
    }
    finally {
        $sha256.Dispose()
    }
}

function Get-PageWaveCandidateHash {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Row
    )

    $fields = @(
        'ScanId',
        'SiteUrl',
        'WebUrl',
        'PageUrl',
        'PageType',
        'ListUrl',
        'ListTitle',
        'ListId',
        'ModifiedAt',
        'AssessmentTimeZoneId',
        'Layout',
        'HomePage',
        'WebPartCount',
        'MappingPercentage',
        'UnmappedWebParts',
        'WebPartSignature',
        'PatternKey',
        'IncludePattern'
    )
    $payload = ($fields | ForEach-Object { [string](Get-PageWaveValue -Row $Row -Name $_) }) -join [char]0x1f
    $sha256 = [Security.Cryptography.SHA256]::Create()
    try {
        return [Convert]::ToHexString(
            $sha256.ComputeHash([Text.Encoding]::UTF8.GetBytes($payload))
        ).ToLowerInvariant()
    }
    finally {
        $sha256.Dispose()
    }
}

function Get-PageWaveIncludedManifestHash {
    param(
        [Parameter(Mandatory = $true)]
        [object[]]$Rows
    )

    $entries = @(
        $Rows |
            ForEach-Object {
                [pscustomobject]@{
                    PageKey = Get-PageWaveKey -Row $_
                    CandidateHash = Get-PageWaveCandidateHash -Row $_
                }
            } |
            Sort-Object PageKey, CandidateHash |
            ForEach-Object { '{0}|{1}' -f $_.PageKey, $_.CandidateHash }
    )
    $payload = $entries -join [char]0x1e
    $sha256 = [Security.Cryptography.SHA256]::Create()
    try {
        return [Convert]::ToHexString(
            $sha256.ComputeHash([Text.Encoding]::UTF8.GetBytes($payload))
        ).ToLowerInvariant()
    }
    finally {
        $sha256.Dispose()
    }
}

# Validation is meaningful only when the same scripts, PnP.PowerShell version, and Web
# Part transformation implementation are used for both waves.
function Get-PageWaveTransformationProfile {
    Import-Module PnP.PowerShell -ErrorAction Stop
    $module = Get-Module PnP.PowerShell | Sort-Object Version -Descending | Select-Object -First 1
    if (-not $module) {
        throw "PnP.PowerShell isn't loaded."
    }

    $scriptNames = @(
        'PageTransformation.Common.ps1',
        'Convert-RepresentativePages.ps1',
        'Convert-SelectedPages.ps1'
    )
    $scriptHashes = @{}
    foreach ($scriptName in $scriptNames) {
        $scriptPath = Join-Path $PSScriptRoot $scriptName
        if (-not (Test-Path -LiteralPath $scriptPath -PathType Leaf)) {
            throw "Required page wave script not found: $scriptPath"
        }
        $scriptHashes[$scriptName] = (
            Get-FileHash -LiteralPath $scriptPath -Algorithm SHA256
        ).Hash.ToLowerInvariant()
    }

    $scriptVersion = '1.0.0'
    $payload = (
        "Script=$scriptVersion",
        "PnP=$($module.Version)",
        "Common=$($scriptHashes['PageTransformation.Common.ps1'])",
        "Representative=$($scriptHashes['Convert-RepresentativePages.ps1'])",
        "Selected=$($scriptHashes['Convert-SelectedPages.ps1'])",
        'Mapping=embedded-default',
        'Draft=True',
        'UniquePermissions=Excluded',
        'ModifiedSources=Excluded'
    ) -join '|'
    $sha256 = [Security.Cryptography.SHA256]::Create()
    try {
        $profileHash = [Convert]::ToHexString(
            $sha256.ComputeHash([Text.Encoding]::UTF8.GetBytes($payload))
        ).ToLowerInvariant()
    }
    finally {
        $sha256.Dispose()
    }

    return [pscustomobject]@{
        Hash = $profileHash
        ScriptVersion = $scriptVersion
        PnPPowerShellVersion = $module.Version.ToString()
        CommonScriptHash = $scriptHashes['PageTransformation.Common.ps1']
        RepresentativeScriptHash = $scriptHashes['Convert-RepresentativePages.ps1']
        SelectedScriptHash = $scriptHashes['Convert-SelectedPages.ps1']
        WebPartMappingHash = 'embedded-default'
    }
}

# Validate unattended inputs before result files are reserved or page processing begins.
function Test-PageWaveAuthentication {
    param(
        [Parameter(Mandatory = $true)]
        [ValidateSet('Interactive', 'DeviceLogin', 'CertificateThumbprint', 'CertificateFile')]
        [string]$AuthenticationMode,

        [Parameter(Mandatory = $false)]
        [string]$Tenant,

        [Parameter(Mandatory = $false)]
        [string]$Thumbprint,

        [Parameter(Mandatory = $false)]
        [string]$CertificatePath
    )

    switch ($AuthenticationMode) {
        'DeviceLogin' {
            if ([string]::IsNullOrWhiteSpace($Tenant)) {
                throw "Tenant is required for DeviceLogin authentication."
            }
        }
        'CertificateThumbprint' {
            if ([string]::IsNullOrWhiteSpace($Tenant) -or
                [string]::IsNullOrWhiteSpace($Thumbprint)) {
                throw "Tenant and Thumbprint are required for CertificateThumbprint authentication."
            }
        }
        'CertificateFile' {
            if ([string]::IsNullOrWhiteSpace($Tenant) -or
                [string]::IsNullOrWhiteSpace($CertificatePath)) {
                throw "Tenant and CertificatePath are required for CertificateFile authentication."
            }
            if (-not (Test-Path -LiteralPath $CertificatePath -PathType Leaf)) {
                throw "Certificate file not found: $CertificatePath"
            }
        }
    }
}

# Reserve the output path before the first SharePoint write. The returned callback
# appends one durable result row after every page attempt.
function New-PageWaveResultWriter {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,

        [Parameter(Mandatory = $false)]
        [switch]$Force
    )

    $fullPath = if ([IO.Path]::IsPathRooted($Path)) {
        [IO.Path]::GetFullPath($Path)
    }
    else {
        [IO.Path]::GetFullPath((Join-Path (Get-Location).Path $Path))
    }
    $folder = Split-Path -Parent $fullPath
    if ([string]::IsNullOrWhiteSpace($folder)) {
        $folder = (Get-Location).Path
    }
    New-Item -ItemType Directory -Path $folder -Force -WhatIf:$false | Out-Null

    if ((Test-Path -LiteralPath $fullPath) -and -not $Force) {
        throw "Result file already exists. Use -Force to replace it: $fullPath"
    }

    $fileMode = if ($Force) { [IO.FileMode]::Create } else { [IO.FileMode]::CreateNew }
    $stream = [IO.File]::Open($fullPath, $fileMode, [IO.FileAccess]::Write, [IO.FileShare]::None)
    $stream.Dispose()

    $state = [pscustomobject]@{ First = $true }
    $writer = {
        param($Row)

        if ($state.First) {
            $Row | Export-Csv -LiteralPath $fullPath -NoTypeInformation -Force -ErrorAction Stop -WhatIf:$false
            $state.First = $false
        }
        else {
            $Row | Export-Csv -LiteralPath $fullPath -NoTypeInformation -Append -ErrorAction Stop -WhatIf:$false
        }
    }.GetNewClosure()

    return [pscustomobject]@{
        Path = $fullPath
        Write = $writer
    }
}

# Build a connection without logging secrets. Connections are cached by web by the
# calling engine.
function New-PageWaveConnection {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Url,

        [Parameter(Mandatory = $true)]
        [string]$ClientId,

        [Parameter(Mandatory = $true)]
        [ValidateSet('Interactive', 'DeviceLogin', 'CertificateThumbprint', 'CertificateFile')]
        [string]$AuthenticationMode,

        [Parameter(Mandatory = $false)]
        [string]$Tenant,

        [Parameter(Mandatory = $false)]
        [string]$Thumbprint,

        [Parameter(Mandatory = $false)]
        [string]$CertificatePath,

        [Parameter(Mandatory = $false)]
        [securestring]$CertificatePassword,

        [Parameter(Mandatory = $false)]
        [string]$AzureEnvironment = 'Production'
    )

    $parameters = @{
        Url = $Url
        ClientId = $ClientId
        ReturnConnection = $true
        AzureEnvironment = $AzureEnvironment
    }

    switch ($AuthenticationMode) {
        'Interactive' {
            $parameters.Interactive = $true
        }
        'DeviceLogin' {
            if ([string]::IsNullOrWhiteSpace($Tenant)) {
                throw "Tenant is required for DeviceLogin authentication."
            }

            $parameters.DeviceLogin = $true
            $parameters.Tenant = $Tenant
        }
        'CertificateThumbprint' {
            if ([string]::IsNullOrWhiteSpace($Tenant) -or
                [string]::IsNullOrWhiteSpace($Thumbprint)) {
                throw "Tenant and Thumbprint are required for CertificateThumbprint authentication."
            }

            $parameters.Tenant = $Tenant
            $parameters.Thumbprint = $Thumbprint
        }
        'CertificateFile' {
            if ([string]::IsNullOrWhiteSpace($Tenant) -or
                [string]::IsNullOrWhiteSpace($CertificatePath)) {
                throw "Tenant and CertificatePath are required for CertificateFile authentication."
            }
            if (-not (Test-Path -LiteralPath $CertificatePath -PathType Leaf)) {
                throw "Certificate file not found: $CertificatePath"
            }

            $parameters.Tenant = $Tenant
            $parameters.CertificatePath = (Resolve-Path -LiteralPath $CertificatePath).Path
            if ($CertificatePassword) {
                $parameters.CertificatePassword = $CertificatePassword
            }
        }
    }

    Connect-PnPOnline @parameters
}

# Validate the whole manifest before any page is transformed. This prevents a malformed
# later row from stopping a wave after earlier pages have already been created.
function Test-AssessmentPageWaveRows {
    param(
        [Parameter(Mandatory = $true)]
        [object[]]$Rows
    )

    $requiredProperties = @(
        'ScanId',
        'SiteUrl',
        'WebUrl',
        'PageUrl',
        'PageType',
        'ListUrl',
        'ListId',
        'ModifiedAt',
        'AssessmentTimeZoneId',
        'HomePage',
        'WebPartCount',
        'MappingPercentage',
        'UnmappedWebParts'
    )
    $requiredValues = @(
        'ScanId',
        'SiteUrl',
        'WebUrl',
        'PageUrl',
        'PageType',
        'ListUrl',
        'ListId',
        'ModifiedAt',
        'AssessmentTimeZoneId'
    )
    $keys = @{}

    foreach ($row in $Rows) {
        foreach ($requiredProperty in $requiredProperties) {
            if ($row.PSObject.Properties.Name -notcontains $requiredProperty) {
                throw "$requiredProperty is required for every manifest row."
            }
        }
        foreach ($requiredValue in $requiredValues) {
            if ([string]::IsNullOrWhiteSpace($row.$requiredValue)) {
                throw "$requiredValue can't be empty."
            }
        }

        $listId = [guid]::Empty
        if (-not [guid]::TryParse([string]$row.ListId, [ref]$listId)) {
            throw "ListId must be a GUID: $($row.ListId)"
        }

        $modifiedAt = [datetime]::MinValue
        if (-not [datetime]::TryParseExact(
            [string]$row.ModifiedAt,
            'MM/dd/yyyy HH:mm:ss',
            [Globalization.CultureInfo]::InvariantCulture,
            [Globalization.DateTimeStyles]::None,
            [ref]$modifiedAt
        )) {
            throw "ModifiedAt must use MM/dd/yyyy HH:mm:ss: $($row.ModifiedAt)"
        }
        try {
            [TimeZoneInfo]::FindSystemTimeZoneById([string]$row.AssessmentTimeZoneId) | Out-Null
        }
        catch {
            throw "AssessmentTimeZoneId isn't available on this machine: $($row.AssessmentTimeZoneId)"
        }

        ConvertTo-PageWaveBoolean -Value $row.HomePage -Name "HomePage for $($row.PageUrl)" | Out-Null
        ConvertTo-PageWaveInteger -Value $row.WebPartCount -Name "WebPartCount for $($row.PageUrl)" | Out-Null
        ConvertTo-PageWaveInteger `
            -Value $row.MappingPercentage `
            -Name "MappingPercentage for $($row.PageUrl)" `
            -Maximum 100 | Out-Null

        $key = Get-PageWaveKey -Row $row
        if ($keys.ContainsKey($key)) {
            throw "Duplicate manifest row: $($row.PageUrl)"
        }
        $keys[$key] = $true
    }
}

# Shared execution engine used by both public entry scripts.
function Invoke-AssessmentPageWave {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $true)]
        [object[]]$Rows,

        [Parameter(Mandatory = $true)]
        [string]$ClientId,

        [Parameter(Mandatory = $true)]
        [ValidateSet('Interactive', 'DeviceLogin', 'CertificateThumbprint', 'CertificateFile')]
        [string]$AuthenticationMode,

        [Parameter(Mandatory = $true)]
        [scriptblock]$ShouldProcessCallback,

        [Parameter(Mandatory = $true)]
        [scriptblock]$ResultWriter,

        [Parameter(Mandatory = $true)]
        [object]$TransformationProfile,

        [Parameter(Mandatory = $true)]
        [string]$IncludedManifestHash,

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
        [string]$LogFolder = (Join-Path (Get-Location) 'page-transformation-logs'),

        [Parameter(Mandatory = $false)]
        [switch]$PreflightOnly
    )

    if ($PSVersionTable.PSVersion -lt [version]'7.4.0') {
        throw "PnP PowerShell requires PowerShell 7.4.0 or later."
    }

    # Repeat the entry-point validation because this function can also be invoked directly.
    Test-PageWaveAuthentication `
        -AuthenticationMode $AuthenticationMode `
        -Tenant $Tenant `
        -Thumbprint $Thumbprint `
        -CertificatePath $CertificatePath
    Test-AssessmentPageWaveRows -Rows $Rows

    Import-Module PnP.PowerShell -ErrorAction Stop

    # WhatIf doesn't create a SharePoint connection or log folder, but still writes a
    # preview result CSV through the supplied ResultWriter.
    if (Test-Path -LiteralPath $LogFolder -PathType Container) {
        $LogFolder = (Resolve-Path -LiteralPath $LogFolder).Path
    }
    else {
        $LogFolder = if ([IO.Path]::IsPathRooted($LogFolder)) {
            [IO.Path]::GetFullPath($LogFolder)
        }
        else {
            [IO.Path]::GetFullPath((Join-Path (Get-Location).Path $LogFolder))
        }
        if (-not $WhatIfPreference) {
            New-Item -ItemType Directory -Path $LogFolder -Force | Out-Null
        }
    }

    $connections = @{}
    $connectionErrors = @{}
    $webs = @{}
    $siteTimeZones = @{}
    $results = [Collections.Generic.List[object]]::new()

    foreach ($row in $Rows) {
        $startedAt = Get-Date
        $sourceWebUrl = $null
        $plannedAction = $null
        $plannedTargetPageUrl = $null
        $targetExists = 'NotChecked'
        $targetPageUrl = $null
        $status = 'Failed'
        $errorMessage = $null
        $sourceItemId = $null
        $sourceUniqueId = $null
        $observedListId = $null
        $observedModifiedAt = $null
        $approvedModifiedUtc = $null
        $observedModifiedUtc = $null
        $siteTimeZoneId = $null
        $siteTimeZoneDescription = $null
        $logPath = $null
        $logFilesBefore = @()
        $conversionAttempted = $false

        try {
            # Reject page categories that require a separately reviewed migration path.
            if ($row.PageType -notin @('WikiPage', 'WebPartPage')) {
                throw "Page type '$($row.PageType)' isn't supported by these Wiki/Web Part wave scripts."
            }
            if (ConvertTo-PageWaveBoolean -Value $row.HomePage -Name "HomePage for $($row.PageUrl)") {
                throw "Home pages require a separate approved migration path: $($row.PageUrl)"
            }
            $webPartCount = ConvertTo-PageWaveInteger `
                -Value $row.WebPartCount `
                -Name "WebPartCount for $($row.PageUrl)"
            $mappingPercentage = ConvertTo-PageWaveInteger `
                -Value $row.MappingPercentage `
                -Name "MappingPercentage for $($row.PageUrl)" `
                -Maximum 100

            if ($webPartCount -eq 0) {
                throw "Zero-part pages are excluded from these batch scripts: $($row.PageUrl)"
            }
            if ($mappingPercentage -ne 100 -or
                -not [string]::IsNullOrWhiteSpace($row.UnmappedWebParts)) {
                throw "These batch scripts require Assessment readiness of 100 with no unmapped Web Parts: $($row.PageUrl)"
            }

            $sourceWebUrl = Get-PageWaveSourceUrl -Row $row
            $sourceDirectory = ([IO.Path]::GetDirectoryName($row.PageUrl) -replace '\\', '/').TrimEnd('/')
            $sourceFileName = [IO.Path]::GetFileName($row.PageUrl)
            $plannedTargetPageUrl = "$sourceDirectory/Migrated_$sourceFileName"
            $plannedAction = if ($PreflightOnly) {
                "Validate the source and target plan for $($row.PageUrl)"
            }
            else {
                "Create a draft modern page from $($row.PageUrl)"
            }

            # Ask permission before authentication or any tenant read. -WhatIf exits here.
            if (-not (& $ShouldProcessCallback $sourceWebUrl $plannedAction)) {
                $status = 'Skipped'
                $errorMessage = "The operation wasn't approved or was run with -WhatIf."
                continue
            }

            # Reuse successful connections and avoid repeating a known authentication
            # failure for every remaining page in the same web.
            if ($connectionErrors.ContainsKey($sourceWebUrl)) {
                throw $connectionErrors[$sourceWebUrl]
            }
            if (-not $connections.ContainsKey($sourceWebUrl)) {
                try {
                    $connections[$sourceWebUrl] = New-PageWaveConnection `
                        -Url $sourceWebUrl `
                        -ClientId $ClientId `
                        -AuthenticationMode $AuthenticationMode `
                        -Tenant $Tenant `
                        -Thumbprint $Thumbprint `
                        -CertificatePath $CertificatePath `
                        -CertificatePassword $CertificatePassword `
                        -AzureEnvironment $AzureEnvironment
                }
                catch {
                    $connectionErrors[$sourceWebUrl] = $_.Exception.Message
                    throw
                }
            }
            $connection = $connections[$sourceWebUrl]

            # Assessment HomePage can become stale without changing the page itself.
            # Re-read the current welcome page immediately before conversion.
            if (-not $webs.ContainsKey($sourceWebUrl)) {
                $webs[$sourceWebUrl] = Get-PnPWeb `
                    -Includes WelcomePage, ServerRelativeUrl, RegionalSettings `
                    -Connection $connection
                $siteTimeZones[$sourceWebUrl] = Get-PnPProperty `
                    -ClientObject $webs[$sourceWebUrl].RegionalSettings `
                    -Property TimeZone `
                    -Connection $connection
                Get-PnPProperty `
                    -ClientObject $siteTimeZones[$sourceWebUrl] `
                    -Property Id, Description `
                    -Connection $connection | Out-Null
            }
            $web = $webs[$sourceWebUrl]
            $siteTimeZone = $siteTimeZones[$sourceWebUrl]
            $siteTimeZoneId = $siteTimeZone.Id
            $siteTimeZoneDescription = $siteTimeZone.Description
            if (-not [string]::IsNullOrWhiteSpace($web.WelcomePage)) {
                $currentHomePageUrl = (
                    '{0}/{1}' -f
                        $web.ServerRelativeUrl.TrimEnd('/'),
                        $web.WelcomePage.TrimStart('/')
                ).Replace('//', '/')
                if ($currentHomePageUrl.Equals($row.PageUrl, [StringComparison]::OrdinalIgnoreCase)) {
                    throw "The page is currently the web home page and is excluded: $($row.PageUrl)"
                }
            }

            $libraryPath = $row.ListUrl.TrimEnd('/')
            if (-not $row.PageUrl.StartsWith("$libraryPath/", [StringComparison]::OrdinalIgnoreCase)) {
                throw "PageUrl isn't under ListUrl: $($row.PageUrl)"
            }

            # Resolve the assessed list by GUID, then verify its URL. This prevents a
            # reused item ID in another library from being transformed.
            $sourceList = Get-PnPList `
                -Identity ([guid]$row.ListId) `
                -ThrowExceptionIfListNotFound `
                -Connection $connection
            $observedListId = $sourceList.Id.ToString()
            if ($sourceList.Id -ne [guid]$row.ListId) {
                throw "ListId changed for $($row.PageUrl). Rerun Assessment before transforming this page."
            }

            Get-PnPProperty -ClientObject $sourceList -Property RootFolder -Connection $connection | Out-Null
            Get-PnPProperty `
                -ClientObject $sourceList.RootFolder `
                -Property ServerRelativeUrl `
                -Connection $connection | Out-Null
            if (-not $sourceList.RootFolder.ServerRelativeUrl.Equals(
                $libraryPath,
                [StringComparison]::OrdinalIgnoreCase
            )) {
                throw "ListUrl changed for $($row.PageUrl). Rerun Assessment before transforming this page."
            }

            # Resolve the exact approved file and prove that it still belongs to the
            # assessed list.
            $sourceItem = Get-PnPFile `
                -Url $row.PageUrl `
                -AsListItem `
                -ThrowExceptionIfFileNotFound `
                -Connection $connection
            $sourceItemId = $sourceItem.Id

            Get-PnPProperty -ClientObject $sourceItem -Property ParentList -Connection $connection | Out-Null
            Get-PnPProperty -ClientObject $sourceItem.ParentList -Property Id -Connection $connection | Out-Null
            if ($sourceItem.ParentList.Id -ne $sourceList.Id) {
                throw "The approved file no longer belongs to the assessed list: $($row.PageUrl)"
            }

            # Assessment exports runner-local time without an offset, while PnP returns
            # site-local time. Normalize both through their recorded time zones before
            # deciding whether the source changed.
            $observedFileRef = [string]$sourceItem.FieldValues['FileRef']
            if (-not $observedFileRef.Equals($row.PageUrl, [StringComparison]::OrdinalIgnoreCase)) {
                throw "The current file URL doesn't match the approved PageUrl: $($row.PageUrl)"
            }

            $sourceUniqueId = [string]$sourceItem.FieldValues['UniqueId']
            $observedModified = [datetime]$sourceItem.FieldValues['Modified']
            $observedModifiedAt = $observedModified.ToString(
                'MM/dd/yyyy HH:mm:ss',
                [Globalization.CultureInfo]::InvariantCulture
            )
            $assessmentLocal = [datetime]::ParseExact(
                [string]$row.ModifiedAt,
                'MM/dd/yyyy HH:mm:ss',
                [Globalization.CultureInfo]::InvariantCulture,
                [Globalization.DateTimeStyles]::None
            )
            $assessmentTimeZone = [TimeZoneInfo]::FindSystemTimeZoneById(
                [string]$row.AssessmentTimeZoneId
            )
            $approvedModifiedUtc = [TimeZoneInfo]::ConvertTimeToUtc(
                [datetime]::SpecifyKind($assessmentLocal, [DateTimeKind]::Unspecified),
                $assessmentTimeZone
            )

            $siteUtcResult = $siteTimeZone.LocalTimeToUTC($observedModified)
            Invoke-PnPQuery -Connection $connection
            $observedModifiedUtc = [datetime]$siteUtcResult.Value

            if ([Math]::Abs(($approvedModifiedUtc - $observedModifiedUtc).TotalSeconds) -ge 1) {
                throw "The source was modified after Assessment. Rerun Assessment before transforming this page: $($row.PageUrl)"
            }

            # Batch scripts deliberately exclude unique ACLs. Silent permission-copy
            # failures could otherwise expose the draft through broader inheritance.
            $hasUniquePermissions = Get-PnPProperty `
                -ClientObject $sourceItem `
                -Property HasUniqueRoleAssignments `
                -Connection $connection

            if ($hasUniquePermissions) {
                throw "The source has unique permissions and is excluded from these batch scripts: $($row.PageUrl)"
            }

            # Keep source and target in the same default SitePages permission scope.
            $webServerRelativeUrl = $web.ServerRelativeUrl.TrimEnd('/')
            $libraryRelativeUrl = if ([string]::IsNullOrWhiteSpace($webServerRelativeUrl)) {
                $sourceList.RootFolder.ServerRelativeUrl.TrimStart('/')
            }
            else {
                $sourceList.RootFolder.ServerRelativeUrl.Substring($webServerRelativeUrl.Length).TrimStart('/')
            }
            if (-not $libraryRelativeUrl.Equals('SitePages', [StringComparison]::OrdinalIgnoreCase)) {
                throw "These batch scripts only support pages in the default SitePages library: $($row.PageUrl)"
            }

            $existingTarget = Get-PnPFile `
                -Url $plannedTargetPageUrl `
                -AsListItem `
                -Connection $connection
            $targetExists = $null -ne $existingTarget
            if ($targetExists) {
                throw "The planned target already exists and must be reviewed instead of overwritten: $plannedTargetPageUrl"
            }
            if ($PreflightOnly) {
                $status = 'PreflightPassed'
                continue
            }

            # Always preserve the source, create a draft, skip ACL copying, and log.
            # Overwrite and TakeSourcePageName are intentionally unavailable here.
            $parameters = @{
                Identity = $sourceItem.Id
                Connection = $connection
                DontPublish = $true
                LogType = 'File'
                LogFolder = $LogFolder
                LogVerbose = $true
                SkipItemLevelPermissionCopyToClientSidePage = $true
            }

            # ConvertTo-PnPPage returns the created server-relative URL. A missing URL is
            # treated as a failure even if the cmdlet didn't throw.
            $logFilesBefore = @(
                Get-ChildItem -LiteralPath $LogFolder -File -ErrorAction SilentlyContinue |
                    Select-Object -ExpandProperty FullName
            )
            $conversionAttempted = $true
            $conversionOutput = @(ConvertTo-PnPPage @parameters)
            $targetPageUrl = $conversionOutput |
                Where-Object { $_ -is [string] -and -not [string]::IsNullOrWhiteSpace($_) } |
                Select-Object -Last 1

            if ([string]::IsNullOrWhiteSpace($targetPageUrl)) {
                throw "ConvertTo-PnPPage didn't return a target page URL."
            }

            $status = 'Created'
        }
        catch {
            $errorMessage = $_.Exception.Message
        }
        finally {
            if ($conversionAttempted) {
                $logPath = Get-ChildItem -LiteralPath $LogFolder -File -ErrorAction SilentlyContinue |
                    Where-Object { $_.FullName -notin $logFilesBefore } |
                    Sort-Object LastWriteTimeUtc -Descending |
                    Select-Object -First 1 -ExpandProperty FullName
            }

            # Persist success, failure, skip, observed source identity, and validation
            # profile before moving to the next page.
            $resultRow = [pscustomobject][ordered]@{
                ManifestRowHash = Get-PageWaveManifestHash -Row $row
                CandidateRowHash = Get-PageWaveCandidateHash -Row $row
                IncludedManifestHash = $IncludedManifestHash
                TransformationProfileHash = $TransformationProfile.Hash
                ScriptVersion = $TransformationProfile.ScriptVersion
                PnPPowerShellVersion = $TransformationProfile.PnPPowerShellVersion
                CommonScriptHash = $TransformationProfile.CommonScriptHash
                RepresentativeScriptHash = $TransformationProfile.RepresentativeScriptHash
                SelectedScriptHash = $TransformationProfile.SelectedScriptHash
                WebPartMappingHash = $TransformationProfile.WebPartMappingHash
                ScanId = Get-PageWaveValue -Row $row -Name 'ScanId'
                SiteUrl = Get-PageWaveValue -Row $row -Name 'SiteUrl'
                WebUrl = Get-PageWaveValue -Row $row -Name 'WebUrl'
                PageUrl = Get-PageWaveValue -Row $row -Name 'PageUrl'
                PageType = Get-PageWaveValue -Row $row -Name 'PageType'
                Layout = Get-PageWaveValue -Row $row -Name 'Layout'
                PatternKey = Get-PageWaveValue -Row $row -Name 'PatternKey'
                ExpectedVisibleContent = Get-PageWaveValue -Row $row -Name 'ExpectedVisibleContent'
                ValidationOwner = Get-PageWaveValue -Row $row -Name 'ValidationOwner'
                SourceWebUrl = $sourceWebUrl
                SourceItemId = $sourceItemId
                SourceUniqueId = $sourceUniqueId
                ObservedListId = $observedListId
                ApprovedModifiedAt = Get-PageWaveValue -Row $row -Name 'ModifiedAt'
                ObservedModifiedAt = $observedModifiedAt
                AssessmentTimeZoneId = Get-PageWaveValue -Row $row -Name 'AssessmentTimeZoneId'
                ApprovedModifiedUtc = if ($approvedModifiedUtc) { $approvedModifiedUtc.ToString('o') } else { '' }
                ObservedModifiedUtc = if ($observedModifiedUtc) { $observedModifiedUtc.ToString('o') } else { '' }
                SiteTimeZoneId = $siteTimeZoneId
                SiteTimeZoneDescription = $siteTimeZoneDescription
                MappingPercentage = Get-PageWaveValue -Row $row -Name 'MappingPercentage'
                UnmappedWebParts = Get-PageWaveValue -Row $row -Name 'UnmappedWebParts'
                PlannedAction = $plannedAction
                PlannedTargetPageUrl = $plannedTargetPageUrl
                TargetExists = $targetExists
                TargetPageUrl = $targetPageUrl
                TransformationStatus = $status
                ValidationStatus = if ($status -eq 'Created') { 'Pending' } else { '' }
                LogFolder = $LogFolder
                LogPath = $logPath
                ValidationNotes = ''
                ValidatedBy = ''
                ValidatedAt = ''
                StartedAt = $startedAt.ToString('o')
                FinishedAt = (Get-Date).ToString('o')
                Error = $errorMessage
            }
            $results.Add($resultRow)
            & $ResultWriter $resultRow
        }
    }

    return $results
}
