---
title: SharePoint Embedded — documentation index
description: Persona-tagged index of every public SharePoint Embedded (SPE) Learn doc. Route to the right page by role, task, and outcome.
ms.topic: landing-page
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/09/2026
ms.service: sharepoint-online
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: concept
  outcome: The reader (human or agent) is routed to the smallest set of SPE pages required to accomplish their stated task, by role and outcome.
  difficulty: beginner
  roles:
    - new-user
    - app-developer
    - developer-admin
    - consuming-tenant-admin
    - compliance-officer
  prerequisites: []
  api_surface: []
  inputs:
    - name: user_intent
      type: enum
      source: user-supplied
      values: [evaluate, set-up-dev-env, build-app, build-content-experience, follow-tutorial, configure-billing, admin-consuming-tenant, govern-content]
  outputs:
    - name: target_section_id
      type: string
      verify: target section anchor resolves on this page
    - name: target_page_uri
      type: uri
      verify: returns 200 from learn.microsoft.com
  next_steps:
    - uri: /sharepoint/dev/embedded/overview
      when: user_intent == "evaluate"
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
      when: user_intent == "set-up-dev-env"
    - uri: /sharepoint/dev/embedded/development/auth
      when: user_intent == "build-app"
    - uri: /sharepoint/dev/embedded/administration/billing/billing
      when: user_intent == "configure-billing"
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
      when: user_intent == "admin-consuming-tenant"
    - uri: /sharepoint/dev/embedded/compliance/security-and-compliance
      when: user_intent == "govern-content"
  related:
    - uri: /sharepoint/dev/embedded/scenarios-and-use-cases
    - uri: /sharepoint/dev/embedded/whats-new
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded — documentation index
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

SharePoint Embedded (SPE) is a cloud-based, API-only file and document management platform built on Microsoft 365 infrastructure. Developers embed Office collaboration, Microsoft Purview compliance, and Copilot capabilities directly into their own applications while keeping documents securely within each customer's Microsoft 365 tenant.

This page is a routing index. It does not teach SPE; it points you to the smallest set of pages required to accomplish a specific task, organized by role.

> [!TIP]
> If you already know what you need: jump to the [/llms.txt](/sharepoint/dev/embedded/llms.txt) index for the machine-readable form of this page, or the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainer) for endpoints.

## When to use this page {#when-to-use}

Use this index if any of the following apply:

- You are evaluating SPE for a new application.
- You are a developer about to set up your environment for the first time.
- You are an administrator (developer admin, consuming-tenant admin, or compliance officer) and need the right starting page for your role.
- You are an AI agent routing a user request to the correct SPE doc.

## When NOT to use this page {#when-not-to-use}

- You already know which page you need. Go there directly; do not pass through here.
- You need the raw Microsoft Graph API surface. Use the [Graph API reference](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainer).
- You are an agent crawling the corpus. Use [/llms.txt](/sharepoint/dev/embedded/llms.txt) and [/api-surface.json](/sharepoint/dev/embedded/api-surface.json) instead of scraping this page.

## Section index {#section-index}

| # | Section | Role | Anchor |
|---|---|---|---|
| 1 | New to SharePoint Embedded | new-user | [#new-to-spe](#new-to-spe) |
| 2 | Developer — Set up your environment | app-developer | [#dev-setup](#dev-setup) |
| 3 | Developer — Build your app | app-developer | [#dev-build](#dev-build) |
| 4 | Developer — Content experiences | app-developer | [#dev-content-experiences](#dev-content-experiences) |
| 5 | Tutorials | app-developer | [#tutorials](#tutorials) |
| 6 | Developer Admin / ISV — Billing & tenant management | developer-admin | [#dev-admin-billing](#dev-admin-billing) |
| 7 | Consuming Tenant Admin | consuming-tenant-admin | [#consuming-tenant-admin](#consuming-tenant-admin) |
| 8 | Compliance & Security Officer | compliance-officer | [#compliance-security](#compliance-security) |

---

## 1. New to SharePoint Embedded {#new-to-spe}

**Use this section if:** you have not built on SPE before and need orientation, scenarios, or guided training.

| Page | Type | Estimated time |
|---|---|---|
| [Overview](/sharepoint/dev/embedded/overview) | concept | 10 min |
| [Scenarios and use cases](/sharepoint/dev/embedded/scenarios-and-use-cases) | concept | 10 min |
| [What's new](/sharepoint/dev/embedded/whats-new) | reference | 5 min |
| [Learning module — Overview & configuration](https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-setup) | quickstart | 45 min |
| [Learning module — Building applications](https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-create-app) | quickstart | 60 min |

**Next step:** when you finish orientation, proceed to [Developer — Set up your environment](#dev-setup).

---

## 2. Developer — Set up your environment {#dev-setup}

**Use this section if:** you are an app developer creating container types and registering your app for the first time.

| Page | Type | Estimated time |
|---|---|---|
| [VS Code extension](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode) | quickstart | 15 min |
| [Container types](/sharepoint/dev/embedded/getting-started/containertypes) | how-to | 20 min |
| [Register container type API](/sharepoint/dev/embedded/getting-started/register-api-documentation) | how-to | 15 min |
| [Application architecture](/sharepoint/dev/embedded/development/app-architecture) | concept | 15 min |

**Next step:** after environment setup, proceed to [Developer — Build your app](#dev-build).

---

## 3. Developer — Build your app {#dev-build}

**Use this section if:** you are wiring authentication, permissions, scale, or AI capabilities into a working SPE application.

| Page | Type | Estimated time |
|---|---|---|
| [Authentication and authorization](/sharepoint/dev/embedded/development/auth) | concept + how-to | 30 min |
| [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) | how-to | 20 min |
| [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling) | reference | 10 min |
| [Fluid Framework](/sharepoint/dev/embedded/development/fluid) | how-to | 25 min |
| [AI knowledge source in Microsoft Foundry](/sharepoint/dev/embedded/development/declarative-agent/sharepoint-embedded-knowledge-source) | how-to | 25 min |

> [!IMPORTANT]
> AI knowledge source in Microsoft Foundry is in **Preview**. API surface, permissions, and pricing may change before general availability.

**Next step:** for end-user-facing capabilities, proceed to [Developer — Content experiences](#dev-content-experiences).

---

## 4. Developer — Content experiences {#dev-content-experiences}

**Use this section if:** you are adding Office editing, file browsing, or search inside your application's user interface.

| Page | Type | Estimated time |
|---|---|---|
| [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience) | how-to | 20 min |
| [User experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview) | concept | 10 min |
| [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content) | how-to | 20 min |

**Next step:** for step-by-step recipes on specific scenarios, proceed to [Tutorials](#tutorials).

---

## 5. Tutorials {#tutorials}

**Use this section if:** you have a specific scenario (preview, webhook, migration, etc.) and want a step-by-step recipe.

| Page | Type | Estimated time |
|---|---|---|
| [Launch experience (Office client modes)](/sharepoint/dev/embedded/development/tutorials/launch-experience) | how-to | 20 min |
| [Using metadata on containers](/sharepoint/dev/embedded/development/tutorials/metadata) | how-to | 15 min |
| [File preview in iFrame](/sharepoint/dev/embedded/development/tutorials/using-file-preview) | how-to | 20 min |
| [Document processing with Azure AI](/sharepoint/dev/embedded/development/tutorials/doc-processing-acs) | how-to | 40 min |
| [Using webhooks](/sharepoint/dev/embedded/development/tutorials/using-webhooks) | how-to | 25 min |
| [Migrate Azure Blob Storage to SPE](/sharepoint/dev/embedded/development/tutorials/migrate-abs-to-spe) | how-to | 60 min |
| [Install app in a customer tenant](/sharepoint/dev/embedded/development/tutorials/vendor-install-app-customer) | how-to | 30 min |

---

## 6. Developer Admin / ISV — Billing & tenant management {#dev-admin-billing}

**Use this section if:** you are an ISV or developer admin configuring pay-as-you-go billing or managing your partner tenant's SPE applications.

| Page | Type | Estimated time |
|---|---|---|
| [Billing overview](/sharepoint/dev/embedded/administration/billing/billing) | concept | 10 min |
| [Billing management](/sharepoint/dev/embedded/administration/billing/billingmanagement) | how-to | 20 min |
| [Billing meters](/sharepoint/dev/embedded/administration/billing/meters) | reference | 10 min |
| [Developer admin role](/sharepoint/dev/embedded/administration/developer-admin/dev-admin) | how-to | 15 min |
| [SharePoint Embedded admin overview](/sharepoint/dev/embedded/administration/adminrole) | concept | 10 min |

---

## 7. Consuming Tenant Admin {#consuming-tenant-admin}

**Use this section if:** you are an administrator in a Microsoft 365 tenant that has installed one or more SPE-based applications.

| Page | Type | Estimated time |
|---|---|---|
| [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta) | concept | 15 min |
| [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell) | reference | 15 min |
| [Admin UX (SharePoint Admin Center)](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux) | how-to | 15 min |

---

## 8. Compliance & Security Officer {#compliance-security}

**Use this section if:** you are responsible for applying Microsoft Purview policies and governing content stored in SPE containers.

| Page | Type | Estimated time |
|---|---|---|
| [Security and compliance (Microsoft Purview)](/sharepoint/dev/embedded/compliance/security-and-compliance) | concept | 25 min |

### Reference (cross-cutting)

| Page | Type |
|---|---|
| [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/api/overview) | reference |
| [PowerShell cmdlets for SharePoint Embedded](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell) | reference |

---

## Navigation manifest (for agents) {#navigation-manifest}

The block below is the machine-readable form of this page. Agents SHOULD parse it instead of scraping the human tables above; the two are kept in sync.

```yaml
manifest_version: 1
generated: 2026-06-09
sections:
  - id: new-to-spe
    title: New to SharePoint Embedded
    role: new-user
    intent: orient
    pages:
      - { uri: /sharepoint/dev/embedded/overview, task_type: concept }
      - { uri: /sharepoint/dev/embedded/scenarios-and-use-cases, task_type: concept }
      - { uri: /sharepoint/dev/embedded/whats-new, task_type: reference }
      - { uri: /training/modules/sharepoint-embedded-setup, task_type: quickstart }
      - { uri: /training/modules/sharepoint-embedded-create-app, task_type: quickstart }
  - id: dev-setup
    title: Developer — Set up your environment
    role: app-developer
    intent: set-up-dev-env
    pages:
      - { uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode, task_type: quickstart }
      - { uri: /sharepoint/dev/embedded/getting-started/containertypes, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/getting-started/register-api-documentation, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/app-architecture, task_type: concept }
  - id: dev-build
    title: Developer — Build your app
    role: app-developer
    intent: build-app
    pages:
      - { uri: /sharepoint/dev/embedded/development/auth, task_type: concept-and-how-to }
      - { uri: /sharepoint/dev/embedded/development/sharing-and-perm, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/limits-calling, task_type: reference }
      - { uri: /sharepoint/dev/embedded/development/fluid, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/declarative-agent/sharepoint-embedded-knowledge-source, task_type: how-to, stability: preview }
  - id: dev-content-experiences
    title: Developer — Content experiences
    role: app-developer
    intent: build-content-experience
    pages:
      - { uri: /sharepoint/dev/embedded/development/content-experiences/office-experience, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/content-experiences/user-experiences-overview, task_type: concept }
      - { uri: /sharepoint/dev/embedded/development/content-experiences/search-content, task_type: how-to }
  - id: tutorials
    title: Tutorials
    role: app-developer
    intent: follow-tutorial
    pages:
      - { uri: /sharepoint/dev/embedded/development/tutorials/launch-experience, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/tutorials/metadata, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/tutorials/using-file-preview, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/tutorials/doc-processing-acs, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/tutorials/using-webhooks, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/tutorials/migrate-abs-to-spe, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/development/tutorials/vendor-install-app-customer, task_type: how-to }
  - id: dev-admin-billing
    title: Developer Admin / ISV — Billing & tenant management
    role: developer-admin
    intent: configure-billing
    pages:
      - { uri: /sharepoint/dev/embedded/administration/billing/billing, task_type: concept }
      - { uri: /sharepoint/dev/embedded/administration/billing/billingmanagement, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/administration/billing/meters, task_type: reference }
      - { uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin, task_type: how-to }
      - { uri: /sharepoint/dev/embedded/administration/adminrole, task_type: concept }
  - id: consuming-tenant-admin
    title: Consuming Tenant Admin
    role: consuming-tenant-admin
    intent: admin-consuming-tenant
    pages:
      - { uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta, task_type: concept }
      - { uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell, task_type: reference }
      - { uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux, task_type: how-to }
  - id: compliance-security
    title: Compliance & Security Officer
    role: compliance-officer
    intent: govern-content
    pages:
      - { uri: /sharepoint/dev/embedded/compliance/security-and-compliance, task_type: concept }
    reference:
      - { uri: /graph/api/overview, task_type: reference, owner: graph-docs }
      - { uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell, task_type: reference }
routing_rules:
  - if: user_intent in ["evaluate", "orient", "what-is-spe"]
    then_section: new-to-spe
  - if: user_intent in ["first-time-setup", "set-up-dev-env", "create-app-registration", "create-container-type"]
    then_section: dev-setup
  - if: user_intent in ["auth", "permissions", "scale", "fluid", "ai-knowledge-source"]
    then_section: dev-build
  - if: user_intent in ["office-editing", "file-browser", "search-ui"]
    then_section: dev-content-experiences
  - if: user_intent in ["webhook", "metadata", "file-preview", "migration", "install-tenant", "doc-processing"]
    then_section: tutorials
  - if: user_intent in ["billing", "payg", "meters", "developer-admin"]
    then_section: dev-admin-billing
  - if: user_intent in ["consuming-tenant", "tenant-admin-installed-apps", "powershell"]
    then_section: consuming-tenant-admin
  - if: user_intent in ["compliance", "purview", "ediscovery", "retention"]
    then_section: compliance-security
ambiguity_fallback: new-to-spe
```

## Related

- [/llms.txt](/sharepoint/dev/embedded/llms.txt) — corpus-wide agent index
- [/api-surface.json](/sharepoint/dev/embedded/api-surface.json) — every Microsoft Graph operation referenced by SPE docs
- [Microsoft Graph SPE API reference](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainer)

## Structured data {#structured-data}

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://learn.microsoft.com/sharepoint/dev/embedded/#index",
  "name": "SharePoint Embedded — documentation index",
  "description": "Persona-tagged index of every public SharePoint Embedded Learn doc.",
  "about": {
    "@type": "SoftwareApplication",
    "name": "Microsoft SharePoint Embedded",
    "applicationCategory": "DeveloperApplication"
  },
  "hasPart": [
    {"@type": "WebPageElement", "@id": "#new-to-spe", "name": "New to SharePoint Embedded"},
    {"@type": "WebPageElement", "@id": "#dev-setup", "name": "Developer — Set up your environment"},
    {"@type": "WebPageElement", "@id": "#dev-build", "name": "Developer — Build your app"},
    {"@type": "WebPageElement", "@id": "#dev-content-experiences", "name": "Developer — Content experiences"},
    {"@type": "WebPageElement", "@id": "#tutorials", "name": "Tutorials"},
    {"@type": "WebPageElement", "@id": "#dev-admin-billing", "name": "Developer Admin / ISV — Billing & tenant management"},
    {"@type": "WebPageElement", "@id": "#consuming-tenant-admin", "name": "Consuming Tenant Admin"},
    {"@type": "WebPageElement", "@id": "#compliance-security", "name": "Compliance & Security Officer"}
  ],
  "dateModified": "2026-06-09"
}
</script>
```
