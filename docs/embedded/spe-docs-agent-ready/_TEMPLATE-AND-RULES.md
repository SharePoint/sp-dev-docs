# Agent-Ready Page Template & Rules (authoring spec for the revamped SPE docs)

> Every `.md` file under `revamped-docs/` MUST follow this spec. It operationalizes
> `spe-agent-ready-standards.md` (v0.1) and the per-page requirements in
> `spe-per-document-changes.md`. Use real Graph endpoints from `api-surface.json`.
> These are PROPOSED drop-in replacements for `sp-dev-docs/docs/embedded/**`.

## 0. Status banner (top of every page body, after frontmatter)
Add this HTML comment as the first line of the body:
`<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->`

## 1. Frontmatter (every page)
Preserve realistic Learn frontmatter, then add the `agent:` block.

```yaml
---
title: <Sentence case, outcome-oriented>
description: <one sentence, <=160 chars>
ms.topic: <article | how-to | quickstart | reference | concept-article>
ms.service: sharepoint-online
ms.author: vesaj
author: VesaJuvonen
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: <concept | quickstart | how-to | reference>
  outcome: <one observable post-condition, third person>   # how-to/quickstart only
  estimated_minutes: <int>                                  # how-to/quickstart only
  difficulty: <beginner | intermediate | advanced>
  roles: [<app-developer | enterprise-developer | consuming-admin | owning-admin | m365-admin | compliance-officer | end-user | migration-engineer>]
  prerequisites:
    - uri: /sharepoint/dev/embedded/<path>
      kind: <concept | how-to>
    - capability: <entra-app-admin | spe-admin | global-admin | m365-subscription | azure-subscription | container-type-owner | payg-billing-configured>
  api_surface:                  # every endpoint this page tells the reader to call; omit if none
    - id: <id from api-surface.json>
      method: POST
      path: /storage/fileStorage/containers
      permissions: [FileStorageContainer.Selected]
  inputs:                       # every {placeholder} used in code; omit if none
    - name: container-id
      type: uuid
      source: <prior-step | user-supplied | app-registration | entra-portal | generated>
  outputs:                      # observable success criteria; omit if none
    - name: container-id
      type: uuid
      verify: GET /storage/fileStorage/containers/{container-id} returns 200
  next_steps:
    - uri: /sharepoint/dev/embedded/<path>
      when: <always | multi-tenant-app | needs-search | migrating-from-azure-blob>
  related:
    - uri: /sharepoint/dev/embedded/<path>
  stability: <ga | beta | preview | deprecated>
  last_validated: proposed      # literal string "proposed" until an end-to-end harness run stamps a date
---
```

## 2. Body templates by task_type

### how-to / quickstart (REQUIRED section order)
```
# {Title}
<!-- PROPOSED ... -->

{One short paragraph: what the reader will have at the end. No marketing.}

## Prerequisites
- [<page>](/sharepoint/dev/embedded/<path>) — <why>
- Capability: <capability> (e.g., an Entra app with Application Administrator role)

## Inputs
| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-id}` | uuid | A prior step / user-supplied |

## Steps

### Step 1 — {Imperative verb phrase, one outcome} {#step-1}
{One sentence of why, then the action.}

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers
Authorization: Bearer {token}
Content-Type: application/json

{ "displayName": "{display-name}", "containerTypeId": "{container-type-id}" }
```

**Expected response:** `201 Created` with a `fileStorageContainer` whose `status` is `inactive`.

**On failure:**
- `403 Forbidden` (`accessDenied`) → admin consent not granted. See [Grant ... permissions](...).
- `400 Bad Request` → `containerTypeId` not registered on this tenant.

### Step 2 — ... {#step-2}
...

## Verify
```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}
```
Returns `200 OK` with `status` equal to `active`.

## Troubleshooting
| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with the permission in **Inputs** |
| `403 Forbidden` | Admin consent not granted | Grant consent, then re-acquire the token |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps
- [<page>](/sharepoint/dev/embedded/<path>)

## Related
- [<page>](/sharepoint/dev/embedded/<path>)
```

### concept (REQUIRED section order)
```
# {Title}
<!-- PROPOSED ... -->

## What it is
## Why it matters / when to use
## When NOT to use
## Key terms
## How it fits together   (owning vs consuming tenant, content vs control plane, where relevant)
## Related
```
Concept pages MUST NOT contain imperative steps or API call instructions — link to the how-to instead.

### reference (REQUIRED section order)
```
# {Title}
<!-- PROPOSED ... -->

## <Schema / table of values / limits / cmdlets>   (structured tables only)
## Examples
## See also
```

## 3. Hard rules (enforced; CI would block on these)
- Every fenced code block declares a language: `http`, `bash`, `pwsh`, `json`, `yaml`, `csharp`, `typescript`, `python`. No bare ```` ``` ````.
- Every `{placeholder}` in a code block is kebab-case and declared in `agent.inputs`. Never `{your-client-id}`, never `<your value here>`.
- Every how-to/quickstart step ends in a real call (```http``` / ```bash``` / ```pwsh```) or a `manual:` block; declares an expected status; and lists ≥1 named failure mode.
- A portal/PowerShell-only action uses a `manual:` block carrying `ui_path` + `api_equivalent` (or `api_equivalent: none — see api-surface.json gap <id>` if no API exists) + a `verify`.
- Callouts use `> [!NOTE]` / `> [!IMPORTANT]` / `> [!WARNING]`. No bare **Note:** lines.
- BANNED in step bodies (outside `manual:`): "click", "tap", "press", "navigate to" (without a URL), "see the screenshot", "as shown above/below", "simply", "just", "easily", "should be familiar with", "in a previous step" (use `{#step-n}` anchors).
- Section anchors are stable: `{#step-1}`, `{#verify}`, `{#troubleshooting}`.
- Permission GUIDs / endpoint metadata go in JSON or tables, never prose bullets.
- For any endpoint, pull method/path/permissions/stability from `api-surface.json`. If it's `beta`, say so and mark `stability: beta`. If it's a `gaps[]` entry, document the manual path AND reference the gap id.

## 4. `manual:` block shape (for unavoidable portal/PowerShell steps)
```yaml
manual:
  description: Activate pay-as-you-go billing for SharePoint Embedded.
  ui_path: Microsoft 365 admin center → Setup → Pay-as-you-go services → SharePoint Embedded
  api_equivalent: none — no Graph API today; see api-surface.json gap "activateConsumingTenantPayg"
  verify:
    method: GET
    path: /storage/fileStorage/containerTypes/{container-type-id}
```

## 5. File naming & placement
- Use the path given in your assignment, under `revamped-docs/`, mirroring Learn folders.
- One outcome per file. Split pages get separate files as named.
- Lowercase kebab-case filenames.

## 6. Tone
Second-person imperative for steps; third-person declarative for concepts. Present tense. Quantify or omit ("up to 25 container types per tenant", not "many").
```
