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

This article configures a SPE container type with the necessary permission for an Azure AI Foundry agent to use it as a knowledge source.

## Prerequisites

- You have set up an SPE app with at least one container. To get started, learn more at [SharePoint Embedded Overview](../../overview.md).
- You have at least one Copilot license on your tenant. This requirement is for the preview period only. We will switch to metered billing once we transition out of preview. 

## Grant Foundry access to a container type

Run the following to grant the necessary application permission using the Microsoft Graph API:

Replace `{fileStorageContainerTypeId}` with your container type ID. The container type's owning application must call this API on a consuming tenant.

[Learn more about Container Type Registration API](/graph/api/filestoragecontainertyperegistration-post-applicationpermissiongrants)

```http
PUT https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeId}/applicationPermissionGrants/880da380-985e-4198-81b9-e05b1cc53158
Content-Type: application/json

{
  "delegatedPermissions": ["readContent"],
  "applicationPermissions": ["none"]
}
```

> [!TIP]
> This may also be done during initial container type registration using the Microsoft Graph endpoint [filestorage-post-containertyperegistrations](/graph/api/filestorage-post-containertyperegistrations).
