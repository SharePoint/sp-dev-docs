---
title: Build farm solutions in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 96c32f08-ad93-49af-b8d0-9d194a48cc79
---


# Build farm solutions in SharePoint
Get an overview of our documentation about developing, packaging, and deploying administrative extensions to SharePoint using farm solutions.
## What are farm solutions?
<a name="WhatAreFarmSolutions"> </a>

SharePoint has its own system for installing extensions to SharePoint administrative functions that is different from other Windows applications and platforms. No MSI file or ClickOnce technology is involved. Instead, the assemblies, XML, and other files in the extension are bundled into a single file, which is called a solution package. A solution package has a .cab-based format but a .wsp file extension. The package can contain SharePoint Features and all their child components in addition to certain kinds of components that are not deployed in Features. Farm administrators upload the packages to a farm-wide storage location from where they can be deployed and their Features activated.
  
    
    
Unlike SharePoint Add-ins, farm solutions contain code that is deployed to the SharePoint servers and makes calls to the SharePoint server object model. These assemblies always run with full trust. Moreover, the Features in farm solutions can have scope as wide as the site collection, web application, or whole farm, in addition to the website scope of Features in SharePoint Add-ins. These aspects of farm solutions sometimes make farm administrators reluctant to install them, unless they come from a well-known and trusted source. For this reason, SharePoint extensions that are primarily for use by end users should be developed as SharePoint Add-ins, not farm solutions. Farm solutions should be used for customizations of SharePoint administrative functions, such as custom timer jobs, custom Windows PowerShell cmdlets, and extensions of Central Administration. For more on the advantages of SharePoint Add-ins and the uses of farm solutions, see  [SharePoint Add-ins compared with SharePoint solutions](sharepoint-add-ins-compared-with-sharepoint-solutions.md).
  
    
    

## Guide to the developer documentation for farm solutions
<a name="Guide"> </a>

Development of farm solutions has changed very little since SharePoint 2010, so this section contains links to the SharePoint 2010 SDK. To avoid confusion, keep the following points in mind at all times when using the SharePoint 2010 SDK to develop against SharePoint:
  
    
    

- You will see many references to "sandboxed solutions" in the SharePoint 2010 SDK. Sandboxed solutions with custom code are deprecated in SharePoint. "no code" sandboxed solutions are still viable.
    
  
- Our recommendation that farm solutions be used primarily for administrative extensions did not apply in SharePoint 2010. Therefore, many of the samples and other documentation in the SharePoint 2010 SDK may be about end-user extensions that are deployed as farm solutions.
    
  
- The terms "server-side" or "server code" in the SharePoint 2010 SDK refer to code that calls the SharePoint server object model. These terms do  *not*  refer to code that runs on remote web servers (that is, web servers external to the SharePoint farm). Code that calls SharePoint from remote web servers, in both SharePoint 2010 and SharePoint, always uses one of the SharePoint *client*  object models. In the SharePoint 2010 SDK, such code would be called "client-side" or "client code."
    
  
- The assemblies in a farm solution in SharePoint 2010 could be deployed with Custom Access Security (CAS) policies. Such policies are ignored in SharePoint; all assemblies in farm solutions in SharePoint run with full trust.
    
  

### Packaging and deployment

The basics of packaging, installing, updating, and localizing farm solutions are explained in  [Solutions Overview](http://msdn.microsoft.com/library/1983cab9-4b29-494a-a62a-0f8e83908744%28Office.15%29.aspx) and the node [Farm Solutions in SharePoint 2010](http://msdn.microsoft.com/library/845f7524-b9ff-412b-aa29-3afacda91100%28Office.15%29.aspx). Development of particular SharePoint components for inclusion in a farm solution is explained in the relevant nodes of SharePoint 2010 SDK. Most of the components in a farm solution should be encapsulated in one or more custom SharePoint Features. For information about designing and creating Features, see the  [Working with Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1%28Office.15%29.aspx) node of the SharePoint 2010 SDK.
  
    
    

### Administrative extensions

Guidance about extending the administrative functions in a SharePoint farm is in the  [Windows SharePoint Services Administration](http://msdn.microsoft.com/library/cdcc1b8a-4144-446f-b471-03d4a754a8ab%28Office.15%29.aspx) node of the SharePoint 2010 SDK. There you can find explanations about extending Central Administration, creating custom Windows PowerShell cmdlets, customizing upgrades and migration, customizing backups, and customizing SharePoint event logging. One section explains how to customize the SharePoint farm health and performance measuring system. For instructions about creating a custom timer job, see [How to: Run Code on All Web Servers](http://msdn.microsoft.com/library/1bbb11b4-a342-4bed-9e7a-b8b13edd0ccc%28Office.15%29.aspx).
  
    
    

## In this section
<a name="Guide"> </a>

The topics in this section describe the ways in which development of SharePoint solutions  *has*  changed.
  
    
    

-  [How to: Customize a field type using client-side rendering](how-to-customize-a-field-type-using-client-side-rendering.md)
    
  
-  [URLs and tokens in SharePoint](urls-and-tokens-in-sharepoint.md)
    
  
-  [Virtual directories in SharePoint solutions](virtual-directories-in-sharepoint-solutions.md)
    
  

## Additional resources
<a name="SP15buildfarm_addlresources"> </a>


-  [Programming models in SharePoint](programming-models-in-sharepoint.md)
    
  

