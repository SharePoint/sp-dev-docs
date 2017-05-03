---
title: How to Get Values from Ranges
keywords: get range,how to,howdoi,howto
f1_keywords:
- get range,how to,howdoi,howto
ms.prod: OFFICE365
ms.assetid: ab2c0f60-b7df-46a1-9105-eb85ce817431
---


# How to: Get Values from Ranges

Excel Web Services exposes four methods for getting values from an Excel workbook: **GetCell**, **GetCellA1**, **GetRange**, and **GetRangeA1**. 
  
    
    

The **GetCell** and **GetCellA1** methods return the value of a single cell. If you try to request more than a single cell—for example, by passing in a range reference such as "B1:E2" or a named range that is larger than a single cell, and so on—your method call will fail. If you want to retrieve values from a range of cells, use the **GetRange** and **GetRangeA1** methods instead.
Methods that have the A1 suffix ( **GetCellA1** and **GetRangeA1**) use a different coordinate system than those that do not ( **GetCell** and **GetRange**). If you want to use Excel-style references to cells, such as range references (for example, H8, A3:D5, Sheet2!A12:G18) or named ranges, you should use the methods with the A1 suffix. Those methods allow you to pass in the name of a sheet and the range address you want. In most cases, it is a good idea to use named ranges rather than Excel-style references, for abstraction reasons.
  
    
    

If you want to access an Excel range by using a numeric coordinate system, you should use the methods that do not have the A1 suffix. It is easier to use range coordinates when you have code that iterates through a set of cells in a loop, or when the range coordinates are calculated dynamically as part of the algorithm.The row and column coordinates of a cell are 0-based. Therefore, "0,0" will return cell A1, as in this example:


```cs

// Call the GetCell method to retrieve a value from a cell.
// The cell is in the first row and first column; that is, cell A1
object[] rangeResult2 = xlservice.GetCell(sessionId, sheetName, 0, 0, true, out outStatus);
```




```VB.net

' Call the GetCell method to retrieve a value from a cell.
' The cell is in the first row and first column; that is, cell A1
Dim rangeResult2() As Object = xlservice.GetCell(sessionId, sheetName, 0, 0, True, outStatus)
```

If you are getting values from multiple adjacent cells, you may want to consider using the **GetRange** method instead of making multiple calls to the **GetCell** method. This results in a single roundtrip to the server instead of multiple roundtrips. Therefore, in some cases, you may gain a noticeable performance improvement by using the **GetRange** method instead of the **GetCell** method.When getting a range of cells using the **GetRange** and **GetRangeA1** methods, you get back an object array ( **object[]** in C# and **Object ()** in Visual Basic .NET). The object array is actually a jagged array. Each entry in the array you get back will be another array of objects representing the cells. For more information about jagged arrays, see [Jagged Arrays (C# Programming Guide)](http://msdn.microsoft.com/en-us/library/2s05feca.aspx) (http://msdn.microsoft.com/en-us/library/2s05feca.aspx).
### To get values using the GetCell and GetRange methods


1. Use the **GetCell** method to get a value from a cell in the open workbook by using numeric range coordinates; for example:
    
```cs
  
// Instantiate the Web service and make a status array object.
ExcelService xlservice = new ExcelService();
Status[] outStatus;
string sheetName = "Sheet2";

// Set the path to a workbook.
// The workbook must be in a trusted location.
string targetWorkbookPath = "http://myserver02/example/Shared%20Documents/Book1.xlsx";

// Set credentials for requests.
xlservice.Credentials = System.Net.CredentialCache.DefaultCredentials;

// Call the open workbook, and point to the trusted 
// location of the workbook to open.
string sessionId = xlservice.OpenWorkbook(targetWorkbookPath, "en-US", "en-US", out outStatus);

// Call the GetCell method to retrieve a value from a cell.
// The cell is in the first row and ninth column.
object[] rangeResult2 = xlservice.GetCell(sessionId, sheetName, 0, 8, false, out outStatus);
```


```VB.net
  
' Instantiate the Web service and make a status array object.
Dim xlservice As New ExcelService()
Dim outStatus() As Status
Dim sheetName As String = "Sheet2"

' Set the path to a workbook.
' The workbook must be in a trusted location.
Dim targetWorkbookPath As String = "http://myserver02/example/Shared%20Documents/Book1.xlsx"

' Set credentials for requests.
xlservice.Credentials = System.Net.CredentialCache.DefaultCredentials

' Call the open workbook, and point to the trusted 
' location of the workbook to open.
Dim sessionId As String = xlservice.OpenWorkbook(targetWorkbookPath, "en-US", "en-US", outStatus)

' Call the GetCell method to retrieve a value from a cell.
' The cell is in the first row and ninth column.
Dim rangeResult2() As Object = xlservice.GetCell(sessionId, sheetName, 0, 8, False, outStatus)
```

2. Use the **GetRange** method to get values from a range in the open workbook by using numeric range coordinates.
    
```cs
  
// Instantiate the Web service and make a status array object.
ExcelService xlservice = new ExcelService();
Status[] outStatus;
RangeCoordinates rangeCoordinates = new RangeCoordinates();
string sheetName = "Sheet1";
...
// Prepare object to define range coordinates
// and call the GetRange method.
// startCol, startRow, startHeight, and startWidth
// get their value from user input.
rangeCoordinates.Column = (int)startCol.Value;
rangeCoordinates.Row = (int)startRow.Value;
rangeCoordinates.Height = (int)startHeight.Value;
rangeCoordinates.Width = (int)startWidth.Value;
...
object[] rangeResult1s = xlservice.GetRange(sessionId, sheetName, rangeCoordinates, false, out outStatus);
foreach (object[] x in rangeResult1s)
{
    foreach (object y in x)
    {
        Console.WriteLine(String.Format("{0}",  y));
    }
}
```


```VB.net
  
' Instantiate the Web service and make a status array object.
Dim xlservice As New ExcelService()
Dim outStatus() As Status
Dim rangeCoordinates As New RangeCoordinates()
Dim sheetName As String = "Sheet1"
...
' Prepare object to define range coordinates
' and call the GetRange method.
' startCol, startRow, startHeight, and startWidth
' get their value from user input.
rangeCoordinates.Column = CInt(Fix(startCol.Value))
rangeCoordinates.Row = CInt(Fix(startRow.Value))
rangeCoordinates.Height = CInt(Fix(startHeight.Value))
rangeCoordinates.Width = CInt(Fix(startWidth.Value))
...
Dim rangeResult1s() As Object = xlservice.GetRange(sessionId, sheetName, rangeCoordinates, False, outStatus)
For Each x As Object() In rangeResult1s
    For Each y As Object In x
        Console.WriteLine(String.Format("{0}", y))
    Next y
Next x
```


### To get values using the GetCellA1 and GetRangeA1 methods


1. Use the **GetCellA1** method to get a value from a cell in the open workbook, using the Excel "A1" range specification; for example:
    
```cs
  
// Instantiate the Web service and make a status array object.
ExcelService xlservice = new ExcelService();
Status[] outStatus;
string sheetName = "Sheet2";

object[] rangeResult = xlservice.GetCellA1(sessionId, sheetName, "MonthlyPayment", true, out outStatus);
```


```VB.net
  
' Instantiate the Web service and make a status array object.
Dim xlservice As New ExcelService()
Dim outStatus() As Status
Dim sheetName As String = "Sheet2"

Dim rangeResult() As Object = xlservice.GetCellA1(sessionId, sheetName, "MonthlyPayment", True, outStatus)
```

2. Use the **GetRangeA1** method to get a value from a range in the open workbook, using the Excel "A1" range specification. The following code example asks for a 2x3 range, that is, two rows by three columns. The code then loops through each row that is returned and retrieves the three cells each row contains. That is, in the first iteration:
    
  - rangeResult [0] returns the value in cell B2
    
  
  - rangeResult [1] returns the value in cell C2
    
  
  - rangeResult [2] returns the value in cell D2
    
    In the second iteration:
    
  
  - rangeResult [0] returns the value in cell B3
    
  
  - rangeResult [1] returns the value in cell C3
    
  
  - rangeResult [2] returns the value in cell D3
    
  

```cs
  
object[] rangeResults = xlservice.GetRangeA1(sessionId, "Sheet1", "B2:D3", true, out outStatus);
foreach (object[] rangeResult in rangeResults)
{
    Console.WriteLine(String.Format("{0} | {1} | {2}", 
        rangeResult[0], rangeResult[1], rangeResult[2]));
}

```


```VB.net
  
Dim rangeResults() As Object = xlservice.GetRangeA1(sessionId, "Sheet1", "B2:D3", True, outStatus)
For Each rangeResult As Object() In rangeResults
    Console.WriteLine(String.Format("{0} | {1} | {2}", rangeResult(0), rangeResult(1), rangeResult(2)))
Next rangeResult
```


## See also


#### Tasks


  
    
    
 [How to: Specify a Range Address and Sheet Name](how-to-specify-a-range-address-and-sheet-name.md)
  
    
    
 [How to: Set Values of Ranges](how-to-set-values-of-ranges.md)
#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
