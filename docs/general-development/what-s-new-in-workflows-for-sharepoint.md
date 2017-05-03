---
title: What's new in workflows for SharePoint
ms.prod: SHAREPOINT
ms.assetid: 1d51421b-61ac-46b6-a865-52f968ddc5b3
---


# What's new in workflows for SharePoint
Learn about the capabilities and features that are new to workflows in SharePoint.
The workflow framework in SharePoint is significantly changed from previous versions. The following sections provide brief summaries of the most significant updates and enhancements to the workflow infrastructure.
  
    
    


## Completely redesigned workflow infrastructure
<a name="SP15Whatsnewinworflow_infrastructure"> </a>

SharePoint workflows are powered by Windows Workflow Foundation 4 (WF), which was substantially redesigned from previous versions. Windows Workflow Foundation, in turn, is built on the messaging functionality that is provided by  [Windows Communication Foundation (WCF)](http://msdn.microsoft.com/en-us/netframework/aa663324).
  
    
    
Perhaps the most prominent feature of the new workflow infrastructure is the introduction of Microsoft Azure as the new workflow execution host. The workflow execution engine now lives outside of SharePoint, in Microsoft Azure. Figure 1 provides a generalized, high-level view of the new workflow infrastructure. For a more thorough discussion of the concepts presented in Figure 1, see  [SharePoint workflow fundamentals](sharepoint-workflow-fundamentals.md).
  
    
    

**Figure 1. High-level architecture of the workflow infrastructure**

  
    
    

  
    
    
![High-level workflow architecture](../../images/wfArchitecture1.png)
  
    
    

  
    
    

  
    
    

## Fully declarative, no-code authoring environment
<a name="SP15Whatsnewinworflow_environment"> </a>

Another of the prominent changes is that workflows on the WF 4 platform are fully declarative. That is, workflows are no longer compiled into managed assemblies and deployed to an assembly cache. Instead, XAML files define your workflows and frame their execution.
  
    
    

## Enhanced SharePoint Designer 2013 authoring support
<a name="SP15Whatsnewinworflow_SPDauthoring"> </a>

SharePoint Designer 2013 has been updated with the goal of making it the authoring environment of choice for authoring SharePoint workflows. SharePoint Designer 2013 provides workflow authors with both a designer surface and a text-based workflow authoring environment. Additionally, you can develop workflow custom actions in Visual Studio 2012 and then import them into SharePoint Designer 2013, where they can then be accessed from the Workflow Designer.
  
    
    
In short, the needs of both the information worker (the "power user") and the developer have been harnessed in SharePoint workflow authoring and development environments.
  
    
    

## Visual Studio 2012 workflow project type support
<a name="SP15Whatsnewinworflow_VSworkflow"> </a>

To make collaboration easier between information worker and software developer, Visual Studio 2012 provides SharePoint workflow project types and a workflow custom action-item type. For more information about developing workflows by using Visual Studio 2012, and for information about differentiating between SharePoint Designer 2013 and Visual Studio 2012 in workflow development, see  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md).
  
    
    

## Support for creating custom actions
<a name="SP15Whatsnewinworflow_customactions"> </a>

A lot of effort has gone into anticipating the business requirements of workflow authors in the providing of workflow templates, actions, and activities in SharePoint Designer 2013 and in Visual Studio 2012. However, we also know that we cannot anticipate each person's specific needs. For this reason, Visual Studio 2012 provides a workflow custom action-item type that lets developers create custom actions. For more information about workflow custom actions, see  [How to: Build and deploy workflow custom actions](how-to-build-and-deploy-workflow-custom-actions.md).
  
    
    

## Tools support for SharePoint workflows
<a name="SP15Whatsnewinworflow_Tools"> </a>

Visual Studio 2012 provides templates and support for creating workflows on the SharePoint workflow framework. SharePoint workflows are similar to previous versions of workflows except that they are powered by WF 4 and run in Microsoft Azure. They are also declarative-only (XAML) and designed to interact with the cloud and work with SharePoint Add-ins. One of their primary benefits is that they enable you to remotely host and run workflows outside SharePoint Server.
  
    
    

## New workflow actions
<a name="SP15Whatsnewinworflow_Newwfactions"> </a>

Following are new workflow actions that are provided in SharePoint. For a full detailing of both new and deprecated actions, see  [Workflow actions and activities reference for SharePoint](workflow-actions-and-activities-reference-for-sharepoint.md). New to workflows in SharePoint are a set of workflow actions that allow you to integrate with Project 2013 and let you create Project-based workflows.
  
    
    

**Table 1. New workflow actions in SharePoint**


|**Action**|**Description**|
|:-----|:-----|
|Assign a Task  <br/> |Assigns a single workflow task to a user or group.  <br/> |
|Start a Task Process  <br/> |Initiates execution of a task process.  <br/> |
|Go to This Stage  <br/> |Specifies the next stage in a workflow to which flow control should be handed.  <br/> |
|Call HTTP Web Service  <br/> |Functions as a method call to a Representational State Transfer (REST) endpoint.  <br/> |
|Start a List Workflow  <br/> |Starts a list-scoped workflow.  <br/> |
|Start a Site Workflow  <br/> |Starts a site-scoped workflow.  <br/> |
|Build DynamicValue  <br/> |Creates a new variable of type **DynamicValue**.  <br/> |
|Get Property from DynamicValue  <br/> |Retrieves a property value from a specified variable of type **DynamicValue**.  <br/> |
|Count Items in DynamicValue  <br/> |Returns the number of rows in a variable of type **DynamicValue**.  <br/> |
|Trim String  <br/> |Removes all leading and trailing white-space characters from the current string.  <br/> |
|Find Substring in String  <br/> |Returns 1-based index of the first occurrence of one or more characters, or the first occurrence of a string, within a string.  <br/> |
|Replace Substring in String  <br/> |Returns a new string in which all occurrences of a specified character or string are replaced with another specified character or string.  <br/> |
|Translate Document  <br/> |Functions as a wrapper around the HTTP activity that calls the synchronous translation API. You must configure a Machine Translation Service Application for the SharePoint site on which you run the workflow.  <br/> |
|Set Workflow Status  <br/> |Updates workflow status as specified in message string.  <br/> |
|Create a Project from Current Item [Microsoft Project]  <br/> |Creates a Project Server project based on the current item.  <br/> |
|Set the current project stage status to this value [Microsoft Project]  <br/> |Sets the two status fields within the current stage of the project.  <br/> |
|Set the status field in the idea list item to this value [Microsoft Project]  <br/> |Updates the status field of the original SharePoint list item.  <br/> |
|Wait for Project Event [Microsoft Project]  <br/> |Pauses the current instance of the workflow to await a specified Project event: Project checked in, Project committed, Project submitted.  <br/> |
|Set this field in the project to this value [Microsoft Project]  <br/> |Sets the value for the enterprise custom field for a specified project.  <br/> |
   

## Additional resources
<a name="SP15Whatsnewinworflow_Addresources"> </a>


-  [Get started with workflows in SharePoint](get-started-with-workflows-in-sharepoint.md)
    
  
-  [What's new for developers in SharePoint](what’s-new-for-developers-in-sharepoint.md)
    
  
-  [Workflow actions and activities reference for SharePoint](workflow-actions-and-activities-reference-for-sharepoint.md)
    
  
-  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md)
    
  

