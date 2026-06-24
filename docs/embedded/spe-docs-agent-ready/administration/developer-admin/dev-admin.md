---
title: Manage SharePoint Embedded container types as a developer admin
description: Assign the SharePoint Embedded Administrator role, then create and manage container types and billing with SharePoint Online Management Shell cmdlets.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A user holds the SharePoint Embedded Administrator role and has created a container type and attached a standard billing profile using the SharePoint Online Management Shell.
  estimated_minutes: 15
  difficulty: intermediate
  roles: [owning-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/administration/adminrole
      kind: concept
    - uri: /sharepoint/dev/embedded/administration/billing/billing
      kind: concept
    - capability: global-admin
    - capability: azure-subscription
  api_surface:
    - id: createContainerType
      method: POST
      path: /storage/fileStorage/containerTypes
      permissions: [FileStorageContainerType.Manage.All]
    - id: listContainerTypes
      method: GET
      path: /storage/fileStorage/containerTypes
      permissions: [FileStorageContainerType.Manage.All]
    - id: updateContainerType
      method: PATCH
      path: /storage/fileStorage/containerTypes/{containerTypeId}
      permissions: [FileStorageContainerType.Manage.All]
  inputs:
    - name: user-principal-name
      type: string
      source: user-supplied
    - name: container-type-name
      type: string
      source: user-supplied
    - name: owning-application-id
      type: uuid
      source: app-registration
    - name: azure-subscription-id
      type: uuid
      source: user-supplied
    - name: resource-group
      type: string
      source: user-supplied
    - name: region
      type: string
      source: user-supplied
    - name: container-type-id
      type: uuid
      source: prior-step
  outputs:
    - name: container-type-id
      type: uuid
      verify: Get-SPOContainerType -ContainerTypeId {container-type-id} returns the container type
    - name: standard-billing-profile
      type: string
      verify: Get-SPOContainerType -ContainerTypeId {container-type-id} shows the Azure subscription / resource group on a standard container type
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/billing/billingmanagement
      when: always
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      when: always
  related:
    - uri: /sharepoint/dev/embedded/administration/adminrole
    - uri: /sharepoint/dev/embedded/administration/billing/billing
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
  stability: ga
  last_validated: proposed
---

# Manage SharePoint Embedded container types as a developer admin
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this task a user holds the **SharePoint Embedded Administrator** role and has used the SharePoint Online Management Shell to create a container type, set its configuration, and (for standard billing) attach an Azure billing profile.

> [!IMPORTANT]
> Container type billing setup has no Microsoft Graph API today; it is done through the SharePoint Online Management Shell only. See api-surface.json gap `setUpContainerTypeBilling`. Container type create/list/update over Graph (`createContainerType`, `listContainerTypes`, `updateContainerType`) is **beta** only — see gap `promoteContainerTypeCrudToGa`. This page uses the supported PowerShell path.

## Prerequisites

- [SharePoint Embedded Administrator role](/sharepoint/dev/embedded/administration/adminrole) — the role this page assigns and uses.
- [Pay-as-you-go billing](/sharepoint/dev/embedded/administration/billing/billing) — to choose standard vs. passthrough before creating the container type.
- Capability: a Global Administrator to assign the role (Step 1).
- Capability: an Azure subscription on which the billing user holds **owner or contributor** permissions (Step 4, standard billing only). If you don't have one, [create a subscription](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions).
- The latest version of the SharePoint Online Management Shell, connected with [Connect-SPOService](https://learn.microsoft.com/powershell/module/sharepoint-online/connect-sposervice).

> [!WARNING]
> You must use the latest version of SharePoint PowerShell to run the container type administration cmdlets.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{user-principal-name}` | string | The user to receive the SharePoint Embedded Administrator role (user-supplied) |
| `{container-type-name}` | string | A display name for the new container type (user-supplied) |
| `{owning-application-id}` | uuid | The app registration ID of your SharePoint Embedded application (1:1 with the container type) |
| `{azure-subscription-id}` | uuid | The Azure subscription for standard billing (user-supplied) |
| `{resource-group}` | string | The Azure resource group for the billing profile (user-supplied) |
| `{region}` | string | The Azure region for the billing profile (user-supplied) |
| `{container-type-id}` | uuid | Returned when the container type is created (prior step) |

## Steps

### Step 1 — Assign the SharePoint Embedded Administrator role {#step-1}

A Global Administrator grants `{user-principal-name}` the role so they can run the container type cmdlets. The Global Administrator role already includes these permissions; assign the dedicated role for least privilege.

```yaml
manual:
  description: Assign the SharePoint Embedded Administrator role to a user via the Microsoft 365 admin center.
  ui_path: https://admin.microsoft.com → Users → Active users → select {user-principal-name} → Roles → Manage roles → Admin center access → Collaboration → SharePoint Embedded administrator → Save changes
  api_equivalent: POST /servicePrincipals/{servicePrincipalId}/appRoleAssignedTo (role-assignment pattern; see api-surface.json grantAdminConsentEquivalent) — directory role assignment uses POST /roleManagement/directory/roleAssignments
  verify:
    method: GET
    path: /roleManagement/directory/roleAssignments?$filter=principalId eq '{user-id}'
```

> [!NOTE]
> To assign through Microsoft Entra instead: Microsoft Entra admin center → Users → All users → select `{user-principal-name}` → Assigned roles → Add assignments → search **SharePoint Embedded** → select **SharePoint Embedded administrator** → Add.

**Expected response:** the role appears under the user's roles in the Microsoft 365 admin center (or Entra **Assigned roles**).

**On failure:**
- Role not listed → the signed-in admin is not a Global Administrator. Sign in as a Global Administrator.
- User can't run cmdlets after assignment → directory role assignments can take time to propagate. Re-sign-in and retry.

### Step 2 — Create the container type {#step-2}

The role holder creates a container type bound 1:1 to `{owning-application-id}`. Choose the cmdlet form that matches the billing model.

```powershell
# Standard billing container type
New-SPOContainerType -ContainerTypeName "{container-type-name}" -OwningApplicationId {owning-application-id}

# Passthrough (direct-to-customer) billing container type
New-SPOContainerType -IsPassThroughBilling -ContainerTypeName "{container-type-name}" -OwningApplicationId {owning-application-id}

# Trial container type (valid 30 days)
New-SPOContainerType -TrialContainerType -ContainerTypeName "{container-type-name}" -OwningApplicationId {owning-application-id}
```

**Expected response:** the cmdlet returns the new container type, including its `ContainerTypeId` (`{container-type-id}`).

**On failure:**
- Cmdlet not found → the SharePoint Online Management Shell is outdated. Update to the latest version.
- Access denied → the caller lacks the SharePoint Embedded Administrator (or Global Administrator) role. Complete [Step 1](#step-1).
- `OwningApplicationId` already mapped → a container type already exists for that app (1:1 mapping). Reuse it or use a different app registration.

### Step 3 — Set container type configuration (optional) {#step-3}

Adjust discoverability, sharing restriction, or archival on the container type.

```powershell
# Hide container content from other Microsoft 365 surfaces (MRU, etc.); $true is the default
Set-SPOContainerTypeConfiguration -ContainerTypeId {container-type-id} -DiscoverabilityDisabled $true

# Restrict sharing so only manager and owner can share files
Set-SPOContainerTypeConfiguration -ContainerTypeId {container-type-id} -SharingRestricted $true

# Read back the configuration
Get-SPOContainerTypeConfiguration -ContainerTypeId {container-type-id}
```

**Expected response:** `Set-SPOContainerTypeConfiguration` completes without error; `Get-SPOContainerTypeConfiguration` reflects the new values.

**On failure:**
- Parameter not recognized → outdated shell. Update to the latest version.
- Container type not found → wrong `{container-type-id}`. Confirm with `Get-SPOContainerType`.

### Step 4 — Attach the standard billing profile {#step-4}

For a **standard** container type, attach an Azure subscription so the container type can be used. The user running this must hold owner or contributor on `{azure-subscription-id}`. Skip this step for passthrough and trial container types.

```powershell
Add-SPOContainerTypeBilling -ContainerTypeId {container-type-id} -AzureSubscriptionId {azure-subscription-id} -ResourceGroup "{resource-group}" -Region "{region}"
```

> [!NOTE]
> To change an existing standard billing profile later, use `Set-SPOContainerType -ContainerTypeId {container-type-id} -AzureSubscriptionId {azure-subscription-id} -ResourceGroup "{resource-group}"`.

**Expected response:** the cmdlet completes without error; the container type is now backed by a billing profile.

**On failure:**
- Authorization failed on the subscription → the caller lacks owner/contributor on `{azure-subscription-id}`. Obtain the role, or use a subscription you own. [Create a subscription](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions).
- Resource group not found → `{resource-group}` doesn't exist in `{azure-subscription-id}`. Create it or correct the name.

## Verify {#verify}

```powershell
# Confirm the container type exists and (for standard) shows the billing profile
Get-SPOContainerType -ContainerTypeId {container-type-id}
```

The cmdlet returns `{container-type-id}` with `{container-type-name}` and `{owning-application-id}`; a standard container type also shows the attached Azure subscription / resource group.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `Connect-SPOService` fails | Not signed in as SharePoint Embedded / Global admin, or wrong admin URL | Reconnect with an account holding the role and the correct `-Url` |
| Container type cmdlets missing | Outdated SharePoint Online Management Shell | Update to the latest version |
| Access denied on container type cmdlets | Missing SharePoint Embedded Administrator / Global Administrator role | Assign the role in [Step 1](#step-1) |
| `Add-SPOContainerTypeBilling` authorization error | No owner/contributor on the Azure subscription | Obtain owner/contributor on `{azure-subscription-id}` |
| Standard container type unusable | No billing profile attached | Run [Step 4](#step-4) |

## Next steps

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [View consumption in Microsoft Cost Management](/sharepoint/dev/embedded/administration/billing/billingmanagement)

## Related

- [SharePoint Embedded Administrator role](/sharepoint/dev/embedded/administration/adminrole)
- [Pay-as-you-go billing](/sharepoint/dev/embedded/administration/billing/billing)
- [New-SPOContainerType](https://learn.microsoft.com/powershell/module/sharepoint-online/new-spocontainertype)
- [fileStorageContainerType Graph resource](https://learn.microsoft.com/graph/api/resources/filestoragecontainertype)
- [fileStorageContainerTypeRegistration Graph resource](https://learn.microsoft.com/graph/api/resources/filestoragecontainertyperegistration)
