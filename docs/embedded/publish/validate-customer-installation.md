---
title: Validate customer app installation
description: Validate SharePoint Embedded container type registration, permissions, containers, and billing after a customer installs an ISV app.
ms.date: 07/13/2026
ms.reviewer: dilucesr
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---
# Validate customer app installation

**Applies to:** ISV / Developer

<!-- agent:
task_type: how-to
audience: isv
outcome: Confirm that a customer tenant can administer and use an installed SharePoint Embedded app.
next: ../admin/admin-overview.md
-->

Use this article after a customer installs a SharePoint Embedded app.
Validation confirms that the container type registration, consent, billing, administration visibility, and basic container operations are working.
Run these checks with the customer admin before you announce the app to users.

> [!IMPORTANT]
> Validate in the customer tenant that will run the production workload.
> A successful test in your developer tenant doesn't prove that the customer tenant is registered, consented, or billed correctly.

## Validation goals

Complete these goals before closing customer onboarding:

1. Confirm that the app and container type are registered in the customer tenant.
1. Confirm that the expected permissions are granted.
1. Confirm that billing is valid for pass-through apps.
1. Confirm that the app can create or access a container.
1. Confirm that the customer admin can view the app and container.
1. Confirm that content operations work for a test user.
1. Confirm that common failure modes have been ruled out.

For customer setup steps, see [Guide customers through tenant setup](customer-tenant-setup-guide.md).

## People involved

Validation usually needs both ISV and customer roles.

| Role | Responsibility |
| --- | --- |
| ISV developer | Supplies expected app IDs, container type ID, app behavior, and support troubleshooting. |
| Customer Global Administrator or SharePoint Embedded Administrator | Confirms SharePoint Embedded app setup, billing, and administration visibility. |
| Customer Azure billing owner or contributor | Helps resolve pass-through billing setup issues. |
| Customer test user | Signs in and performs app-level document actions. |

## Before you start

Collect these values:

- Customer tenant name or ID.
- Owning application ID.
- Application ID for guest apps, if your app uses them.
- Container type ID.
- Container type name.
- Billing model.
- Expected sharing behavior.
- Support ticket or onboarding record.

> [!TIP]
> Keep the validation record with the customer's installation package.
> It helps future support teams distinguish setup issues from product regressions.

## Step 1: Confirm container type registration

Confirm that the container type is registered in the consuming tenant.
An app can't create or interact with containers until its container type is registered in that tenant.
Use your product's setup portal or registration flow to show the registration state.

Ask the customer admin to use the [SharePoint admin center](https://go.microsoft.com/fwlink/?linkid=2185219) to verify that your SharePoint Embedded app is listed under the installed apps tab in the Active apps page under SharePoint Embedded. The customer admin can verify details of your SharePoint Embedded app such as:

- The owning application ID.
- The container type ID.

If registration isn't complete, return to [Guide customers through tenant setup](customer-tenant-setup-guide.md).

## Step 2: Verify permissions

To verify that your app is properly installed on the customer tenant:

1. Using the owning app, request an access token for the Microsoft Graph `.default` scope in the consuming tenant.
1. Verify that the access token includes `FileStorageContainer.Selected` and `FileStorageContainerTypeReg.Selected` in either the `scp` claim (for access on behalf of a user) or `roles` claim (for access without a user).
1. Use the token to [get the registration for your container type in the tenant](/graph/api/filestoragecontainertyperegistration-get). If a registration is returned, it means that your SharePoint Embedded app is installed correctly.

> [!TIP]
> You can also validate that your guest apps are properly set up by requesting an access token for the Microsoft Graph `.default` scope in the consuming tenant and validating that the scopes/roles you expect are present and that you can use the token to interact with content. Only the owning app can access a container type registration in a tenant.

Confirm that the customer granted the expected permissions and no unexpected app ID was used.

For most customer installations, validate at least these permissions:

| Permission | Typical use | Validation note |
| --- | --- | --- |
| `FileStorageContainerTypeReg.Selected` | Register the container type in the consuming tenant. | The app can request this as delegated or application permission. If delegated registration is used, the user performing registration must be a SharePoint Embedded Administrator or Global Administrator. |
| `FileStorageContainer.Selected` | Access containers and content for the installed app. | The application permission requires admin consent; the delegated permission does not. Confirm the grant matches the app behavior the customer approved. |

Validate the following items:

- Admin consent was granted by an authorized customer admin for application permissions when required.
- The consented app ID matches the ISV installation package.
- The permission set includes the expected registration and content permissions for the app model.
- Guest application permissions are present when required.
- Delegated and app-only behavior matches your design.
- Test users are present in Microsoft Entra ID as members or guests.

> [!CAUTION]
> Don't continue validation if the app ID or publisher doesn't match the installation package.
> Stop and resolve the consent mismatch first.

If the owning app or any guest app is missing permissions, return to [Guide customers through tenant setup](customer-tenant-setup-guide.md).

## Step 3: Verify billing status

Billing validation depends on the selected billing model.

### Standard billing

For standard billing, confirm internally that your developer tenant billing relationship is active.
The customer doesn't need to configure a SharePoint Embedded billing profile for your app.
Still tell the customer how SharePoint Embedded consumption is handled for your application.

Check:

- The app is documented as standard billed.
- Your operations team can monitor consumption.
- The customer handoff doesn't ask the customer to configure pass-through billing.

### Pass-through billing

For pass-through billing, no user can access the app until the customer sets up valid billing.
Ask the customer admin to confirm billing in the [Microsoft 365 admin center](https://admin.cloud.microsoft).

Check:

- A valid Azure subscription is connected.
- A valid resource group is selected.
- The setup was completed for SharePoint Embedded apps.
- The customer billing admin has owner or contributor permissions where required.
- The customer understands that disabling billing interrupts user access.

For billing model guidance, see [Choose a billing model for your app](choose-app-billing-model.md).

## Step 4: Create or open a test container

Use your app's normal product flow to create or open a test container in the customer tenant.
Don't use a hidden validation path that bypasses the same permissions and container type registration used by production users.

Validate:

- The app can create a container of the expected container type.
- The app can open an existing test container.
- The app can upload a small test document.
- The app can read the test document.
- The app can update or delete the test document if those actions are part of the product.
- The app reports errors in a way the customer and ISV support can troubleshoot.

> [!WARNING]
> Avoid destructive validation in an existing production container.
> Use a clearly identified test container and remove test content when validation is complete.

## Step 5: Verify container administration

Customer admins can use the [SharePoint admin center](https://go.microsoft.com/fwlink/?linkid=2185219) to administer their installation of your SharePoint Embedded app and its containers:

- Get details of containers for the SharePoint Embedded application.
- View details of a specific container.
- View containers sorted by storage.
- Set a sensitivity label where applicable.
- Manage deleted containers where applicable.
- Restore or permanently delete test containers only when intended.

For customer administration guidance, see [Manage containers in SharePoint admin center](../admin/manage-containers-sharepoint-admin-center.md).

## Step 6: Verify sharing and compliance expectations

SharePoint Embedded uses Microsoft 365 security and compliance capabilities.
Ask the customer admin to validate the settings that matter for the app:

- External sharing behavior.
- Guest user access.
- Sensitivity label expectations.
- Retention or deletion expectations.
- Audit or compliance review requirements.
- Customer policy exceptions, if any.

If the app requires external collaboration, confirm that customer tenant sharing policies allow the intended behavior.
If sharing is restricted, document the product impact before users start using the app.

## Common failure modes

Use this table during onboarding.

| Failure mode | What to check | Where to link |
| --- | --- | --- |
| App doesn't appear for admin | Container type registration and app ID | [Admin overview](../admin/admin-overview.md) |
| Consent error | Admin role and expected permissions | [Grant admin consent](../admin/grant-admin-consent-permissions.md) |
| Pass-through app inaccessible | Billing setup and Azure subscription | [Guide customers through tenant setup](customer-tenant-setup-guide.md) |
| Container create fails | Registration, permissions, and billing | [Install a SharePoint Embedded app](../admin/install-sharepoint-embedded-app.md) |
| Guest user can't access content | Guest identity and sharing policy | [Grant admin consent and permissions](../admin/grant-admin-consent-permissions.md) |
| Admin tools fail | Role assignment and administrative tool access | [Admin overview](../admin/admin-overview.md) |
| Billing was disconnected | New container creation is blocked; existing containers remain accessible | [Set up billing in Microsoft 365 admin center](../admin/setup-billing-microsoft-365-admin-center.md) |

## Validation checklist

Use this checklist as the final customer signoff.

- [ ] Customer admin granted admin consent for your app.
- [ ] Container type registration is complete.
- [ ] Customer admin sees your SharePoint Embedded app in SharePoint admin center.
- [ ] Billing is valid or not required for the customer tenant.
- [ ] Test user can sign in to your app.
- [ ] Test container can be created or opened.
- [ ] Test file operations work.
- [ ] Customer admin can view the app or container in administration tools.
- [ ] Sharing and compliance expectations are documented.
- [ ] Test content is removed or retained by agreement.
- [ ] Support handoff is complete.

## After validation

After validation succeeds:

1. Record the date, tenant, app ID, and container type ID.
1. Save the billing model and customer setup result.
1. Share the validation record with the customer.
1. Move the app to the next release or rollout step.

If validation fails, keep the customer in the setup phase and resolve the failure before broad user access.

## Next steps

- [Admin overview](../admin/admin-overview.md)
- [Install a SharePoint Embedded app](../admin/install-sharepoint-embedded-app.md)
- [Troubleshooting](../reference/troubleshooting.md)
