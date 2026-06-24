---
title: Register a container type in a consuming tenant
description: Grant admin consent and call the registration API to define owning- and guest-app permissions on a container type.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A container type is registered in the consuming tenant with explicit owning-app (and optional guest-app) permissions, so containers can be created there.
  estimated_minutes: 15
  difficulty: intermediate
  roles: [app-developer, owning-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: entra-app-admin
    - capability: spe-admin
  api_surface:
    - id: createContainerTypeRegistration
      method: POST
      path: /storage/fileStorage/containerTypeRegistrations
      permissions: [FileStorageContainerType.Manage.All]
    - id: grantAdminConsentEquivalent
      method: POST
      path: /servicePrincipals/{service-principal-id}/appRoleAssignedTo
      permissions: [AppRoleAssignment.ReadWrite.All, Application.Read.All]
    - id: verifyAdminConsent
      method: GET
      path: /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
      permissions: [Application.Read.All]
    - id: listContainers
      method: GET
      path: /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: container-type-id
      type: uuid
      source: prior-step
    - name: owning-app-id
      type: uuid
      source: app-registration
    - name: guest-app-id
      type: uuid
      source: app-registration
    - name: consuming-tenant-id
      type: uuid
      source: user-supplied
  outputs:
    - name: container-type-id
      type: uuid
      verify: GET /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id} returns 200
  next_steps:
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
      when: always
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
      when: always
  related:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
  stability: preview
  last_validated: proposed
---

# Register a container type in a consuming tenant
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to, a container type is registered in a consuming tenant with explicit permissions for its owning application — and optionally for one or more guest applications. Registration is the first endpoint a SharePoint Embedded application must call on a consuming tenant; without it, all other container and content calls return access-denied errors. The last successful registration call wins: it determines the settings and permissions in effect on that tenant.

> [!IMPORTANT]
> The container type registration API is in **preview** (`stability: preview`) and on the Microsoft Graph **beta** endpoint. The shape may change. See api-surface.json operation `createContainerTypeRegistration` and gap `promoteContainerTypeCrudToGa`.

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — the container type must already exist on the owning tenant.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — how the owning app acquires a delegated or app-only token.
- Capability: the owning app has a [service principal](https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals) installed on the consuming tenant **and** admin consent granted there.
- Capability: the registration call carries the `FileStorageContainerTypeReg.Selected` permission (delegated or app-only). For a delegated call, the user must hold the [SharePoint Embedded Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) or [Global Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#global-administrator) role. For an app-only call, use the [client credentials grant flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-type-id}` | uuid | The container type created on the owning tenant |
| `{owning-app-id}` | uuid | Application (client) ID of the owning app |
| `{guest-app-id}` | uuid | Application (client) ID of an optional guest app |
| `{consuming-tenant-id}` | uuid | Tenant ID of the consuming tenant |

## Permission values

The registration grant uses these container-type permission values (set them per app in `delegatedPermissions` and `applicationPermissions`):

| Permission | Description |
|---|---|
| `none` | No permissions to any containers or content of this container type. |
| `readContent` | Can read the content of containers of this container type. |
| `writeContent` | Can write content. Cannot be granted without `readContent`. |
| `create` | Can create containers of this container type. |
| `delete` | Can delete containers of this container type. |
| `read` | Can read the metadata of containers. |
| `write` | Can update the metadata of containers. |
| `enumeratePermissions` | Can enumerate container members and their roles. |
| `addPermissions` | Can add members to the container. |
| `updatePermissions` | Can change roles of existing members. |
| `deletePermissions` | Can delete other members (not self). |
| `deleteOwnPermissions` | Can remove own membership. |
| `managePermissions` | Can add, remove (including self), or update members' roles. |
| `manageContent` | Can manage the content of the container. |
| `full` | All permissions for containers of this container type. |

## Steps

### Step 1 — Grant admin consent in the consuming tenant {#step-1}

The owning app must have a service principal and admin consent in the consuming tenant before registration. Direct the consuming tenant's Global Administrator to the admin consent endpoint (substitute the right host for national clouds — see [endpoints on national clouds](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints)):

```manual
manual:
  description: Grant admin consent to the owning app in the consuming tenant.
  ui_path: Send the consuming-tenant Global Administrator to https://login.microsoftonline.com/{consuming-tenant-id}/v2.0/adminconsent?client_id={owning-app-id}&scope=https://graph.microsoft.com/.default → review → consent
  api_equivalent: POST https://graph.microsoft.com/v1.0/servicePrincipals/{service-principal-id}/appRoleAssignedTo (operation grantAdminConsentEquivalent)
  verify:
    method: GET
    path: /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
```

**Expected response:** the admin consent flow completes and a service principal for `{owning-app-id}` exists on the consuming tenant.

**On failure:**
- `AADSTS650051` / consent error → the directed account is not a Global Administrator in the consuming tenant. Use an eligible admin.
- Consent succeeds but registration later returns `403` → consent has not propagated yet; wait and retry [Step 2](#step-2).

### Step 2 — Register the container type {#step-2}

Call the registration API for the container type. This example registers `{container-type-id}` and grants the owning app `full` permissions for both delegated and app-only calls.

```http
PUT https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/{container-type-id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "applicationPermissionGrants": [
    {
      "appId": "{owning-app-id}",
      "delegatedPermissions": ["full"],
      "applicationPermissions": ["full"]
    }
  ]
}
```

**Expected response:** `201 Created` with a `fileStorageContainerTypeRegistration` whose `applicationPermissionGrants` echo the grant and whose `billingStatus` is `valid`.

**On failure:**
- `403 Forbidden` (`accessDenied`) → admin consent not completed in the consuming tenant ([Step 1](#step-1)), or the call lacks `FileStorageContainerTypeReg.Selected`.
- `400 Bad Request` (`writeContent` without `readContent`) → `writeContent` requires `readContent` in the same grant. Add `readContent`.
- `404 Not Found` → the container type does not exist on the owning tenant.

> [!NOTE]
> The api-surface index lists this operation as `createContainerTypeRegistration` with method `POST /storage/fileStorage/containerTypeRegistrations`; the live preview reference uses `PUT .../containerTypeRegistrations/{container-type-id}`. Validate the exact method and path against `$metadata` before publishing.

### Step 3 — (Optional) Grant a guest app permissions {#step-3}

Add a guest app to the same registration to let another application act on the owning app's containers (for example, a backup tool). Guest apps receive only the permissions you list. This example grants the owning app `full` and a guest app `read` and `write` for delegated calls only.

```http
PUT https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/{container-type-id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "applicationPermissionGrants": [
    {
      "appId": "{owning-app-id}",
      "delegatedPermissions": ["full"],
      "applicationPermissions": ["full"]
    },
    {
      "appId": "{guest-app-id}",
      "delegatedPermissions": ["read", "write"],
      "applicationPermissions": ["none"]
    }
  ]
}
```

**Expected response:** `201 Created` with a registration whose `applicationPermissionGrants` includes both the owning app and `{guest-app-id}`.

**On failure:**
- `403 Forbidden` → the guest app has no service principal / consent in the consuming tenant. Have its app consented there first.
- `400 Bad Request` → an invalid permission value; use only the values in **Permission values**.

> [!IMPORTANT]
> Each registration call replaces the prior grant set — the last successful call determines the effective permissions. Always include the owning app's grant in every call, or you will remove its access.

## Verify {#verify}

Confirm the owning app can now act on containers of this type in the consuming tenant:

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}
Authorization: Bearer {token}
```

Returns `200 OK` (an empty collection is valid before any container exists). A `403 Forbidden` here means registration or consent is incomplete — re-check [Step 1](#step-1) and [Step 2](#step-2).

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with `FileStorageContainerTypeReg.Selected` |
| `403 Forbidden` on registration | Admin consent not granted in the consuming tenant | Complete [Step 1](#step-1), wait for propagation, retry |
| `403 Forbidden` on container calls after registering | Owning app grant omitted from the last registration call | Re-register including the owning app's `full` grant |
| `400 Bad Request` | `writeContent` granted without `readContent`, or invalid permission value | Add `readContent`; use only values in **Permission values** |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Set up a trial environment with the VS Code extension](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode) — create your first container against the registered type.
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) — manage per-user access on containers.

## Related

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
