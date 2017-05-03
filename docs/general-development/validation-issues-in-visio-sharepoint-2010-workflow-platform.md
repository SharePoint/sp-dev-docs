---
title: Validation issues in Visio (SharePoint 2010 Workflow platform)
ms.prod: SHAREPOINT
ms.assetid: 416c8269-3c4e-40f4-bc20-a625f07a4dac
---


# Validation issues in Visio (SharePoint 2010 Workflow platform)
Use this reference to help resolve validation issues when you export a SharePoint workflow from Visio Professional 2013 to SharePoint Designer 2013. 
This article describes validation issues that might arise when you use the SharePoint 2010 Workflow platform in SharePoint Designer 2013.
  
    
    


## Introduction
<a name="section1"> </a>

When you export a SharePoint workflow from Microsoft Visio Professional 2013 to Microsoft SharePoint Designer 2013, the diagram must first be validated. If the workflow diagram is not valid, an **Issues** window appears that includes a list of issues that must be repaired before the workflow can be exported..
  
    
    
This article includes a description, example, and suggested action for each of the workflow validation issues that you can receive in Visio Professional 2013. If you receive notice of an issue during validation, find the issue name in the list below, use the example to help identify where the problem is, and then follow the suggested action to resolve it.
  
    
    

## A custom action cannot be added to a workflow diagram
<a name="section2"> </a>

Message:
  
    
    
A Custom action cannot be added to a workflow diagram. The Custom action can only be generated when importing workflow from SharePoint Designer.
  
    
    
Example:
  
    
    

  
    
    
![A custom action cannot be added.](../../images/spd15-wf-error1.JPG)
  
    
    
Suggested action:
  
    
    
If you want to add an action to your workflow and a master shape does not exist for it in the stencil, do not create your own shape or import one from a different stencil. Instead, use an existing shape, and then use the **Add Comment** feature of the shape to specify the intended behavior.
  
    
    

## A Custom condition cannot be added to a workflow diagram
<a name="section3"> </a>

Message:
  
    
    
A Custom condition cannot be added to a workflow diagram. The custom condition can only be generated when importing workflow from SharePoint Designer.
  
    
    
Example:
  
    
    

  
    
    
![A custom condition cannot be added](../../images/spd15-wf-error2.JPG)
  
    
    
Suggested action:
  
    
    
If you want to add a condition to your workflow and a master shape does not exist for it in the stencil, do not create your own shape or import one from a different stencil. Instead, use an existing shape, and then use the **Add Comment** feature of the shape to specify the intended behavior.
  
    
    

## A Compound condition cannot be manually added to a workflow diagram
<a name="section4"> </a>

Message:
  
    
    
A Compound condition cannot be manually added to a workflow diagram. The compound condition can only be generated when importing workflow from SharePoint Designer.
  
    
    
Example:
  
    
    

  
    
    
![A compound condition cannot be manually added](../../images/spd15-wf-error3.JPG)
  
    
    
Suggested action:
  
    
    
If you want to add a condition to your workflow and a master shape does not exist for it in the stencil, do not create your own shape or import one from a different stencil. Instead, use an existing shape, and then use the **Add a Comment** feature of the shape to specify the intended behavior.
  
    
    

## Duplicate connections exist between workflow shapes
<a name="section5"> </a>

Message:
  
    
    
Duplicate connections exist between workflow shapes.
  
    
    
Example:
  
    
    

  
    
    
![Duplicate connections exist between shapes](../../images/spd15-wf-error4.JPG)
  
    
    
Suggested action:
  
    
    
Remove the redundant connector by selecting and deleting it.
  
    
    

## Loop back to parent shape is not allowed
<a name="section6"> </a>

Message:
  
    
    
Loop back to parent shape is not allowed.
  
    
    
Example:
  
    
    

  
    
    
![Loop back to parent shape is not allowed](../../images/spd15-wf-error5.JPG)
  
    
    
Suggested action:
  
    
    
Neither Visio Professional 2013 nor SharePoint Designer 2013 supports workflows with loops. Check your workflow for loops, and delete the looping connections. If you want to create a SharePoint workflow that includes a set of looping steps, you must create the workflow in Visual Studio.
  
    
    

## Parallel activities that are also sequential are not allowed
<a name="section7"> </a>

Message:
  
    
    
Parallel activities that are also sequential are not allowed.
  
    
    
Example:
  
    
    

  
    
    
![Parallel activities that are also sequential](../../images/spd15-wf-error6.JPG)
  
    
    
Suggested action:
  
    
    
Activities can be either parallel or sequential, but not both simultaneously. For parallel activities, remove the sequential connectors. For sequential activities, remove the parallel connectors. Sometimes, simultaneously parallel and sequential activities can be difficult to identify. The following examples show other common instances of parallel and sequential arrangement and offer alternative arrangements.
  
    
    
Example:
  
    
    

  
    
    
![Avoid pointing to an activity from multiple paths](../../images/spd15-wf-error7.JPG)
  
    
    
Suggested action:
  
    
    
To avoid having connectors point to the same activity from multiple paths, try duplicating the activity:
  
    
    

  
    
    
![Parallel activities that are also sequential](../../images/spd15-wf-error8.JPG)
  
    
    
Example:
  
    
    

  
    
    
![Parallel activities that are also sequential](../../images/spd15-wf-error9.JPG)
  
    
    
Suggested action:
  
    
    
If dealing with parallel blocks in sequential steps (usually found in workflows constructed by using SharePoint Designer), try using the "Add a Comment" shape between the two parallel blocks so that the steps are separated cleanly.
  
    
    

  
    
    
![Parallel activities that are also sequential](../../images/spd15-wf.JPG)
  
    
    

  
    
    

  
    
    

## The condition shape does not have connections labeled with Yes or No
<a name="section8"> </a>

Message:
  
    
    
The condition shape does not have connections labeled with Yes or No.
  
    
    
Example:
  
    
    

  
    
    
![Condition shape does not have yes/no connections](../../images/spd15-wf-error11.JPG)
  
    
    
Suggested action:
  
    
    
Right-click the connector to assign a "Yes" or "No" label.
  
    
    

## The condition shape must have at least one outgoing connection with label Yes or No
<a name="section9"> </a>

Message:
  
    
    
The condition shape must have at least one outgoing connection with label Yes or No.
  
    
    
Example:
  
    
    

  
    
    
![Condition shape must have an outgoing connection](../../images/spd15-wf-error12.JPG)
  
    
    
Suggested action:
  
    
    
Ensure that the condition shape has at least one outgoing connector attached to another workflow shape.
  
    
    

## The connector is not a SharePoint Workflow connector
<a name="section10"> </a>

Message:
  
    
    
The connector is not a SharePoint Workflow connector. Ensure the correct connector is used by using the connector tool or AutoConnect.
  
    
    
Example:
  
    
    

  
    
    
![Ensure the correct connector is used](../../images/spd15-wf-error13.JPG)
  
    
    
Suggested action:
  
    
    
Avoid reusing connectors from other diagrams, because they are not necessarily designed to be used with SharePoint workflows. Delete the selected connector, and use the connector tool or AutoConnect to replace it with a new connector.
  
    
    

## The connector must be connected to two workflow shapes
<a name="section11"> </a>

Message:
  
    
    
The connector must be connected to two workflow shapes.
  
    
    
Example:
  
    
    

  
    
    
![Connector must be connected to two workflow shapes](../../images/spd15-wf-error14.JPG)
  
    
    
Suggested action:
  
    
    
Remove dead-end connectors or attach them to a second shape.
  
    
    

## The diagram must only have one workflow and one Start shape
<a name="section12"> </a>

Message:
  
    
    
The diagram must only have one workflow and one Start shape.
  
    
    
Example:
  
    
    

  
    
    
![Diagram must only have one workflow and one start](../../images/spd15-wf-error15.JPG)
  
    
    
Suggested action:
  
    
    
All paths must originate from the same **Start** shape. Remove extra **Start** shapes, and arrange the connectors so that the path starts in one place.
  
    
    

## The shape is not a SharePoint workflow shape. Only SharePoint workflow shapes can be connected in a workflow
<a name="section13"> </a>

Message:
  
    
    
The shape is not a SharePoint workflow shape. Only SharePoint workflow shapes can be connected in a workflow.
  
    
    
Example:
  
    
    

  
    
    
![The shape is not a SharePoint workflow shape](../../images/spd15-wf-error16.JPG)
  
    
    
Suggested action:
  
    
    
Only workflow shapes from the SharePoint workflow stencils can be used in the Microsoft SharePoint Workflow template. Other flowchart shapes are not recognized, and they prevent the workflow from being exported to SharePoint Designer 2013.
  
    
    

## The Start shape must not have incoming connections
<a name="section14"> </a>

Message:
  
    
    
The Start shape must not have incoming connections.
  
    
    
Example:
  
    
    

  
    
    
![The start shape must not have incoming connections](../../images/spd15-wf-error17.JPG)
  
    
    
Suggested action:
  
    
    
Remove the incoming connector to the **Start** shape.
  
    
    

## The Terminate shape must not have outgoing connections
<a name="section15"> </a>

Message:
  
    
    
The Terminate shape must not have outgoing connections.
  
    
    
Example:
  
    
    

  
    
    
![Terminate shape must not have outgoing connections](../../images/spd15-wf-error18.JPG)
  
    
    
Suggested action:
  
    
    
Remove the outgoing connector from the **Terminate** shape.
  
    
    

## The workflow must have a Start shape
<a name="section16"> </a>

Message:
  
    
    
The workflow must have a Start shape.
  
    
    
Example:
  
    
    

  
    
    
![The workflow must have a start shape](../../images/spd15-wf-error19.JPG)
  
    
    
Suggested action:
  
    
    
Add a **Start** shape to the beginning of the workflow, and connect it to the first activity.
  
    
    

## The workflow shape is not connected to a Terminate shape
<a name="section17"> </a>

Message:
  
    
    
The workflow shape is not connected to a Terminate shape.
  
    
    
Example:
  
    
    

  
    
    
![Workflow shape is not connected to a terminate](../../images/spd15-wf-error20.JPG)
  
    
    
Suggested action:
  
    
    
If the workflow does not have a **Terminate** shape, add one and connect it to the end of the workflow. If a workflow shape is missing a connection to another workflow shape (see example), you can remove it or connect it to another workflow shape.
  
    
    

## The workflow shape is not connected to the workflow
<a name="section18"> </a>

Message:
  
    
    
The workflow shape is not connected to the workflow.
  
    
    
Example:
  
    
    

  
    
    
![Workflow shape is not connected to the workflow](../../images/spd15-wf-error21.JPG)
  
    
    
Suggested action:
  
    
    
If the workflow shape is necessary, add connectors to attach it to the workflow path. Otherwise, delete the shape.
  
    
    

## Workflow nesting levels must not exceed a maximum of 10
<a name="section19"> </a>

Message:
  
    
    
Workflow nesting levels must not exceed a maximum of 10.
  
    
    
Suggested action:
  
    
    
Visio Professional 2013 can recognize a maximum of 10 levels of nested workflow activities. Rearrange the workflow to reduce complexity by eliminating activities or dividing the workflow path into more than one branch.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [What's new in workflows for SharePoint](what-s-new-in-workflows-for-sharepoint.md)
    
  
-  [Get started with workflows in SharePoint](get-started-with-workflows-in-sharepoint.md)
    
  
-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  

  
    
    

