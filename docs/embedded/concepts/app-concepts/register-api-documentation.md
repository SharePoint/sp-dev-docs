---
title: Register File Storage Container Type Application Permissions
description: Register the Container Type
ms.date: 03/05/2024
ms.localizationpriority: high
---

# Register File Storage Container Type Application Permissions

In order for a SharePoint Embedded application to be able interact with Containers in a Consuming Tenant, the Container Type must first be registered in the Consuming Tenant. This is achieved by the owning application invoking the registration API that specifies what permissions can be performed against its Container Type. The registration API also provides the ability to grant access to other Guest Apps that may also want to also interact with its Containers. For example, a SharePoint Embedded application can grant permissions to another application so that it can perform backup operations against its Containers.

As the registration API controls the permissions that a SharePoint Embedded application can perform against the Container in the Consuming Tenant, this should be one of the first APIs invoked. Failure to do so will result in access denied errors when invoking other APIs against Container and/or the content in the Containers.

There are no restrictions on how many times the registration API can be invoked. How often the registration API is invoked and when it is invoked is dependent on the SharePoint Embedded application. Just be aware  that the last successful invoke and associated settings will be the settings persisted and hence used in the Consuming Tenant.

> [!NOTE]
> Only the Owning Application of the Container Type can invoke the registration API in the Consuming Tenant.
> 
> The registration API is **NOT** a Graph API and can only be invoked using an AppOnly and a cert-based access token. Learn more about [authentication](./auth.md).


## Container Type Permissions

The registration API determines what permissions a SharePoint Embedded application can perform against Containers and Content in Containers for the specified Container Type.

| Permission | Description |
| ---------- | ----------- |
| None | Has no permissions to any Containers or content of this Container Type. |
| ReadContent| 	Can read content of Containers of this Container Type. |
| WriteContent | Can write content to Containers for this Container Type. This can't be granted without the ReadContent permission. |
| Create | Can create Containers of this Container Type. |
| Delete | Can delete Containers of this Container Type. |
| Read | Can read the metadata of Containers of this Container Type. |
| Write |	Can update the metadata of Containers of this Container Type. |
| EnumeratePermissions | Can enumerate the members of a Container and their roles for Containers of this Container Type. |
| AddPermissions | Can add members to the Container for Containers of this Container Type. |
| UpdatePermissions | Can update (change roles of) existing memberships in the Container for Containers of this Container Type. |
| DeletePermissions |	Can delete other members (but not self) from the Container for Containers of this Container Type. |
| DeleteOwnPermissions | Can remove own membership from the Container for Containers of this Container Type. |
| ManagePermissions |	Can add, remove (including self) or update members in the Container roles for Containers of this Container Type. |
| Full | Has all permissions for Containers of this Container Type. |



## HTTP request

 
``` http
PUT {RootSiteUrl}/_api/v2.1/storageContainerTypes/{containerTypeId}/applicationPermissions
```

> [!NOTE]
> This is NOT a Graph API
>
> `{RootSiteURL}` is the SharePoint URL of the Consuming Tenant. For example, https://contoso.sharepoint.com.

### Request body

In the request body, supply a JSON representation of the Container Type permissions for the SharePoint Embedded applications.

### Response

If successful, this method returns a `200 OK` response code and the Container Type permissions configured for the SharePoint Embedded applications in the response body.

| HTTP Code | Description |
| :--------: | ----------- |
| 400 | Bad request. |
| 401 | Request lacks valid authentication credentials. |
| 403 | Provided authentication credentials are valid but insufficient to perform requested operation. Examples: the calling app is not the owning app of the container type. |
| 404 | Container type does not exist. |


## Examples

### Register the Container Type in a Consuming Tenant

Register the Container Type in the Consuming Tenant and grant full permssions to the Owning Application (AppId 71392b2f-1765-406e-86af-5907d9bdb2ab) for Delegated and AppOnly calls.

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

### Register the Container Type in a Consuming Tenant with permissions for a Guest App

Register the Container Type in the Consuming Tenant and grant full permssions to the Owning Application (AppId 71392b2f-1765-406e-86af-5907d9bdb2ab) for Delegated and AppOnly calls. In addition grant a Guest App (AppId 89ea5c94-7736-4e25-95ad-3fa95f62b6) read and write permissions only for Delegated calls.

#### Request
```json
PUT /storageContainerTypes/{containerTypeId}/applicationPermissions
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

