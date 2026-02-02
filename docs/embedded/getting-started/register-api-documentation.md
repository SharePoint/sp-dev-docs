---
title: Register file storage container type application permissions
description: Register the container type.
ms.date: 08/11/2025
ms.localizationpriority: high
---

# Register file storage container type application permissions

In order for a SharePoint Embedded application to interact with containers in a consuming tenant, the container type must first be registered in the consuming tenant. Container type registration happens when the owning application invokes the registration API to specify how applications can access its container type. The registration API also grants access to other Guest Apps to interact with the owning application's containers. For example, a SharePoint Embedded application can grant permissions to another application--a Guest App so that the Guest App can perform backup operations against its containers.

Since the [container type registration API](/graph/api/filestorage-post-containertyperegistrations) controls the access to a container type in the consuming tenant, it's the first endpoint invoked by a SharePoint Embedded application on a consuming tenant. Failure to do so results in access denied errors when invoking other APIs against containers and/or content in the containers.

There are no restrictions on how many times the registration API can be invoked. How often the registration API is invoked and when it's invoked is dependent on the SharePoint Embedded application. However, the last successful call to the registration API determines the settings used in the consuming tenant.

## Authentication and authorization requirements

For the container type's owning application to act on a consuming tenant, some prerequisites must be completed:

- the owning app must have a [service principal](/entra/identity-platform/app-objects-and-service-principals) installed on the consuming tenant
- the owning app must be granted admin consent to perform container type registration in the consuming tenant.

You can satisfy these requirements by having the consuming tenant's Global Administrator [grant admin consent](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal) to the container type's owning application.

The [container type registration API](/graph/api/filestorage-post-containertyperegistrations) requires the `FileStorageContainerTypeReg.Selected` user-delegated or app-only permission. When the owning application calls the container type registration API on behalf of a user, the user must be assigned the [SharePoint Embedded Administrator](/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) or the [Global Administrator](/entra/identity/role-based-access-control/permissions-reference#global-administrator) roles. When the owning application calls the container type registration API without a user context, it needs to request a token using the [client credentials grant flow](/entra/identity-platform/v2-oauth2-client-creds-grant-flow).

> [!NOTE]
> The container type registration API is currently in preview and subject to change.

To request admin consent from a tenant administrator in the consuming tenant, you may direct them to the [admin consent endpoint](/entra/identity-platform/v2-admin-consent). For the right endpoints on national clouds, see [Microsoft identity platform endpoints on national clouds](/entra/identity-platform/authentication-national-cloud#microsoft-entra-authentication-endpoints):

```http
https://login.microsoftonline.com/{ConsumingTenantId}/v2.0/adminconsent?client_id={OwningAppId}&scope=https://graph.microsoft.com/.default
```

You may configure the admin consent endpoint to fit your needs, including handling errors and successful grants. For more information, see [Admin consent URI](/entra/identity-platform/v2-admin-consent).

## Container type Permissions

The registration API determines what permissions a SharePoint Embedded application can perform against containers and content in containers for the specified container type.

|      Permission      |                                                    Description                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| None                 | Has no permissions to any containers or content of this container type.                                            |
| ReadContent          | Can read the content of containers of this container type.                                                         |
| WriteContent         | Can write content to containers for this container type. This can't be granted without the ReadContent permission. |
| Create               | Can create containers of this container type.                                                                      |
| Delete               | Can delete containers of this container type.                                                                      |
| Read                 | Can read the metadata of containers of this container type.                                                        |
| Write                | Can update the metadata of containers of this container type.                                                      |
| EnumeratePermissions | Can enumerate the members of a container and their roles for containers of this container type.                    |
| AddPermissions       | Can add members to the container for containers of this container type.                                            |
| UpdatePermissions    | Can update (change roles of) existing memberships in the container for containers of this container type.          |
| DeletePermissions    | Can delete other members (but not self) from the container for containers of this container type.                  |
| DeleteOwnPermissions | Can remove own membership from the container for containers of this container type.                                |
| ManagePermissions    | Can add, remove (including self), or update members in the container roles for containers of this container type.  |
| ManageContent        | Can manage the content of the container                                                                            |
| Full                 | Has all permissions for containers of this container type.                                                         |

## Examples

### Register the container type in a consuming tenant with permissions only for the Owning App

Register the container type `de988700-d700-020e-0a00-0831f3042f00` in the consuming tenant and grant `full` permissions to the owning application `71392b2f-1765-406e-86af-5907d9bdb2ab` for delegated and app-only calls.

#### Request

```http
PUT https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/de988700-d700-020e-0a00-0831f3042f00
Content-Type: application/json

{
  "applicationPermissionGrants": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegatedPermissions": ["full"],
      "applicationPermissions": ["full"]
    }
  ]
}
```

#### Response

```json
HTTP/1.1 201 Created
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.fileStorageContainerTypeRegistration",
  "id": "de988700-d700-020e-0a00-0831f3042f00",
  "name": "Test Container Type",
  "owningAppId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
  "billingClassification": "trial",
  "billingStatus": "valid",
  "registeredDateTime": "08/11/2025",
  "expirationDateTime": "08/11/2025",
  "etag": "RVRhZw==",
  "settings": {
    "@odata.type": "microsoft.graph.fileStorageContainerTypeRegistrationSettings",
    "sharingCapability": "disabled",
    "urlTemplate": "https://app.contoso.com/redirect?tenant={tenant-id}&drive={drive-id}&folder={folder-id}&item={item-id}",
    "isDiscoverabilityEnabled": true,
    "isSearchEnabled": true,
    "isItemVersioningEnabled": true,
    "itemMajorVersionLimit": 50,
    "maxStoragePerContainerInBytes": 104857600,
    "isSharingRestricted": false
  },
  "applicationPermissionGrants": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegatedPermissions": ["full"],
      "applicationPermissions": ["full"]
    }
  ]
}
```

### Register the container type in a consuming tenant with permissions for a Guest App

Register the container type `de988700-d700-020e-0a00-0831f3042f00` in the consuming tenant and grant full permissions to the owning application `71392b2f-1765-406e-86af-5907d9bdb2ab` for delegated and app-only calls. In addition, grant a guest app `89ea5c94-7736-4e25-95ad-3fa95f62b6` both `read` and `write` permissions only for delegated calls.

#### Request

```http
PUT https://graph.microsoft.com/beta/storage/fileStorage/containerTypeRegistrations/de988700-d700-020e-0a00-0831f3042f00
Content-Type: application/json

{
  "applicationPermissionGrants": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegatedPermissions": ["full"],
      "applicationPermissions": ["full"]
    },
    {
      "appId": "89ea5c94-7736-4e25-95ad-3fa95f62b6",
      "delegated": ["read", "write"],
      "appOnly": ["none"]
    }
  ]
}
```

#### Response

```json
HTTP/1.1 201 Created
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.fileStorageContainerTypeRegistration",
  "id": "de988700-d700-020e-0a00-0831f3042f00",
  "name": "Test Container Type",
  "owningAppId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
  "billingClassification": "trial",
  "billingStatus": "valid",
  "registeredDateTime": "08/11/2025",
  "expirationDateTime": "08/11/2025",
  "etag": "RVRhZw==",
  "settings": {
    "@odata.type": "microsoft.graph.fileStorageContainerTypeRegistrationSettings",
    "sharingCapability": "disabled",
    "urlTemplate": "https://app.contoso.com/redirect?tenant={tenant-id}&drive={drive-id}&folder={folder-id}&item={item-id}",
    "isDiscoverabilityEnabled": true,
    "isSearchEnabled": true,
    "isItemVersioningEnabled": true,
    "itemMajorVersionLimit": 50,
    "maxStoragePerContainerInBytes": 104857600,
    "isSharingRestricted": false
  },
  "applicationPermissionGrants": [
    {
      "appId": "71392b2f-1765-406e-86af-5907d9bdb2ab",
      "delegatedPermissions": ["full"],
      "applicationPermissions": ["full"]
    },
    {
      "appId": "89ea5c94-7736-4e25-95ad-3fa95f62b6",
      "delegated": ["read", "write"],
      "appOnly": ["none"]
    }
  ]
}
```
