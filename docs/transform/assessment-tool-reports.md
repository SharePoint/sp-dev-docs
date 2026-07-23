---
title: Microsoft 365 Assessment reports and CSV files
description: Understand the Power BI templates, report tabs, and CSV files produced by the Microsoft 365 Assessment tool.
ms.date: 07/23/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Microsoft 365 Assessment reports and CSV files

The Microsoft 365 Assessment tool stores assessment data locally and generates CSV exports for the selected mode. On Windows, it also generates a Power BI template. On macOS and Linux, copy the assessment data to Windows if you need to generate the Power BI template.

## Public report templates

| Mode | Power BI template | Report tabs |
| --- | --- | --- |
| Classic | `ClassicAssessmentReport.pbit` | Start; Summary; Sites overview; Extensibility; Extensibility: user custom actions; InfoPath; Lists; Lists details; Pages; Workflow; Workflow details; Scan overview |
| InfoPath | `InfoPathAssessmentReport.pbit` | InfoPath; Scan overview |
| AddInsACS | `AddInsACSAssessmentReport.pbit` | SharePoint AddIns; Add-In details; ACS Principals; ACS Details; Scan overview |
| Alerts | `AlertsAssessmentReport.pbit` | Overview; Details; Scan overview |

Workflow tabs remain in the Classic template for compatibility with existing data. Workflow is retired and isn't a supported component for new assessments.

The current Classic Power BI model uses the basic page inventory. Enriched home-page, web part, mapping, audit, and page-readiness rollup fields are available in CSV output but aren't included in the embedded visuals.

## Common CSV files

Every assessment report exports:

| File | Purpose |
| --- | --- |
| `scans.csv` | Assessment ID, dates, status, version, mode, scope, and authentication configuration. |
| `properties.csv` | Assessment properties and component options. |
| `history.csv` | Assessment lifecycle events and messages. |
| `sitecollections.csv` | Site-collection scan status and duration. |
| `webs.csv` | Web scan status, template, and duration. |

> [!CAUTION]
> Common report files can contain tenant URLs, application identifiers, site scope, operational messages, and protected authentication configuration values. Review and sanitize these files before sharing them outside the assessment team. Never publish passwords, certificates, tokens, or unredacted tenant identifiers.

For exact fields, status values, and join keys, see [Common Microsoft 365 Assessment CSV files](assessment-tool-common-reports.md).

## Classic mode files

Classic mode exports:

```text
workflows.csv
classicextensibilities.csv
classicinfopath.csv
classiclists.csv
classicpages.csv
classicpagewebparts.csv
classicwebpartunique.csv
classicusercustomactions.csv
classicsitesummaries.csv
classicwebsummaries.csv
classicpublishingsitesummaries.csv
```

`classicpageauditusage.csv` is added only when audit collection produces rows.

The `workflows.csv` compatibility output can be empty because Workflow is retired.

For Classic page schemas, join keys, and coverage rules, see [Classic pages CSV reference](assessment-tool-classic-pages-csv.md). For an interpretation workflow, see [Interpret the classic pages assessment report](assessment-tool-classic-pages-report.md).

## Other mode-specific files

| Mode | Files |
| --- | --- |
| InfoPath | `classicinfopath.csv` |
| AddInsACS | `classicaddins.csv`, `classicacsprincipals.csv`, `classicacsprincipalsites.csv`, `classicacsprincipalsitescopedpermissions.csv`, `classicacsprincipaltenantcopedpermissions.csv` |
| Alerts | `alerts.csv` |

Across current public modes, the report contract defines 23 distinct CSV file names, including the optional page audit usage file.

## Generate reports

Generate a report only after the assessment is `Finished` or intentionally `Paused`. A status of `Finalizing` means post-scan work is still running, and the report command rejects the request.

The examples use the Windows executable name. On macOS or Linux, use `./microsoft365-assessment` and an operating-system-appropriate output path. Power BI template generation remains Windows-only.

```console
microsoft365-assessment.exe list
microsoft365-assessment.exe report --id <assessment-id>
```

To export only CSV files:

```console
microsoft365-assessment.exe report --id <assessment-id> --mode CsvOnly --path "c:\reports"
```
