---
title: How to Save from Excel Client to the Server
keywords: how to,howdoi,howto
f1_keywords:
- how to,howdoi,howto
ms.prod: SHAREPOINT
ms.assetid: 28716ba5-0774-44df-833b-0034d2c63319
---


# How to: Save from Excel Client to the Server

This example shows you how to:
  
    
    


1. Create a workbook with editable ranges.
    
  
2. Save the workbook to a SharePoint document library that is a trusted location.
    
    > **Note:**
      > It is assumed that you have already created a SharePoint document library and made it a trusted location. For more information, see  [How to: Trust a Location](how-to-trust-a-location.md). 
3. Change values in a workbook by using the parameters pane in Excel Web Access.
    
  

## Saving a Workbook to Excel Services


### To create a workbook with ranges


1. Start Excel.
    
  
2. In cell A1, type 8.
    
  
3. In cell A2, type =3*A1.
    
  
4. To make cell A1 editable in Excel Web Access, you must first make cell A1 into a named range: 
    
1. Click the **Formulas** tab, and then click cell **A1** to select it.
    
  
2. On the **Formulas** tab, in the **Defined Names** group, click **Define Name**.
    
  
3. In the **New Name** dialog box, in the **Name** text box, typeMyAOneParam.
    
  

### To save to Excel Services


1. On the **File** menu, click **Save &amp; Send**, and then click **Save to SharePoint**. 
    
  
2. In the **Save to SharePoint** dialog box, click **Publish Options**.
    
  
3. In the **Publish Options** dialog box, on the **Show** tab, ensure that **Entire Workbook** is selected.
    
  
4. On the **Parameters** tab, click **Add**..
    
  
5. In the **Add Parameters** list, select the **MyAOneParam** check box.
    
  
6. Click **OK**. You should now see "MyAOneParam" in the **Parameters** list.
    
  
7. Click **OK** to close the **Publish Options** dialog box.
    
  
8. In the **Save to SharePoint** dialog box, click **Save As**.
    
  
9. In the **Save As** dialog box, ensure that the **Open with Excel in the browser** check box is selected.
    
  
10. In the **File name** text box, type the path to the trusted SharePoint document library where you want to store this workbook. For example,http:// _MyServer002_/Shared%20Documents/TestParam.xlsx.
    
  
11. Click **Save**. You should see TestParam.xlsx in Excel Web Access. 
    
  

### To change values by using parameters


1. In the **Parameters** pane, you should see the named range for cell **A1**—that is, **MyAOneParam**. 
    
  
2. You can change the values in cell **A1** and cell **A2** by typing a number in the text box next to **MyAOneParam**. For example, if you type 10 and then click **Apply**, cell **A1** changes to **10** and cell **A2** changes to **30**. 
    
  

## See also


#### Tasks


  
    
    
 [How to: Save to the Server to Prepare for Programmatic Access](how-to-save-to-the-server-to-prepare-for-programmatic-access.md)
#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
  
    
    
 [Loop-Back SOAP Calls and Direct Linking](loop-back-soap-calls-and-direct-linking.md)
  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
#### Other resources


  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
