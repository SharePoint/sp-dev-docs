---
title: Workflow actions and activities reference for SharePoint
ms.date: 09/25/2017
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.assetid: 88e09f75-480f-4a68-87a6-b496350345cc
ms.localizationpriority: high
---


# Workflow actions and activities reference for SharePoint
Learn about the workflow actions that are available for workflow authoring in SharePoint Designer 2013, and the workflow activity classes that are available to workflow developers using Visual Studio 2012.

> [!NOTE]
> SharePoint 2010 workflows have been retired since August 1, 2020 for new tenants and removed from existing tenants on November 1, 2020. If you’re using SharePoint 2010 workflows, we recommend migrating to Power Automate or other supported solutions. For more info, see [SharePoint 2010 workflow retirement](https://support.microsoft.com/office/sharepoint-2010-workflow-retirement-1ca3fff8-9985-410a-85aa-8120f626965f).

## Workflow activities and actions
<a name="bkm_Activities"> </a>

Workflow activities represent the code-level objects that handle method calls to the various APIs that drive workflow behaviors. You interact with workflow activities in code, using or another development environment.
  
    
    
For a list of available activities, see  [Workflow activity classes in SharePoint](workflow-activity-classes-in-sharepoint.md).
  
    
    
On the other hand, workflow actions are wrapper objects that encapsulate these underlying activities and present them in a user-friendly form in SharePoint Designer. You interact with workflow actions in SharePoint Designer.
  
    
    
For a list of available workflow actions, see  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md) and [Workflow actions available using the workflow interop bridge](workflow-actions-available-using-the-workflow-interop-bridge.md).
  
    
    

## Windows Workflow Foundation 4.0 activities
<a name="bkm_WF4"> </a>

Although the SharePoint platform and infrastructure provide you with specially crafted activity classes for creating custom SharePoint workflows, you can also use any of the activities that are provided by Windows Workflow Foundation (WF) 4.0. These WF 4.0 activity classes are available in the Microsoft .NET Framework 4 in the  [System.Activities.Statements](https://msdn.microsoft.com/library/system.activities.statements.aspx) namespace.
  
    
    
The WF 4.0 activity classes provide some useful features that you may not find in the SharePoint activity class library. For example, WF 4.0 includes the **If** class, which allows you to create conditional activities. Additionally, you can use the [System.ServiceModel.Activities.Send](https://msdn.microsoft.com/library/system.servicemodel.activities.send.aspx) activity to connect to web services.
  
    
    

## In this section
<a name="bkm_inthissection"> </a>


-  [Workflow activity classes in SharePoint](workflow-activity-classes-in-sharepoint.md)
    
  
-  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md)
    
  
-  [Workflow actions available using the workflow interop bridge](workflow-actions-available-using-the-workflow-interop-bridge.md)
    
  

## See also
<a name="bkm_addlres"> </a>


-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  
-  [SharePoint workflow fundamentals](sharepoint-workflow-fundamentals.md)
    
  
-  [Workflows in SharePoint](workflows-in-sharepoint.md)
    
  

