---
title: Content Experiences Overview
description: Experiences with SharePoint Embedded content
ms.date: 05/17/2024
ms.localizationpriority: high
---

# User Experiences Overview

SharePoint Embedded provides a comprehensive set of user experience features like open & edit of Office files, file preview or in-app search that you can use to build the right user experiences for your applications.


## Open & Edit using Office

Office documents from SharePoint Embedded applications can be opened for viewing, editing and collaborating using either on the web, or Office applications for a richer viewing and editing experience. Learn more about [Office experiences available on SharePoint Embedded](./office-experience.md).

You can set up your applications to launch Office when a user clicks on an Office document within your application. This includes options to directly launch an Office application or to open it in a specific mode, such as view (for read-only content) or edit (for editing mode). Learn how to [configure the right Office Experience for your Office Documents](../../tutorials/launch-experience.md)

## Preview Content

Integrate your application with SharePoint Embedded player plugin to offer file preview experiences on a wide range of supported file types. You can embed the file preview experiences either in an iFrame or open a new page. Learn how to [offer File Preview experiences for content on your applications](../../tutorials/using-file-preview.md)

## Download

You can use [Microsoft Graph's Download DriveItem API](/graph/api/driveitem-get-content) to offer download file user experiences for your applications. This will generate  a short lived, preauthenticated Url allows users to download files from your applications.

Note the following:

A direct link to the file lacks the appropriate authorization from your app. If used directly in a browser, this would yield an access denied.

## Content Discovery in Microsoft 365

You can control how your content appears in the Microsoft 365 experience. The default behavior is SharePoint Embedded app content will be hidden everywhere in Microsoft 365 environment including office.com, oneDrive.com, Recommeneded or other Microsoft intelligent file discovery features. 

If you want to opt into the Microsoft 365 experience, during container type creation, you can change the default settings using cmdlet [Set-SPOContainerTypeConfiguration](../admin-exp/developer-admin/dev-admin.md#container-type-configuration-properties) as per this example:
```powershell
Set-SPOContainerTypeConfiguration
    -ContainerTypeID <ContainerTypeID>
    -discoverabilityDisabled $False
```
In this way, your files will be integrated into the Microsoft365 environment, participating in intelligent file discovery.

> [!note]
>1. If you modify the settings after creating some content, it may take up to 30 days for these changes to achieve full consistency across all consuming tenants.
> 
> 2. To enable the sharing user experience for your content in Office.com, additional application permissions **must** be added at the time of the container type registration process. To add more permission to enable sharing dialog, refer to the following code:

```http
PUT /storageContainerTypes/{containerTypeId}/applicationPermissions
Content-Type: application/json

{
  "appId": "4765445b-32c6-49b0-83e6-1d93765276ca",
  "delegated": ["readContent","writeContent"],
  "appOnly": ["none"]
}
```

## Recycle Bin

You can use the Microsoft Graph to either soft-delete or permanent-delete items in containers. Soft-deleted items are moved to the container’s recycle bin and retained for 93 days. During this period, the items can be restored or permanently deleted using the Microsoft Graph APIs. An item in recycle bin is permanently deleted when it exceeds the 93-day retention period. Permanently deleted items can't be restored.
