---
title: Assess classic SharePoint pages
description: Discover classic pages, inventory their web parts, and measure page modernization readiness.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Assess classic SharePoint pages

Use the Classic pages component of the Microsoft 365 Assessment Tool to discover classic wiki, web part, publishing, blog, ASPX, and Delve Blog pages in SharePoint Online.

Wiki, Web Part, and Publishing pages receive detailed Web Part inventory, layout, home-page, and mapping-readiness enrichment. Blog, ASPX, and Delve Blog pages are discovered and recorded, but they don't receive the same Web Part mapping readiness analysis.

The assessment can optionally collect page view/create/edit activity from the Microsoft Graph audit log.

In the current implementation, Delve Blog pages appear in `classicpages.csv` but aren't included in the page-type counts in `classicwebsummaries.csv` or `classicsitesummaries.csv`.

## In this guidance

- [Requirements](assessment-tool-classic-pages-requirements.md)
- [Run the assessment](assessment-tool-classic-pages-run.md)
- [Interpret the report](assessment-tool-classic-pages-report.md)
- [CSV reference](assessment-tool-classic-pages-csv.md)
- [Publishing portal coverage](assessment-tool-publishing-coverage.md)

## Run the assessment

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Pages `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

Page-specific options:

| Option | Purpose |
| --- | --- |
| `--exportwebpartproperties` | Exports Web Part properties as JSON. |
| `--skipusageinformation` | Skips audit log usage collection. |
| `--auditlogwindowdays` | Sets the audit window from 1 through 180 days. The default is 14. |
| `--skipuserinformation` | Omits user information such as Modified By. |
| `--homepageonly` | Assesses only the home page of each Web. |

For authentication, SharePoint access, audit permissions, platform support, and sensitive-output guidance, see [Requirements for the classic pages assessment](assessment-tool-classic-pages-requirements.md).

## Output

| File | Content |
| --- | --- |
| `classicpages.csv` | One row per classic page, including page type, layout, home-page flags, mapping percentage, and unmapped Web Parts. |
| `classicpagewebparts.csv` | One row per Web Part found on a classic page. |
| `classicwebpartunique.csv` | One row per unique Web Part type across the assessment. |
| `classicpageauditusage.csv` | Page view/create/edit activity when audit collection runs. |
| `classicwebsummaries.csv` | Per-Web page counts and readiness rollups. |
| `classicsitesummaries.csv` | Per-site-collection page counts and readiness rollups. |
| `classicpublishingsitesummaries.csv` | Publishing Portal site-level summary. |

The Power BI template includes a **Pages** report tab and shared summary/scan-overview tabs.

For schemas and join keys, see [Classic pages CSV reference](assessment-tool-classic-pages-csv.md).

## Understand mapping results

For Wiki, Web Part, and Publishing pages, `MappingPercentage` measures whether each Web Part has a usable mapping in the embedded mapping model. It doesn't guarantee that the transformed page will preserve all visual or business behavior.

For Blog, ASPX, and Delve Blog pages, don't interpret default or empty Web Part readiness values as a completed mapping analysis.

For an enriched page, `WebPartCount=0` and `MappingPercentage=100` means that no Web Parts were extracted. `WebPartCount=0` and `MappingPercentage=0` can indicate that page enrichment failed; review the assessment log for that page.

`InMappingFile` in `classicwebpartunique.csv` only indicates that a Web Part type is present in the mapping file. Use `IsMappable` in `classicpagewebparts.csv` and the per-page mapping percentage to determine whether a usable mapping was found.

For a complete interpretation workflow, see [Interpret the classic pages assessment report](assessment-tool-classic-pages-report.md).

## Additional open-source documentation

- [Classic SharePoint Pages Assessment](https://pnp.github.io/pnpassessment/classic/readme.html)
- [Requirements](https://pnp.github.io/pnpassessment/classic/requirements.html)
- [Run an assessment](https://pnp.github.io/pnpassessment/classic/assess.html)
- [Power BI report](https://pnp.github.io/pnpassessment/classic/report-intro.html)
