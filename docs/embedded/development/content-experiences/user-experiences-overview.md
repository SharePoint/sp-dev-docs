---
title: Content Experiences Overview
description: Experiences with SharePoint Embedded content
ms.date: 07/30/2024
ms.localizationpriority: high
---

# User experiences overview

SharePoint Embedded provides a comprehensive set of user experience features like open and editing Office files, file preview, or in-app search that you can use to build the right user experiences for your applications.

## Open & edit using Office

Office documents from SharePoint Embedded applications can be opened for viewing, editing, and collaborating using either the web or Office applications for a richer viewing and editing experience. Learn more about [Office experiences available on SharePoint Embedded](./office-experience.md).

You can set up your applications to launch Office when a user selects an Office document within your application. This includes options to directly launch an Office application or to open it in a specific mode, such as view (for read-only content) or edit (for editing mode). Learn how to [configure the right Office Experience for your Office Documents](../../tutorials/launch-experience.md)

## Preview content

Integrate your application with SharePoint Embedded player plugin to offer file preview experiences on a wide range of supported file types. You can embed the file preview experiences either in an iFrame or open a new page. Learn how to [offer File Preview experiences for content on your applications](../../tutorials/using-file-preview.md)

## Download

You can use [Microsoft Graph's Download DriveItem API](/graph/api/driveitem-get-content) to offer download file user experiences for your applications. This will generate  a short-lived, pre-authenticated URL that allows users to download files from your applications.

> [!NOTE]
> A direct link to the file lacks the appropriate authorization from your application. If used directly in a browser, this would yield an access denied.

## Content discovery in Microsoft 365

You can control how your content appears in the Microsoft 365 experience. The default behavior is SharePoint Embedded application content will be hidden in Microsoft 365 environments including office.com, oneDrive.com, or other Microsoft intelligent file discovery features. The default behavior also excludes Copilot for Microsoft 365 from grounding with your SharePoint Embedded application content.

If you want to opt into the Microsoft 365 experience, during container type creation, you can change the default settings using cmdlet [Set-SPOContainerTypeConfiguration](../admin-exp/developer-admin/dev-admin.md#container-type-configuration-properties) as per this example:

```powershell
Set-SPOContainerTypeConfiguration
    -ContainerTypeID <ContainerTypeID>
    -discoverabilityDisabled $False
```

In this way, your files will be integrated into the Microsoft 365 environment, participating in intelligent file discovery.

> [!NOTE]
>
> 1. If you modify the settings after creating some content, it may take up to 30 days for these changes to achieve full consistency across all consuming tenants.
> 1. To enable the sharing user experience for your content in Office.com, additional application permissions **must** be added at the time of the container type registration process. To add more permission to enable sharing dialog, refer to the following code:

```http
PUT /storageContainerTypes/{containerTypeId}/applicationPermissions
Content-Type: application/json

{
  "appId": "4765445b-32c6-49b0-83e6-1d93765276ca",
  "delegated": ["readContent","writeContent"],
  "appOnly": ["none"]
}
```

## Recycle bin

You can use Microsoft Graph to either delete or permanently delete items in containers. Deleted items are moved to the container’s recycle bin and retained for 93 days. During this period, the items can be restored or permanently deleted using Microsoft Graph. An item in the recycle bin is permanently deleted when it exceeds the 93-day retention period. Permanently deleted items can't be restored.
