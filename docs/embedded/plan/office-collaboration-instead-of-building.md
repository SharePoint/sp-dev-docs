---
title: Add Office co-authoring without building it
description: Add real-time Office co-authoring, AutoSave, versioning, and sharing to your app with SharePoint Embedded instead of building a collaboration engine.
ms.date: 08/13/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
---

# Add Office co-authoring without building it

**Applies to:** Developer

<!-- agent:
task_type: concept
audience: developer
outcome: The reader understands that SharePoint Embedded provides Office co-authoring, AutoSave, versioning, and sharing out of the box, and that editing launches in Office while previews can be embedded in the app.
next: ../build/open-office-files.md
-->

If your app stores files and users ask to edit documents, you don't need to build a collaboration engine. SharePoint Embedded lets your app launch Word, Excel, and PowerPoint files for real-time co-authoring, backed by the same Office service Microsoft 365 uses. This article helps you choose how to bring editing into your app and plan around where editing happens. For the problem framing, see [Add Office co-authoring](../scenarios-and-use-cases.md#scenario-add-office-co-authoring-to-your-app).

## Choose how to bring editing into your app

Pick the approach that matches how much you want to keep users inside your own UI.

| Approach | Where it renders | Use it when |
|---|---|---|
| Office launch | Office for the web (new tab) or an Office desktop client | You want full editing and co-authoring with the least work |
| Embedded preview | An iframe inside your app | You need inline, in-app viewing and don't need editing |
| Custom editor | Wherever you build it | You have a specialized editing experience Office can't provide |

Most apps combine the first two: launch Office for editing, and embed a preview for inline viewing.

## What you get without building it

Store the files in a SharePoint Embedded container and launch them in Office. Your app gets a full collaboration stack instead of a multi-month build:

- **Real-time co-authoring** in Office for the web and Office desktop clients.
- **AutoSave** for Word, Excel, and PowerPoint files.
- **Automatic version history**, so users compare and restore earlier versions.
- **Sharing** through shareable links, plus @mentions in comments for licensed users.
- **Scoped access levels**: Anyone, People in your organization, Specific people, and People with existing access.

> [!NOTE]
> SharePoint Embedded sharing doesn't send email invitations, and @mentions notify only recipients who have a Microsoft 365 license.

## Where editing happens

The Office editing surface isn't embedded in your app. Office for the web opens in a new browser tab or window, and Office desktop clients open in their own app, so users leave your app's UI to edit. Office for the web isn't iframeable today.

To keep users inside your app, embed a read-only [file preview](../build/preview-files.md), which is designed to render in an iframe. Use the Office launch patterns for editing, and use preview for inline viewing.

## If you already have a WOPI host

If you already integrate Office through a Web Application Open Platform Interface (WOPI) host, you can keep files in SharePoint Embedded and move to the built-in Office launch patterns instead of maintaining your own host. Editing still opens in Office rather than inside your app.

## Next steps

- [Open Office files from your app](../build/open-office-files.md)
- [Preview files in your app](../build/preview-files.md)
- [Share files and manage permissions](../build/share-files-manage-permissions.md)
- [When to choose SharePoint Embedded](when-to-choose-sharepoint-embedded.md)
