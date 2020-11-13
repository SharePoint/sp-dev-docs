---
title: SharePoint workflow object model
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: be615a89-3201-4cd8-bbc7-15f3abf9f668
localization_priority: Normal
---


# SharePoint workflow object model
Get a brief introduction to the workflow object model in SharePoint.

> [!NOTE]
> SharePoint 2010 workflows have been retired since August 1, 2020 for new tenants and removed from existing tenants on November 1, 2020. If you’re using SharePoint 2010 workflows, we recommend migrating to Power Automate or other supported solutions. For more info, see [SharePoint 2010 workflow retirement](https://support.microsoft.com/office/sharepoint-2010-workflow-retirement-1ca3fff8-9985-410a-85aa-8120f626965f).

## SharePoint workflow object model
<a name="bk_SPwfom"> </a>

The SharePoint object model is built on top of the .NET Framework 4 object model for Windows Workflow Foundation 4, but with innovations that enable workflow functionality in SharePoint generally, and in SharePoint Add-ins in particular. The native .NET Framework 4 object model for Windows Workflow Foundation 4 is located in the .NET Framework  [System.Workflow namespaces](https://msdn.microsoft.com/library/gg145026.aspx).
  
    
    
One way to think of the SharePoint workflow object model is as a set of workflow services. There are four services: 
  
    
    

- **Instance management service:** Manages workflow instances and their execution.
    
  
- **Deployment service:** Manages the deployment of workflow definitions.
    
  
- **Interop service:** Manages the interop bridge for supporting legacy workflows.
    
  
- **Messaging service:** Manages message queuing and transport.
    
  

### SharePoint workflow namespaces

The SharePoint workflow object model, on the other hand, is contained in ten namespaces: five of them are SharePoint namespaces, and five others are Microsoft Office namespaces.
  
    
    
 **Microsoft.SharePoint** namespaces:
  
    
    

-  [Microsoft.SharePoint.Workflow](https://msdn.microsoft.com/library/Microsoft.SharePoint.Workflow.aspx)
    
  
-  [Microsoft.SharePoint.Workflow.Application](https://msdn.microsoft.com/library/Microsoft.SharePoint.Workflow.Application.aspx)
    
  
-  [Microsoft.SharePoint.WorkflowActions](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowActions.aspx)
    
  
-  [Microsoft.SharePoint.WorkflowActions.WithKey](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowActions.WithKey.aspx)
    
  
-  [Microsoft.SharePoint.WorkflowServices](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.aspx)
    
  
-  [Microsoft.SharePoint.WorkflowServices.Activities](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.Activities.aspx)
    
  
 **Microsoft.Office** namespaces:
  
    
    

-  [Microsoft.Office.Workflow](https://msdn.microsoft.com/library/Microsoft.Office.Workflow.aspx)
    
  
-  [Microsoft.Office.Workflow.Actions](https://msdn.microsoft.com/library/Microsoft.Office.Workflow.Actions.aspx)
    
  
-  [Microsoft.Office.Workflow.Feature](https://msdn.microsoft.com/library/Microsoft.Office.Workflow.Feature.aspx)
    
  
-  [Microsoft.Office.Workflow.Routing](https://msdn.microsoft.com/library/Microsoft.Office.Workflow.Routing.aspx)
    
  
-  [Microsoft.Office.Workflow.Utility](https://msdn.microsoft.com/library/Microsoft.Office.Workflow.Utility.aspx)
    
  

### SharePoint workflow schemas

Reference content for SharePoint schemas is contained in the reference node entitled  [Workflow schemas](https://msdn.microsoft.com/library/b36ded16-3ffd-4931-811e-c402c1e35b07%28Office.15%29.aspx), and contain the following:
  
    
    

-  [WorkflowActions4 schema reference](https://msdn.microsoft.com/library/1c0112de-0139-e64d-d3d6-658541695391%28Office.15%29.aspx)
    
  
-  [WorkflowActions3 schema reference](https://msdn.microsoft.com/library/7a03ead8-30e0-4601-9c6f-edfb04ce57f9%28Office.15%29.aspx)
    
  
-  [Workflow configuration schema reference](https://msdn.microsoft.com/library/63824239-6eb2-4cf1-ba84-44eace4d3781%28Office.15%29.aspx)
    
  
-  [WorkflowInfo schema reference](https://msdn.microsoft.com/library/f3bdcc70-15a0-44b2-9b01-330f13430354%28Office.15%29.aspx)
    
  

## See also
<a name="bk_additionalresources"> </a>


-  [A Developer's Introduction to Windows Workflow Foundation (WF) in .NET 4](https://msdn.microsoft.com/library/ee342461.aspx)
    
  
-  [Windows Workflow Foundation 4.0: Hello, workflow!](http://weblogs.asp.net/gunnarpeipman/archive/2009/07/08/windows-workflow-foundation-4-0-hello-workflow.aspx)
    
  
-  [Windows Workflow Foundation (WF) Screencasts](https://msdn.microsoft.com/netframework/dd733248)
    
  
-  [Workflow actions and activities reference for SharePoint](workflow-actions-and-activities-reference-for-sharepoint.md)
    
  
-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  

  
    
    

