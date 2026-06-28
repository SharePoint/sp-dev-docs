---
title: Set up a SharePoint Embedded trial environment with the VS Code extension
description: Install the SharePoint Embedded VS Code extension, create a trial container type, register it, and create your first container.
ms.topic: quickstart
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: quickstart
  outcome: A trial container type owned by a Microsoft Entra app is registered on the developer tenant and at least one active container exists.
  estimated_minutes: 15
  difficulty: beginner
  roles: [app-developer]
  prerequisites:
    - capability: m365-subscription
    - capability: entra-app-admin
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
  api_surface:
    - id: createContainerType
      method: POST
      path: /storage/fileStorage/containerTypes
      permissions: [FileStorageContainerType.Manage.All]
    - id: createContainerTypeRegistration
      method: POST
      path: /storage/fileStorage/containerTypeRegistrations
      permissions: [FileStorageContainerType.Manage.All]
    - id: createContainer
      method: POST
      path: /storage/fileStorage/containers
      permissions: [FileStorageContainer.Selected]
    - id: getContainer
      method: GET
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: container-type-name
      type: string
      source: user-supplied
    - name: owning-app-name
      type: string
      source: user-supplied
    - name: container-name
      type: string
      source: user-supplied
    - name: container-id
      type: uuid
      source: prior-step
  outputs:
    - name: container-type-id
      type: uuid
      verify: GET /storage/fileStorage/containerTypes returns the trial container type
    - name: container-id
      type: uuid
      verify: GET /storage/fileStorage/containers/{container-id} returns 200 with status active
  next_steps:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      when: always
    - uri: /sharepoint/dev/embedded/getting-started/register-api-documentation
      when: multi-tenant-app
    - uri: /sharepoint/dev/embedded/development/app-architecture
      when: always
  related:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/app-architecture
    - uri: /sharepoint/dev/embedded/development/auth
  stability: ga
  last_validated: proposed
---

# Set up a SharePoint Embedded trial environment with the VS Code extension
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this quickstart you have the SharePoint Embedded Visual Studio Code extension installed, a **trial** container type owned by a Microsoft Entra ID app, that container type registered on your developer tenant, and at least one active container you can upload files to. This is the fastest free path to calling SharePoint Embedded APIs for a proof of concept.

> [!NOTE]
> The VS Code extension creates only **trial** container types. Standard (`standard`) and passthrough (`directToCustomer`) container types must be created with Microsoft Graph or the SharePoint Online Management Shell. See [Container types](/sharepoint/dev/embedded/getting-started/containertypes).

## Prerequisites

- Capability: administrative access to a Microsoft 365 tenant. If you do not have one, get a tenant through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program), [Microsoft Customer Digital Experience](https://cdx.transform.microsoft.com/), or a [Microsoft 365 E3 trial](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing).
- Capability: an account that can grant Microsoft Entra admin consent on the tenant (Global Administrator or SharePoint Embedded Administrator).
- An active instance of SharePoint in the tenant.
- [Visual Studio Code](https://code.visualstudio.com/) installed.
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — read first to understand trial limits (5 containers, 1 GB each, 30 days).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-type-name}` | string | User-supplied; rename later if needed |
| `{owning-app-name}` | string | User-supplied; name of the new owning Entra app, or pick an existing app |
| `{container-name}` | string | User-supplied |
| `{container-id}` | uuid | Returned when the container is created (Step 5) |

## Steps

### Step 1 — Install the extension and sign in {#step-1}

Install the extension and authenticate to your tenant so the extension can create resources on your behalf.

```manual
manual:
  description: Install the SharePoint Embedded extension in VS Code and sign in with a tenant administrator account.
  ui_path: Visual Studio Code → Extensions (activity bar) → search "SharePoint Embedded" → Install → select the SharePoint Embedded icon → sign in → review requested permissions → Accept
  api_equivalent: none — the extension wraps app registration and consent; the underlying control-plane equivalents are createContainerType + grantAdminConsentEquivalent (see api-surface.json)
  verify:
    method: GET
    path: /storage/fileStorage/containerTypes
```

You can also install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=SharepointEmbedded.ms-sharepoint-embedded-vscode-extension). Authentication opens an external browser tab; review the requested permissions, then accept the admin consent prompt.

**Expected response:** the SharePoint Embedded view loads and shows your tenant signed in, ready to create a container type.

**On failure:**
- `Consent declined` → the signed-in account lacks Global Administrator or SharePoint Embedded Administrator role. Re-run with an eligible account.
- `AADSTS errors in the browser tab` → admin consent was not completed; restart sign-in from the SharePoint Embedded icon.

### Step 2 — Create a trial container type and its owning app {#step-2}

Create the trial container type. Every container type is owned 1:1 by a Microsoft Entra ID app, so the extension creates a new app (or configures an existing one) as the owning application.

```manual
manual:
  description: Create a trial container type named {container-type-name} owned by a new or existing Entra app {owning-app-name}.
  ui_path: SharePoint Embedded view → Create Trial Container Type → enter {container-type-name} → enter {owning-app-name} for a new app, or select an existing application ID
  api_equivalent: POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypes with billingClassification "trial" (operation createContainerType, beta-only — see api-surface.json gap promoteContainerTypeCrudToGa)
  verify:
    method: GET
    path: /storage/fileStorage/containerTypes
```

> [!WARNING]
> If you select an existing application, the extension updates that app's configuration to work with SharePoint Embedded. Do not do this on a production application.

**Expected response:** the new container type and its owning app appear as a tree node in the left navigation bar.

**On failure:**
- `A trial container type already exists` → each tenant may hold only one `trial` container type at a time. Permanently delete the existing one (including its deleted containers) first.
- `App configuration failed` → the selected existing app could not be reconfigured; create a new owning app instead.

### Step 3 — Register the container type on your tenant {#step-3}

Register the container type on your local (developer) tenant. Registration defines the owning app's permissions and is required before any container can be created. See [Register container type permissions](/sharepoint/dev/embedded/getting-started/register-api-documentation).

```manual
manual:
  description: Register the trial container type on the local developer tenant.
  ui_path: SharePoint Embedded view → select "Register on local tenant" prompt (lower-right), or right-click {container-type-name} → Register
  api_equivalent: POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations (operation createContainerTypeRegistration, beta-only — see api-surface.json gap promoteContainerTypeCrudToGa)
  verify:
    method: GET
    path: /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}
```

**Expected response:** the container type shows as registered, and a **Containers** node becomes available in the tree.

**On failure:**
- `Access denied / consent required` → grant admin consent in the browser window that opens, then retry registration.
- `403 Forbidden` on the API equivalent → the owning app lacks `FileStorageContainerType.Manage.All` or the user lacks the SharePoint Embedded Administrator role.

### Step 4 — Grant permissions {#step-4}

Grant admin consent for the registered container type's permissions so the app can act on containers.

```manual
manual:
  description: Grant admin consent for the container type's permissions.
  ui_path: SharePoint Embedded view → follow the "Grant admin consent" prompt → sign in and consent in the external browser window
  api_equivalent: POST https://graph.microsoft.com/v1.0/servicePrincipals/{service-principal-id}/appRoleAssignedTo (operation grantAdminConsentEquivalent)
  verify:
    method: GET
    path: /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
```

**Expected response:** consent completes in the browser and control returns to VS Code with the container type ready for use.

**On failure:**
- `Consent window closes without granting` → re-open the grant prompt; the signed-in account must hold a tenant admin role.

### Step 5 — Create your first container {#step-5}

Create a container of your trial container type. A trial container type allows up to five containers (active plus recycled).

```manual
manual:
  description: Create a container named {container-name} under the registered trial container type.
  ui_path: SharePoint Embedded view → right-click the Containers node → Create container → enter {container-name}
  api_equivalent: POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers (operation createContainer)
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

The Graph equivalent of this action is:

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers
Authorization: Bearer {token}
Content-Type: application/json

{ "displayName": "{container-name}", "containerTypeId": "{container-type-id}" }
```

**Expected response:** `201 Created` with a `fileStorageContainer`; the new container appears under the **Containers** node. Containers created through Graph are inactive until activated.

**On failure:**
- `Container limit reached` → a trial container type allows only 5 containers including recycled ones; recycle or permanently delete one.
- `400 Bad Request` (`containerTypeId not registered`) → complete [Step 3](#step-3) registration first.

## Verify {#verify}

Confirm the container exists and is usable:

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}
Authorization: Bearer {token}
```

Returns `200 OK` with a `fileStorageContainer` whose `status` is `active`. In the extension, the container appears under the **Containers** node and you can recycle or recover it from there.

To load a working sample app wired to this container type, use the extension's **Load Sample App** action; it writes the runtime configuration (owning app ID and container type ID) for you.

> [!IMPORTANT]
> The sample app stores authentication secrets in plain text for local development only. Never use this configuration in production. See [Register an application for production](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with the permission in **Inputs**; re-sign-in from the SharePoint Embedded icon |
| `403 Forbidden` | Admin consent not granted, or missing `FileStorageContainerType.Manage.All` | Grant consent ([Step 4](#step-4)), then re-acquire the token |
| Trial container type creation blocked | A `trial` container type already exists on the tenant (limit 1) | Permanently delete the existing trial container type and its deleted containers, then retry [Step 2](#step-2) |
| Cannot create a 6th container | Trial limit is 5 containers including recycled | Recycle or permanently delete a container, then retry [Step 5](#step-5) |
| Sample app port conflict | Port 8080 already in use | The sample app falls back to the next available port; or free port 8080 |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — create standard/passthrough container types for production.
- [Register container type permissions](/sharepoint/dev/embedded/getting-started/register-api-documentation) — register in other consuming tenants.
- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)

## Related

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
