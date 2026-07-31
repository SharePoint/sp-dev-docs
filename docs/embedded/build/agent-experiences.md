---
title: Add Microsoft 365 Copilot and agent experiences
description: Ground Copilot-style agents in SharePoint Embedded content and expose SharePoint Embedded to Microsoft Foundry.
ms.date: 07/21/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Add Microsoft 365 Copilot and agent experiences

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Configure Foundry knowledge sources over SharePoint Embedded containers.
next: migrate-azure-blob-storage.md
-->

SharePoint Embedded agent experiences let your app answer questions over files stored in SharePoint Embedded containers. The recommended path is to use **Microsoft Foundry Agent Service** with a **SharePoint knowledge source** configured for SharePoint Embedded. For setup steps, see [Set up SharePoint Embedded as a Foundry knowledge source](sharepoint-embedded-knowledge-source.md).

> [!CAUTION]
> The earlier **SharePoint Embedded agent software development kit (SDK)** (the React `ChatEmbedded` control) is deprecated. For new work, use [Microsoft Foundry Agent Service](/azure/foundry/agents/overview) with a [SharePoint knowledge source (preview)](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote) configured for SharePoint Embedded.

## Test user experience

Sign in with a user who has a Microsoft 365 Copilot license when required. Upload supported files to a container, wait for indexing, open the chat, and ask questions the file content can answer. If answers omit expected files, check:

- Confirm the files are discoverable.
- Confirm the files use supported file formats.
- Confirm the app has access to the container.
- Confirm the signed-in user has access to the files.
- Confirm the chat experience is scoped to the expected containers.
- Allow time for indexing to complete.

## Next steps

- [Set up SharePoint Embedded as a Foundry knowledge source](sharepoint-embedded-knowledge-source.md)
