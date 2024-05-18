---
title: SharePoint Embedded Authentication and Authorization
description: This article describes the authentication and authorization model for SharePoint Embedded applications.
ms.date: 11/28/2023
ms.localizationpriority: high
---

# SharePoint Embedded Authentication and Authorization

To use SharePoint Embedded (SPE), your application needs to use Microsoft Graph. Learn more about [Microsoft Graph authentication and authorization](https://learn.microsoft.com/en-us/graph/auth/auth-concepts?view=graph-rest-1.0).

## Definitions

These are important definitions to take into account to understand SPE authentication and authorization.

SharePoint Embedded application
: A Microsoft Entra ID application registration. As an owner or guest application to a container type, it will have access to container of that container type.  

Container type
: A [container type](containertypes.md) is a SharePoint Embedded resource that defines the relationship, access privileges, and billing accountability between a SharePoint Embedded application and a set of containers. Also, the container type defines behaviors on the set of containers.

Owning Tenant
: The Microsoft Entra ID tenant where a container type is defined.

Consuming Tenant
: The Microsoft Entra ID tenant where a container type is used. Only a consuming tenant may have containers of such container type. A same Microsoft Entra ID tenant may be both owning and consuming tenant of a given container type.

## Pre-Requisites

* A Microsoft Entra ID application registration. See [register an application](https://learn.microsoft.com/en-us/graph/auth-register-app-v2?view=graph-rest-1.0).
* Your Microsoft Entra ID tenant has a Microsoft 365 subscription

## Authorization

### Using Microsoft Graph for SharePoint Embedded

SPE supports both user delegated and application only access via Microsoft Graph. These are the permissions that your application needs to request based on the type of access:
* Delegated access require the `FileStorageContainer.Selected` scope
* App-only access rquire the `FileStorageContainer.Selected` app role

> [!IMPORTANT] 
> The scope and app role above authorizes your Microsoft Entra ID application to call Microsoft Graph for SPE on a given tenant. However, your application must be granted permissions to a Container Type to effectively access Containers of that type.

#### Container Type registration

While SPE is used exclusively via Microsoft Graph, there is one exception: registering a Container Type on a consuming tenant. Read more about [Container Types](/containertypes.md).

To [register a Container Type](register-api-documentation.md), your application must request the `Container.Selected` app role on the `SharePoint` resource, NOT on Microsoft Graph.

|      ScopeName     |     Type    |                                                                                                                                Description                                                                                                                                |
|:------------------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Container.Selected | Application | Allows the application to utilize the file storage container platform to manage containers without a signed in user. The specific file storage containers and the permissions granted to them are configured in Microsoft 365 by the developer of each container type. |

#### Configure your app manifest

In the Azure Portal, navigate to your App Registration. Select **Manage > Manifest** from the left-hand navigation. Locate the property `requiredResourceAccess` and edit it so it includes the following entries:

```json
"requiredResourceAccess": [
  {
    "resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
    "resourceAccess": [
      {
        "id": "4d114b1a-3649-4764-9dfb-be1e236ff371",
        "type": "Scope"
      },
      {
        "id": "19766c1b-905b-43af-8756-06526ab42875",
        "type": "Role"
      }
    ]
  },
  {
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
      {
        "id": "085ca537-6565-41c2-aca7-db852babc212",
        "type": "Scope"
      },
      {
        "id": "40dc41bc-0f7e-42ff-89bd-d9516947e474",
        "type": "Role"
      }
    ]
  }
],
```


### Container Type permissions

Container Type permissions are granted to a Microsoft Entra ID application via [Container Type registration](/register-api-docuemntation.md).

|      Permission      |                                                    Description                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| None                 | Has no permissions to any Containers or content of this Container Type.                                            |
| ReadContent          | Can read content of Containers of this Container Type.                                                             |
| WriteContent         | Can write content to Containers for this Container Type. This can't be granted without the ReadContent permission. |
| Create               | Can create Containers of this Container Type.                                                                      |
| Delete               | Can delete Containers of this Container Type.                                                                      |
| Read                 | Can read the metadata of Containers of this Container Type.                                                        |
| Write                | Can update the metadata of Containers of this Container Type.                                                      |
| EnumeratePermissions | Can enumerate the members of a Container and their roles for Containers of this Container Type.                    |
| AddPermissions       | Can add members to the Container for Containers of this Container Type.                                            |
| UpdatePermissions    | Can update (change roles of) existing memberships in the Container for Containers of this Container Type.          |
| DeletePermissions    | Can delete other members (but not self) from the Container for Containers of this Container Type.                  |
| DeleteOwnPermissions | Can remove own membership from the Container for Containers of this Container Type.                                |
| ManagePermissions    | Can add, remove (including self) or update members in the Container roles for Containers of this Container Type.   |
| Full                 | Has all permissions for Containers of this Container Type.                                                         |


### Container permissions

Any user accessing a Container must be a member of the Container. Membership to a Container is categorized into four roles. These roles can be granted to users or groups, and they will define the access level that such users or groups will have on a given Container.

Container permissions only apply for delegated access and not for app-only access, because a user context is required.

> [!IMPORTANT]
> The calling user creating a new container via delegated calls is automatically assigned the Owner role.

|  Role   |                                                                                 Description                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reader  | This role allows the user to read the properties and the contents of the container.                                                                                         |
| Writer  | This role has all permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager | This role has all permissions a Writer has, plus the permission to manage membership of the container.                                                                      |
| Owner   | This role has all permissions a Manager has, plus the permission to delete containers.     

### Example of SPE Authorization call

Consider the following examples with the assumptions:

1. App1 has Create, Read, and Write permissions to ContainerType1; and...
1. UserA is a reader for ContainerX of ContainerType1.

|                                Example                                | Result  |                                   Reason                                   |
| --------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------- |
| App1 attempts an App-Only call to write a container of ContainerType1 | Allowed | App1 has the permission to write to containers of ContainerType1           |
| App1 attempts to delete a container of ContainerType1                 | Denied  | App1 doesn't have the permission to delete containers of ContainerType1.  |
| User A makes a delegated request to read from ContainerX on App1      | Allowed | Both UserA and App1 have permissions to read containers of ContainerType1. |
| UserA makes a delegated request to write to ContainerX on App1        | Denied  | UserA's role as a reader doesn't grant them write access                  |


## Old Content

### SharePoint Embedded Workflow

1. An app creator (an enterprise or Independent Software Vendor-ISV) builds an app that uses SharePoint Embedded containers
    - App created in Microsoft Entra ID
    - Container Type creation requested and ContainerTypeID received to develop the app
1. A subscriber (Consuming Tenant) installs the app into a Microsoft 365 tenant
1. The app instantiates a container
1. The app uses Graph APIs to manage files and folders (DriveItems) in the Container (Drive)
1. The app can link to the `webUrl` property of DriveItems to view, edit, and coauthor Office document types in Office Online (via Web browser)
1. The Consuming Tenant security and compliance (S & C) admins can now run Microsoft 365 S & C workflows against the container

### ContainerTypeID

Operation calls to SharePoint Embedded are authorized based on both the AppID of the calling application and targeting ContainerTypeID. As part of the SharePoint Embedded onboarding process, SharePoint Embedded partners need to inform the SharePoint Embedded platform the set of operations to authorize for the AppID against the specified ContainerTypeID. Once configured, the AppID is authorized for the set of operations against all container instances of the specific container type.

