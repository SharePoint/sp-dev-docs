---
title: Content experiences overview for SharePoint Embedded
description: The user-experience capabilities SharePoint Embedded gives your app — Office editing, preview, download, search, discoverability, archive, and recycle bin.
ms.topic: concept-article
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: concept
  difficulty: beginner
  roles: [app-developer, end-user]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
      when: always
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
      when: needs-search
    - uri: /sharepoint/dev/embedded/development/tutorials/using-file-preview
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
    - uri: /sharepoint/dev/embedded/development/tutorials/launch-experience
    - uri: /sharepoint/dev/embedded/development/tutorials/using-file-preview
    - uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin
  stability: ga
  last_validated: proposed
---

# Content experiences overview for SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

SharePoint Embedded provides a set of user-experience capabilities you compose into your application: opening and editing Office files, file preview, file download, in-app search, content discoverability control in Microsoft 365, container archiving, and a recycle bin. Each capability is reached either by directing the user to a `driveItem` web URL (Office, preview) or by a Microsoft Graph call (download, search, archive, recycle bin), so you assemble the right end-user surface without rebuilding storage, collaboration, or compliance.

| Capability | What it gives the user | Reached via |
|---|---|---|
| Open & edit using Office | View, edit, and co-author Word, Excel, and PowerPoint files in Office for the web or the desktop app | `driveItem.webUrl` + launch parameters |
| Preview content | File preview for many file types, embedded in an iFrame or a new page | SharePoint Embedded player plugin |
| Download | A short-lived, pre-authenticated URL to download a file | [Download driveItem](/graph/api/driveitem-get-content) |
| Search | Query containers and content scoped by container type and file type | [Microsoft Search API](/microsoftsearch/overview-microsoft-search) |
| Content discovery in Microsoft 365 | Opt content in or out of office.com, OneDrive.com, intelligent file discovery, and Copilot grounding | `Set-SPOContainerTypeConfiguration` cmdlet |
| Archived containers | Move container data to a cold storage tier to cut storage cost | Microsoft Graph |
| Recycle bin | Restore or permanently delete deleted items within 93 days | Microsoft Graph |

## Why it matters / when to use

Use these content experiences when your application needs first-class document behavior — co-authoring, versioning, previews, search, and Purview-backed governance — without building a file UI from scratch. Office editing and preview are client experiences you reach through item URLs; download, search, archive, and recycle bin are Graph operations you call from your back end. Together they cover the common file-management surface end users expect.

For the step-by-step "open and edit" recipe, see [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience). To launch Office in a specific mode (view or edit), see [Set up the launch experience](/sharepoint/dev/embedded/development/tutorials/launch-experience). To embed previews, see [File preview](/sharepoint/dev/embedded/development/tutorials/using-file-preview). To search, see [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content).

> [!NOTE]
> A direct link to a file lacks authorization from your application. If used directly in a browser, a raw file URL yields access denied. Use the [Download driveItem](/graph/api/driveitem-get-content) API to generate a short-lived, pre-authenticated download URL, or share the item's `webUrl`.

## When NOT to use

- When content must remain invisible to Microsoft 365 surfaces and to Copilot grounding — leave discoverability at its default (disabled); do not opt in with `Set-SPOContainerTypeConfiguration`.
- When you need raw blob download semantics with no document model (no preview, co-authoring, or Purview) — SharePoint Embedded content experiences are not the fit; use Azure Blob Storage.
- When a container is archived — its data is in cold storage and cannot be opened, previewed, searched, or downloaded until reactivated.

## Key terms

| Term | Meaning |
|---|---|
| Content discoverability | Whether SharePoint Embedded content appears in Microsoft 365 surfaces (office.com, OneDrive.com, intelligent file discovery) and is available for Copilot for Microsoft 365 grounding. **Disabled by default.** |
| `includeHiddenContent` | Search request parameter your app must set when the container type opted out of Microsoft 365 discoverability, so search returns the hidden content. |
| Archived container | A container whose data is moved to the cold storage tier to reduce cost; inaccessible until reactivated; deletable without reactivation. |
| Recycle bin | The per-container holding area for deleted items, retained 93 days, after which items are permanently and irreversibly deleted. |
| Player plugin | The SharePoint Embedded file-preview component embedded in an iFrame or opened in a new page. |

## How it fits together

Content discoverability is a **control-plane** decision made on the container type. By default, SharePoint Embedded application content is hidden across Microsoft 365 — office.com, OneDrive.com, other intelligent file-discovery features — and is excluded from Copilot for Microsoft 365 grounding. To opt in, the developer admin changes the setting at (or after) container type creation with the `Set-SPOContainerTypeConfiguration` cmdlet (`-discoverabilityDisabled $False`). If you modify the setting after content already exists, changes can take up to 30 days to reach full consistency across all consuming tenants. To enable the Office.com sharing dialog for your content, add the required application permissions during container type registration.

The other experiences operate on the **content plane**: Office editing and preview act on individual `driveItem` resources via their URLs; download, search, archive, and recycle bin are Graph operations against the container's drive and items. Search runs in the context of the signed-in user and enforces that user's access — always scope queries by `ContainerTypeId` so results stay within your application's content. See [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content).

## Related

- [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience)
- [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content)
- [Set up the launch experience](/sharepoint/dev/embedded/development/tutorials/launch-experience)
- [File preview in an iFrame](/sharepoint/dev/embedded/development/tutorials/using-file-preview)
- [Developer admin — container type configuration](/sharepoint/dev/embedded/administration/developer-admin/dev-admin)
- [Download a driveItem (Microsoft Graph)](/graph/api/driveitem-get-content)
