---
title: Interpret the classic pages assessment report
description: Use page, web part, usage, and rollup results from the Microsoft 365 Assessment tool to plan SharePoint page modernization.
ms.date: 07/24/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Interpret the classic pages assessment report

A Classic assessment exports page-specific and shared CSV files. On Windows, the default `report` command also creates `ClassicAssessmentReport.pbit`.

This guidance covers the **Pages** and scan-coverage views. The shared Classic template contains other component and compatibility tabs, but they are outside this page-assessment scope.

## Validate scan coverage first

Before interpreting page readiness, confirm that the expected scope completed:

1. Use **Scan overview**, `scans.csv`, and `history.csv` to review assessment state and messages.
1. Use `sitecollections.csv` and `webs.csv` to identify failed, unfinished, or unusually slow locations.
1. Confirm whether the assessment used a complete tenant scope, `--siteslist`, or `--sitesfile`.
1. Review `classicpageauditusage.csv` coverage status before using activity counts.

An assessment that finished can still contain site or web failures. Treat missing locations as a coverage gap, not as a finding that no classic content exists.

## Prioritize pages

The current **Pages** Power BI tab uses the basic page inventory fields, such as page type, URL, modification date, and remediation code.

Use `classicpages.csv` for the enriched readiness fields and to segment pages by:

- Page type.
- Home-page status.
- Last modification date and modifier.
- Web part count.
- Mapping percentage.
- Unmapped web part types.

Combine this inventory with `classicpageauditusage.csv` to distinguish frequently used pages from stale or low-use content.

The current embedded Power BI model doesn't include the enriched home-page, web part, mapping, audit, or page-readiness rollup fields. Analyze those fields directly in the CSV files, or extend the Power BI model before using them in visuals.

Audit usage is a planning signal, not a raw web analytics counter. Always check `QueryStatus`:

| Status | Meaning |
| --- | --- |
| `succeeded` | The requested audit window completed. |
| `partial` | One or more audit subqueries failed. Counts are a lower bound. |
| `failed` | Audit collection failed. Counts aren't usable. |
| `skipped` | Audit collection wasn't run for the site, such as in an unsupported cloud. |
| `error` | An unexpected post-scan exception occurred. Review `SkipReason` and the assessment log. |

When a site's audit query succeeded, the absence of a page row means that no matching events were returned for that page in the requested window. Treat an absent row as zero activity only after confirming successful coverage for the site.

If `SkipReason` starts with `QueryTimeout`, Microsoft Purview didn't complete the query during Assessment's 90-minute wait. When no audit chunk succeeds, the row has `QueryStatus=failed`; treat its zero counts as failed coverage, not as evidence of no activity. This is different from `NoPermission`, which indicates a missing Audit permission.

## Understand page-type coverage

Wiki, Web Part, and Publishing pages receive detailed web part extraction and mapping analysis.

Blog, ASPX, and Delve Blog pages are discovered and recorded, but don't receive the same mapping-readiness enrichment. Don't interpret a default or empty mapping value for these page types as a completed readiness analysis.

Delve Blog pages appear in `classicpages.csv` but aren't included in the current web and site page-count rollups.

## Interpret mapping results

`MappingPercentage` is the percentage of extracted web parts that have a usable mapping in the embedded mapping model:

- A page with no extracted web parts is 100 percent by convention.
- A 100-percent result means that all extracted web part types have mappings. It doesn't guarantee visual, data, permission, or business-behavior parity after transformation.
- A value below 100 with `WebPartCount` greater than zero identifies one or more web part types that require remediation, replacement, or a custom mapping.
- For a Wiki, Web Part, or Publishing page, `WebPartCount=0` and `MappingPercentage=0` can indicate that extraction failed before the mapping calculation ran. Review the assessment log for `Failed to assess the web parts of classic page`.

Use `classicpagewebparts.csv` for the per-page decision:

- `IsMappable` means that the web part has a nonempty usable mapping.
- `WebPartProperties` is populated only when `--exportwebpartproperties` was selected.
- Row, column, zone, order, hidden, and closed values help explain the current page layout.

Use `classicwebpartunique.csv` to identify web part types that affect many pages. `InMappingFile` is weaker than `IsMappable`: it only means that the type has an entry in the mapping file.

The current Assessment implementation deliberately treats the community mappings for `ScriptEditorWebPart` and `SimpleFormWebPart` as unavailable. It also doesn't support the legacy Scanner's on-disk mapping-file override.

## Use rollups

Use `classicwebsummaries.csv` and `classicsitesummaries.csv` to identify:

- Webs and site collections with the most classic pages.
- Pages with fully mappable or unmapped web parts.
- Average mapping percentage across pages that contain web parts.
- Default home pages that can be replaced as an early modernization wave.

Rollups are useful for sequencing, but return to the page and web part CSV files before making a remediation decision.

## Review publishing portals

`classicpublishingsitesummaries.csv` provides a site-collection-level publishing summary. Detailed legacy web-level publishing configuration isn't included.

See [Understand publishing portal coverage](assessment-tool-publishing-coverage.md) before replacing an established Publishing Scanner workflow.

## Move from assessment to transformation

Turn the report into a transformation backlog:

1. Exclude failed or incomplete scan locations.
1. Prioritize active pages and important home pages.
1. Group pages by page type, layout, and unmapped Web Part combination.
1. Resolve common blockers before transforming a large wave.
1. Map the CSV page identity to the PnP PowerShell source connection and cmdlet parameters.
1. Transform a representative sample and validate the result before scaling out.

### Map CSV fields to PnP PowerShell

| CSV field | Transformation use |
| --- | --- |
| `SiteUrl` + `WebUrl` | Build the source web URL for `Connect-PnPOnline`. |
| `PageUrl` + `ListUrl` | Derive the page file name, containing library, and optional folder. |
| `PageName` | Use the page title as `-Identity` for a classic Blog page. |
| `PageType` | Route to the Wiki/Web Part, Publishing, or Blog transformation path. |
| `Layout` | Select or validate page-layout mapping for publishing pages. |

The Assessment app is read-only. Use a separate PnP PowerShell connection with permission to create or update pages in the source or target web.

### Transform one selected Wiki or Web Part page

This example selects one assessed page and transforms it in place. Filter on the exact `PageUrl` that you approved for the migration wave.

```powershell
$row = Import-Csv .\classicpages.csv |
  Where-Object PageUrl -eq '/sites/source/SitePages/ApprovedPage.aspx' |
  Select-Object -First 1

if ($row.PageType -notin @('WikiPage', 'WebPartPage')) {
  throw "This example only handles WikiPage and WebPartPage rows."
}

$sourceWebUrl = if ($row.WebUrl -eq '/') {
  $row.SiteUrl
}
else {
  "$($row.SiteUrl.TrimEnd('/'))$($row.WebUrl)"
}

$source = Connect-PnPOnline `
  -Url $sourceWebUrl `
  -Interactive `
  -ClientId <application-id> `
  -ReturnConnection

$libraryPath = $row.ListUrl.TrimEnd('/')
if (-not $row.PageUrl.StartsWith("$libraryPath/", [StringComparison]::OrdinalIgnoreCase)) {
  throw "PageUrl isn't under ListUrl."
}

$pageRelativeToLibrary = $row.PageUrl.Substring($libraryPath.Length).TrimStart('/')
$pageName = [IO.Path]::GetFileName($pageRelativeToLibrary)
$folder = [IO.Path]::GetDirectoryName($pageRelativeToLibrary) -replace '\\', '/'
$libraryName = [Uri]::UnescapeDataString([IO.Path]::GetFileName($libraryPath))

$parameters = @{
  Identity = $pageName
  Connection = $source
}

if ($libraryName -ne 'SitePages') {
  $parameters.Library = $libraryName
}
if (-not [string]::IsNullOrWhiteSpace($folder)) {
  $parameters.Folder = $folder
}

ConvertTo-PnPPage @parameters
```

Route other page types deliberately:

- `PublishingPage`: use `-PublishingPage`, a target web, and the [publishing page-layout model](modernize-userinterface-site-pages-model-publishing.md).
- `BlogPage`: use `-BlogPage`, `PageName` as the blog-title identity, and a target web. Blog rows don't receive the detailed mapping-readiness enrichment described for Wiki, Web Part, and Publishing pages.
- `ASPXPage` and `DelveBlogPage`: exclude them from this automated transformation queue; the page assessment doesn't provide an equivalent readiness path for them.

Start with [Transform classic pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md). Use the [page transformation model](modernize-userinterface-site-pages-model.md) for custom Web Part mappings and the [publishing model](modernize-userinterface-site-pages-model-publishing.md) for publishing page layouts.

## Power BI and CSV

The Power BI template is a visualization layer over the CSV output. The CSV files remain the source for:

- Automation.
- Schema-level validation.
- Joining page, web part, usage, web, and site records.
- Retaining a reviewable evidence snapshot.

Power BI template generation requires Windows. CSV generation works on Windows, macOS, and Linux.

For every field and join key, see [Classic pages CSV reference](assessment-tool-classic-pages-csv.md).
