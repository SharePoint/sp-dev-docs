---
title: Create a SharePoint Add-in that contains a document template and a task pane add-in
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Create a SharePoint Add-in that contains a document template and a task pane add-in
Use Visual Studio to develop an Office Add-in that appears in a document that is opened from a SharePoint Add-in.
 

 

You can create a SharePoint Add-in that includes a document template (for example, an expense report). The document can include a task pane add-in that interacts with SharePoint data. For example, users can populate fields of an invoice by using data from the Business Connectivity Services (BCS) or create an expense report by selecting an expense category from a SharePoint list.
 

This walkthrough shows you how to create a SharePoint Add-in that includes an Excel workbook. The Excel workbook contains a task pane add-in that uses the REST interface provided by SharePoint to populate a drop-down list box with SharePoint date in the task pane add-in.
 


## Prerequisites
<a name="Prerequisites"> </a>

Install the following components before you get started:
 

 

 

 

- A SharePoint development environment:
    
      - To develop SharePoint Add-ins that target SharePoint in Office 365, see  [How to: Set up an environment for developing SharePoint Add-ins on Office 365](http://msdn.microsoft.com/en-us/library/office/apps/fp161179%28v=office.15%29).
    
 
  - To develop SharePoint Add-ins that target an on-premises installation of SharePoint, see  [How to: Set up an on-premises development environment for SharePoint Add-ins](http://msdn.microsoft.com/en-us/library/office/apps/fp179923%28v=office.15%29).
    
 
-  [Visual Studio 2015 and the Microsoft Office Developer Tools](https://www.visualstudio.com/features/office-tools-vs)
    
 
- Excel 2013 or an Office 365 account.
    
 

## Create a SharePoint Add-in project in Visual Studio
<a name="Create"> </a>


1. Start Visual Studio.
    
 
2. On the menu bar, choose  **File**,  **New**,  **Project**.
    
    The  **New Project** dialog box opens.
    
 
3. In the templates pane, under the node for the language you want to use, expand  **Office/SharePoint**, and then choose  **Office Add-ins**.
    
 
4. In the list of project types, choose  **SharePoint Add-in**, name the project OfficeEnabledAddin, and then choose the  **OK** button.
    
    The  **New SharePoint Add-in** dialog box appears.
    
 
5. In the  **What SharePoint site do you want to use for debugging your add-in?** drop-down list, choose or enter the URL of a SharePoint site.
    
 
6. In the  **How do you want to host your SharePoint Add-in?** drop-down list, choose **SharePoint-hosted** and then choose **Next**.
    
     **Note**  This scenario works only with the SharePoint-hosted and provider-hosted options presented in the  **How do you want to host your SharePoint Add-in?** drop-down list.
7. On the next page, select  **SharePoint** and then choose the **Finish** button to close the dialog box.
    
 

## Add a task pane add-in item
<a name="Add"> </a>

Next, add an Office Add-in to the project. You can add any type of add-in that you want. For this walkthrough, we will add a task pane add-in.
 

 

1. In  **Solution Explorer**, choose the  **OfficeEnabledAddin** project node.
    
 
2. On the  **Project** menu, choose **Add New Item**.
    
 
3. In the  **Add New Item** dialog box, select **Office/SharePoint** and then choose **Office Add-in**.
    
 
4. Name the task pane add-in MyTaskPaneAddin, and then choose the  **Add** button.
    
    The  **Create Add-in for Office** dialog box opens.
    
 
5. In the  **Create Add-in for Office** dialog box, select **Task pane** and then choose **Next**. On the next page, clear the  **Word** and **PowerPoint** check boxes, and then choose **Next**.
    
 
6. In the  **Would you like your Office Add-in to appear in a new document or in an existing document?** page, choose **Create a new document and insert my add-in**, and then choose  **Finish**.
    
    Visual Studio adds a document library and a workbook template for the library. The workbook contains a task pane add-in.
    
 

## Add a document library
<a name="Library"> </a>

In this procedure, you will add a document library and make the workbook the default template of the document library.
 

 

1. In  **Solution Explorer**, choose the  **OfficeEnabledAddin** project node.
    
 
2. On the  **Project** menu, choose **Add New Item**.
    
 
3. In the  **Add New Item** dialog box, select **Office/SharePoint**, then choose  **List**, name the list MyDocumentLibrary, and then choose the  **Add** button.
    
 
4. In  **SharePoint Customization Wizard**, select the  **Create a customizable list template and list instance of it** option.
    
 
5. In the drop-down list beneath this option, select  **Document Library**, and then choose the  **Next** button.
    
 
6. In the  **Choose a template for this document library. Documents that users create in this library will be based on that template** page, choose **Use the following document as the template for this library**, and then choose the  **Browse** button.
    
 
7. In the  **Open** dialog box, open the **OfficeDocuments** folder, select the **MyTaskPaneApp.xlsx** file, choose the **Open** button, choose the **Finish** button, and then close the list designer.
    
 
8. In  **Solution Explorer**, choose the  **OfficeEnabledAddin** project node.
    
 
9. On the  **View** menu, choose **Properties Window**.
    
 
10. In  **Solution Explorer**, choose the  **AppManifest.xml** file.
    
 
11. Choose  **View**,  **Designer**.
    
 
12. In the manifest designer, set the value of the  **Start page** value to~appWebUrl/Lists/MyDocumentLibrary. This converts to a value of OfficeEnabledAddin/Lists/MyDocumentLibrary.
    
     **Note**  This URL refers to the document library. You must use the ~appWebUrl token at the beginning of any URL in your Office Add-in manifest that refers to items within the add-in web. For more information about URL tokens in a SharePoint Add-in project, see  [URL strings and tokens in SharePoint Add-ins](url-strings-and-tokens-in-sharepoint-add-ins.md).
13. Close the manifest designer to save the change.
    
 

## Consume SharePoint data in the task pane
<a name="Consume"> </a>

In this procedure, you'll show a list of site users by using the REST interface provided by SharePoint.
 

 
In this example, the SharePoint list data is only displayed, but you might use this sort of data as part of a document approval add-in. When a user chooses a name from that list, your code sets the value of the reviewer column in a document tracking list. A workflow associated with that list could send a review notification to that user. Alternatively, you might save the selected name to the document settings. Then, when a user opens the document, you could show controls in the task pane add-in only if the current user and the user stored to the document settings are the same. See the following topics for more information:
 

 

-  [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md)
    
 
-  [Complete basic operations using JavaScript library code in SharePoint](complete-basic-operations-using-javascript-library-code-in-sharepoint.md)
    
 
-  [Persisting add-in state and settings](http://msdn.microsoft.com/library/407df6e8-c237-4d6a-b357-3000fe3de9ff%28Office.15%29.aspx)
    
 

1. In  **Solution Explorer**, expand the  **MyTaskPaneAddin** folder, expand the **Home** folder, and then choose the **Home.html** file.
    
    The Home.html file opens in the code editor.
    
 
2. Add the following HTML beneath the  `get-data-from-selection` button.
    
```HTML
  <p>Select Reviewer:</p> <select class="select" id="select-reviewer" name="D1"> </select>
```

3. Choose the  **Home.js** file to open the Home.js file in the code editor.
    
 
4. Add the following declarations to the top of the Home.js file.
    
```
  var appWebURL; var web;
```

5. Replace the  `Initialize` function with the following code.
    
    This code performs the following tasks:
    
      - Loads the SP.Runtime.js and SP.js files by using the  `getScript` function in jQuery. After loading the files, your program has access to the JavaScript object model for SharePoint.
    
 
  - Loads the current website object.
    
 
  - Calls a function that gets all of the users of the site. You will add the code for that function in the next step.
    
 



```JS
   // The initialize function must be run each time a new page is loaded 
   Office.initialize = function (reason) { $(document).ready(function () { app.initialize(); var scriptbase = "/_layouts/15/"; $.getScript(scriptbase + "SP.Runtime.js", function () { $.getScript(scriptbase + "SP.js", function () { getAppWeb(function () { getSPUsers(populateUsersDropDown); }); }); }); function getAppWeb(functionToExecuteOnReady) { var context = SP.ClientContext.get_current(); web = context.get_web(); context.load(web); context.executeQueryAsync(onSuccess, onFailure); function onSuccess() { appWebURL = web.get_url(); functionToExecuteOnReady(); } function onFailure(sender, args) { app.initialize(); app.showNotification("Failed to connect to SharePoint. Error: " + args.get_message()); } } $('#get-data-from-selection').click(getDataFromSelection); }); };
```

6. Add the following code to the bottom of the Home.js file.
    
    This code obtains a list of website users by using the REST interface provided by SharePoint. Then, this code populates a drop-down list with the name and ID of each user.
    


```JS
  function getSPUsers(functionToExecuteOnReady) { var url = appWebURL + "/../_api/web/siteUsers"; jQuery.ajax({ url: url, type: "GET", headers: { "ACCEPT": "application/json;odata=verbose" }, success: onSuccess, error: onFailure }); function onSuccess(data) { var results = data.d.results; functionToExecuteOnReady(results); } function onFailure(jaXHR, textStatus, errorThrown) { var error = textStatus + " " + errorThrown; app.showNotification(error); } } function populateUsersDropDown(results) { for (var i = 0; i < results.length; i++) { var IDTemp = results[i].Id; $('#select-reviewer').append("<option value='" + IDTemp + "'>" + results[i].Title + "</option>"); } }
```

7. In  **Solution Explorer**, open the shortcut menu for the  **AppManifest.xml** file, and then choose **View Designer**.
    
 
8. On the designer, choose the  **Permissions** page.
    
 
9. From the drop-down list under the  **Scope** column, choose the **Web** item.
    
 
10. From the drop-down list under the  **Permission** column, choose the **Read** item.
    
 

## Debug the task pane add-in
<a name="debug"> </a>

You can debug your task pane add-in by starting the document or by starting the SharePoint Add-in, and then opening a document from the document library.
 

 

### Debugging your task pane add-in by starting the document


 

 

 **Note**  Because this procedure opens Excel, it works only when Office is installed on the system. Otherwise, you get an error that the "application associated with this project type isn't installed on this computer."
 


1. Open the Home.js file in the code editor, and then set a breakpoint next to the  `getDataFromSelection` method.
    
 
2. In  **Solution Explorer**, choose the  **OfficeEnabledApp** project node.
    
 
3. On the  **View** menu, choose **Properties Window**.
    
 
4. In the Properties windows, from the  **Start Action** drop-down list, choose the **Office Desktop Client** item. When you do this, a new property appears, **Start Document**.
    
 
5. From the  **Start Document** drop-down list, choose the **OfficeDocuments\TaskPaneApp.xlsx** item.
    
 
6. On the  **Debug** menu, choose **Start Debugging**.
    
    This setting makes the workbook in the task pane add-in appear when the add-in runs. The workbook opens and the task pane add-in appears.
    
 
7. In the task pane add-in, choose the  **Select Reviewer** drop down list to view a list of SharePoint users.
    
 
8. In the Excel workbook, select any cell.
    
 
9. In the task pane add-in, choose the  **Get data from selection** button.
    
    Execution stops at the breakpoint that you set next to the  `getDataFromSelection` method.
    
 

### Debugging your task pane add-in by starting SharePoint


 

 

 **Note**  This procedure opens the Excel Online. It works only when you have an Office 365 account. See  [How to: Set up an environment for developing SharePoint Add-ins on Office 365](http://msdn.microsoft.com/en-us/library/office/apps/fp161179%28v=office.15%29).
 


1. Open the Home.js file in the code editor, and then set a breakpoint next to the  `getDataFromSelection` method.
    
 
2. In  **Solution Explorer**, choose the  **OfficeEnabledApp** project node.
    
 
3. On the  **View** menu, choose **Properties Window**.
    
 
4. In the Properties windows, from the  **Start Action** drop-down list, choose the **Internet Explorer** item.
    
 
5. On the  **Debug** menu, **Start Debugging**.
    
    Visual Studio opens SharePoint and shows the  **MyDocumentLibrary** library.
    
 
6. In SharePoint, on the  **Files** tab, choose **New Document**. 
    
 
7. Navigate to the workbook in your project, MyTaskPaneApp.xlsx.
    
    The workbook opens and the task pane add-in appears.
    
 
8. Ensure that script debugging is enabled in your browser. In Internet Explorer, you can enable script debugging by opening the  **Internet Options** dialog box, choosing the **Advanced** tab, and then clearing the **Disable Script Debugging (Internet Explorer)** and **Disable Script Debugging (Other)** check boxes.
    
 
9. In Visual Studio, on the  **Debug** menu, choose **Attach to Process**.
    
 
10. In the  **Attach to Process** dialog box, choose all of the available **iexplore.exe** processes, and then choose the **Attach** button.
    
 
11. In the task pane add-in, choose the  **Select Reviewer** drop-down list to view a list of SharePoint users.
    
    The data in the list is retrieved from SharePoint by using a REST call.
    
 
12. In the Excel workbook, choose any cell.
    
 
13. In the task pane add-in, choose the  **Get data from selection** button.
    
    Execution stops at the breakpoint that you set next to the  `getDataFromSelection` method.
    
     **Note**  If the workbook doesn't contain any data, you can add some by choosing  **EDIT WORBOOK**,  **Edit in Excel Online** on the toolbar in the workbook.

## Package and publish the add-in
<a name="Package"> </a>

When you are ready to package your add-in for publishing, open the  **Publish Office and SharePoint Add-ins** wizard.
 

 

- In  **Solution Explorer**, open the shortcut menu for the SharePoint Add-in project, and then choose  **Publish**.
    
    The  **Publish Office and SharePoint Add-ins** wizard appears. For more information, see [Publish SharePoint Add-ins by using Visual Studio](publish-sharepoint-add-ins-by-using-visual-studio.md).
    
 

## Additional resources
<a name="AdditionalResources"> </a>


-  [Task pane and content add-ins for Office 2013](http://msdn.microsoft.com/library/baf73b23-4429-4b7f-bcb9-a99a9618ae38%28Office.15%29.aspx)
    
 
-  [Design guidelines for Office Add-ins](http://msdn.microsoft.com/library/d5b2ab2e-dfc8-47c8-919c-e9c23358d70c%28Office.15%29.aspx)
    
 
-  [Office Add-ins development lifecycle](http://msdn.microsoft.com/library/c35b4b2b-7869-4501-9f10-888c8e74c98c%28Office.15%29.aspx)
    
 
-  [Publish your Office Add-in](http://msdn.microsoft.com/library/7f3ae6a0-06e9-438c-8899-bd9f605e6d9e%28Office.15%29.aspx)
    
 
-  [Understanding the JavaScript API for Office](http://msdn.microsoft.com/library/01180dae-ca45-40c8-b3dd-fd2a85651c0c%28Office.15%29.aspx)
    
 
-  [Office Add-ins XML manifest](http://msdn.microsoft.com/library/4139ff24-afac-472a-af7d-9d069587ac9b%28Office.15%29.aspx)
    
 
-  [Office Add-ins API and schema references](http://msdn.microsoft.com/library/afcc2908-1e1b-4297-b554-11e6eb404804%28Office.15%29.aspx)
    
 

