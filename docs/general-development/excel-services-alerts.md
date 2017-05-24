---
title: Excel Services Alerts
keywords: errors
f1_keywords:
- errors
ms.prod: SHAREPOINT
ms.assetid: a4e7030b-05c2-484e-b21f-46cba937b803
---


# Excel Services Alerts

Excel Web Services exposes alerts for errors that occur within the Web service and errors that are returned by Excel Calculation Services.
  
    
    

Errors are exposed in the following ways:
- Excel calculation errors are returned similarly to how they are shown in Excel—that is, as cell error values, such as #VALUE!. When you call the **GetCell** or **GetRange** methods and request formatted values, you will get the # style error string. If you request unformatted values, you will get an enumerated error code. For more information, see the [Error Codes](#excel-services-alerts_errorcodes) section later in this topic.
    
  
- When an error occurs during the processing of one of the Web service methods, preventing the method from finishing successfully, the error is exposed as a Simple Object Access Protocol (SOAP) exception. You can and should catch this error in your code. These types of errors are also known as "stop" alerts.
    
  
- Errors that do not prevent the method from returning normal results are returned as part of the method arguments, specifically as an output argument. These types of errors are considered non-critical errors. The reason the errors are returned as an output argument instead of an exception is because throwing an exception would divert the code from its normal execution path, which is not desirable with noncritical errors. Checking for these errors is optional. These types of errors are also known as "continue" alerts.
    
  

## Types of Alerts

There are two types of alerts: "stop" and "continue."
  
    
    

### "stop" alerts

The "stop" alert causes the current operation to stop. This means the workbook will be rolled back to its state prior to execution of the current operation. The "stop" alerts are exposed as SOAP exceptions.
  
    
    

### "continue" alerts

The "continue" alert is typically a warning or non-critical error. When Excel Calculation Services throws a "continue" alert, the operation continues. These alerts are returned as out arguments—a struct with the various alert fields. For more information, see the **Status** class reference topics in the **Microsoft.Office.Excel.Server.WebServices** namespace.
  
    
    

## Exceptions to Catch

You should catch errors specific to Excel Calculation Services that you know the user might cause. For example, if your application prompts the user to type the path to a workbook, the user might type the wrong path or select a workbook that does not exist. You cannot control what the user types, but you can control the user experience when a user unintentionally misspells a workbook file name.
  
    
    
You should catch the SOAP exceptions (that is, "stop" alerts) in your code. For "continue" alerts, the calling code may choose to ignore or review the alert information.
  
    
    

## Error Codes
<a name="excel-services-alerts_errorcodes"> </a>

To enable catching specific error conditions, an Excel Calculation Services alert has an associated error code. The web service then returns the error using properties from the **SoapException** class.
  
    
    
For more information, see the "SoapException Class" topic in the Microsoft .NET Framework SDK documentation.
  
    
    

## Exception Handling
<a name="excel-services-alerts_errorcodes"> </a>

If your application (that is, your SOAP client) sends a request to a web service that the service is unable to process, the service returns a SOAP exception to the client. Handling exceptions thrown by Excel Web Services is an important part of the applications that you develop, because you can return specific information to users when errors occur. Exception handling can also help improve the user experience when something unexpected happens in your application.
  
    
    
For general information about exception handling, see "Handling and Throwing Exceptions" in the Microsoft .NET Framework SDK documentation.
  
    
    

## See also
<a name="excel-services-alerts_errorcodes"> </a>


#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api)
  
    
    
 [Excel Services Error Codes](excel-services-error-codes)
#### Other resources


  
    
    
 [Step 3: Accessing the Web Service](step-3-accessing-the-web-service)
  
    
    
 [Step 4: Building and Testing the Application](step-4-building-and-testing-the-application)
  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services)
