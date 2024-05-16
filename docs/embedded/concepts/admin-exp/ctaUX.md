# SharePoint Admin Center for container management

Tenant administrators can manage containers through a graphical user interface (GUI) using the SharePoint Administrator Center (SPAC). 

To manage SharePoint Embedded containers, tenant administrators need to be assigned the Microsoft 365 SharePoint Embedded Administrator role. Global Administrators in Microsoft 365 have all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Consuming Tenant Admin for SharePoint Embedded. This role is available in both Microsoft Entra and the Microsoft 365 Admin Center.

The following actions are supported in SPAC:

1. View active containers in the tenant
2. View deleted containers in the tenant
3. View detailed information of a container
4. Soft delete a container
5. Restore a deleted container
6. Purge a deleted container

[Add of a Global Admin View]
[Add image of SPE admin View]

 [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded Container commandlets mentioned in this article.
> 
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
> 
> If you are a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

## Active Containers
The Active Containers page displays all the active containers within the tenant, providing a comprehensive overview and management capabilities. This page includes the following metadata for each container:

1. **Container name :** Name of the container provided by the container owner
2. **Application name :** Name of the SharePoint Embedded application the container belongs to
3. **Publisher name :** The name of the organization that owns the application 
4. **Storage :** The total storage of the files stored in the containers
5. **Owners :** Users assigned the owner role
6. **Sensitivity label :** Name of the label assigned to the container
7. **Created on :** Date and time when the container was created

### View details of a containers
The detailed container view provides a deeper dive into container-specific metadata, organized under two tabs:

1. **General:** Displays all the general metadata about a container, such as its purpose, usage, and configuration settings.
2. **Membership:** Shows the user permissions for different users associated with the container. 
  
## Deleted Containers
The deleted containers page lists down all the soft deleted containers present in the admin’s tenant. It lists the following metadata:
1. Container name
2. Application name
3. Publisher name
4. Storage
5. Owners
6. Sensitivity label
7. Created on
8. Deleted on

 ## Soft delete a container
Deleting a container can have implications on the functionality of a SharePoint Embedded app, Here are some examples of the potential issues that an application can encounter when deleting a container.

Data Loss: Deleting a container removes all its content. If the SharePoint Embedded application relies on the data stored within the deleted container, the app might no longer function as expected or might lose access to critical information.
Broken Links: If the SharePoint Embedded application contains links or references to the deleted container, those links become broken, leading to errors or malfunctioning features within the app.
Permissions Issues: Deleting a container can affect permissions settings. If the SharePoint Embedded app relies on specific permissions granted to the deleted container, it might encounter permission issues and fail to function properly.
Therefore, it's essential to carefully consider the consequences of deleting a container and ensure that appropriate measures are taken to mitigate any potential issues.
A container can be soft deleted from the Active containers page for any business reason by the CTA. By default, the delete button is deactivated. On selecting a container, the delete button is activated. The CTA can then select the delete button.

 This opens a side panel that warns the user about the effect on the associated SPE application due to the deletion of a container as well as inform the user about the restoration policy. The CTA can at this stage either cancel the panel and go back to the active containers page or proceed further with the deleting by clicking on “Delete container”.
 
The selected container is successfully soft deleted and moved into the deleted containers page.
Any soft deleted container is retained for 93 days post which it is permanently deleted

## Restore a container
A soft-deleted container can be restored on the Deleted containers page by selecting the container to be restored. This activates the restore button which is by default deactivated. 
` 
The CTA can then select Restore
 
The restoring of the container happens in the background and the status of the same is displayed on the top right corner of the page.
 
On successfully restoring, “Container restored” message is shown on the top right corner of the page.
 
## Hard delete (purge) a container
Warning

Deleting a container may cause unexpected issues for the SharePoint Embedded application the container belongs to and may interrupt usage of the application.
The CTA can permanently delete (purge) a soft-deleted container if they decide to.
The CTA selects the container to be permanently deleted. The “Permanently delete” button is enabled. 
 
On clicking the button, a pop-up appears warning the CTA on the action they are performing. If absolutely sure, the CTA can proceed and click on “Delete”. Else the CTA can cancel the action.
 
On clicking Delete, the container is permanently deleted in the backend and the status of the same appears in the top-right corner of the page.
 
On successful deletion, the container is permanently deleted.
` 
## Coming Soon
1. Sort containers on Active containers page on the basis of created date, storage
2. Filter containers on Active containers page on the basis of created date, application name, publisher name
3. Edit sensitivity label of a container
4. Add users to a container
5. Reassign user roles in a containers
6. Remove users from a container

