Set-StrictMode -Version Latest

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

function Get-PageWaveTransformationProfile {
    param(
        [Parameter(Mandatory = $false)]
        [string]$WebPartMappingFile
    )

    Import-Module PnP.PowerShell -ErrorAction Stop
    $module = Get-Module PnP.PowerShell | Sort-Object Version -Descending | Select-Object -First 1
    if (-not $module) {
        throw "PnP.PowerShell isn't loaded."
    }

    $mappingHash = 'embedded-default'
    if (-not [string]::IsNullOrWhiteSpace($WebPartMappingFile)) {
        if (-not (Test-Path -LiteralPath $WebPartMappingFile -PathType Leaf)) {
            throw "Web Part mapping file not found: $WebPartMappingFile"
        }
        $WebPartMappingFile = (Resolve-Path -LiteralPath $WebPartMappingFile).Path
        $mappingHash = (Get-FileHash -LiteralPath $WebPartMappingFile -Algorithm SHA256).Hash.ToLowerInvariant()
    }

    $scriptVersion = '1.0.0'
    $payload = "Script=$scriptVersion|PnP=$($module.Version)|Mapping=$mappingHash|Draft=True|UniquePermissions=Excluded"
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
        WebPartMappingHash = $mappingHash
        WebPartMappingFile = $WebPartMappingFile
    }
}

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
        'ModifiedAt'
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
        [switch]$AllowModifiedPages
    )

    if ($PSVersionTable.PSVersion -lt [version]'7.4.0') {
        throw "PnP PowerShell requires PowerShell 7.4.0 or later."
    }

    Test-PageWaveAuthentication `
        -AuthenticationMode $AuthenticationMode `
        -Tenant $Tenant `
        -Thumbprint $Thumbprint `
        -CertificatePath $CertificatePath
    Test-AssessmentPageWaveRows -Rows $Rows

    Import-Module PnP.PowerShell -ErrorAction Stop
    $WebPartMappingFile = $TransformationProfile.WebPartMappingFile

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
    $results = [Collections.Generic.List[object]]::new()

    foreach ($row in $Rows) {
        $startedAt = Get-Date
        $sourceWebUrl = $null
        $targetPageUrl = $null
        $status = 'Failed'
        $errorMessage = $null
        $sourceItemId = $null
        $sourceUniqueId = $null
        $observedListId = $null
        $observedModifiedAt = $null

        try {
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
            if ([string]::IsNullOrWhiteSpace($WebPartMappingFile) -and
                ($mappingPercentage -ne 100 -or
                 -not [string]::IsNullOrWhiteSpace($row.UnmappedWebParts))) {
                throw "Resolve unmapped Web Parts or provide WebPartMappingFile: $($row.PageUrl)"
            }

            $sourceWebUrl = Get-PageWaveSourceUrl -Row $row
            $action = "Create a draft modern page from $($row.PageUrl)"
            if (-not (& $ShouldProcessCallback $sourceWebUrl $action)) {
                $status = 'Skipped'
                $errorMessage = "The operation wasn't approved or was run with -WhatIf."
                continue
            }

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

            if (-not $webs.ContainsKey($sourceWebUrl)) {
                $webs[$sourceWebUrl] = Get-PnPWeb `
                    -Includes WelcomePage, ServerRelativeUrl `
                    -Connection $connection
            }
            $web = $webs[$sourceWebUrl]
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
            if (-not $AllowModifiedPages -and $observedModifiedAt -ne $row.ModifiedAt) {
                throw "The source was modified after Assessment. Rerun Assessment or use -AllowModifiedPages after reapproval: $($row.PageUrl)"
            }

            $hasUniquePermissions = Get-PnPProperty `
                -ClientObject $sourceItem `
                -Property HasUniqueRoleAssignments `
                -Connection $connection

            if ($hasUniquePermissions) {
                throw "The source has unique permissions and is excluded from these batch scripts: $($row.PageUrl)"
            }

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

            $parameters = @{
                Identity = $sourceItem.Id
                Connection = $connection
                DontPublish = $true
                LogType = 'File'
                LogFolder = $LogFolder
                LogVerbose = $true
                SkipItemLevelPermissionCopyToClientSidePage = $true
            }

            if (-not [string]::IsNullOrWhiteSpace($WebPartMappingFile)) {
                $parameters.WebPartMappingFile = $WebPartMappingFile
            }

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
            $resultRow = [pscustomobject][ordered]@{
                ManifestRowHash = Get-PageWaveManifestHash -Row $row
                TransformationProfileHash = $TransformationProfile.Hash
                ScriptVersion = $TransformationProfile.ScriptVersion
                PnPPowerShellVersion = $TransformationProfile.PnPPowerShellVersion
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
                TargetPageUrl = $targetPageUrl
                TransformationStatus = $status
                ValidationStatus = if ($status -eq 'Created') { 'Pending' } else { '' }
                LogFolder = $LogFolder
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
