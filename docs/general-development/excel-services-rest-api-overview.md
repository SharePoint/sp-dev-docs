---
title: Excel Services REST API Overview
ms.date: 09/25/2017
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.assetid: 5872f311-e180-4578-ac80-2519c1081951
ms.localizationpriority: high
---


# Excel Services REST API Overview

The REST API in Excel Services is new in Microsoft SharePoint Server 2010. By using the REST API, you can access workbook parts or elements directly through a URL.
  
> [!NOTE]
> The Excel Services REST API for SharePoint Online will no longer be supported for Microsoft 365 accounts from February 28th, 2022 forward. Instead, please use the REST API that’s part of the  [Microsoft Graph](http://graph.microsoft.io/docs/api-reference/v1.0/resources/excel) endpoint.
  
    
    


REST services are based on two requirements:
  
    
    


- An addressing scheme used to locate networked resources
    
  
- A methodology for returning representations of these resources
    
  
REST services are resource-centric. With REST, data is divided into resources, each resource is given a URL, and standard operations are implemented on the resources, which enable operations like creation, retrieval, update, and deletion. 

> [!NOTE]
> For more information about the difference between REST services and custom Web services, see  [Custom Service or RESTful Service](https://msdn.microsoft.com/magazine/dd882522.aspx). 
  
    
    

A REST API for Excel Services enables operations against Excel workbooks by using operations specified in the HTTP standard. This allows for a flexible, secure, and simpler mechanism to access and manipulate Excel Services content.The discovery mechanisms built into the Excel Services REST API also enable developers and users to explore the content of the workbook manually or programmatically by supplying an  [Atom](http://tools.ietf.org/html/rfc4287) feed that contains information about the elements that reside in a specific workbook. Some examples of the resources that you can access through the REST API are charts, PivotTables, and tables.Using the Atom feed provided by the REST API is an easier way of getting to the data that you care about. The feed contains traversable elements that enable any piece of code to discover what elements exist in a workbook. For information about accessing the REST service and obtaining sample URIs for the REST service in Excel Services, see  [Basic URI Structure and Path](basic-uri-structure-and-path.md) and [Sample URI For Excel Services REST API](sample-uri-for-excel-services-rest-api.md).
