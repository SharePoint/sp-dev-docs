---
title: Understand publishing portal assessment coverage
description: Compare Microsoft 365 Assessment Tool publishing output with the legacy SharePoint Modernization Scanner publishing reports.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Understand publishing portal assessment coverage

The Microsoft 365 Assessment Tool provides page-level publishing readiness and a site-collection-level publishing portal summary. It doesn't reproduce the complete web-level publishing configuration inventory from the legacy SharePoint Modernization Scanner.

## Run the required components

Include both Pages and Extensibility to populate page readiness, page layouts, custom master pages, and alternate CSS:

```powershell
microsoft365-assessment.exe start --mode Classic `
  --classicinclude Pages Extensibility `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

If Extensibility isn't included, the custom master-page fields in `classicpublishingsitesummaries.csv` aren't populated.

## Legacy report mapping

| Legacy Scanner output | Assessment output | Coverage |
| --- | --- | --- |
| `ModernizationPublishingSiteScanResults.csv` | `classicpublishingsitesummaries.csv` | Close site-collection-level match. |
| `ModernizationPublishingWebScanResults.csv` | `classicwebsummaries.csv` plus `classicextensibilities.csv` | Partial. The complete publishing configuration isn't available. |
| `ModernizationPublishingPageScanResults.csv` | `classicpages.csv` plus `classicpagewebparts.csv` | Partial. Core page, layout, modification, and web part readiness is available, but several publishing-specific fields aren't. |
| Publishing readiness Excel dashboard | Classic Power BI template | Different model. The legacy complexity categorization isn't reproduced. |

## Site-collection summary

`classicpublishingsitesummaries.csv` provides the same core site-collection fields as the legacy publishing site report:

- Publishing web count.
- Publishing page count.
- Used custom site and system master pages.
- Used page layouts.
- Latest publishing-page modification date.

Use this file to identify large or stale publishing portals.

## Page-level coverage

Assessment provides:

- Page URL, name, type, library, layout, modification time, and modifier.
- Home-page classification.
- Normalized one-row-per-web-part inventory.
- Mapping percentage and unmapped web part types.
- Optional page view/create/edit audit activity.

Assessment doesn't provide these legacy publishing page fields:

- Content type name and ID.
- Page layout file and whether the layout was customized.
- Global, security-group, and SharePoint-group audience values.
- The legacy fixed `WPType1` through `WPType20` and `WPTitle1` through `WPTitle20` columns.

The normalized `classicpagewebparts.csv` file replaces the fixed web part columns and doesn't have the legacy 20-web-part limit.

## Web-level gaps

The current Assessment output doesn't reproduce the full `ModernizationPublishingWebScanResults.csv` contract, including:

- Site-collection complexity and web depth categorization.
- Web language and variation labels.
- Allowed and default page-layout configuration.
- Global and current navigation settings.
- Managed navigation term-set identifiers.
- Page library scheduling, moderation, versioning, minor versions, and approval workflow configuration.
- Broken permission inheritance.
- Web administrators and owners.

If a migration plan depends on these fields, continue to use the legacy Scanner publishing mode for that inventory and retain its report schema with the project evidence.

## Tool choice

Use Assessment for new SharePoint Online page discovery, web part readiness, usage, and site-level publishing summaries.

Use the legacy Scanner only when you need its established report contract or the unsupported web-level publishing configuration. Don't assume that an empty Assessment field proves that the corresponding publishing feature isn't configured.

For field-level Assessment output, see [Classic pages CSV reference](assessment-tool-classic-pages-csv.md).
