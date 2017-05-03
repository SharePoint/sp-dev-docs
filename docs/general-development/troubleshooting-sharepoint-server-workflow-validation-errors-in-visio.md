---
title: Troubleshooting SharePoint Server workflow validation errors in Visio
ms.prod: SHAREPOINT
ms.assetid: c21cc3e2-45bd-4d34-a57d-dd0954436bd8
---


# Troubleshooting SharePoint Server workflow validation errors in Visio
Use this reference to resolve validation and error-checking issues in the Microsoft SharePoint Workflow template in Microsoft Visio 2013 and Microsoft SharePoint Designer 2013.
## SharePoint workflow validation issues
<a name="VSSPD_Trouble_Issues"> </a>

The following table lists all of the validation issues that can appear in the Issues pane in Microsoft Visio 2013 or the Visual Designer in Microsoft SharePoint Designer 2013. Each error has a suggested action to take for resolving the problem.
  
    
    


|**Error text**|**Suggested action**|
|:-----|:-----|
|Duplicate connections exist between workflow shapes.  <br/> |Remove the redundant connector by selecting and deleting it.  <br/> |
|Loop back to parent shape is not allowed within a stage or step.  <br/> |Neither Visio Professional 2013 nor SharePoint Designer 2013 supports workflows with implicit loops inside of a stage. Check your workflow for loops and delete the looping connections. If you want to create a SharePoint workflow that includes a set of looping steps inside of a stage, you must use the loop containers. Any actions inside of these containers will loop. Another option is to use stages that go-to a previous stage.  <br/> |
|Parallel activities that are also sequential are not allowed.  <br/> |Activities can be either parallel or sequential, but not both simultaneously. For parallel activities, remove the sequential connectors. For sequential activities, remove the parallel connectors. Sometimes, simultaneously parallel and sequential activities can be difficult to identify. The following validation errors show other common instances of parallel and sequential arrangement and offer alternative arrangements.  <br/> To avoid having connectors point to the same activity from multiple paths, try duplicating the activity.  <br/> |
|The condition shape does not have connections labeled with Yes or No.  <br/> |Right-click the connector to assign the label "Yes" or "No."  <br/> |
|The condition shape must have outgoing connections with label Yes and No.  <br/> |Ensure that condition shapes have outgoing connectors attached to other workflow shapes. Each condition shape must have a "Yes" and a "No" outgoing connection.  <br/> |
|The connector is not a SharePoint workflow connector. Use AutoConnect or the connector tool to connect your shapes.  <br/> |Avoid reusing connectors from other diagrams as they are not necessarily designed to be used with SharePoint workflows. Delete the selected connector and use the connector tool or AutoConnect to replace with a new connector.  <br/> |
|The connector must be connected to two workflow shapes.  <br/> |Remove dead-end connectors or attach them to a second shape.  <br/> |
|The diagram must only have one workflow and one Start shape.  <br/> |All paths must originate from the same Start shape. Remove extra Start shapes and arrange the connectors so that the path starts in one place.  <br/> |
|The shape is not a SharePoint workflow shape. Only SharePoint workflow shapes can be connected in a workflow.  <br/> |Only workflow shapes from the SharePoint Workflow stencils can be used in the Microsoft SharePoint Workflow template. Other flowchart shapes are not recognized and prevent the workflow from being exported to SharePoint Designer.  <br/> |
|The Start shape must not have incoming connections.  <br/> |Remove the incoming connector to the Start shape.  <br/> |
|The workflow must have a Start shape.  <br/> |Add a Start shape to the beginning of the workflow and connect it to the first activity.  <br/> |
|The workflow shape is not connected to the workflow.  <br/> |If the workflow shape is necessary, add connectors to attach it to the workflow path. Otherwise, delete the shape.  <br/> |
|Workflow nesting levels must not exceed a maximum of 10.  <br/> |Visio 2013 can recognize a maximum of 10 levels of nesting workflow activities. Rearrange the workflow to reduce complexity by eliminating activities or dividing the workflow path into more than one branch.  <br/> |
|The start shape can only be connected to a workflow stage shape.  <br/> |All workflow diagrams must begin with only one Start shape. The Start shape must be connected to a Stage shape. If necessary, add a Start shape to the beginning of the workflow. You can also add a Start shape to the beginning of the workflow in Stage view in Visio 2013.  <br/> |
|A stage cannot be nested within any other shape.  <br/> |Stages are top-level shapes in SharePoint workflow diagrams. You cannot place a shape within any other container shape, including steps, loops, or other stages.  <br/> If possible, move the stage so that it is outside of all other container shapes and reconnect the stage. If you want to create a logical grouping of actions and conditions within a stage or loop, use a Step shape instead.  <br/> |
|A stage can only be connected to another stage, condition shape, or a terminator.  <br/> |Stages can be connected only to other top-level shapes, including conditions, terminators, or other stages. A stage cannot be connected to actions, steps, or loops at the top level. Rearrange the workflow diagram so that the stage is connected only to other top-level shapes.  <br/> |
|Stage, step, and loop containers cannot be overlapped.  <br/> |The boundaries of container shapes, such as stages, steps, and loops, cannot touch or overlap. If you want to include one container shape within another (for example, include a loop within a stage), be sure that the contained shape is entirely within the bounds of the container. If you do not want one container shape to be contained by the other, space out the shapes in your diagram so that the bounds of the container shapes no longer cross or touch each other.  <br/> |
|Workflow shapes from other templates/versions are not valid workflow shapes.  <br/> |You can use shapes only from the SharePoint Workflow Actions, SharePoint Workflow Conditions, and SharePoint Workflow Terminators stencils, and connectors that are created with AutoConnect or the Connector tool associated with the template in a Microsoft SharePoint Workflow diagram. All other shapes are not valid connections within the workflow validation rules. You can place other shapes on the design canvas as long as they are not connected to the Workflow.  <br/> If you need to include an action or condition that is not represented with a shape in one of the stencils associated with the Microsoft SharePoint Workflow template, consider creating a custom workflow action. Custom workflow actions can be created in Microsoft Visual Studio 2012 and incorporated into SharePoint workflows in SharePoint Designer 2013. For more information about how to create custom actions in Visual Studio 2012, see the article  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md).  <br/> |
|A shape cannot be connected outside of the start/end path of the current shape's container.  <br/> |All shapes contained within a stage, loop, or step must be entirely contained within that container shape. Shapes cannot connect to any shapes that are not contained in the same container. Rearrange the workflow diagram so that all actions, conditions, loops, and steps within the container shape connect to other shapes in the container.  <br/> If the shape must connect to an activity outside of the container, connect the shape to the Exit shape associated with the container.  <br/> |
|Invalid transition shape.  <br/> |When a non-condition or non-stage shape is added at the base level of the workflow. Only stages and conditions may exist at the base level of a workflow. Any other shapes that are added to this level will cause this error. You should encapsulate non-condition and non-stage shapes in a condition or stage shape.  <br/> |
|Stages, steps, and loops may have only one incoming and one outgoing connection.  <br/> |All container shapes can have only one incoming connector to the Enter shape that is associated with them. Similarly, container shapes can have only one outgoing connector from their Exit shape. Rearrange the diagram so that each container has a single incoming and outgoing path. You may need to add additional stages or Junction shapes to the workflow to fix this error.  <br/> |
|A stage name must be unique and cannot be empty.  <br/> |Each stage in the workflow must have a unique name. Switch to Stage view and be sure that each stage has its own name.  <br/> |
|The Project stage has not been configured.  <br/> |For Project based workflows, every stage must be linked to a stage on the Project Server. If a stage has not been linked to a stage on the server, you will see this error. To correct this issue, open the Stage property grid and set a stage from the stage drop-down.  <br/> |
|A parallel activity must begin with a Start Parallel Branch shape.  <br/> |Check each parallel activity in the workflow to be sure that it has a Start Parallel Branch shape before the parallel activity begins.  <br/> |
   

## Additional resources
<a name="VSSPD_Trouble_Additional"> </a>


-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  
-  [Shapes in the SharePoint Server workflow template in Visio](shapes-in-the-sharepoint-server-workflow-template-in-visio.md)
    
  
-  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md)
    
  
-  [Create, import, and export SharePoint workflows in Visio 2010](http://office.microsoft.com/en-us/visio-help/create-import-and-export-sharepoint-workflows-in-visio-HA101888007.aspx)
    
  
-  [SharePoint Developer Center](http://msdn.microsoft.com/en-us/sharepoint/default.aspx)
    
  
-  [Visio Developer Center](http://msdn.microsoft.com/en-us/office/aa905478)
    
  

