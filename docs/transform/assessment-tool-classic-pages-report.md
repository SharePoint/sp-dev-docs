---
title: Interpret the classic pages assessment report
description: Use page, web part, usage, and rollup results from the Microsoft 365 Assessment Tool to plan SharePoint page modernization.
ms.date: 07/22/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Interpret the classic pages assessment report

A Classic assessment exports CSV files for every Classic component. On Windows, the default `report` command also creates `ClassicAssessmentReport.pbit`.

The Power BI template contains these tabs:

```text
Start
Summary
Sites overview
Extensibility
Extensibility: user custom actions
InfoPath
Lists
Lists details
Pages
Workflow
Workflow details
Scan overview
```

Workflow is retired. Its tabs and `workflows.csv` remain for compatibility with existing assessment data.

## Validate scan coverage first

Before interpreting page readiness, confirm that the expected scope completed:

1. Use **Scan overview**, `scans.csv`, and `history.csv` to review assessment state and messages.
1. Use `sitecollections.csv` and `webs.csv` to identify failed, unfinished, or unusually slow locations.
1. Confirm whether the assessment used a complete tenant scope, `--siteslist`, or `--sitesfile`.
1. Review `classicpageauditusage.csv` coverage status before using activity counts.

An assessment that finished can still contain site or web failures. Treat missing locations as a coverage gap, not as a finding that no classic content exists.

## Prioritize pages

The current **Pages** Power BI tab uses the basic page inventory fields, such as page type, URL, modification date, and remediation code.

Use `classicpages.csv` for the enriched readiness fields and to segment pages by:

- Page type.
- Home-page status.
- Last modification date and modifier.
- Web part count.
- Mapping percentage.
- Unmapped web part types.

Combine this inventory with `classicpageauditusage.csv` to distinguish frequently used pages from stale or low-use content.

The current embedded Power BI model doesn't include the enriched home-page, web part, mapping, audit, or page-readiness rollup fields. Analyze those fields directly in the CSV files, or extend the Power BI model before using them in visuals.

Audit usage is a planning signal, not a raw web analytics counter. Always check `QueryStatus`:

| Status | Meaning |
| --- | --- |
| `succeeded` | The requested audit window completed. |
| `partial` | One or more audit subqueries failed. Counts are a lower bound. |
| `failed` | Audit collection failed. Counts aren't usable. |
| `skipped` | Audit collection wasn't run for the site, such as in an unsupported cloud. |
| `error` | An unexpected post-scan exception occurred. Review `SkipReason` and the assessment log. |

When a site's audit query succeeded, the absence of a page row means that no matching events were returned for that page in the requested window. Treat an absent row as zero activity only after confirming successful coverage for the site.

## Understand page-type coverage

Wiki, Web Part, and Publishing pages receive detailed web part extraction and mapping analysis.

Blog, ASPX, and Delve Blog pages are discovered and recorded, but don't receive the same mapping-readiness enrichment. Don't interpret a default or empty mapping value for these page types as a completed readiness analysis.

Delve Blog pages appear in `classicpages.csv` but aren't included in the current web and site page-count rollups.

## Interpret mapping results

`MappingPercentage` is the percentage of extracted web parts that have a usable mapping in the embedded mapping model:

- A page with no extracted web parts is 100 percent by convention.
- A 100-percent result means that all extracted web part types have mappings. It doesn't guarantee visual, data, permission, or business-behavior parity after transformation.
- A value below 100 with `WebPartCount` greater than zero identifies one or more web part types that require remediation, replacement, or a custom mapping.
- For a Wiki, Web Part, or Publishing page, `WebPartCount=0` and `MappingPercentage=0` can indicate that extraction failed before the mapping calculation ran. Review the assessment log for `Failed to assess the web parts of classic page`.

Use `classicpagewebparts.csv` for the per-page decision:

- `IsMappable` means that the web part has a nonempty usable mapping.
- `WebPartProperties` is populated only when `--exportwebpartproperties` was selected.
- Row, column, zone, order, hidden, and closed values help explain the current page layout.

Use `classicwebpartunique.csv` to identify web part types that affect many pages. `InMappingFile` is weaker than `IsMappable`: it only means that the type has an entry in the mapping file.

The current Assessment implementation deliberately treats the community mappings for `ScriptEditorWebPart` and `SimpleFormWebPart` as unavailable. It also doesn't support the legacy Scanner's on-disk mapping-file override.

## Use rollups

Use `classicwebsummaries.csv` and `classicsitesummaries.csv` to identify:

- Webs and site collections with the most classic pages.
- Pages with fully mappable or unmapped web parts.
- Average mapping percentage across pages that contain web parts.
- Default home pages that can be replaced as an early modernization wave.

Rollups are useful for sequencing, but return to the page and web part CSV files before making a remediation decision.

## Review publishing portals

`classicpublishingsitesummaries.csv` provides a site-collection-level publishing summary. Detailed legacy web-level publishing configuration isn't included.

See [Understand publishing portal coverage](assessment-tool-publishing-coverage.md) before replacing an established Publishing Scanner workflow.

## Power BI and CSV

The Power BI template is a visualization layer over the CSV output. The CSV files remain the source for:

- Automation.
- Schema-level validation.
- Joining page, web part, usage, web, and site records.
- Retaining a reviewable evidence snapshot.

Power BI template generation requires Windows. CSV generation works on Windows, macOS, and Linux.

For every field and join key, see [Classic pages CSV reference](assessment-tool-classic-pages-csv.md).
