---
title: Microsoft SharePoint Connector for Power Automate
description: In Power Automate, Microsoft SharePoint Connector supports the following flow triggers and actions.
ms.date: 10/23/2024
ms.service: power-automate
search.app:
  - Flow
search.appverid: met150
---

# Microsoft SharePoint Connector in Power Automate

In Power Automate, Microsoft SharePoint Connector supports the following flow triggers and actions.

## SharePoint triggers

SharePoint triggers let you create flows that monitor for changes in a SharePoint list or library. If one or more changes occur in a subscribed list, that flow is triggered to run.

### When an item is created

Triggers the flow when you create an item in a SharePoint list.

### When an item is created or modified

Triggers the flow when you create an item, and each time you modify it in a SharePoint list.

### When an item or a file is modified

Triggers the flow when you modify an item or a file in a SharePoint list or a document library.

For more info about how to use this trigger, see this tutorial video: [Introducing 'when an item or file modified' trigger and 'Get changes' action](https://youtu.be/AaWB3xlhJdc)

### When an item is deleted

Triggers the flow when you delete an item in a list. To get the properties of a deleted item, you must connect this trigger to the associated SharePoint site on which it is expected to run, using a site collection admin account.

### For a selected item

Allows users of lists to trigger a flow after selecting an item in a list.

> [!NOTE]
> Only flows within the default environment can be executed manually from a SharePoint list.

### When a file is classified by a content understanding model
Triggers the flow when a Microsoft Syntex content understanding model classifies a file, shown in the classification date property of the file.

For more info about when Microsoft Syntex and how it classifies files see: [Introduction to Microsoft Microsoft Syntex](/microsoft-365/contentunderstanding)

### When a file is created (properties only)

Triggers the flow when you create a file in a document library and returns only the custom file properties associated with that file.

### When a file is created in a folder [deprecated]

> [!NOTE]
> This trigger is deprecated and may not work as expected.

Triggers the flow when you create a file in a SharePoint folder. This trigger does not run if you add or update a file in a subfolder inside the folder this trigger is operating on. If the flow is required to trigger on subfolders, create different flows for one or more subfolder(s).

### When a file is created or modified (properties only)

Triggers the flow when you create a file, and each time you modify the file properties in a library. Specify a value in the "Folder" property to target a specific folder; otherwise, the trigger applies to the entire library. Returns only the custom file properties associated with that file.

### When a file is created or modified in a folder [deprecated]

> [!NOTE]
> This trigger is deprecated and may not work as expected.

Triggers when a file is created, and also each time it is modified in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

### When a file is deleted

Triggers the flow when you delete a file in a document library. You can optionally specify a folder to watch. When you delete a folder, the trigger activates only once for the deleted folder, including its subfolders. To get the properties of the deleted file, you must connect this trigger to the associated SharePoint site on which the trigger is expected to run, using a site collection admin account.

### For a selected file

Allows users of document libraries to trigger a flow after selecting a file.

> [!NOTE]
> Only flows within the default environment can be executed manually from a SharePoint library.

### When a site has requested to join a hub site

Triggers a flow upon hub site join approval request.

## SharePoint actions

### Add attachment

Adds a new attachment to the specified list item.

### Approve hub site join request

Approves hub site join request. This action returns an approval token to complete the join request, using the join hub site action.

### Cancel hub site join request

Cancels hub join request. If applicable, specify the same Approval Correlation Id as used in the **Set hub site join status to pending** action.

### Check in file

Checks in a checked-out file in a document library, which makes the version of the document available to others.

### Check out file

Checks out a file in a document library to prevent others from editing the document, and your changes from being visible until you check in the document.

### Copy file

Copies a file. Works similarly to the **Copy to** command in SharePoint libraries. After copying, returns info about the new file.

### Copy file [deprecated]

> [!NOTE]
> This action is deprecated and may not work as expected.

Copies a file to a SharePoint site.

### Copy folder

Copies a folder. Works similarly to the **Copy to** command in SharePoint libraries. After copying, returns info about the new folder.

### Create file

Uploads a file to a SharePoint site. Make sure to pick an existing library.

### Create item

Creates a new item in a SharePoint list.

### Create new folder

Creates a new folder or folder path.

### Create sharing link for a file or folder

Creates a sharing link for a file or folder.

### Delete attachment

Deletes the specified attachment.

### Delete file

Deletes the file specified by the file identifier.

### Delete item

Deletes an item from a SharePoint list.

### Discard checkout

Discards the checkout, rather than saves the file, if you check out a file and don't make changes to it, or you make changes that you don't want to keep. If your organization tracks versions, a new version is created each time you check in a file to the library. By discarding the checkout, you can avoid making new versions when you haven't made any changes to the file.

### Extract folder

Extracts an archive file into a SharePoint folder (for example, .zip).

### Get all lists and libraries

Gets all lists and libraries.

### Get attachment content

Returns file contents, using the file identifier. The contents can be copied somewhere else, or be used as an attachment.

### Get attachments

Returns the list of attachments for the specified list item. To get to the contents of the file, add a **Get attachment content** step, and use the **File identifier** property returned by this action.

### Get changes for an item or a file (properties only)

Gets all the columns or file properties changed since and until a specified time interval. To get all the columns changed when an item or a file is modified:
- Use the _when an item or file is modified_ trigger, and,
- Use the _Trigger Window Start Token_ & _Trigger Window End Token_ outputs from the _when an item or file is modified_ trigger to infer what columns changed since the last time flow checked for item or file updates.

For more info about how to use this action, see this tutorial video: [Introducing 'when an item or file modified' trigger and 'Get changes' action](https://youtu.be/AaWB3xlhJdc)

> [!NOTE]
> - The list or library should have versioning configured in order to infer what columns or properties got modified since last change.
> - Only column changes are supported for lists and libraries.
> - File content changes are not supported.
> - Attachment changes are not supported.
> - _Trigger Window Start Token_ & _Trigger Window End Token_ are only available when you use _when an item or file is modified_ trigger.

### Get file content

Gets file contents using the file identifier. You can copy the contents somewhere else, or use it as an attachment.

### Get file content using path

Gets file contents, using the file path.

### Get file metadata

Gets info about the file, such as size, etag, created date, and so on. Uses a file identifier to select the file. To get to the values stored in the columns in the library, use the **Get file properties** action.

### Get file metadata using path

Gets info about the file, such as size, etag, created date, and so on. Uses a file path to select the file. To get to the values stored in the columns in the library, use the **Get file properties** action.

### Get file properties

Gets the properties saved in the columns in the library for the item specified by the item id. To get to the contents of the file, add a "Get file content" step, and use the "File identifier" property returned by this action. When using this with the On-Premises Data Gateway, you may need to manually enter the name of the library to connect to.

### Get files (properties only)

Gets the properties saved in the columns in the library for all folders and files stored in the library. You can also filter down to the items that match a condition. To work with the output from this action, use the **Apply to each** section. When using this with the On-Premises Data Gateway, you may need to manually enter the name of the library to connect to. For more info about this action, see: [In-depth analysis into **Get items** and **Get files** SharePoint actions for flows in Power Automate](../power-automate/guidance/working-with-get-items-and-get-files.md).

### Get folder metadata

Gets info about the folder. Uses a file identifier to select the folder.

### Get folder metadata using path

Gets info about the folder. Uses a folder path to select the folder.

### Get item

Gets a single item by its ID from a SharePoint list.

### Get items

Gets items from a SharePoint list. For more info about this action, see: [In-depth analysis into **Get items** and **Get files** SharePoint actions for flows in Power Automate](../power-automate/guidance/working-with-get-items-and-get-files.md).

### Get list views

Gets views from a SharePoint list.

### Get lists

Gets SharePoint lists from a site.

### Grant access to an item or a folder

Grants access to an item or a folder in SharePoint to specific people.

### Join hub site

Joins the requested site to the hub site. An Approval Token is required to complete the join successfully if that hub requires approval. If applicable, specify the same Approval Correlation Id as used in the **Set hub site join status to pending** action.

### List folder

Returns files contained in a SharePoint folder.

### List root folder

Returns files in the root SharePoint folder.

### Move file

Moves a file. Works similarly to the **Move to** command in SharePoint libraries. Returns info about the new file after its move.

### Move folder

Moves a folder. Works similarly to the **Move to** command in SharePoint libraries. Returns info about the new folder after its move.

### Resolve person

Returns a single matching user value so it can be assigned to a column of type person. If there are no matches or multiple matches, this action errors out.

### Send an HTTP request to SharePoint

Constructs a SharePoint REST API to invoke. For more info about this action, see: [Working with the SharePoint Send HTTP Request flow action in Power Automate](../power-automate/guidance/working-with-send-sp-http-request.md).

> [!IMPORTANT]
> This action may execute any SharePoint REST API you have access to. Proceed with caution.

### Set content approval status

Sets the content approval status for an item in a list or library that has content approval turned on. You must provide an ETag for pages and files. You can get the ETag using the Get File Metadata action. This action is only available for SharePoint Online and SharePoint 2019.

### Set hub site join status to pending

Sets the requested site's hub join request status to pending. The Approval Correlation Id is an optional parameter that helps SharePoint identify a particular hub join request. The requesting site can only have one pending request at a given time.

### Stop sharing an item or a file

Deletes all links giving access to an item or a file, and removes all people with direct access, except for owners.

### Update file

Updates the contents of the file specified by the file identifier.

### Update file properties

Updates the properties stored in columns in a library for the item specified by the item ID. To update file contents, use the **Update file** action. When using this with the On-Premises Data Gateway, you may need to manually enter the name of the library to connect to.

### Update item

Updates an item in a SharePoint list.

## Support for SharePoint Server

The following tables list all of the actions and triggers that are supported for SharePoint On-Premises 2013, 2016, or 2019. Any actions or triggers that are not mentioned are unsupported.

### Supported triggers

| Trigger    | SharePoint 2013    | SharePoint 2016    | SharePoint 2019|
| :-- | :-- | :-- | :-- |
| When a file is created in a folder | Yes | Yes | Yes |
| When a file is created or modified in a folder | Yes | Yes | Yes |
| When an item is created | Yes<sup>1</sup> | Yes<sup>1</sup> | Yes<sup>1</sup> |
| When an item is created or modified | Yes<sup>1</sup> | Yes<sup>1</sup> | Yes<sup>1</sup> |
| When a file is created (properties only) | No | No | Yes<sup>1</sup> |
| When a file is created or modified (properties only) | No | No | Yes<sup>1</sup> |
| When an item is deleted | No | No | Yes<sup>2</sup> |
| When a file is deleted | No | No | Yes<sup>2</sup> |
| Resolve Person | No | No | Yes |
| Set content approval status | No | No | Yes |

> [!NOTE]
> 1. Does not support “Limit Columns by View”.
> 1. While this trigger is supported for SharePoint 2019, flows created using this trigger may encounter the following issues:
>     - If there is no activity on the list for over 60 days or if there is some activity but no items are deleted for over 60 days, then the trigger will fail to activate.
>     - The deletion of list items by the System User will activate the trigger.


### Supported actions

| Action    | SharePoint 2013    | SharePoint 2016    | SharePoint 2019|
| :-- | :-- | :-- | :-- |
| Get file metadata | Yes | Yes | Yes |
| Get file metadata using path | Yes | Yes | Yes |
| Get folder metadata | Yes | Yes | Yes |
| Get folder metadata using path | Yes | Yes | Yes |
| Get file content | Yes | Yes | Yes |
| Create file | Yes<sup>1</sup> | Yes<sup>1</sup> | Yes<sup>1</sup> |
| Update file | Yes | Yes | Yes |
| Copy file [deprecated]<sup>2</sup>| Yes | Yes | Yes |
| List folder | Yes | Yes | Yes |
| Extract folder | Yes | Yes | Yes |
| Get attachments | Yes | Yes | Yes |
| Add attachment | Yes | Yes | Yes |
| Delete attachment | Yes | Yes | Yes |
| Get items | Yes<sup>3</sup> | Yes<sup>3</sup> | Yes<sup>3</sup> |
| Get item | Yes<sup>4</sup> | Yes<sup>4</sup> | Yes<sup>4</sup> |
| Create item | Yes<sup>4</sup> | Yes<sup>4</sup> | Yes<sup>4</sup> |
| Update item | Yes<sup>4</sup> | Yes<sup>4</sup> | Yes<sup>4</sup> |
| Delete item | Yes | Yes | Yes |
| Send an HTTP request to SharePoint | Yes | Yes | Yes |

> [!NOTE]
> 1. Does not support creating a large file by uploading it as a set of chunks.
> 1. This action includes "[deprecated]" in its display name. The "Copy file" action is different from this action.
> 1. This action only supports OData parameters, which excludes parameters such as "Limit Entries to Folder", "Include Nested Items", and "Limit Columns by View".
> 1. Does not support “Limit Columns by View”.

### Deprecated triggers and actions

These triggers are deprecated and are no longer actively maintained. While they are still present in the Microsoft SharePoint Connector, we recommend not utilizing deprecated triggers or actions in any new applications or solutions.

| Name    | Type    | Supported Version    | Suggested Alternative    |
| :-- | :-- | :-- | :-- |
| When a file is created in a folder [deprecated] | Trigger |SharePoint 2019 | When a file is created (properties only)  |
| When a file is created or modified in a folder [deprecated] | Trigger | SharePoint 2019 | When a file is created or modified (properties only)  |
| Copy file [deprecated] | Action | SharePoint 2019 | Copy file  |

## Known limitations

### Supported list and library templates

Power Automate flows for lists are only supported in generic lists (100) and generic document libraries (101). We do not currently support custom list and library templates, including but not limited to, lists such as Announcements, Contacts and Tasks.

### Flow runs

When you build a Power Automate flow to be triggered for an item, or for creating or modifying a file, Power Automate periodically checks for changes in the list or library, configured in the flow's trigger. In most cases, if there is a single change in the list or library, the flow run may occur within minutes after that change. However, expect that the flow may gather more than one change in subsequent flow runs due to the time between the flow interval since its last valid change, or subsequent edits to an item or a file.

### Move files and flow runs

When you move one or more files from one document library to another, the original file is moved from the source library to the destination library. Moving the file does not alter any custom metadata, including when the file was created and modified. Hence, this action does not trigger any flows for those file updates associated with the library where it was moved.

### Syncing files to your OneDrive for Business and SharePoint document libraries

When users sync one or more files from one document library to another, the original file is moved (synced) from your client to the destination library. Syncing the file will not alter any custom metadata including when the file was created and modified. Hence, this action will not trigger any flows for those file syncs in that library or in your OneDrive for business.

### Supported lookup columns

If your list/library has lookup columns, **Get items** and **Get files** actions support returning items with a maximum of 12 lookup columns. If your list or library exceeds this threshold, the flow in Power Automate fails.
