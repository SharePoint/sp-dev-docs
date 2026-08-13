---
title: Ground AI on Enterprise Content Without an External Vector Database
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

If you build an AI agent over enterprise documents, you don't have to copy that content into an external vector database. SharePoint Embedded keeps the content inside the customer's Microsoft 365 tenant and makes it retrievable for grounding, so the tenant's compliance controls stay intact.

## The problem

You build an "ask the knowledge base" agent over thousands of internal documents. You want to consolidate them, make them searchable, and use them to ground a large language model (LLM). But security teams reject copying content into an external vector database, and the content must keep its retention and eDiscovery controls.

## Why an external vector database falls short

- **It moves data out of the tenant.** Copying documents into a third-party store breaks the compliance boundary.
- **You rebuild compliance.** Retention, eDiscovery, and data loss prevention (DLP) don't follow the copy.
- **You maintain a pipeline.** Sync, re-indexing, and access trimming become your ongoing responsibility.

## Why SharePoint Embedded

Store the documents in SharePoint Embedded containers and ground your agent on them in place:

- **Content stays in the customer's Microsoft 365 tenant**, inside the compliance boundary.
- **Content discoverability is a container-type setting.** You control whether Microsoft 365 Copilot can surface content from a container type.
- **Retrieve with the Microsoft Search API**, scoped by `ContainerTypeId`, or with a Microsoft Foundry SharePoint knowledge source.
- **Microsoft Purview applies.** DLP, retention, and eDiscovery follow the content.
- **Nothing is auto-exposed.** SharePoint Embedded content isn't available to Copilot until you enable discoverability.

## Next steps

- [Set up SharePoint Embedded as a Foundry knowledge source](../build/sharepoint-embedded-knowledge-source.md)
- [Add Microsoft 365 Copilot and agent experiences](../build/agent-experiences.md)
- [Search containers and files](../build/search-containers-files.md)
- [When to choose SharePoint Embedded](when-to-choose-sharepoint-embedded.md)
