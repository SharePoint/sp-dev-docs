---
title: Assess publishing pages for transformation
description: Use Microsoft 365 Assessment tool publishing-page output to plan page transformation and page-layout mapping.
ms.date: 07/29/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Assess publishing pages for transformation

The Microsoft 365 Assessment tool provides page-level publishing readiness and a site-collection-level publishing-page summary. Use these results to size publishing transformation work and identify layouts or Web Parts that require custom mappings.

## Before you begin

- Complete the [Classic Pages requirements](assessment-tool-classic-pages-requirements.md).
- Run the Pages component to populate publishing-page readiness, page layouts, and Web Part inventory.
- The following command skips page Audit usage. Remove `--skipusageinformation` only after configuring the documented Audit application permission.

## Run the required components

The example uses the Windows executable name. On macOS or Linux, use `./microsoft365-assessment`.

```powershell
microsoft365-assessment.exe start --mode Classic `
  --classicinclude Pages `
  --skipusageinformation `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

## Site-collection summary

Use these page-related fields in `classicpublishingsitesummaries.csv`:

- Publishing web count.
- Publishing page count.
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

## Prepare a publishing-page backlog

1. Group publishing pages by `Layout`.
1. Review `MappingPercentage` and `UnmappedWebParts`.
1. Identify custom layouts that need a page-layout mapping.
1. Define the target modern web, page-layout mapping, metadata, and validation owner for each layout group.
1. Validate a separately reviewed publishing procedure before processing a complete portal.

For an out-of-the-box publishing layout, use the built-in layout mapping where possible. For a custom publishing layout, generate and review a mapping before transformation.

The Assessment-driven page wave scripts don't transform publishing pages. Use the [Publishing Page transformation model](modernize-userinterface-site-pages-model-publishing.md) as advanced reference while defining and validating the separate procedure.

## Reference

- [Classic pages assessment CSV reference](assessment-tool-classic-pages-csv.md)
- [Publishing Page transformation model](modernize-userinterface-site-pages-model-publishing.md)
