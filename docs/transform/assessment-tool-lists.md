---
title: Assess modern list and library readiness
description: Find lists and libraries that render in the classic experience and understand why.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Assess modern list and library readiness

Use the Lists component of the Microsoft 365 Assessment Tool to find SharePoint Online lists and libraries that don't render in the modern experience.

## Run the assessment

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Lists `
  --skipusageinformation `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

If `--classicinclude` is omitted, the Classic assessment also runs the Pages, InfoPath, and Extensibility components.

The current Classic post-scan path starts page audit collection even when Pages isn't selected. Use `--skipusageinformation` for a Lists-only assessment unless you intentionally want that audit query.

## What the assessment checks

For each list or library, the assessment reads:

- List template and template ID.
- Configured List Experience.
- Default view page render type.
- Item count and last user modification date.
- Whether the template is classic-by-design.

Only lists that are classic-by-design, explicitly forced to Classic, or unable to render Modern are written to `classiclists.csv`. Modern lists are counted in the Web and site-collection summaries.

## Output

`classiclists.csv` contains:

| Column | Description |
| --- | --- |
| `ScanId` | Assessment identifier. |
| `SiteUrl` | Absolute site-collection URL. |
| `WebUrl` | Site-collection-relative web URL. `/` represents the root web. |
| `ListId` | List identifier. |
| `ListUrl` | Server-relative list or library URL. |
| `ListTitle` | List title. |
| `ListTemplateType` | Named List template type. |
| `ListTemplate` | Numeric List template ID. |
| `ListExperience` | Configured `Auto`, `NewExperience`, or `ClassicExperience` value. |
| `ClassicByDesign` | Indicates that the List template doesn't have a modern experience. |
| `DefaultViewRenderType` | SharePoint's reason that the default view does or doesn't render Modern. |
| `LastModifiedAt` | Last user modification time. |
| `ItemCount` | Number of items. |
| `RemediationCode` | Normalized readiness category from `CL1` through `CL6`. It can be empty for an ignored or undefined render type. |

The row key is `ScanId`, `SiteUrl`, `WebUrl`, and `ListId`.

The Classic Power BI template includes **Lists** and **Lists details** tabs.

## Use the Power BI report

The **Lists** tab provides:

- A table with web, list title, template, modification date, item count, classic-by-design status, and remediation code.
- Site, web, modification-date, and classic-by-design filters.
- A **Classic by design** chart.

The **Lists details** tab adds:

- `DefaultViewRenderType`.
- `ListExperience`.
- Charts for the render reason, configured List Experience, and List template.

Use `classiclists.csv` when you need stable join keys, exact enum strings, or automation. The Power BI template is a visualization over the same list data and doesn't make the output field-for-field compatible with the legacy Scanner.

## Remediation codes

| Code | Meaning |
| --- | --- |
| `CL1` | A List, Web, Site, or Tenant setting forces Classic. |
| `CL2` | JSLink, XslLink, or a code-based custom action is incompatible with Modern. |
| `CL3` | The List page or form is customized, unghosted, or contains an incompatible Web Part configuration. |
| `CL4` | The List template is classic-by-design or unsupported in Modern. |
| `CL5` | An incompatible field type prevents Modern rendering. |
| `CL6` | A special or incompatible view type prevents Modern rendering. |

## Legacy Scanner differences

The legacy Scanner exposed many individual Boolean and detail columns, such as the exact JSLink fields, blocking feature scope, and page-load exception. The Assessment output normalizes most of these details into `DefaultViewRenderType` and `RemediationCode`.

Don't treat `classiclists.csv` as field-for-field compatible with `ModernizationListScanResults.csv`.
