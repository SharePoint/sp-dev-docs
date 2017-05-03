---
title: How to Deploy UDFs Using SharePoint Foundation Solutions
keywords: how to,howdoi,howto,udf list,WSS Solutions
f1_keywords:
- how to,howdoi,howto,udf list,WSS Solutions
ms.prod: OFFICE365
ms.assetid: 97751a6c-ef73-4d95-a3c4-98014d84ba48
---


# How to: Deploy UDFs Using SharePoint Foundation Solutions

This example shows how to deploy a user-defined function (UDF) DLL by using the Microsoft SharePoint Foundation solution framework.
  
    
    

The SharePoint Foundation solution framework lets you bundle all the components to extend SharePoint Foundation in a new file called a solution file (a CAB-based format with a .wsp extension). A solution is a deployable, reusable package that can contain a set of features, site definitions, and assemblies that you can apply to a site, and individually enable or disable. Additionally, you can use the solution file to deploy the contents of a Web Part package, including assemblies, class resources, .dwp files, and other package components. For more information about the SharePoint Foundation solution framework, see the SharePoint Foundation node in the  [Getting Started with Development for SharePoint Foundation 2010](http://msdn.microsoft.com/library/ef1187aa-e007-4490-8191-db36a50b3ae4%28Office.15%29.aspx) (http://msdn.microsoft.com/en-us/library/ee539432(office.14).aspx).
The procedure for creating and deploying a UDF assembly by using SharePoint Foundation solution framework is as follows:
  
    
    


1. Create the solution manifest file, Manifest.xml.
    
    The solution manifest (always called Manifest.xml) is stored at the root of a solution file. This file defines the list of features, site definitions, resource files, Web Part files, and assemblies to be processed. It does not define the file structure; if files are included in a solution but not listed in the manifest XML file, they are not processed in any way.
    
    > **Note:**
      > For more information about the structure of the manifest XML file, see the SharePoint Foundation documentation. 
2. Package the UDF assembly and Manifest.xml into a CAB file.
    
  
3. Make sure that the SharePoint Foundation Administration service is running on the server.
    
  
4. Add the solution to the server by using stsadm.exe.
    
  
5. Deploy the solution by using stsadm.exe.
    
  
Each Excel Services trusted location has an **AllowUdfs** flag.
> **Note:**
> The **AllowUdfs** flag is denoted by the **User-defined functions allowed** option on the Excel Services Trusted File Locations page. To learn how to navigate to the Trusted File Locations page, see [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md). 
  
    
    

In order to allow UDFs to be called from a specific trusted location, you must:
- Set the **AllowUdfs** value to **true**. The default value is **false**. 
    
  
- Add the UDF assembly to the trusted UDF list to allow the UDF to be called from a workbook.
    
  
For more information on how to enable UDFs and add UDFs to the trusted UDF list, see  [How to: Enable UDFs](how-to-enable-udfs.md).
> **Note:**
> To avoid name collision, give your UDF assemblies and their dependencies strong names, and name them as uniquely as possible. For more information, see  [Excel Services Best Practices](excel-services-best-practices.md) and [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md). 
  
    
    


## Procedure


### To create the Manifest.xml file


1. Right-click your project in **Solution Explorer**, point to **Add**, and then click **New Item**.
    
  
2. Select **XML File**, and name the file Manifest.xml.
    
  
3. Click **Add**.
    
  
4. Add the following content to the file:
    
```XML
  
<?xml version="1.0" encoding="utf-8" ?>
<Solution xmlns="http://schemas.microsoft.com/sharepoint/" SolutionId="{57568687-2CC0-45bf-B66A-2D50D57108CA}" DeploymentServerType="ApplicationServer">
  <Assemblies>
    <Assembly DeploymentTarget="GlobalAssemblyCache" Location="EcsUdfsCommonSet.dll"/>
  </Assemblies>
</Solution>
```


    > **Note:**
      > You should generate a unique GUID for each solution. For more information about **Solution** element, see the SharePoint Foundation [Solutions and Web Part Packages](http://msdn.microsoft.com/library/a145a5eb-fbb6-4328-b5b3-96bf5ce89a19%28Office.15%29.aspx) (http://msdn.microsoft.com/en-us/library/ms413687.aspx).

### To create a solution package


- For information about how to create the solution file, see the "Creating a Solution" topic under the "Solutions and Web Part Packages" node in the SharePoint Foundation SDK. 
    
  

### To verify whether SharePoint Foundation Administration is running


1. Click **Start**, point to **Administrative Tools**, and then double-click **Services**. 
    
    The **Services** dialog box appears.
    
  
2. Make sure that the status of SharePoint Foundation Administration service shows **Started**. If it does not, right-click SharePoint Foundation Administration, and then select **Start**.
    
  

### To add the solution


1. Click **Start**, click **Run**, and then typecmd. 
    
    The command prompt console appears.
    
  
2. Run the following script to add the solution to SharePoint server: 
    
    stsadm.exe -o addsolution -filename <pathtoCAB>
    
    > **Note:**
      > You can find the Stsadm.exe at: > C:\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\12\\BIN. 

    > **Note:**
      > For more information about Stsadm.exe command options, see the  [Stsadm to Windows PowerShell Mapping (SharePoint Foundation 2010)](http://technet.microsoft.com/en-us/library/ff621081.aspx) (http://technet.microsoft.com/en-us/library/ff621081.aspx).

  
    
    

### To deploy the solution


1. Click **Start**, click **Run**, and then typecmd. 
    
    The command prompt console appears.
    
  
2. Run the following script to deploy the solution to SharePoint server. 
    
    stsadm.exe -o deploysolution -name <filename of the CAB> -immediate -allowGacDeployment
    
    You should now see your UDF DLL in the global assembly cache.
    
  

## See also


#### Tasks


  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service.md)
  
    
    
 [How to: Enable UDFs](how-to-enable-udfs.md)
  
    
    
 [How to: Restrict UDF Code Access Security Permissions](how-to-restrict-udf-code-access-security-permissions.md)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf.md)
  
    
    
 [Frequently Asked Questions About Excel Services UDFs](frequently-asked-questions-about-excel-services-udfs.md)
  
    
    
 [Understanding Excel Services UDFs](understanding-excel-services-udfs.md)
