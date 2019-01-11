---
title: Excel Services error codes
ms.date: 09/25/2017
keywords: alerts
f1_keywords:
- alerts
ms.prod: sharepoint
ms.assetid: ff128d67-f3ac-4a8f-ae8e-1e19e343014e
localization_priority: Priority
---


# Excel Services error codes

Excel Services generates errors and error messages in the SOAP exception based on errors that occur in Excel Services. The following table shows the errors that are accessible when calls to the Excel Web Services methods throw a SOAP exception. 

You use the [SubCode](https://docs.microsoft.com/dotnet/api/system.web.services.protocols.soapexception.subcode?view=netframework-4.7.2) property of the **SoapException** class to capture the error codes. For more information about using the **SubCode** property to capture error codes, see [How to: Use the SubCode Property to Capture Error Codes](how-to-use-the-subcode-property-to-capture-error-codes.md)
For more information about Excel Services alerts, see  [Excel Services Alerts](excel-services-alerts.md).

## Error codes

The following table lists the error codes for Excel Web Services alerts and the associated messages, explanation, and resolutions. 
 
|**Error Code**|**Message**|**Explanation**|**Resolution**|
|:-----|:-----|:-----|:-----|
|ApiInvalidArgument  <br/> |Invalid value to argument: {0}  <br/> |An invalid value for an argument was passed into the API call.  <br/> 0 = name of the argument. Its value is invalid.  <br/> |Use a valid value for the argument.  <br/> |
|ApiInvalidCoordinate  <br/> |The {0} coordinate of {1} is invalid.  <br/> |0 = coordinate name (row, column, height, width).  <br/> 1 = name of the argument, which holds the coordinate structure.  <br/> The contents of the **RangeCoordinates** class or the row\\column\\height\\width parameters on a get or set call are invalid. <br/> |Use valid coordinate values for the argument.  <br/> |
|DimensionAndArrayMismatch  <br/> |The size of the provided array does not match the size and shape of the destination range.  <br/> |The caller tried to set a range into a workbook but the parameter that contains the array values does not match the target range.  <br/> |Make sure the size of the provided array matches the dimensions of the destination range (for example, 2 columns wide by 3 rows high).  <br/> |
|DiscontiguousRangeNotSupported  <br/> |The request for the range does not refer to a contiguous range. Excel Services supports contiguous ranges only.  <br/> |The caller supplied a noncontiguous range when trying to set or get a range of cells. Excel Services does not support noncontiguous ranges. It only supports contiguous ranges.  <br/> |Enter a contiguous range such as "A1:B7" or "A1" or "MyTable[#Data]" instead of a noncontiguous range such as "A1:B7, B12" or "A1,A3".  <br/> |
|ExternalDataRefreshFailed  <br/> |Unable to retrieve external data for the following connections:  <br/> {0}  <br/> The data source may be unreachable, may not be responding, or has denied access.  <br/> |Attempts to refresh a data source inside a workbook failed.  <br/> 0 is a \\n separated list of connection names.  <br/> |Make sure the data source is available and that you have permission to access it.  <br/> |
|FileOpenAccessDenied  <br/> |You do not have permissions to open this file on Excel Services.  <br/> |A call to the **OpenWorkbook** method failed because the user does not have access to the file. <br/> |Contact your administrator.  <br/> |
|FileCorrupt  <br/> |The file you selected cannot be opened because it is corrupt, protected by Information Rights Management, or in a file format not supported by Excel Services. Excel may be able to open this file.  <br/> |A call to the **OpenWorkbook** method failed because the file is corrupted. <br/> |Try to open the file again, or use Excel to open the file.  <br/> |
|FileOpenNotFound  <br/> |The file you selected could not be found. Check the spelling of the file name and verify that the location is correct.  <br/> |A call to the **OpenWorkbook** method failed because the file does not exist. <br/> |Make sure that the file has not been renamed, moved, or deleted, that the file is in a trusted location, and that you have access to the file. If the problem persists, contact your administrator.  <br/> |
|FileOpenSecuritySettings  <br/> |The file you selected cannot be opened at this time due to security settings for Excel Services.  <br/> |A call to the **OpenWorkbook** method failed because the administrator's security settings prevented it from opening for various reasons. For example, the file is too big, that is, its size exceeded the limit set by the administrator. <br/> |Contact your administrator.  <br/> |
|FormulaEditingNotEnabled  <br/> |Editing Formulas is not enabled in this release of Excel Services.  <br/> |The caller tried to write a formula into the workbook.  <br/> |Do not try to write a formula because it is not supported in this release of Excel Services.  <br/> |
|GenericFileOpenError  <br/> |An error occurred while opening the file you selected.  <br/> |Excel Services is unable to open the file for an unknown reason.  <br/> |Wait a few minutes and try to open the file again. If the problem persists, contact your administrator.  <br/> |
|InvalidSheetName  <br/> |The worksheet that you requested does not exist in the workbook.  <br/> |The sheet name was not found or was invalid.  <br/> |Use a valid value for the name of the sheet.  <br/> |
|InvalidOrTimedOutSession  <br/> |The operation you performed cannot be completed at this time because the session is no longer available on the server. You can reload the workbook and create a new session, but any changes you have made have been lost.  <br/> |The call  _sessionId_ value is either invalid or has since timed out. <br/> |Reload the workbook in a new session.  <br/> |
|IRMedWorkbook  <br/> |The requested workbook is IRM protected. Excel Services cannot load IRM protected workbooks.  <br/> |A call to the **OpenWorkbook** method failed because the workbook is protected by Information Rights Management (IRM). <br/> |Only pass in workbooks that are not IRM protected.  <br/> |
|MaxSessionsPerUserExceeded  <br/> |The maximum number of allowed sessions per user has been exceeded. The operation cannot be completed.  <br/> |The maximum number of sessions a user can have opened at any given time has been exceeded. This limit is set by the administrator.  <br/> |Do not exceed the limit or contact your administrator.  <br/> |
|MultipleRequestsOnSession  <br/> |An operation is already being processed in this session. Only one operation can be processed in a session at a time.  <br/> |Multiple requests have been issued on the same session. A session can only process one request at a time (with a few exceptions).  <br/> |Try performing the operation again.  <br/> |
|NotMemberOfRole  <br/> |Access denied. You do not have permission to perform this action or access this resource.  <br/> |The caller does not have permission to access the server.  <br/> |Contact your administrator.  <br/> |
|ObjectTypeNotSupported  <br/> |One or more object types provided are not supported by Excel Services. The operation was rolled back.  <br/> |The caller tried to write unsupported object type values into a range.  <br/> |Try the operation again using one of the supported object types.  <br/> |
|OperationCanceled  <br/> |The operation has been canceled.  <br/> |The operation that is currently taking place is canceled because the user calls the **CancelRequest** method. <br/> |Call the **CancelRequest** method only if you want to cancel the current operation. <br/> |
|RangeParseError  <br/> |Excel Services was unable to parse the range request.  <br/> |The range that was passed into a method with the A1 suffix (**SetCellA1**, **SetRangeA1**, **GetCellA1**, and **GetRangeA1**) could not be parsed.  <br/> |Enter a range reference using A1 notation such as "Sheet1!Range("A6:A15")" or a valid structured reference such as "[ShipCity].[#Headers]".  <br/> |
|RangeRequestAreaExceeded  <br/> |The area of the requested range exceeds 1,000,000 cells.  <br/> |The requested range exceeds the 1,000,000 cell limit.  <br/> |To return ranges that contain more than 1,000,000 cells, use multiple calls.  <br/> |
|RetryError  <br/> |Excel Services is unable to process the request.  <br/> |Excel Services might at times reach a state where its resources are low. When this happens, it might start denying requests.  <br/> |Wait a few minutes and try to perform this operation again.  <br/> |
|SaveFailed  <br/> |An error occurred while saving the file.  <br/> |A call to the **GetWorkbook** method failed. <br/> |Try to save the file again.  <br/> |
|SetRangeFailure  <br/> |The requested operation attempted to overwrite the contents of cells that cannot be edited.  <br/> |The caller tried to write values into a range that has protected cells. For example, the cell contains a formula.  <br/> |Only empty cells or cells that contain values can be edited by Excel Services.  <br/> |
|SheetRangeMismatch  <br/> |The sheet provided as the sheet argument is not the same as the sheet specified in the range argument.  <br/> |The name of the sheet passed in for a  _sheetName_ parameter does not match the sheet location specified in the _rangeName_ parameter. <br/> |When specifying a sheet in both the range and sheet arguments, ensure that the sheet names are the same. For example,  `Calculate(Sheet1, Sheet1!Range("A1"))`.  <br/> |
|SpecifiedRangeNotFound  <br/> |The requested range does not exist in the sheet.  <br/> |The range that was passed into a method with the A1 suffix (**SetCellA1**, **SetRangeA1**, **GetCellA1**, and **GetRangeA1**) could not be found.  <br/> |Make sure the range specified exists in the sheet.  <br/> |
|WorkbookNotSupported  <br/> |The file you selected cannot be opened because it contains feature(s) that are not supported by Excel Services. One or more of the following unsupported features were detected in the workbook:  <br/> {0}  <br/> |The workbook contains unsupported features.  <br/> 0 = a \\n separated list of unsupported feature names.  <br/> |Make sure the workbook does not contain features that are not supported by Excel Services.  <br/> |
   

## See also
    
- [How to: Use the SubCode Property to Capture Error Codes](how-to-use-the-subcode-property-to-capture-error-codes.md)
- [Excel Services Alerts](excel-services-alerts.md)
- [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
- [Excel Services Best Practices](excel-services-best-practices.md)
