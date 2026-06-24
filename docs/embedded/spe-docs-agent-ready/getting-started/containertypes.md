---
title: Create a SharePoint Embedded container type
description: Create a trial, standard, or passthrough container type, attach a billing profile, and register it for use.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A container type exists on the owning tenant with the chosen billing classification and, for standard types, an attached billing profile.
  estimated_minutes: 20
  difficulty: intermediate
  roles: [app-developer, owning-admin]
  prerequisites:
    - capability: entra-app-admin
    - capability: spe-admin
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
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
      path: /storage/fileStorage/containerTypes/{container-type-id}
      permissions: [FileStorageContainerType.Manage.All]
    - id: deleteContainerType
      method: DELETE
      path: /storage/fileStorage/containerTypes/{container-type-id}
      permissions: [FileStorageContainerType.Manage.All]
    - id: createContainerTypeRegistration
      method: POST
      path: /storage/fileStorage/containerTypeRegistrations
      permissions: [FileStorageContainerType.Manage.All]
  inputs:
    - name: container-type-name
      type: string
      source: user-supplied
    - name: owning-app-id
      type: uuid
      source: app-registration
    - name: billing-classification
      type: string
      source: user-supplied
    - name: container-type-id
      type: uuid
      source: prior-step
    - name: azure-subscription-id
      type: uuid
      source: user-supplied
    - name: resource-group
      type: string
      source: user-supplied
    - name: region
      type: string
      source: user-supplied
  outputs:
    - name: container-type-id
      type: uuid
      verify: GET /storage/fileStorage/containerTypes returns the new container type
  next_steps:
    - uri: /sharepoint/dev/embedded/getting-started/register-api-documentation
      when: always
    - uri: /sharepoint/dev/embedded/administration/billing/billingmanagement
      when: always
  related:
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
    - uri: /sharepoint/dev/embedded/getting-started/register-api-documentation
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/administration/billing/meters
  stability: beta
  last_validated: proposed
---

# Create a SharePoint Embedded container type
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to a container type exists on your owning tenant with the billing classification you chose (`trial`, `standard`, or `directToCustomer`), and — for `standard` types — a billing profile attached through the SharePoint Online Management Shell. A container type is the 1:1-with-app resource that governs access, billing, and behavior for a set of containers.

> [!IMPORTANT]
> Container type create/list/update/delete and registration are on the Microsoft Graph **beta** endpoint today (`stability: beta`). Shapes may change before general availability. See api-surface.json gap `promoteContainerTypeCrudToGa`.

> [!NOTE]
> The billing classification is fixed at creation. A `trial` type cannot become production, and `standard` and `directToCustomer` cannot be converted to each other — delete and re-create to change.

## Prerequisites

- Capability: a Microsoft Entra ID app with the `FileStorageContainerType.Manage.All` application permission on the owning tenant.
- Capability: a [SharePoint Embedded Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) account on whose behalf the create call is made.
- An active instance of SharePoint in the tenant. Users who authenticate into container types and containers must exist in Microsoft Entra ID (members or guests).
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — how the owning app acquires a token.
- For `standard` billing only: an Azure subscription and a resource group, plus owner or contributor permission on that subscription. See [Create an Azure subscription](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions) and [Create a resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-type-name}` | string | User-supplied, user-friendly name |
| `{owning-app-id}` | uuid | The owning Entra app's application (client) ID |
| `{billing-classification}` | string | One of `trial`, `standard`, `directToCustomer` |
| `{container-type-id}` | uuid | Returned by the create call (Step 1) |
| `{azure-subscription-id}` | uuid | User-supplied; standard billing only |
| `{resource-group}` | string | User-supplied; standard billing only |
| `{region}` | string | User-supplied; standard billing only |

## Steps

### Step 1 — Create the container type {#step-1}

Call the create endpoint on behalf of a SharePoint Embedded Administrator. Set `{billing-classification}` to `trial` for free exploration, `standard` to bill the owning tenant, or `directToCustomer` to pass charges to the consuming tenant.

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypes
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "{container-type-name}",
  "owningAppId": "{owning-app-id}",
  "billingClassification": "{billing-classification}",
  "settings": {}
}
```

**Expected response:** `201 Created` with a `fileStorageContainerType` carrying the generated `container-type-id`.

**On failure:**
- `403 Forbidden` (`accessDenied`) → the app lacks `FileStorageContainerType.Manage.All`, or the user is not a SharePoint Embedded Administrator. Grant the permission and consent.
- `400 Bad Request` (existing trial) → a `trial` container type already exists; each tenant may hold only one at a time. Permanently delete the existing one first.
- `400 Bad Request` (`owningAppId` already owns a type) → a single owning app may own only one container type. Use a different app.

> [!NOTE]
> A `trial` container type is limited to 5 containers (active plus recycled), 1 GB each, expires after 30 days, and is restricted to the developer tenant. A `standard` tenant may hold up to 25 container types. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling).

### Step 2 — (Standard billing only) Attach a billing profile {#step-2}

`standard` container types need a billing profile that points charges at your Azure subscription. There is no Graph API for this today; use the SharePoint Online Management Shell. Skip this step for `trial` and `directToCustomer` types.

```manual
manual:
  description: Attach an Azure billing profile to a standard container type.
  ui_path: SharePoint Online Management Shell → Connect-SPOService with tenant admin credentials → Add-SPOContainerTypeBilling
  api_equivalent: none — no Graph API today; see api-surface.json gap "setUpContainerTypeBilling"
  verify:
    method: GET
    path: /storage/fileStorage/containerTypes
```

Install the [latest SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588), connect, then attach billing:

```pwsh
Connect-SPOService -Url https://{tenant}-admin.sharepoint.com

Add-SPOContainerTypeBilling `
  -ContainerTypeId {container-type-id} `
  -AzureSubscriptionId {azure-subscription-id} `
  -ResourceGroup {resource-group} `
  -Region {region}
```

To update an existing billing profile:

```pwsh
Set-SPOContainerType `
  -ContainerTypeId {container-type-id} `
  -AzureSubscriptionId {azure-subscription-id} `
  -ResourceGroup {resource-group}
```

**Expected response:** the cmdlet completes without error and the container type reports a valid billing profile.

**On failure:**
- `SubscriptionNotRegistered` → `Microsoft.Syntex` is not yet registered as a resource provider; the cmdlet registers it asynchronously. Wait 5–10 minutes and retry until it succeeds.
- `Access denied` running the cmdlet → the account lacks owner/contributor on the Azure subscription, or the SharePoint Embedded Administrator / Global Administrator role.

> [!NOTE]
> For `directToCustomer` (passthrough) types, the consuming tenant admin activates pay-as-you-go billing in their own tenant after [registration](/sharepoint/dev/embedded/getting-started/register-api-documentation) — there is no API for that activation either (see api-surface.json gap `activateConsumingTenantPayg`).

### Step 3 — (Optional) Reconfigure container type settings {#step-3}

Adjust behaviors (storage size, discoverability, versioning, and others) by patching the container type. Settings can also be supplied in the `settings` object during [Step 1](#step-1).

```http
PATCH https://graph.microsoft.com/beta/storage/fileStorage/containerTypes/{container-type-id}
Authorization: Bearer {token}
Content-Type: application/json

{ "settings": { "isDiscoverabilityEnabled": true } }
```

**Expected response:** `200 OK` with the updated `fileStorageContainerType`.

**On failure:**
- `403 Forbidden` → missing `FileStorageContainerType.Manage.All`. Grant and consent.
- `404 Not Found` → wrong `{container-type-id}`. Confirm it with [Verify](#verify).

> [!IMPORTANT]
> Setting changes can take up to **24 hours** to replicate to all consuming tenants. Where a consuming tenant has overridden a setting, the new value is not applied. Some settings (for example, storage size and discoverability) apply only to new content. See [fileStorageContainerTypeSettings](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainertypesettings).

### Step 4 — Register the container type to enable containers {#step-4}

Before any container can be created, register the container type in the consuming tenant (for `trial`, that is the developer tenant). Registration defines the owning app's permissions. Full request and permission details are in [Register container type permissions](/sharepoint/dev/embedded/getting-started/register-api-documentation).

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations
Authorization: Bearer {token}
Content-Type: application/json

{ "containerTypeId": "{container-type-id}" }
```

**Expected response:** `201 Created` with a `fileStorageContainerTypeRegistration`. Containers of this type can now be created.

**On failure:**
- `403 Forbidden` (`accessDenied`) → admin consent for the owning app has not been granted in the consuming tenant. Grant consent, then retry. See [Register container type permissions](/sharepoint/dev/embedded/getting-started/register-api-documentation).
- `404 Not Found` → the container type does not exist on the owning tenant; complete [Step 1](#step-1).

## Verify {#verify}

List the container types on the owning tenant and confirm the new one is present with the expected billing classification:

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containerTypes
Authorization: Bearer {token}
```

Returns `200 OK` with a collection that includes a `fileStorageContainerType` whose `id` equals `{container-type-id}` and whose `billingClassification` matches your input. For `standard` types, the billing profile reports as valid.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with `FileStorageContainerType.Manage.All` |
| `403 Forbidden` | App permission not granted, or caller not SharePoint Embedded Administrator | Grant the permission and admin consent, then re-acquire the token |
| Cannot create a second trial type | Limit is one `trial` container type per tenant | Permanently delete the existing trial type and its deleted containers |
| `SubscriptionNotRegistered` on billing cmdlet | `Microsoft.Syntex` resource provider not yet registered | Wait 5–10 minutes for async registration, then retry |
| Cannot delete a standard container type | Deletion of `standard` types is not yet supported | Only `trial` types can be deleted today, after removing all containers including deleted ones |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Register container type permissions](/sharepoint/dev/embedded/getting-started/register-api-documentation) — define owning and guest app permissions in a consuming tenant.
- [Billing management](/sharepoint/dev/embedded/administration/billing/billingmanagement) — manage standard billing profiles.

## Related

- [Set up a trial environment with the VS Code extension](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode)
- [Register container type permissions](/sharepoint/dev/embedded/getting-started/register-api-documentation)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Billing meters](/sharepoint/dev/embedded/administration/billing/meters)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
