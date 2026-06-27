---
title: Office file experiences for SharePoint Embedded
description: Learn how Office file experiences work with SharePoint Embedded, including versioning, collaboration, co-authoring, breadcrumb navigation, and Microsoft 365 search integration.
ms.date: 04/27/2026
ms.localizationpriority: high
---

# Office file experiences for SharePoint Embedded

Office files in SharePoint Embedded containers behave similarly to Office files stored in OneDrive and SharePoint sites. This article describes how these experiences work in SharePoint Embedded applications.

## Opening Office documents from SharePoint Embedded

Office documents in SharePoint Embedded apps can be opened and edited in Office for the web or in desktop Office applications for a richer experience. AutoSave is enabled by default, automatically saving changes to Word, Excel, and PowerPoint files as users work. Documents in archived containers can't be accessed or viewed. Your application should handle this state by displaying an appropriate message and guiding users to unarchive the container before they try to access these documents.

## View or restore a previous version of an Office document from SharePoint Embedded

Office document versioning is controlled by the `isItemVersioningEnabled` setting in your [container type configuration](/graph/api/resources/filestoragecontainertypesettings). Users can track changes, compare versions, and restore earlier versions when needed—whether to recover from mistakes, revert to a preferred version, or manage changes in collaborative scenarios.

## Collaborating on Office documents from SharePoint Embedded

Users can share files with specific individuals or external users through links, email invitations, or @mentions in comments, and collaborate in real time through co-authoring in Office.

> [!NOTE]
> Users you @mention must [have a Microsoft 365 license assigned to them](../auth.md#mention-users-in-office-documents).
>
> The @mentions feature is restricted to people inside the consuming tenant's organization and excludes guests and users from other tenants in a multitenant setting.

### Share your files

#### Send an email invitation

Share your SharePoint Embedded files by sending an email invitation to specific people:

- Select **Share** and start typing the email addresses or contact names of people you want to share with. You can choose contacts from the list that appears.

#### Create a sharing link

SharePoint Embedded app users can share their files by sending a link.

- Select **Share**, select **Copy Link**, and paste the link wherever you want.
- Change any link permissions if needed.

### Co-author

Users can collaborate on Office files by sharing them with trusted peers. Shared files can be edited together in real time, with changes visible as they happen. @mentions in comments help bring others into the conversation for feedback.

- See who else is in the document and where they're working.
- See a presence indicator where someone is making changes, and view those changes in real time.
- See changes made by others and review what happened while you were away.

### Levels of sharing access

The following table describes the sharing options available for SharePoint Embedded content:

| If you want to … | Setting |
| --- | --- |
| Allow anyone who receives the link access to SharePoint Embedded content | **Anyone** gives access to anyone who receives this link, whether they receive it directly from you or it's forwarded from someone else. |
| Allow anyone in your organization to access SharePoint Embedded content | **People in \<Your Organization\>** gives anyone in your organization with the link access to the file, whether they receive it directly from you or it's forwarded from someone else. |
| Restrict your SharePoint Embedded content to specific people | When you need to prevent recipients from forwarding a shared link, use the **Specific People** permission scope. **Specific People** grants access only to the recipients you designate explicitly. If a recipient forwards the sharing invitation, only people who already have access to the item can redeem the link. |
| Reshare the link with specific people | Use **People with existing access** to share a link with someone who already has access to the document or folder. This option doesn't change any existing permissions. |

## Breadcrumb properties on Office documents from SharePoint Embedded

SharePoint Embedded apps derive breadcrumbs from the corresponding container type configuration. If `urlTemplate` is configured on your container type, breadcrumb links in Office clients direct users to your application by using the URL template.

> [!NOTE]
> We recommend specifying **Current Channel** to take advantage of breadcrumb patterns and future enhancements to Office apps. Learn more about [specifying update channels for Office apps](/deployoffice/updates/overview-update-channels).

The following diagram shows how these properties map to breadcrumb display in Office clients (Office for the web and desktop Office applications):

![Screenshot of the breadcrumb pattern in SharePoint Embedded applications.](../../images/office2.png)

Here are a few examples of SharePoint Embedded application breadcrumb navigation in Office clients.

![Screenshot of breadcrumb options in SharePoint Embedded applications.](../../images/office1.png)

## Opening files from Microsoft 365 search

When users search for content on Microsoft 365 (for example, on Office.com), files stored in SharePoint Embedded containers can appear alongside other results. Whether a container's files appear in search results is controlled by the [`isDiscoverabilityEnabled`](/graph/api/resources/filestoragecontainertypesettings#properties) setting on the container type: files appear in Microsoft 365 search only when `isDiscoverabilityEnabled` is `true` for their container type.

When a user selects a SharePoint Embedded file from search results, the file opens in an appropriate viewer. For file types without a built-in Microsoft 365 viewer, the destination depends on the container type's [`urlTemplate`](/graph/api/resources/filestoragecontainertypesettings#properties) property.

The `urlTemplate` property on a container type specifies the URL pattern used by Microsoft 365 when users open files from search results. If `urlTemplate` isn't configured, users who select non-Office or non-PDF files in Microsoft 365 search results are redirected to a generic help page that explains the file is stored in a third-party application and should be opened there.

### How file types are handled

The destination URL for a file in search results depends on the file type and whether `urlTemplate` is set:

| File type | `urlTemplate` set? | Behavior when selected from search |
|---|---|---|
| Files with a supported Microsoft 365 web viewer (Word, Excel, PowerPoint, Visio, OneNote, and others) | Either | Opens in the corresponding Microsoft 365 web viewer |
| PDF | Either | Opens in the SharePoint Embedded PDF Previewer |
| All other types | Yes | Redirected to your application through `urlTemplate` |
| All other types | No | Redirected to a [Microsoft help page](https://aka.ms/spe-openfilelocation) |

### Configuring `urlTemplate`

Set the `urlTemplate` property on your container type by calling the [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) API. The value is a URL with placeholder tokens that Microsoft 365 resolves to actual item identifiers when a user selects a search result.

#### Requirements

The `urlTemplate` value must:

- Be a valid absolute URL that uses the `https://` scheme. HTTP URLs aren't accepted.
- Not resolve to a loopback address, such as `localhost` or `127.0.0.1`.

> [!IMPORTANT]
> If the URL fails validation, `urlTemplate` is silently set to `null` without returning an error. To confirm your configuration, read back the value after setting it.

#### URL template syntax

```text
https://app.contoso.com/open?tenant={tenant-id}&drive={drive-id}&item={item-id}
```

Tokens are enclosed in curly braces and replaced with values that correspond to the item the user selects. Most tokens are removed from the URL if they can't be resolved. The exceptions are `{tenant-id}` and `{drive-id}`—if unresolved, these tokens remain as literal text in the URL.

#### Supported tokens

| Token | Value your application receives |
|---|---|
| `{tenant-id}` | GUID of the consuming tenant. Used to make tenant-scoped Microsoft Graph API calls. |
| `{drive-id}` | Drive ID of the container. Use it with Microsoft Graph APIs to reference the container. |
| `{folder-id}` | Item ID of the file's immediate parent folder. Item IDs aren't GUIDs. Omitted from the URL for root-level files. |
| `{item-id}` | Item ID of the driveItem. Item IDs aren't GUIDs. |
| `{site-domain}` | -- |
| `{list-id}` | -- |
| `{site-url}` | -- |
| `{ownershipType}` | -- |
| `{itemname-guid}` | -- |
| `{folderpath-guids}` | -- |

You can also use custom container properties as tokens in `urlTemplate`. To make a custom property available as a token, set its `isPatternToken` value to `true` when you create or update the property. After it's enabled, reference the property in your template by enclosing its name in curly braces (for example, `{myCustomProperty}`). For more information about custom properties, see [Add custom properties to a fileStorageContainer](/graph/api/filestoragecontainer-post-customproperty).

#### Example

If your container type has `urlTemplate` set to:

```text
https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}
```

When a user opens a `.txt` file from a search result, Microsoft 365 redirects the user to a URL like the following:

```text
https://app.contoso.com/open?t=72f988bf-86f1-41af-91ab-2d7cd011db47&d=b%21abc123...&i=01ABC...
```

Your application receives the `tenantId`, `driveId`, and `itemId` as query parameters and can use them to retrieve and open the file through the Microsoft Graph API.

#### Setting `urlTemplate` with Microsoft Graph

Use the PATCH endpoint [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) to update `urlTemplate`:

```http
PATCH https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes/{containerTypeId}
Content-Type: application/json

{
  "settings": {
    "urlTemplate": "https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}"
  }
}
```

### Limitations

#### Updates to `urlTemplate` aren't instantaneous

The destination URL for each file is stored in the Microsoft 365 search index. If you configure or update `urlTemplate` after files are indexed, search results continue to use the previous destination until the index is updated. Microsoft 365 performs incremental index updates automatically, but updates can take time to appear.

#### `urlTemplate` is scoped to the container type

The template applies to all container instances of the corresponding container type across all consuming tenants. Use the `{tenant-id}` token to route users to the correct tenant within your application.

#### `{folder-id}` reflects the item's immediate parent

If a file is stored at the root of the container, `{folder-id}` is omitted from the redirect URL rather than passed as an empty value. Make sure your application handles URLs that don't include this parameter.