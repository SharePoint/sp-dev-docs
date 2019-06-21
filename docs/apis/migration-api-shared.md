---
title: "SPO Migration API: Migrating shared files and folders"
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.topic: article
description: "Migrating shared files and folders using item references."
--- 


# Migrating shared files and folders

## Implementation

As documented in the Migration PRIME API, apply sharing metadata by using **item references**.  The older method of using the *Shared With* column should not be used any further.

For an item that is shared with a user, add the **SharedWithEvents** block within its *ListItem* block. The **SharedWithEvents** block represents an occurrence when the item was shared, including the user who did the sharing (SharingInitatiorId and SharedById), as well as the time of sharing (SharedTime). 

Add a SharedWithMember block for each person that the item was shared with during that occurrence.  All user ids must be valid entries in the UserGroup.xml.

```XML
<ListItem ParentWebId="79f949a2-f38b-40e3-91ef-ffdbe6214bef" 
Id="a4bbc3c7-7ef1-47ef-8451-ea8e1a69cb88" 
TimeLastModified="2018-11-06T22:43:49" 
TimeCreated="2018-11-06T22:25:32" 


<SharedWithEvents> 
<SharedWithEvent SharedTime="2018-10-29T04:06:09.1385321Z" 
SharingInitiatorId="2" 
SharedById="2"> 
<SharedWithMembers> 
<SharedWithMember SharedWithId="1"/> 
<SharedWithMember SharedWithId="2"/> 
</SharedWithMembers> 
</SharedWithEvent> 
</SharedWithEvents> 
</ListItem> 

```
## Best Practices
### The basics
For each file or folder that was shared with a user in the source, create an item reference for that item in the recipient’s OneDrive. Every item reference created will appear in the user’s *Shared with Me* view in OneDrive. Remember to give the user permission to access the item as well.

### Inheritance
Be sure to use inheritance correctly for sharing. When creating an item reference for a file or folder, check if its parent folder (or higher) already has an item reference created for it. If so, do not create another one for the child item. This will prevent users from seeing duplicate items in their *Shared with Me* view and reduce migration and service load as well. 

**Example:** When a folder is shared and the recipient can access all of the folder’s contents, an item reference should *only* be created for the shared folder -- not for its contents. The only item that should appear in the recipients *Shared with Me* is the shared folder.

This same guidance should also be used for permissions (ACLs). Only apply permissions on a child item where the required permissions are different than its parent item. Make sure not to exceed 5000 unique ACLs on a site.  It may be useful to check how many ACLs you create and warn the user prior to migration. There is also a hard limit of 50,000 unique ACL's that will be enforced. If you are close to reaching the 5000 limits, we recommend that the permission model be simplified on the source before migration.

### Sharing with groups
For items shared with a group of individuals in the source, the content may be migrated into a shared library (eg. a team site) in which all of those individuals are given access.

### Anonymous sharing links
Do not migrate anonymous sharing links from the source; this is not useful as it’s not possible to know which users used that link in the source. Users should evaluate whether anonymous links are still needed and create new ones on the destination if so.

### Sharing with external users
Before starting migration, you must ensure all users are provisioned in the customer tenant. For users external to the tenant (ie. from a different organization), provision them as B2B collaboration users in Azure Active Directory. This is done in the Azure portal following these steps: 

- [Add Azure Active Directory B2B collaboration users in the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/b2b/add-users-administrator). 

Once the external users are provisioned, share files and folders with them during migration the same way as internal users.

### Permission and Sharing
The per user sharing model in SharePoint relies on both permissions and “Shared With” data references for an object to be considered shared with an individual. If a user has access to content, but no “Shared With” references, they will not see the content show up in their Shared With Me view within their OneDrive For Business site.

However, if they are indicated in “Shared With” references but do not have any access to the content, they will either never see the content show up in their Shared With Me view within their OneDrive For Business site or when they try to use a link from there it will be denied access. To preserve sharing information, both the permissions and “Shared With” references will need to be correctly set. The permissions can be set at different levels of the content hierarchy using scopes (unique ACLs), that apply to that object and any of its children unless they themselves have unique permissions.

Using PRIME, content can be migrated by using SPFile/SPFolder objects with a document library followed by SPListItem objects that reference the imported File/Folder objects. During the ListItem import, the “Shared With” references data can be imported, and then the security can be applied afterward within the same migration package, by setting up scopes (ACLs) and role assignments (ACEs) for the content hierarchy as needed. 

Permissions migration is performed using the DeploymentRoleAssignments object with RoleAssignment entries representing specific scopes and Assignment entries representing assignments of specific roles to specific principals. Since this code ends up breaking inheritance for content and applying the specified role assignments, it has the same limitations as using other object model approaches to setting permissions in SharePoint.
