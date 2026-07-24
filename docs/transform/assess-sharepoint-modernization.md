---
title: Assess and transform classic SharePoint pages
description: Assess classic SharePoint pages, prioritize remediation, and continue into page transformation with PnP PowerShell.
ms.date: 07/24/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Assess and transform classic SharePoint pages

Use the Microsoft 365 Assessment tool to discover classic pages and understand their page-transformation readiness. Then use the assessment results to prioritize remediation and transform selected pages with PnP PowerShell.

This guidance focuses only on classic page assessment and its handoff to page transformation.

## Page modernization workflow

1. [Configure and run the Classic pages assessment](assessment-tool-classic-pages-run.md).
1. Validate site, web, and Audit coverage before interpreting page counts.
1. Prioritize pages by usage, modification date, home-page status, mapping percentage, and unmapped Web Parts.
1. Decide whether each blocking Web Part should be removed, replaced, or handled through a custom mapping.
1. [Transform selected pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md).
1. Validate the new pages and iterate on mappings or remediation.

## Use assessment output for transformation

| Assessment output | Transformation decision |
| --- | --- |
| `PageUrl`, `PageType`, `Layout` | Identify the source page and transformation path. |
| `HomePage`, `UncustomizedHomePage` | Select home pages and simple early migration waves. |
| `MappingPercentage`, `UnmappedWebParts` | Find pages that need Web Part remediation or mapping changes. |
| `classicpagewebparts.csv` | Review the exact Web Part type, position, visibility, and mapping result. |
| `ModifiedAt`, `classicpageauditusage.csv` | Prioritize active content and avoid transforming unused pages without a business need. |
| `classicpublishingsitesummaries.csv` | Size publishing-page work and identify used layouts. |

Mapping readiness is an input to planning, not a guarantee that the transformed page will preserve every visual or business behavior.

## Scope

This section doesn't document other Assessment modules, end-to-end classic-site modernization, or legacy Scanner operation. Page-transformation execution is covered by the existing transformation guidance. Legacy Scanner documentation remains unchanged in this stage.

## Next steps

- [Assess classic SharePoint pages](assessment-tool-classic-pages.md)
- [Interpret and prioritize assessment results](assessment-tool-classic-pages-report.md)
- [Transform classic pages to modern pages](modernize-userinterface-site-pages.md)
- [Transform classic pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md)
