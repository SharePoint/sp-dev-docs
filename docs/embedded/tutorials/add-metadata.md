---
title: Add Container Metadata
description: Add metadata in Containers and Files
ms.date: 3/21/2024
ms.localizationpriority: high
---

# Add Container Metadata

**TODO: Update toc.yml with this file path**

In SharePoint Embedded, columns can be added to containers to address scenarios requiring custom metadata via Graph APIs. Content in the container can then set desired values for corresponding metadata. Metadata are schematized and can be queried. Note the APIs to create and manage columns are on container instances level – an application is responsible for defining and managing the columns across its containers. 

### Authorization and Authentication

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

When working with Metadata APIs in SharePoint Embedded there are a few limitations to consider. This importance guidance to follow in the request body of each API call.

| Property name          | Type                        | Property Needed       | Reason                                                        |
| ---------------------- | --------------------------- | --------------------- | ------------------------------------------------------------- |
| boolean                | booleanColumn               | Yes                   |                                                               |
| calculated             | calculatedColumn            | No                    | Type not supported                                            |
| choice                 | choiceColumn                | Yes                   |                                                               |
| columnGroup            | string                      | No                    | Used for site column management UI                            |
| contentApprovalStatus  | contentApprovalStatusColumn | No                    | Type not supported                                            |
| currency               | currencyColumn              | Yes                   |                                                               |
| dateTime               | dateTimeColumn              | Yes                   |                                                               |
| defaultValue           | defaultColumnValue          | No                    | Defaults in doclibs don’t work                                |
| description            | string                      | No?                   | App expected to control schema, no description needed         |
| displayName            | string                      | No                    | App expected to control schema, no description needed         |
| enforceUniqueValues    | Boolean                     | No                    | Functionality not supported                                   |
| geolocation            | geolocationColumn           | No                    | Type not supported                                            |
| hidden                 | Boolean                     | No                    | UI related                                                    |
| hyperlinkOrPicture     | hyperlinkOrPictureColumn    | Yes                   |                                                               |
| isDeletable            | Boolean                     | Yes                   | OOTB fields might be undeletable                              |
| isReorderable          | Boolean                     | No                    | App won’t care about order (UI would)                         |
| id                     | string                      | Yes                   | Why isn’t this a guid?                                        |
| indexed                | Boolean                     | Yes                   |                                                               |
| isSealed               | Boolean                     | Yes                   | OOTB fields might be sealed                                   |
| lookup                 | lookupColumn                | No                    | Type not supported (odd because OOTB fields might be lookups) |
| name                   | string                      | Yes                   |                                                               |
| number                 | numberColumn                | Yes                   |                                                               |
| personOrGroup          | personOrGroupColumn         | Yes                   |                                                               |
| propagateChanges       | Boolean                     | No                    | Site column related                                           |
| readOnly               | Boolean                     | Yes                   | OOTB fields might be read-only                                |
| required               | Boolean                     | No                    | Functionality not supported                                   |
| sourceContentType      | contentTypeInfo             | No                    | Content Types are not for now                                 |
| term                   | termColumn                  | No                    | Type not supported                                            |
| text                   | textColumn                  | Yes                   |                                                               |
| thumbnail              | thumbnailColumn             | No                    | Type not supported                                            |
| type                   | columnTypes                 | Yes                   | Limited                                                       |
| validation             | columnValidation            | No                    | Functionality not supported                                   |


### Create a column in a fileStorageContainer

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

### Get a column in a fileStorageContainer by id

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

### Update a column in a fileStorageContainer by id

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

### Delete a column from a fileStorageContainer

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

### List columns in a fileStorageContainer

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

### Get column values of an item in a fileStorageContainer's drive

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

### Patch column values of an item in a fileStorageContainer's drive

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

### Query a fileStorageContainer's driveitems with Odata query options on custom columns

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