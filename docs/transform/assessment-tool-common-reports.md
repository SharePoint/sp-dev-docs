---
title: Common Microsoft 365 Assessment CSV files
description: Understand the scans, properties, history, site collection, and web CSV files exported by every Microsoft 365 Assessment Tool report.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Common Microsoft 365 Assessment CSV files

Every Microsoft 365 Assessment Tool report exports these files:

```text
scans.csv
properties.csv
history.csv
sitecollections.csv
webs.csv
```

Use the common files to validate scope and coverage before interpreting a module-specific finding.

## Join keys

| Relationship | Keys |
| --- | --- |
| Assessment to any output | `ScanId` |
| Assessment to site collection | `ScanId`, `SiteUrl` |
| Assessment to web | `ScanId`, `SiteUrl`, `WebUrl` |

## `scans.csv`

This file contains one row for the assessment.

| Column | Description |
| --- | --- |
| `ScanId` | Assessment identifier. |
| `StartDate` | First start time. |
| `EndDate` | Completion, pause, or termination time when available. |
| `Status` | `Queued`, `Running`, `Pausing`, `Paused`, `Finished`, or `Terminated`. |
| `PreScanStatus` | Status of component-specific pre-assessment work. |
| `PostScanStatus` | Status of the post-scan processing phase. |
| `Version` | Assessment Tool version. |
| `CLIMode` | Selected assessment mode. |
| `CLITenant` | SharePoint tenant host supplied to the CLI. |
| `CLITenantId` | Microsoft Entra tenant identifier when recorded. |
| `CLIEnvironment` | Selected Microsoft 365 cloud environment. |
| `CLISiteList` | Site list supplied directly to the CLI. |
| `CLISiteFile` | Site-list file path supplied to the CLI. |
| `CLIAuthMode` | Application, Interactive, or Device authentication. |
| `CLIApplicationId` | Entra application identifier. |
| `CLICertPath` | Certificate-store path supplied to the CLI. |
| `CLICertFile` | Certificate-file path supplied to the CLI. |
| `CLICertFilePassword` | Locally protected certificate password value when one was supplied. |
| `CLIThreads` | Configured parallel operation count. |

> [!CAUTION]
> Treat `scans.csv` as sensitive operational data. It can disclose tenant identifiers, application identifiers, site scope, local paths, and protected authentication configuration. Don't publish it without review and sanitization.

## `properties.csv`

This file contains persisted assessment options.

| Column | Description |
| --- | --- |
| `ScanId` | Assessment identifier. |
| `Name` | Option or property name. |
| `Type` | Stored value type. |
| `Value` | Stored option value. |

Use this file to verify component selection and module-specific options, such as page scan flags.

## `history.csv`

This file contains assessment lifecycle events and messages.

| Column | Description |
| --- | --- |
| `ScanId` | Assessment identifier. |
| `Id` | Local event identifier. |
| `Event` | Event category. |
| `EventDate` | Event time. |
| `Message` | Operational message. |

Use `history.csv` together with the assessment log when report coverage or lifecycle state is unclear.

## `sitecollections.csv`

This file contains one row per site collection in scope.

| Column | Description |
| --- | --- |
| `ScanId` | Assessment identifier. |
| `SiteUrl` | Absolute site-collection URL. |
| `StartDate` | Site-collection processing start time. |
| `EndDate` | Site-collection processing end time. |
| `ScanDuration` | Processing duration recorded by the tool. |
| `Status` | `Queued`, `Running`, `Finished`, or `Failed`. |

The internal error and stack-trace properties aren't exported to this CSV. Use the assessment log and `history.csv` for failure details.

## `webs.csv`

This file contains one row per discovered web queued for processing. Use `Status` to determine whether processing started or finished.

| Column | Description |
| --- | --- |
| `ScanId` | Assessment identifier. |
| `SiteUrl` | Absolute site-collection URL. |
| `WebUrl` | Site-collection-relative web URL. `/` represents the root web. |
| `WebUrlAbsolute` | Absolute web URL. |
| `StartDate` | Web processing start time. |
| `EndDate` | Web processing end time. |
| `ScanDuration` | Processing duration recorded by the tool. |
| `Status` | `Queued`, `Running`, `Finished`, or `Failed`. |
| `Template` | Web template. |

The internal error and stack-trace properties aren't exported to this CSV.

## Validate coverage

1. Confirm the assessment row and expected mode in `scans.csv`.
1. Confirm component options in `properties.csv`.
1. Identify failed or unfinished site collections and webs.
1. Review `history.csv` and the local log for failure details.
1. Only then interpret module-specific counts and findings.

For the complete mode-specific inventory, see [Microsoft 365 Assessment reports and CSV files](assessment-tool-reports.md).
