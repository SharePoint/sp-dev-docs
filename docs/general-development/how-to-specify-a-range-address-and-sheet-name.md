---
title: Specify a range address and sheet name
ms.date: 09/25/2017
keywords: how to,howdoi,howto,set range
f1_keywords:
- how to,howdoi,howto,set range
ms.prod: sharepoint
ms.assetid: 8bfefc48-1fbc-4b65-8156-1b7d0a8453ee
localization_priority: Normal
---


# Specify a range address and sheet name

This example shows how to specify range addresses by using range coordinates, named ranges, rows, and columns. It also shows how to specify a sheet name and the relationship between a sheet name and a range address.
  
    
    

Range coordinates are the four integer coordinates used to select a contiguous range. Range coordinates enable you to specify Excel ranges by using direct integer indexing as an alternative to "A1" expressions. The coordinates you can specify are the top row, left column, height, and width. It is easier to use range coordinates when you have code that iterates through a set of cells in a loop, or when the range coordinates are calculated dynamically as part of the algorithm.
A range specification must contain a sheet name; Excel Web Services does not recognize the "current sheet." There are a few ways to specify the sheet name: 
  
    
    


- As part of the range address—for example, "Sheet3!B12:D18"—in which case the sheet name argument can be empty:
    
```cs
  
object[] rangeResult1 = xlservice.GetRangeA1(sessionId, String.Empty, "Sheet2!A12:G18", true, out outStatus);
```


```VB.net
  Dim rangeResult1() As Object = xlservice.GetRangeA1(sessionId, String.Empty, "Sheet2!A12:G18", True, outStatus)
```

- In a separate sheet name argument, in which case the range address argument does not have to include the sheet name:
    
```cs
  xlservice.SetCell(sessionId, "Sheet3", 0, 11, 1000);
```


```VB.net
  xlservice.SetCell(sessionId, "Sheet3", 0, 11, 1000)
```

- In both the sheet name and range address, in which case the name of the sheet must match:
    
```cs
  object[] rangeResult = xlservice.GetCellA1(sessionId, "Sheet3", "Sheet3!G18", true, out outStatus);
```


```VB.net
  Dim rangeResult() As Object = xlservice.GetCellA1(sessionId, "Sheet3", "Sheet3!G18", True, outStatus)
```

The only case that does not require a sheet name is a named range, because some named ranges have a workbook scope. For example, you can refer to named ranges without specifying the sheet name argument:


```cs
xlServices.SetCellA1(sessionId, String.Empty, "MyNamedRange", 8);
```




```VB.net
xlServices.SetCellA1(sessionId, String.Empty, "MyNamedRange", 8)
```

If you specify a sheet name, the ranges you reference must exist on the sheet you specify. If you specify a sheet that does not exist, the call will fail and you will get a Simple Object Access Protocol (SOAP) exception, saying that the sheet does not exist.
## Example

> [!NOTE]
> It is assumed that you have already created a SharePoint document library and made it a trusted location. For more information about this, see  [How to: Trust a Location](how-to-trust-a-location.md) and [How to: Trust Workbook Locations Using Script](http://msdn.microsoft.com/library/79ab6ced-7a0c-4275-b852-bb246fc6be57%28Office.15%29.aspx). 
  
    
    


```cs
using System;
using System.Text;
using System.Web.Services.Protocols;
using ExcelWebService.myserver02;
namespace ExcelWebService
{
/// <summary>
/// Summary description for Class1.
/// </summary>
    class MyExcelWebService
    {
        [STAThread]
        static void Main(string[] args)
        {
            // Instantiate the Web service 
            // and range coordinate array object.
            ExcelService xlservice = new ExcelService();
            Status[] outStatus;
            RangeCoordinates rangeCoordinates = new RangeCoordinates();
            string sheetName = "MySheet1";

            // TODO: Change the path to the workbook
            // to point to a workbook you have access to.
            // The workbook must be in a trusted location.
            // Using the workbook path this way will allow 
            // you to call the workbook remotely.
            string targetWorkbookPath = 
       "http://myserver02/example/Shared%20Documents/MyWorkbook1.xlsx";

            // Set Credentials for requests
            xlservice.Credentials = 
                System.Net.CredentialCache.DefaultCredentials;

            try
            {
                // Call the open workbook, and point to    
                // the workbook to open.
                string sessionId = 
                    xlservice.OpenWorkbook(targetWorkbookPath, 
                        String.Empty, String.Empty, out outStatus);
                // Prepare object to define range coordinates
                // and call the GetRange method.
                // startCol, startRow, startHeight, and startWidth
                // get their values from user input.
                rangeCoordinates.Column = (int)startCol.Value;
                rangeCoordinates.Row = (int)startRow.Value;
                rangeCoordinates.Height = (int)startHeight.Value;
                rangeCoordinates.Width = (int)startWidth.Value;

                object[] rangeResult1 = xlservice.GetRange(sessionId, 
                    sheetName, rangeCoordinates, false, out outStatus);
                Console.WriteLine("Total rows in range: " + 
                    rangeResult1.Length);
                Console.WriteLine("Sum in last column is: " + 
                    ((object[])rangeResult1[18])[11]);

                // Call the SetCell method, which invokes 
                // the Calculate method.
                // Set first row in last column cell to 1000.
                xlservice.SetCell(sessionId, sheetName, 0, 11, 1000);

                // Call the GetRange method again to see if 
                // the Sum total in the last column changed.
                object[] rangeResult2 = xlservice.GetRange(sessionId, 
                    sheetName, rangeCoordinates, false, out outStatus);    
                Console.WriteLine("Sum in the last column after SetCell 
                    is: " + ((object[])rangeResult2[18])[11]); 

                // Close workbook. This also closes the session.
                xlservice.CloseWorkbook(sessionId);
            }

            catch (SoapException e)
            {
                Console.WriteLine("Exception Message: {0}", e.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Message: {0}", e.Message);
            }
            Console.ReadLine();
        }
    }
}
```


```VB.net

Imports System
Imports System.Text
Imports System.Web.Services.Protocols
Imports ExcelWebService.myserver02
Namespace ExcelWebService
''' <summary>
''' Summary description for Class1.
''' </summary>
    Friend Class MyExcelWebService
        <STAThread> _
        Shared Sub Main(ByVal args() As String)
            ' Instantiate the Web service 
            ' and range coordinate array object.
            Dim xlservice As New ExcelService()
            Dim outStatus() As Status
            Dim rangeCoordinates As New RangeCoordinates()
            Dim sheetName As String = "MySheet1"

            ' TODO: Change the path to the workbook
            ' to point to a workbook you have access to.
            ' The workbook must be in a trusted location.
            ' Using the workbook path this way will allow 
            ' you to call the workbook remotely.
            Dim targetWorkbookPath As String = "http://myserver02/example/Shared%20Documents/MyWorkbook1.xlsx"

            ' Set Credentials for requests
            xlservice.Credentials = System.Net.CredentialCache.DefaultCredentials

            Try
                ' Call the open workbook, and point to    
                ' the workbook to open.
                Dim sessionId As String = xlservice.OpenWorkbook(targetWorkbookPath, String.Empty, String.Empty, outStatus)
                ' Prepare object to define range coordinates
                ' and call the GetRange method.
                ' startCol, startRow, startHeight, and startWidth
                ' get their values from user input.
                rangeCoordinates.Column = CInt(Fix(startCol.Value))
                rangeCoordinates.Row = CInt(Fix(startRow.Value))
                rangeCoordinates.Height = CInt(Fix(startHeight.Value))
                rangeCoordinates.Width = CInt(Fix(startWidth.Value))

                Dim rangeResult1() As Object = xlservice.GetRange(sessionId, sheetName, rangeCoordinates, False, outStatus)
                Console.WriteLine("Total rows in range: " &amp; rangeResult1.Length)
                Console.WriteLine("Sum in last column is: " &amp; (CType(rangeResult1(18), Object()))(11))

                ' Call the SetCell method, which invokes 
                ' the Calculate method.
                ' Set first row in last column cell to 1000.
                xlservice.SetCell(sessionId, sheetName, 0, 11, 1000)

                ' Call the GetRange method again to see if 
                ' the Sum total in the last column changed.
                Dim rangeResult2() As Object = xlservice.GetRange(sessionId, sheetName, rangeCoordinates, False, outStatus)
                Console.WriteLine("Sum in the last column after SetCell is: " &amp; (CType(rangeResult2(18), Object()))(11))

                ' Close workbook. This also closes the session.
                xlservice.CloseWorkbook(sessionId)

            Catch e As SoapException
                Console.WriteLine("Exception Message: {0}", e.Message)
            Catch e As Exception
                Console.WriteLine("Exception Message: {0}", e.Message)
            End Try
            Console.ReadLine()
        End Sub
    End Class
End Namespace
```


## Robust programming

Make sure you add a Web reference to an Excel Web Services site to which you have access. Change the following:
  
    
    

- Change the  `using ExcelWebService.myserver02;` statement to point to the Web service site you are referencing.
    
  
- Change  `string targetWorkbookPath = "http://myserver02/example/Shared%20Documents/Book1.xlsx";` to point to a workbook to which you have access. The workbook must be in a trusted location.
    
  

## See also


#### Tasks


  
    
    
 [How to: Get Values from Ranges](how-to-get-values-from-ranges.md)
  
    
    
 [How to: Set Values of Ranges](how-to-set-values-of-ranges.md)
#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
