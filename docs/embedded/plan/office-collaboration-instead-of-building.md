---
title: Add Office Editing Without Building It
description: Add real-time Office co-authoring, AutoSave, versioning, and sharing to your app with SharePoint Embedded instead of building a collaboration engine.
ms.date: 08/13/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
---

# Add Office editing without building it

**Applies to:** Developer

<!-- agent:
task_type: concept
audience: developer
outcome: The reader understands that SharePoint Embedded provides Office co-authoring, AutoSave, versioning, and sharing out of the box, instead of building a collaboration engine.
next: ../build/open-office-files.md
-->

If your app stores files and users ask to edit documents without leaving it, you don't need to build a collaboration engine. SharePoint Embedded lets your app open Word, Excel, and PowerPoint files for real-time co-authoring, backed by the same Office service Microsoft 365 uses.

## The problem

Your app stores files, often as download links to blob storage. Users want to click a Word or Excel file and edit it together, in real time, right inside your app. Building this yourself with conflict-free replicated data types (CRDTs) takes months, and it still doesn't render native Office formats.

## Why building it yourself falls short

- **Real-time editing is hard.** Co-authoring, presence, and conflict resolution take significant engineering effort.
- **Native Office rendering is separate.** Even a working editor doesn't open `.docx`, `.xlsx`, or `.pptx` with full fidelity.
- **Versioning and recovery add more work.** AutoSave, version history, and restore each need their own design.

## Why SharePoint Embedded

Store the files in a SharePoint Embedded container and open them through Office. Your app gets a full collaboration stack without building one:

- **Real-time co-authoring** in Office for the web and Office desktop clients.
- **AutoSave** for Word, Excel, and PowerPoint files.
- **Automatic version history**, so users compare and restore earlier versions.
- **Sharing** through email invitations, shareable links, and @mentions in comments.
- **Scoped access levels**: Anyone, People in your organization, Specific people, and People with existing access.

## Next steps

- [Open Office files from your app](../build/open-office-files.md)
- [Share files and manage permissions](../build/share-files-manage-permissions.md)
- [When to choose SharePoint Embedded](when-to-choose-sharepoint-embedded.md)
