---
title: Add Microsoft 365 Copilot and agent experiences
description: Ground Copilot-style agents in SharePoint Embedded content and expose SharePoint Embedded to Microsoft Foundry.
ms.date: 07/10/2026
ms.reviewer: pemtaira
ms.localizationpriority: high
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
> The earlier **SharePoint Embedded agent SDK** (the React `ChatEmbedded` control) was **deprecated in March 2026** and replaced by [Microsoft Foundry Agent Service](/azure/foundry/agents/overview) with a [SharePoint knowledge source (preview)](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote) configured for SharePoint Embedded. Use the Foundry knowledge source for new work.

## Test user experience
Sign in with a user who has a Microsoft 365 Copilot license when required. Upload supported files to a container, wait for indexing, open the chat, and ask questions the file content can answer. If answers omit expected files, check discoverability, supported file formats, app access, user access, scope selection, and indexing delay.

## Next steps

- [Set up SharePoint Embedded as a Foundry knowledge source](sharepoint-embedded-knowledge-source.md)
