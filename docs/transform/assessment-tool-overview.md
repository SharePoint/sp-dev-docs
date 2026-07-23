---
title: Microsoft 365 Assessment tool overview
description: Learn what the Microsoft 365 Assessment tool assesses and how to get started.
ms.date: 07/23/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Microsoft 365 Assessment tool overview

The Microsoft 365 Assessment tool is an open-source command-line tool that collects data from Microsoft 365 and generates CSV reports. On Windows, it also generates a Power BI template. Use the reports to plan modernization, adoption, and retirement work.

## Public assessment modules

| Module | CLI mode | Purpose |
| --- | --- | --- |
| Classic | `Classic` | Assesses classic pages, lists, InfoPath usage, and classic extensibility components selected with `--classicinclude`. |
| InfoPath Forms Services | `InfoPath` | Inventories InfoPath usage and supports retirement planning. |
| SharePoint Add-Ins and Microsoft Azure Access Control Service (ACS) | `AddInsACS` | Inventories SharePoint Add-Ins and Azure ACS principals. |
| SharePoint Alerts | `Alerts` | Inventories SharePoint Alerts for retirement planning. |

The Workflow mode is retired. Workflow implementation and report artifacts remain in the repository for compatibility with existing assessment data, but a new Workflow assessment can't be started.

## Get started

1. [Download the latest release](https://github.com/pnp/pnpassessment/releases).
1. [Configure authentication](https://pnp.github.io/pnpassessment/using-the-assessment-tool/setupauth.html).
1. Review the requirements for the selected assessment module.
1. Run `microsoft365-assessment.exe --help` and `microsoft365-assessment.exe start --help`.
1. Start an assessment.
1. Monitor it with the `status` and `list` actions.
1. Generate a report with the `report` action.

Command examples in this guidance use the Windows executable name `microsoft365-assessment.exe`. On macOS or Linux, mark the downloaded binary as executable and use `./microsoft365-assessment` instead. Replace Windows file paths with paths for your operating system.

The detailed open-source project documentation remains available at [pnp.github.io/pnpassessment](https://pnp.github.io/pnpassessment/index.html).

## Common report output

Every assessment report exports:

```text
scans.csv
properties.csv
history.csv
sitecollections.csv
webs.csv
```

The selected mode adds module-specific CSV files. On Windows, report generation also creates a Power BI template. On macOS and Linux, copy the assessment data to Windows if you need to generate the Power BI template. For the complete inventory, see [Microsoft 365 Assessment reports and CSV files](assessment-tool-reports.md).

## Classic assessment components

When `--mode Classic` is selected, use `--classicinclude` to choose one or more components:

```text
InfoPath
Pages
Lists
Extensibility
```

If `--classicinclude` is omitted, all supported Classic components run. Workflow is retired, and Add-Ins/Azure ACS use the separate `AddInsACS` mode.

## Related guidance

- [Classic pages assessment](assessment-tool-classic-pages.md)
- [Classic pages requirements](assessment-tool-classic-pages-requirements.md)
- [Run a classic pages assessment](assessment-tool-classic-pages-run.md)
- [Lists and libraries assessment](assessment-tool-lists.md)
- [Extensibility assessment](assessment-tool-extensibility.md)
- [Compare assessment tools](sharepoint-modernization-assessment-comparison.md)
