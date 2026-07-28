---
title: Run Assessment page wave scripts
description: Save and run the embedded PnP PowerShell scripts for representative and user-approved classic page transformation waves.
ms.date: 07/28/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Run Assessment page wave scripts

Use these scripts with the representative-page manifest created from the Classic Pages Assessment output. Save all three files in the same folder.

The scripts support Wiki and Web Part pages in the default `SitePages` library. They create draft modern pages and exclude home pages, zero-part pages, modified sources, and pages with unique permissions.

## Script files

| File | Purpose |
| --- | --- |
| `PageTransformation.Common.ps1` | Shared authentication, source validation, transformation, and result persistence. |
| `Convert-RepresentativePages.ps1` | Transforms all selected representative pages and writes validation-pending results. |
| `Convert-SelectedPages.ps1` | Transforms additional user-approved pages only after every included pattern has a passed representative. |

## PageTransformation.Common.ps1

[!code-powershell[page-transformation-common](../../includes/scripts/page-transformation/PageTransformation.Common.ps1 "Shared page wave functions")]

## Convert-RepresentativePages.ps1

[!code-powershell[convert-representative-pages](../../includes/scripts/page-transformation/Convert-RepresentativePages.ps1 "Transform all selected representative pages")]

## Convert-SelectedPages.ps1

[!code-powershell[convert-selected-pages](../../includes/scripts/page-transformation/Convert-SelectedPages.ps1 "Transform all additional user-approved pages")]

## Next steps

1. [Build representative page groups and run the scripts](modernize-userinterface-site-pages-powershell.md#build-representative-page-groups).
1. [Validate every transformed page](modernize-userinterface-site-pages-validation.md).
