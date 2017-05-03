---
title: Walkthrough Developing a Managed-Code UDF
ms.prod: SHAREPOINT
ms.assetid: e6a00833-0606-4a7d-91c3-b89a6e340348
---


# Walkthrough: Developing a Managed-Code UDF

This walkthrough describes the process for developing Excel Services user-defined functions (UDFs) using Microsoft Visual C#.
  
    
    

During this walkthrough, you will learn how to:
- Create a project using the Microsoft Visual Studio 2005 class library project template.
    
  
- Add a reference to Microsoft.Office.Excel.Server.Udf.dll.
    
  
- Write UDFs for use in Excel Services.
    
  
- Create a workbook to call custom functions from cells.
    
  
- Test and run UDFs in Excel Services.
    
  

## Prerequisites

In order to complete this walkthrough, you will need: 
  
    
    

- Microsoft SharePoint Server 2010. 
    
    > **Note:**
      > The easiest way to get all you need on the server is to do a basic, stand-alone install. All you need to add on top of that is a trusted location. 
- Excel.
    
  
- Visual Studio or a similar Microsoft .NET Framework-compatible development tool.
    
  
- To enable running the UDF assembly.
    
  
- A trusted SharePoint document library in which to store a workbook, and to allow the workbook to call UDFs by setting the **AllowUdfs** value to **true**. 
    
  
- A sample workbook that calls the UDF stored in a trusted SharePoint document library. 
    
  
- Permissions to view and publish a workbook to a SharePoint document library. 
    
    > **Note:**
      > For more information about setting permissions, see the Windows SharePoint Services 3.0 documentation. 
- To create the workbook using Excel.
    
  
- To save the workbook as an .xlsx or .xlsb file.
    
    > **Note:**
      > For more information about how to trust a location, how to enable UDFs, and how to set the **AllowUdfs** flag, see [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md). 

## See also


#### Tasks


  
    
    
 [Step 1: Creating a Project and Adding a UDF Reference](step-1-creating-a-project-and-adding-a-udf-reference.md)
  
    
    
 [Step 2: Creating a Managed-Code UDF](step-2-creating-a-managed-code-udf.md)
  
    
    
 [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md)
  
    
    
 [Step 4: Testing and Calling UDFs from Cells](step-4-testing-and-calling-udfs-from-cells.md)
  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service.md)
#### Concepts


  
    
    
 [Understanding Excel Services UDFs](understanding-excel-services-udfs.md)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
