# SharePoint Embedded — agent-ready documentation set

This folder is a **proposed, drop-in agent-ready revamp** of the public SharePoint Embedded (SPE)
documentation under `learn.microsoft.com/sharepoint/dev/embedded/**`. Every page is rewritten so an
AI agent (Claude Code, ChatGPT, Copilot, Cursor, etc.) can read it and execute the next step without
human-only affordances (no "click here", no screenshots, no buried GUIDs).

It is structured to be uploaded as a single folder into a GitHub docs repo (e.g. `sp-dev-docs`),
mirroring the live Learn folder layout.

## What governs these pages

| File | Role |
|---|---|
| `index.md` | Persona-tagged routing landing page + machine-readable navigation manifest. The canonical **structure** model. |
| `_TEMPLATE-AND-RULES.md` | Per-page authoring spec (frontmatter shape, body templates by `task_type`, hard rules). |
| `api-surface.json` | Every Microsoft Graph operation referenced by SPE docs (method, path, permissions, stability) + known API gaps. |
| `toc.yml` | Table of contents for the set. |

Each page carries an `agent:` frontmatter block, a `<!-- PROPOSED ... -->` status banner, stable
section anchors, typed inputs/outputs, explicit failure modes, Verify and Troubleshooting sections,
and `manual:` blocks for any unavoidable portal/PowerShell step.

## Page inventory

Pages mirror the live Learn paths called out in the `index.md` navigation manifest:

- `overview.md`, `scenarios-and-use-cases.md`, `whats-new.md`
- `getting-started/` — `spembedded-for-vscode`, `containertypes`, `register-api-documentation`
- `development/` — `app-architecture`, `auth`, `sharing-and-perm`, `limits-calling`, `fluid`
- `development/declarative-agent/` — `sharepoint-embedded-knowledge-source`
- `development/content-experiences/` — `office-experience`, `user-experiences-overview`, `search-content`
- `development/tutorials/` — `launch-experience`, `metadata`, `using-file-preview`, `doc-processing-acs`, `using-webhooks`, `migrate-abs-to-spe`, `vendor-install-app-customer`
- `administration/billing/` — `billing`, `billingmanagement`, `meters`
- `administration/developer-admin/` — `dev-admin`
- `administration/` — `adminrole`
- `administration/consuming-tenant-admin/` — `cta`, `ctapowershell`, `ctaux`
- `compliance/` — `security-and-compliance`

## Status

All pages are marked `last_validated: proposed`. Validate every endpoint against `api-surface.json`
and run an end-to-end harness before publishing.

Author: Shreyas Saravanan
