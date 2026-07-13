---
title: Grant Admin Consent and Permissions
description: Review SharePoint Embedded permissions, grant admin consent, and verify the consent state in a consuming tenant.
ms.date: 07/10/2026
ms.reviewer: dilucesr
ms.localizationpriority: high
---

# Grant Admin Consent and Permissions

**Applies to:** Consuming tenant admin — Global admin

<!-- agent:
task_type: how-to
audience: administrator
outcome: Grant admin consent for a SharePoint Embedded app and validate permission readiness.
next: setup-billing-microsoft-365-admin-center.md
-->

Grant admin consent when a SharePoint Embedded app needs high-privilege permissions in your Microsoft 365 tenant. Application permissions always require admin consent, while delegated permissions for SharePoint Embedded don't. To learn more, see [Grant admin consent](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

Use this article to review requested permissions, grant consent, and troubleshoot common consent failures.

> [!IMPORTANT]
> Grant consent only for apps and publishers your organization trusts.
> Review the app ID, publisher, and requested permissions before approving.

## Before you begin

Confirm these prerequisites:

- You can grant admin consent (see [Grant tenant-wide admin consent](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#prerequisites)).
- You know you Microsoft Entra tenant ID (see [How to find your Microsof Entra tenant ID](/entra/fundamentals/how-to-find-tenant))
- You know the owning application client ID.
- You understand why the app needs each requested permission.
- The app owner has provided installation and consent instructions.
- Billing requirements are known for the app model.

## Understand consent in SharePoint Embedded

An owning application must meet two requirements before it can act on a consuming tenant.

1. The owning app must have a service principal installed in the consuming tenant.
1. The owning app must be granted the permissions needed to register the container type and access its containers in the consuming tenant.

Both requirements are typically satisfied when a tenant administrator grants admin consent to the owning application. However, admin consent isn't a hard requirement for the owning application to act on the consuming tenant. SharePoint Embedded apps that operate exclusively on behalf of a user don't need to be granted admin consent. Granting admin consent for apps that operate exclusively on behalf of a user may improve user experience as the app won't require consent from every user who wants to sign into the app.

> [!CAUTION]
> You need to understand the implications of granting admin consent to an application. To learn more, see [Grant tenant-wide admin consent](/entra/identity/enterprise-apps/grant-admin-consent).

These are the permissions that the owning application needs to act on the consuming tenant:

| Permission | Why the app requests it | Consent note |
| --- | --- | --- |
| [`FileStorageContainerTypeReg.Selected`](/graph/permissions-reference#filestoragecontainertyperegselected) | Register the container type in the consuming tenant. | The app can request this as delegated or application permission. If delegated registration is used, no admin consent is required but the user performing the registration must be a SharePoint Embedded Administrator or Global Administrator. |
| [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) | Access containers and content for its container type in the consuming tenant. | The app can request this as delegated or application permission. If delegated access is used, no admin consent is required but each user of the app will need to consent when signing into the app. |

## Review requested permissions

Before granting consent, review the requested permissions with the app owner.

| Review item | Why it matters |
| --- | --- |
| Application client ID | Confirms you're consenting to the intended owning app. |
| Publisher | Helps validate trust and support ownership. |
| Permission list | Shows what the app can do after consent. |
| Container type ID | Identifies the container type the app owns. |
| Guest app access | Identifies other apps that may receive access through registration. |
| Billing model | Determines whether the tenant must configure billing before users can use the app. |

Ask the app owner to explain any permission that doesn't align with the expected scenario.

> [!CAUTION]
> - DON'T grant consent from a copied URL unless you've verified the `client_id` value in the URL. A consent URL grants permissions to the app identified by that client ID.
> - DON'T grant consent if you don't understand why each permission is being requested.

## Grant admin consent from the consent endpoint

The SharePoint Embedded may request admin consent on your tenant by providing you with, or redirecting you to, the admin consent URL. To learn more about the admin consent URL, see [Admin consent on the Microsoft identity platform](/entra/identity-platform/v2-admin-consent).

```http
https://login.microsoftonline.com/{your-tenant-id}/v2.0/adminconsent?client_id={owning-app-clientid}&scope=https://graph.microsoft.com/.default&redirect_uri={spe-app-redirect-uri}
```

Confirm that in the admin consent URL:
- `{your-tenant-id}` matches your Microsoft Entra tenant ID.
- `{owning-app-clientid}` matches the owning application client ID.
- `{spe-app-redirect-uri}` points to a URL in the SharePoint Embedded app.
- The scope value points to the `.default` Microsoft Graph scope. If the app owner gives you a different scope value, make sure you understand why.
- A `state` query parameter may or may not be present.

For national cloud environments, the admin consent endpoint will vary. See [Microsoft Entra authentication endpoints on national clouds](/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints) for more information.

## Grant consent from Microsoft Entra admin experiences

You can grant admin consent through the Microsoft Entra admin center only if the owning application already has a service principal in your tenant. For instructions on how to grant admin consent, see [Grant tenant-wide admin consent in Enterprise apps pane](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#grant-tenant-wide-admin-consent-in-enterprise-apps-pane).

## Verify the service principal

After consent, confirm that the app is installed in your tenant.

1. In the [Microsoft Entra admin center](https://entra.microsoft.com/), search for the owning application in the Enterprise pane by using its client ID.
1. Confirm that the application exists.
1. Confirm the publisher and application ID.
1. Confirm that permissions show the expected consent state.
1. Confirm that no unexpected permissions were granted.

If the service principal is missing, consent didn't complete.

## Troubleshoot consent failures

Use these checks when consent fails.

- Confirm the admin account can grant tenant-wide admin consent.
- Confirm the consent URL uses the correct consuming tenant ID.
- Confirm the `client_id` is the owning application client ID.
- Confirm the URL uses the expected `v2.0/adminconsent` endpoint and Graph `.default` scope.
- Confirm the app registration exists and is configured correctly by the app owner.
- Confirm the redirect URI or success handling is configured by the app owner.
- Confirm your tenant policies allow user or admin consent for the app.
- Confirm national cloud endpoints are correct when applicable.
- Confirm the app isn't blocked by publisher or enterprise app policies.

## Troubleshoot access denied after consent

Use these checks when consent succeeds but the app owner reports that API calls fail on your tenant.

- Confirm the app owner registered the container type using the registration API.
- Confirm the app is the owning application for the container type when invoking the registration API.
- Confirm the app uses the expected `FileStorageContainer.Selected` permission for container and content access.
- Confirm the app uses app-only authentication when required.
- Confirm the app uses the correct delegated or app-only registration flow for its design.
- Confirm billing is active when the app uses pass-through billing.

## Related content

- [Install a SharePoint Embedded app](install-sharepoint-embedded-app.md)
- [Set up billing in Microsoft 365 admin center](setup-billing-microsoft-365-admin-center.md)
- [Manage containers with PowerShell](manage-containers-powershell.md)
- [Register file storage container type application permissions](../build/register-application-permissions.md)
- [Admin overview](admin-overview.md)

## Next steps
Configure billing in [Set up billing in Microsoft 365 admin center](setup-billing-microsoft-365-admin-center.md).
