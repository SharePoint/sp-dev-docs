---
title: Setting up SharePoint Embedded as a knowledge source in Microsoft Foundry 
description: Instructions to configure SPE in Azure's knowledge retrieval 
ms.date: 11/12/2025
ms.localizationpriority: high
---

# Setting up SharePoint Embedded as a knowledge source in Microsoft Foundry (Preview)

> [!NOTE]
>
> This functionality is currently in preview.

Here's step-by-step guidance to ensure your Foundry agent is ready to interact with SharePoint Embedded.

## Prerequisites

- You have set up an SPE app with at least one container. To get started, learn more at [https://aka.ms/start-spe](https://aka.ms/start-spe)
- You have at least one Copilot license on your tenant. This requirement is for the preview period only. We will switch to metered billing once we transition out of preview. 

## Grant Foundry access to your container type

Run the following Microsoft Graph API to register application permission grants:

Replace `{fileStorageContainerTypeId}` with your container type ID. The container type's owning application must call this API on a consuming tenant

[Learn more about Container Type Registration API](https://learn.microsoft.com/graph/api/filestoragecontainertyperegistration-post-applicationpermissiongrants?view=graph-rest-beta&tabs=http)

### API call

```http
PUT https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeId}/applicationPermissionGrants/880da380-985e-4198-81b9-e05b1cc53158
Content-Type: application/json

{
  "delegatedPermissions": ["readContent"],
  "applicationPermissions": ["none"]
}
```


> [!TIP]
> This may also be done during initial container type registration using the [filestorage-post-containertyperegistrations API](https://learn.microsoft.com/graph/api/filestorage-post-containertyperegistrations?view=graph-rest-beta&tabs=http).
