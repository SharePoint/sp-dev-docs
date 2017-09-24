---
title: Prepare to set up and configure a SharePoint workflow development environment
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: b6a3321f-4131-4a8e-9cb7-7a1b4ab9e26b
---


# Prepare to set up and configure a SharePoint workflow development environment
Learn how to set up a workflow development environment to develop SharePoint workflows as free-standing  [apps for SharePoint](http://msdn.microsoft.com/library/fp179930.aspx) by using Visual Studio 2012.
## Overview of workflow development in SharePoint

Although workflows have been a part of SharePoint since early versions, workflows for SharePoint are a much enhanced and improved platform. 
  
    
    

- First, SharePoint workflows are now built on  [Windows Workflow Foundation 4.5](http://msdn.microsoft.com/library/dd489441%28v=vs.110%29), which is part of the .NET Framework 4.5.
    
  
- Second, the workflow execution engine,  [Workflow Manager](http://msdn.microsoft.com/library/windowsazure/jj193528%28v=azure.10%29.aspx), has been decoupled from SharePoint and runs independently. This provides both flexibility and scalability. (Note that for backward compatibility, the legacy 2010 workflow engine remains a part of SharePoint.)
    
  
- Instead of developing workflows by writing C# code, you now build workflows in Visual Studio using a workflow designer that uses declarative expressions.
    
  
- SharePoint workflows integrate with the new app model, which means you can now implement workflows in SharePoint Add-ins.
    
  
- You can also develop SharePoint workflows using SharePoint Designer 2013. For more information, see  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md).
    
  

### Get started

First off, get acquainted with the new app model and the concepts underlying SharePoint Add-ins by dipping into the following: 
  
    
    

|||
|:-----|:-----|
| [SharePoint for developers](http://msdn.microsoft.com/en-us/sharepoint) <br/> |Portal to the SharePoint developer site, where the emphasis is on apps for SharePoint.  <br/> |
| [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx) <br/> |Learn what apps for SharePoint are, why you should build them, and the concepts that are fundamental to building them in SharePoint.  <br/> |
| [New name for apps for SharePoint](http://msdn.microsoft.com/library/05b07b04-6c8b-4b7e-bd86-e32c589dfead%28Office.15%29.aspx) <br/> |Portal to a developer site devoted to building apps for Office and apps for SharePoint.  <br/> |
| [SharePoint development overview](sharepoint-development-overview.md) <br/> |SharePoint is a development platform for apps for SharePoint and farm solutions. Get acquainted with the capabilities and features of SharePoint to start your development.  <br/> |
| [SharePoint workflow fundamentals](sharepoint-workflow-fundamentals.md) <br/> |Provides a high-level overview of the workflow infrastructure in SharePoint, including a view of the platform architecture and the workflow interop bridge.  <br/> |
   
Your next step is to ensure that you have an up-to-date workflow development environment installed. You don't need to develop on the SharePoint server machine, but of course you do need a SharePoint Server installation to develop against.
  
    
    
Here are the components you need. It is important that you install these items in the order presented here:
  
    
    

1. **Install the SharePoint environment**
    
  -  [SharePoint update (KB2767999)](http://support.microsoft.com/kb/2767999)
    
  
  - Optionally, you can subscribe to an  [Office 365 development environment](http://msdn.microsoft.com/library/office/apps/fp179924%28v=office.15%29)
    
  
2. **Install the Workflow Manager environment**
    
  -  [Workflow Manager 1.0 Cumulative (KB2799754)](http://support.microsoft.com/kb/2799754/en-us)
    
  
3. **Install the Visual Studio 2012 development environment**
    
  -  [Visual Studio 2012](http://www.microsoft.com/visualstudio/eng/downloads#vs)
    
  
  -  [Visual Studio 2012 Update 2 (KB2797912)](http://support.microsoft.com/kb/2797912)
    
  
  -  [.NET Framework 4.5 update (KB2750149)](http://support.microsoft.com/kb/2750149/en-us)
    
  
  -  [Office Developer Tools for Visual Studio 2012](http://aka.ms/OfficeDevToolsForVS2012)
    
  

### If you have the "Preview" version

If you have pre-release (that is, "Preview") versions of SharePoint Server, Workflow Manager 1.0, or Office Developer Tools for Visual Studio 2013 (versions prior to March 2013), you must update your installation. Following is a list of appropriate updates:
  
    
    

-  [SharePoint update (KB2767999)](http://support.microsoft.com/kb/2767999)
    
  
-  [Microsoft Azure Service Bus 1.0 Cumulative Update (KB2799752)](http://support.microsoft.com/kb/2799752/en-us)
    
  
-  [Workflow Manager 1.0 Cumulative (KB2799754)](http://support.microsoft.com/kb/2799754/en-us)
    
  

### You must also update workflow projects created with the "Preview" version

The release version of the Visual Studio workflow components and their related updates introduce important changes that enhance performance, scalability, and reliability. Unfortunately, these upgrades require you to update workflow projects that you created using the Preview tools.
  
    
    
To make this process easier, we provide a conversion tool that you can get through CodePlex. The tool is called the  [SharePoint Workflow Converter for Visual Studio 2012](http://wfconverter.codeplex.com/).
  
    
    
Here is a summary of changes that require you to update your workflow projects:
  
    
    

- Activity references to **Item Guid** are replaced by **Item Id**. This change has important consequences:
    
  - The  [LookupSPListItemGuid](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.Activities.LookupSPListItemGuid.aspx) and [GetCurrentItemGuid](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.Activities.GetCurrentItemGuid.aspx) activities are removed from the tooling; their replacement activities are **LookupSPListItemId** and **GetCurrentItemId**.
    
  
  - For other activities that use **Item Guid**, you will find **Item Id** added and **Item Guid** hidden. Your existing projects that use **Item Guid** will continue to work (except on very large lists with more than 5000 items, which is one of the reasons for the change).
    
  
- There is a new packaging format for workflows in apps.
    
  
- The workflow activities assembly reference in XAML has been changed to point to a new design-time proxy assembly instead of the actual SP activities assembly.
    
  

## Additional resources
<a name="bk_addresources"> </a>


-  [Set up an on-premises development environment for SharePoint Add-ins](http://msdn.microsoft.com/library/b0878c12-27c9-4eea-ae3b-7e79e5a8838d%28Office.15%29.aspx)
    
  
-  [What's new in workflows for SharePoint](what-s-new-in-workflows-for-sharepoint.md)
    
  
-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  
-  [Workflows in SharePoint](workflows-in-sharepoint.md)
    
  

