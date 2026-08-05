---
title: Transform selected classic pages with PnP PowerShell
description: Prepare a minimally privileged PnP PowerShell connection and transform approved classic pages with source-preserving defaults.
ms.date: 11/19/2018
ms.localizationpriority: high
ms.service: sharepoint
---

# Transform selected classic pages with PnP PowerShell

The Microsoft 365 Assessment tool inventories classic pages but doesn't modify them. Use the Assessment output to approve a page wave, and use PnP PowerShell `ConvertTo-PnPPage` to create the modern pages.

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

## Page transformation workflow

[!INCLUDE [classic-page-transformation-workflow](../../includes/snippets/modernization/classic-page-transformation-workflow.md)]

## Before you begin

Complete these prerequisites:

1. Run and interpret the [Classic pages assessment](assessment-tool-classic-pages.md).
1. Select a representative wave from successful scan coverage.
1. Install PowerShell 7.4.0 or later and the current stable PnP PowerShell release.
1. Register a tenant-owned Microsoft Entra application for interactive PnP PowerShell.
1. Confirm that the signed-in user can edit pages in the source and target webs.

Since September 9, 2024, interactive PnP PowerShell authentication requires your own application registration and client ID.

The account that registers the application must be allowed to create app registrations. Tenant consent policy determines whether an administrator must grant consent.

### Permissions

Use a separate delegated application from the read-only Assessment application.

| Transformation requirement | Delegated SharePoint scope |
| --- | --- |
| Read the source and create, save, and publish the modern page | `AllSites.Manage` |
| Also copy item-level unique permissions | `AllSites.FullControl` |

The signed-in user's site permissions also apply. The application's delegated scope doesn't grant the user access to a site that they couldn't otherwise access.

With `AllSites.Manage`, add `-SkipItemLevelPermissionCopyToClientSidePage` so the generated page inherits permissions from its library. Use `AllSites.FullControl` only when the page's unique permissions must be retained.

See [Migrate classic pages with the least permission possible](https://pnp.github.io/pnpassessment/classic/migrate-minimal-permissions.html).

## Install or update PnP PowerShell

PnP PowerShell requires PowerShell 7.4.0 or later.

```powershell
$PSVersionTable.PSVersion
Install-Module PnP.PowerShell -Scope CurrentUser
```

If PnP PowerShell is already installed, run `Update-Module PnP.PowerShell` from PowerShell 7.4.0 or later.

See [Install PnP PowerShell](https://pnp.github.io/powershell/articles/installation.html).

## Register the interactive transformation application

The following command creates a public-client application for interactive sign-in:

```powershell
Register-PnPEntraIDAppForInteractiveLogin `
  -ApplicationName "Classic Page Transformation" `
  -Tenant "<tenant>.onmicrosoft.com" `
  -SharePointDelegatePermissions AllSites.Manage `
  -SignInAudience AzureADMyOrg
```

Copy the returned application ID. Depending on tenant consent policy, an administrator might need to grant consent before the first connection.

This public-client registration is for delegated interactive or device login. It doesn't provide the application permissions or certificate required for unattended authentication.

For manual registration and other authentication methods, see [Register an Entra ID application for PnP PowerShell](https://pnp.github.io/powershell/articles/registerapplication.html).

For GCC High, DoD, or Microsoft 365 operated by 21Vianet, specify the matching `-AzureEnvironment` value when registering the application and connecting. See the [Register-PnPEntraIDAppForInteractiveLogin](https://pnp.github.io/powershell/cmdlets/Register-PnPEntraIDAppForInteractiveLogin.html) and [Connect-PnPOnline](https://pnp.github.io/powershell/cmdlets/Connect-PnPOnline.html) cmdlet references.

## Map an Assessment row to PnP PowerShell

| Assessment field | PnP PowerShell use |
| --- | --- |
| `SiteUrl` + `WebUrl` | Source URL for `Connect-PnPOnline`. |
| `ListUrl`, `ListId`, `PageUrl` | Exact `SitePages` library and source file identity. |
| `PageType` | Must be `WikiPage` or `WebPartPage` for this workflow. |
| `Layout` | Representative-pattern grouping and validation. |

Before transforming a first-wave page, require:

- Successful site and web coverage.
- `PageType` equal to `WikiPage` or `WebPartPage`.
- No unresolved unmapped Web Parts.
- `WebPartCount` greater than 0. Handle zero-part pages outside this automated example after manual review.
- A source page that inherits permissions from its library.
- A recorded content and layout baseline for validation.

## Build representative page groups

The following script creates a candidate inventory. It doesn't transform pages.

It groups eligible Wiki and Web Part pages by page type, layout, and ordered Web Part signature. The signature includes Web Part type, mapping result, hidden state, and closed state.

```powershell
$pages = Import-Csv .\classicpages.csv
$webParts = Import-Csv .\classicpagewebparts.csv
$partsByPage = @{}

function Get-PageKey {
  param($Row)

  '{0}|{1}|{2}|{3}' -f $Row.ScanId, $Row.SiteUrl, $Row.WebUrl, $Row.PageUrl
}

foreach ($part in $webParts) {
  $key = Get-PageKey $part
  if (-not $partsByPage.ContainsKey($key)) {
    $partsByPage[$key] = [Collections.Generic.List[object]]::new()
  }

  $partsByPage[$key].Add($part)
}

$candidates = foreach ($page in $pages) {
  $fileName = [IO.Path]::GetFileName($page.PageUrl)

  if ($page.PageType -notin @('WikiPage', 'WebPartPage') -or
      $page.HomePage -eq 'True' -or
      -not $page.ListUrl.EndsWith('/SitePages', [StringComparison]::OrdinalIgnoreCase) -or
      $page.WebPartCount -eq '0' -or
      $page.MappingPercentage -ne '100' -or
      -not [string]::IsNullOrWhiteSpace($page.UnmappedWebParts) -or
      $fileName.StartsWith('Migrated_', [StringComparison]::OrdinalIgnoreCase) -or
      $fileName.StartsWith('Previous_', [StringComparison]::OrdinalIgnoreCase)) {
    continue
  }

  $key = Get-PageKey $page
  if (-not $partsByPage.ContainsKey($key)) {
    throw "Web Part rows are missing for $($page.PageUrl)."
  }

  $signature = (
    $partsByPage[$key] |
      Sort-Object { [int]$_.WebPartIndex } |
      ForEach-Object {
        '{0}|Mappable={1}|Hidden={2}|Closed={3}' -f
          $_.WebPartTypeShort, $_.IsMappable, $_.Hidden, $_.IsClosed
      }
  ) -join ';'

  [pscustomobject]@{
    PatternKey = '{0}|{1}|{2}' -f $page.PageType, $page.Layout, $signature
    ScanId = $page.ScanId
    SiteUrl = $page.SiteUrl
    WebUrl = $page.WebUrl
    PageUrl = $page.PageUrl
    PageType = $page.PageType
    ListUrl = $page.ListUrl
    ListId = $page.ListId
    AssessmentTimeZoneId = [TimeZoneInfo]::Local.Id
    Layout = $page.Layout
    HomePage = $page.HomePage
    WebPartCount = [int]$page.WebPartCount
    MappingPercentage = $page.MappingPercentage
    UnmappedWebParts = $page.UnmappedWebParts
    ModifiedAt = $page.ModifiedAt
    WebPartSignature = $signature
    IncludePattern = 'True'
    Selected = 'False'
    ExpectedVisibleContent = ''
    ValidationOwner = ''
  }
}

$groups = $candidates | Group-Object PatternKey -AsHashTable -AsString

$candidateInventory = foreach ($candidate in $candidates) {
  $candidate | Select-Object *,
    @{ Name = 'PatternPageCount'; Expression = { $groups[$candidate.PatternKey].Count } }
}

$candidateInventory |
  Sort-Object PatternKey, PageUrl |
  Export-Csv .\representative-page-groups.csv -NoTypeInformation
```

Review `representative-page-groups.csv` and select at least one page from every `PatternKey` that the migration wave will contain. Select additional pages when Web Part properties, linked content, or business behavior differ materially within a pattern.

Set `IncludePattern=False` for patterns outside the planned migration. For each selected page, set `Selected=True` and fill `ExpectedVisibleContent` and `ValidationOwner`.

Run the grouping step on the same machine that generated the Assessment CSVs. `AssessmentTimeZoneId` records the timezone used to interpret the offset-free `ModifiedAt` value.

Keep zero-part pages, home pages, publishing pages, and pages with unresolved mappings in separate review queues.
Pages outside the default `SitePages` library also remain on the separately reviewed single-page path.

## Understand the source-preserving defaults

> [!CAUTION]
> `-TakeSourcePageName` renames the classic source page, and `-Overwrite` replaces an existing target page. Don't use either option until the generated pages are approved and a rollback plan exists.

| Option | First-wave guidance |
| --- | --- |
| Default naming | Keep the source name and create `Migrated_<source-page>.aspx`. |
| `-TakeSourcePageName` | Don't use initially. It renames the classic source with a `Previous_` prefix. |
| `-Overwrite` | Don't use initially. Review an existing target instead of replacing it automatically. |
| `-ReplaceHomePageWithDefault` | Don't use in a representative wave. |
| `-DontPublish` | Use for the first wave so the generated page remains a draft during validation. |
| `-SkipItemLevelPermissionCopyToClientSidePage` | Use with the `AllSites.Manage` application unless unique permissions must be copied. |

## Roll back a first-wave draft

The batch workflow doesn't rename or overwrite the classic source page. If a generated draft fails validation:

1. Keep the classic source page in service.
1. Keep `TransformationStatus=Created`, set `ValidationStatus=Failed`, and fill `ValidationNotes`, `ValidatedBy`, and `ValidatedAt`.
1. Preserve `TargetPageUrl` and `LogPath` with the failed validation evidence.
1. Recycle the generated `Migrated_` draft from the **Site Pages** library when it is no longer needed for investigation and the organization's retention policy permits removal.
1. Correct the candidate rule or remediation, and retry one representative page before resuming the wave.

`-Overwrite` and `-TakeSourcePageName` are outside the batch workflow. Before using either option in a separate procedure, preserve the page versions and URLs, record the current home-page setting, test the reverse rename or restore process in a nonproduction site, and obtain explicit approval.

## Transform one selected Wiki or Web Part page

Use the representative-page script with one row marked `Selected=True`. This keeps the one-page test on the same validation, authentication, and result contract as a larger wave.

The batch scripts support Wiki and Web Part pages in the default `SitePages` library. They exclude home pages, zero-part pages, pages with unique permissions, and pages modified after Assessment. Handle those pages through a separately reviewed path.

## Transform all representative pages

Save the three embedded files from [Page wave script reference](modernize-userinterface-site-pages-wave-scripts.md) in the same folder.

In `representative-page-groups.csv`:

1. Set `IncludePattern=True` for each transformation pattern in the planned migration.
1. Set `Selected=True` on at least one page in every included pattern.
1. Fill `ExpectedVisibleContent` and `ValidationOwner` for every selected page.

Preview the complete wave without authenticating or writing SharePoint pages:

```powershell
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<application-id>" `
  -AuthenticationMode Interactive `
  -WhatIf `
  -Force
```

The preview CSV records `PlannedAction` and `PlannedTargetPageUrl`. Because `-WhatIf` doesn't authenticate, `TargetExists` is `NotChecked`.

Run an authenticated read-only preflight to verify the current source, home page, permissions, timestamps, and target absence:

```powershell
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<application-id>" `
  -AuthenticationMode Interactive `
  -PreflightOnly `
  -Confirm:$false `
  -Force
```

Every row must report `TransformationStatus=PreflightPassed` before live conversion.

Run interactively with High-impact confirmation:

```powershell
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<application-id>" `
  -AuthenticationMode Interactive `
  -Confirm
```

The script writes each result immediately to `representative-page-results.csv`. Generated pages remain drafts, and each created row starts with `ValidationStatus=Pending`.

Follow [Validate transformed classic pages](modernize-userinterface-site-pages-validation.md). Set `ValidationStatus=Passed`, `ValidationNotes`, `ValidatedBy`, and `ValidatedAt` only after the page meets every acceptance criterion.

## Expand to all user-specified pages

Create `approved-pages.csv` by copying the additional included rows that the user approved from the original `representative-page-groups.csv`. Retain every generated field, and fill `ExpectedVisibleContent` and `ValidationOwner`.

Run the selected-page script with `-PreflightOnly -Confirm:$false -Force` first. Every row must report `PreflightPassed`.

Run the expansion script:

```powershell
.\Convert-SelectedPages.ps1 `
  -PagesPath .\approved-pages.csv `
  -RepresentativeManifestPath .\representative-page-groups.csv `
  -RepresentativeResultsPath .\representative-page-results.csv `
  -ClientId "<application-id>" `
  -AuthenticationMode Interactive `
  -Confirm
```

The script refuses to expand when:

- The representative manifest and results don't match.
- Any representative page isn't `Created` and `Passed`.
- Validation notes, validator, or validation timestamp are missing.
- The PnP PowerShell version or any of the three script files differs from the representative run.
- An approved page isn't an unchanged included row from the original manifest.
- An approved page belongs to a pattern without a passed representative.

The expanded wave also creates draft pages and writes `selected-page-results.csv`. Validate those pages before publishing them.

## Options requiring explicit review

Use the generated [ConvertTo-PnPPage cmdlet reference](https://pnp.github.io/powershell/cmdlets/ConvertTo-PnPPage.html) for the complete parameter contract.

The batch scripts don't support custom Web Part mappings, publishing pages, or cross-site targets. Handle those scenarios through a separately reviewed single-page or advanced procedure.

Review these options only outside the batch workflow:

- `-CopyPageMetadata` and `-KeepPageCreationModificationInformation`.
- `-UrlMappingFile`, `-UserMappingFile`, and `-TermMappingFile`.
- `-Overwrite` and `-TakeSourcePageName` after approval and rollback planning.

## Troubleshoot modern page capability

The page wave scripts don't enable SharePoint features. This troubleshooting path applies only to a supported classic team site. Don't enable the feature on a classic publishing portal; route Publishing pages to the separate cross-site publishing backlog and model. See [Supported customizations for modern pages](../solution-guidance/modern-experience-customizations-customize-pages.md#supported-customizations-for-modern-pages).

Connect with an account authorized to manage the web, and list the activated web features:

```powershell
$source = Connect-PnPOnline `
  -Url "https://<tenant>.sharepoint.com/sites/<site>" `
  -Interactive `
  -ClientId "<application-id>" `
  -ReturnConnection

$modernPageFeatureId = [guid]'B6917CB1-93A0-4B97-A84D-7CF49975D4EC'
$modernPageFeature = Get-PnPFeature `
  -Scope Web `
  -Connection $source |
  Where-Object DefinitionId -eq $modernPageFeatureId

if ($modernPageFeature) {
  Write-Host "Modern pages feature is active."
}
else {
  Write-Host "Modern pages feature is not active."
}
```

The delegated `AllSites.Manage` application used by the batch scripts isn't sufficient to activate web features. If the feature isn't active on a supported classic team site, obtain site-owner approval and connect with:

- A separate delegated application with SharePoint `AllSites.FullControl`.
- A signed-in account with Full Control on the web.

```powershell
$adminConnection = Connect-PnPOnline `
  -Url "https://<tenant>.sharepoint.com/sites/<site>" `
  -Interactive `
  -ClientId "<full-control-application-id>" `
  -ReturnConnection

Enable-PnPFeature `
  -Identity $modernPageFeatureId `
  -Scope Web `
  -Connection $adminConnection
```

Re-run authenticated preflight after enabling the feature.

## Unattended authentication and other page types

The delegated public-client application created earlier can't be reused for certificate app-only authentication unless it is separately configured for app-only access.

Before unattended execution:

1. Create a separate app-only registration and certificate by following [Register an Entra ID application for app-only access](https://pnp.github.io/powershell/articles/registerapplication.html#setting-up-access-to-your-own-entra-id-app-for-app-only-access).
1. Configure SharePoint **application** permissions or site assignments for every source site by following [Determine required PnP PowerShell permissions](https://pnp.github.io/powershell/articles/determinepermissions.html#when-using-an-app-only-context).
1. Grant the required administrator consent.
1. Run the batch script with `-PreflightOnly -Confirm:$false` and the certificate authentication mode.
1. Remove `-PreflightOnly` only after the authenticated preflight passes in a test tenant.

> [!IMPORTANT]
> The certificate parameter paths are Pester-tested, but the Stage 2 live tenant run validated delegated interactive authentication. Validate the chosen app-only permission profile in your tenant before unattended writes.

Publishing pages, Blog pages, pages outside `SitePages`, home pages, custom Web Part mappings, and SharePoint Server sources aren't supported by the batch scripts. Use these advanced references:

- [In-place versus cross-site transformation](modernize-userinterface-site-pages-approach.md)
- [Publishing page readiness](assessment-tool-publishing-coverage.md)
- [Publishing page transformation model](modernize-userinterface-site-pages-model-publishing.md)
- [Page transformation model and custom Web Part mappings](modernize-userinterface-site-pages-model.md)
- [Modernize classic Blog pages](modernize-blogs.md)
- [Transform pages from SharePoint Server](modernize-userinterface-site-pages-approach.md#cross-site-transformation)

## Next steps

1. [Validate each transformed page](modernize-userinterface-site-pages-validation.md).
1. Run `Convert-SelectedPages.ps1` only after every representative page passes validation.

## Reference

- [ConvertTo-PnPPage cmdlet reference](https://pnp.github.io/powershell/cmdlets/ConvertTo-PnPPage.html)
- [Security requirements](modernize-userinterface-site-pages-security.md)
- [In-place versus cross-site transformation](modernize-userinterface-site-pages-approach.md)
- [Page transformation model](modernize-userinterface-site-pages-model.md)
- [Publishing page transformation model](modernize-userinterface-site-pages-model-publishing.md)
