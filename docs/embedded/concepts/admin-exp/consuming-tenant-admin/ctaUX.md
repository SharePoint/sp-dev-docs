# SharePoint Admin Center for container management

The organizations that use the SharePoint Embedded applications on their Microsoft 365 (M365) tenants are the consuming tenants and the persona that is responsible for managing these applications on their Microsoft 365 tenancy is the consuming tenant administrator (CTA). Consuming tenant administrators can manage containers through a graphical user interface (GUI) using the SharePoint Administrator Center (SPAC). 

To manage SharePoint Embedded containers, tenant administrators need to be assigned the Microsoft 365 SharePoint Embedded Administrator role. Global Administrators in Microsoft 365 have all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Consuming Tenant Admin for SharePoint Embedded. This role is available in both Microsoft Entra and the Microsoft 365 Admin Center.
For information on SPE admin role, see [SPE Admin](https://github.com/cindylay/sp-dev-docs/blob/update-ga/docs/embedded/concepts/admin-exp/adminrole.md).

The following actions are supported in SPAC:

1. View active containers in the tenant
2. View deleted containers in the tenant
3. View detailed information of a container
4. Soft delete a container
5. Restore a deleted container
6. Purge a deleted container

The following is view of a Global Admin

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/7fc0e225-5bc1-4772-bd93-13e3f4d72708)

The following is the view of a SPE Admin

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/ab6cba19-70d2-4385-9ab9-e97c23ad1ad1)


> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to get access to container management on SPAC.
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
5. **Owners :** Users assigned the owner role on the container
6. **Sensitivity label :** Name of the label assigned to the container
7. **Created on :** Date and time when the container was created

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/0ff42ea0-832b-4618-8da1-ed30365786fd)


### View details of a containers
The detailed container view provides a deeper dive into container-specific metadata, organized under two tabs:

1. **General:** Displays all the general metadata about a container, such as its purpose, usage, and configuration settings.
2. **Membership:** Shows the user permissions for different users associated with the container. 

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/cd85c8dc-31be-46ee-9e8c-5e1318496359)

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/f4c8c143-01d3-473f-842d-733a5eb6b4d5)


  
## Deleted Containers
The deleted containers page lists down all the soft deleted containers present in the admin’s tenant. It lists the following metadata:
1. Container name
2. Application name
3. Publisher name
4. Storage
5. Owners
6. Sensitivity label
7. Created on
8. **Deleted on :**Date and time when the container was soft deleted.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/614c9083-4d3f-40ec-9e77-dcb9ab31fdea)


 ## Soft delete a container
Deleting a container can have implications on the functionality of a SharePoint Embedded app, Here are some examples of the potential issues that an application can encounter when deleting a container.

Data Loss: Deleting a container removes all its content. If the SharePoint Embedded application relies on the data stored within the deleted container, the app might no longer function as expected or might lose access to critical information.
Broken Links: If the SharePoint Embedded application contains links or references to the deleted container, those links become broken, leading to errors or malfunctioning features within the app.
Permissions Issues: Deleting a container can affect permissions settings. If the SharePoint Embedded app relies on specific permissions granted to the deleted container, it might encounter permission issues and fail to function properly.
Therefore, it's essential to carefully consider the consequences of deleting a container and ensure that appropriate measures are taken to mitigate any potential issues.

A container can be soft deleted from the Active containers page for any business reason by the CTA. By default, the delete button is deactivated. On selecting a container, the delete button is activated. The CTA can then select the delete button.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/0a649c5e-a39d-4822-b203-0dbb7f97b1ee)


 This opens a side panel that warns the user about the effect on the associated SPE application due to the deletion of a container as well as inform the user about the restoration policy. The CTA can at this stage either cancel the panel and go back to the active containers page or proceed further with the deleting by clicking on “Delete container”.

 ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/5f4d0ad0-8ca8-4a78-8b33-a04bc12b9d7b)

 
The selected container is successfully soft deleted and moved into the deleted containers page.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/175467e8-1154-40f4-bf3b-ee14718d81ae)

**Any soft deleted container is retained for 93 days post which it is permanently deleted**

## Restore a container
A soft-deleted container can be restored on the Deleted containers page by selecting the container to be restored. This activates the restore button which is by default deactivated. 

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/87b3480b-d315-4898-ae09-f03939fb901c)

The CTA can then select Restore

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/96bd77d7-189d-425a-a638-61b95484b583)
 
The restoring of the container happens in the background and the status of the same is displayed on the top right corner of the page.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/1220473d-4d30-460e-a43f-f20b068483fc)

 
On successfully restoring, “Container restored” message is shown on the top right corner of the page.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/b58d3e8f-b79d-406b-9b7b-c862dd58776b)

 
## Hard delete (purge) a container

> [!Warning]
>
>Deleting a container may cause unexpected issues for the SharePoint Embedded application the container belongs to and may interrupt usage of the application.

The CTA can permanently delete (purge) a soft-deleted container if they decide to.

The CTA selects the container to be permanently deleted. The “Permanently delete” button is enabled. 

 ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/9d615997-ac76-41b1-b414-fbb5dfe3f6b0)

On clicking the button, a pop-up appears warning the CTA on the action they are performing. If absolutely sure, the CTA can proceed and click on “Delete”. Else the CTA can cancel the action.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/0f165644-be3c-4538-944d-e2d5b15cca5d)

 
On clicking Delete, the container is permanently deleted in the backend and the status of the same appears in the top-right corner of the page.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/bd53df0c-dfd9-4316-8700-b3b84dd125e1)
 
On successful deletion, the container is permanently deleted.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/4cedfce6-1b41-4525-a78d-c42f6eabdaf5)

` 
## Coming Soon
1. Sort containers by created date and storage
2. Filter containers by created date, application name and publisher name
3. Edit sensitivity label of a container
4. Add users to a container
5. Reassign user roles in a containers
6. Remove users from a container

