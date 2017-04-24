---
title: Step 3 Deploying and Enabling UDFs
ms.prod: OFFICE365
ms.assetid: 1e5e2a0a-041a-481c-a18b-578562a60e24
---


# Step 3: Deploying and Enabling UDFs

In this step, you will:
  
    
    


1. Deploy SampleUdf.dll, which you created in  [Step 2: Creating a Managed-Code UDF](step-2-creating-a-managed-code-udf.md), to a folder on a computer that has Microsoft SharePoint Server 2010 installed.
    
  
2. Allow user-defined functions (UDFs) to be called from a specific trusted location, for example, trusted Shared Documents location. 
    
  
3. Enable SampleUdf.dll.
    
  

## Deploying UDFs


### To deploy UDFs


1. Create a folder named "UDFs" on the local drive of the computer to which you want to deploy UDFs. For example, "C:\\UDFs".
    
  
2. Copy the SampleUdf.dll assembly.
    
  
3. Save SampleUdf.dll in "C:\\UDFs". 
    
  

## Trusting a Location


### To trust a location


1. On the **Start** menu, click **All Programs**. 
    
  
2. Point to **Microsoft SharePoint 2010 Products** and click **SharePoint Central Administration**. 
    
  
3. Under **Application Management** click **Manage service applications**.
    
  
4. On the Manage Service Applications page, click **Excel Services Application**.
    
  
5. On the **Excel Services Application** page, click **Trusted File Locations**.
    
  
6. On the Trusted File Locations page, click **Add Trusted File Location**. 
    
  
7. On the Add Trusted File Location page, in the **Address** box, type the location where you will save your workbook—for example, _http://MyServer002/Shared%20Documents_. 
    
  
8. Under **Location type**, click the appropriate location type. In this example, select Microsoft SharePoint Foundation.
    
  
9. Under **Trust Children**, select **Children trusted** to trust child libraries or directories.
    
  
10. Under **Allow User-Defined Functions**, select **User-defined functions allowed** to allow UDFs to be called from workbooks stored in this trusted location.
    
  
11. Click **OK**.
    
  

## Enabling UDFs

To do the following steps, you need a computer that has SharePoint Server 2010 installed.
  
    
    

### To enable UDFs


1. Follow steps 1 through 3 in the previous procedure ("To trust a location") to display the Shared Services home page for an SSP.
    
  
2. Under **Excel Services Settings**, click **User-defined function assemblies**. 
    
  
3. On the Excel Services User-Defined Functions page, click **Add User-Defined Function** to open the Excel ****Services Add User-Defined Function Assembly page.
    
  
4. In the **Assembly** box, type the path to the SampleUdf.dll assembly. In this example, it would be _C:\\UDFs\\SampleUdf.dll_.
    
  
5. Under **Assembly Location**, click **File path**.
    
  
6. Under **Enable Assembly**, the **Assembly enabled** check box should be selected by default.
    
  
7. Click **OK**.
    
  

## Robust programming

If the **AllowUdfs** value is **false** when a session is started on a workbook that has UDF calls, the UDF calls will fail.
  
    
    

> [!NOTE]
> The **AllowUdfs** flag is denoted by the **User-defined functions allowed** option (see step 9 in the "Trusting a Location" section).
  
    
    

If you change the **AllowUdfs** value to **true** after a session has started, the UDF calls will also fail. This is because changes in the **AllowUdfs** flag take effect on the next session. You can get around this by resetting Microsoft Internet Information Services (IIS). Resetting IIS will reload UDFs.
  
    
    
For more information about resetting IIS, see  [How to: Enable UDFs](how-to-enable-udfs.md).
  
    
    

## See also


#### Tasks


  
    
    
 [Step 1: Creating a Project and Adding a UDF Reference](step-1-creating-a-project-and-adding-a-udf-reference.md)
  
    
    
 [Step 2: Creating a Managed-Code UDF](step-2-creating-a-managed-code-udf.md)
  
    
    
 [Step 4: Testing and Calling UDFs from Cells](step-4-testing-and-calling-udfs-from-cells.md)
  
    
    
 [How to: Enable UDFs](how-to-enable-udfs.md)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf.md)
  
    
    
 [Understanding Excel Services UDFs](understanding-excel-services-udfs.md)
