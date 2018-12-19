---
title: Refresh data
ms.date: 09/25/2017
keywords: how to,howdoi,howto
f1_keywords:
- how to,howdoi,howto
ms.prod: sharepoint
ms.assetid: 6cfd89ff-846e-486b-8f73-a109016813ab
---


# Refresh data

This example shows how to retrieve updated data from external data sources for the open workbook by using the **Refresh** method. The Excel Web Services signature for the **Refresh** method is as follows:
  
    
    


```cs

public Status[] Refresh (string sessionId, string connectionName)
```


```VB.net
Public Function Refresh(ByVal sessionId As String, ByVal connectionName As String) As Status()
End Function
```

If you link directly to Microsoft.Office.Excel.Server.WebServices.dll, the signature for the **Refresh** method is:


```cs

public void Refresh (string sessionId, string connectionName,
    out Status[] status)
```




```VB.net

Public Sub Refresh(ByVal sessionId As String, ByVal connectionName As String, <System.Runtime.InteropServices.Out()> ByRef status() As Status)
End Sub
```

The  `connectionName` argument refers to the connection name in a Microsoft Office Excel 2007 workbook.You can use the **Refresh** method to refresh a single data connection in the workbook, or to refresh all connections. This is useful particularly when the connections are created without refresh-on-open functionality.When you refresh a connection, the data and all objects using the connection will be refreshed. To refresh all available connections in the workbook, you pass in an empty connection string or **null** for the connection name argument.The refresh operations will be attempted regardless of the type of authentication used, without any further confirmation or prompt.For more information about the **Refresh** method, see the Excel Web Services reference documentation.
## Example

The following code sample shows how to call the **Refresh** method using Excel Web Services. The connection name in this example is "MyInventoryConnection":
  
    
    

```cs

// Instantiate the Web service.
ExcelService xlservice = new ExcelService();
Status[] outStatus;
RangeCoordinates rangeCoordinates = new RangeCoordinates();
string sheetName = "Sheet3";

// Set the path to the workbook to open.
// TODO: Change the path to the workbook
// to point to a workbook you have access to.
// The workbook must be in a trusted location.
string targetWorkbookPath = 
    http://myserver02/example/Shared%20Documents/Book1.xlsx";
            
// Set credentials for requests.
xlservice.Credentials = System.Net.CredentialCache.DefaultCredentials;

// Call open workbook, and point to the trusted   
// location of the workbook to open.
string sessionId = xlservice.OpenWorkbook(targetWorkbookPath, "en-US", "en-US", out outStatus);
 
// Prepare object to define range coordinates.
rangeCoordinates.Column = 0;
rangeCoordinates.Row = 0;
rangeCoordinates.Height = 8;
rangeCoordinates.Width = 10;

// Set the cell located in the first row and 
// ninth column to 300.
xlservice.SetCell(sessionId, sheetName, 0, 8, 300); 
xlservice.Refresh(sessionId, "MyInventoryConnection");
```


```VB.net

' Instantiate the Web service.
Dim xlservice As New ExcelService()
Dim outStatus() As Status
Dim rangeCoordinates As New RangeCoordinates()
Dim sheetName As String = "Sheet3"

' Set the path to the workbook to open.
' TODO: Change the path to the workbook
' to point to a workbook you have access to.
' The workbook must be in a trusted location.
' Set credentials for requests.
Dim targetWorkbookPath As String = http: xlservice.Credentials = System.Net.CredentialCache.DefaultCredentials 'myserver02/example/Shared%20Documents/Book1.xlsx";

' Call open workbook, and point to the trusted   
' location of the workbook to open.
Dim sessionId As String = xlservice.OpenWorkbook(targetWorkbookPath, "en-US", "en-US", outStatus)

' Prepare object to define range coordinates.
rangeCoordinates.Column = 0
rangeCoordinates.Row = 0
rangeCoordinates.Height = 8
rangeCoordinates.Width = 10

' Set the cell located in the first row and 
' ninth column to 300.
xlservice.SetCell(sessionId, sheetName, 0, 8, 300)
xlservice.Refresh(sessionId, "MyInventoryConnection")
```

If you link directly to Microsoft.Office.Excel.Server.WebServices.dll, the equivalent code is:
  
    
    



```

// Instantiate the ExcelService class.
ExcelService xlservice = new ExcelService();
Status[] outStatus;
RangeCoordinates rangeCoordinates = new RangeCoordinates();
string sheetName = "Sheet3";

// Set the path to the workbook to open.
// TODO: Change the path to the workbook
// to point to a workbook you have access to.
// The workbook must be in a trusted location.
string targetWorkbookPath = 
    http://myserver02/example/Shared%20Documents/Book1.xlsx";
            
// Call the open workbook, and point to the trusted 
// location of the workbook to open.
string sessionId = xlservice.OpenWorkbook(targetWorkbookPath, "en-US", "en-US", out outStatus);
                
// Set the cell located in the first row and 
// ninth column to 300.
xlservice.SetCell(sessionId, sheetName, 0, 8, 300, out outStatus); 
xlservice.Refresh(sessionId, "MyInventoryConnection", out outStatus);

byte[] workbook = xlService.GetWorkbook(sessionId, WorkbookType.FullWorkbook, out status);

// Write the resulting Excel file to stdout 
// as a binary stream.
BinaryWriter binaryWriter = 
    new BinaryWriter(Console.OpenStandardOutput());
binaryWriter.Write(workbook);
binaryWriter.Close();
...
...

```




```VB.net

' Instantiate the ExcelService class.
Dim xlservice As New ExcelService()
Dim outStatus() As Status
Dim rangeCoordinates As New RangeCoordinates()
Dim sheetName As String = "Sheet3"

' Set the path to the workbook to open.
' TODO: Change the path to the workbook
' to point to a workbook you have access to.
' The workbook must be in a trusted location.
' Call the open workbook, and point to the trusted 
' location of the workbook to open.
Dim targetWorkbookPath As String = http: String sessionId = xlservice.OpenWorkbook(targetWorkbookPath, "en-US", "en-US", outStatus) 'myserver02/example/Shared%20Documents/Book1.xlsx";

' Set the cell located in the first row and 
' ninth column to 300.
xlservice.SetCell(sessionId, sheetName, 0, 8, 300, outStatus)
xlservice.Refresh(sessionId, "MyInventoryConnection", outStatus)

Dim workbook() As Byte = xlService.GetWorkbook(sessionId, WorkbookType.FullWorkbook, status)

' Write the resulting Excel file to stdout 
' as a binary stream.
Dim binaryWriter As New BinaryWriter(Console.OpenStandardOutput())
binaryWriter.Write(workbook)
binaryWriter.Close()
...
...

```


## See also


#### Tasks


  
    
    
 [How to: Trust a Location](how-to-trust-a-location.md)
  
    
    
 [How to: Save from Excel Client to the Server](how-to-save-from-excel-client-to-the-server.md)
  
    
    
 [How to: Get an Entire Workbook or a Snapshot](how-to-get-an-entire-workbook-or-a-snapshot.md)
#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
  
    
    
 [Loop-Back SOAP Calls and Direct Linking](loop-back-soap-calls-and-direct-linking.md)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
