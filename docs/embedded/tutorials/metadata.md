---
title: SharePoint Embedded Container Metadata
description: Add metadata in Containers and Files
ms.date: 3/22/2024
ms.localizationpriority: high
---

# Using Metadata on Containers and Files

In SharePoint Embedded, columns can be added to [Containers](../concepts/app-concepts/containertypes.md) to address scenarios requiring custom metadata via Graph APIs. Content in the container can then set desired values for corresponding metadata. Metadata are schematized and can be queried. Note the APIs to create and manage columns are on container instances level – an application is responsible for defining and managing the columns across its containers. 


#### Sections
1. [Authorization and Authentication](#authorization-and-authentication)
1. [Limitations](#limitations)
1. [POST: Create a column in a fileStorageContainer](#create-a-column-in-a-filestoragecontainer)
1. [GET: Get a column in a fileStorageContainer by id](#get-a-column-in-a-filestoragecontainer-by-id)
1. [PATCH: Update a column in a fileStorageContainer by id](#update-a-column-in-a-filestoragecontainer-by-id)
1. [DELETE: Delete a column from a fileStorageContainer](#delete-a-column-from-a-filestoragecontainer)
1. [GET: List columns in a fileStorageContainer](#list-columns-in-a-filestoragecontainer)
1. [GET: Get column values of an item in a fileStorageContainer's drive](#get-column-values-of-an-item-in-a-filestoragecontainers-drive)
1. [PATCH: Patch column values of an item in a fileStorageContainer's drive](#patch-column-values-of-an-item-in-a-filestoragecontainers-drive)
1. [GET: Query a fileStorageContainer's driveitems with Odata query options on custom columns](#query-a-filestoragecontainers-driveitems-with-odata-query-options-on-custom-columns)



## Authorization and Authentication

App+User (Delegated) or App-only (Application) Bearer {token} is required in Authorization header.

### `microsoft.graph.fileStorageContainer` properties

| Property                   | Type                                                           | Description                                                | Key | Required | ReadOnly |
| -------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- | --- | -------- | -------- |
| `id`                       | `Edm.String`                                                   | unique stable identifier of the storage container instance | Yes | Yes      | Yes      |
| `displayName`              | `Edm.String`                                                   | display name of the container                              | No  | Yes      | No       |
| `description`              | `Edm.String`                                                   | description of the container                               | No  | No       | No       |
| `containerTypeId`          | `Edm.Guid`                                                     | container type id                                          | No  | Yes      | Yes      |
| `containerTypeDisplayName` | `Edm.String`                                                   | display name of the container type                         | No  | No       | Yes      |
| `externalGroupId`          | `Edm.Guid`                                                     | external group id                                          | No  | No       | No       |
| `permissions`              | `Collection<microsoft.graph.permission>`                       | permissions of users / groups in the container             | No  | No       | No       |
| `customProperties`         | `microsoft.graph.fileStorageContainerCustomPropertyDictionary` | custom properties                                          | No  | No       | No       |
| `viewpoint`                | `microsoft.graph.fileStorageContainerViewpoint`                | data that is specific to the current user                  | No  | No       | No       |
| `drive`                    | `microsoft.graph.drive`                                        | storage container's drive resource                         | No  | No       | Yes      |
| `recycleBin`               | `microsoft.graph.recycleBin`                                   | storage container's recycleBin resource                    | No  | No       | Yes      |
| `status`                   | `microsoft.graph.fileStorageContainerStatus`                   | an enum value representing the status of the container     | No  | No       | Yes      |
| `createdDateTime`          | `microsoft.graph.dateTimeOffset`                               | createdDateTime                                            | No  | No       | Yes      |
| `storageUsedInBytes`       | `Edm.Int64`                                                    | storage used in bytes                                      | No  | No       | Yes      |
| `assignedSensitivityLabel` | `microsoft.graph.assignedLabel`                                | the sensitivity label assigned to the container            | No  | No       | No       |
| `owners`                   | `Collection<microsoft.graph.userIdentity>`                     | The list of users who own the container                    | No  | No       | Yes      |
| `columns`                  | `Collection<microsoft.graph.columnDefinition>`                 | the collection of custom metadata fields in the container  | No  | No       | No       |



## Limitations

The following are the properties that SharePoint Embedded Metadata supports:

| Property name          | Type                      |
| ---------------------- | ------------------------- |
| boolean                | booleanColumn             |
| choice                 | choiceColumn              |
| currency               | currencyColumn            | 
| dateTime               | dateTimeColumn            |
| hyperlinkOrPicture     | hyperlinkOrPictureColumn  |
| isDeletable            | Boolean                   |
| id                     | string                    |
| indexed                | Boolean                   |
| isSealed               | Boolean                   |
| name                   | string                    |
| number                 | numberColumn              |
| personOrGroup          | personOrGroupColumn       |
| readOnly               | Boolean                   |
| text                   | textColumn                |
| type                   | columnTypes               |


## Create a column in a fileStorageContainer

This API will let callers create a new column instance in a fileStorageContainer.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: create a column in a fileStorageContainer

##### Request

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns
Content-Type: application/json

{
  "description": "test",
  "displayName": "Title",
  "enforceUniqueValues": false,
  "hidden": false,
  "indexed": false,
  "name": "Title",
  "text": {
    "allowMultipleLines": false,
    "appendChangesToExistingText": false,
    "linesForEditing": 0,
    "maxLength": 255
  }
}
```

##### Response

```http
HTTP/1.1 201 Created
Content-type: application/json

{
  "description": "test",
  "displayName": "Title",
  "enforceUniqueValues": false,
  "hidden": false,
  "id": "99ddcf45-e2f7-4f17-82b0-6fba34445103",
  "indexed": false,
  "name": "Title",
  "text": {
    "allowMultipleLines": false,
    "appendChangesToExistingText": false,
    "linesForEditing": 0,
    "maxLength": 255
  }
}
```

## Get a column in a fileStorageContainer by id

This API will let callers get a fileStorageContainer column instance by id.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: get a column in a fileStorageContainer by id

##### Request

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns/{column-id}
```

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "description": "test",
  "displayName": "Title",
  "enforceUniqueValues": false,
  "hidden": false,
  "id": "99ddcf45-e2f7-4f17-82b0-6fba34445103",
  "indexed": false,
  "name": "Title",
  "text": {
    "allowMultipleLines": false,
    "appendChangesToExistingText": false,
    "linesForEditing": 0,
    "maxLength": 255
  }
}
```

## Update a column in a fileStorageContainer by id

This API will let callers update a fileStorageContainer column instance by id.
You can update any property of the column other than the **id** property.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: update a column in a fileStorageContainer by id

##### Request

```http
PATCH https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns/{column-id}
Content-Type: application/json

{
  "required": true,
  "hidden": false
}
```

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "description": "",
  "displayName": "Custom Column",
  "enforceUniqueValues": false,
  "hidden": false,
  "id": "11dfef35-e2f7-4f17-82b0-6fba34445103",
  "indexed": false,
  "name": "Custom Column",
  "readOnly": false,
  "required": true,
  "text": {
    "allowMultipleLines": false,
    "appendChangesToExistingText": false,
    "linesForEditing": 0,
    "maxLength": 255
  }
}
```

## Delete a column from a fileStorageContainer

This API will let callers delele a fileStorageContainer column instance by id.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: delete a column from a fileStorageContainer

##### Request

```http
DELETE https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns/{column-id}
```

##### Response

```http
HTTP/1.1 204 No Content
```

## List columns in a fileStorageContainer

This API will let callers enumerate the columns in a fileStorageContainer.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: List columns in a fileStorageContainer

##### Request

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns
```  

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "value": [
    {
      "description": "",
      "displayName": "Title",
      "hidden": false,
      "id": "99ddcf45-e2f7-4f17-82b0-6fba34445103",
      "indexed": false,
      "name": "Title",
      "readOnly": false,
      "required": false,
      "text": {
        "allowMultipleLines": false,
        "appendChangesToExistingText": false,
        "linesForEditing": 0,
        "maxLength": 255
      }
    },
    {
      "description": "",
      "displayName": "Address",
      "id": "11dfef35-e2f7-4f17-82b0-6fba34445103",
      "indexed": false,
      "name": "Address",
      "readOnly": false,
      "required": false,
      "text": {
        "allowMultipleLines": false,
        "appendChangesToExistingText": false,
        "linesForEditing": 0,
        "maxLength": 255
      }
    }
  ]
}
```

## Get column values of an item in a fileStorageContainer's drive

This is an existing API used to showcase our new feature of getting the column values of an item in a fileStorageContainer's drive.
This API supports OData $select features for `column`.


##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: Get column values of an item in a fileStorageContainer's drive

##### Request

```http
GET https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields
```  

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "Name": "Widget",
  "Color": "Blue",
  "Quantity": 2357
}
```

##### Request

```http
GET https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields?$select=Name,Color
```  

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "Name": "Widget",
  "Color": "Blue"
}
```

## Patch column values of an item in a fileStorageContainer's drive

This is an existing API used to showcase our new feature of updating and deleting the column values of an item in a fileStorageContainer's drive.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: update column values of an item in a fileStorageContainer's drive

##### Request

```http
PATCH https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields

Content-Type: application/json

{
    "Color": "Fuchsia",
    "Quantity": 934
}
```  

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "Name": "Widget",
  "Color": "Fuchsia",
  "Quantity": 934
}
```

#### REST Operation example: delete column values of an item in a fileStorageContainer's drive

##### Request

```http
PATCH https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields

Content-Type: application/json

{
    "Color": null
}
```  

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "Name": "Widget",
  "Quantity": 934
}
```

## Query a fileStorageContainer's driveitems with Odata query options on custom columns

This API will let users query drive items in a fileStorageContainer with `$expand`, `$filter`, and `$orderby` Odata query options on their custom columns.

##### Required permissions (at least one of)

| ScopeName                     | Type        |
| ----------------------------- | ----------- |
| FileStorageContainer.Selected | Application |
| FileStorageContainer.Selected | Delegated   |

#### REST Operation example: filter fileStorageContainer's driveitems by their custom columns 'TestField' and order the results by 'TestField'

##### Request

```http
GET  https://graph.microsoft.com/beta/drives/{drive-id}/items?$orderby=listitem/fields/TestField asc&$filter=startswith(listitem/fields/TestField, '3')&$expand=listitem($expand=fields)
```  

##### Response

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "value": [
    {"name": "a.jpg", "size": 2048, "listitem/fields/TestField": "31" },
    {"name": "b.xlsx", "size": 197, "listitem/fields/TestField": "32" },
    {"name": "c.docx", "size": 391, "listitem/fields/TestField": "33" }
  ]
}
```