---
title: "SPO Migration API:  Sharing"
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 6/10/2018
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint-server-itpro
localization_priority: Priority
ms.collection: 
- IT_Sharepoint_Server_Top
ms.custom: 
ms.assetid: 
description: "The per user sharing model in SharePoint relies on both permissions and Shared With data references for an object to be considered shared with an individual."
--- 

# SPO Migration API:  Sharing

## Details on sharing and permissions
 
The per user sharing model in SharePoint relies on both permissions and “Shared With” data references for an object to be considered shared with an individual. If a user has access to content, but no “Shared With” references, they will not see the content show up in their *Shared With Me* view within their OneDrive For Business site.

However, if they are indicated in “Shared With” references but do not have any access to the content, they will either never see the content show up in their *Shared With Me* view within their OneDrive For Business site or when they try to use a link from there it will be denied access. To preserve sharing information, both the permissions and “Shared With” references will need to be correctly set. The permissions can be set at different levels of the content hierarchy using scopes (unique ACLs), that apply to that object and any of its children unless they themselves have unique permissions.
 
Using PRIME, content can be migrated in using SPFile/SPFolder objects with a document library followed by SPListItem objects that reference the imported File/Folder objects. During the ListItem import, the “Shared With” references data can be imported, and then the security can be applied afterward within the same migration package, by setting up scopes (ACLs) and role assignments (ACEs) for the content hierarchy as needed. Permissions migration is performed using the DeploymentRoleAssignments object with RoleAssignment entries representing specific scopes and Assignment entries representing assignments of specific roles to specific principals. Since this code ends up breaking inheritance for content and applying the specified role assignments, it has the same limitations as using other object model approaches to setting permissions in SharePoint.
 
> [!NOTE]
>  As you enumerate the security information on the source, you need to assess if you are at risk of hitting the SharePoint limits for ACL sizing (5000 max ACEs with recommendation of below 500 ACEs) and the maximum number of scopes -- unique ACLs.(There is a hard limit of 50,000 unique ACLs with a recommendation of below 5000 unique ACLs per document library). If you are close to reaching these limits, we recommend that the permission model be simplified on the source before migration.
 
### SharedWithUser column: 
 
SharedWithUsers column (not SharedWithMe) is not  created during list creation, it is created during a share event which causes the specific columns to be ensured. If you share an item on a team site or ODB, you should see it get created. It is technically possible that the column could be explicitly created by code in advance of the migration (or in the migration package if we are allowing list column additions, which we may not be currently supporting), but we recommend against that in the case the SharedWithUsers column is not created correctly. For reference purposes, the SharedWithUsers column has a universal hard coded ID and is exported as the following information (note the SourceID value is the web’s ID):

    <Field ID="{ef991a83-108d-4407-8ee5-ccc0c3d836b9}" Type="UserMulti" DisplayName="$Resources:core,SharedWithFieldDisplayName;" Mult="TRUE" Name="SharedWithUsers" StaticName="SharedWithUsers" Group="_Hidden" Sealed="TRUE" AllowDeletion="FALSE" ReadOnly="TRUE" ShowInDisplayForm="FALSE" ShowInEditForm="FALSE" ShowInListSettings="FALSE" Viewable="FALSE" SourceID="{a785ad58-1d57-4f8a-aa71-77170459bd0d}" Version="1" ColName="int1" RowOrdinal="0"/>
 
However, it might be simplest to just try sharing a single test item to someone from the target list before importing the rest of the migration package, so that the column is set up before you attempt to import the rest of the data. You likely need to verify some data on the target site first, so this could just be an additional preparation step.
 
 
 
#### Example : 
 
Shared to single person
In the case of a file shared to a single person, the following data structure highlighted in yellow would be seen. Note that the bolded values have different values depending on the field/property in question, and although their additional formatting is different between then, that you must ensure the data is consistent between the three fields/properties:
```
<SPObject …>
    <File …>
        <Properties>
            <Property Name="SharedWithUsers" Type="String" Access="ReadWrite" Value="140;#user1" />
            <Property Name="display_urn:schemas-microsoft-com:office:office#SharedWithUsers" Type="String" Access="ReadWrite" Value="user1" />
        </Properties>
    </File>
</SPObject>
<SPObject …>
    <ListItem …>
        <Fields>
            <Field Name="SharedWithUsers" Value="140;# ;UserInfo" FieldId="ef991a83-108d-4407-8ee5-ccc0c3d836b9" />
        </Fields>
   </ListItem>
</SPObject>
 
Shared to multiple people
In the case of sharing with multiple people, note that for the main SharedWithUsers property and field the separator value (“;#”) is used not only between the user identifier and user’s title but also between the individual users, whereas for the display url field, only a semicolon is used to separate the display names.
<SPObject …>
    <File …>
        <Properties>
            <Property Name="SharedWithUsers" Type="String" Access="ReadWrite" Value="140;#user1;#10;#Tenant Admin User" />
            <Property Name="display_urn:schemas-microsoft-com:office:office#SharedWithUsers" Type="String" Access="ReadWrite" Value="user1;Tenant Admin User" />
        </Properties>
   </File>
</SPObject>
<SPObject …>
    <ListItem …>
        <Fields>
            <Field Name="SharedWithUsers" Value="140;# ;#10;# ;UserInfo" FieldId="ef991a83-108d-4407-8ee5-ccc0c3d836b9" />
        </Fields>
   </ListItem>
</SPObject>
```