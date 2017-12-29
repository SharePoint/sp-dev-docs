---
title: Create a workflow with elevated permissions by using the SharePoint Workflow platform
description: Create SharePoint workflows that access objects in SharePoint that require elevated permissions. These solutions grant permissions to the workflow app and wrap actions with the App Step.
ms.date: 12/29/2017
ms.prod: sharepoint
ms.assetid: 4656f6a0-36fd-4b7d-898e-8cd4bdbbda57
---


# Create a workflow with elevated permissions by using the SharePoint Workflow platform

<a name="section1"> </a>

This article describes how to create SharePoint workflows that access objects in SharePoint that require elevated permissions. These solutions use two features: granting permissions to the workflow app and wrapping actions with the App Step.
  
> [!IMPORTANT] 
> This article assumes that the SharePoint Workflow platform has been installed and configured and that SharePoint has been configured for add-ins. For more information about SharePoint Workflows and SharePoint Add-ins, including installation and configuration, see [Workflows in SharePoint](workflows-in-sharepoint.md) and [Install and manage SharePoint Add-ins](../sp-add-ins/sharepoint-add-ins.md). 

Imagine that as a SharePoint administrator, you would like to define some processes for managing user requests for purchases of add-ins from the Office Store. In the simplest case, you want to send an acknowledgment email when a user requests an add-in. In addition, you might also want to add structure to the request approval process.
  
By default, workflow does not have permissions to access the app catalog. Catalog lists in SharePoint require owner (full control) permissions. Workflows generally run at a permission level equivalent to write. 
  
To solve this, you have to create a workflow with elevated permissions by doing the following in the Site Collection site:

1. Allow the workflow to use add-in permissions.

2. Grant full control permission to the workflow.
 
3. Develop the workflow to wrap actions inside an App Step.

## Allow a workflow to use add-in permissions on a SharePoint site

The first step is to allow the workflow to use add-in permissions. You configure a workflow to use add-in permissions on the **Site Settings** page of the SharePoint site where the workflow runs. The following procedure configures the SharePoint site to allow the workflow to use add-in permissions.
  
> [!IMPORTANT] 
> The procedure must be completed by a user that has **Site Owner** permissions.

### To allow workflow to use add-in permissions

1. Select the **Settings** icon as shown in the figure to open the **Site Settings** page.

  ![Settings menu](../images/SPD15-WFAppPermissions1.png)

2. Go to **Site Settings**.
 
3. In the **Site Actions** section, select **Manage site features**.

4. Locate the feature called **Workflows can use app permissions**, as shown in the figure, and then select **Activate**.
    
  > [!WARNING] 
  > This feature will not activate unless you have properly configured the SharePoint Workflow platform and SharePoint Add-ins. 

  ![Workflow can use app permissions feature](../images/SPD15-WFAppPermissions2.png)
  

## Grant full control permission to a workflow

For the workflow to function properly, it must be granted full control on the site. The following procedure grants the full control permission to the workflow.
  
> [!IMPORTANT] 
> The procedure assumes the following: The procedure must be completed by a user that has **Site Owner** permissions. The workflow must already be published to the SharePoint site.

### To grant full control permission to a workflow

1. Select the **Settings** icon.
 
  ![Settings menu](../images/SPD15-WFAppPermissions1.png)

2. Go to **Site Settings**.    
  
3. In the **Users and Permissions** section, select **Site app permissions**.    
  
4. Copy the **client** section of the **App Identifier**. This is the identifier between the last "|" and the "@" sign, as shown in the figure.
    
  ![Selecting App Identifier](../images/SPD15-WFAppPermissions3.png)

5. Go to the **Grant permission to an app** page. This must be done by browsing to the appinv.aspx page of the site.
    
  Example: `http://{hostname}/{the Site Collection}/_layouts/15/appinv.aspx`. 
    
  > [!NOTE]
  > The 'app' in this step refers to the Workflow add-in in general and not just a specific workflow. Individual workflows cannot be access controlled. When you enable add-in permissions, you are enabling for all workflows within the Site Collection. 

  For more information about setting up a workflow, see [Blog article from Sympraxis Consulting: Looping Through Content in a SharePoint Site Workflow](http://sympmarc.com/series/looping-through-content-in-a-sharepoint-2013-site-workflow/)
    
  The following figure shows an example.
 
  ![The appinv.aspx URL example and page.](../images/SPD15-WFAppPermissions4.png)

6. Paste the client ID in the **App Id** field, and then select **Lookup**, as shown in the previous figure.

7. Paste the following **Permissions Request** XML to grant full control permission (note: this code block was updated on 12/29/17 to include the "AllowAppOnlyPolicy").
    
  ```XML 
    <AppPermissionRequests AllowAppOnlyPolicy="true">
        <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />
    </AppPermissionRequests>

  ```

  > [!WARNING] 
  > There are no placeholders in the **Scope** value. It is a literal value. Enter it exactly as it appears here.

  The following figure shows an example of the completed page (note that the code in the Permission Request XML area has been updated to that in Step 7, so for now it doesn't match the screenshot).
  
  ![Looking up an App Id.](../images/SPD15-WFAppPermissions5.png)

8. Select **Create**.
    
9. You are then asked to trust the Workflow add-in, as shown in the following figure. Select **Trust It**.
    
  ![Trust the Workflow app.](../images/SPD15-WFAppPermissions6.png)
  

## Wrap actions inside an App Step

Finally, you need to wrap the workflow actions inside an App Step. The following procedure wraps a **Send an Email** action inside an App Step. The workflow in this example sends an acknowledgement email message from a custom list.

### To wrap actions inside an App Step

1. Open the App Catalog site in SharePoint Designer.    
  
2. Create a new Custom List on which to run the workflow. In this example, the list name is **App Demo**.    
  
3. Select **Workflows** in the navigation window.    
  
4. Create a new List Workflow for the App Demo list, as shown in the figure.

  ![Create a new List workflow.](../images/SPD15-WFAppPermissions7.png)

5. Insert an **App Step**, as shown in the figure.
    
  ![Adding an App Step.](../images/SPD15-WFAppPermissions8.png)

6. Insert a **Send an Email** action in the **App Step**.
 
7. Select the **Address book** button. In the **To** field, select **Workflow Lookup for a User**, and then select **Add** as shown in the figure.

  ![Select Workflow lookup for a user.](../images/SPD15-WFAppPermissions9.png)
  
8. Enter the **Created By** field as the lookup value, as shown in the figure.

  ![Lookup for Person dialog.](../images/SPD15-WFAppPermissions10.png)
  
9. Enter Email from the App Demo list in the email message body.
     
10. Select **OK** to return to the workflow. The completed workflow is shown in the figure.

  ![Email action in App Step.](../images/SPD15-WFAppPermissions11.png)
    
11. Select the **Workflow Settings** icon in the ribbon, as shown in the figure.
    
  ![Workflow Settings icon in ribbon.](../images/SPD15-WFAppPermissions12.png)

12. Clear the check box next to **Automatically update the workflow status to the current stage name**, and then select **Publish**.
    
  ![Clear automatic updates check mark and publish.](../images/SPD15-WFAppPermissions13.png)
  

<a name="section2"> </a>

## Understanding how it works

To understand why elevating permissions for a workflow is required, consider that workflows are fundamentally add-ins for SharePoint, and they follow the same authorization rules of the add-in model. The default configuration for workflow is that the effective permissions of the workflow are an intersection of user permissions and the add-in permissions, as shown in the figure.
    
![Permissions diagram.](../images/SPD15-WFAppPermissions14.png)
  
Two reasons why it is necessary to elevate permissions to create a workflow in the App Request list are:

- By default, workflow only has write permission.

- The user has no permissions.
  
The first step to solve this problem is to allow the application to authorize by using only its identity and ignoring that of the user. This is done by enabling the App Step feature. The second step grants full control permission to the workflow. 
  
The following diagram illustrates the change in permissions.
  
![Permissions matrix.](../images/SPD15-WFAppPermissions15.png)
  
<a name="section3"> </a>

## See also

- [Blog article from the SharePoint Designer team: Workflow package and deploy scenario](https://blogs.msdn.microsoft.com/sharepointdesigner/2012/08/29/packaging-sharepoint-2013-list-site-and-reusable-workflow-and-how-to-deploy-the-package/)
- [What's new in workflow in SharePoint](what-s-new-in-workflows-for-sharepoint.md)
- [Getting started with SharePoint workflow](get-started-with-workflows-in-sharepoint.md) 
- [Workflow actions and activities reference for SharePoint](workflow-actions-and-activities-reference-for-sharepoint.md)
- [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)

    
