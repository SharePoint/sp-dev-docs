---
title: Transform classic SharePoint pages to modern pages
description: Select assessed classic pages, transform a representative wave with PnP PowerShell, validate the results, and expand safely.
ms.date: 07/27/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Transform classic SharePoint pages to modern pages

This primary workflow transforms classic pages in SharePoint Online. Use the Microsoft 365 Assessment tool to identify pages and their Web Parts, and then use PnP PowerShell to transform approved pages and validate each result before processing a larger wave.

This workflow uses PnP PowerShell as the primary execution path. The page transformation engine is part of the open-source [PnP Framework](https://github.com/pnp/pnpframework) and doesn't have a Microsoft support SLA.

## Page transformation workflow

[!INCLUDE [classic-page-transformation-workflow](../../includes/snippets/modernization/classic-page-transformation-workflow.md)]

## 1. Select page candidates

Start with a completed [Classic pages assessment](assessment-tool-classic-pages.md). Confirm scan coverage before selecting pages.

For the first wave:

- Select `WikiPage` or `WebPartPage` rows from successful site and web scans.
- Prefer pages with no unmapped Web Parts and a high mapping percentage.
- Review `classicpagewebparts.csv` for the exact Web Part types and mappings.
- Manually inspect any page with `WebPartCount=0`. A mapping percentage of 100 for a zero-part page only means that Assessment extracted no Web Parts.
- Avoid a home page until the transformation and validation process is proven.
- Record visible text, Web Parts, links, images, and layout that must be present after transformation.

`MappingPercentage=100` is a planning signal. It doesn't guarantee that the transformation will run successfully or preserve the expected content.

Route page types deliberately:

| Assessment page type | Transformation route |
| --- | --- |
| `WikiPage`, `WebPartPage` | Transform in place for the first wave. Use a target web only when the modern page must be created in another site. |
| `PublishingPage` | Use a target modern web and review the page-layout mapping. |
| `BlogPage` | Use the blog title as the identity and provide a target modern web. |
| `ASPXPage`, `DelveBlogPage` | Keep outside this Assessment-driven workflow because the page assessment doesn't provide equivalent transformation-readiness analysis. |

### Build a representative wave

Treat pages as the same transformation pattern only when these dimensions match:

| Dimension | Why it defines a separate pattern |
| --- | --- |
| `PageType` | Selects the Wiki/Web Part, Publishing, or Blog transformation path. |
| `Layout` | Controls the generated sections and columns. |
| Ordered Web Part signature | Pages with different Web Part types, order, hidden state, or closed state can transform differently. |
| Mapping result | Unmapped or differently mapped Web Parts require separate remediation and validation. |
| Target approach | In-place and cross-site transformations have different dependency and URL behavior. |
| Special handling | Home pages, custom publishing layouts, and zero-part pages require separate review. |

Use `classicpagewebparts.csv` to build the ordered Web Part signature for each page. Don't group only by `MappingPercentage` or `UnmappedWebParts`; fully mapped pages can still contain different Web Part types and runtime behavior.

For the first wave:

1. Exclude failed coverage, unsupported page types, home pages, zero-part pages, and unresolved mappings.
1. Group the remaining pages by page type, layout, and ordered Web Part signature.
1. Select at least one page from each pattern that you plan to migrate.
1. Add another representative when pages in the same pattern use materially different Web Part properties or content dependencies.
1. Prefer a page with a clear content baseline and a business owner who can validate the result.

Use activity and modification dates to prioritize which pattern to process first, not as a replacement for pattern coverage.

See [Build representative page groups with PowerShell](modernize-userinterface-site-pages-powershell.md#build-representative-page-groups).

For field-to-command mapping and a selected-page example, see [Interpret the classic pages assessment report](assessment-tool-classic-pages-report.md#move-from-assessment-to-transformation).

## 2. Resolve blockers and choose the target

Group candidate pages by page type, layout, and unmapped Web Part combination. Resolve common blockers before transforming a wave.

- For Wiki and Web Part pages, in-place transformation is the preferred starting point because dependencies remain in the source site.
- Publishing and Blog pages require a target modern web.
- Custom publishing layouts require a reviewed page-layout mapping. Without one, the engine generates a default mapping and places the content in a default section.
- Cross-site transformations require additional validation for links, files, lists, users, and taxonomy.

See [Choose in-place or cross-site transformation](modernize-userinterface-site-pages-approach.md) and [Review classic Web Part mappings](modernize-userinterface-site-pages-webparts.md).

## 3. Prepare PnP PowerShell

PnP PowerShell requires a tenant-owned Microsoft Entra application. Use a separate transformation application from the read-only Assessment application.

For the primary interactive flow, use delegated SharePoint `AllSites.Manage`, together with the signed-in user's existing site permissions. Copying item-level unique permissions requires `AllSites.FullControl`; otherwise, explicitly skip that copy.

Follow [Transform selected pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md) to register the application, connect, and run the first transformation.

## 4. Transform a representative wave

Transform a small wave that represents the page types, layouts, and Web Part combinations that you intend to process.

For the first wave:

- Let the generated page use the default `Migrated_` prefix.
- Don't use `-TakeSourcePageName`, `-Overwrite`, or home-page replacement options.
- Enable file logging and retain the log with the wave manifest.
- Stop on the first unexpected failure or content mismatch.

Only enable source-renaming or overwrite behavior after the generated pages have been approved and a rollback plan exists.

## 5. Validate and expand

Opening without an error isn't sufficient validation. A generated page can exist and still be blank or incomplete.

Validate the source and generated page, transformation log, content, Web Parts, layout, links, images, metadata, permissions, and publication state. Expand the wave only when every selected page meets the acceptance criteria.

See [Validate transformed classic pages](modernize-userinterface-site-pages-validation.md).

## Next steps

1. [Transform selected pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md).
1. [Validate the transformed pages](modernize-userinterface-site-pages-validation.md).

## Advanced reference

- [Choose in-place or cross-site transformation](modernize-userinterface-site-pages-approach.md)
- [Security requirements](modernize-userinterface-site-pages-security.md)
- [Classic Web Part mappings](modernize-userinterface-site-pages-webparts.md)
- [Page transformation configuration options](modernize-userinterface-site-pages-configuration.md)
- [Page transformation model](modernize-userinterface-site-pages-model.md)
- [Publishing page transformation model](modernize-userinterface-site-pages-model-publishing.md)
- [URL mapping](modernize-userinterface-site-pages-urlmapping.md)
- [User mapping](modernize-userinterface-site-pages-usermapping.md)
- [Term mapping](modernize-userinterface-site-pages-termmapping.md)
- [Layout transformation](modernize-userinterface-site-pages-layout.md)
- [.NET integration](modernize-userinterface-site-pages-dotnet.md)
- [Transform pages from SharePoint Server](modernize-userinterface-site-pages-powershell.md#route-other-page-types)
