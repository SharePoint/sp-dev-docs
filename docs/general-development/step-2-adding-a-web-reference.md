---
title: Step 2 Adding a Web Reference
ms.prod: OFFICE365
ms.assetid: e9175863-ddb4-4750-847d-d53cb59b33cb
---


# Step 2: Adding a Web Reference

Web service discovery is the process by which a client locates a Web service and obtains its service description. The process of Web service discovery in Visual Studio involves interrogating a Web site following a predetermined algorithm. The goal of the process is to locate the service description, which is an XML document that uses the Web Services Description Language (WSDL).
  
    
    

The service description describes what services are available and how to interact with those services. Without a service description, it is impossible to programmatically interact with a Web service.
Your application must have a means to communicate with the Web service and to locate it at run time. Adding a Web reference to your project for the Web service does this by generating a proxy class that interfaces with the Web service and provides a local representation of the Web service. For more information, see "Web References and Generating an XML Web Service Proxy" in the Microsoft Visual Studio 2005 documentation.
  
    
    


## To add a Web Reference


1. On the **Project** menu, click **Add Web Reference**.
    
  
2. In the **URL** box of the **Add Web Reference** dialog box, type the URL to obtain the service description of the Excel Web Services, such as `http://<server>/<customsite>/_vti_bin/excelservice.asmx` or `http://<server>/_vti_bin/excelservice.asmx`. Then click **Go** to retrieve information about the Web service.
    
    > **Note:**
      > You can also open the **Add Web Reference** dialog box in the **Solution Explorer** pane by right-clicking **References** and selecting **Add Web Reference**. 
3. In the **Web reference name** box, rename the Web reference toExcelWebService.
    
  
4. Click **Add Reference** to add a Web reference for the target Web service.
    
  
5. Visual Studio downloads the service description and generates a proxy class to interface between your application and Excel Web Services. 
    
  
6. For more information, see  [Accessing the SOAP API](accessing-the-soap-api.md).
    
  

## See also


#### Concepts


  
    
    
 [Loop-Back SOAP Calls and Direct Linking](loop-back-soap-calls-and-direct-linking.md)
#### Other resources


  
    
    
 [Step 1: Creating the Web Service Client Project](step-1-creating-the-web-service-client-project.md)
  
    
    
 [Step 3: Accessing the Web Service](step-3-accessing-the-web-service.md)
  
    
    
 [Step 4: Building and Testing the Application](step-4-building-and-testing-the-application.md)
  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
