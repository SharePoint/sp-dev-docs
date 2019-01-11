---
title: Excel Services ECMAScript Overview
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: f8c1be86-df19-44c3-a3bc-c0da2b80df10
localization_priority: Normal
---


# Excel Services ECMAScript Overview

In Microsoft SharePoint Server 2010, Excel Services added support for ECMAScript (JavaScript, JScript). JavaScript enables a new set of solutions by using Excel Services. 
  
    
    

The JavaScript object model in Excel Services enables developers to automate, customize, and interact with the Excel Web Access web part control on a page. By using the JavaScript object model, you can build mashups and other integrated solutions that interact with one or more Excel Web Access web part controls on a page. It also enables you to add more capabilities to your workbooks and to code around them.
By using the JavaScript object model, it is possible to detect and react to a user's interactions with an Excel Web Access web part and to programmatically interact with one or multiple Excel Web Access web parts.
  
    
    


## Using the ECMAScript Object Model

To use the JavaScript object model in Excel Services, you insert the JavaScript code on the page that contains the Excel Web Access web part. This can be done by adding the code to the web part page by using the Content Editor web part or by directly editing the .aspx page.
  
    
    
The JavaScript object model in Excel Services enables developers to: 
  
    
    

- Access items in a workbook such as ranges, tables, PivotTables, charts, and sheets.
    
  
- Set and retrieve values from cells by using ranges or named ranges.
    
  
- Raise events when the user changes the active selection or active cell or when the user starts editing a cell.
    
  
- Scroll to a different region and to switch the displayed sheet or named item. 
    
  
For more information, see the following links:
  
    
    

- For more information about the JavaScript object model in Excel Services, see the  [Ewa](http://msdn.microsoft.com/library/6fe73191-3213-b986-1ad6-2c3b918a2241%28Office.15%29.aspx) namespace reference documentation.
    
  
- For an example of how to interact with the JavaScript object model in Excel Services by using the Content Editor web part, see  [Walkthrough: Developing Using the Content Editor web part](walkthrough-developing-using-the-content-editor-web-part.md).
    
  

## ECMAScript .js File Location

Minified .js files for the JavaScript object model are installed in the %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS directory. The name of the file is EwaMoss.js.
  
    
    
For basic information about how to use the JavaScript object model within an .aspx page or .js file, see  [Setting Up an Application Page for JavaScript](http://msdn.microsoft.com/library/48582a0b-f787-4868-8298-958717ec8ff8%28Office.15%29.aspx).
  
    
    

