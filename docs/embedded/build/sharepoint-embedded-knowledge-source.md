---
title: Set up SharePoint Embedded as a Foundry knowledge source
description: Configure Microsoft Foundry Agent Service to use SharePoint Embedded content as a SharePoint knowledge source.
ms.date: 07/13/2026
ms.reviewer: dilucesr
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Set up SharePoint Embedded as a Foundry knowledge source

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Configure Microsoft Foundry Agent Service to retrieve SharePoint Embedded content through a SharePoint knowledge source.
next: migrate-azure-blob-storage.md
-->

Use Microsoft Foundry Agent Service with a SharePoint knowledge source when your app needs a grounded agent experience over files stored in SharePoint Embedded containers.

For SharePoint Embedded container types, the knowledge source grounds answers through the generally available [Microsoft 365 Copilot Retrieval API](/microsoft-365/copilot/extensibility/api/ai-services/retrieval/copilotroot-retrieval). Foundry runs the retrieval calls as part of the agent, so the same prerequisites, indexing behavior, and billing apply. The `sharePointEmbedded` data source that Foundry uses is in preview. To run your own grounding step instead, call the Retrieval API directly, as described in [Use the Retrieval API](agent-experiences.md#use-the-retrieval-api).

> [!NOTE]
> SharePoint knowledge sources for SharePoint Embedded are in preview.

## Prerequisites

Before you start, verify that you have:

- A SharePoint Embedded app with at least one container.
- The container type ID for the SharePoint Embedded app.
- A Microsoft Foundry Agent Service project.
- Pay-as-you-go billing configured for the container type.
- At least one user in the tenant with a Microsoft 365 Copilot license, so the semantic index initializes. For more information, see [Semantic index for Microsoft 365 Copilot](/microsoftsearch/semantic-index-for-copilot).
- Permission to update the container type registration in each consuming tenant where the agent must access content.

Users who query the agent don't each need a Microsoft 365 Copilot license. Usage bills on the Copilot Studio message meter, and charges follow the billing model configured for the container type. For more information, see [Billing meters](../reference/billing-meters.md).

## Configure the SharePoint knowledge source

Configure the Foundry SharePoint knowledge source with `remoteSharePointParameters.containerTypeId` set to your SharePoint Embedded container type ID.

For source-specific configuration details, see [SharePoint knowledge source properties](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote#source-specific-properties).

## Grant Foundry access to the container type

Grant Microsoft Foundry read access to your container type in each consuming tenant. The Foundry application ID is `880da380-985e-4198-81b9-e05b1cc53158`.

The container type's owning application must call the registration API in the consuming tenant.

```http
PUT /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeId}/applicationPermissionGrants/880da380-985e-4198-81b9-e05b1cc53158
Content-Type: application/json
```

```json
{
  "delegatedPermissions": ["readContent"],
  "applicationPermissions": ["none"]
}
```

Replace `{fileStorageContainerTypeId}` with your container type ID.

You can also grant this permission during initial container type registration by using the [Create container type registration](/graph/api/filestorage-post-containertyperegistrations) endpoint.

## Validate retrieval

1. Upload supported files to a SharePoint Embedded container.
1. Wait for indexing to complete.
1. Sign in as a user who has access to the container content.
1. Ask the agent a question that the uploaded files can answer.
1. Confirm that the answer is grounded in the expected SharePoint Embedded content.

If the answer omits expected files, check:

- Container type registration in the consuming tenant.
- Foundry application permission grants.
- Semantic index initialization in the tenant.
- User access to the container and files.
- Supported file formats.
- Content discoverability settings.
- Indexing delay.

## Next steps

- [Use the Retrieval API](agent-experiences.md#use-the-retrieval-api)
- [Add Microsoft 365 Copilot and agent experiences](agent-experiences.md)
- [Register application permissions](register-application-permissions.md)
