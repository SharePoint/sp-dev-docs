---
title: Manage Containers in SharePoint Admin Center
description: This article describes how administrator can manage containers in SPAC.
ms.date: 05/21/2024
ms.localizationpriority: high
---
# Manage Containers in SharePoint Admin Center

The organizations that use the SharePoint Embedded applications on their Microsoft 365 (M365) tenants are the consuming tenants and the persona that is responsible for managing these applications on their Microsoft 365 tenancy is the consuming tenant administrator (CTA). Consuming tenant administrators can manage containers through a graphical user interface (GUI) using the [SharePoint Administrator Center](https://go.microsoft.com/fwlink/?linkid=2185219) (SPAC). 

To manage SharePoint Embedded containers, CTA need to be assigned the Microsoft 365 SharePoint Embedded Administrator role. Global Administrators in Microsoft 365 have all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a CTA for SharePoint Embedded. This role is available in both Microsoft Entra and the Microsoft 365 Admin Center.
For information on SharePoint Embedded admin role, see [SPE Admin](https://github.com/cindylay/sp-dev-docs/blob/update-ga/docs/embedded/concepts/admin-exp/adminrole.md).

The following actions are supported in SPAC:

1. View active containers in the tenant
2. View deleted containers in the tenant
3. View detailed information of a container
4. Delete a container
5. Restore a deleted container
6. Permanently deleted a container

Global Admin will also see "Active Containers" and "Deleted Containers" page along with Site administration pages when they log in to SharePoint Admin Center. 

<img width="1243" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/44a7749e-ed3c-41ed-ac18-e4b35730e544">

SharePoint Embedded Admins will only see "Active Containers" and "Deleted Containers" page when they log in to SharePoint Admin Center. 

<img width="1246" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/d4922158-2740-4ec3-8447-069b0d83d5f8">


## Active Containers
The Active Containers page displays all the active containers within the tenant, providing a comprehensive overview and management capabilities. This page includes the following metadata for each container:

1. **Container name :** Name of the container provided by the container owner
2. **Application name :** Name of the SharePoint Embedded application the container belongs to
3. **Publisher name :** The name of the organization that owns the application 
4. **Storage :** The total storage of the files stored in the containers
5. **Owners :** Users assigned the owner role on the container
6. **Sensitivity label :** Name of the label assigned to the container
7. **Created on :** Date and time when the container was created

<img width="1246" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/0531ec13-8f21-4f9e-8c9d-86158dfd0438">


### View details of a containers
The detailed container view provides a deeper dive into container-specific metadata, organized under two tabs:

1. **General:** This panel displays all the general metadata about a container, usage, and configuration settings.
   
<img width="1243" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/d17c14c3-c253-4b62-8d18-4319688b2223">

2. **Membership:** This panel shows the user permissions for different users associated with the container.

> [!IMPORTANT]
> The SharePoint Embedded platform supports four distinct [roles](docs/embedded/concepts/app-concepts/sharing-and-perm.md): Owner, Manager, Writer, and Reader. The SharePoint Embedded application on your tenant may not utilize all four roles and might refer to these roles using different names.
>

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/f4c8c143-01d3-473f-842d-733a5eb6b4d5)

 ## Deleted Containers
The deleted containers page lists all containers in the tenants deleted container collection. It lists the following metadata:
1. Container name
2. Application name
3. Publisher name
4. Storage
5. Owners
6. Sensitivity label
7. Created on
8. **Deleted on :**Date and time when the container was deleted.

<img width="1247" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/54a287b9-232e-4027-af96-a9389b6f4ac4">

 ## Delete a container

> [!Warning]
>
>Deleting a container may cause unexpected issues for the SharePoint Embedded application it belongs to and may interrupt the application's usage. This action should only be performed by admins when absolutely necessary.

Deleting a container can have implications on the functionality of a SharePoint Embedded app, Here are some examples of the potential issues that an application can encounter when deleting a container.

1. **Data Loss:** Deleting a container removes all its content. If the SharePoint Embedded application relies on the data stored within the deleted container, the app might no longer function as expected or might lose access to critical information.

2. **Broken Links:** If the SharePoint Embedded application contains links or references to the deleted container, those links become broken, leading to errors or malfunctioning features within the app.

A container can be deleted from the Active containers page for any business reason by the CTA. By default, the delete button is deactivated. On selecting a container, the delete button is activated. The CTA can then select the delete button.

<img width="1243" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/1fed0fb2-4e95-4a51-a379-91223520ec9b">

This opens a side panel that warns the user about the effect on the associated SPE application due to the deletion of a container as well as inform the user about the restoration policy. The CTA can at this stage either cancel the panel and go back to the active containers page or proceed further with the deleting by clicking on “Delete container”.

<img width="1280" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/9d770bb3-e389-4a70-8db2-3ff85b864595">

 
The selected container is successfully deleted and moved into the deleted containers page.
<img width="1277" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/69f0b5a3-05e0-4855-968c-6c020edfa13f">

**Deleted containers are permanently purged after 93 days unless there is a retention policy applied to the containers**

## Restore a container
A container in the deleted container collection can be restored on the Deleted containers page by selecting the corresponding containers by selecting the "Restore" link

![image](https://github.com/cindylay/sp-dev-docs/assets/132292644/3ce195df-13b3-4152-ad36-6c1ddf253f35)

 
Restoration of the container happens in the background and the status of the same is displayed on the top right corner of the page. Upon successful restoration, the container will be available in the Active Containers page.

<img width="1275" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/2a2a3a2a-1b0c-4791-b24d-f89c3b34afd4">

## Permanently delete a container

> [!Warning]
>
>Deleting a container may cause unexpected issues for the SharePoint Embedded application it belongs to and may interrupt the application's usage. This action should only be performed by admins when absolutely necessary.

The CTA can permanently delete a deleted container from the deleted container collection if they decide to.

The CTA selects the container to be permanently deleted. The “Permanently delete” button is enabled. 

<img width="1277" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/9ced70e2-0da8-4b08-8c8f-becaccf292ee">

Upon clicking the button, a pop-up appears warning the CTA on the action they are performing. If absolutely sure, the CTA can proceed and click on “Delete”. Otherwise the CTA can cancel the action.

<img width="1277" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/36b55434-264a-4891-abc7-087b11920729">

Upon clicking Delete, the container is permanently deleted and the status of the same appears in the top-right corner of the page.Upon successful deletion, the container is permanently removed from the deleted container collection and cannot be restored.

<img width="1279" alt="image" src="https://github.com/cindylay/sp-dev-docs/assets/132292644/d5ef9ceb-d1c0-4f74-b39d-77c21fc3079d">

## Coming Soon
1. Sort containers by created date and storage
2. Filter containers by created date, application name and publisher name
3. Edit sensitivity label of a container
4. Add and remove users to/from a container

