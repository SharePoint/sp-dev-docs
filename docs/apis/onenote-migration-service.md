---
title: Migrating OneNote folders
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
audience: Dev
ms.topic: article
ms.service: sharepoint-online
localization_priority: Priority
ms.collection: 
- SPMigration
- M365-collaboration
search.appverid: MET150
description: "Migrating OneNote folders using the SPO OneNote converting service"
---
# Migrating OneNote folders

When bringing **OneNote** notebooks from outside of SharePoint Online (SPO) into the service, you are required to convert ("shred") the file for it to be supported properly in the service. The OneNote team now has a OneNote converting service in SPO. It is now possible to mark **OneNote** notebooks that are being migrated, to be converted. 

### Example

The following example shows SPMT using the SPO OneNote converting service, which is running in SPO background.  

![OneNote migration process](media/onenote-migration-flow.png)

## Algorithm for checking whether to mark the folder as OneNote folder 
 
For a normal folder, we use the following algorithm to determine whether it should be marked as **OneNote** folder or not. 

If any of the sub-folders or descendant sub-folders are NOT considered a OneNote folder, then this folder is NOT considered as a OneNote folder. 

If any file under this folder has an extension other than the following, it is NOT considered as a OneNote folder. 
 - .one 
 - .onetoc2 
 - .onetemp 

If the folder does not contain one .onetoc2 file, it is NOT considered to be a **OneNote** folder. 
 
## How to mark the OneNote folder 
 
The CSOM will mark the *HTML_x0020_File_x0020_Type* field of the folder on SharePoint Online as *OneNote.Notebook*. 

The marking must be done ONLY on the top-level OneNote folder candidate in the file hierarchy. 

Sample code:

```c#
 
List list = context.web.Lists.GetById({listid});
ListItem item = list.GetItemByUniqueId({itemid});
Item[“HTML_x0020_File_x0020_Type”] = “OneNote.Notebook”;
Item.SystemUpdate();
Context.ExecuteQuery();

```