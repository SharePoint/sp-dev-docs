---
title: Understanding Excel Services UDFs
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: a1567278-fac4-4b3b-a814-56f2376c1217
---


# Understanding Excel Services UDFs

User-defined functions (UDFs) are custom functions that extend the calculation and data-import capabilities of Excel. Developers create custom calculation packages to provide:
  
    
    


- Functions that are not built into Excel.
    
  
- Custom implementations to built-in functions.
    
  
- Custom data feeds for legacy or unsupported data sources, and application-specific data flows.
    
  

Users who create workbooks can call UDFs from a cell through formulas—for example, "=MyUdf(A1*3.42)"—just like they call built-in functions.
  
    
    

Excel Services UDFs give you the ability to use formulas in cells to call custom functions written in managed code and deployed to Microsoft SharePoint Server 2010. You can create UDFs to:
- Call custom mathematical functions.
    
  
- Get data from custom data sources into worksheets.
    
  
- Call Web services from the UDFs.
    
  

## Creating Managed-Code UDFs

An easy way to create an Excel Services managed-code UDF is to use the Microsoft Visual Studio 2005 class library template. You will need to reference the Excel Services UDF dynamic link library (DLL), named Microsoft.Office.Excel.Server.Udf.dll, in your managed-code UDF project. 
  
    
    
Microsoft.Office.Excel.Server.Udf.dll has been compiled using Microsoft .NET Framework 2.0. If you use Visual Studio 2003 to create your managed-code UDF, you will not be able to reference Microsoft.Office.Excel.Server.Udf.dll. It is not possible for an assembly created with an older version of the .NET Framework to reference an assembly created with .NET Framework 2.0.
  
    
    

### Required Attributes

To use custom functions in a class as an Excel Services UDF class, you must mark your UDF class with the **Microsoft.Office.Excel.Server.Udf.UdfClass** attribute. Any classes that are not marked with this attribute in the UDF assembly will be ignored by Excel Calculation Services. They are not considered to be Excel Services UDF classes.
  
    
    
To use custom functions in a class as Excel Services UDF methods, you must mark your UDF methods with the **Microsoft.Office.Excel.Server.Udf.UdfMethod** attribute. Any methods that are not marked with this attribute in the UDF assembly will be ignored because they are not considered to be Excel Services UDF methods.
  
    
    
The **Microsoft.Office.Excel.Server.Udf.UdfMethod**attribute has an **IsVolatile** property. You use the **IsVolatile** property to specify a UDF method as volatile or nonvolatile. The **IsVolatile** property takes a Boolean value. The default value is **false**, which means that particular UDF method is nonvolatile.
  
    
    

### Location of Microsoft.Office.Excel.Server.Udf.dll

On the computer where you have installed SharePoint Server 2010, you can find a copy of Microsoft.Office.Excel.Server.Udf.dll at:
  
    
    
 `[drive:]\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\14\\ISAPI`
  
    
    

## Deployment and Security


### Deployment Location Type

UDF assemblies can reside in a local directory, global assembly cache, or network share. In a farm scenario, the local directory path must be identical across the farm.
  
    
    

### Identification of UDF Assemblies

You can expose the identity of a UDF assembly by using the full path or strong name of the assembly for Excel Calculation Services to call. 
  
    
    
For example, you can use:
  
    
    

- C:\\UDFs\\MySampleUdf.dll 
    
  
- \\\\MyNetworkServer\\UDFs\\MySampleUdf.dll
    
  
- CompanyName.Hierarchichal.MyUdfNamespace.MyUdfClassName.dll, Version=1.1.0.0, Culture=en, PublicKeyToken=e8123117d7ba9ae38
    
  

### Enabling UDF Assemblies

UDF assemblies are disabled by default. 
  
    
    
Each Excel Services trusted location has an **AllowUdfs** flag.
  
> [!NOTE] 
> The **AllowUdfs** flag is denoted by the **User-defined functions allowed** option on the Excel Services Trusted File Locations page. To learn how to navigate to the Trusted File Locations page, see [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md). 
  
    
    

The default **AllowUdfs** value is **false**. If the **AllowUdfs** value is set to **false** in a particular trusted location, the workbooks in that trusted location are not allowed to call UDFs.
  
    
    
In order to allow UDFs to be called from a specific trusted location, you set the **AllowUdfs** value to **true**.
  
    
    
If the **AllowUdfs** value is **false** when a session is started on a workbook that has UDF calls in this trusted location, the UDF calls will fail. If you change the **AllowUdfs** value to **true** after a session has started, the UDF calls will also fail. This is because changes in the **AllowUdfs** flag take effect on the next session, after the configuration database has been updated.
  
    
    

### Allowing UDF Assemblies to Run

If administrators want to allow UDF assemblies to run, they have to register all UDF assemblies, and enable workbooks to call UDFs by setting the **AllowUdfs** flag to **true** in the trusted locations.
  
    
    

### Reloading a UDF Assembly

To reload a UDF assembly, you can run **iisreset** or restart the Excel Calculation Services application domain.
  
    
    

> **Caution:**
> Resetting IIS will end all current sessions. > For more information, see  [How to: Enable UDFs](how-to-enable-udfs.md). 
  
    
    

For more information, see  [Unloading an Application from Memory](http://go.microsoft.com/fwlink/?LinkId=65706) (http://msdn.microsoft.com/library/default.asp?url=/library/en-us/csvr2002/htm/cs_mmc_administering_myhj.asp).
  
    
    

### Default Code Access Security Permission for UDF Assemblies

By default, UDF assemblies run with full trust. 
  
    
    

### Restricting Code Access Security Permission for UDF Assemblies

If you do not want a particular UDF assembly to run with full trust, you must explicitly restrict code access security permission for that UDF assembly. You can configure the code groups and restrict permission by using the .NET Framework 2.0 Configuration tool. 
  
    
    
Developers can also use the **RequestMinimum** and **RequestOptional** methods in their code to ensure that their UDF assemblies don't get more permission than they require.
  
    
    
For more information about configuring code groups, as well as the **RequestMinimum** and **RequestOptional** methods, see the following articles on MSDN:
  
    
    

-  [Configuring Code Groups Using the .NET Framework Configuration Tool](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconUsingNETConfigurationToolToWorkWithCodeGroups.asp?frame=true) (http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconUsingNETConfigurationToolToWorkWithCodeGroups.asp?frame=true)
    
  
-  [Code Access Security in Practice](http://go.microsoft.com/fwlink/?LinkId=65465) (http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnnetsec/html/thcmch08.asp)
    
  

## See also


#### Tasks


  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service.md)
  
    
    
 [How to: Trust a Location](how-to-trust-a-location.md)
  
    
    
 [How to: Catch Exceptions](how-to-catch-exceptions.md)
  
    
    
 [How to: Enable UDFs](how-to-enable-udfs.md)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf.md)
  
    
    
 [Frequently Asked Questions About Excel Services UDFs](frequently-asked-questions-about-excel-services-udfs.md)
  
    
    
 [Excel Services Architecture](excel-services-architecture.md)
  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
  
    
    
 [Excel Services Best Practices](excel-services-best-practices.md)
