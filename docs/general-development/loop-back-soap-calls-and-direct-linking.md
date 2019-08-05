---
title: Loop-Back SOAP Calls and Direct Linking
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: bffc6565-636f-40d4-ba17-2511070ba5db
localization_priority: Normal
---


# Loop-Back SOAP Calls and Direct Linking

If you are writing code within Microsoft SharePoint Foundation, for example, a custom web part, custom aspx page, and so on, you should make direct calls to Microsoft.Office.Excel.Server.WebServices.dll. You do this by linking directly to Microsoft.Office.Excel.Server.WebServices.dll. 
  
    
    

Using Simple Object Access Protocol (SOAP) from a Web server to communicate with the same Web server is also known as using loop-back SOAP calls. It is strongly recommended that you do not attempt to use loop-back SOAP calls. If you are writing code within SharePoint Foundation, you should not use SOAP to call the Excel Web Services. You should instead link to Microsoft.Office.Excel.Server.WebServices.dll locally and make calls to it as you would any local assembly.
## Location of Microsoft.Office.Excel.Server.WebServices.dll

You can find Microsoft.Office.Excel.Server.WebServices.dll in one of the following locations:
  
    
    

-  _[drive:]_\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\14\\ISAPI
    
  
- Global assembly cache 
    
  

## Adding a Reference to Microsoft.Office.Excel.Server.WebServices.dll

To link directly to Microsoft.Office.Excel.Server.WebServices.dll in your project and call it from your code, you add a reference to it. On the computer where you have installed Microsoft SharePoint Server 2010, using the **Add Reference** dialog box in Microsoft Visual Studio, you can do one of the following:
  
    
    

- Select **Excel Web Services** from the **Component Name** list in the **.NET** tab.
    
  
- Browse to Microsoft.Office.Excel.Server.WebServices.dll located in:
  
    
    
 _[drive:]_\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\14\\ISAPI
    
  

## See also


#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
