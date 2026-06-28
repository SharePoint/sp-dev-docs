---
title: Manage SharePoint Embedded containers in the SharePoint admin center
description: Archive, reactivate, delete, restore, label, and manage membership of SharePoint Embedded containers from the SharePoint admin center UI.
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
  outcome: A consuming tenant admin has located, governed, and lifecycle-managed SharePoint Embedded containers (archive, reactivate, delete, restore, label, membership) from the SharePoint admin center.
  estimated_minutes: 15
  difficulty: intermediate
  roles: [consuming-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
      kind: concept
    - capability: spe-admin
  api_surface:
    - id: listContainers
      method: GET
      path: /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}
      permissions: [FileStorageContainer.Selected]
    - id: getContainer
      method: GET
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: deleteContainer
      method: DELETE
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: restoreDeletedContainer
      method: POST
      path: /storage/fileStorage/deletedContainers/{container-id}/restore
      permissions: [FileStorageContainer.Selected]
    - id: permanentDeleteContainer
      method: POST
      path: /storage/fileStorage/containers/{container-id}/permanentDelete
      permissions: [FileStorageContainer.Selected]
    - id: updateContainer
      method: PATCH
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: addContainerPermission
      method: POST
      path: /storage/fileStorage/containers/{container-id}/permissions
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: container-id
      type: string
      source: prior-step
    - name: container-name
      type: string
      source: user-supplied
    - name: sensitivity-label
      type: string
      source: user-supplied
    - name: principal-upn
      type: string
      source: user-supplied
  outputs:
    - name: container-id
      type: string
      verify: GET /storage/fileStorage/containers/{container-id} returns 200 with the expected status
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell
      when: always
    - uri: /sharepoint/dev/embedded/compliance/security-and-compliance
      when: govern-content
  related:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
    - uri: /sharepoint/dev/embedded/administration/adminrole
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
  stability: ga
  last_validated: proposed
---

# Manage SharePoint Embedded containers in the SharePoint admin center
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end, a consuming tenant admin (CTA) has located SharePoint Embedded containers in the SharePoint admin center (SPAC) and run the full lifecycle and governance set against them — archive, reactivate, delete, restore, permanently delete, sensitivity labeling, and membership — using the portal UI. The SPAC actions are point-and-click only; each step lists the Microsoft Graph or PowerShell equivalent for unattended automation and a verify call.

> [!NOTE]
> The container pages in the SharePoint admin center have no public Graph API. Each step uses a `manual:` block carrying the UI path plus the closest API equivalent for automation. The CTA must hold the **SharePoint Embedded Administrator** role; that role sees only the **Active containers** and **Deleted containers** pages, whereas a Global Administrator also sees the global admin views.

## Prerequisites

- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta) — what the CTA role is and which surfaces it covers.
- Capability: `spe-admin` — the SharePoint Embedded Administrator role (or Global Administrator), assigned by a Global Administrator in the [Microsoft 365 admin center](https://admin.microsoft.com/) or Microsoft Entra ID. See [SharePoint Embedded admin role](/sharepoint/dev/embedded/administration/adminrole).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-id}` | string | The container row selected on the Active, Archived, or Deleted containers page |
| `{container-name}` | string | The container name shown in the grid; used for search |
| `{sensitivity-label}` | string | A sensitivity label published to the tenant |
| `{principal-upn}` | string | The user to add or reassign in the membership panel |

## Steps

### Step 1 — Open the containers pages and read container metadata {#step-1}

The Active containers page lists every active container in the tenant with its name, application name, publisher, ownership type, principal owner, storage, owners, owner count, sensitivity label, and creation date. Archived and Deleted pages show parallel collections (Deleted adds a **Deleted on** date). Use search (by container name on the Active page), sorting (Storage, Created on; Deleted on adds for the Deleted page), and filtering (application name, publisher, ownership type, principal owner, owner count, created on) to find a container.

```yaml
manual:
  description: View active, archived, and deleted SharePoint Embedded containers and their metadata.
  ui_path: SharePoint admin center (https://go.microsoft.com/fwlink/?linkid=2185219) → Containers → Active containers | Archived containers | Deleted containers
  api_equivalent: GET /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}  # listContainers; tenant-wide enumeration across all types has no API — see api-surface.json gap "listAllContainersTenantWide"
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** the selected container appears in the grid; the verify call returns `200 OK` with the container's `status`.

**On failure:**
- The Active/Deleted pages are missing or empty for a SharePoint Embedded Administrator → confirm the role assignment took effect; sign out and back in. A Global Administrator sees additional views the SPE Admin role does not.
- `403 Forbidden` on the verify call → the app token lacks `FileStorageContainer.Selected`, or container-level permission was not granted.

### Step 2 — View container details and membership {#step-2}

Selecting a container opens a detail panel with two tabs: **General** (metadata, usage, configuration) and **Membership** (the users in each of the four roles). SharePoint Embedded supports four roles — Owner, Manager, Writer, Reader — though an application may use a subset or rename them.

```yaml
manual:
  description: Open the container detail panel to read general metadata and membership.
  ui_path: SharePoint admin center → Containers → Active containers → select {container-name} → General tab | Membership tab
  api_equivalent: GET /storage/fileStorage/containers/{container-id}  # getContainer; for members use GET /storage/fileStorage/containers/{container-id}/permissions (listContainerPermissions)
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}/permissions
```

**Expected response:** the detail panel renders both tabs; the verify call returns `200 OK` with the permission collection.

**On failure:**
- The Membership tab shows no roles → the application defines a subset of roles; this is expected, not an error.
- `404 Not Found` on the verify call → the container was deleted or the `{container-id}` is wrong.

### Step 3 — Set or change the sensitivity label {#step-3}

On the Active container detail panel, the Settings area exposes the sensitivity label, selected from the labels published to the tenant. Setting a label classifies the container's content for downstream Purview enforcement.

```yaml
manual:
  description: Set a sensitivity label on an active container.
  ui_path: SharePoint admin center → Containers → Active containers → select {container-name} → General → Settings → Sensitivity label → choose {sensitivity-label}
  api_equivalent: PATCH /storage/fileStorage/containers/{container-id} with body { "assignedSensitivityLabel": { "displayName": "{sensitivity-label}" } }  # updateContainer; PowerShell: Set-SPOContainer -Identity {container-id} -SensitivityLabel {sensitivity-label}
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** the panel shows the chosen label; the verify call returns `200 OK` and the container's `assignedSensitivityLabel` reflects `{sensitivity-label}`.

**On failure:**
- The label list is empty → no sensitivity labels are published to this tenant, or label scope excludes containers/sites. Publish a SharePoint/site-scoped label in Microsoft Purview.
- `400 Bad Request` on the verify call → the label GUID is not valid for this tenant.

### Step 4 — Manage membership (add, reassign, remove) {#step-4}

The Membership panel manages users per role. Adding a user already in another role converts the action to **Reassign**; **Remove** prompts for confirmation before unassigning.

```yaml
manual:
  description: Add a user to a role, reassign a user to a different role, or remove a user from a role on a container.
  ui_path: SharePoint admin center → Containers → Active containers → select {container-name} → Membership → choose a role → Add | Reassign | Remove → pick {principal-upn}
  api_equivalent: POST /storage/fileStorage/containers/{container-id}/permissions with body { "roles": ["owner"], "grantedToV2": { "user": { "userPrincipalName": "{principal-upn}" } } }  # addContainerPermission; PATCH .../permissions/{permission-id} to reassign (updateContainerPermission); DELETE to remove (deleteContainerPermission)
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}/permissions
```

**Expected response:** the user appears under the chosen role; the verify call returns `200 OK` listing the user with the assigned role.

**On failure:**
- The Add action becomes Reassign unexpectedly → the user already holds a different role on this container; reassign instead of adding.
- `400 Bad Request` on the API equivalent → the `roles` value is not one of `reader`, `writer`, `manager`, `owner`.

### Step 5 — Archive an active container {#step-5}

Archive a container that is no longer actively used but must be retained for legal, compliance, or business reasons. The confirmation side panel explains the impact and how to recover the content before the archive proceeds.

```yaml
manual:
  description: Archive an active SharePoint Embedded container.
  ui_path: SharePoint admin center → Containers → Active containers → select {container-name} → Archive → Archive (confirm)
  api_equivalent: none — no Graph API for container archive today; see api-surface.json gap "listAllContainersTenantWide" (archive lifecycle is portal/PowerShell-only)
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** the container moves to the Archived containers page; the verify call returns `200 OK` reflecting the archived state.

**On failure:**
- The Archive button is disabled → no container is selected, or the container is already archived.
- The container does not appear on the Archived page → archival is eventually consistent; refresh after a short wait.

### Step 6 — Reactivate an archived container {#step-6}

Archived containers are inaccessible to users and apps until reactivated. Containers archived within the last seven days are **Recently archived** and reactivate quickly; older containers are **Fully archived** and take up to **24 hours**, showing a **Reactivating** state until complete.

```yaml
manual:
  description: Reactivate a recently or fully archived container.
  ui_path: SharePoint admin center → Containers → Archived containers → select {container-name} → Reactivate → Reactivate (confirm)
  api_equivalent: none — no Graph API for reactivation today; portal/PowerShell-only (see api-surface.json gap "uniformAsyncOperationStatus" for the missing pollable status resource)
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** a recently archived container returns to Active immediately; a fully archived container shows **Reactivating** for up to 24 hours, then returns to Active. The verify call returns `200 OK` with the active status once complete.

**On failure:**
- The container stays in **Reactivating** beyond 24 hours → reactivation is asynchronous with no pollable status API today; re-check the Archived page later before retrying.
- Users still cannot access the container → reactivation has not finished; wait for the Active page to list it.

### Step 7 — Delete an active or archived container {#step-7}

The Delete button is disabled until a container is selected. The confirmation panel warns about the impact on the owning application and explains the 93-day restoration window. Archived containers offer the same delete experience.

```yaml
manual:
  description: Soft-delete an active or archived container into the deleted container collection.
  ui_path: SharePoint admin center → Containers → Active containers (or Archived containers) → select {container-name} → Delete → Delete container (confirm)
  api_equivalent: DELETE /storage/fileStorage/containers/{container-id}  # deleteContainer; PowerShell: Remove-SPOContainer -Identity {container-id}
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** the container moves to the Deleted containers page; the API equivalent returns `204 No Content`.

**On failure:**
- `423 Locked` on the API equivalent → the container is locked (`lockedReadOnly`); unlock it first with the `unlockContainer` operation.
- The owning application breaks after deletion → expected; deletion removes content and can cause data loss and broken links. Notify owners before deleting.

> [!WARNING]
> Deleting a container removes all its content and may interrupt the SharePoint Embedded application it belongs to. Deleted containers are permanently purged after **93 days** unless a retention policy applies.

### Step 8 — Restore a deleted container {#step-8}

A container in the deleted collection can be restored within 93 days. Restoration runs in the background; status appears in the top-right of the page. A container archived at the time of deletion is restored to the archived state.

```yaml
manual:
  description: Restore a soft-deleted container from the deleted container collection.
  ui_path: SharePoint admin center → Containers → Deleted containers → select {container-name} → Restore
  api_equivalent: POST /storage/fileStorage/deletedContainers/{container-id}/restore  # restoreDeletedContainer; PowerShell: Restore-SPODeletedContainer -Identity {container-id}
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** the container returns to the Active page (or Archived, if it was archived when deleted); the API equivalent returns `200 OK`.

**On failure:**
- The container is not in the Deleted collection → it was already restored or has exceeded the 93-day window and was purged.
- `404 Not Found` on the API equivalent → the container was permanently deleted and cannot be restored.

### Step 9 — Permanently delete a container {#step-9}

From the Deleted containers page, the CTA can purge a container ahead of the 93-day schedule. A pop-up warns that the action is irreversible before it proceeds.

```yaml
manual:
  description: Permanently delete a container from the deleted container collection.
  ui_path: SharePoint admin center → Containers → Deleted containers → select {container-name} → Permanently delete → Delete (confirm)
  api_equivalent: POST /storage/fileStorage/containers/{container-id}/permanentDelete  # permanentDeleteContainer
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}
```

**Expected response:** the container is removed from the Deleted collection and cannot be restored; the API equivalent returns `204 No Content`.

**On failure:**
- The Permanently delete button is disabled → no container is selected on the Deleted page.
- A retention policy blocks the purge → the container is held by a retention/hold policy; the policy must be resolved in Microsoft Purview before permanent deletion.

## Verify {#verify}

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}
Authorization: Bearer {token}
```

Returns `200 OK` for an active or archived container reflecting the expected `status`, or `404 Not Found` for a permanently deleted container — matching the lifecycle action you performed.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| Only Active and Deleted pages are visible | Signed in as SharePoint Embedded Administrator, not Global Administrator | Expected — the SPE Admin role sees a subset of SPAC views. Use a Global Administrator for the global views. |
| Container pages are empty or missing | Role assignment not yet effective | Confirm the SharePoint Embedded Administrator role, then sign out and back in. |
| `403 Forbidden` on a verify call | App token missing `FileStorageContainer.Selected` or container permission | Re-acquire a token with the permission; grant the app access to the container. |
| `423 Locked` on delete | Container is `lockedReadOnly` | Unlock with `unlockContainer`, then retry. |
| Reactivation stuck in **Reactivating** | Fully archived reactivation takes up to 24 hours; no pollable status API | Wait up to 24 hours; re-check the Archived page. See gap `uniformAsyncOperationStatus`. |
| `429 Too Many Requests` on API equivalents | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling). |

## Next steps

- [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell)
- [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance)

## Related

- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta)
- [SharePoint Embedded admin role](/sharepoint/dev/embedded/administration/adminrole)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
