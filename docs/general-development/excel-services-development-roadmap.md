---
title: Excel Services Development Roadmap
keywords: roadmap
f1_keywords:
- roadmap
ms.prod: SHAREPOINT
ms.assetid: 5c789f58-9cdb-4601-9047-9c6f83f2fbba
---


# Excel Services Development Roadmap

An important aspect of Excel Services is that solution developers can use its power programmatically from their applications. These applications can be line-of-business (LOB) products or custom enterprise solutions that an organization develops internally. 
  
    
    

Following are examples of these applications: 
- Multitiered applications, with the presentation layer implemented as a Web application (for example, an ASP.NET application) that calls Excel Web Services.
    
  
- Applications within Microsoft SharePoint Server 2010, or integrated with LOB products.
    
  
There are five types of development that you can do by using Excel Services:
- Develop solutions by using Excel Web Services
    
  
- Extend the Microsoft Excel function library in Excel Services by using user-defined functions (UDFs) 
    
  
- Customize the Excel Web Access Web Part
    
  
- Develop solutions by using ECMAScript (JavaScript, JScript)
    
  
- Use the REST API to perform operations against Excel workbooks
    
  

## Excel Web Service

Following are the main scenarios for Excel Web Services:
  
    
    

- **Server-side Excel calculation**
    
    This scenario is application-centric. In this scenario, you use models defined in Excel workbooks and calculated on the server as part of application logic.
    
  
- **Automating workbook updates on the server**
    
    This scenario is file-centric. In this scenario, Excel Web Services processes a workbook, and saves copies of the workbook or snapshots.
    
  
- **Opening workbooks in edit sessions**
    
    Excel Web Services supports opening workbooks in edit sessions in SharePoint Server 2010. In this scenario, you can use code to edit a workbook.
    
  

### Server-Side Excel Calculation

For server-side Excel calculation, a custom application typically uses an Excel model as part of its logic. Instead of having to re-code Excel workbook business logic in a programming language, the business user can maintain the model in Excel in a server location. The developer never needs to change a line of code in the application that uses the model created by the business user.
  
    
    
In this scenario, the custom application repeatedly calls Excel Web Services, which sends the calls to a back-end calculation service. Excel Calculation Services does the following:
  
    
    

- Loads the specified Excel workbook 
    
  
- Receives inputs
    
  
- Processes the workbook (for example, refreshes data or performs calculations)
    
  
- Sends the results to the custom application
    
  

### Automating Workbook Updates on the Server

When developers automate the updating of Excel workbooks on the server, they often have two objectives:
  
    
    

- Generate Excel files or modify Excel templates by using the Open XML File Formats, and then calculate the generated Excel file.
    
  
- Periodically open an Excel file to refresh external data (once, or maybe multiple times per user), and then calculate the resulting workbooks and save them or send them in e-mail messages to various users.
    
  
In this scenario, a custom application uses Excel Web Services to do the following:
  
    
    

- Load the specified Excel workbook 
    
  
- Input parameters
    
  
- Process the workbook (for example, refresh data or perform calculations) 
    
  
The custom application retrieves the live version of the workbook or snapshot and then saves the workbook or snapshot by using Excel Web Services.
  
    
    

> **Note:**
> When you make changes to a workbook—for example, by setting values to a range by using Excel Web Services—the changes to the workbook are preserved only for that particular session. The changes are not saved or persisted back to the original workbook. When the current workbook session ends (for example, when you call the **CloseWorkbook** method, or when the session times out), changes that you made are lost.> If you want to save changes that you make to a workbook, you can use the **GetWorkbook** method and then save the workbook by using the **SaveWorkbook** method or the **SaveWorkbookCopy** method. For more information about the Excel Web Services API, see [Microsoft.Office.Excel.Server.WebServices](https://msdn.microsoft.com/library/Microsoft.Office.Excel.Server.WebServices.aspx) .
  
    
    


### Using Excel Web Services

You can use Excel Web Services as:
  
    
    

- A regular Web service, by calling the Web methods through SOAP over HTTP.
    
  
- A local assembly, by linking directly to **Microsoft.Office.Excel.Server.Webservices.dll**.
    
  
For more information about when you should link directly to **Microsoft.Office.Excel.Server.Webservices.dll**, see  [Loop-Back SOAP Calls and Direct Linking](loop-back-soap-calls-and-direct-linking). 
  
    
    
For information about the Excel Web Services API, see the  [Microsoft.Office.Excel.Server.Webservices](https://msdn.microsoft.com/library/Microsoft.Office.Excel.Server.Webservices.aspx) namespace reference documentation. For an example of how to develop a custom application by using Excel Web Services, see [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services).
  
    
    

## User-Defined Functions (UDFs)

Excel Services supports managed-code UDFs. Excel Services UDFs give you the ability to use formulas in cells to call custom functions written in managed code and deployed to SharePoint Server 2010. You can create UDFs to:
  
    
    

- Call custom mathematical functions.
    
  
- Get data from custom data sources into worksheets.
    
  
- Call Web services from the UDFs.
    
  
- Wrap calls to existing native code library functions—for example, existing Excel UDFs.
    
  
For more information about Excel Services UDFs, see  [Understanding Excel Services UDFs](understanding-excel-services-udfs). 
  
    
    

### Using UDFs

For information about Excel Services UDF definitions, see the  [Microsoft.Office.Excel.Server.Udf](https://msdn.microsoft.com/library/Microsoft.Office.Excel.Server.Udf.aspx) namespace reference documentation.
  
    
    
For an example of how to create managed-code UDFs, see  [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf).
  
    
    

## Excel Web Access

You can use the extensible properties of the Excel Web Access Web Part to:
  
    
    

- Configure Excel Web Access programmatically.
    
  
- Change Excel Web Access properties programmatically.
    
  
- Apply a theme or brand a Web Part page by using cascading style sheets (CSS).
    
  

### Using Excel Web Access Web Part Extensibility

For information about:
  
    
    

- Excel Web Access extensible properties, see the **Microsoft.Office.Excel.Server.WebUI** namespace reference documentation.
    
  
- Excel Web Access CSS, see the CSS reference documentation.
    
  
- How to programmatically configure a Web Part, see the SharePoint Foundation SDK. 
    
  

## ECMAScript (JavaScript, JScript)

In SharePoint Server 2010, Excel Services added support for JavaScript. The JavaScript object model in Excel Services enables developers to automate, customize, and interact with the Excel Web Access Web Part control on a page. By using the JavaScript object model, you can build mashups and other integrated solutions that interact with one or more Excel Web Access Web Part controls on a page. It also enables you to add more capabilities to your workbooks and code around them.
  
    
    
For more information about the JavaScript object model in Excel Services, see the  [Ewa](http://msdn.microsoft.com/library/6fe73191-3213-b986-1ad6-2c3b918a2241%28Office.15%29.aspx) namespace reference documentation.
  
    
    

### Using ECMAScript (JavaScript, JScript)

For more information about JavaScript, see the following links:
  
    
    

- For more information about the JavaScript object model in Excel Services, see the  [Ewa](http://msdn.microsoft.com/library/6fe73191-3213-b986-1ad6-2c3b918a2241%28Office.15%29.aspx) namespace reference documentation.
    
  
- For an example of how to interact with the JavaScript object model in Excel Services by using the Content Editor Web Part, see  [Walkthrough: Developing Using the Content Editor Web Part](walkthrough-developing-using-the-content-editor-web-part).
    
  

## REST API

The REST API in Excel Services is new in SharePoint Server 2010. By using the REST API, you can access workbook parts or elements directly through a URL. 
  
    
    
The discovery mechanisms built into the Excel Services REST API also enable developers and users to explore the content of a workbook manually or programmatically, by supplying Atom feeds that contain information about the elements that reside in a specific workbook. The resources that you can access through the REST API are ranges, charts, tables, and PivotTables. 
  
    
    
Using the Atom feed provided by the REST API enables an easier way to get to the data that you care about. The feed contains traversable elements that allow any piece of code to discover what elements exist in a workbook. 
  
    
    
For more information, see  [Excel Services REST API](excel-services-rest-api).
  
    
    

### Using the REST API

For information about:
  
    
    

- Accessing the REST service, and to view sample URIs for the REST service in Excel Services, see  [Accessing Excel Services REST API](sample-uri-for-excel-services-rest-api).
    
  
- Accessing a schema for the REST service in Excel Services, see  [Accessing a Schema](accessing-a-schema).
    
  

## See also


#### Tasks


  
    
    
 [How to: Programmatically Add an Excel Web Access Web Part to a Page](how-to-programmatically-add-an-excel-web-access-web-part-to-a-page)
#### Concepts


  
    
    
 [Excel Services Overview](excel-services-overview)
  
    
    
 [Excel Services Architecture](excel-services-architecture)
  
    
    
 [Supported and Unsupported Features](supported-and-unsupported-features)
  
    
    
 [Excel Services Blogs, Forums, and Resources](excel-services-blogs-forums-and-resources)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services)
