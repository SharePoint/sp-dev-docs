---
title: Register File Storage container Type Application Permissions
description: Register the container type.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Register file storage container type application permissions

In order for a SharePoint Embedded application to interact with containers in a consuming tenant, the container type must first be registered in the consuming tenant. Container type registration happens when the owning application invokes the registration API to specify what permissions can be performed against its container type. The registration API also grants access to other Guest Apps to interact with the owning application's containers. For example, a SharePoint Embedded application can grant permissions to another application--a Guest App so that the Guest App can perform backup operations against its containers.

Since the registration API controls the permissions that a SharePoint Embedded application can perform against the container in the consuming tenant, this call should be one of the first APIs invoked. Failure to do so results in access denied errors when invoking other APIs against the container and/or the content in the containers.

There are no restrictions on how many times the registration API can be invoked. How often the registration API is invoked and when it's invoked is dependent on the SharePoint Embedded application. However, the last successful call to the registration API determines the settings used in the consuming tenant.

> [!NOTE]
> Only the owning application of the container type can invoke the registration API in the consuming tenant.
>
> The registration API is **NOT** a Graph API and can only be invoked using an AppOnly and a cert-based access token. Learn more about [authentication](./auth.md).

## Container type Permissions

The registration API determines what permissions a SharePoint Embedded application can perform against containers and content in containers for the specified container type.

|      Permission      |                                                    Description                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| None                 | Has no permissions to any containers or content of this container type.                                            |
| ReadContent          | Can read content of containers of this container type.                                                             |
| WriteContent         | Can write content to containers for this container type. This permission can't be granted without the ReadContent permission. |
| Create               | Can create containers of this container type.                                                                      |
| Delete               | Can delete containers of this container type.                                                                      |
| Read                 | Can read the metadata of containers of this container type.                                                        |
| Write                | Can update the metadata of containers of this container type.                                                      |
| EnumeratePermissions | Can enumerate the members of a container and their roles for containers of this container type.                    |
| AddPermissions       | Can add members to the container for containers of this container type.                                            |
| UpdatePermissions    | Can update (change roles of) existing memberships in the container for containers of this container type.          |
| DeletePermissions    | Can delete other members (but not self) from the container for containers of this container type.                  |
| DeleteOwnPermissions | Can remove own membership from the container for containers of this container type.                                |
| ManagePermissions    | Can add, remove (including self) or update members in the container roles for containers of this container type.   |
| Full                 | Has all permissions for containers of this container type.                                                         |

## HTTP request

``` http
PUT {RootSiteUrl}/_api/v2.1/storageContainerTypes/{containerTypeId}/applicationPermissions
```

> [!NOTE]
> This is NOT a Graph API
>
> `{RootSiteURL}` is the SharePoint URL of the consuming tenant. For example, https://contoso.sharepoint.com.

### Request body

In the request body, supply a JSON representation of the container type permissions for the SharePoint Embedded applications.

### Response

If successful, this method returns a `200 OK` response code and the container type permissions configured for the SharePoint Embedded applications in the response body.

| HTTP Code | Description |
| :--------: | ----------- |
| 400 | Bad request. |
| 401 | Request lacks valid authentication credentials. |
| 403 | Provided authentication credentials are valid but insufficient to perform the requested operation. Examples: the calling app isn't the owning app of the container type. |
| 404 | Container type doesn't exist. |

## Examples

### Register the container type in a consuming tenant

Register the container type in the consuming tenant and grant full permissions to the Owning Application (AppId 71392b2f-1765-406e-86af-5907d9bdb2ab) for Delegated and AppOnly calls.

#### Request

```json
PUT {RootSiteUrl}/_api/v2.1/storageContainerTypes/{containerTypeId}/applicationPermissions
Content-Type: application/json

{
  "value": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegated": ["full"],
      "appOnly": ["full"]
    }
  ]
}
```

#### Response

```json
HTTP/1.1 200 OK
Content-type: application/json

{
  "value": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegated": ["full"],
      "appOnly": ["full"]
    }
  ]
}
```

### Register the container type in a consuming tenant with permissions for a Guest App

Register the container type in the consuming tenant and grant full permissions to the Owning Application (AppId 71392b2f-1765-406e-86af-5907d9bdb2ab) for Delegated and AppOnly calls. In addition, grant a Guest App (AppId 89ea5c94-7736-4e25-95ad-3fa95f62b6) read and write permissions only for Delegated calls.

#### Request

```json
PUT /storagecontainerTypes/{containerTypeId}/applicationPermissions
Content-Type: application/json

{
  "value": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegated": ["full"],
      "appOnly": ["full"]
    },
    {
      "appId": "89ea5c94-7736-4e25-95ad-3fa95f62b6",
      "delegated": [read", "write"],
      "appOnly": ["none"]
    }
  ]
}
```

#### Response

```json
HTTP/1.1 200 OK
Content-type: application/json

{
  "value": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegated": ["full"],
      "appOnly": ["read"]
    },
    {
      "appId": "89ea5c94-7736-4e25-95ad-3fa95f62b6",
      "delegated": ["read", "write"],
      "appOnly": ["none"]
    }
  ]
}
```
