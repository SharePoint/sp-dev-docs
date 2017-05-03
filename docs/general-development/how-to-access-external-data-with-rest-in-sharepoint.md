---
title: How to Access external data with REST in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 0663cc8c-a736-434d-9858-6ce12ce7f748
---


# How to: Access external data with REST in SharePoint 2013
Learn how to access external data from SharePoint 2013 by using Representational State Transfer (REST) URLs for Business Connectivity Services (BCS).
This article shows how to set up an external list that retrieves data from an Open Data protocol (OData) source.
  
    
    


## Prerequisites for accessing external data using REST
<a name="bkmk_Prerequisites"> </a>

To access external data from SharePoint 2013 by using REST, you need the following:
  
    
    

- SharePoint 2013
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- A functioning SharePoint Add-ins development environment: Follow the instructions in  [Set up a general development environment for SharePoint 2013](set-up-a-general-development-environment-for-sharepoint.md).
    
  
- Access to the public OData.org producers
    
  

### Core concepts to know when accessing external data with REST

The SharePoint 2013 REST service provides a way to access external data using a specially constructed URL. To understand how it works and how to use it, see the following articles.
  
    
    

**Table 1. Core concepts for REST in SharePoint 2013**


|**Article title**|**Description**|
|:-----|:-----|
| [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/d4b5c277-ed50-420c-8a9b-860342284b72%28Office.15%29.aspx) <br/> |Learn how to use the SharePoint 2013 REST service, which provides a REST programming interface comparable to the existing client object model.  <br/> |
| [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/2de035a0-ac75-43bd-9665-5c5a59c4c590%28Office.15%29.aspx) <br/> |Get the basics of using the SharePoint 2013 REST service to access and update SharePoint data, using the REST and OData web protocol standards.  <br/> |
| [Using the SharePoint 2013 REST service](http://msdn.microsoft.com/library/e1ff2979-1c16-4cb0-a57e-9168dfe20a7c.aspx) <br/> |Learn how to navigate the SharePoint 2013 data structure as it is represented in the REST service, perform common CRUD (create, read, update, and delete) operations on SharePoint items via the REST service, synchronize SharePoint items across applications, and control item concurrency.  <br/> |
   

## Create an SharePoint Add-in to access external data using REST
<a name="bkmk_CreateApp"> </a>

The following procedures guide you through setting up an SharePoint Add-in and configuring a webpage to make requests using REST functions to retrieve data from an external data source.
  
    
    

### To create an SharePoint Add-in


1. Open Visual Studio 2012.
    
  
2. Create an **App for SharePoint 2013** project.
    
  
3. Specify the app settings, including app name, the site URL for debugging the app, and how you want to host the app (Autohosted, Provider-hosted, SharePoint-hosted). For more information about hosting options, see  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx).
    
  
4. Choose **Finish** to create the app.
    
  

### To generate the external content type


1. In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content Types for External Data Source**.
    
  
2. In the **Specify OData Source** page, enter the URL of the OData service you want to connect to. In this case, use the Northwind OData source published at [http://www.odata.org/ecosystem](http://www.odata.org/ecosystem). Set the URL for the OData service to  `http://services.odata.org/Northwind/Northwind.svc/`, and provide a name for the data source.
    
    Choose **Next**.
    
  
3. This displays a list of data entities that are being exposed by the OData Service. Select the **Customers** entity. Ensure that the **Create list instances for the selected data entities (except Service Operations)** check box is selected.
    
  
4. Choose **Finish**.
    
  

## Code example: Add scripts and HTML to the Home.aspx page
<a name="bkmk_AddUIelements"> </a>

At this point, you have an external content type and an external list that will display the data from the Netflix OData source. 
  
    
    
The next objective is to modify the default.aspx page that was created when you created your app. You will add a container to hold the results of the query that is executed with the page loads. By executing the scripts on the page load event, you ensure that the script is executed every time the page is browsed, and the resulting REST calls are made to the Northwind OData source to add records to the page.
  
    
    

### To add the container to the Default.aspx page


1. In **Solution Explorer**, open the Default.aspx page in the **Pages** module.
    
  
2. Add the following **div** element to the page.
    
```HTML
  
<div id="displayDiv"></div>
```

3. Save the page.
    
  
Finally, you add code to the App.js file that executes when the page loads.
  
    
    

### To modify the App.js file to make REST calls


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
  
    
    

## Additional resources
<a name="bkmk_Addres"> </a>


-  [Business Connectivity Services in SharePoint 2013](business-connectivity-services-in-sharepoint.md)
    
  
-  [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/2de035a0-ac75-43bd-9665-5c5a59c4c590%28Office.15%29.aspx)
    
  
-  [Using the SharePoint 2013 REST service](http://msdn.microsoft.com/library/e1ff2979-1c16-4cb0-a57e-9168dfe20a7c.aspx)
    
  
-  [Add-in-scoped external content types in SharePoint 2013](add-in-scoped-external-content-types-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint 2013](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  

