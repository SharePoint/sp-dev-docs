---
title: Get started using the client object model with external data in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 8ed91929-fdb6-4fde-ba2a-7942870575f3
---



# Get started using the client object model with external data in SharePoint
Learn how to use the SharePoint client object model to work with Business Connectivity Services (BCS) in SharePoint.
## What is the SharePoint client object model?

The client object model for SharePoint is a set of client-based libraries that represent the server object model. They are packaged in three different DLLs to accommodate a variety of development types. The client object model includes most of the major functions of the server API. This allows access to the same types of functionality from browser scripting and also .NET web applications and Silverlight applications.  <br/> To enhance and expand the capabilities for working with external data, Business Connectivity Services (BCS) has expanded the client object model to include additional functionality.  <br/> 

<a href="#BCScsom_getstarted"><img alt="Get set up" src="../../images/mod_icon_getstartbox.gif" /></a>&nbsp;&nbsp;&nbsp;<a href="BCScsom_Tasks"><img alt="Get to work" src="../../images/mod_icon_dobox.gif" /></a>&nbsp;&nbsp;&nbsp;<a href="#BCScsom_Learnmore"><img alt="Learn more" src="../../images/mod_icon_startbox.gif" /></a></p>

## Get started using the SharePoint client object model with external data
<a name="BCScsom_getstarted"> </a>

To develop solutions using the SharePoint client object model (CSOM), you will need the following:
  
    
    

- SharePoint
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
For information about how to set up your development environment, see  [Setting up a development environment for BCS in SharePoint](setting-up-a-development-environment-for-bcs-in-sharepoint).
  
    
    
To access the capabilities provided by the client object model, you need only to add references to the **Microsoft.SharePoint.Client.Runtime.dll** and **Microsoft.SharePoint.Client.dll** files in their projects. You can also use the client object model by referencing the following DLLs in the global assembly cache:
  
    
    

-  `\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\isapi\\Microsoft.SharePoint.Client.Runtime.dll`
    
  
-  `\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\isapi\\Microsoft.SharePoint.Client.dll`
    
  

### SharePoint client object model essentials

The following articles will help you understand more about the client object model in SharePoint.
  
    
    

**Table 1. Core concepts for understanding the client object model**


|**Article**|**Description**|
|:-----|:-----|
| [External content types in SharePoint](external-content-types-in-sharepoint) <br/> |Learn what you can do with external content types and what you need to start creating them in SharePoint.  <br/> |
| [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint) <br/> |Provides information to help get started creating external content types based on OData sources and using that data in SharePoint or Office 2013 components.  <br/> |
| [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint) <br/> |Learn about the several sets of APIs that are provided in SharePoint, including the server object model, the various client object models, and the REST/OData web service.  <br/> |
| [.NET client API reference for SharePoint Online](http://msdn.microsoft.com/library/88e5e1b9-eab2-4f3b-a3f2-75c96b86f1f4%28Office.15%29.aspx) <br/> |Find information about the .NET client class libraries in SharePoint.  <br/> |
| [JavaScript API reference for SharePoint](http://msdn.microsoft.com/library/1ead2f8d-a541-4a50-89fa-f195f2ba14e5%28Office.15%29.aspx) <br/> |Find information about the JavaScript object libraries in SharePoint.  <br/> |
   

## What can you do with the client object model?
<a name="BCScsom_Tasks"> </a>

You can use the SharePoint client object model to retrieve, update, and manage data that is contained in SharePoint. SharePoint offers the client libraries in different formats to accommodate most developers. For web developers who are using scripting languages, the client library is offered in JavaScript. For .NET developers, it is offered as a .NET client managed DLL. For developers of Silverlight applications, the client library is provided by a Silverlight DLL.
  
    
    
See the articles in Table 2 for more information about what you can do with the client object model in SharePoint.
  
    
    

**Table 2. Basic tasks for using the client object model with external data**


|**Task**|**Description**|
|:-----|:-----|
| [Complete basic operations using SharePoint client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx) <br/> |Learn how to write code to perform basic operations with the SharePoint client object model.  <br/> |
| [How to: Use the client code library to access external data in SharePoint](how-to-use-the-client-code-library-to-access-external-data-in-sharepoint) <br/> |Learn how to use the SharePoint client object model to work with SharePoint BCS objects using browser-based scripting.  <br/> |
   
The following are some basic examples of tasks you can accomplish using CSOM.
  
    
    

### Get a specific entity

This example shows how to get context from SharePoint, and then retrieve a specified data source entity.
  
    
    

```cs

ClientContext ctx = new ClientContext("http://sharepointservername"); 
Web web = ctx.Web; 
ctx.Load(web); 
Entity entity = ctx.Web.GetEntity("http://sharepointservername", "EntityName"); 
ctx.Load(entity); 
ctx.ExecuteQuery(); 

```


### Create a generic invoker

This example shows how to write a generic invoker so that you can create an entity object to work within your code.
  
    
    

```cs

ObjectCollection myObj; 
entity.Execute("MethodInstanceName", lsi, myObj); 
ctx.Load(myObj); 
ctx.ExecuteQuery(); 

```


### Retrieve paged result sets

The following example shows how to retrieve a filtered, paged dataset. In this case, the page value is 50.
  
    
    

```cs

// Find filters for given Method Name. 
FilterCollection fCollection = entity.GetFilters("methodName"); 
ctx.Load(fCollection); 
ctx.ExecuteQuery(); 
FilterCollection modifiedFCollection = new FilterCollection(); 
foreach( Filter filter in fCollection) 
{ 
    if( filter.FilterField.equals("X.Y.Z.Country")) 
    { 
        filter.FilterValue = "India"; 
        modifiedFCollection.Add(Filter); 
    } 
    if(filter.FilterType == FilterType.Limit) 
    { 
        filter.FilterValue = 50; 
        modifiedFCollection.Add(Filter); 
    } 
} 
EntityInstanceCollection eCollection = entity.FindFiltered(modifiedFCollection, 
"nameOfFinder", lsi); 
ctx.ExecuteQuery(); 

```


### Query for filtered information

The following example demonstrates how to return a filtered result set. In this case, the data column filtered is the **X.Y.Z.Country** field. The code looks for anything with the value of "India", and then puts that into a collection.
  
    
    

```cs

// Find filters for given Method Name. 
FilterCollection fCollection = entity.GetFilters("methodName"); 
ctx.Load(fCollection); 
ctx.ExecuteQuery(); 
FilterCollection modifiedFCollection = new FilterCollection(); 
foreach( Filter filter in fCollection) 
{ 
    if( filter.FilterField.equals("X.Y.Z.Country")) 
    { 
        filter.FilterValue = "India"; 
        modifiedFCollection.Add(Filter); 
    } 
} 
EntityInstanceCollection eCollection = entity.FindFiltered(modifiedFCollection, 
"nameOfFinder", lsi); 
ctx.ExecuteQuery(); 

```


## Beyond the basics: Learn more about the client object model
<a name="BCScsom_Learnmore"> </a>

For more information about using the client object model in SharePoint, see the information in Table 3.
  
    
    

**Table 3. Advanced concepts for the client object model**


|**Article**|**Description**|
|:-----|:-----|
| [BCS client object model reference for SharePoint](bcs-client-object-model-reference-for-sharepoint) <br/> |Summarizes the objects available for creating client-side scripts using the SharePoint client object model to access external data exposed by BCS.  <br/> |
   

## Additional resources
<a name="BCScsom_Learnmore"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint)
    
  
-  [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx)
    
  
-  [How to: Use the client code library to access external data in SharePoint](how-to-use-the-client-code-library-to-access-external-data-in-sharepoint)
    
  
-  [Complete basic operations using SharePoint client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx)
    
  
-  [SharePoint: Access complex external content types with CSOM](http://code.msdn.microsoft.com/office/SharePoint-Accessing-ccbc24cf)
    
  
