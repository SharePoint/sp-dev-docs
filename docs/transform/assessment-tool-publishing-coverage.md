---
title: Assess publishing pages for transformation
description: Use Microsoft 365 Assessment tool publishing-page output to plan page transformation and page-layout mapping.
ms.date: 07/24/2026
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

The current page assessment doesn't provide these publishing transformation inputs:

- Content type name and ID.
- Page layout file and whether the layout was customized.
- Global, security-group, and SharePoint-group audience values.
- Master-page, alternate-CSS, navigation, approval, versioning, scheduling, variation, audience, and ownership configuration.

These areas are outside the Page Assessment scope. The lifecycle of legacy Scanner reports is handled separately from this guidance.

## Continue to publishing-page transformation

1. Group publishing pages by `Layout`.
1. Review `MappingPercentage` and `UnmappedWebParts`.
1. Identify custom layouts that need a page-layout mapping.
1. Validate representative pages before processing a complete portal.

For an out-of-the-box publishing layout, use the built-in layout mapping where possible:

```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/source -Interactive -ClientId <application-id>

ConvertTo-PnPPage `
  -PublishingPage `
  -Identity Article.aspx `
  -TargetWebUrl https://contoso.sharepoint.com/sites/target
```

For a custom publishing layout, generate and review a mapping before transformation:

```powershell
Export-PnPPageMapping -CustomPageLayoutMapping -Folder C:\temp
```

For field-level Assessment output, see [Classic pages CSV reference](assessment-tool-classic-pages-csv.md).
For page-layout mapping details, see [Publishing Page transformation model](modernize-userinterface-site-pages-model-publishing.md).
