<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->
---
title: Configure authentication and authorization for a SharePoint Embedded app
description: Request the right Microsoft Graph permissions, grant admin consent, and gain access to containers on owning and consuming tenants.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: The application holds the correct Microsoft Graph permissions on the owning and consuming tenants, admin consent is granted, and it can acquire tokens that access containers.
  estimated_minutes: 30
  difficulty: intermediate
  roles: [app-developer, enterprise-developer, owning-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/development/app-architecture
      kind: concept
    - capability: entra-app-admin
    - capability: m365-subscription
  api_surface:
    - id: grantAdminConsentEquivalent
      method: POST
      path: /servicePrincipals/{service-principal-id}/appRoleAssignedTo
      permissions: [AppRoleAssignment.ReadWrite.All, Application.Read.All]
    - id: verifyAdminConsent
      method: GET
      path: /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
      permissions: [Application.Read.All]
  inputs:
    - name: app-object-id
      type: uuid
      source: entra-portal
    - name: service-principal-id
      type: uuid
      source: entra-portal
    - name: graph-resource-app-id
      type: uuid
      source: generated
    - name: app-role-id
      type: uuid
      source: app-registration
  outputs:
    - name: consent-state
      type: string
      verify: GET /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo returns 200 with the expected appRoleAssignment
  next_steps:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      when: always
    - uri: /sharepoint/dev/embedded/getting-started/register-api-documentation
      when: multi-tenant-app
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/app-architecture
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
    - uri: /sharepoint/dev/embedded/development/limits-calling
  stability: ga
  last_validated: proposed
---

# Configure authentication and authorization for a SharePoint Embedded app
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

SharePoint Embedded (SPE) applications interact with SPE only through Microsoft Graph. Two permission layers govern every call: **Microsoft Graph permissions** allow the application to call SPE endpoints at all, and **container type application permissions** then determine which containers of which container type it may touch. Authorization is the intersection of both — and, when acting on behalf of a user, of the user's permissions as well. SPE supports both [access on behalf of a user](https://learn.microsoft.com/en-us/graph/auth-v2-user) (delegated) and [access without a user](https://learn.microsoft.com/en-us/graph/auth-v2-service) (app-only); access on behalf of a user is recommended for security and auditability. At the end of this how-to, your application holds the correct Graph permissions on the owning and consuming tenants, admin consent is granted, and it can acquire tokens that reach containers.

> [!IMPORTANT]
> Microsoft Graph permissions let your application call SPE endpoints, but the application must also be granted permission to a container type before it can access containers of that type. Grant container type application permissions through [container type registration](/sharepoint/dev/embedded/getting-started/register-api-documentation) on the consuming tenant.

## Prerequisites

- [Application architecture](/sharepoint/dev/embedded/development/app-architecture) — understand owning vs consuming tenant before requesting permissions.
- Capability: a Microsoft Entra ID [application registration](https://learn.microsoft.com/en-us/graph/auth-register-app-v2).
- Capability: an Entra tenant with a Microsoft 365 subscription.
- Capability: an account with **Application Administrator** (or equivalent) to grant admin consent on each tenant.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{app-object-id}` | uuid | The application object in the Microsoft Entra admin center. |
| `{service-principal-id}` | uuid | The application's service principal (enterprise application) object ID on the target tenant. |
| `{graph-resource-app-id}` | uuid | The Microsoft Graph resource app ID, the constant `00000003-0000-0000-c000-000000000000`. |
| `{app-role-id}` | uuid | The ID of the app role (permission) being assigned; see the permission tables below. |

### Microsoft Graph permissions used by SPE

Request these in the application manifest (`requiredResourceAccess`). All use `resourceAppId` = `00000003-0000-0000-c000-000000000000` (Microsoft Graph).

| Permission | Purpose | Manifest type | Permission ID |
|---|---|---|---|
| `FileStorageContainerType.Manage.All` | Create and manage container types. Owning tenant only. | `Role` | `8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b` |
| `FileStorageContainerTypeReg.Selected` | Register the container type on consuming tenants. | `Role` | `2dcc6599-bd30-442b-8f11-90f88ad441dc` |
| `FileStorageContainer.Selected` (delegated) | Access containers on behalf of a user. | `Scope` | `085ca537-6565-41c2-aca7-db852babc212` |
| `FileStorageContainer.Selected` (app-only) | Access containers without a user. | `Role` | `40dc41bc-0f7e-42ff-89bd-d9516947e474` |
| `FileStorageContainer.Manage.All` (delegated) | Administrative actions across all governable container types, on behalf of an admin. Requires the user to be a SharePoint Embedded Administrator or Global Administrator. | `Scope` | See [Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference#filestoragecontainermanageall) |

> [!NOTE]
> When acting on behalf of a user, the effective permission is the **intersection** of the application permissions and the user permissions. App-only access instead grants the full access defined by the container type application permissions.

### Container type application permissions

Granted to the application per container type at registration time. These are not Graph manifest permissions.

| Permission | Description |
|---|---|
| `None` | No access to any containers or content of this container type. |
| `ReadContent` | Read content of containers of this type. |
| `WriteContent` | Write content. Cannot be granted without `ReadContent`. |
| `Create` | Create containers of this type. |
| `Delete` | Delete containers of this type. |
| `Read` | Read container metadata. |
| `Write` | Update container metadata. |
| `EnumeratePermissions` | Enumerate members and roles. |
| `AddPermissions` | Add members. |
| `UpdatePermissions` | Change roles of existing members. |
| `DeletePermissions` | Remove other members (not self). |
| `DeleteOwnPermission` | Remove own membership. |
| `ManagePermissions` | Add, remove (including self), or update members. |
| `ManageContent` | `WriteContent` plus discard-checkout in app-only mode. |
| `Full` | All permissions for containers of this type. |

### Container (user) permission roles {#container-user-permission-roles}

Apply only to access on behalf of a user. Granted via [add container permission](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-post-permissions).

| Role | Description |
|---|---|
| `reader` | Read container properties and contents. |
| `writer` | Reader plus create/update/delete content and update applicable container properties. |
| `manager` | Writer plus manage container membership. |
| `owner` | Manager plus delete and restore containers. |

> [!NOTE]
> A user who creates a new container through a delegated call is automatically assigned the `owner` role.

## Steps

### Step 1 — Request container-type management permission on the owning tenant {#step-1}

Add `FileStorageContainerType.Manage.All` to the application manifest so the app can create container types. Configure this on the **owning** tenant only.

```json
{
  "requiredResourceAccess": [
    {
      "resourceAppId": "{graph-resource-app-id}",
      "resourceAccess": [
        { "id": "8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b", "type": "Role" }
      ]
    }
  ]
}
```

**Expected response:** the manifest saves and the permission appears under **API permissions** as *Not granted* until consent.

**On failure:**
- `Insufficient privileges` → the signing-in account lacks rights to edit the app registration. Use an Application Administrator account.
- Manifest validation error → `resourceAppId` is not the Microsoft Graph constant `00000003-0000-0000-c000-000000000000`.

### Step 2 — Grant admin consent on the owning tenant {#step-2}

Consent assigns the requested app roles to the application's service principal. The API equivalent of the portal "Grant admin consent" action is an app-role assignment (`grantAdminConsentEquivalent`).

```http
POST https://graph.microsoft.com/v1.0/servicePrincipals/{service-principal-id}/appRoleAssignedTo
Authorization: Bearer {token}
Content-Type: application/json

{
  "principalId": "{service-principal-id}",
  "resourceId": "{graph-service-principal-id}",
  "appRoleId": "8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b"
}
```

**Expected response:** `201 Created` with the `appRoleAssignment`.

**On failure:**
- `403 Forbidden` (`accessDenied`) → caller lacks `AppRoleAssignment.ReadWrite.All`. Grant the consenting identity that permission.
- `400 Bad Request` → `appRoleId` is not a valid app role on the Graph service principal, or `resourceId` is not the Graph service principal ID on this tenant.

### Step 3 — Create the container type, then trim owning-tenant permissions {#step-3}

After consent, [create a container type](/sharepoint/dev/embedded/getting-started/containertypes) on the owning tenant. Once it exists, **remove** `FileStorageContainerType.Manage.All` from the manifest — it is needed only to create the container type, never on consuming tenants.

```json
{
  "requiredResourceAccess": [
    {
      "resourceAppId": "{graph-resource-app-id}",
      "resourceAccess": [
        { "id": "2dcc6599-bd30-442b-8f11-90f88ad441dc", "type": "Role" }
      ]
    }
  ]
}
```

**Expected response:** the manifest saves with `FileStorageContainerType.Manage.All` removed and `FileStorageContainerTypeReg.Selected` present.

**On failure:**
- Container type creation returns `403` → consent from [step 2](#step-2) was not granted or not yet propagated. Re-grant and retry.

> [!WARNING]
> Leaving `FileStorageContainerType.Manage.All` in the manifest exposes excessive permissions to your customers' consuming tenants. Remove it after the container type is created.

### Step 4 — Request container-access permissions for consuming tenants {#step-4}

Add the permissions the app needs on consuming tenants: registration plus container access (delegated, and app-only if required).

```json
{
  "requiredResourceAccess": [
    {
      "resourceAppId": "{graph-resource-app-id}",
      "resourceAccess": [
        { "id": "2dcc6599-bd30-442b-8f11-90f88ad441dc", "type": "Role" },
        { "id": "085ca537-6565-41c2-aca7-db852babc212", "type": "Scope" },
        { "id": "40dc41bc-0f7e-42ff-89bd-d9516947e474", "type": "Role" }
      ]
    }
  ]
}
```

**Expected response:** the manifest saves with the delegated `FileStorageContainer.Selected` scope and, optionally, the app-only role.

**On failure:**
- Duplicate `id` validation error → a permission ID is listed twice; each `id` appears once per `resourceAppId` block.

### Step 5 — Grant admin consent on the consuming tenant {#step-5}

An administrator on the consuming tenant must consent to the requested permissions. Use the same app-role-assignment call against the consuming tenant's service principal.

```http
POST https://graph.microsoft.com/v1.0/servicePrincipals/{service-principal-id}/appRoleAssignedTo
Authorization: Bearer {token}
Content-Type: application/json

{
  "principalId": "{service-principal-id}",
  "resourceId": "{graph-service-principal-id}",
  "appRoleId": "{app-role-id}"
}
```

**Expected response:** `201 Created` per assigned app role.

**On failure:**
- `403 Forbidden` → the consenting account is not an administrator on the consuming tenant. Use a Global Administrator or an account with consent rights.
- Delegated scopes (`Scope` type) are consented as OAuth2 permission grants, not app-role assignments; grant those via the consent flow rather than this call.

### Step 6 — Register the container type on the consuming tenant {#step-6}

Registration grants the app its container type application permissions on the consuming tenant. Follow [Register the container type](/sharepoint/dev/embedded/getting-started/register-api-documentation).

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations
Authorization: Bearer {token}
Content-Type: application/json

{ "containerTypeId": "{container-type-id}" }
```

**Expected response:** `201 Created` with the container type registration. (Beta endpoint; see [stability note](#troubleshooting).)

**On failure:**
- `403 Forbidden` → the app lacks `FileStorageContainerTypeReg.Selected` consent on this tenant. Complete [step 5](#step-5).

## Verify {#verify}

Confirm that the expected app-role assignments are in place for the application on the target tenant.

```http
GET https://graph.microsoft.com/v1.0/servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
Authorization: Bearer {token}
```

Returns `200 OK`. The `appRoleAssignedTo` collection contains the SPE permission roles you assigned for that tenant.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing, expired, or wrong scope | Re-acquire a token with the permission in **Inputs**. |
| `403 Forbidden` on container access | Container type not registered or not consented on this tenant | Complete [step 5](#step-5) and [step 6](#step-6). |
| `403 Forbidden` on List containers (delegated) | The signed-in user has no OneDrive | Known dependency; call app-only, or provision the user's OneDrive. |
| `FileStorageContainer.Manage.All` grants nothing | Signed-in user is not a SharePoint Embedded or Global Administrator | Sign in as an administrator; if both `Manage.All` and `Selected` are granted, `Manage.All` is ignored. |
| `containerTypeRegistrations` not found | Calling `v1.0`; the endpoint is **beta** | Use the `https://graph.microsoft.com/beta` host. Stability: beta. |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling). |

## Next steps

- [Create a container type](/sharepoint/dev/embedded/getting-started/containertypes)
- [Register the container type](/sharepoint/dev/embedded/getting-started/register-api-documentation)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)

## Related

- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [Microsoft Graph authentication and authorization](https://learn.microsoft.com/en-us/graph/auth/auth-concepts)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
