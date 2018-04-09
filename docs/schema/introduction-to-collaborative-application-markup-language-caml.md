---
title: "Introduction to Collaborative Application Markup Language (CAML)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- caml (collaborative application markup language) [sharepoint 2010],schemas [SharePoint 2010], CAML,Collaborative Application Markup Language (CAML) [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 031feabc-095e-4c62-91b6-904a739da923
description: "Last modified: July 15, 2011"
---

# Introduction to Collaborative Application Markup Language (CAML)

 **Last modified:** July 15, 2011 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Collaborative Application Markup Language (CAML) is an XML-based language that is used in Microsoft SharePoint Foundation to define the fields and views that are used in sites and lists.
  
> [!NOTE]
> CAML is case-sensitive. 
  
## Site Customization with CAML

CAML can be used in various ways to customize a SharePoint site, including the following:
  
- In script or code that implements members of the SharePoint Foundation object model, where CAML strings are passed through method parameters, assigned to properties, or returned by methods and properties
    
- In SOAP messaging that passes CAML strings to a SharePoint Foundation Web service to interact remotely with a deployment
    
- In front-end site definitions used to instantiate SharePoint sites
    
- In SharePoint Foundation Features to add specific functionality within a particular scope
    
## Rendering with CAML

CAML is used for two types of rendering in SharePoint Foundation: to define the type of data that is contained within a field, and to construct HTML that is displayed in the browser. For information on the two major uses of CAML, see [Data-Defining Elements](data-defining-elements.md) and [HTML-Rendering Elements](html-rendering-elements.md).
  
## Programming with CAML

The following programming tasks and overview topics illustrate various ways in which CAML is used to customize site and list definitions:
  
- [How to: Create a Custom Site Definition and Configuration](http://msdn.microsoft.com/library/62b0552d-b7a7-4856-b906-c7bcb3155792%28Office.15%29.aspx)
    
- [How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6%28Office.15%29.aspx)
    
- [How to: Create a Simple Feature](http://msdn.microsoft.com/library/c7dc2cfb-0cfa-44d8-b95f-4b95b1847e18%28Office.15%29.aspx)
    
- [How to: Customize a Delegate Control](http://msdn.microsoft.com/library/9db44a39-33df-43d9-b873-3b41310090af%28Office.15%29.aspx)
    
- [How to: Add Actions to the User Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054%28Office.15%29.aspx)
    
- [How to: Create an Event Handler Feature](http://msdn.microsoft.com/library/4f70b1ea-dafe-4068-a6b0-55402b7618dc%28Office.15%29.aspx)
    
- [How to: Create a Custom List Definition](http://msdn.microsoft.com/library/6f0aed4a-d80a-4e42-8f12-c6b83c8cc207%28Office.15%29.aspx)
    
- [How to: Add a Document Template, File Type, and Editing Application to a Site Definition](http://msdn.microsoft.com/library/09503b28-df8c-4e22-b4f8-7272fd1dac2b%28Office.15%29.aspx)
    
- [Creating a Solution](http://msdn.microsoft.com/library/74e59a33-4e52-4282-99aa-0d17c322fa70%28Office.15%29.aspx)
    
- [How to: Add a Content Type to a List](http://msdn.microsoft.com/library/5ae6e295-a406-4f90-920f-030c0dfcd666%28Office.15%29.aspx)
    
- [How to: Add a Content Type to a Site](http://msdn.microsoft.com/library/8c448bfb-4036-451c-ac7d-2eccf13ccd5e%28Office.15%29.aspx)
    
- [How to: Deploy a Workflow Template](http://msdn.microsoft.com/library/ce2d465e-55cf-4465-8c98-c1c7c7a37e68%28Office.15%29.aspx)
    
- [How to: Add a Column to a List](http://msdn.microsoft.com/library/01ca58dc-2158-4526-a72d-036aaa2e6258%28Office.15%29.aspx)
    
- [How to: Reference a Column in a Content Type](http://msdn.microsoft.com/library/532c0174-a347-4ce2-8e5a-e129cdbe09f2%28Office.15%29.aspx)
    
- [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)
    
## See also

#### Other resources

[Working with Site Templates and Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01%28Office.15%29.aspx)
  
[Guidelines for Using Custom Site Definitions, Configurations, and Templates](http://msdn.microsoft.com/library/bc4e01b7-2aca-4cce-8bfa-4b647f95ff1d%28Office.15%29.aspx)

