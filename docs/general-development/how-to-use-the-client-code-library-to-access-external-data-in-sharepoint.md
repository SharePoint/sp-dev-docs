---
title: Use the client code library to access external data in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: c280ae92-c52b-4658-b0f3-805fb215ef8e
---


# Use the client code library to access external data in SharePoint

Learn how to use the SharePoint client object model to work with Business Connectivity Services (BCS) objects in SharePoint using browser-based scripting.

This article demonstrates how to set up an external list that retrieves data from an Open Data protocol (OData) source using the client object model in SharePoint.
  
    
    


## Prerequisites for accessing external data using the SharePoint client object model
<a name="bkmk_Prerequisites"> </a>

The following are requirements for being able to develop apps using the SharePoint client object model:
  
    
    

- SharePoint
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- A functioning SharePoint Add-ins development environment: Follow the instructions in  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
    
  
- Access to the public OData.org producers
    
  

### Core concepts to know when accessing external data with the SharePoint client object model

The SharePoint client object model provides a way to access external data using client-side calls that mimic the server-side APIs. To understand how it works and how to use it, see the articles in Table 1.
  
    
    

**Table 1. Core concepts for using the client object model**


|**Article**|**Description**|
|:-----|:-----|
| [Complete basic operations using SharePoint client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx) <br/> |Learn how to write code to peform basic operations with the SharePoint .NET Framework client object model (CSOM).  <br/> |
   

## Create an SharePoint Add-in to access external data using the client object model
<a name="bkmk_CreateApp"> </a>

The following procedures show how to set up an SharePoint Add-in and configure a webpage to make requests using client object model methods and objects to retrieve data from an external data source.
  
    
    

### To create an SharePoint Add-in


1. Open Visual Studio 2012.
    
  
2. Create an **App for SharePoint** project.
    
  
3. Specify the app settings, including app name, the site URL for debugging the app, and how you want to host the app (Autohosted, Provider-hosted, SharePoint-hosted). For more information about hosting options, see  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx).
    
  
4. Click **Finish** to create the app.
    
  

### To generate the external content type


1. In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content types for External Data source**.
    
  
2. In the **Specify OData Source** wizard, enter the URL of the OData service that you want to connect to. In this case, you will use the Northwind OData source published at [http://www.odata.org/ecosystem](http://www.odata.org/ecosystem). Set the URL for the OData service to  `http://services.odata.org/Northwind/Northwind.svc/`
    
    Specify a name for the data source, and choose **Next**.
    
  
3. A list of entities that are exposed by the OData Service will appear. Choose the **Customers** entity. Ensure that the **Create list instances for the selected data entities (except Service Operations)** check box is selected.
    
  
4. Choose **Finish**.
    
  

## Code example: Add scripts and HTML to the Default.aspx page
<a name="bkmk_AddUIelements"> </a>

At this point, you have the external content type and an external list that displays the data from the Netflix OData source. 
  
    
    
The next objective is to modify the default.aspx page that you created when you created your app. You add a container that will hold the results of the query that is executed with the page loads. By executing the scripts on the page load event, you ensure that the script will be executed every time the page is browsed, and the resulting client object model calls will be made to the Netflix OData source to add records to the page. 
  
    
    

### To add the container to the Default.aspx page


1. In **Solution Explorer**, open the Default.aspx page located in the **Pages** module.
    
  
2. Add the following **div** element to the page:
    
```HTML
  
<div id="displayDiv"></div>
```

3. Save the page.
    
  
Finally, you add code to the App.js file that executes when the page loads.
  
    
    

### To modify the App.js file to make client object model calls


1. Open the App.js file in the Scripts module of your SharePoint project.
    
  
2. Paste the following code at the end of the file.
    
```
  $(document).ready(function () {

    // Namespace
    window.AppLevelECT = window.AppLevelECT || {};

    // Constructor
    AppLevelECT.Grid = function (hostElement, surlWeb) {
        this.hostElement = hostElement;
        if (surlWeb.length > 0 &amp;&amp; surlWeb.substring(surlWeb.length - 1, surlWeb.length) != "/")
            surlWeb += "/";
        this.surlWeb = surlWeb;
    }

    // Prototype
    AppLevelECT.Grid.prototype = {

        init: function () {

            $.ajax({
                url: this.surlWeb + "_api/lists/getbytitle('Customer')/items?$select=BdcIdentity,CustomerID,ContactName",
                headers: {
                    "accept": "application/json",
                    "X-RequestDigest": $("#__REQUESTDIGEST").val()
                },
                success: this.showItems
            });
        },

        showItems: function (data) {
            var items = [];

            items.push("<table>");
            items.push('<tr><td>Customer ID</td><td>Customer Name</td></tr>');

            $.each(data.d.results, function (key, val) {
                items.push('<tr id="' + val.BdcIdentity + '"><td>' +
                    val.CustomerID + '</td><td>' +
                    val.ContactName + '</td></tr>');
            });

            items.push("</table>");

            $("#displayDiv").html(items.join(''));
        }
    }

    ExecuteOrDelayUntilScriptLoaded(getCustomers, "sp.js");
});

function getCustomers() {
    var grid = new AppLevelECT.Grid($("#displayDiv"), _spPageContextInfo.webServerRelativeUrl);
    grid.init();
}
```

Press F5 to deploy the app to SharePoint. Browse to the Default.aspx page in the app, and a list of customers appears on the page.
  
    
    

## See also
<a name="bkmk_Addresources"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [Get started using the client object model with external data in SharePoint](get-started-using-the-client-object-model-with-external-data-in-sharepoint.md)
    
  
-  [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx)
    
  
-  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx)
    
  
-  [BCS client object model reference for SharePoint](bcs-client-object-model-reference-for-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Complete basic operations using SharePoint client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx)
    
  

