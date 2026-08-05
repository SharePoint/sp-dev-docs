---
title: Requirements for the classic pages assessment
description: Configure authentication, permissions, audit access, and a supported environment for the Microsoft 365 Assessment tool classic pages component.
ms.date: 07/27/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# Requirements for the classic pages assessment

The classic pages component assesses SharePoint Online. It doesn't assess SharePoint Server or another on-premises source.

Download the latest [Microsoft 365 Assessment tool release](https://github.com/pnp/pnpassessment/releases). Core classic page readiness analysis is available in version 1.15.0 and later. The Microsoft Graph audit usage flow, `--auditlogwindowdays`, and `classicpageauditusage.csv` contract documented in this guidance require version 1.16.0 or later.

Configure `appsettings.json` for tenants in GCC High, DoD, or [Microsoft 365 operated by 21Vianet](/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-operated-by-21vianet), and for tenants that use custom SharePoint URLs (vanity URLs). See [Assessment tool configuration](https://pnp.github.io/pnpassessment/using-the-assessment-tool/configuration.html).

## Authentication

The tool supports the following authentication modes:

| Mode | Permission type | Recommended use |
| --- | --- | --- |
| `Application` | Application permissions and a certificate | Full-tenant and unattended assessments. |
| `Interactive` | Delegated permissions | A limited scope on Windows or macOS. |
| `Device` | Delegated permissions | A limited scope on Linux or another device-code scenario. |

Application authentication is recommended for a full-tenant assessment. A delegated assessment can access only the sites that the signed-in account can access.

Use a dedicated Microsoft Entra application and grant only the permission type required by the selected authentication mode. The permission tables on this page are authoritative for the Classic Pages component in Assessment 1.16.0.

### Create a delegated application

1. In the Microsoft Entra admin center, open **App registrations**, and select **New registration**.
1. Enter a name. Under **Supported account types**, select **Single tenant only - \<your tenant\>**, and register the application.
1. Under **API permissions**, select **Add a permission** > **Microsoft Graph** > **Delegated permissions**, select `Sites.Read.All` and `User.Read`, and select **Add permissions**.
1. Select **Add a permission** > **SharePoint** > **Delegated permissions**, select `AllSites.Read`, and select **Add permissions**.
1. If the assessment will collect Audit usage, add the Microsoft Graph delegated permission `AuditLogsQuery-SharePoint.Read.All`.
1. Select **Grant admin consent for \<tenant\>**, and select **Yes**.
1. Copy the **Application (client) ID** for `--applicationid`.

For Interactive authentication, under **Authentication**, select **Add a platform** > **Mobile and desktop applications**, add the custom redirect URI `http://localhost`, and select **Configure**.

For Device authentication, a redirect URI isn't required. Under **Authentication** > **Advanced settings**, set **Allow public client flows** to **Yes**, and select **Save**.

An application used for both Interactive and Device authentication requires both settings.

### Register an application-authentication application

1. Create a single-tenant app registration. A redirect URI isn't required for application authentication.
1. Under **API permissions**, remove the default delegated Microsoft Graph `User.Read` permission.
1. Select **Add a permission** > **Microsoft Graph** > **Application permissions**, select `Sites.Read.All`, and select **Add permissions**.
1. Select **Add a permission** > **SharePoint** > **Application permissions**, select `Sites.Read.All`, and select **Add permissions**.
1. If the assessment will collect Audit usage, add the Microsoft Graph application permission `AuditLogsQuery-SharePoint.Read.All`.
1. Under **Certificates & secrets** > **Certificates**, select **Upload certificate**, choose the public certificate, and select **Add**.
1. Select **Grant admin consent for \<tenant\>**, and select **Yes**.
1. Copy the **Application (client) ID** for `--applicationid`.
1. Install or securely provide the matching private-key certificate to the account that runs the assessment.

For additional certificate-generation options, see [Configure authentication](https://pnp.github.io/pnpassessment/using-the-assessment-tool/setupauth.html). Don't copy broader permissions from a generic sample; use the Classic Pages permission tables on this page.

### Application certificate

Application authentication requires a certificate associated with the Microsoft Entra application. Upload the public certificate to the app registration, and make sure that the account running the assessment can access the matching private key.

The application-authentication examples use a certificate in the current user's **Personal** certificate store:

```console
--certpath "My|CurrentUser|<certificate-thumbprint>"
```

In this value, `My` identifies the Personal certificate store, `CurrentUser` identifies the account running the assessment, and the final value is the certificate thumbprint. The [authentication setup guidance](https://pnp.github.io/pnpassessment/using-the-assessment-tool/setupauth.html) explains how to create the certificate, add it to the app registration, and find its thumbprint.

## Permissions

The current classic pages implementation requires the following permissions:

| Authentication | Microsoft Graph | SharePoint |
| --- | --- | --- |
| Application | `Sites.Read.All` application permission | `Sites.Read.All` application permission |
| Interactive or Device | `Sites.Read.All` and `User.Read` delegated permissions | `AllSites.Read` delegated permission |

The page inventory reads web part configuration through the SharePoint `LimitedWebPartManager` API. Assessment version 1.16.0 can complete page and web part extraction with the read permissions in this table.

Grant admin consent for the configured permissions before starting the assessment.

These permissions are read-only. They don't allow PnP PowerShell to create or update modern pages. Use a separate transformation application and the [PnP PowerShell transformation permission guidance](modernize-userinterface-site-pages-powershell.md#permissions).

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
- If Audit is disabled or Microsoft Purview reports **Microsoft 365 - Not connected**, open the **Audit** solution, select **Get started**, and wait for **Setting up apps** to finish. The ingestion property can be `True` while Microsoft 365 is still being connected to the Purview Audit backend.
- The administrative property can return `True` before the Graph Audit Query backend is ready. HTTP 400 with backend status `AuditingDisabledTenant` can indicate tenant-level provisioning or propagation; verify both ingestion and the Purview connection state before treating it as a permission failure.
- New events can take approximately 60 to 90 minutes to become available. After auditing is first enabled for an organization, events can take several hours to become searchable.
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

1. [Run a classic pages assessment](assessment-tool-classic-pages-run.md).
1. [Interpret and prioritize the classic page results](assessment-tool-classic-pages-report.md).
1. [Review publishing-page readiness](assessment-tool-publishing-coverage.md), when applicable.
1. [Transform selected pages with PnP PowerShell](modernize-userinterface-site-pages-powershell.md).
1. [Validate the transformed pages](modernize-userinterface-site-pages-validation.md).

## Reference

- [Classic pages assessment CSV reference](assessment-tool-classic-pages-csv.md)
- [Common assessment CSV reference](assessment-tool-common-reports.md)
