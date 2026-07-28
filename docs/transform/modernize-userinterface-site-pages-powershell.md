---
title: Transform selected classic pages with PnP PowerShell
description: Prepare a minimally privileged PnP PowerShell connection and transform approved classic pages with source-preserving defaults.
ms.date: 07/27/2026
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
1. Register a tenant-owned Microsoft Entra application for PnP PowerShell.
1. Confirm that the signed-in user can edit pages in the source and target webs.

Since September 9, 2024, interactive PnP PowerShell authentication requires your own application registration and client ID.

The account that registers the application must be allowed to create app registrations. Tenant consent policy determines whether an administrator must grant consent.

### Permissions

Use a separate application from the read-only Assessment application.

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

## Register the transformation application

The following command creates a public-client application for interactive sign-in:

```powershell
Register-PnPEntraIDAppForInteractiveLogin `
  -ApplicationName "Classic Page Transformation" `
  -Tenant "<tenant>.onmicrosoft.com" `
  -SharePointDelegatePermissions AllSites.Manage `
  -SignInAudience AzureADMyOrg
```

Copy the returned application ID. Depending on tenant consent policy, an administrator might need to grant consent before the first connection.

For manual registration and other authentication methods, see [Register an Entra ID application for PnP PowerShell](https://pnp.github.io/powershell/articles/registerapplication.html).

For GCC High, DoD, or Microsoft 365 operated by 21Vianet, specify the matching `-AzureEnvironment` value when registering the application and connecting. See the [Register-PnPEntraIDAppForInteractiveLogin](https://pnp.github.io/powershell/cmdlets/Register-PnPEntraIDAppForInteractiveLogin.html) and [Connect-PnPOnline](https://pnp.github.io/powershell/cmdlets/Connect-PnPOnline.html) cmdlet references.

## Map an Assessment row to PnP PowerShell

| Assessment field | PnP PowerShell use |
| --- | --- |
| `SiteUrl` + `WebUrl` | Source URL for `Connect-PnPOnline`. |
| `ListUrl` + `PageUrl` | Source library, optional folder, and page file name. |
| `PageName` | Blog title identity. |
| `PageType` | Wiki/Web Part, Publishing, or Blog route. |
| `Layout` | Publishing page-layout decision. |

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

## Transform one selected Wiki or Web Part page

Use the representative-page script with one row marked `Selected=True`. This keeps the one-page test on the same validation, authentication, and result contract as a larger wave.

The batch scripts support Wiki and Web Part pages in the default `SitePages` library. They exclude home pages, zero-part pages, pages with unique permissions, and pages modified after Assessment. Handle those pages through a separately reviewed path.

## Route other page types

- `PublishingPage`: connect to a target modern web, add `-PublishingPage`, and review the [publishing page-layout model](modernize-userinterface-site-pages-model-publishing.md).
- `BlogPage`: use `PageName` as the `-Identity`, add `-BlogPage`, and provide a target modern web.
- `ASPXPage` and `DelveBlogPage`: keep them outside this Assessment-driven workflow.
- SharePoint Server source: use `Connect-PnPOnline -TransformationOnPrem` for the source and a separate SharePoint Online target connection. Treat this as an advanced cross-site scenario.

Use [in-place versus cross-site guidance](modernize-userinterface-site-pages-approach.md) before providing `-TargetWebUrl` or `-TargetConnection`.

## Transform all representative pages

Save the three embedded files from [Run Assessment page wave scripts](modernize-userinterface-site-pages-wave-scripts.md) in the same folder.

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

Run interactively with High-impact confirmation:

```powershell
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<application-id>" `
  -AuthenticationMode Interactive `
  -Confirm
```

For unattended execution, use a certificate-based application and disable confirmation explicitly:

```powershell
.\Convert-RepresentativePages.ps1 `
  -ManifestPath .\representative-page-groups.csv `
  -ClientId "<application-id>" `
  -AuthenticationMode CertificateThumbprint `
  -Tenant "<tenant>.onmicrosoft.com" `
  -Thumbprint "<certificate-thumbprint>" `
  -Confirm:$false
```

The script writes each result immediately to `representative-page-results.csv`. Generated pages remain drafts, and each created row starts with `ValidationStatus=Pending`.

Follow [Validate transformed classic pages](modernize-userinterface-site-pages-validation.md), and set `ValidationStatus=Passed` only after the page meets every acceptance criterion.

## Expand to all user-specified pages

Create `approved-pages.csv` by copying the additional rows that the user approved from `representative-page-groups.csv`. Retain the Assessment fields, `PatternKey`, `ExpectedVisibleContent`, and `ValidationOwner`.

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
- The PnP PowerShell version or Web Part mapping differs from the representative run.
- An approved page belongs to a pattern without a passed representative.

The expanded wave also creates draft pages and writes `selected-page-results.csv`. Validate those pages before publishing them.

For app-only setup and certificate authentication, see [PnP PowerShell authentication](https://pnp.github.io/powershell/articles/authentication.html) and [determine required permissions](https://pnp.github.io/powershell/articles/determinepermissions.html). Run `-WhatIf` before unattended execution.

## Options requiring explicit review

Use the generated [ConvertTo-PnPPage cmdlet reference](https://pnp.github.io/powershell/cmdlets/ConvertTo-PnPPage.html) for the complete parameter contract.

Review these options only when the scenario requires them:

- `-WebPartMappingFile` for custom Web Part mappings.
- `-PageLayoutMapping` for custom publishing layouts.
- `-TargetWebUrl` or `-TargetConnection` for cross-site transformation.
- `-CopyPageMetadata` and `-KeepPageCreationModificationInformation`.
- `-UrlMappingFile`, `-UserMappingFile`, and `-TermMappingFile`.
- `-Overwrite` and `-TakeSourcePageName` after approval and rollback planning.

## Next steps

1. [Validate each transformed page](modernize-userinterface-site-pages-validation.md).
1. Run `Convert-SelectedPages.ps1` only after every representative page passes validation.

## Reference

- [ConvertTo-PnPPage cmdlet reference](https://pnp.github.io/powershell/cmdlets/ConvertTo-PnPPage.html)
- [Security requirements](modernize-userinterface-site-pages-security.md)
- [In-place versus cross-site transformation](modernize-userinterface-site-pages-approach.md)
- [Page transformation model](modernize-userinterface-site-pages-model.md)
- [Publishing page transformation model](modernize-userinterface-site-pages-model-publishing.md)
