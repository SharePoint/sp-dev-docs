---
title: Requirements for the classic pages assessment
description: Configure authentication, permissions, audit access, and a supported environment for the Microsoft 365 Assessment tool classic pages component.
ms.date: 07/23/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Requirements for the classic pages assessment

The classic pages component assesses SharePoint Online. It doesn't assess SharePoint Server or another on-premises source.

Download the latest [Microsoft 365 Assessment tool release](https://github.com/pnp/pnpassessment/releases). Core classic page readiness analysis is available in version 1.15.0 and later. The Microsoft Graph audit usage flow, `--auditlogwindowdays`, and `classicpageauditusage.csv` contract documented in this guidance require version 1.16.0 or later.

For GCC High, Department of Defense, China, Germany, or a tenant that uses vanity URLs, configure `appsettings.json` as described in [Assessment tool configuration](https://pnp.github.io/pnpassessment/using-the-assessment-tool/configuration.html).

## Authentication

The tool supports the following authentication modes:

| Mode | Permission type | Recommended use |
| --- | --- | --- |
| `Application` | Application permissions and a certificate | Full-tenant and unattended assessments. |
| `Interactive` | Delegated permissions | A limited scope on Windows or macOS. |
| `Device` | Delegated permissions | A limited scope on Linux or another device-code scenario. |

Application authentication is recommended for a full-tenant assessment. A delegated assessment can access only the sites that the signed-in account can access.

For general application-registration steps, see [Configure authentication](https://pnp.github.io/pnpassessment/using-the-assessment-tool/setupauth.html).

## Permissions

The current classic pages implementation requires the following permissions:

| Authentication | Microsoft Graph | SharePoint |
| --- | --- | --- |
| Application | `Sites.Read.All` application permission | `Sites.Read.All` application permission |
| Interactive or Device | `Sites.Read.All` and `User.Read` delegated permissions | `AllSites.Read` delegated permission |

The page inventory reads web part configuration through the SharePoint `LimitedWebPartManager` API. Assessment version 1.16.0 can complete page and web part extraction with the read permissions in this table.

Grant admin consent for the configured permissions before starting the assessment.

## Audit usage permission

Unless you specify `--skipusageinformation`, the assessment queries Microsoft Graph for `ClassicPageViewed`, `ClassicPageCreated`, and `ClassicPageEdited` audit events.

Add `AuditLogsQuery-SharePoint.Read.All` in the permission type used by the authentication mode:

| Authentication | Additional Microsoft Graph permission |
| --- | --- |
| Application | `AuditLogsQuery-SharePoint.Read.All` application permission |
| Interactive or Device | `AuditLogsQuery-SharePoint.Read.All` delegated permission |

Grant admin consent. For delegated authentication, the signed-in account must also be authorized to search Audit data in Microsoft Purview.

If the permission is missing, page discovery and web part analysis can still finish. Audit rows are marked `failed`, and `SkipReason` explains the missing permission.

## Audit availability

- Verify that Microsoft Purview Audit is available and recording activity for the tenant.
- Unified Audit ingestion is enabled by default for most organizations. Verify `UnifiedAuditLogIngestionEnabled`; when it is `False`, enable it before running the query. Organization customization might need to be enabled first, and the change can take up to 60 minutes to propagate.
- The administrative property can return `True` before the Graph Audit Query backend is ready. During propagation, Graph can return HTTP 400 with backend status `AuditingDisabledTenant`; this is an Audit provisioning state, not a missing app permission.
- New events can take approximately 60 to 90 minutes to become available.
- `--auditlogwindowdays` accepts a value from 1 through 180. The default is 14.
- The Microsoft Graph audit query API used by the tool is available only in the global service. The current tool records audit collection as `skipped` in sovereign-cloud environments.

Use `--skipusageinformation` when audit data isn't required or isn't available. In that case, `classicpageauditusage.csv` isn't generated.

## Report platform

CSV report generation is supported on Windows, macOS, and Linux. Power BI template generation requires Windows.

To create a Power BI template for an assessment that ran on macOS or Linux, copy the complete assessment-ID folder to the Windows installation directory of the same tool version, and then run the `report` command on Windows.

## Data handling

Assessment output can contain tenant and site URLs, application identifiers, user information, audit activity, web part titles, and web part configuration.

- Use `--skipuserinformation` when the page modifier isn't required.
- Enable `--exportwebpartproperties` only when the configuration details are needed.
- Review and sanitize CSV files before sharing them outside the assessment team.
- Never include certificates, tokens, passwords, or unredacted authentication material with shared report output.

## Next steps

- [Run a classic pages assessment](assessment-tool-classic-pages-run.md)
- [Interpret the classic pages report](assessment-tool-classic-pages-report.md)
- [Classic pages CSV reference](assessment-tool-classic-pages-csv.md)
