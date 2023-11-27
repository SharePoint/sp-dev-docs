---
title: Create REST API to handle CRUD operations with SharePoint repository services
description: SharePoint repository services applications manage data by performing two fundamental operations—reading/retrieving and storing/deleting files. This section focuses on teaching you to store and delete files in a SharePoint repository services Container with Microsoft Graph REST APIs.
ms.date: 11/24/2023
ms.localizationpriority: high
---
# Create REST API to handle CRUD operations with SharePoint repository services

SharePoint repository services applications, like most applications that interact with back-end storage systems and databases, perform two types of operations: reading/retrieving data and files, and storing or deleting files. In this section, you’ll learn how to store and delete files and documents in a SharePoint repository services Container using the Microsoft Graph REST APIs.

## SharePoint repository services Containers are like OneDrive Drives and SharePoint Online document libraries

Unlike the previous section where you needed to obtain an OBO token to make server-side calls to Microsoft Graph for Container management operations, when reading and writing documents to Container, you can make those straight from your React SPA client-side application.

All SharePoint repository services Containers are implemented as existing Microsoft Graph **Drives** and their contents are **DriveItems**. This means you can use the same Microsoft Graph endpoints that you use to access SharePoint Online document libraries or OneDrive instances.

## Reading and writing files with Microsoft Graph

Reading and writing files using Microsoft Graph from a web application is simplified using the Microsoft Graph Toolkit to help you handle the authentication configuration. The React components for the Microsoft Graph Toolkit make this even simpler!

First, setup a Microsoft Graph client from the root of your React SPA by specifying the authentication provider. In this case, we’ll use the Microsoft Authentication Library’s v2 provider:

```typescript
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

// setup MS Graph scopes in global provider
Providers.globalProvider = new Msal2Provider({
  clientId: Constants.CLIENT_ENTRA_APP_CLIENT_ID,
  scopes: [
    ...Scopes.GRAPH_OPENID_CONNECT_BASIC,
    Scopes.GRAPH_USER_READ_ALL,
    Scopes.GRAPH_FILES_READ_WRITE_ALL,
    Scopes.GRAPH_SITES_READ_ALL,
    Scopes.SPREPOSERVICES_FILESTORAGECONTAINER_SELECTED
  ]
});
```

Assuming the user has signed-in and obtained an access token to call Microsoft Graph, you can then retrieve an instance of the Microsoft Graph client within your React component with a single call:

```typescript
import { Providers } from "@microsoft/mgt-element";

const graphClient = Providers.globalProvider.graph.client;
```

Once you have an authenticated and initialized Microsoft Graph client, you can then use the Microsoft Graph’s `https://graph.microsoft.com/{version}/drives` endpoint to get the contents of a `Drive` and a folder within that drive. This will return a collection of files, also known as `DriveItems`:

```typescript
const driveId = props.container.id;
const driveItemId = folderId || 'root'; // get folder, or default to the 'root' folder

// get container contents for specified folder
const graphResponse = await graphClient.api(`/drives/${driveId}/items/${driveItemId}/children`).get();
```

## Creating files in SharePoint repository services Containers

To create a file in a `Drive` with Microsoft Graph, you submit an HTTP PUT with a binary stream of the file.

Assuming you have a reference to a file that’s been selected in the web browser using the native operating system’s file picker, create a stream reader to read the contents of the file:

```typescript
const file = // file reference obtained from the OS' file picker
const fileReader = new FileReader();
fileReader.readAsArrayBuffer(file);
```

Then, when the entire file has been loaded into memory, as indicated by the `loadend` event, submit the stream using the HTTP PUT verb on the Microsoft Graph’s `drive` endpoint:

```typescript
fileReader.addEventListener('loadend', async (event: any) => {
  const graphClient = Providers.globalProvider.graph.client;
  const endpoint = `/drives/${props.container.id}/items/${folderId || 'root'}:/${file.name}:/content`;
  graphClient.api(endpoint).putStream(fileReader.result)
    .then(async (response) => {
      await loadItems(folderId || 'root');
    })
    .catch((error) => {
      console.error(`Failed to upload file ${file.name}: ${error.message}`);
    });
});
```

## Creating folders in SharePoint repository services Containers

Creating folders is similar, except you submit an HTTP POST to Microsoft Graph’s `drive` endpoint with a different payload:

```typescript
const graphClient = Providers.globalProvider.graph.client;
const endpoint = `/drives/${props.container.id}/items/${currentFolderId}/children`;
const data = {
  "name": folderName,
  "folder": {},
  "@microsoft.graph.conflictBehavior": "rename"
};
await graphClient.api(endpoint).post(data);
```

## Deleting folders and files in SharePoint repository services Containers

Finally, deleting files and folders both use the exact same type of a call because a file and folder are both considered `DriveItem`s as far as Microsoft Graph is concerned.

To delete a `DriveItem`, submit an HTTP DELETE operation using the entire URL to the item to be deleted as the full endpoint:

```typescript
const graphClient = Providers.globalProvider.graph.client;
const endpoint = `/drives/${props.container.id}/items/${selectedRows.entries().next().value[0]}`;
await graphClient.api(endpoint).delete();
```

## Summary

In this section, you learned how to store and delete files and documents in a SharePoint repository services Container using the Microsoft Graph REST APIs.

## Next Steps

Let's get started and continue with the next topic in this tutorial, [Hands on Lab - Create, update and delete files within a Container](./m02-07-hol.md), where you’ll update the existing project to store files in a SharePoint repository services Container.
