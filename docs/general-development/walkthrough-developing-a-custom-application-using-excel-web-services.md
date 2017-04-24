---
title: Walkthrough Developing a Custom Application Using Excel Web Services
ms.prod: SHAREPOINT
ms.assetid: 2f9bf243-281a-4d70-917e-9eaf0b867631
---


# Walkthrough: Developing a Custom Application Using Excel Web Services

The walkthrough in this section describes the process for accessing Excel Web Services from an application created with Microsoft Visual C#.
  
    
    

During this walkthrough, you will learn how to:
- Create a client application using the Visual Studio Console Application project template.
    
  
- Add a Web reference for Excel Web Services.
    
  
- Write code to access the Web service. You will learn how to open a workbook, get the session ID, pass in the default credentials, get Web service version information, define the range coordinate object, get the range that uses the range coordinate object, close the workbook, and catch the SOAP exception.
    
  
- Test and run the console application in debug mode.
    
  
A client console application is just one way to access the Web service. A more common way would be to use server applications, such as Microsoft ASP.NET applications. This walkthrough uses a console application example for simplicity, to focus on the Excel Web Services API aspects.
## Prerequisites

In order to complete this walkthrough, you will need: 
  
    
    

- Microsoft SharePoint Server 2010.
    
  
- Visual Studio or a similar Microsoft .NET Framework-compatible development tool.
    
  
- Sufficient permissions (at the very least, "view" permissions) to be able to access Excel Web Services on the computer where SharePoint Server 2010 is located. 
    
    > [!NOTE]
      > For more information about workbook permissions, see the following section, "Workbook Permissions." 
- A sample workbook installed on a local drive or local SharePoint document library. 
    
  
- A trusted location to store the workbooks that you want to access using Excel Web Services. If the workbooks are not stored in a trusted location, the Excel Web Services calls to open the workbook will fail. This walkthrough assumes the workbook is present on the local computer. 
    
    > [!NOTE]
      > For information about how to trust a location, see  [How to: Trust a Location](how-to-trust-a-location.md) and [How to: Trust Workbook Locations Using Script](http://msdn.microsoft.com/library/79ab6ced-7a0c-4275-b852-bb246fc6be57%28Office.15%29.aspx). 
- To create the workbook using Excel.
    
  
- To save the workbook as .xlsx or .xlsb files.
    
  
The workbook used in this example has a worksheet named "Sheet1". The worksheet has 11 columns and 19 rows. Each cell from A1 to K19 contains a numeric value—for example, 4245.955, 6960.673, and so on.
  
    
    

## Workbook Permissions


- To get the entire workbook (for example, by calling the **GetWorkbook** method), the caller needs "open" permission fr the workbook.
    
  
- To call the **GetApiVersion** method, no permission is necessary.
    
  
- For the rest of the Excel Web Services methods, the caller needs "view" permission (in Microsoft SharePoint Foundation) or "read" permission (on a file share) for the workbook.
    
    > [!NOTE]
      > For more information about setting permissions, see the SharePoint Foundation documentation. 

## See also


#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
  
    
    
 [Loop-Back SOAP Calls and Direct Linking](loop-back-soap-calls-and-direct-linking.md)
#### Other resources


  
    
    
 [Step 1: Creating the Web Service Client Project](step-1-creating-the-web-service-client-project.md)
  
    
    
 [Step 2: Adding a Web Reference](step-2-adding-a-web-reference.md)
  
    
    
 [Step 3: Accessing the Web Service](step-3-accessing-the-web-service.md)
  
    
    
 [Step 4: Building and Testing the Application](step-4-building-and-testing-the-application.md)
