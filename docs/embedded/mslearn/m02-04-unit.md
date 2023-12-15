---
title: Create REST API to handle read and display operations with SharePoint Embedded
description: "Applications using SharePoint Embedded typically execute two primary operations with back-end storage: retrieving and storing/deleting data and files. This section will instruct you on accessing SharePoint Embedded Containers through the Microsoft Graph REST APIs."
ms.date: 11/28/2023
ms.localizationpriority: high
---
# Create REST API to handle read and display operations with SharePoint Embedded

SharePoint Embedded applications, like most applications that interact with back-end storage systems and databases, perform two types of operations: reading/retrieving data and files, and storing or deleting files. In this section, you’ll learn how to access SharePoint Embedded Containers using the Microsoft Graph REST APIs.

## Overview of our custom app and how it works with SharePoint Embedded, SharePoint Online, and Microsoft Graph

The following exercises in this module will walk you through the steps of creating a web app and web service can manage SharePoint Embedded Containers and perform CRUD operations with documents on these Containers.

Let’s look at the two components of the application you’ll build and what each is responsible for.

### Web application that implements the user experience

The user interface is implemented using React to create a single-page application (SPA). This application can use the Microsoft Graph to read and write contents and documents to the Containers because these are operations that can be performed using the app+user or delegated permissions.

The web application will use the Fluent UI React Controls (v9) and Microsoft Graph Toolkit (v3) to leverage different user interface components simplify the creation of the the user experience.

Not all operations can be performed by the client-side React application because they require elevated permissions that can only be handled server-side.

### Server-side API that handles higher privileged operations

Not all Container operations can be performed directly by the React application. For these scenarios, including creating, deleting, and getting a list of the SharePoint Embedded Containers, we’ll create a server-side API server

For this project, you could use an Azure Functions application or use an Azure Web App to host an ASP.NET Web API project. In our project, we’ll use the lightweight Node.js [Restify](http://restify.com/) server.

This API will receive requests from our React SPA that include the user’s access token they received when they signed into the application. You’ll use this access token and the OBO flow to obtain an access token intended for Microsoft Graph that you can use to perform Container operations as the user.

## Creating SharePoint Embedded Containers with Microsoft Graph

One of the tasks our server-side API will need to do is create Containers. This will be done by the server-side API using the On-Behalf-Of flow to obtain an access token intended for Microsoft Graph.

This call is first initiated by our React SPA which will include the access token of the currently signed in user.

The API server will first create an instance of a `ConfidentialClientApplication` using the Microsoft Authentication Library (MSAL). To create the `ConfidentialClientApplication` you'll authenticate with Microsoft Entra ID using our app’s client ID and client secret:

```typescript
const msalConfig: MSAL.Configuration = {
  auth: {
    clientId: process.env['API_ENTRA_APP_CLIENT_ID']!,
    authority: process.env['API_ENTRA_APP_AUTHORITY']!,
    clientSecret: process.env['API_ENTRA_APP_CLIENT_SECRET']!
  }
};

const confidentialClient = new MSAL.ConfidentialClientApplication(msalConfig);
```

Then, use the `ConfidentialClientApplication` to obtain an access token on behalf of the current user by exchanging the supplied access token from the user’s sign-in for an access token that can call Microsoft Graph:

```typescript
// get user's access token from the request submitted by the React SPA
const [bearer, token] = req.headers.authorization.split(' ');

// set that token to the assertion and the scopes to the permissions we
//    need in the access token to call Microsoft Graph
const graphTokenRequest = {
  oboAssertion: token,
  scopes: [
    Scopes.GRAPH_SITES_READ_ALL,
    Scopes.SPREPOSERVICES_FILESTORAGECONTAINER_SELECTED
  ]
};

// obtain the OBO token using the ConfidentialClientApplication object
const ccaOboResponse = await confidentialClient.acquireTokenOnBehalfOf(graphTokenRequest);
const oboGraphToken = ccaOboResponse!.accessToken;
```

Now that you have the OBO token for Microsoft graph, create an auth provider and then an instance of the Microsoft Graph client to simplify calls to the Microsoft Graph’s REST API:

```typescript
const authProvider = (callback: MSGraph.AuthProviderCallback) => {
  callback(null, graphTokenRequest);
};

const graphClient = MSGraph.Client.init({
  authProvider: authProvider,
  defaultVersion: 'beta'
});
```

Finally, submit an HTTP POST request to the Microsoft Graph’s `https://graph.microsoft.com/{version}/storage/fileStorage/containers` endpoint to create a new Container:

```typescript
const containerRequestData = {
  displayName: 'New container name',
  description: 'New container description',
  containerTypeId: process.env["CONTAINER_TYPE_ID"]
};

const graphResponse = await graphClient.api(`storage/fileStorage/containers`)
                                       .post(containerRequestData);
```

## Getting a list of SharePoint Embedded Containers with Microsoft Graph

he other common task you’ll perform is to get a list of all the Containers. This request has the same requirements as the creation of a Container.

The authentication and initialization of a Microsoft Graph client is identical as it is for creating a Container. The only difference is the request that you submit to Microsoft Graph. In this case. you’ll issue a HTTP GET to the same `https://graph.microsoft.com/{version}/storage/fileStorage/containers` endpoint:

```typescript
const graphResponse = await graphClient.api(`storage/fileStorage/containers?$filter=containerTypeId eq ${process.env["CONTAINER_TYPE_ID"]}`).get();
```

## Summary

In this section, you’ll learn how to access SharePoint Embedded Containers using the Microsoft Graph REST APIs.

## Next Steps

Let's get started and continue with the next topic in this tutorial, [Hands on Lab - Update app to create and list SharePoint Embedded Containers](m02-05-hol.md), where you’ll update the existing project to create and retrieve SharePoint Embedded Containers.
