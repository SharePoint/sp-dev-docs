---
title: Workflow development in SharePoint Designer and Visio
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 496780d5-47d6-4a43-bf14-70aefb8d820c
---


# Workflow development in SharePoint Designer and Visio
Learn to use Visio 2013 and SharePoint Designer 2013 to create and publish workflows to a SharePoint site without needing any code.
## Introduction
<a name="VSSPD_Intro"> </a>

Visio 2013 and SharePoint Designer 2013 make it easy for business analysts, process consultants, and IT professionals to collaborate and build workflows. Both Visio Professional 2013 and the Visual Designer in SharePoint Designer 2013 provide a rich representation of workflows in a format that is understandable to programmers and non-programmers alike.
  
> [!NOTE] 
> For guidance on setting up and configuring SharePoint and the Workflow Manager server, see  [Configure workflow in SharePoint](http://technet.microsoft.com/en-us/library/jj658586.aspx). 
  
    
    

By using Visio 2013, you can visually create a SharePoint workflow, export the workflow to SharePoint Designer 2013, and then publish that workflow to a SharePoint site. After a workflow has been created in Visio 2013, it must be exported to SharePoint Designer 2013. Then, a SharePoint site owner or IT professional adds parameters to the workflow by using either the workflow text editor or the new Visual Workflow Designer, which is a Visio 2013 ActiveX control that is hosted in SharePoint Designer 2013. After the workflow has been completed, it can be published to the SharePoint site.
  
    
    
This is ideal for business analysts and process consultants who are already familiar with flowcharts in Visio, because it allows them to design a workflow that represents business logic. The person who designs the workflow can focus solely on the business intelligence (BI) needs of the workflow without needing to be an expert in declarative workflows.
  
    
    

## About creating SharePoint Workflows in Visio 2013 and SharePoint Designer 2013
<a name="VSSPD_About"> </a>

Visio 2013 includes a SharePoint Workflow template that can be used to build SharePoint workflows. The SharePoint Workflow template is associated with three stencils: SharePoint Workflow Actions, SharePoint Workflow Conditions, and SharePoint Workflow Terminators. The shapes in these stencils correspond to specific actions and conditions that can be used within a SharePoint workflow. To build a workflow, you need only to drag shapes onto the drawing canvas in Visio 2013 to model the business logic behind the workflow.
  
    
    

### Stages, loops, and steps

Workflows in SharePoint Designer 2013 now include the notions of stages, loops, and steps. Workflow authors can group a number of individual actions and conditions as a single unit to more clearly define the process. For example, there could be an Approval or Request Feedback stage or step. Within that stage or step would be all of the actions that are necessary for that process. The stage or step itself might be one node of a longer workflow and would allow a viewer to see the status of that stage as a whole, rather than a set of individual actions.
  
    
    
The SharePoint Workflow template that is included in Visio 2013 also uses stages, loops, and steps as logical building blocks for creating a workflow. 
  
    
    

> **Important:**
> Because of the underlying differences between the Microsoft SharePoint 2010 Workflow template and the SharePoint Workflow template, you cannot use shapes from one template within a diagram created by the other. Only shapes from the SharePoint Workflow Actions, SharePoint Workflow Conditions, and SharePoint Workflow Terminators stencils can be used to build a SharePoint workflow. 
  
    
    


### Stage shapes

A stage can contain any number of shapes and may include branching. However, there can be only one path into a stage (and a step) and one path out. All actions in the workflow must be contained by a stage. Stage shapes are visualized by using container shapes. A Stage shape requires that an Enter and an Exit shape be added to the edges of the container to define the paths in and out of the stage. Visio 2013 and the Visual Designer in SharePoint Designer 2013 add the Enter and Exit shapes for you when you first drop the container.
  
    
    
Stages also have the following rules:
  
    
    

- All diagrams must have at least one stage. A stage, complete with Enter, Exit, and Start shapes are present as part of the default SharePoint Workflow template.
    
  
- When you add a new stage to the drawing canvas, Visio 2013 will add Start and End connectors when the stage is dropped.
    
  
- Stages cannot have any connectors coming in or going out other than through the Enter and Exit shapes.
    
  
- Stage containers cannot be nested. If you want to nest another sub-process within a stage, use a step.
    
  
- Stop Workflow shapes may exist within a stage.
    
  
- An explicit Start shape is required outside of the stage for the entire diagram. An explicit Terminate shape outside of the stage is not required.
    
  
- At the top level, the workflow can contain only stages, conditional shapes, and Start and Terminate terminators. All other shapes must be contained within a stage.
    
  

### Loop shapes

Loops are a series of connected shapes that will execute as a loop, returning from the last shape in the series to the first, until a condition is satisfied. 
  
    
    
Like stages, loops are represented by a container shape that includes an Enter and Exit shape (added when the shape is dropped on the drawing canvas). A Loop shape also requires that an Enter and Exit shape be added to the edges of the container to define the paths in and out of the loop.
  
    
    
Visio 2013 and SharePoint Designer 2013 support two types of loops: loop  *n*  times and loop until *value1*  equals *value2*  .
  
    
    
Loops must also conform to the following rules:
  
    
    

- Loops must be within a stage, and stages cannot be within a loop.
    
  
- Steps may be within a loop.
    
  
- Loops may have only one entry and one exit point.
    
  

### Step shapes

Steps represent a grouped series of sequential actions. Steps must be contained by a stage. A step shape must also have an Enter and Exit shape to define the paths in and out of the shape. Both shapes are added by default when the shape is dropped onto the canvas.
  
    
    

## Creating a workflow in Visio 2013
<a name="VSSPD_Creating"> </a>

All of the master shapes in the SharePoint Workflow stencils correspond to actions, conditions, and other logical constructs within a SharePoint workflow. To build a workflow, you can drag shapes onto the drawing canvas, just like any other flowchart in Visio. After you have finished building the workflow in Visio 2013, save the workflow before SharePoint Designer 2013 can open it.
  
    
    
To open the SharePoint Workflow template in Visio 2013, do the following:
  
    
    

### To open the SharePoint Workflow template in Visio 2013


1. Open Visio 2013.
    
  
2. Choose **New**.
    
  
3. Under **Template Categories**, choose **Flowchart**.
    
  
4. Under **Choose a Template**, choose **SharePoint Workflow** and then choose **Create**.
    
    The template opens and the drawing canvas is prepopulated with Start, and Stage shapes. The Stage shape contains an Enter and an Exit shape, joined by a single connector.
    
  
With the SharePoint Workflow template open, drag actions, conditions, and other shapes onto the drawing canvas to design a workflow. For more information about individual shapes and what they mean, see the article  [Shapes in the SharePoint Server workflow template in Visio](shapes-in-the-sharepoint-server-workflow-template-in-visio.md).
  
    
    

> **Tip:**
>  When designing a workflow, keep the following additional considerations in mind:
>  - To quickly build a workflow, drop action and condition shapes onto the internal connector that is contained by new stage shapes. Visio 2013 automatically splits the connector into additional connectors, keeping the workflow connected from the Enter shape to the Exit shape.
>  - Do not use any shapes from a stencil other than the SharePoint Workflow Actions, SharePoint Workflow Conditions, and SharePoint Workflow Terminators stencils. Use only the Connector tool provided by the SharePoint Workflow template to add connections between shapes. All other connector shapes are not valid within a SharePoint workflow.
>  - Action shapes, steps, and loops must always be contained within a Stage shape. Some conditional shapes can be outside of a stage.
>  - A Stage shape must have exactly one Enter shape and one Exit shape. The workflow sub-process that is contained within the stage must start with the Enter shape and end with the Exit shape.
>  - A condition shape must have two connectors leaving the shape, one labeled "Yes" and the other labeled "No." You can right-click a connector to choose **Yes** or **No**. 
>  - A workflow must have only one Start shape. The Start shape must be outside of a stage.
>  - You add text to shapes in the workflow, but the shape text will not affect the workflow.
  
    
    


  
    
    
Validating the workflow in Visio 2013 is like validating any other connected diagram: Visio checks the diagram against a set of rules and returns a list of errors that it found in the diagram. See the article  [Troubleshooting SharePoint Server workflow validation errors in Visio](troubleshooting-sharepoint-server-workflow-validation-errors-in-visio.md) to learn how to resolve validation issues.
  
    
    

### To validate a SharePoint workflow in Visio 2013


1. On the **Process** tab, in the **Diagram Validation** group, choose **Check Diagram**.
    
  
2. If any errors are found in the workflow, the **Issues** pane opens below the diagram. Choose each item in the list to select the shape in the diagram that caused the error.
    
  
3. Resolve each validation error listed in the **Issues** list. Once all of the errors have been addressed, choose **Check Diagram** again. For more information about how to resolve validation issues in Visio 2013, see the article [Troubleshooting SharePoint Server workflow validation errors in Visio](troubleshooting-sharepoint-server-workflow-validation-errors-in-visio.md).
    
  
4. If no errors are found in the workflow, Visio displays a message stating that the diagram validation is complete and that no issues were found.
    
  
After the workflow has been successfully validated in Visio 2013, you can save the file and import it into SharePoint Designer 2013. Unlike the Microsoft SharePoint 2010 Workflow template, you can save a copy of the SharePoint Workflow diagram as the default Visio 2013 file format (.vsdx) and SharePoint Designer 2013 can open the file. 
  
    
    
Use the following procedure to save a SharePoint workflow in Visio 2013 as a Visio 2013 .vsdx file that can be opened in SharePoint Designer 2013:
  
    
    

### To save a workflow in Visio 2013


1. Choose **File**, and then choose **Save As**.
    
  
2. Under **Save As**, choose **Save**, and then choose **Browse**.
    
  
3. In the **Save As** dialog box, select a location to save the file and type a name for the file ("My SP Workflow").
    
  
4. Choose **Save**.
    
  

## Customizing and publishing a workflow in SharePoint Designer 2013
<a name="VSSPD_Customizing"> </a>

Once you have created the underlying business logic for a SharePoint workflow in Visio 2013 and saved the diagram, you can open the Visio .vsdx file in SharePoint Designer 2013 and begin tailoring the workflow to your SharePoint site. The .vsdx file package contains XML documents that SharePoint Designer 2013 can translate into workflows.
  
    
    
Use the following procedure to open a SharePoint site in SharePoint Designer 2013:
  
    
    

### To open a SharePoint site in SharePoint Designer 2013


1. Open SharePoint Designer 2013.
    
  
2. Under **Open SharePoint Site**, choose **Open Site**.
    
  
3. In the **Open Site** dialog box, select the site that you want to open.
    
  
4. Choose **Open**.
    
  
Once the SharePoint site is open, you can open the Visio 2013 .vsdx diagram within SharePoint Designer 2013.
  
    
    

### To open a Visio Professional 2013 workflow in SharePoint Designer 2013


1. Choose **File**, and then choose **Add Item**.
    
  
2. To create a List Workflow, do the following:
    
1. Under **Workflows**, choose **List Workflow**.
    
  
2. In the left pane under **List Workflow**, type a name for your workflow (My First SP2013 Workflow) and select the list on the site that you want to publish the workflow to.
    
  
3. In the **Choose the workflow platform for the new workflow** list, select **SharePoint Workflow**.
    
  
4. Choose **Create**.
    
  
3. To create a Site Workflow, do the following:
    
1. Under **Workflows**, choose **Site Workflow**.
    
  
2. In the left pane, under **Site Workflow**, type a name for your workflow (My First SP2013 Workflow).
    
  
3. In the **Choose the workflow platform for the new workflow** list, select **SharePoint Workflow**.
    
  
4. Choose **Create**.
    
  
4. On the **Workflow** tab, in the **Manage** group, choose **Workflow Settings**.
    
  
5. On the **Workflow Settings** tab, in the **Manage** group, choose **Import from Visio.**
    
  
6. In the **Import Workflow from Visio Drawing** dialog box, browse to the location where the .vsdx file is located.
    
  
7. Select the file that you want to open (My SP Workflow), and then choose **Open**.
    
  
When you open a .vsdx file in SharePoint Designer 2013, the file is displayed in the Visual Designer, a Visio ActiveX control that is hosted within SharePoint Designer. The Visio 2013 diagram retains all of the shapes and shape text that was created in Visio. 
  
> [!NOTE] 
> To switch between the Visual Designer and the Declarative Designer in SharePoint Designer 2013, on the **Workflow** tab, in the **Manage** group, choose **Views**. This process may take a few moments, as SharePoint Designer 2013 validates the workflow and then converts the workflow information from one format to another. During this process, another shape level validation will occur. If any errors are detected with the diagram, the errors will be displayed in an error pane at the bottom of the canvas (just like in Visio). 
  
    
    

The shapes that are displayed in the Visual Designer also have Action Tags (shown by a workflow settings type icon on the bottom left hand side of the shape). When you choose an Action Tag, a drop-down menu displays the attributes for that action or condition in the workflow and **Properties** property. These properties will define the parameter values to be used for that action: which lists to pull items from, what calculation operator to use, or which email address to send a message to. When you choose a property that is displayed in the list, a dialog box appears in which you can customize the settings for that property.
  
    
    
For example, the **Send an email** shape has two properties associated with it: **Create Email** and **Properties**. When you choose **Create Email**, a **Define Email Message** dialog box appears in which you can create the message to be sent by the action. If you choose **Properties**, a **Send an Email Properties** dialog box appears that displays all of the parameters for the action.
  
> [!NOTE] 
> For more information about individual actions, shapes, and their properties, see the articles  [Shapes in the SharePoint Server workflow template in Visio](shapes-in-the-sharepoint-server-workflow-template-in-visio.md) and [Workflow actions quick reference (SharePoint Workflow platform.md)](workflow-actions-quick-reference-sharepoint-workflow-platform.md). 
  
    
    

Once you have set the properties within the workflow and are ready to publish, you must first check the workflow for errors in SharePoint Designer 2013. When you choose **Publish** in the **Visual Designer** tab in the ribbon, SharePoint Designer 2013 automatically checks the workflow for errors. If you want, you can also manually initiate the error checking.
  
    
    
Use the following procedure to check the SharePoint workflow in SharePoint Designer 2013:
  
    
    

### To manually check a workflow for errors in SharePoint Designer 2013


1. On the **Visual Designer** tab, in the **Save** group, choose **Check for Errors**.
    
  
2. If any errors are found in the workflow, the **Issues** pane opens below the Visual Designer canvas. Choose each item in the list to select the action, condition, connector, terminator, or container in the workflow that caused the error.
    
  
3. Resolve each validation error listed in the **Issues** list. Once all of the errors have been addressed, choose **Check for Errors** again.
    
  
4. If no errors are found in the workflow, SharePoint Designer displays a message stating that no issues were found in the workflow.
    
  
After the workflow has been checked and no issues have been found, you can publish the workflow to the SharePoint list. To publish the workflow from SharePoint Designer 2013, on the **Visual Designer** tab, in the **Save** group, choose **Publish**. If any errors occur during the publishing process, SharePoint Designer 2013 returns to the Visual Designer and displays the errors in the **Issues** pane.
  
    
    

## Additional Resources
<a name="VSSPD_Additional"> </a>

For more information, see the following resources:
  
    
    

-  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md)
    
  
-  [Shapes in the SharePoint Server workflow template in Visio](shapes-in-the-sharepoint-server-workflow-template-in-visio.md)
    
  
-  [Troubleshooting SharePoint Server workflow validation errors in Visio](troubleshooting-sharepoint-server-workflow-validation-errors-in-visio.md)
    
  
-  [Create, import, and export SharePoint workflows in Visio 2010](http://office.microsoft.com/en-us/visio-help/create-import-and-export-sharepoint-workflows-in-visio-HA101888007.aspx)
    
  
-  [SharePoint Developer Center](http://msdn.microsoft.com/en-us/sharepoint/default.aspx)
    
  
-  [Visio Developer Center](http://msdn.microsoft.com/en-us/office/aa905478)
    
  

