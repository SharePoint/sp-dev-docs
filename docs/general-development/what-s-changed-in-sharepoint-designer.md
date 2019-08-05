---
title: What's changed in SharePoint Designer 2013
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: f1cd30c9-9a73-428d-9151-f1813b43b020
localization_priority: Priority
---


# What's changed in SharePoint Designer 2013
Learn about features that are deprecated in or removed from SharePoint Designer 2013. Features that are deprecated are included in the SharePoint release for compatibility with previous product versions but will be removed from future versions.
## Discontinued features in SharePoint Designer 2013
<a name="WhatsChangedSharePointDesigner2013_DiscontinuedFeatures"> </a>

The following features are deprecated in SharePoint Designer 2013 or have been removed.
  
    
    

### SharePoint 2010 Workflow platform
<a name="WhatsChangedSharePointDesigner2013_WorkflowPlatform"> </a>

 **Description of the change.** Some features of the SharePoint 2010 Workflow platform that are dependent on Windows Workflow Foundation 3.0 are deprecated in SharePoint.
  
    
    
 **Reason for the change.**SharePoint introduces a new SharePoint Workflow platform that is built upon Windows Workflow Foundation 4.0 and that is integrated with Workflow Manager 1.0.
  
    
    
 **Migration path.** In SharePoint Designer 2013, you can still create a SharePoint 2010 Workflow and use all of the SharePoint 2010 Workflow features by choosing the SharePoint 2010 Workflow platform.
  
    
    
You can also integrate features from the SharePoint 2010 Workflow platform into the new SharePoint Workflow platform. To do this, create a SharePoint 2010 Workflow by choosing the SharePoint 2010 Workflow platform; create a SharePoint Workflow by choosing the SharePoint Workflow platform; and then use the **Start a list workflow** and **Start a site workflow** actions in the SharePoint Workflow to call the SharePoint 2010 Workflow.
  
    
    
The following features are available only on the SharePoint 2010 Workflow platform:
  
    
    

- Actions:
    
  - Stop Workflow
    
  
  - Capture a Version of the Document Set
    
  
  - Send Document Set to Repository
    
  
  - Set Content Approval Status for the Document Set
    
  
  - Start Document Set Approval Process
    
  
  - Declare Record
    
  
  - Set Content Approval Status
    
  
  - Undeclare Record
    
  
  - Add List Item 
    
  
  - Inherit List Item Parent Permissions
    
  
  - Remove List Item Permissions
    
  
  - Replace List Item Permissions
    
  
  - Lookup Manager of a User
    
  
  - Assign a Form to a Group
    
  
  - Assign a To-Do Item
    
  
  - Collect Data from a User
    
  
  - Start Approval Process
    
  
  - Start Custom Task Process
    
  
  - Start Feedback Process
    
  
  - Copy List Item (SharePoint Designer 2013 supports only the document-copying action.)
    
  
- Conditions:
    
  - If current item field equals value
    
  
  - Check list item permission levels
    
  
  - Check list item permissions
    
  
- Steps:
    
  - Impersonation Step:
    
  
- Data sources:
    
  - User Profile lookup
    
  
- Other features:
    
  - Visio integration
    
  
  - Association Column
    
  
  - Content Type Association for reusable workflow
    
  
  - 'Require Manage List/Web Permission' feature for list/site workflow
    
  
  - Globally reusable workflow type
    
  
  - Workflow visualization option
    
  

### SharePoint page-design features
<a name="WhatsChangedSharePointDesigner2013_PageDesignFeatures"> </a>

The following feature is not available in SharePoint.
  
    
    

#### Design view and Split view
<a name="WhatsChangedSharePointDesigner2013_DesignViewSplitView"> </a>

 **Description of the change.**SharePoint Designer 2010 has three views for editing HTML and ASPX pages: Code view, Design view, and Split view. Design view and Split view are removed from SharePoint Designer 2013. The removal of Design view and Split view affects the features of SharePoint Designer 2013 that are used for editing web parts and master pages. If you edit pages in SharePoint Designer 2013, you must use Code view.
  
    
    
 **Reason for the change.** Compared to current versions of Internet Explorer, Design view is an older technology that does not support many new HTML5 and CSS tags.
  
    
    
 **Migration path.** If you edit pages in Code view, you can press **F12** to preview the page in the browser. Alternatively, you can use Visual Studio to edit pages.
  
    
    
If you want to visually design or brand your site, and you want a WYSIWYG ("what you see is what you get") page-editing experience, you can use any professional HTML editor, such as Microsoft Expression Web. Then you can import your HTML files into SharePoint by using the new Design Manager, which is a feature included in publishing sites, such as the Publishing Portal Site Collection site template.
  
    
    

## See also
<a name="WhatsChangedSharePointDesigner2013_AdditionalResources"> </a>


-  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md)
    
  
-  [Changes from SharePoint 2010 to SharePoint](http://technet.microsoft.com/en-us/library/ff607742%28v=office.15%29.aspx)
    
  
-  [What's new in workflow in SharePoint](http://technet.microsoft.com/en-us/library/jj219638%28v=office.15%29.aspx)
    
  

  
    
    

