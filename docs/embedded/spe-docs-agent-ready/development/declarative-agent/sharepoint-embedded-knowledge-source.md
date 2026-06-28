---
title: Set up SharePoint Embedded as a knowledge source in Microsoft Foundry
description: Configure a SharePoint knowledge source over SharePoint Embedded content and grant Microsoft Foundry access to your container type.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: how-to
  outcome: A Microsoft Foundry Agent Service knowledge source is configured over a SharePoint Embedded container type, and Microsoft Foundry is granted delegated read access so an agent can retrieve over container content.
  estimated_minutes: 25
  difficulty: advanced
  roles: [app-developer, enterprise-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: how-to
    - capability: container-type-owner
    - capability: m365-subscription
  api_surface:
    - id: createContainerTypeRegistration
      method: POST
      path: /storage/fileStorage/containerTypeRegistrations
      permissions: [FileStorageContainerType.Manage.All]
  inputs:
    - name: container-type-id
      type: uuid
      source: app-registration
    - name: foundry-app-id
      type: uuid
      source: generated
  outputs:
    - name: application-permission-grant
      type: object
      verify: GET the container type registration shows Foundry's application permission grant with delegated readContent.
  next_steps:
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
      when: needs-search
    - uri: /sharepoint/dev/embedded/overview
      when: always
  related:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/api-surface.json
  stability: preview
  last_validated: proposed
---

# Set up SharePoint Embedded as a knowledge source in Microsoft Foundry
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to, a [Microsoft Foundry Agent Service](/azure/foundry/agents/overview) knowledge source is configured to retrieve over content in a SharePoint Embedded (SPE) container type, and Microsoft Foundry holds the delegated read permission it needs to access that container type in your consuming tenants.

> [!IMPORTANT]
> The SharePoint Embedded AI knowledge source in Microsoft Foundry is in **Preview**. Its API surface, required permissions, and pricing may change before general availability. The Copilot-license prerequisite below applies to the preview period only; billing switches to metered once this capability leaves preview. Do not depend on this capability in production until it is generally available.

## Prerequisites

- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview) — an SPE app with **at least one container** must already exist.
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you know the `{container-type-id}` of the content to expose, and your app owns it.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — the container type's **owning application** can call Microsoft Graph against the consuming tenants.
- Capability: `container-type-owner` — only the owning application can grant Foundry access to the container type.
- Capability: `m365-subscription` — at least **one Copilot license** on the tenant. This is a preview-only requirement.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-type-id}` | uuid | Your app registration — the SPE container type whose content the agent retrieves over |
| `{foundry-app-id}` | uuid | The Microsoft Foundry first-party application ID, `880da380-985e-4198-81b9-e05b1cc53158` (fixed value per the live docs; verify before use) |

## Steps

### Step 1 — Configure the SharePoint knowledge source for SharePoint Embedded {#step-1}
Point the [SharePoint knowledge source (Preview)](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote) at your container type so Foundry retrieves over SPE content. Set `remoteSharePointParameters.containerTypeId` to your `{container-type-id}`.

```manual:
  description: Create a SharePoint knowledge source configured for SharePoint Embedded in Microsoft Foundry.
  ui_path: Microsoft Foundry → Agent Service → Knowledge sources → add a SharePoint knowledge source → set remoteSharePointParameters.containerTypeId to {container-type-id}
  api_equivalent: Configured through the Foundry / Azure AI Search SharePoint knowledge source API; see /azure/search/agentic-knowledge-source-how-to-sharepoint-remote#source-specific-properties. No SPE Graph operation provisions this — out of api-surface.json scope.
  verify:
    method: GET
    path: /storage/fileStorage/containerTypeRegistrations
```

**Expected response:** The knowledge source is created with `remoteSharePointParameters.containerTypeId` equal to `{container-type-id}`.

**On failure:**
- Knowledge source creation rejects the container type → `{container-type-id}` is wrong, or the container type has no containers. Confirm at least one container exists.
- See the [SharePoint knowledge source properties](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote#source-specific-properties) for the required `remoteSharePointParameters` shape.

### Step 2 — Grant Microsoft Foundry access to the container type {#step-2}
Foundry needs delegated read permission on your container type. Grant it by updating the container type registration in each consuming tenant. The container type's **owning application** must make this call on the consuming tenants. Replace `{container-type-id}` with your container type ID; `{foundry-app-id}` is the fixed Foundry application ID `880da380-985e-4198-81b9-e05b1cc53158`.

```http
PUT https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypeRegistrations/{container-type-id}/applicationPermissionGrants/{foundry-app-id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "delegatedPermissions": ["readContent"],
  "applicationPermissions": ["none"]
}
```

> [!NOTE]
> The `applicationPermissionGrants` sub-resource on `containerTypeRegistrations` is not yet listed in [api-surface.json](/sharepoint/dev/embedded/api-surface.json); the closest registered operation is `createContainerTypeRegistration` (POST `/storage/fileStorage/containerTypeRegistrations`, **beta**, `FileStorageContainerType.Manage.All`). Verify the method, host (v1.0 vs beta), and permissions of this PUT against the live `$metadata` before stamping `last_validated`.

> [!TIP]
> You can grant this permission during initial registration instead, using the [Create container type registration](/graph/api/filestorage-post-containertyperegistrations) endpoint.

**Expected response:** `200 OK` (or `201 Created`) with the application permission grant for `{foundry-app-id}` showing `delegatedPermissions` of `readContent`.

**On failure:**
- `403 Forbidden` → the caller is not the container type's owning application, or lacks `FileStorageContainerType.Manage.All`. Call from the owning app with the required permission.
- `404 Not Found` → the container type is not registered in this consuming tenant. Register it first with [Create container type registration](/graph/api/filestorage-post-containertyperegistrations).
- `400 Bad Request` → `{foundry-app-id}` is not the expected Foundry application ID; confirm the current value.

## Verify {#verify}
Confirm the Foundry application permission grant is present on the container type registration.

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypeRegistrations/{container-type-id}/applicationPermissionGrants
Authorization: Bearer {token}
```

Returns `200 OK` with a grant for `{foundry-app-id}` whose `delegatedPermissions` include `readContent`. A Foundry agent backed by the knowledge source can then retrieve over the container content.

## Troubleshooting {#troubleshooting}
| Symptom | Likely cause | Fix |
|---|---|---|
| Agent returns no SPE results | Knowledge source `containerTypeId` mismatch, or grant missing | Re-check [Step 1](#step-1) `containerTypeId` and [Step 2](#step-2) grant |
| `403 Forbidden` on the grant | Caller is not the owning app or lacks `FileStorageContainerType.Manage.All` | Call from the owning application with the required permission |
| `404 Not Found` on the registration | Container type not registered in the consuming tenant | Register it with [Create container type registration](/graph/api/filestorage-post-containertyperegistrations) |
| Setup blocked by licensing | No Copilot license on the tenant (preview-only requirement) | Assign at least one Copilot license during the preview |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps
- [Search SharePoint Embedded containers and content](/sharepoint/dev/embedded/development/content-experiences/search-content)
- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview)

## Related
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Microsoft Foundry Agent Service](/azure/foundry/agents/overview)
- [SharePoint knowledge source (Preview)](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
