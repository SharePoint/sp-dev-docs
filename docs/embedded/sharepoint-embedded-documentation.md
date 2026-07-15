---
title: SharePoint Embedded documentation
description: Task-based index for SharePoint Embedded. Find the right page by what you're trying to do, whether you build apps or administer them.
ms.date: 07/13/2026
ms.reviewer: dilucesr
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# SharePoint Embedded documentation

**Applies to:** All

SharePoint Embedded is a cloud-based, API-only file and document management platform built on Microsoft 365. Developers embed Office collaboration, Microsoft Purview compliance, and Copilot into their own apps — while documents stay inside each customer's Microsoft 365 tenant.

This page is organized by **task**. Find what you're trying to do and go straight to the page that does it. A machine-readable index is available in this folder as `llms.txt`.

> [!TIP]
> New here? Read [What is SharePoint Embedded?](./overview.md) first, then come back to pick a task.

<!-- agent:
task_type: concept
audience: all
outcome: The reader is routed to the single best page for their task, by build vs administer intent.
next: overview.md
-->

## Two roads

Almost everyone is one of two people. Architects, IT decision makers, billing admins, and compliance admins each merge onto one of these:

| You are… | You want to… | Start at |
|---|---|---|
| Developer / architect | Build and ship an app | [Build an app](#build-an-app) |
| ISV / developer | Onboard customers and bill | [Publish and onboard customers](#publish-and-onboard-customers) |
| SharePoint Embedded admin | Install and manage apps | [Install and manage apps](#install-and-manage-apps) |
| Compliance admin | Govern and secure content | [Apply security and compliance controls](./admin/apply-security-compliance-controls.md) |
| Evaluating / planning | Decide and design | [Plan a solution](#plan-a-solution) |

## Plan a solution

Decide how SharePoint Embedded fits before you write code.

- [Understand app and tenant architecture](./plan/app-tenant-architecture.md)
- [Choose an app model: single-tenant or multitenant](./plan/choose-app-model.md)
- [Understand container types and containers](./plan/container-types-containers.md)
- [Choose a billing model](./plan/choose-billing-model.md)
- [Plan authentication and permissions](./plan/authentication-permissions.md)
- [Plan security, compliance, and governance](./plan/security-compliance-governance.md)
- [Understand limits and calling patterns](./plan/limits-calling-patterns.md)

## Build an app

An ordered journey from first container to a full-featured app.

1. [Quickstart: build your first app with VS Code](./build/quickstart-vscode.md)
2. [Create and configure a container type](./build/create-container-type.md)
3. [Register application permissions](./build/register-application-permissions.md)
4. [Configure authentication and authorization](./build/configure-authentication-authorization.md)
5. [Create and manage containers](./build/create-manage-containers.md)
6. [Upload, download, and manage files](./build/manage-files.md)
7. [Open Office files from your app](./build/open-office-files.md)
8. [Preview files in your app](./build/preview-files.md)
9. [Search containers and files](./build/search-containers-files.md)
10. [Store and query container metadata](./build/container-metadata.md)
11. [Share files and manage permissions](./build/share-files-manage-permissions.md)
12. [Respond to file and container changes with webhooks](./build/respond-to-changes-webhooks.md)
13. [Archive and restore containers](./build/archive-restore-containers.md)
14. [Add real-time collaboration with Fluid Framework](./build/fluid-framework.md)
15. [Add Microsoft 365 Copilot and agent experiences](./build/agent-experiences.md)
16. [Set up SharePoint Embedded as a Foundry knowledge source](./build/sharepoint-embedded-knowledge-source.md)
17. [Migrate from Azure Blob Storage](./build/migrate-azure-blob-storage.md)

## Publish and onboard customers

For ISVs shipping a multitenant app.

- [Prepare your app for customer installation](./publish/prepare-customer-installation.md)
- [Choose a billing model for your app](./publish/choose-app-billing-model.md)
- [Guide customers through tenant setup](./publish/customer-tenant-setup-guide.md)
- [Validate customer app installation](./publish/validate-customer-installation.md)

## Install and manage apps

For administrators of a Microsoft 365 tenant that uses SharePoint Embedded apps.

- [Admin overview](./admin/admin-overview.md)
- [Create apps in SharePoint admin center](./admin/create-apps-sharepoint-admin-center.md)
- [Create apps with PowerShell](./admin/create-apps-powershell.md)
- [Install a SharePoint Embedded app](./admin/install-sharepoint-embedded-app.md)
- [Grant admin consent and permissions](./admin/grant-admin-consent-permissions.md)
- [Set up billing in Microsoft 365 admin center](./admin/setup-billing-microsoft-365-admin-center.md)
- [Manage containers in SharePoint admin center](./admin/manage-containers-sharepoint-admin-center.md)
- [Manage containers with PowerShell](./admin/manage-containers-powershell.md)
- [Monitor usage, billing, and cost](./admin/monitor-usage-billing-cost.md)
- [Review audit events](./admin/review-audit-events.md)
- [Apply security and compliance controls](./admin/apply-security-compliance-controls.md)

## Reference

- [Billing meters](./reference/billing-meters.md)
- [Audit events](./reference/audit-events.md)
- [PowerShell reference](./reference/powershell.md)
- [Microsoft Graph API reference links](./reference/graph-api-links.md)
- [Troubleshooting](./reference/troubleshooting.md)
- [Glossary](./reference/glossary.md)
- `llms.txt` — machine-readable corpus index for coding agents

## More

- [Scenarios and use cases](./scenarios-and-use-cases.md)
- [What's new](./whats-new.md)
- [Microsoft Graph SharePoint Embedded API reference](/graph/api/resources/filestoragecontainer)
