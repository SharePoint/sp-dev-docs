---
title: Get started using the client object model with external data in SharePoint
description: Learn how to use the SharePoint client object model to work with Business Connectivity Services (BCS) in SharePoint.
ms.date: 09/25/2017
ms.assetid: 8ed91929-fdb6-4fde-ba2a-7942870575f3
ms.localizationpriority: medium
---
# Get started using the client object model with external data in SharePoint

Learn how to use the SharePoint client object model to work with Business Connectivity Services (BCS) in SharePoint.

## What is the SharePoint client object model?

> [!NOTE]
> Business Connectivity Services (BCS) is primarily supported in SharePoint Server environments. In SharePoint Online, external data scenarios are typically implemented using Microsoft Graph, REST APIs, or Power Platform solutions. While the SharePoint Client-Side Object Model (CSOM) is still supported, it is considered a legacy approach for new cloud development scenarios.

The client object model for SharePoint is a set of client-based libraries that represent the server object model. They are packaged in three different DLLs to accommodate a variety of development types. The client object model includes most of the major functions of the server API. This allows access to the same types of functionality from browser scripting and also .NET web applications and Silverlight applications.  <br/> To enhance and expand the capabilities for working with external data, Business Connectivity Services (BCS) has expanded the client object model to include additional functionality.  <br/> 

<a href="#BCScsom_getstarted"><img alt="Get set up" src="../images/mod_icon_getstartbox.gif" /></a>&nbsp;&nbsp;&nbsp;<a href="#BCScsom_Tasks"><img alt="Get to work" src="../images/mod_icon_dobox.gif" /></a>&nbsp;&nbsp;&nbsp;<a href="#BCScsom_Learnmore"><img alt="Learn more" src="../images/mod_icon_startbox.gif" /></a>

## Get started using the SharePoint client object model with external data
<a name="BCScsom_getstarted"> </a>

To develop solutions using the SharePoint client object model (CSOM), you will need the following:

- SharePoint
- Visual Studio 2012
- Office Developer Tools for Visual Studio 2012
  
For information about how to set up your development environment, see  [Setting up a development environment for BCS in SharePoint](setting-up-a-development-environment-for-bcs-in-sharepoint.md).
  
To access the capabilities provided by the client object model, you need only to add references to the **Microsoft.SharePoint.Client.Runtime.dll** and **Microsoft.SharePoint.Client.dll** files in their projects. You can also use the client object model by referencing the following DLLs in the global assembly cache:

-  `\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\isapi\\Microsoft.SharePoint.Client.Runtime.dll`
-  `\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\isapi\\Microsoft.SharePoint.Client.dll`
 
### SharePoint client object model essentials

The following articles will help you understand more about the client object model in SharePoint.
  
**Table 1. Core concepts for understanding the client object model**

|**Article**|**Description**|
|:-----|:-----|
| [External content types in SharePoint](external-content-types-in-sharepoint.md) <br/> |Learn what you can do with external content types and what you need to start creating them in SharePoint.  <br/> |
| [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint.md) <br/> |Provides information to help get started creating external content types based on OData sources and using that data in SharePoint or Office 2013 components.  <br/> |
| [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md) <br/> |Learn about the several sets of APIs that are provided in SharePoint, including the server object model, the various client object models, and the REST/OData web service.  <br/> |
| [.NET client API reference for SharePoint Online](/previous-versions/office/sharepoint-csom/jj193041(v=office.15)) <br/> |Find information about the .NET client class libraries in SharePoint.  <br/> |
| [JavaScript API reference for SharePoint](/previous-versions/office/sharepoint-visio/jj193034(v=office.15)) <br/> |Find information about the JavaScript object libraries in SharePoint.  <br/> |
   
## What can you do with the client object model?
<a name="BCScsom_Tasks"> </a>

You can use the SharePoint client object model to retrieve, update, and manage data that is contained in SharePoint. SharePoint offers the client libraries in different formats to accommodate most developers. For web developers who are using scripting languages, the client library is offered in JavaScript. For .NET developers, it is offered as a .NET client managed DLL. For developers of Silverlight applications, the client library is provided by a Silverlight DLL.
  
See the articles in Table 2 for more information about what you can do with the client object model in SharePoint.
 
**Table 2. Basic tasks for using the client object model with external data**

|**Task**|**Description**|
|:-----|:-----|
| [Complete basic operations using SharePoint client library code](/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code) <br/> |Learn how to write code to perform basic operations with the SharePoint client object model.  <br/> |
| [How to: Use the client code library to access external data in SharePoint](how-to-use-the-client-code-library-to-access-external-data-in-sharepoint.md) <br/> |Learn how to use the SharePoint client object model to work with SharePoint BCS objects using browser-based scripting.  <br/> |
   
The following are some basic examples of tasks you can accomplish using CSOM.
 
### Get a specific entity

This example shows how to get context from SharePoint, and then retrieve a specified data source entity.
 
```csharp

ClientContext ctx = new ClientContext("http://sharepointservername"); 
Web web = ctx.Web; 
ctx.Load(web); 
Entity entity = ctx.Web.GetEntity("http://sharepointservername", "EntityName"); 
ctx.Load(entity); 
ctx.ExecuteQuery(); 
```

### Create a generic invoker

This example shows how to write a generic invoker so that you can create an entity object to work within your code.
 
```csharp
LobSystem lobSystem = entity.GetLobSystem();
ctx.Load(lobSystem);

LobSystemInstanceCollection lobInstances = lobSystem.GetLobSystemInstances();
ctx.Load(lobInstances);
ctx.ExecuteQuery();

LobSystemInstance lsi;
foreach(LobSystemInstance lobInstance in lobInstances)
{
  if (lobInstance.Name.CompareTo("MyLOBSystemInstance") == 0)
  {
    lsi = lobInstance;
  }
}

if (null != lsi)
{
  entity.Execute("MethodInstanceName", lsi, Array.Empty<object>()); 
  ctx.Load(myObj); 
  ctx.ExecuteQuery();
}

```

### Retrieve paged result sets

The following example shows how to retrieve a filtered, paged dataset. In this case, the page value is 50.

```csharp

// Find filters for given Method Name. 
FilterCollection fCollection = entity.GetFilters("methodName"); 
ctx.Load(fCollection); 
ctx.ExecuteQuery(); 

fCollection.SetFilterValue("X.Y.Z.Country", 0, "India")
// Assuming that the "RowLimit" filter has the Limit filter type
fCollection.SetFilterValue("RowLimit", 0, 50)

EntityInstanceCollection eCollection = entity.FindFiltered(fCollection, 
"nameOfFinder", lsi); 
ctx.ExecuteQuery(); 

```

### Query for filtered information

The following example demonstrates how to return a filtered result set. In this case, the data column filtered is the **X.Y.Z.Country** field. The code looks for anything with the value of "India", and then puts that into a collection. 

```csharp

// Find filters for given Method Name. 
FilterCollection fCollection = entity.GetFilters("methodName"); 
ctx.Load(fCollection); 
ctx.ExecuteQuery(); 

fCollection.SetFilterValue("X.Y.Z.Country", 0, "India")

EntityInstanceCollection eCollection = entity.FindFiltered(fCollection, 
"nameOfFinder", lsi); 
ctx.ExecuteQuery(); 

```

## Beyond the basics: Learn more about the client object model
<a name="BCScsom_Learnmore"> </a>

For more information about using the client object model in SharePoint, see the information in Table 3.

**Table 3. Advanced concepts for the client object model**

|**Article**|**Description**|
|:-----|:-----|
| [BCS client object model reference for SharePoint](bcs-client-object-model-reference-for-sharepoint.md) <br/> |Summarizes the objects available for creating client-side scripts using the SharePoint client object model to access external data exposed by BCS.  <br/> |
   
## See also
<a name="BCScsom_Learnmore"> </a>

-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
-  [SharePoint Add-ins](/sharepoint/dev/sp-add-ins/sharepoint-add-ins)
-  [How to: Use the client code library to access external data in SharePoint](how-to-use-the-client-code-library-to-access-external-data-in-sharepoint.md)
-  [Complete basic operations using SharePoint client library code](/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code)
