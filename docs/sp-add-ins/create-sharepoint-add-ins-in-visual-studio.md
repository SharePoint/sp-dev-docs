---
title: Create SharePoint Add-ins in Visual Studio
ms.prod: SHAREPOINT
ms.assetid: f1b9c858-907c-4558-b671-3b488ece40a0
---



# Create SharePoint Add-ins in Visual Studio
Learn to develop SharePoint Add-ins by using templates for projects and project items in Visual Studio.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

You can develop SharePoint Add-ins by using new templates for projects and project items in  **vsnv**. 
 

## Project templates
<a name="SP15Projecttemplates_templates"> </a>

When you use a project template in Visual Studio, it creates a solution that contains the project items and files that the project type requires. The following project templates appear in the  **New Project** dialog box if you expand the **Office/SharePoint** node and then you choose the **Add-ins** node. For information about the project templates under the **SharePoint Solutions** node, see [SharePoint Project and Project Item Templates](http://go.microsoft.com/fwlink/?LinkId=255306). 
 

 

### Office Add-in

Creates a webpage that's hosted inside an Office application, such as Excel or Outlook. An Office Add-in provides additional content and functionality in a document or Outlook item. For more information, see  [Office Add-ins platform overview](http://msdn.microsoft.com/library/e64de870-ce22-4331-92e7-76d35279bf91%28Office.15%29.aspx).
 

 

### SharePoint Add-in

Creates a SharePoint Add-in based on the information that you specify in a wizard. This information includes the following data.
 

 

- The name of the add-in.
    
 
- The local or remote SharePoint site to use for debugging your add-in.
    
 
- The type of add-in that you want to create: provider-hosted or SharePoint-hosted. 
    
 
For more information, see  [SharePoint Add-ins](sharepoint-add-ins.md).
 

 

### Cloud Business Add-in

By using the  **Cloud Business Add-in** template in Visual Studio, you can create a SharePoint-hosted add-in in which mobile users can view, add, and update data from remote locations by using modern, touch-oriented devices such as phones and tablets. For more information, see [Create cloud business add-ins](create-cloud-business-add-ins.md).
 

 

## Project item templates
<a name="SP15Projecttemplates_items"> </a>

After you create a SharePoint solution, you can add project items to it by using the following templates, which appear in the  **Add New Item** dialog box under the **Office/SharePoint** node.
 

 

### Office Add-in

Adds an Office Add-in to your SharePoint Add-in. You can add a task pane add-in, a content add-in, or a mail add-in. For more information, see  [Office Add-ins platform overview](http://msdn.microsoft.com/library/e64de870-ce22-4331-92e7-76d35279bf91%28Office.15%29.aspx).
 

 

### Client Web Part (Host Web)

Adds a client web part to your SharePoint Add-in. By adding a client web part, you can display add-ins on the pages of a host site. This template contains a single Elements.xml file, whose properties define the following elements of the client web part.
 

 


|**Property Name**|**Description**|
|:-----|:-----|
|ClientWebPart|Specifies the name, the title, the description, and the dimensions of the client web part.|
|Content|Defines the location of the page that renders inside the client web part. This element has two properties:  `Type` and `Src`.  `Type` specifies the type of web part that you're creating, such as HTML. `Src` defines the location of the page that will render inside the client web part. The template references properties on the query string by using the pattern _ _PropertyName__, such as  `Src="~addinWebUrl/Pages/ClientWebPart1.aspx?Property1=_property1_"`For more information, see  [Create add-in parts to install with your SharePoint Add-in](create-add-in-parts-to-install-with-your-sharepoint-add-in.md).|

### Content Type

Adds a content type to your SharePoint Add-in, similar to content types that were used in previous versions of SharePoint. A content type is a set of metadata, workflows, and behavior for a category of items in a SharePoint list or library. For example, an item is one type of list content. Other types of list content include announcements, contacts, and tasks, and they inherit from the item content type. The contact content type contains columns such as  **First Name**,  **Last Name**, and  **Job Title**.
 

 
When you add a content type to your SharePoint Add-in, you specify the base content type from which the new content type inherits. For example, it can inherit from an announcement, a contact, a document, or an item content type. You then use the  **Content Type** designer to configure the columns for the content type and its other properties, such as its name and its description. The values that you choose are added to the `ContentType` and `FieldRef` elements in the Elements.xml file. For more information, see [Building Block: SharePoint 2010 Content Types](http://msdn.microsoft.com/library/277dfc42-d9a8-4fae-9ae1-0d202b14674f%28Office.15%29.aspx).
 

 

### Empty Element

Adds a project item for an empty element to your SharePoint Add-in. This project item contains a single file, Elements.xml, where you define the properties of the element. You typically use an empty element to define an item for which Visual Studio doesn't provide a template.
 

 

### List

Adds two project items to your SharePoint Add-in: a list definition and an instance of the list. When you add a list to your add-in, you specify what to name the list and whether to create either a blank list or a list that's based on an existing list type. You also specify whether the list can be customized. Then you use the  **List Designer** to configure the columns and views for the list and other properties, such as the list's name and description. For more information about list properties, see [ListTemplate Element (List Template)](http://msdn.microsoft.com/library/e565ead9-adcb-4a90-97e3-04850719420a%28Office.15%29.aspx) and [ListInstance Element (List Instance)](http://msdn.microsoft.com/library/cfefe8e5-2656-4d71-bb4e-5f991a800598%28Office.15%29.aspx).
 

 

### Menu Item Custom Action

Adds a project item that extends the UI of its host site by adding an action to a list menu. The menu custom action contains an Elements.xml file, which you use to define the properties of the action. For more information, see  [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md).
 

 

### Module

Adds a module project item to your SharePoint Add-in. Modules are basically containers that you can use to include other files when you deploy your SharePoint Add-in. To add a file, you copy it into the project under the module in  **Solution Explorer**. A reference to the file is automatically added to the Elements.xml file for the module, and the reference specifies the path and URL of the new file. You can delete the Sample.txt file that's included with the module because it's included only for example purposes.
 

 

### Remote Event Receiver

Adds a project item for a remote event receiver to your SharePoint Add-in and a web application project to your solution, if such a project isn't already present. The web application contains a web service that's associated with the remote event receiver in your SharePoint Add-in. The web service contains a Visual Basic or Visual C# code file whose code executes when a list, a list item, or a web item event occurs in the SharePoint Add-in. If a web application is present, it's associated with the SharePoint Add-in, and the web service is added to that application. For more information, see  [Handle events in SharePoint Add-ins](handle-events-in-sharepoint-add-ins.md).
 

 

### Ribbon Custom Action

Adds a project item that extends the UI of its host site by adding an action to a ribbon. The ribbon custom action contains an Elements.xml file, which defines the properties of the action. For more information, see  [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md).
 

 

### Search Configuration

Adds a project item that enables you to import custom search configuration settings that have been exported from a SharePoint site.
 

 

### Site Column

Adds a project item for a site column to your SharePoint Add-in. The site column contains an Elements.xml file that defines the  `Field` properties of the site column, including the following data.
 

 


|**Property Name**|**Description**|
|:-----|:-----|
|ID|A unique GUID value for the site column.|
|Name|A unique name that's used to reference the site column.|
|DisplayName|A friendly name that appears in the UI.|
|Type|The data type of the site column based on  **SPFieldType**, such as Boolean, lookup, or text.|
|Required|If the column is required, the property is set to  **True**; otherwise, the property is set to  **False**.|
|Group|Specifies the name of the group to which the site column is assigned. The default value for this property is  **Custom Site Columns**.|
For more information, see  [Building Block: Columns and Field Types](http://msdn.microsoft.com/library/58548ade-e439-4931-82a2-fa29bd5afdb7%28Office.15%29.aspx).
 

 

### Workflow

Adds a project item for a Microsoft Azure workflow to your SharePoint Add-in. For more information, see  [Workflows in SharePoint 2013](http://msdn.microsoft.com/library/e0602371-ae22-44be-8a7e-9e47e9f046d6%28Office.15%29.aspx). When you add this type of item, you specify a name for the workflow and whether it's a list or site workflow. As the names suggest, a list workflow works only with a list, and a site workflow works only with the SharePoint site. When you're creating the workflow, you also specify whether to automatically associate the workflow with lists and libraries, and if so, which ones. For every association that you add, a file for it is added to the workflow project. A workflow contains the following files.
 

 


|**File Name**|**Description**|
|:-----|:-----|
|Elements.xml|Specifies the configuration of the workflow and the files that it contains, such as the workflow.xaml file and association files, and the properties of each file, such as its URL, its type, and its path. For each file that's added to the workflow project, a corresponding section is added to the Elements.xml file for the workflow. Association files in list workflows require a list, so they have a reference to the list token. In a site workflow, a GUID is added for the site. **Caution**  Because Visual Studio maintains the items in the Elements.xml file, we recommend against changing it unless you're familiar with the impact of the changes. |
|Workflow.xaml|Represents the designer for the workflow. In this file, you add actions to the workflow and set their code and properties.|
|WorkflowStartAssociation|Manually starts the workflow on SharePoint. This file is added to the workflow project if you select the  **A user manually starts the workflow** check box in the workflow wizard.|
|ItemAddedAssociation|Starts the workflow automatically if one is present when a user creates an item in the site or list (depending on the workflow type). This file is added to the workflow project if you select the  **The workflow starts automatically when an item is added** check box in the workflow wizard.|
|ItemUpdatedAssociation|Starts the workflow automatically, if one is present when a user changes an item in the site or list (depending on the workflow type). This file is added to the workflow project if you select the  **The workflow starts automatically when an item is changed** check box in the workflow wizard.|
|WorkflowHistoryList|Represents the file that's added to the workflow project if you create a history list for the workflow in the workflow wizard.|
|WorkflowTaskList|Represents the file that's added to the workflow project if you create a task list for the workflow in the workflow wizard.|

### Workflow Custom Activity

Adds a project item for a workflow custom activity to your SharePoint Add-in. By adding a workflow custom activity, you can create additional workflow actions that you can then import as custom actions in SharePoint Designer 2013. The workflow custom activity contains an Elements.xml file, which defines the properties of the action, and a .xaml file for the workflow designer. For more information, see  [Workflows in SharePoint 2013](http://msdn.microsoft.com/library/e0602371-ae22-44be-8a7e-9e47e9f046d6%28Office.15%29.aspx).
 

 

## Additional resources
<a name="SP15Projecttemplates_addlresources"> </a>


-  [Tools and environments for developing SharePoint Add-ins](tools-and-environments-for-developing-sharepoint-add-ins.md)
    
 
