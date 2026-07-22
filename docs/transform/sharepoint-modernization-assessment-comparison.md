---
title: Compare SharePoint modernization assessment tools
description: Compare Microsoft 365 Assessment, the legacy SharePoint Modernization Scanner, and on-premises assessment tools.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Compare SharePoint modernization assessment tools

Use the Microsoft 365 Assessment Tool for new SharePoint Online assessments when it supports the scenario. Continue to use the legacy SharePoint Modernization Scanner only for an established workflow or a capability that isn't yet available in Assessment.

## Capability comparison

| Capability | Microsoft 365 Assessment Tool | Legacy Modernization Scanner | Guidance |
| --- | --- | --- | --- |
| Classic page discovery and Web Part readiness | Available | Available | Use Assessment for new work. |
| Modern list and library readiness | Available; output is normalized and isn't field-for-field compatible | Available | Use Assessment for new work; retain Scanner documentation for existing reports. |
| Classic extensibility and user custom actions | Available | Available as part of Groupify/site reports | Use Assessment for new work. |
| InfoPath | Available | Available | Use Assessment. |
| Blog pages | Included in Classic pages | Dedicated legacy reports | Use Assessment for new discovery. |
| Publishing pages and portal-level summary | Page readiness and site-level summary available; full Web-level configuration isn't available | Available | Use Assessment where sufficient; see [publishing portal coverage](assessment-tool-publishing-coverage.md) before replacing a legacy workflow. |
| Microsoft 365 group connection readiness | Not available | Available | Use the legacy Scanner. |
| SharePoint Designer customized forms | Not available as a dedicated assessment | Available | Use the legacy Scanner. |
| Workflow 2013 | Retired | Legacy workflow reports | Follow workflow retirement guidance instead of starting a new scan. |
| SharePoint Server/on-premises | Not supported | Not supported | Use SMAT or another on-premises assessment tool. |

## Output compatibility

Assessment and Scanner output files don't use the same names or schemas. Before reusing an automation script built for Scanner CSV files, map each required field to the corresponding Assessment output and verify any missing detail.

For current Assessment output, see [Microsoft 365 Assessment reports and CSV files](assessment-tool-reports.md).
