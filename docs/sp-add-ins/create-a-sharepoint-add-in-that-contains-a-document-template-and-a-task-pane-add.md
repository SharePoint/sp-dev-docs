---
title: Create a SharePoint Add-in that contains a document template and a task pane add-in
description: Use Visual Studio to develop an Office Add-in that appears in a document that is opened from a SharePoint Add-in.
ms.date: 12/27/2017
ms.prod: sharepoint
localization_priority: Normal
---


# Create a SharePoint Add-in that contains a document template and a task pane add-in

You can create a SharePoint Add-in that includes a document template (for example, an expense report). The document can include a task pane add-in that interacts with SharePoint data. For example, users can populate fields of an invoice by using data from the Business Connectivity Services (BCS) or create an expense report by selecting an expense category from a SharePoint list.

This walkthrough shows you how to create a SharePoint Add-in that includes an Excel workbook. The Excel workbook contains a task pane add-in that uses the REST interface provided by SharePoint to populate a drop-down list box with SharePoint data in the task pane add-in.
 
<a name="Prerequisites"> </a>

## Prerequisites

Install the following components before you get started:

- A SharePoint development environment:
    
    - To develop SharePoint Add-ins that target SharePoint in Office 365, see [Set up a development environment for SharePoint Add-ins on Office 365](set-up-a-development-environment-for-sharepoint-add-ins-on-office-365.md).
    
    - To develop SharePoint Add-ins that target an on-premises installation of SharePoint, see [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md).

- [Visual Studio and the Microsoft Office Developer Tools](https://www.visualstudio.com/vs/office-tools/)
    
- Excel or an Office 365 account
    

<a name="Create"> </a> 

## Create a SharePoint Add-in project in Visual Studio

1. Start Visual Studio.

2. On the menu bar, select **File** > **New** > **Project**.

3. In the **New Project** dialog box, in the templates pane, under the node for the language you want to use, expand **Office/SharePoint**, and then select **Office Add-ins**.

4. In the list of project types, select **SharePoint Add-in**, name the project **OfficeEnabledAddin**, and then select **OK**.

5. In the **New SharePoint Add-in** dialog box, in the **What SharePoint site do you want to use for debugging your add-in?** list, select or enter the URL of a SharePoint site.

6. In the **How do you want to host your SharePoint Add-in?** list, select **SharePoint-hosted**, and then select **Next**.
    
    > [!NOTE] 
    > This scenario works only with the SharePoint-hosted and provider-hosted options presented in the **How do you want to host your SharePoint Add-in?** list.

7. On the next page, select **SharePoint**, and then select **Finish** to close the dialog box.
    

<a name="Add"> </a> 

## Add a task pane add-in item

Next, add an Office Add-in to the project. You can add any type of add-in that you want. For this walkthrough, we will add a task pane add-in.

1. In **Solution Explorer**, select the **OfficeEnabledAddin** project node.    
 
2. On the **Project** menu, select **Add New Item**.    
 
3. In the **Add New Item** dialog box, select **Office/SharePoint**, and then select **Office Add-in**.    
 
4. Name the task pane add-in **MyTaskPaneAddin**, and then select **Add**.
     
5. In the **Create Add-in for Office** dialog box, select **Task pane**, and then select **Next**. 

6. On the next page, clear the **Word** and **PowerPoint** check boxes, and then select **Next**.    
 
7. On the **Would you like your Office Add-in to appear in a new document or in an existing document?** page, select **Create a new document and insert my add-in**, and then select **Finish**.
    
Visual Studio adds a document library and a workbook template for the library. The workbook contains a task pane add-in.
    

<a name="Library"> </a>

## Add a document library

In this procedure, you will add a document library and make the workbook the default template of the document library.

1. In **Solution Explorer**, select the **OfficeEnabledAddin** project node.   
 
2. On the **Project** menu, select **Add New Item**.    
 
3. In the **Add New Item** dialog box, select **Office/SharePoint**, select **List**, name the list **MyDocumentLibrary**, and then select **Add**.    
 
4. In the SharePoint Customization Wizard, select the **Create a customizable list template and list instance of it** option.    
 
5. In the list under this option, select **Document Library**, and then select **Next**.    
 
6. In the **Choose a template for this document library. Documents that users create in this library will be based on that template** page, select **Use the following document as the template for this library**, and then select **Browse**.    
 
7. In the **Open** dialog box, open the **OfficeDocuments** folder, select the **MyTaskPaneApp.xlsx** file, select **Open** > **Finish**, and then close the list designer.    
 
8. In **Solution Explorer**, select the **OfficeEnabledAddin** project node.    
 
9. On the **View** menu, select **Properties Window**.    
 
10. In **Solution Explorer**, select the **AppManifest.xml** file.    
 
11. Select **View** > **Designer**.   
 
12. In the manifest designer, set the value of the **Start page** value to **~appWebUrl/Lists/MyDocumentLibrary**. This converts to a value of **OfficeEnabledAddin/Lists/MyDocumentLibrary**.
    
    > [!NOTE] 
    > This URL refers to the document library. You must use the ~appWebUrl token at the beginning of any URL in your Office Add-in manifest that refers to items within the add-in web. For more information about URL tokens in a SharePoint Add-in project, see [URL strings and tokens in SharePoint Add-ins](url-strings-and-tokens-in-sharepoint-add-ins.md).

13. Close the manifest designer to save the change.
    

<a name="Consume"> </a> 

## Consume SharePoint data in the task pane

In this procedure, you'll show a list of site users by using the REST interface provided by SharePoint.

In this example, the SharePoint list data is only displayed, but you might use this sort of data as part of a document approval add-in. When a user selects a name from that list, your code sets the value of the reviewer column in a document tracking list. A workflow associated with that list could send a review notification to that user. Alternatively, you might save the selected name to the document settings. Then, when a user opens the document, you could show controls in the task pane add-in only if the current user and the user stored to the document settings are the same. For more information, see the following topics:

- [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md)

- [Complete basic operations using JavaScript library code in SharePoint](complete-basic-operations-using-javascript-library-code-in-sharepoint.md)

- [Persisting add-in state and settings](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/persisting-add-in-state-and-settings)

### To consume SharePoint data in the task pane

1. In **Solution Explorer**, expand the **MyTaskPaneAddin** folder, expand the **Home** folder, and then select the **Home.html** file.

2. The Home.html file opens in the code editor. Add the following HTML under the `get-data-from-selection` button.
    
    ```HTML
        <p>Select Reviewer:</p> <select class="select" id="select-reviewer" name="D1"> </select>
    ```

3. Select the **Home.js** file to open the Home.js file in the code editor.    
 
4. Add the following declarations to the top of the Home.js file.
    
    ```js
        var appWebURL; var web;
    ```

5. Replace the `Initialize` function with the following code.
    
    This code performs the following tasks:
        
    - Loads the SP.Runtime.js and SP.js files by using the `getScript` function in jQuery. After loading the files, your program has access to the JavaScript object model for SharePoint.
        
    - Loads the current website object.
        
    - Calls a function that gets all of the users of the site. You add the code for that function in the next step.

    ```js
        // The initialize function must be run each time a new page is loaded 
        Office.initialize = function (reason) { $(document).ready(function () { app.initialize(); var scriptbase = "/_layouts/15/"; $.getScript(scriptbase + "SP.Runtime.js", function () { $.getScript(scriptbase + "SP.js", function () { getAppWeb(function () { getSPUsers(populateUsersDropDown); }); }); }); function getAppWeb(functionToExecuteOnReady) { var context = SP.ClientContext.get_current(); web = context.get_web(); context.load(web); context.executeQueryAsync(onSuccess, onFailure); function onSuccess() { appWebURL = web.get_url(); functionToExecuteOnReady(); } function onFailure(sender, args) { app.initialize(); app.showNotification("Failed to connect to SharePoint. Error: " + args.get_message()); } } $('#get-data-from-selection').click(getDataFromSelection); }); };
    ```

6. Add the following code to the bottom of the Home.js file.
    
    This code obtains a list of website users by using the REST interface provided by SharePoint. This code then populates a drop-down list with the name and ID of each user.

    ```js
        function getSPUsers(functionToExecuteOnReady) { var url = appWebURL + "/../_api/web/siteUsers"; jQuery.ajax({ url: url, type: "GET", headers: { "ACCEPT": "application/json;odata=verbose" }, success: onSuccess, error: onFailure }); function onSuccess(data) { var results = data.d.results; functionToExecuteOnReady(results); } function onFailure(jaXHR, textStatus, errorThrown) { var error = textStatus + " " + errorThrown; app.showNotification(error); } } function populateUsersDropDown(results) { for (var i = 0; i < results.length; i++) { var IDTemp = results[i].Id; $('#select-reviewer').append("<option value='" + IDTemp + "'>" + results[i].Title + "</option>"); } }
    ```

7. In **Solution Explorer**, open the shortcut menu for the **AppManifest.xml** file, and then select **View Designer**.   
 
8. On the designer, select the **Permissions** page.    
 
9. From the drop-down list under the **Scope** column, select the **Web** item.    
 
10. From the drop-down list under the **Permission** column, select the **Read** item.
    

<a name="debug"> </a> 

## Debug the task pane add-in

You can debug your task pane add-in by starting the document or by starting the SharePoint Add-in, and then opening a document from the document library.

### To debug your task pane add-in by starting the document

> [!NOTE] 
> Because this procedure opens Excel, it works only when Office is installed on the system. Otherwise, you get an error that the "application associated with this project type isn't installed on this computer."

1. Open the Home.js file in the code editor, and then set a breakpoint next to the `getDataFromSelection` method.    
 
2. In **Solution Explorer**, select the **OfficeEnabledApp** project node.    
 
3. On the **View** menu, select **Properties Window**.    
 
4. In the Properties window, from the **Start Action** drop-down list, select the **Office Desktop Client** item. When you do this, a new property appears, **Start Document**.    
 
5. From the **Start Document** list, select the **OfficeDocuments\TaskPaneApp.xlsx** item.    
 
6. On the **Debug** menu, select **Start Debugging**.
    
    This setting makes the workbook in the task pane add-in appear when the add-in runs. The workbook opens and the task pane add-in appears.
     
7. In the task pane add-in, select the **Select Reviewer** list to view a list of SharePoint users.    
 
8. In the Excel workbook, select any cell.   
 
9. In the task pane add-in, select the **Get data from selection** button.
    
    Execution stops at the breakpoint that you set next to the `getDataFromSelection` method.
    
 

### To debug your task pane add-in by starting SharePoint

> [!NOTE] 
> This procedure opens Excel Online. It works only when you have an Office 365 account. See [Set up a development environment for SharePoint Add-ins on Office 365](set-up-a-development-environment-for-sharepoint-add-ins-on-office-365.md).

1. Open the Home.js file in the code editor, and then set a breakpoint next to the `getDataFromSelection` method.    
 
2. In **Solution Explorer**, select the **OfficeEnabledApp** project node.   
 
3. On the **View** menu, select **Properties Window**.    
 
4. In the Properties window, from the **Start Action** list, select the **Internet Explorer** item.    
 
5. On the **Debug** menu, select **Start Debugging**. 
    
6. Visual Studio opens SharePoint and shows the **MyDocumentLibrary** library. In SharePoint, on the **Files** tab, select **New Document**.     
 
7. Navigate to the workbook in your project, **MyTaskPaneApp.xlsx**. 
    
8. The workbook opens and the task pane add-in appears. Ensure that script debugging is enabled in your browser. In Internet Explorer, you can enable script debugging by opening the **Internet Options** dialog box, selecting the **Advanced** tab, and then clearing the **Disable Script Debugging (Internet Explorer)** and **Disable Script Debugging (Other)** check boxes.    
 
9. In Visual Studio, on the **Debug** menu, select **Attach to Process**.    
 
10. In the **Attach to Process** dialog box, select all of the available **iexplore.exe** processes, and then select the **Attach** button.    
 
11. In the task pane add-in, select the **Select Reviewer** list to view a list of SharePoint users. The data in the list is retrieved from SharePoint by using a REST call.
    
12. In the Excel workbook, select any cell.
    
13. In the task pane add-in, select the **Get data from selection** button.
    
    Execution stops at the breakpoint that you set next to the `getDataFromSelection` method.
    
    > [!NOTE] 
    > If the workbook doesn't contain any data, you can add some by selecting **EDIT WORKBOOK** > **Edit in Excel Online** on the toolbar in the workbook.


<a name="Package"> </a>

## Package and publish the add-in

When you are ready to package your add-in for publishing, open the Publish Office and SharePoint Add-ins Wizard.

- In **Solution Explorer**, open the shortcut menu for the SharePoint Add-in project, and then select **Publish**.
    
    The Publish Office and SharePoint Add-ins Wizard appears. For more information, see [Publish SharePoint Add-ins by using Visual Studio](publish-sharepoint-add-ins-by-using-visual-studio.md).

## See also
<a name="AdditionalResources"> </a>

- [Office Add-in host and platform availability](https://docs.microsoft.com/en-us/office/dev/add-ins/overview/office-add-in-availability)
- [Design your Office Add-ins](https://docs.microsoft.com/en-us/office/dev/add-ins/design/add-in-design)
- [Office Add-ins development lifecycle](https://docs.microsoft.com/en-us/office/dev/add-ins/concepts/add-in-development-lifecycle)
- [Publish your Office Add-in](https://docs.microsoft.com/en-us/office/dev/add-ins/publish/publish)
- [Understanding the JavaScript API for Office](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/understanding-the-javascript-api-for-office)
- [Office Add-ins XML manifest](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests)
- [JavaScript API for Office reference](https://dev.office.com/reference/add-ins/javascript-api-for-office)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 

