---
title: SharePoint Embedded Authentication and Authorization
description: This article describes the authentication and authorization model for SharePoint Embedded applications.
ms.date: 11/28/2023
ms.localizationpriority: high
---

# SharePoint Embedded Authentication and Authorization

SharePoint Embedded (SPE) works on top of Microsoft Graph. To learn more about Microsoft Graph authentication and authorization, [read here](https://learn.microsoft.com/en-us/graph/auth/auth-concepts?view=graph-rest-1.0).
SPE supports both user delegated and application only access.

## Authorization

### Pre-Requisites

* A Microsoft Entra ID application registration
* Your tenant has a Microsoft 365 subscription

> [!NOTE] 
> SharePoint Embedded blocks public clients from making API calls to create containers.

### Using Microsoft Graph for SharePoint Embedded

* Delegated access to SPE APIs require the `FileStorageContainer.Selected` scope
* App-only access to SPE APIs rquire the `FileStorageContainer.Selected` app role

The scope and app role above authorizes your Microsoft Entra ID application to call the SPE API endpoints on a given tenant.

#### Configure your app manifest

In the Azure Portal, navigate to your App Registration. Select **Manage > Manifest** from the left-hand navigation. Locate the property `requiredResourceAccess` and edit it so it looks like the following JSON:

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

> [!NOTE] 
> Your application being granted the permissions above (delegated or app-only) is not enough to get access to SPE Containers. Your application must be granted permissions to a Container Type.

### Container Type permissions

TBD: Describe Container Type permissions

### Container permissions

Any user accessing a Container must be a member of the Container. Membership to a Container is categorized into four roles. These roles can be granted to users or groups, and they will define the access level that such users or groups will have on a given Container.

Container permissions only apply for delegated access and not for app-only access, because a user context is required.

> [!NOTE]
> The calling user creating a new container via delegated calls is automatically assigned the owner role.

|  Role   |                                                                                 Description                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reader  | This role allows the user to read the properties and the contents of the container.                                                                                         |
| Writer  | This role has all permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager | This role has all permissions a Writer has, plus the permission to manage membership of the container.                                                                      |
| Owner   | This role has all permissions a Manager has, plus the permission to delete containers.     


### Container Type registration

While SPE is accessed via Microsoft Graph, there is one exception: registering a Container Type into a consuming tenant. Read more about [Container Type](/containertypes.md).

To [register a Container Type](register-api-documentation.md), your application must request the `Container.Selected` app role on the `SharePoint` resource.

|      ScopeName     |     Type    |                                                                                                                                Description                                                                                                                                |
|:------------------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Container.Selected | Application | Allows the application to utilize the file storage container platform to manage containers without a signed in user. The specific file storage containers and the permissions granted to them are configured in Microsoft 365 by the developer of each container type. |

> [!IMPORTANT]
> You must configure the `Container.Selected` scope in your App manifest
                                                                                 |

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

