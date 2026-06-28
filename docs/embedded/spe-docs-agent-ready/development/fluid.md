<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->
---
title: Run a Fluid Framework app on SharePoint Embedded
description: Gather your client ID and container type ID, configure the Item Counter sample, and run a real-time collaborative Fluid app on SPE.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: The Item Counter Fluid sample runs locally against your SPE app and syncs state in real time across two signed-in clients on the tenant.
  estimated_minutes: 25
  difficulty: intermediate
  roles: [app-developer, enterprise-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: how-to
    - capability: m365-subscription
    - capability: entra-app-admin
  api_surface: []
  inputs:
    - name: spe-client-id
      type: uuid
      source: app-registration
    - name: spe-container-type-id
      type: uuid
      source: prior-step
  outputs:
    - name: running-fluid-app
      type: string
      verify: https://localhost:8080 loads, signs in, and syncs the Item Counter value across two clients
  next_steps:
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
      when: always
    - uri: /sharepoint/dev/embedded/development/limits-calling
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/overview
  stability: ga
  last_validated: proposed
---

# Run a Fluid Framework app on SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end of this how-to, the Microsoft **Item Counter** Fluid sample runs locally against your SharePoint Embedded (SPE) application and syncs its counter value in real time across two clients signed in to the same tenant. [Fluid Framework](https://fluidframework.com/) is a set of client libraries for distributing, synchronizing, and saving shared data so multiple clients can operate on the same data structures in real time.

## Prerequisites

- [VS Code extension for SharePoint Embedded](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode) — create an SPE application and a trial container type.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — the app must be registered in [Microsoft Entra ID](https://entra.microsoft.com/) with admin consent.
- Capability: administrative credentials for a Microsoft 365 tenant.
- Capability: at least one container created of the same container type linked to your SPE application.
- Capability: Node.js and `npm`, and `git` installed locally.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{spe-client-id}` | uuid | The application (client) ID. From the Microsoft Entra admin center under **Identity > Applications > App registrations**, or the exported Postman environment from the VS Code extension. |
| `{spe-container-type-id}` | uuid | The container type ID. From the exported Postman environment, or the `Get-SPOContainerType` PowerShell cmdlet. |

## Steps

### Step 1 — Get your client ID and container type ID {#step-1}

The `{spe-client-id}` is required to acquire correct access tokens; the `{spe-container-type-id}` is required to reach containers of your app. Retrieve the container type ID with PowerShell.

```pwsh
Get-SPOContainerType
```

**Expected response:** the cmdlet lists your container types, including the `ContainerTypeId` value for `{spe-container-type-id}`.

**On failure:**
- Cmdlet not found → install the SharePoint Online Management Shell.
- Empty result → no container type exists yet. Create one with the [VS Code extension](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode).

> [!NOTE]
> If you used the [VS Code extension](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode), export the Postman environment to read both `{spe-container-type-id}` and `{spe-client-id}` in one place. The `{spe-client-id}` is also visible in the Microsoft Entra admin center under **Identity > Applications > App registrations > All applications**.

### Step 2 — Clone the Fluid Examples repository {#step-2}

Get the sample source, which includes the Item Counter app wired for SPE.

```bash
git clone https://github.com/microsoft/FluidExamples.git
```

**Expected response:** the repository clones and a `FluidExamples` directory is created.

**On failure:**
- `git: command not found` → install Git.
- Network/proxy error → configure `git` to use your proxy, then retry.

### Step 3 — Move into the Item Counter directory {#step-3}

The SPE-specific sample lives in `item-counter-spe`.

```bash
cd FluidExamples/item-counter-spe
```

**Expected response:** the working directory changes to `item-counter-spe`.

**On failure:**
- `No such file or directory` → the clone in [Step 2](#step-2) did not complete. Re-clone.

### Step 4 — Create the `.env` file with your IDs {#step-4}

The app reads its client ID and container type ID from environment variables. Create an `.env` file with the two values, no spaces.

```bash
cat > .env <<'EOF'
SPE_CLIENT_ID={spe-client-id}
SPE_CONTAINER_TYPE_ID={spe-container-type-id}
EOF
```

**Expected response:** an `.env` file exists in `item-counter-spe` with both variables set.

**On failure:**
- App later reports a missing variable → a key name is misspelled. Use exactly `SPE_CLIENT_ID` and `SPE_CONTAINER_TYPE_ID`.

### Step 5 — Install dependencies {#step-5}

Install the sample's Node.js packages.

```bash
npm install
```

**Expected response:** `npm` completes with `node_modules` populated and a non-zero number of packages added.

**On failure:**
- Peer-dependency or engine errors → confirm a supported Node.js version is active, then retry.

### Step 6 — Start the development server {#step-6}

Build and serve the app locally with Webpack.

```bash
npm run dev
```

**Expected response:** Webpack finishes compiling and serves the app at `https://localhost:8080`.

**On failure:**
- Port in use → stop the process on port 8080 or change the configured port, then re-run.
- Build error referencing env vars → the `.env` from [Step 4](#step-4) is missing or malformed.

### Step 7 — Sign in and grant admin consent {#step-7}

The app authenticates against your tenant and requests consent on first run. This is a browser interaction.

```yaml
manual:
  description: Open the running app, sign in with tenant admin credentials, and grant admin consent in the pop-up.
  ui_path: Browser → https://localhost:8080 → sign in (admin credentials) → Grant admin consent in the pop-up window
  api_equivalent: Admin consent can be assigned via POST /servicePrincipals/{service-principal-id}/appRoleAssignedTo — see /sharepoint/dev/embedded/development/auth#step-5
  verify:
    description: The Item Counter UI loads after consent without an access-denied error.
```

**Expected response:** after consent, the Item Counter UI loads at `https://localhost:8080`.

**On failure:**
- Access-denied after sign-in → admin consent was declined or the signing-in account is not an admin. See [Grant admin consent](/sharepoint/dev/embedded/development/auth#step-5).
- No container available → create a container of the same container type first.

## Verify {#verify}

Confirm real-time sync across two clients on the same tenant.

```yaml
manual:
  description: Copy the full app URL to a second browser (or send it to another user on the same tenant), sign in, and change the counter.
  ui_path: Copy https://localhost:8080 URL → open in a second browser/tab → sign in (same tenant) → increment the counter
  verify:
    description: The Item Counter value updates live in both browsers, confirming Fluid is syncing state between clients.
```

The counter changes appear in both clients simultaneously.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| App fails to start with an env error | `.env` missing or misspelled keys | Recreate `.env` per [Step 4](#step-4) with exact key names. |
| Sign-in succeeds but content is access-denied | Admin consent not granted, or app not registered/consented | Complete [Step 7](#step-7); see [Authentication and authorization](/sharepoint/dev/embedded/development/auth). |
| No container found at runtime | No container of the app's container type exists | Create a container first. See [Container types](/sharepoint/dev/embedded/getting-started/containertypes). |
| Changes do not sync between clients | Second client is on a different tenant | Use credentials on the **same** tenant for both clients. |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling). |

## Next steps

- [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)

## Related

- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [VS Code extension for SharePoint Embedded](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode)
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview)
- [Fluid Examples — Item Counter (GitHub)](https://github.com/microsoft/FluidExamples/tree/main/item-counter-spe)
