---
title: Guide customers through tenant setup
description: Give customer admins the SharePoint Embedded setup, consent, billing, and validation steps needed to install an ISV app.
ms.date: 07/10/2026
ms.reviewer: pemtaira
ms.localizationpriority: high
---
# Guide customers through tenant setup

**Applies to:** ISV

<!-- agent:
task_type: how-to
audience: isv
outcome: Provide a customer administrator with a complete SharePoint Embedded tenant setup guide for an ISV app.
next: validate-customer-installation.md
-->

Use this article to build the setup guide you hand to customers who install your multitenant SharePoint Embedded app. The customer administrator is the consuming tenant admin who manages SharePoint Embedded applications registered in the Microsoft 365 tenant and the containers that hold customer content.

> [!IMPORTANT]
> Don't send customers only an app link. SharePoint Embedded onboarding can require admin consent, container type registration, role assignment, and billing setup. Walk the customer admin through each step below.

## Customer admin role

Tell customers who should perform the setup. A consuming tenant admin is either a **Global Administrator** or a user assigned the **SharePoint Embedded Administrator** role. The role is available in Microsoft Entra ID and the Microsoft 365 Admin Center. Global Administrators already have these permissions.

For the role details, see [Install a SharePoint Embedded app](../admin/install-sharepoint-embedded-app.md).

## Customer prerequisites

Ask the customer to confirm these prerequisites before the setup meeting or installation window.

| Area | Customer requirement |
| --- | --- |
| Microsoft 365 | An active Microsoft 365 tenant with at least one SharePoint license. |
| Admin role | A Global Administrator or SharePoint Embedded Administrator can complete setup. |
| Users | Users who authenticate to SharePoint Embedded containers exist in Microsoft Entra ID as members or guests. |
| Consent | The customer can review and grant the Microsoft Entra permissions your app requests. |
| Billing | An Azure subscription and resource group are available if the app uses pass-through billing. |
| Support | The customer has your app ID, support contact, and validation checklist. |

Users don't need an Office license to collaborate on Microsoft Office documents stored in a container.

## Information to give the customer

Provide these values in your setup guide:

- Product name.
- Publisher name.
- Owning application ID.
- Container type ID.
- Container type name.
- Billing model.
- Microsoft Entra permissions your app requests.
- Consent instructions for your app.
- Redirect or sign-in URL the app uses.
- Support contact.
- Expected setup duration.
- Validation steps.

For ISV preparation guidance, see [Prepare your app for customer installation](prepare-customer-installation.md).

## Permissions your app requests

Tell customers exactly which Microsoft Graph permissions your app needs and why. SharePoint Embedded apps install with two permissions.

| Permission | Purpose | Admin consent |
| --- | --- | --- |
| `FileStorageContainerTypeReg.Selected` | Register your container type in the consuming tenant. | The application permission requires admin consent. The delegated permission doesn't require admin consent, but the user who registers the container type must be a SharePoint Embedded Administrator or Global Administrator. |
| `FileStorageContainer.Selected` | Read and write SharePoint Embedded container content for the container type. | Required. |


## Setup overview for customers

Use this high-level sequence in your customer guide:

1. Assign the right admin role.
1. Review the app publisher, app IDs, and requested permissions.
1. Grant admin consent when required.
1. Register the SharePoint Embedded container type in the consuming tenant through your app's setup flow.
1. Configure pass-through billing when required.
1. Validate that the app appears to the customer admin.
1. Create or access a test container.
1. Confirm the app can perform the expected file operations.
1. Remove or keep test content according to the customer's validation policy.

## Step 1: Assign the administrator

Ask the customer to choose an administrator who can complete the full setup. If the customer doesn't want to use a Global Administrator, they can assign the SharePoint Embedded Administrator role.

Tell the customer to finish role assignment before the installation window. This avoids delays when billing or validation needs elevated access.

## Step 2: Review the application

Ask the customer administrator to review:

- Publisher identity.
- Application ID.
- Container type ID.
- Requested permissions (see [Permissions your app requests](#permissions-your-app-requests)).
- Data stored in SharePoint Embedded containers.
- Whether the app permits guest access.
- Support and incident response commitments.
- Billing model.

If your installation flow is hosted in your SaaS admin portal, include screenshots or tenant-specific values in your handoff, and keep links stable so customer admins can reuse the guide for production and disaster recovery.

## Step 3: Grant admin consent

The customer administrator grants consent for the permissions your app requires. Document the exact consent experience for your app rather than sending a raw consent URL without explaining what it does.

Give the customer this guidance:

1. Sign in with the customer administrator account.
1. Open the app setup or consent experience that you provide.
1. Review the publisher and requested permissions.
1. Grant consent only when the publisher and permissions match the customer handoff.
1. Record the time and the administrator who completed consent.

Customer admins should grant consent only to the exact app ID in your signed installation package. Consenting to a different app ID is a security risk.

## Step 4: Register the container type

Before the app can create and use containers, the container type must be registered in the consuming tenant. Because this flow is app-specific, link customers to your product's setup experience and to the current registration documentation.

Ask the customer to confirm that:

- The setup flow uses the expected owning application ID.
- The registration targets the expected container type ID.
- The registration completes in the customer's tenant.
- Any error message is captured with time, tenant, and correlation information when available.

## Step 5: Set up billing when required

Skip this step when your app uses standard billing. If your app uses pass-through billing, tell the customer that SharePoint Embedded billing must be configured before users can access the app.

The customer needs a valid Azure subscription and resource group. A Global Administrator sets up billing in the Microsoft 365 admin center, and the admin who creates the billing relationship also needs the Owner or Contributor role on the Azure subscription. Then set up billing:

1. Open the [Microsoft 365 admin center](https://admin.microsoft.com/).
1. Go to **Setup**.
1. In **Files and Content**, select **Automate Content with Microsoft Syntex**.
1. Select **Go to Syntex settings**.
1. Under **Syntex services for**, select **Apps**.
1. Select **SharePoint Embedded**.
1. Follow the instructions on the **SharePoint Embedded** page to turn on SharePoint Embedded apps.

> [!WARNING]
> If pass-through billing is turned off or the linked Azure subscription is disconnected, users can no longer create new containers. Existing containers and their content remain accessible.

## Step 6: Validate administration visibility

After consent, registration, and billing are complete, ask the customer admin to confirm the app can be managed. Admins can use SharePoint admin center and other administrative tools to manage SharePoint Embedded applications and containers.

Customer admins can:

- Enumerate applications in the tenant.
- Enumerate containers of an application.
- View container details.
- View active and deleted containers in admin experiences.
- Manage sensitivity labels and sharing settings where supported.
- Review security and compliance behavior.

For deeper validation steps, see [Validate customer app installation](validate-customer-installation.md).

## Customer setup checklist

Give customers a checklist they can sign off.

- [ ] The assigned admin has the Global Administrator or SharePoint Embedded Administrator role.
- [ ] The app ID and publisher match the ISV handoff.
- [ ] Admin consent is granted for the expected app.
- [ ] The container type is registered in the consuming tenant.
- [ ] Pass-through billing is configured, if required.
- [ ] A test user can sign in to the app.
- [ ] A test container can be created or opened.
- [ ] A test document can be uploaded, read, and deleted.
- [ ] The customer admin can view the app or containers in administration tools.
- [ ] Validation notes and support contacts are recorded.

## Troubleshooting during setup

Use this table to route early setup problems.

| Symptom | Likely area | Action |
| --- | --- | --- |
| Customer can't grant consent | Microsoft Entra permissions | Confirm the admin role and app ID. |
| App can't create containers | Registration or permissions | Confirm container type registration and consent. |
| Users can't access a pass-through app | Billing | Confirm SharePoint Embedded billing is turned on in the consuming tenant. |
| Admin can't manage the app | Role or tooling | Confirm the SharePoint Embedded Administrator role and administrative tool access. |
| App works for members but not guests | Identity or sharing | Confirm guest identities and customer sharing policies. |

## Next steps

After setup, validate the installation with the customer administrator: [Validate customer app installation](validate-customer-installation.md).
