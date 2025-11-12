---
title: Configuring SharePoint Embedded as a knowledge source in Azure AI Foundry 
description: Details usage and billing for SharePoint Embedded agents
ms.date: 05/12/2025
ms.localizationpriority: high
---

# Setting up SharePoint Embedded as a knowledge source in Azure AI Foundry (Preview)

> [!NOTE]
>
> This functionality is currently in preview.

You can now ground your Foundry agent with documents in SharePoint Embedded without building a separate RAG infrastructure and access control. Here's a step-by-step guidance:

## Prerequisites

- You have an SPE app with at least one container with one or more Office files or PDFs. [Start here to learn more](https://aka.ms/start-spe)
- You have at least one Copilot license on your tenant

## Register Foundry's app ID with your container type

Use the [Microsoft Graph API to register application permission grants](https://learn.microsoft.com/graph/api/filestoragecontainertyperegistration-post-applicationpermissiongrants?view=graph-rest-beta&tabs=http):

1. Replace `{appId}` URL parameter with the Azure Cognitive Search appid: `880da380-985e-4198-81b9-e05b1cc53158`
2. Give it `"readContent"` delegatedPermissions and `"none"` applicationPermissions
3. Replace `{fileStorageContainerTypeId}` with your container type ID. The container type's owning application must call this API on a consuming tenant

### Example API call

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
