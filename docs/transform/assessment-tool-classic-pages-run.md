---
title: Run a classic pages assessment
description: Start, scope, monitor, and report a Microsoft 365 Assessment Tool classic pages assessment.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Run a classic pages assessment

Use `--mode Classic --classicinclude Pages` to run only the classic pages component. If you omit `--classicinclude`, the tool runs all supported Classic components: Pages, Lists, InfoPath, and Extensibility.

Before you start, complete the [classic pages requirements](assessment-tool-classic-pages-requirements.md).

## Assess the complete tenant

Application authentication is recommended for a full-tenant assessment:

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Pages `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

The `--tenant` value is the SharePoint host name without `https://`.

## Assess selected site collections

Use `--siteslist` for a short comma-separated list:

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Pages `
  --authmode interactive `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --siteslist "https://<tenant>.sharepoint.com/sites/site1,https://<tenant>.sharepoint.com/sites/site2"
```

Use `--sitesfile` for a larger scope:

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Pages `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>" `
  --sitesfile "C:\assessment\sites.txt"
```

The sites file contains one absolute site-collection URL per line. Don't combine `--siteslist` and `--sitesfile`.

## Page-specific options

| Option | Effect |
| --- | --- |
| `--exportwebpartproperties` | Adds serialized web part properties to `classicpagewebparts.csv`. |
| `--skipusageinformation` | Skips Microsoft Graph audit usage collection and doesn't generate `classicpageauditusage.csv`. |
| `--auditlogwindowdays <1-180>` | Sets the audit window. The default is 14 days. |
| `--skipuserinformation` | Omits page modifier information. |
| `--homepageonly` | Assesses only the home page of each web. |
| `--threads <number>` | Changes parallelism. Start with 4 through 8 threads when throttling is a concern. |

For example, assess only home pages, export web part properties, and skip audit usage:

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Pages `
  --homepageonly `
  --exportwebpartproperties `
  --skipusageinformation `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

## Scope considerations

- For a vanity URL tenant, provide `--siteslist` or `--sitesfile`.
- For a Multi-Geo tenant, run a separate assessment for each geo. Use the primary tenant host in `--tenant` and provide the geo's site collections with `--siteslist` or `--sitesfile`.
- Run a small representative scope first to validate authentication, output, audit access, and scan duration.
- The tool supports up to three parallel assessments, but parallel scans increase the risk of throttling.

## Monitor and control the assessment

List available assessments:

```console
microsoft365-assessment.exe list
```

Show continuously refreshed status:

```console
microsoft365-assessment.exe status
```

Pause and restart an assessment:

```console
microsoft365-assessment.exe pause --id <assessment-id>
microsoft365-assessment.exe restart --id <assessment-id>
```

The assessment ID is also the name of the local data folder. Review the log in that folder if progress stops changing.

## Generate report output

Generate CSV files and, on Windows, the Power BI template:

```console
microsoft365-assessment.exe report --id <assessment-id>
```

Generate only CSV files in a custom location:

```console
microsoft365-assessment.exe report --id <assessment-id> --mode CsvOnly --path "C:\reports"
```

By default, output is written to the `report` subfolder under the assessment-ID folder.

Use `--delimiter Semicolon` when a semicolon-delimited export is required. Use `--open:$false` to prevent the generated report from opening automatically in PowerShell.

## Next steps

- [Interpret the classic pages report](assessment-tool-classic-pages-report.md)
- [Classic pages CSV reference](assessment-tool-classic-pages-csv.md)
- [Understand publishing portal coverage](assessment-tool-publishing-coverage.md)
