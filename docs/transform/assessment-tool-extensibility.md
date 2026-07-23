---
title: Assess classic SharePoint extensibility
description: Find classic branding and incompatible user custom actions with the Microsoft 365 Assessment tool.
ms.date: 07/23/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Assess classic SharePoint extensibility

Use the Extensibility component of the Microsoft 365 Assessment tool to identify classic branding and user customizations that require remediation before adopting modern SharePoint experiences.

## Before you begin

- Download the latest [Microsoft 365 Assessment tool release](https://github.com/pnp/pnpassessment/releases).
- [Configure an Entra application](https://pnp.github.io/pnpassessment/using-the-assessment-tool/setupauth.html). Application authentication is recommended for a full-tenant assessment.
- Use `--skipusageinformation` for an Extensibility-only assessment because the current Classic post-scan path otherwise starts the page Audit query.

Use the following permissions:

| Authentication | Microsoft Graph | SharePoint |
| --- | --- | --- |
| Application | `Sites.Read.All` application permission | `Sites.Read.All` application permission |
| Interactive or Device | `Sites.Read.All` and `User.Read` delegated permissions | `AllSites.Read` delegated permission |

## Run the assessment

The example uses the Windows executable name. On macOS or Linux, use `./microsoft365-assessment`.

```powershell
microsoft365-assessment.exe start --mode Classic --classicinclude Extensibility `
  --skipusageinformation `
  --authmode application `
  --tenant <tenant>.sharepoint.com `
  --applicationid <application-id> `
  --certpath "My|CurrentUser|<certificate-thumbprint>"
```

## What the assessment checks

The component identifies:

- Custom site and system master pages.
- Alternate CSS.
- Site-scoped, Web-scoped, and List-scoped user custom actions.
- Script blocks and external script sources.
- JavaScript commands embedded in command UI extensions.
- Incompatible custom-action locations.

Out-of-the-box master pages are excluded from the custom master-page result.

## Output

### `classicextensibilities.csv`

One row per affected Web, including:

- Custom master-page paths.
- Alternate CSS.
- Presence of incompatible user custom actions.
- Aggregated remediation codes.

### `classicusercustomactions.csv`

One row per incompatible user custom action, including:

- Title, name, location, and registration information.
- Command action and command UI extension.
- Script block and script source.
- List ID, URL, and title for List-scoped actions.
- Detected problem and remediation code.

The Classic Power BI template includes **Extensibility** and **Extensibility: user custom actions** tabs.

For the exact fields and row-selection behavior, see [Extensibility assessment CSV reference](assessment-tool-extensibility-csv.md).

## Use the Power BI report

The **Extensibility** tab provides a per-web table for:

- Custom master pages.
- Alternate CSS.
- Incompatible user custom actions.
- Remediation codes.

It also includes site, web, master-page, CSS, custom-action, theme, and Add-In filters. The current Extensibility component doesn't populate custom-theme or SharePoint Add-In findings, so don't interpret the corresponding compatibility fields as a complete assessment of those scenarios.

The **Extensibility: user custom actions** tab provides:

- A summary table with web, location, problem, List title, and remediation code.
- A details table for script source, script block, command UI extension, and command action.
- Charts grouped by location and detected problem.

Use the CSV files for exact identifiers, registration metadata, row selection, and automation.

## Remediation codes

| Code | Meaning |
| --- | --- |
| `CE3` | Custom master page. |
| `CE4` | Alternate CSS. |
| `CE6` | List Ribbon extension or user custom action. |
| `CE8` | Embedded JavaScript. |
| `CE9` | Other incompatible UI extension or location. |

The model contains a `CE5` custom-theme code, but the current Extensibility component doesn't populate custom-theme findings.

## Scope boundaries

The Extensibility component doesn't replace Microsoft 365 group connection readiness. It also doesn't assess SharePoint Add-Ins or Microsoft Azure Access Control Service (ACS) inside Classic mode; use the separate `AddInsACS` assessment.

## Next steps

- [Modernize customizations](modernize-customizations.md)
- [SharePoint Framework Extensions](../spfx/extensions/overview-extensions.md)
- [Compare SharePoint modernization assessment tools](sharepoint-modernization-assessment-comparison.md)
