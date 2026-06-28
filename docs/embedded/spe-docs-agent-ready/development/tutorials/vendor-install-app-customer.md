---
title: Install your SharePoint Embedded app in a customer tenant
description: Get admin consent, register your container type, and confirm billing so your SharePoint Embedded app is installed and usable on a consuming Microsoft 365 tenant.
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
  outcome: Your app's container type is registered on the consuming tenant with admin consent granted for the required Graph permissions, and a billable test call (such as creating a container) succeeds, proving the app is installed and usable there.
  estimated_minutes: 30
  difficulty: intermediate
  roles: [app-developer, owning-admin, consuming-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: entra-app-admin
  api_surface:
    - id: createContainerTypeRegistration
      method: POST
      path: /storage/fileStorage/containerTypeRegistrations
      permissions: [FileStorageContainerTypeReg.Selected]
    - id: grantAdminConsentEquivalent
      method: POST
      path: /servicePrincipals/{service-principal-id}/appRoleAssignedTo
      permissions: [AppRoleAssignment.ReadWrite.All, Application.Read.All]
    - id: verifyAdminConsent
      method: GET
      path: /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
      permissions: [Application.Read.All]
    - id: createContainer
      method: POST
      path: /storage/fileStorage/containers
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: tenant-id
      type: uuid
      source: user-supplied
    - name: client-id
      type: uuid
      source: app-registration
    - name: redirect-uri
      type: string
      source: app-registration
    - name: container-type-id
      type: uuid
      source: prior-step
    - name: service-principal-id
      type: uuid
      source: entra-portal
    - name: display-name
      type: string
      source: user-supplied
  outputs:
    - name: container-type-registration-id
      type: uuid
      verify: GET /storage/fileStorage/containerTypeRegistrations/{container-type-id} returns 200 on the consuming tenant
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
      when: migrating-from-azure-blob
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
      when: always
  related:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/administration/billing/billing
  stability: beta
  last_validated: proposed
---

# Install your SharePoint Embedded app in a customer tenant
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to, your SharePoint Embedded (SPE) app is installed on a consuming Microsoft 365 tenant: admin consent is granted for the required Microsoft Graph permissions, your container type is registered on that tenant, and a billable test call (such as creating a container) succeeds. The recommended path runs entirely inside your app using the Microsoft Authentication Library (MSAL) and on-behalf-of-user access.

> [!IMPORTANT]
> Using SharePoint Embedded on behalf of a user (delegated access) is the recommended approach. It strengthens your app's security and improves the auditability of actions your app performs.

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you must have already created a container type and built your app.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — for the SPE permission and consent model.
- Capability: `entra-app-admin` — the consuming-tenant user who grants consent must hold Privileged Role Administrator or Global Administrator; container type registration via delegated permission requires SharePoint Embedded Administrator or Global Administrator.
- The consuming tenant can be any Microsoft 365 tenant (including your own) but must have at least one SharePoint license.

> [!NOTE]
> Container type registration uses the `/beta` Microsoft Graph endpoint today (`api-surface.json` operation `createContainerTypeRegistration`, gap `promoteContainerTypeCrudToGa`). The shape may change before general availability; this page is marked `stability: beta`.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{tenant-id}` | uuid | The consuming tenant's directory (tenant) ID, or the tenant domain |
| `{client-id}` | uuid | Your app registration's Application (client) ID |
| `{redirect-uri}` | string | A redirect URI on your app registration that handles the admin-consent response |
| `{container-type-id}` | uuid | Your container type's ID from [Container types](/sharepoint/dev/embedded/getting-started/containertypes) |
| `{service-principal-id}` | uuid | The object ID of your app's service principal in the consuming tenant ([Microsoft Entra admin center](https://entra.microsoft.com) → Enterprise applications) |
| `{display-name}` | string | A display name for the test container created during verification |

## Steps

### Step 1 — Identify the permissions your app must request {#step-1}

Confirm your app requests the minimum permissions needed to install on a consuming tenant, so consent and registration can succeed. SPE requires two Graph permissions for installation.

| Permission | Type | Purpose | Consent |
|---|---|---|---|
| `FileStorageContainerTypeReg.Selected` | delegated or application | Register the container type in the consuming tenant | Application: requires admin consent. Delegated: no admin consent required |
| `FileStorageContainer.Selected` | delegated or application | Interact with SPE content for the container type in the consuming tenant | Requires admin consent |

This is a configuration check on your app registration; it has no Graph call. Verify the two permissions appear under **API permissions** for your app in the [Microsoft Entra admin center](https://entra.microsoft.com).

**On failure:**
- Permissions missing from the app registration → add `FileStorageContainerTypeReg.Selected` and `FileStorageContainer.Selected` under API permissions, then continue.

### Step 2 — Check whether the app is already installed {#step-2}

Avoid duplicate work: if your container type is already registered on the consuming tenant, installation is complete. Acquire a Graph token with `FileStorageContainerTypeReg.Selected` and read the registration.

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/{container-type-id}
Authorization: Bearer {token}
```

**Expected response:** `200 OK` means the container type is already registered on this tenant — installation is done, skip to [Verify](#verify). `404 Not Found` means it is not registered yet — continue to [#step-3](#step-3).

**On failure:**
- `403 Forbidden` (`accessDenied`) → the token lacks `FileStorageContainerTypeReg.Selected`, or admin consent for the application permission is missing. Continue with consent in [#step-3](#step-3).
- `401 Unauthorized` → token missing or expired. Re-acquire a token with `FileStorageContainerTypeReg.Selected`.

### Step 3 — Confirm the signing-in user can grant consent {#step-3}

Before sending the user to the consent screen, check that they can actually approve it. After the user signs in to your app (use [MSAL](https://learn.microsoft.com/entra/identity-platform/msal-overview) to obtain and [validate an ID token](https://learn.microsoft.com/entra/identity-platform/claims-validation)), inspect the `wids` claim for Privileged Role Administrator or Global Administrator role template IDs.

```typescript
// wids contains directory role template IDs from the validated ID token
const PRIVILEGED_ROLE_ADMIN = "e8611ab8-c189-46e8-94e1-60213ab1f814";
const GLOBAL_ADMIN = "62e90394-69f5-4237-9190-012177145e10";
const canConsent = (idTokenClaims.wids ?? []).some(
  (wid: string) => wid === PRIVILEGED_ROLE_ADMIN || wid === GLOBAL_ADMIN
);
```

**Expected response:** `canConsent` is `true` for an admin who can grant consent in [#step-4](#step-4).

**On failure:**
- `canConsent` is `false` → the user is unlikely to be able to grant admin consent. Surface a message asking them to involve a Privileged Role Administrator or Global Administrator, then resume at [#step-4](#step-4) once an admin signs in.

### Step 4 — Get admin consent for your app {#step-4}

Grant the consuming tenant's admin consent for your app's permissions. For an interactive admin, build the admin-consent URL and send the user to it; the redirect URI must handle the [successful response](https://learn.microsoft.com/entra/identity-platform/v2-admin-consent#successful-response).

```http
GET https://login.microsoftonline.com/{tenant-id}/v2.0/adminconsent?client_id={client-id}&redirect_uri={redirect-uri}
```

For unattended automation, an agent can use the API equivalent of the portal consent action instead — assign the app role to the app's service principal.

```yaml
manual:
  description: Grant the consuming tenant's admin consent for the app's SPE Graph permissions.
  ui_path: Microsoft Entra admin center → Enterprise applications → {your app} → Permissions → Grant admin consent
  api_equivalent: POST /servicePrincipals/{service-principal-id}/appRoleAssignedTo  # api-surface.json operation grantAdminConsentEquivalent
  verify:
    method: GET
    path: /servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
```

**Expected response:** the admin-consent flow redirects to `{redirect-uri}` with a success indication; the API-equivalent `POST .../appRoleAssignedTo` returns `201 Created`.

**On failure:**
- `403 Forbidden` on the consent redirect → the signing-in user is not an admin who can consent. Return to [#step-3](#step-3) and route to a qualified admin.
- `AADSTS650056` (misconfigured app) → the app or its permissions are not correctly registered. Re-check API permissions from [#step-1](#step-1).

### Step 5 — Register your container type on the consuming tenant {#step-5}

Register the container type so the app can create and use containers on this tenant. Acquire a Graph token with `FileStorageContainerTypeReg.Selected` (the user must be a SharePoint Embedded Administrator or Global Administrator when using delegated permission), then create the registration.

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations
Authorization: Bearer {token}
Content-Type: application/json

{ "containerTypeId": "{container-type-id}" }
```

**Expected response:** `201 Created` with a `fileStorageContainerTypeRegistration` resource for `{container-type-id}`.

**On failure:**
- `403 Forbidden` (`accessDenied`) → admin consent from [#step-4](#step-4) has not propagated, or the user lacks the SharePoint Embedded Administrator / Global Administrator role. Re-acquire the token after consent completes.
- `409 Conflict` → the container type is already registered on this tenant. Treat as installed and proceed to [Verify](#verify).

### Step 6 — Confirm pass-through billing if applicable {#step-6}

If your container type uses pass-through (direct-to-customer) billing, the consuming tenant must complete pay-as-you-go billing setup before any billable call succeeds. Make a billable test call — create a container — to confirm billing is active.

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers
Authorization: Bearer {token}
Content-Type: application/json

{ "displayName": "{display-name}", "containerTypeId": "{container-type-id}" }
```

**Expected response:** `201 Created` with a `fileStorageContainer` whose `status` is `inactive` — billing is set up correctly.

**On failure:**
- `402`/`403` with a billing error → the consuming tenant has not activated SPE pay-as-you-go billing. There is no Graph API for this activation (`api-surface.json` gap `activateConsumingTenantPayg`); direct the consuming-tenant admin to [set up billing for a pass-through container type](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta).
- `403 Forbidden` (non-billing) → token lacks `FileStorageContainer.Selected`. Re-acquire it.

## Verify {#verify}

Confirm the container type registration exists on the consuming tenant.

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/{container-type-id}
Authorization: Bearer {token}
```

Returns `200 OK` with the registration for `{container-type-id}`. If you ran [#step-6](#step-6), the test container also created successfully (`201 Created`), confirming consent, registration, and billing are all in place. Optionally confirm consent independently:

```http
GET https://graph.microsoft.com/v1.0/servicePrincipals/{service-principal-id}?$expand=appRoleAssignedTo
Authorization: Bearer {token}
```

Returns `200 OK` with `appRoleAssignedTo` listing the SPE permissions granted to your app.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `403 Forbidden` registering the container type | Admin consent not yet granted or not propagated | Complete [#step-4](#step-4); re-acquire the token after consent settles |
| Consent redirect returns `403`/`AADSTS50105` | Signing-in user cannot grant admin consent | Route to a Privileged Role Administrator or Global Administrator ([#step-3](#step-3)) |
| `402`/`403` billing error on first billable call | Consuming tenant has not activated SPE pay-as-you-go billing | Admin completes [pay-as-you-go billing setup](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta) (no Graph API — gap `activateConsumingTenantPayg`) |
| `409 Conflict` on registration | Container type already registered on the tenant | Treat as installed; proceed to [Verify](#verify) |
| `401 Unauthorized` | Token missing, expired, or wrong scope | Re-acquire a token with `FileStorageContainerTypeReg.Selected` / `FileStorageContainer.Selected` |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta) — what the customer's admin must do, including billing setup.
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) — grant users access to containers once the app is installed.

## Related

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Billing overview](/sharepoint/dev/embedded/administration/billing/billing)
- [Create a container type registration (Graph beta)](https://learn.microsoft.com/graph/api/filestorage-post-containertyperegistrations)
