---
title: Step 4 Testing and Calling UDFs from Cells
ms.prod: SHAREPOINT
ms.assetid: d3e6aa72-2eb8-4b4b-a0eb-273486890d00
---


# Step 4: Testing and Calling UDFs from Cells

In this step, you will test the SampleUdf.dll assembly you created, deployed, and enabled in the previous steps. To test the user-defined function (UDF), you will:
  
    
    


1. Create a workbook with a named range and formulas that call the functions in SampleUdf.dll.
    
  
2. Save the workbook to a SharePoint document library that is a trusted location.
    
    > **Note:**
      > It is assumed that you have already created a SharePoint document library and made it a trusted location. For information about how to trust a location, see the "Trusting a Location" section in  [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md). 
3. Change parameters to recalculate the workbook.
    
  

## Testing UDFs


### To call UDFs from cells


1. Start Microsoft Office Excel 2007.
    
  
2. In cell A1, type the formula to call the  `MyDouble` function in SampleUdf.dll. The `MyDouble` function takes an argument of type **double**. In this example, you will take the argument from cell B1. In cell A1, type =MyDouble(B1).
    
    > **Note:**
      > The formula will evaluate to "#NAME?" in Excel. The formula will be evaluated only when the workbook is displayed in Excel Services. 

    > **Note:**
      > You can run UDFs on both the client and server. A future article published on MSDN will explain the details. They are omitted here for the sake of simplicity. 
3. In cell B1, type the number 8.
    
  
4. Make cell B1 a named range. First click the **Formulas** tab. Then click cell B1 to select it. On the **Formulas** tab, in the **Named Cells** group, click **Name a Range**. In the **New Name** dialog box, in the **Name** box, type **MyDoubleParam**.
    
  
5. In cell A2, type the formula to call the  `ReturnDateTimeToday` function. Type=ReturnDateTimeToday().
    
  
6. In cell A3, type the formula to call the  `ReturnDateTimeToday` function. Type=ReturnDateTimeToday(). Next, right-click cell A3 to display the menu. Click **Format Cells**.
    
  
7. In the **Format Cells** dialog box, on the **Number** tab, select **Date**. Select a date format type from the **Type** list—for example, *3/4/2001.
    
  
8. Click **OK**.
    
  
9. Save the workbook to a location of your choice on the local drive. Name the workbook "TestSampleUdf.xlsx". 
    
  

### To save to Excel Services


1. Click the **Microsoft Office Button**, point to **Save As**, and click **Save for Excel Services**. 
    
  
2. In the **Save As** dialog box, click **Excel Services Options**.
    
  
3. In the **Excel Services Options** dialog box, on the **Show** tab, make sure that **Entire Workbook** is selected.
    
  
4. Click **Parameters**. 
    
  
5. In the **Add Parameters** list, select the **MyDoubleParam** check box.
    
  
6. Click **OK**. You should now see "MyDoubleParam" listed in the **Parameters** list.
    
  
7. Click **OK**.
    
  
8. In the **Save As** dialog box, make sure that the **Open this workbook in my browser after I save** check box is selected.
    
  
9. In the **File name** box, type the path to the trusted SharePoint document library where you want to store this workbook. For example, _http://MyServer002/Shared%20Documents/TestSampleUdf.xlsx_.
    
  
10. Click **Save**. You should see TestSampleUdf.xlsx in Excel Web Access. In cell A1, you should see the number "72" because cell B1 * 9 = 8 * 9, which is 72. In cell A2 you should see a number. In cell A3, you should see the current date. 
    
    > **Note:**
      > In cell A2, the number represents the number of days since 1/1/1900 (or 1/1/1904 if you have "Use 1904 Date System" turned on). It's how Excel represents dates internally. 

### To change parameters to test the UDF


1. In the **Parameters** pane, you should see the named range for cell B1, that is, "MyDoubleParam".
    
  
2. You can change the value in cell B1 by typing a number in the box next to "MyDoubleParam". For example, if you type 3 and then click **Apply**, Excel Services will recalculate the workbook. Cell A1 will contain "27" instead of "72". 
    
  

## See also


#### Tasks


  
    
    
 [Step 1: Creating a Project and Adding a UDF Reference](step-1-creating-a-project-and-adding-a-udf-reference.md)
  
    
    
 [Step 2: Creating a Managed-Code UDF](step-2-creating-a-managed-code-udf.md)
  
    
    
 [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md)
  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service.md)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf.md)
  
    
    
 [Understanding Excel Services UDFs](understanding-excel-services-udfs.md)
