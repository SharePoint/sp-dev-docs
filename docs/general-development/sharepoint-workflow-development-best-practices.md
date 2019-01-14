---
title: SharePoint VSS Writer
ms.date: 09/25/2017
ms.prod: sharepoint
localization_priority: Normal
---


# SharePoint workflow development best practices
Provides a collection of best practices for developers using Visual Studio to create workflows in SharePoint.
## Workflow development best practices

To develop error-free workflows for SharePoint, it is best to follow some general guidelines, or "best practices." This is the case whether you are using SharePoint Designer 2013 or Visual Studio 2012 for workflow development.
  
    
    

-  [Apps for SharePoint that contain integrated workflows must edit a tag in the workflowmanifest.xml file](sharepoint-workflow-development-best-practices.md#bkm_00)
    
  
-  [When you use the Log To History List action, more information is better](sharepoint-workflow-development-best-practices.md#bkm_01)
    
  
-  [Write the value of every string and variable that you construct to the history list](sharepoint-workflow-development-best-practices.md#bkm_02)
    
  
-  [Output a trace log before and after each step or important unit of work in the workflow](sharepoint-workflow-development-best-practices.md#bkm_03)
    
  
-  [Verify that variables are non-null and contain expected values](sharepoint-workflow-development-best-practices.md#bkm_04)
    
  
-  [Ensure that strings in workflow text fields do not exceed 255 characters](sharepoint-workflow-development-best-practices.md#bkm_05)
    
  
-  [Use elevated permissions on a neutral account when using impersonation](sharepoint-workflow-development-best-practices.md#bkm_06)
    
  
-  [In reusable workflows, use Association columns to ensure error-free list fields](sharepoint-workflow-development-best-practices.md#bkm_07)
    
  
-  [Workflow design: Model a business process in a single workflow](sharepoint-workflow-development-best-practices.md#bkm_08)
    
  
-  [Workflow design: Using the Approval action effectively](sharepoint-workflow-development-best-practices.md#bkm_09)
    
  

### Apps for SharePoint that contain integrated workflows must edit a tag in the workflowmanifest.xml file
<a name="bkm_00"> </a>

SharePoint Add-ins that contain integrated workflows (which can be associated with lists on the parent web) are differentiated from normal workflow apps by changing the following tag to **true** in the `workflowmanifest.xml` file in the app package:
  
    
    

```XML

<SPIntegratedWorkflow xmlns="http://schemas.microsoft.com/sharepoint/2014/app/integratedworkflow">
    <IntegratedApp>true</IntegratedApp>
</SPIntegratedWorkflow>

```


### When you use the Log To History List action, more information is better
<a name="bkm_01"> </a>

The **Log To History List** action (or [LogToHistoryListActivity](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowActions.LogToHistoryListActivity.aspx) class if you are using Visual Studio) lets you record information about what a workflow has done at a given point in the workflow's lifecycle. This makes it one of the most important troubleshooting tools you have. The more information you provide at important points in the workflow, the easier it is to troubleshoot unexpected events.
  
    
    
For more information, see the following: 
  
    
    

-  [Workflow actions in SharePoint Designer 2010: A quick reference guide](https://support.office.com/en-us/article/Workflow-actions-in-SharePoint-Designer-2010-A-quick-reference-guide-5a7ad276-0ed7-49b0-b652-e56a77dd96c6?CorrelationId=9cff0340-2d05-4878-b3a0-aecb30b862ed&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA010376961)
    
  
-  [LogToHistoryListActivity](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowActions.LogToHistoryListActivity.aspx) class
    
  
-  [How to: Log to the History List from a Workflow Activity](http://msdn.microsoft.com/en-us/library/ff798337.aspx)
    
  
-  [Using the Log to History List SharePoint workflow action for debugging](http://www.documentmanagementworkflowinfo.com/sample-sharepoint-workflows/use-log-to-history-list-sharepoint-designer-workflow-action-debug)
    
  

### Write the value of every string and variable that you construct to the history list
<a name="bkm_02"> </a>

Debugging workflows that were created using SharePoint Designer is much easier if you write strings and variables to the history list by using the **Log to History List** action.
  
    
    
For more information, see the following: 
  
    
    

-  [Workflow actions in SharePoint Designer 2010: A quick reference guide](https://support.office.com/en-us/article/Workflow-actions-in-SharePoint-Designer-2010-A-quick-reference-guide-5a7ad276-0ed7-49b0-b652-e56a77dd96c6?CorrelationId=9cff0340-2d05-4878-b3a0-aecb30b862ed&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA010376961)
    
  
-  [LogToHistoryListActivity](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowActions.LogToHistoryListActivity.aspx) class
    
  
-  [How to: Log to the History List from a Workflow Activity](http://msdn.microsoft.com/en-us/library/ff798337.aspx)
    
  
-  [Using the Log to History List SharePoint workflow action for debugging](http://www.documentmanagementworkflowinfo.com/sample-sharepoint-workflows/use-log-to-history-list-sharepoint-designer-workflow-action-debug)
    
  

### Output a trace log before and after each step or important unit of work in the workflow
<a name="bkm_03"> </a>

To assist with debugging workflows, it is important that you capture meaningful information prior to and following each significant unit of work; this information should be committed to trace logs. For more information, see the following:
  
    
    

-  [Writing to the Trace Log](http://msdn.microsoft.com/en-us/library/aa979595.aspx)
    
  
-  [Using Event and Trace Logs in SharePoint](http://msdn.microsoft.com/en-us/library/ff647362.aspx)
    
  

### Verify that variables are non-null and contain expected values
<a name="bkm_04"> </a>

Before using variables in your workflows, ensure there are no null variables. Also, ensure that variables contain expected values and are of the correct data type. For more information, see  [Variables and Arguments](http://msdn.microsoft.com/en-us/library/dd489456.aspx).
  
    
    

### Ensure that strings in workflow text fields do not exceed 255 characters
<a name="bkm_05"> </a>

The maximum allowable length for strings in workflow text fields is 255 characters. If you set your text field to exceed this limit, its content will be truncated to 255 characters.
  
    
    

### Use elevated permissions on a neutral account when using impersonation
<a name="bkm_06"> </a>

When using impersonation steps in a workflow, you should author the workflow using a neutral account (that is, an account that is not tied to a specific user). This prevents your workflows from breaking if the author's account becomes obsolete for any reason.
  
    
    
For more information, see  [Create a workflow with elevated permissions by using the SharePoint Workflow platform](create-a-workflow-with-elevated-permissions-by-using-the-sharepoint-workflo.md).
  
    
    

### In reusable workflows, use Association columns to ensure error-free list fields
<a name="bkm_07"> </a>

If you create a reusable workflow that relies on its list having a specific field, you may either (1) restrict the workflow to a content type that has the specified field, or (2) make the field an association column. Option 2 is recommended because it's possible that a content type will change and cause the workflow to break.
  
    
    

### Workflow design: Model a business process in a single workflow
<a name="bkm_08"> </a>

Where possible, it is much better to model a business process in a single workflow than to break the workflow logic into several smaller workflows.
  
    
    

### Workflow design: Using the Approval action effectively
<a name="bkm_09"> </a>

Where possible, instead of creating multiple **Approval** actions, it is more effective to use the **Stages** feature within an **Approval** action.
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [Workflows in SharePoint](workflows-in-sharepoint.md)
    
  
-  [SharePoint workflow fundamentals](sharepoint-workflow-fundamentals.md)
    
  
-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  

