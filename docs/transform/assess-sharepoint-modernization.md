---
title: Assess SharePoint modernization
description: Choose an assessment tool and start collecting the data needed to modernize SharePoint.
ms.date: 07/23/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Assess SharePoint modernization

Assess your environment before you plan remediation or migration. The assessment identifies the classic features and customizations that are still in use, provides usage and readiness data, and helps you decide which sites and pages to modernize first.

For new SharePoint Online assessments, start with the [Microsoft 365 Assessment tool](assessment-tool-overview.md). The tool is open source and produces CSV output for supported modernization, adoption, and retirement scenarios. On Windows, it can also generate a Power BI template.

## Choose an assessment tool

| Scenario | Recommended tool |
| --- | --- |
| Assess classic SharePoint pages | [Microsoft 365 Assessment tool - Classic pages](assessment-tool-classic-pages.md) |
| Assess modern list and library readiness | [Microsoft 365 Assessment tool - Lists and libraries](assessment-tool-lists.md) |
| Find custom master pages, alternate CSS, and incompatible user custom actions | [Microsoft 365 Assessment tool - Extensibility](assessment-tool-extensibility.md) |
| Assess InfoPath, SharePoint Add-Ins, Microsoft Azure Access Control Service (ACS), or SharePoint Alerts | [Microsoft 365 Assessment tool](assessment-tool-overview.md) |
| Assess Microsoft 365 group connection readiness | [Legacy SharePoint Modernization Scanner](modernize-scanner.md) |
| Inventory SharePoint Designer customized forms | [Legacy Scanner customized forms report](modernize-scanner-reports-customizedforms.md) |
| Collect the complete legacy Publishing Portal Web-level inventory | [Legacy Scanner publishing reports](modernize-scanner-reports-publishingportals.md) |
| Assess SharePoint Server or another on-premises source | [SharePoint Migration Assessment Tool](/sharepointmigration/overview-of-the-sharepoint-migration-assessment-tool) or another scenario-specific tool |

For a detailed capability comparison, see [Compare SharePoint modernization assessment tools](sharepoint-modernization-assessment-comparison.md).

> [!NOTE]
> Existing Scanner articles remain available for established report workflows and Scanner-only capabilities. The scanner-based remediation path will be updated separately from this assessment reference.

## Assessment workflow

1. Select the assessment tool and modules that cover your scenario.
1. Configure authentication and scope.
1. Run the assessment against a test scope before scanning the full tenant.
1. Generate CSV output and, on Windows, the Power BI template.
1. Validate the report coverage and any failed sites or queries.
1. Use the results to define remediation and migration waves.

## Next steps

- [Microsoft 365 Assessment tool overview](assessment-tool-overview.md)
- [Assessment reports and CSV files](assessment-tool-reports.md)
- [Transform classic pages to modern pages](modernize-userinterface-site-pages.md)
- [Maximize use of modern lists and libraries](modernize-userinterface-lists-and-libraries.md)
