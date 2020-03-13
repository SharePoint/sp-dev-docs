Microsoft SharePoint Connector in Power Automate supports the following flow triggers and actions.

## SharePoint triggers

#### When an item is created
Triggers the flow when an item is created.

#### When an item is created or modified
Triggers the flow when an item is created, and each time it is modified, in a SharePoint list. 

#### When an item is deleted
Triggers the flow when an item is deleted in a list. To get the properties of a deleted item, this trigger must connect to the associated SharePoint site on which it is expected to run using a site collection user account. 

#### For a selected item
Triggers the flow for a selected item in a list.

#### When a file is created (properties only)
Triggers the flow when a file is created in a document library, and returns only the custom file properties associated with that file. 

#### When a file is created in a folder
Triggers the flow when a file is created in a SharePoint folder. This trigger does not run if a file is added or updated in a subfolder inside the folder this trigger is operating on. If the flow is required to trigger on subfolders, create different flows for one or more subfolder(s).

#### When a file is created or modified (properties only)
Triggers the flow when a file is created, and each time the file properties are modified in a library. Returns only the custom file properties associated with that file.

#### When a file is created or modified in a folder (properties only)
Triggers the flow when a file is created, and each time the file properties are modified in the selected SharePoint folder. The trigger does not activate if a file is added/updated in a subfolder. If the flow is required to trigger on subfolders, create different flows for one or more subfolder(s).

#### When a file is deleted
Triggers the flow when a file is deleted in a document library. You can optionally specify a folder to watch. When a folder is deleted, the trigger activates only once for the deleted folder, including its subfolders. To get the properties of the deleted file, this trigger must connect to the associated SharePoint site on which the trigger is epxected to run using a site collection user account. 

#### For a selected file
Triggers the flow for a selected file in a document library.

#### When a site has requested to join a hub site
Triggers a flow upon hub site join approval request.

## SharePoint actions

### Add attachment	
Adds a new attachment to the specified list item.

### Approve hub site join request	
Approves hub site join request. This action returns an approval token to complete the join request using the join hub site action.

### Cancel hub site join request	
Cancels hub join request. If applicable, specify the same Approval Correlation Id as used in the "Set hub site join status to pending" action.

### Check in file	
Checks in a checked out file in a document library, which makes the version of the document available to others.

### Check out file	
Checks out a file in a document library to prevent others from editing the document, and your changes from being visible until you check in the document.

### Copy file	
Copies a file. Works similarly to the "Copy to" command in SharePoint libraries. Returns info about the new file after copying.

### Copy file (deprecated)	
Copies a file to a SharePoint site.

### Copy folder	
Copies a folder. Works similarly to the "Copy to" command in SharePoint libraries. Returns info about the new folder after copying.

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
Discards the checkout, rather than saves the file, if you check out a file and don’t make changes to it, or you make changes that you don’t want to keep. If your organization tracks versions, a new version is created each time you check a file back into the library. By discarding the checkout, you can avoid making new versions when you haven’t made any changes to the file.

### Extract folder	
Extracts an archive file into a SharePoint folder (for example, .zip).

### Get all lists and libraries	
Gets all lists and libraries.

### Get attachment content	
Returns file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment.

### Get attachments	
Returns the list of attachments for the specified list item. To get to the contents of the file, add a "Get attachment content" step, and use the "File identifier" property returned by this action.

### Get file content	
Gets file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment.

### Get file content using path	
Gets file contents using the file path.

### Get file metadata	
Gets info about the file, such as size, etag, created date, and so on. Uses a file identifier to pick the file. To get to the values stored in the columns in the library, use "Get file properties" action.

### Get file metadata using path	
Gets info about the file, such as size, etag, created date, and so on. Uses a file path to pick the file. To get to the values stored in the columns in the library, use "Get file properties" action.

### Get file properties	
Gets the properties saved in the columns in the library for the item specified by the item id. To get to the contents of the file, add a "Get file content" step, and use the "File identifier" property returned by this action. When using this with the On-Premises Data Gateway, you may need to manually enter the name of the library to connect to.

### Get files (properties only)	
Gets the properties saved in the columns in the library for all folders and files stored in the library. You can also filter down to the items that match a condition. Use "Apply to each" section to work with the output from this action. When using this with the On-Premises Data Gateway, you may need to be manually enter the name of the library to connect to.

### Get folder metadata	
Gets info about the folder. Uses a file identifier to pick the folder.

### Get folder metadata using path	
Gets info about the folder. Uses a folder path to pick the folder.

### Get item	
Gets a single item by its id from a SharePoint list.

### Get items	
Gets items from a SharePoint list.

### Get list views	
Gets views from a SharePoint list.

### Get lists	
Gets SharePoint lists from a site.

### Grant access to an item or a folder	
Grants access to an item or a folder in SharePoint to specific people.

### Join hub site	
Joins the requested site to the hub site. An Approval Token is required to complete the join successfully if that hub requires approval. If applicable, specify the same Approval Correlation Id as used in the "Set hub site join status to pending" action.

### List folder	
Returns files contained in a SharePoint folder.

### List root folder	
Returns files in the root SharePoint folder.

### Move file	
Moves a file. Works similarly to the "Move to" command in SharePoint libraries. Returns info about the new file after its move.

### Move folder	
Moves a folder. Works similarly to the "Move to" command in SharePoint libraries. Returns info about the new folder after its move.

### Resolve person	
Returns a single matching user value so it can be assigned to a column of type person. If there are no matches, or multiple matches, this action errors out.

### Send an HTTP request to SharePoint	
Constructs a SharePoint REST API to invoke. Note: This action may execute any SharePoint REST API you have access to. Proceed with caution.

### Set content approval status	
Sets the content approval status for an item in a list or library that has content approval turned on. You must provide an ETag for pages and files. You can get the ETag using the Get File Metadata action. This action is only available for SharePoint Online and SharePoint 2019.

### Set hub site join status to pending	
Sets the requested site's hub join request status to pending. The Approval Correlation Id is an optional parameter that helps SharePoint identify a particular hub join request. The requesting site can only have one pending request at a given time.

### Stop sharing an item or a file	
Deletes all links giving access to an item or a file, and removes all people with direct access, except for owners.

### Update file	
Updates the contents of the file specified by the file identifier.

### Update file properties	
Updates the properties stored in columns in a library for the item specified by the item id. To update file contents, use the "Update file" action. When using this with the On-Premises Data Gateway, you may need to manually enter the name of the library to connect to.

### Update item	
Updates an item in a SharePoint list.
