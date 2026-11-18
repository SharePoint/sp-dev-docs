---
title: Configure app-only permissions for tenant App Catalog operations
description: Configure the SharePoint application permission required for app-only package and Tenant-Wide Extensions updates in the tenant App Catalog.
ms.date: 11/18/2026
author: VesaJuvonen
ms.author: vesaj
ms.topic: how-to
ms.localizationpriority: high
---
# Configure app-only permissions for tenant App Catalog operations

Applications that use app-only authentication to write directly to specific surfaces in the SharePoint tenant App Catalog will require the **SharePointTenantSettings.ReadWrite.All** application permission on the **Office 365 SharePoint Online** resource.

This requirement can affect automated deployment and provisioning processes, including CI/CD pipelines, unattended scripts, and partner deployment services. It applies based on the authentication mode and operation, not on the tool used to perform the operation.

> [!IMPORTANT]
> Microsoft Graph and Office 365 SharePoint Online expose application permissions with the same **SharePointTenantSettings.ReadWrite.All** name. These are separate application roles on separate resources. For PnP PowerShell, SharePoint REST, or CSOM calls to SharePoint, grant the permission for the **Office 365 SharePoint Online** resource. Granting only the Microsoft Graph permission doesn't satisfy the SharePoint authorization check.

## Planned cutoff date

The planned cutoff date for Sites.ReadWrite.All is **January 31, 2027**. After that date, **Sites.ReadWrite.All** alone will no longer be sufficient to authorize the affected app-only write operations in the tenant App Catalog. These operations will require **SharePointTenantSettings.ReadWrite.All** on the **Office 365 SharePoint Online** resource.

Before the cutoff date, grant the new application permission, provide tenant administrator consent, acquire a new SharePoint access token, and retest the affected workflows.

## Affected operations

The additional permission check applies to direct app-only writes for the following tenant App Catalog operations:

- Adding a package to the **Apps for SharePoint** library.
- Replacing or updating an existing package, including updates to its catalog item.
- Adding or updating entries in the **Tenant-Wide Extensions** list.

The package check runs at the App Catalog add and update entry points. An app-only package upload or update can therefore require this permission even when the package doesn't register a tenant-wide extension.

## Determine whether your workflow is affected

| Scenario | Impact |
|---|---|
| An authorized administrator uploads or updates a package through the App Catalog user interface | The app-only application-permission requirement doesn't apply. Existing user authorization continues to apply. |
| PnP PowerShell uses user or delegated authentication | The app-only requirement doesn't apply. Existing user and delegated authorization requirements still apply. |
| PnP PowerShell uses app-only authentication, such as a certificate-based unattended task | The requirement applies to affected tenant App Catalog writes. |
| A custom application uses SharePoint REST or CSOM with app-only authentication | The requirement applies to affected writes. The requirement isn't specific to PnP PowerShell. |
| An integration uses Microsoft Graph | Assess the specific API and authentication flow. Don't assume that every Microsoft Graph App Catalog operation has the same requirement. |

Review your configuration if you use app-only authentication for:

- CI/CD pipelines that upload or update SharePoint Framework solution packages.
- Certificate-based unattended PnP PowerShell scripts.
- Provisioning solutions that update Tenant-Wide Extensions.
- Custom applications that use SharePoint REST or CSOM.
- Partner-operated deployment services that perform these operations for customers.

Using SharePoint Framework or PnP PowerShell doesn't automatically mean that a workflow is affected. The workflow must use app-only authentication and perform one of the affected write operations.

## Grant the application permission

To update an existing Microsoft Entra application registration:

1. In the [Microsoft Entra admin center](https://entra.microsoft.com), open **Identity** > **Applications** > **App registrations**.
1. Select the application registration used by the app-only workflow.
1. Select **API permissions** > **Add a permission**.
1. Select **APIs my organization uses**, and then search for and select **Office 365 SharePoint Online**.
1. Select **Application permissions**.
1. Add **SharePointTenantSettings.ReadWrite.All**.
1. Select **Grant admin consent** for the tenant.
1. Reconnect or refresh the workflow authentication so that it acquires a new SharePoint access token.
1. Retest the package upload, package update, and Tenant-Wide Extensions operations used by the workflow.

For more information about certificate-based app-only authentication and the available registration options, see [Granting access via Microsoft Entra ID app-only](../solution-guidance/security-apponly-azuread.md).

> [!NOTE]
> **SharePointTenantSettings.ReadWrite.All** satisfies this specific authorization check. It doesn't replace other permissions that the application requires. Retain the site or tenant permissions needed for the other operations in your workflow.

## Operations that aren't affected

The additional application-permission requirement doesn't apply to:

- Interactive App Catalog operations performed by an authorized administrator.
- Requests using user or delegated authentication. Existing authorization requirements, including **ManageWeb** where required, continue to apply.
- Read-only App Catalog operations.
- Delete operations.
- Site collection App Catalog operations. Existing authorization requirements for site collection App Catalogs continue to apply.
- The runtime use of SharePoint Framework solutions that are already deployed. Later automated package or configuration updates can still be affected.
- Trusted internal deployment operations that use separate authorization paths.

## Troubleshoot authorization failures

If an affected app-only operation is rejected:

1. Confirm that the permission was added under **Office 365 SharePoint Online**, not only under Microsoft Graph.
1. Confirm that tenant administrator consent was granted.
1. Acquire a new access token after the permission change.
1. Inspect the SharePoint access token and verify that it contains the required application role.
1. Confirm that the application still has the other permissions required by the workflow.

## See also

- [Tenant-scoped solution deployment for SharePoint Framework solutions](tenant-scoped-deployment.md)
- [Tenant-wide deployment of SharePoint Framework extensions](extensions/basics/tenant-wide-deployment-extensions.md)
- [Granting access via Microsoft Entra ID app-only](../solution-guidance/security-apponly-azuread.md)
