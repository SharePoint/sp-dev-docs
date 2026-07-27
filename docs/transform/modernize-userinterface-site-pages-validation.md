---
title: Validate transformed classic pages
description: Validate transformed page content, layout, links, metadata, permissions, and publication state before expanding a migration wave.
ms.date: 07/27/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Validate transformed classic pages

Validate every page in a representative transformation wave before processing more pages. A successful command or an HTTP 200 response doesn't prove that the generated page preserved the expected content.

## Capture the expected result

Before transformation, record:

- Source and expected target URLs.
- Page type and layout.
- Visible text and headings.
- Web Parts and their important configuration.
- Links, images, files, lists, and embedded content.
- Metadata, permissions, publication state, and whether the page is a home page.

Retain the Assessment row and `classicpagewebparts.csv` rows with this baseline.

For the delegated `AllSites.Manage` first-wave path, select pages that inherit permissions from their library and keep generated pages as drafts. If unique source permissions must be preserved, use the reviewed `AllSites.FullControl` path instead of skipping permission copy.

## Review the transformation result

For each page:

1. Review the PnP transformation log for errors, skipped Web Parts, fallback mappings, and permission-copy messages.
1. Confirm that the classic source page still exists and retains its expected name.
1. Confirm that the expected modern page exists and opens.
1. Compare visible text, Web Parts, sections, columns, and ordering.
1. Test links, images, documents, list views, and other dependencies.
1. Compare required metadata, author and modified values, permissions, comments, and publication state.
1. Record the result and evidence before processing the next page.

## Detect incomplete output

Treat the page as failed when:

- The target page is blank or contains only a title.
- Expected text or a required Web Part is missing.
- A Web Part is present but points to the wrong list, file, site, user, or term.
- The layout or page header prevents the page from meeting its business purpose.
- Required metadata or permissions weren't retained.
- The transformation log contains an unresolved error.

Manually inspect pages where Assessment reported `WebPartCount=0`, even when `MappingPercentage=100`. Also validate pages reported as fully mapped because runtime data or mapping functions can still cause a transformation failure.

## Record the wave result

Use one record per attempted page:

| Field | Purpose |
| --- | --- |
| `AssessmentId` | Links the page to the source evidence. |
| `SourcePageUrl`, `TargetPageUrl` | Identifies both pages. |
| `PageType`, `Layout` | Groups comparable results. |
| `MappingPercentage`, `UnmappedWebParts` | Preserves the planning signal. |
| `TransformationStatus` | Created, failed, or skipped. |
| `LogPath` | Points to the PnP transformation log. |
| `ValidationStatus` | Passed, failed, or needs remediation. |
| `ValidationNotes` | Records missing content, mapping issues, and follow-up work. |
| `ValidatedBy`, `ValidatedAt` | Records approval ownership. |

## Decide whether to expand

Expand the wave only when:

- Every representative source page remains available.
- Every approved target page passes content and behavior validation.
- Draft targets are published only after approval.
- Common blockers have a documented remediation or mapping.
- Failed or partial pages are excluded from the next wave.
- The next wave has an owner, rollback plan, and retained logs.

If a page fails, stop processing comparable pages. Review the log and source Web Parts, update the mapping or candidate rule when appropriate, and retry a single representative page before resuming.

After a draft page is approved, publish it through the page editing experience or with the current [Set-PnPPage](https://pnp.github.io/powershell/cmdlets/Set-PnPPage.html) `-Publish` option.

## Expand the wave

After validating every representative page:

1. Set each representative result to `ValidationStatus=Passed`.
1. Create `approved-pages.csv` from the additional grouped rows that the user approved.
1. Run `Convert-SelectedPages.ps1` with the original representative manifest and validated results.
1. Validate every generated page in the expanded wave before publishing it.

The script blocks expansion if a representative result is missing, stale, not passed, or based on a different PnP PowerShell or Web Part mapping profile.

## Next steps

1. Return failed pages to the remediation backlog.
1. Add passed page patterns to `approved-pages.csv` and run the expansion script.

## Reference

- [Transform selected pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md)
- [Classic pages assessment CSV reference](assessment-tool-classic-pages-csv.md)
- [Classic Web Part mappings](modernize-userinterface-site-pages-webparts.md)
