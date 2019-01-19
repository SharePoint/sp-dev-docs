---
title: Accessing the SOAP API
ms.date: 09/25/2017
keywords: soap
f1_keywords:
- soap
ms.prod: sharepoint
ms.assetid: 36e8e3d5-83ac-4bd3-b556-1af132add3eb
localization_priority: Priority
---


# Accessing the SOAP API

Excel Web Services uses Simple Object Access Protocol (SOAP) over HTTP and acts as a communications interface between client programs and Excel Services. The Web service consists of methods and a set of complex type objects that you can use to access the complete functionality of Excel Web Services. To call the service, you must reference the Excel Web Services Web Services Description Language (WSDL).
  
    
    


## Referencing the WSDL

To call a Web service successfully, you must know how to access the service, what operations the service supports, what parameters the service expects, and what the service returns. WSDL provides this information in an XML document that can be read or processed by a computer.
  
    
    
The WSDL for the Excel Web Services endpoint is accessed through  `ExcelServices.asmx?wsdl`. WSDL can be consumed by development kits that support SOAP and Web services, such as the Microsoft .NET Framework SDK.
  
    
    
The following example shows the format of the URL to the Excel Web Services WSDL file:
  
    
    
 `http://<server>/<customsite>/_vti_bin/excelservice.asmx?WSDL`
  
    
    
If you do not have a custom site, you can use the following URL temporarily:
  
    
    
 `http://<server>/_vti_bin/excelservice.asmx?WSDL`
  
    
    
It is recommended that you create a custom site, and then use the URL that includes the custom site in the URL format.
  
    
    
The following table describes each element in the URL.
  
    
    


|**URL element**|**Description**|
|:-----|:-----|
| _server_ <br/> |The name of the server on which Microsoft SharePoint Server 2010 is deployed.  <br/> |
| _customsite_ <br/> |A custom SharePoint Server 2010 site that the server administrator creates.  <br/> |
| _<endpointname>.asmx_ <br/> |The name of the Web service endpoint. For Excel Web Services, it is  `ExcelService.asmx`.  <br/> |
   
For more information about the WSDL format, see the World Wide Web Consortium (W3C) WSDL specification at http://www.w3.org/TR/wsdl.
  
    
    

## See also


#### Other resources


  
    
    
 [Step 1: Creating the Web Service Client Project](step-1-creating-the-web-service-client-project.md)
  
    
    
 [Step 2: Adding a Web Reference](step-2-adding-a-web-reference.md)
  
    
    
 [Step 3: Accessing the Web Service](step-3-accessing-the-web-service.md)
  
    
    
 [Step 4: Building and Testing the Application](step-4-building-and-testing-the-application.md)
  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
