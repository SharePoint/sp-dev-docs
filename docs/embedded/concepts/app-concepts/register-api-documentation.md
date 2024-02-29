---
title: Register File Storage Container Type Application Permissions
description: Register the Container Type
ms.date: 02/26/2024
ms.localizationpriority: high
---

# Register File Storage Container Type Application Permissions

TODO: Explain Registration API purpose
- called in Consuming Tenant
- Can be called 1+ times
- container.selected scope adds entry in enterprise applications


This registers the `fileStorageContainerType` within the Consuming Tenant.  

The calling app's identity from token will be used to determine the owning tenant of the app and validate the ownership of the container type. Only the owning app can register container type app permissions.

>>  Note this API must be called with a cert-based access token
TODO: Expand on this certificate based auth

## Container.Selected Scope 

This API uses the Container.Selected scope. To call this API you must configure this scope in your App manifest.  

TODO: This is NOT a Graph API, clearly state this is a SharePoint API 

>>  Note that other SharePoint Embedded Graph APIs run with the FileStorageContainer.Selected Scope on Microsoft Graph 


### Configure your App Manifest

In your app manifest you will need to: 

Select Manage > Manifest from the left-hand navigation. Locate the property requiredResourceAccess and edit it so it looks like the following JSON:

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


## Required Permissions
|      ScopeName     |     Type    |                                                                                                                                Description                                                                                                                                |
|:------------------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Container.Selected | Application | Allows the application to utilize the file storage container platform to manage containers without a signed in user. The specific file storage containers and the permissions granted to them will be configured in Microsoft 365 by the developer of each container type. |

> You must configure the `Container.Selected` scope in your App manifest

## HTTP request

```http
PUT {RootSiteUrl}/_api/v2.1/storageContainerTypes/{containerTypeId}/applicationPermissions
```
TODO: Explain RootSiteUrl, 

### REST Operation example: register permissions for a certain container type

## Request
```json
PUT /storageContainerTypes/{containerTypeId}/applicationPermissions
Content-Type: application/json

{
  "value": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegated": ["read", "write"],
      "appOnly": ["read"]
    },
    {
      "appId": "89ea5c94-7736-4e25-95ad-3fa95f62b6",
      "delegated": ["none"],
      "appOnly": ["full"]
    }
  ]
}

```

## Response
```json
HTTP/1.1 200 OK
Content-type: application/json

{
  "value": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegated": ["read", "write"],
      "appOnly": ["read"]
    },
    {
      "appId": "89ea5c94-7736-4e25-95ad-3fa95f62b6",
      "delegated": ["none"],
      "appOnly": ["full"]
    }
  ]
}


```
| HTTP Code |                                                                               Description                                                                              |
|:---------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 400       | Bad request.                                                                                                                                                           |
| 401       | Request lacks valid authentication credentials.                                                                                                                        |
| 403       | Provided authentication credentials are valid but insufficient to perform requested operation. Examples: the calling app is not the owning app of the container type.  |
| 404       | Container type does not exist.                                                                                                                                         |



TODO: Guest Apps Permissions (same article)