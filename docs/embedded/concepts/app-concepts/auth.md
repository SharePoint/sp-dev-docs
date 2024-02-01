---
title: Authentication and Authorization with SharePoint Embedded
description: This article describes the Authentication process for SharePoint Embedded Applications
ms.date: 11/28/2023
ms.localizationpriority: high
---

# Authentication and Authorization with SharePoint Embedded

### SharePoint Embedded Workflow

1. An app creator (enterprise or ISV) builds an app that uses SharePoint Embedded containers
    - App created in Microsoft Entra ID
    - Container Type creation requested and ContainerTypeID received to develop app
1. A subscriber (Consuming Tenant) installs the app into a Microsoft 365 tenant
1. The app instantiates a container
1. The app uses Graph APIs to manage files and folders (DriveItems) in the Container (Drive)
1. The app can link to the webUrl property of DriveItems to view, edit and co-author Office document types in Office Online (via Web browser)
1. The Consuming Tenant security and compliance (S & C) admins can now run Microsoft 365 S & C workflows against the container

### App-Only vs Delegated

SharePoint Embedded supports both App-Only and Delegated (App+User) calls for enterprise applications. App-only calls allow applications to utilize the SharePoint Embedded platform to manage containers without a signed-in user; while Delegated calls allow applications to manage containers via the SharePoint Embedded platform on behalf of the signed-in users.

Both App-Only and Delegated SharePoint Embedded from trusted (or private) client applications are allowed. SharePoint Embedded calls to create containers, either App-Only or Delegated, from public clients are blocked by SharePoint Embedded authorization management.

### User Roles

Any user accessing a container must be a member of the container. Membership to a container is categorized into four roles as outlined below. When adding a user to a container, the user must be assigned to one of these roles.

> [!NOTE]
> The calling user creating a new container via delegated calls is automatically assigned the owner role.

|  Role   |                                                                                 Description                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reader  | This role allows the user to read the properties and the contents of the container.                                                                                         |
| Writer  | This role has all permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager | This role has all permissions a Writer has, plus the permission to manage membership of the container.                                                                      |
| Owner   | This role has all permissions a Manager has, plus the permission to delete containers.                                                                                      |

### ContainerTypeID

Operation calls to SharePoint Embedded are authorized based on both the AppID of the calling application and targeting ContainerTypeID. As part of the SharePoint Embedded onboarding process, SharePoint Embedded partners need to inform the SharePoint Embedded platform the set of operations to authorize for the AppID against the specified ContainerTypeID. Once configured, the AppID is authorized for the set of operations against all container instances of the specific container type.

### Authorization

Authorization for SharePoint Embedded calls is a function of the AppID and ContainerTypeID for App-Only calls; and a function of AppID, ContainerTypeID and User Roles for Delegated (App+User) calls.

For App-only calls, SharePoint Embedded authorization is determined by the configured permissions tied to the AppID-ContainerTypeID pair. For Delegated calls, SharePoint Embedded authorization is the intersection of the application’s permissions against a container type and the permissions granted to the user’s roles.

Consider the examples below with the assumptions:

1. App1 has Create, Read, and Write permissions to ContainerType1; and...
1. UserA is a reader for ContainerX of ContainerType1.

|                                Example                                | Result  |                                   Reason                                   |
| --------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------- |
| App1 attempts an App-Only call to write a container of ContainerType1 | Allowed | App1 has the permission to write to containers of ContainerType1           |
| App1 attempts to delete a container of ContainerType1                 | Denied  | App1 doesn't have the permission to delete containers of ContainerType1.  |
| User A makes a delegated request to read from ContainerX on App1      | Allowed | Both UserA and App1 have permissions to read containers of ContainerType1. |
| UserA makes a delegated request to write to ContainerX on App1        | Denied  | UserA's role as a reader doesn't grant them write access                  |
