---
title: Office file experiences for SharePoint Embedded
description: Learn how Office file experiences work with SharePoint Embedded, including versioning, collaboration, co-authoring, breadcrumb navigation, and Microsoft 365 search integration.
ms.date: 04/27/2026
ms.localizationpriority: high
---

# Office file experiences for SharePoint Embedded

SharePoint Embedded supports the same Office file experiences available in Microsoft 365, including opening and editing documents, co-authoring, versioning, sharing, and breadcrumb navigation. This article describes how these experiences work in SharePoint Embedded applications.

## Opening Office documents from SharePoint Embedded

Office documents in SharePoint Embedded apps can be opened and edited in Office for the web or in desktop Office applications for full desktop functionality. AutoSave is enabled by default and automatically saves changes to Word, Excel, and PowerPoint files.

Documents stored in an archived container can’t be viewed or accessed. Your application must handle the archived state of the container by displaying an appropriate error message and guiding users through the steps to regain access, such as reactivating the container.

## View or restore a previous version of an Office document from SharePoint Embedded

Office document versioning is controlled by the `isVersioningEnabled` setting in your container type configuration. Users can track changes, compare versions, and restore earlier versions when needed—whether to recover from mistakes, revert to a preferred version, or manage changes in collaborative scenarios.

## Collaborating on Office documents from SharePoint Embedded

Users can share files with specific individuals or external users via links, email invitations, or @mentions in comments. Office also supports real-time collaboration through co-authoring.

> [!NOTE]
> Users you @mention must [have a Microsoft 365 license assigned to them](../auth.md#mention-users-in-office-documents).
>
> The @mentions feature is restricted to people inside the consuming tenant's organization and excludes guests and users from other tenants in a multitenant setting.

### Share your documents

#### Send an email invitation

Share your SharePoint Embedded documents by sending an email invitation to specific people:

- Select **Share** and start typing the email addresses or contact names of people you want to share with. You can choose contacts from the list that appears.

#### Create a shareable link

Creating a shareable link makes it simple to share your SharePoint Embedded document in an email, document, or instant message.

- Select **Share**, select **Copy Link**, and paste the link wherever you want.
- Change any link permissions if needed.

### Co-author

Users can collaborate on Office files by sharing them with colleagues. Multiple users can edit shared files simultaneously, with changes visible as they happen. @mentions in comments help bring others into the conversation for feedback.

- See who else is in the document and where they're working.
- See a presence indicator where someone is making changes, and view those changes in real time.
- See changes made by others and review what happened while you were away.

### Levels of sharing access

The following table describes the sharing options available for SharePoint Embedded application files:

| If you want to … | Setting |
| --- | --- |
| Allow anyone who receives the link access to a SharePoint Embedded application file | **Anyone** gives access to anyone who receives this link, whether they receive it directly from you or it's forwarded from someone else. This might include people outside of your organization. |
| Allow anyone in your organization to access your SharePoint Embedded application file | **People in \<Your Organization\>** gives anyone in your organization with the link access to the file, whether they receive it directly from you or it's forwarded from someone else. |
| Restrict your SharePoint Embedded application files to specific people | When you need to prevent recipients from forwarding a shared link, use the **Specific People** permission scope. **Specific People** grants access only to the recipients you designate explicitly. If a recipient forwards the sharing invitation, only people who already have access to the item can use the link. |
| Reshare the link with specific people | Use **People with existing access** to share a link with someone who already has access to the document or folder. This option doesn't change any existing permissions. |

## Breadcrumb properties on Office documents from SharePoint Embedded

Breadcrumb properties enable Office clients to display navigation elements that help users associate Office files with your application.

> [!NOTE]
> We recommend specifying **Current Channel** to take advantage of breadcrumb patterns and future enhancements to Office apps. Learn more about [specifying update channels for Office apps](/deployoffice/updates/overview-update-channels).

Container properties configured for your app define the breadcrumb patterns. The following diagram shows how container properties map to the breadcrumb display in Office clients:

![Screenshot of breadcrumb pattern in SharePoint Embedded applications](../../images/office2.png)

Here are a few examples of SharePoint Embedded application breadcrumb navigation in Office clients.

![Screenshot of breadcrumb options in SharePoint Embedded applications.](../../images/office1.png)

## Opening files from Microsoft 365 search

When users search for content on Microsoft 365 (for example, on Office.com), search results include files stored in SharePoint Embedded containers. Selecting a search result opens the file in an appropriate viewer. For file types without a built-in Microsoft viewer, the destination depends on the container type's [URL template](/graph/api/resources/filestoragecontainertypesettings#properties).

You can control whether files appear in Microsoft 365 search results using the [`isDiscoverabilityEnabled`](/graph/api/resources/filestoragecontainertypesettings#properties) container type configuration.

The `urlTemplate` property specifies the URL pattern Microsoft 365 uses when users open files from search results. If no URL template is configured, Microsoft 365 directs file types with no default viewer to a generic Microsoft help page instead of your application.

### How file types are handled

The destination URL for a file in search results depends on the file type and whether `urlTemplate` is set:

| File type | `urlTemplate` set? | Behavior when selected from search |
|---|---|---|
| Word, Excel, PowerPoint | Either | Opens in Office for the web |
| PDF | Either | Opens in the SharePoint Embedded PDF Previewer |
| All other types | Yes | Redirected to your application via `urlTemplate` |
| All other types | No | Redirected to a [Microsoft help page](https://aka.ms/spe-openfilelocation) |

### Configuring `urlTemplate`

Set the `urlTemplate` property on your container type using the [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) API. The value is a URL with placeholder tokens that Microsoft 365 resolves to actual item identifiers at the time a user selects a search result.

#### URL template syntax

```text
https://app.contoso.com/open?tenant={tenant-id}&drive={drive-id}&item={item-id}
```

Tokens are enclosed in curly braces and replaced with values for the specific item the user selects. Any token that cannot be resolved is removed from the URL before the redirect occurs.

#### Supported tokens

| Token | Value your app receives |
|---|---|
| `{tenant-id}` | ID of the consuming tenant; used to make tenant-scoped Graph API calls |
| `{drive-id}` | Drive ID of the container; use with the Graph APIs to reference the container |
| `{folder-id}` | ID of the item's immediate parent folder; omitted entirely from the URL for root-level files |
| `{item-id}` | ID of the driveItem |

For more information on custom properties, see [Custom properties on fileStorageContainers](/graph/api/filestoragecontainer-post-customproperty).

#### Example

If your container type has `urlTemplate` set to:

```text
https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}
```

Then when a user opens a `.txt` file from a search result, Microsoft 365 redirects them to a URL like:

```text
https://app.contoso.com/open?t=72f988bf-86f1-41af-91ab-2d7cd011db47&d=b%21abc123...&i=01ABC...
```

Your application receives the tenant ID, drive ID, and item ID as query parameters and can use them to retrieve and open the file via the Microsoft Graph API.

#### Setting `urlTemplate` via Graph API

Use the PATCH endpoint [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) to update `urlTemplate`:

```http
PATCH https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes/{containerTypeId}
Content-Type: application/json

{
  "settings": {
    "urlTemplate": "https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}"
  },
  "etag": "<etag-value>"
}
```

### Limitations

#### Search index updates require a re-crawl

The destination URL for each file is stored in the Microsoft 365 search index when the file is crawled. If you configure or update `urlTemplate` after files have already been indexed, existing search results continue to route to the previous destination until those files are re-crawled. Microsoft 365 performs incremental crawls automatically, but there may be a delay before all files reflect the updated URL.

#### `urlTemplate` is scoped to the container type

The template applies to all containers of that type across all consuming tenants. Use the `{tenant-id}` token to route users to the correct tenant context within your application.

#### `{folder-id}` reflects the item's immediate parent

If a file is stored at the root of the container, `{folder-id}` is omitted from the redirect URL rather than passed as an empty value. Make sure your application handles URLs where this parameter is not present.