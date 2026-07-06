---
title: Set up SharePoint Embedded as a knowledge source in Microsoft Foundry 
description: Instructions to configure SPE in Azure's knowledge retrieval 
ms.date: 11/12/2025
ms.localizationpriority: high
---

# Set up SharePoint Embedded as a knowledge source in Microsoft Foundry (Preview)

> [!NOTE]
>
> This functionality is currently in preview.

This article helps you configure [Microsoft Foundry Agent Service](/azure/foundry/agents/overview) with a [SharePoint knowledge source (Preview)](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote) configured for SharePoint Embedded (SPE).

## Prerequisites

- You have set up an SPE app with at least one container. To get started, learn more at [SharePoint Embedded Overview](../../overview.md).
- You have at least one Copilot license on your tenant. This requirement is for the preview period only. We will switch to metered billing once we transition out of preview.

## Set up the SharePoint knowledge source for SharePoint Embedded

The SharePoint knowledge source must be configured with the `remoteSharePointParameters.containerTypeId` pointing to your application's container type. For more information, see the [SharePoint knowledge source properties](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote#source-specific-properties).

## Grant Foundry access to a container type

You also need to grant Microsoft Foundry the necessary application permission to access your container type. You can do this by updating the container type registration in your consuming tenants as shown below. Replace `{fileStorageContainerTypeId}` with your container type ID. The container type's owning application must call this API on consuming tenants.

```http
PUT /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeId}/applicationPermissionGrants/880da380-985e-4198-81b9-e05b1cc53158
Content-Type: application/json

{
  "delegatedPermissions": ["readContent"],
  "applicationPermissions": ["none"]
}
```

> [!TIP]
> This may also be done during initial container type registration using the [Create container type registration](/graph/api/filestorage-post-containertyperegistrations) endpoint.
