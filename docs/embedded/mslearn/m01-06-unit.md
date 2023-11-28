---
title: Store and access files in SharePoint Embedded with Microsoft Graph REST APIs
description: Developers will employ familiar Microsoft Graph APIs to manage files within SharePoint Embedded containers, utilizing the Microsoft Graph Drive endpoint for data access. This section covers how to use these REST APIs to handle file storage and retrieval in SharePoint Embedded.
ms.date: 11/24/2023
ms.localizationpriority: high
---
# Store and access files in SharePoint Embedded with Microsoft Graph REST APIs

Developers creating apps that leverage SharePoint Embedded will use well known and established Microsoft Graph APIs to access the files and documents in these Containers. The Microsoft Graph Drive endpoint can access data stored within a SharePoint Embedded Container. In this section, you’ll learn how to use the Microsoft Graph REST APIs to store and retrieve files and documents in SharePoint Embedded Containers.

> [!IMPORTANT]
> At this time, many of the Microsoft Graph endpoints used to create, access, and manage SharePoint Embedded-specific resource only exist on the Microsoft Graph beta endpoint. However, all endpoints that access the Containers and content within contains are on the Microsoft Graph v1.0 endpoint.

## Working with Containers

Once you you’ve completed all the setup and registration processes between the provider and consuming tenants, one of the first tasks you’ll have to perform is to create a Container in the consuming tenant.

### Create a new Container

To create a Container, submit an HTTP POST with a JSON payload that specifies name, description, and the associated ContainerType ID:

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containers

{
  "displayName": "Sample App Container 1",
  "description": "First container description.",
  "containerTypeId": "{{ContainerTypeId}}"
}
```

Microsoft Graph will respond with the details of the new Container:

```json
{
  "id": "b!qEMTpi-XGEKZ1W...",
  "displayName": "Sample App Container 1",
  "description": "First container description.",
  "containerTypeId": "3a6b1fc4-0b09-04b3-3a2a-4843fbb60914",
  "status": "inactive",
  "createDateTime": 2023-11-T00:15:25.84Z"
}
```

### List all Containers

To get a list of all Containers created, submit an HTTP GET request and filter by the ContainerType ID:

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers?$filter=containerTypeId eq {{ContainerTypeId}}
```

### Get a specific Container

To get a specific Container, submit an HTTP GET request to the `Containers` endpoint:

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{{ContainerID}}?$select=id,displayName,containerTypeId,status,description,customProperties&$expand=permissions
```

## Working with the contents of a Container

To work with the contents, or files, in a Container, you’ll use the same Microsoft Graph endpoints available for reading and writing to SharePoint document libraries or OneDrive: the `drives` endpoint. This is because a SharePoint Embedded Container is seen as the same thing as a Microsoft Graph `Drive` object and files within the `Drive` are `DriveItems`.

### Get a specific Container as a `Drive` object

To get  a specific Container as a Drive object, submit an HTTP GET request to the Microsoft Graph `drives` endpoint:

```http
GET https://graph.microsoft.com/v1.0/drives/{{ContainerID}}
```

To learn more about the Microsoft Graph `drives` endpoint, see **[Microsoft Graph REST API: Get Drive](https://learn.microsoft.com/graph/api/resources/drive?view=graph-rest-1.0)**.

### List the contents of a Container

To get the contents of a Container, submit an HTTP GET request to the same endpoint but go to the children of the Container:

```http
GET https://graph.microsoft.com/v1.0/drives/{{ContainerID}}/items/root/children
```

### Upload a file to a Container

To upload a file to a Container, submit an HTTP POST request to the `drives` endpoint and include the content of the file in the request:

```http
PUT https://graph.microsoft.com/v1.0/drives/{{ContainerId}}/root:/Jan2024.docx:/content

<binary contents of the file>
```

### Delete the contents of a Container

To delete a file from a Container, submit an HTTP DELETE request to the `drives` endpoint:

```http
DELETE https://graph.microsoft.com/v1.0/drives/{{ContainerID}}/items/root/{{driveItemID}}
```

To learn more about working with files using Microsoft Graph, see **[Microsoft Graph REST API: Drive Items](https://learn.microsoft.com/graph/api/resources/driveitem?view=graph-rest-1.0)**.

## Summary

Developers creating apps that leverage SharePoint Embedded will use well known and established Microsoft Graph APIs to access the files and documents in these Containers. The Microsoft Graph Drive endpoint can access data stored within a SharePoint Embedded Container.

In this section, you learned how to use the Microsoft Graph REST APIs to store and retrieve files and documents in SharePoint Embedded Containers.

## Next Steps

Let's get started and continue with the next topic in this tutorial, [Hands on Lab - Access, store, and retrieve files in SharePoint Embedded with Microsoft Graph](./m01-07-hol.md), where you’ll use Postman to access, store, and retrieve files and documents in a SharePoint Embedded Container using the Postman client.
