---
title: Ground AI on enterprise content without an external vector database
description: Ground an AI agent on enterprise documents while keeping content in the Microsoft 365 tenant, using SharePoint Embedded instead of an external vector database.
ms.date: 08/13/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
---

# Ground AI on enterprise content without an external vector database

**Applies to:** Developer

<!-- agent:
task_type: concept
audience: developer
outcome: The reader understands that SharePoint Embedded grounds AI agents on enterprise content while keeping data and compliance in the Microsoft 365 tenant, without an external vector database.
next: ../build/sharepoint-embedded-knowledge-source.md
-->

If you build an AI agent over enterprise documents, you don't have to copy that content into an external vector database. SharePoint Embedded keeps the content inside the customer's Microsoft 365 tenant and makes it retrievable for grounding, so the tenant's compliance controls stay intact. This article helps you choose a retrieval path and understand the governance that gates it. For the problem framing, see [Ground an AI agent on enterprise content](../scenarios-and-use-cases.md#scenario-ground-an-ai-agent-on-enterprise-content).

## Choose a retrieval path

SharePoint Embedded content can ground AI through more than one path. Pick the one that matches how your agent retrieves content.

| Path | Use it when | Learn more |
|---|---|---|
| Microsoft Search API | Your app runs its own retrieval and ranks results itself. Search is lexical (keyword), not semantic, so add your own embeddings if you need vector ranking. | [Search containers and files](../build/search-containers-files.md) |
| Microsoft Foundry knowledge source | You build an agent in Microsoft Foundry and want managed, semantic grounding | [Set up a Foundry knowledge source](../build/sharepoint-embedded-knowledge-source.md) |
| Microsoft 365 Copilot | You want content to surface in Copilot experiences | [Add Copilot and agent experiences](../build/agent-experiences.md) |

Retrieval through every path is scoped to your app's content, so an agent never reaches beyond the containers your app controls.

## Governance that gates grounding

Grounding stays inside the tenant's compliance boundary, and nothing is exposed automatically:

- **Content stays in the customer's Microsoft 365 tenant**, inside the compliance boundary.
- **Content discoverability is a setting on the [container type](container-types-containers.md)** — the template that defines your app's containers — that governs whether Microsoft 365 Copilot can surface the content. Tenant governance controls this setting, so an app can't expose content by changing its own configuration.
- **Retrieve content with the Microsoft Search API**, scoped by the container type ID (`ContainerTypeId`), or with a Microsoft Foundry knowledge source.
- **Microsoft Purview applies.** DLP, retention, and eDiscovery follow the content.
- **Nothing is auto-exposed.** SharePoint Embedded content isn't available to Copilot until discoverability is enabled on the container type.

## Next steps

- [Set up SharePoint Embedded as a Foundry knowledge source](../build/sharepoint-embedded-knowledge-source.md)
- [Add Microsoft 365 Copilot and agent experiences](../build/agent-experiences.md)
- [Search containers and files](../build/search-containers-files.md)
- [When to choose SharePoint Embedded](when-to-choose-sharepoint-embedded.md)
