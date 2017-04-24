---
title: Excel Services Best Practices
keywords: guidelines
f1_keywords:
- guidelines
ms.prod: OFFICE365
ms.assetid: 56fa3913-c156-49da-bed0-a6a106fc129f
---


# Excel Services Best Practices

This topic contains a list of best-practice recommendations for working with Excel Services.
  
    
    


## Mitigating Threats


### Anonymous Access and Information Disclosure

The following settings combination gives anonymous users access to any files in the share to which the process account has access. Therefore, the following combination of settings is not recommended, because of the possibility of information disclosure:
  
    
    

- Anonymous access to Microsoft SharePoint Foundation is turned on.
    
  
- You have a UNC trusted location and the **Process account** is turned on.
    
  

> [!NOTE]
> The **Process account** is a global Excel Services setting that affects all trusted locations.
  
    
    


### To view the Process account option


1. On the **Start** menu, click **All Programs**.
    
  
2. Point to **Microsoft SharePoint 2010 Products**, and then click **SharePoint Central Administration**.
    
  
3. Under **Application Management**, click **Manage service applications**.
    
  
4. On the Manage Service Applications page, click **Excel Services Application**.
    
  
5. On the **Excel Services Application** page, click **Global Settings**.
    
  
6. In the **Security** section, look under **File Access Method** for the **Process account** option.
    
  

### Denial of Service Attack

In a denial of service attack against a Web service, an attacker generates very large, individual requests against the Web service. The purpose is to attempt to exploit the limits of one or more Web service input values.
  
    
    
We recommend that you use the Microsoft Internet Information Services (IIS) setting to set the maximum request size for the Web service.
  
    
    
Use the **maxRequestLength** attribute in the **httpRuntime** element in the **system.web** element to prevent denial of service attacks that are caused by users posting large files to the server. The default size is 4096 KB (4 MB).
  
    
    
For more information, see  [\<httpRuntime\> Element](http://msdn.microsoft.com/library/e9b81350-8aaf-47cc-9843-5f7d0c59f369.aspx) and [\<maxRequestLength\> Element](http://msdn.microsoft.com/library/fd52b2c5-5014-4e6f-b869-4ea666dc83d6.aspx).
  
    
    

### Sniffing Between the Calling Application and the Web Service Computer

If the calling application and Excel Web Services are deployed to different computers, an attacker can listen to the network traffic for data transfer between the calling application and the Web service. This threat is also called "sniffing" or "eavesdropping."
  
    
    
To help mitigate this threat, we recommend that you:
  
    
    

- Use Secure Sockets Layer (SSL) to set up a secure channel to protect data transfer between the client and the server. The SSL protocol helps to protect data against packet sniffing by anyone with physical access to the network.
    
  
- Physically protect the relevant network if a custom application using Excel Web Services is running in a confined network—for example, if Excel Web Services is deployed on a Web front-end computer within the enterprise.
    
  
For more information, see  [Securing Your Network](http://msdn.microsoft.com/library/af62ece0-0dd7-4b8e-ad12-4d13f2d60816.aspx) and [SOAP Security](http://msdn.microsoft.com/en-us/library/aa912494.aspx).
  
    
    
For information about Excel Services topology, scalability, performance, and security, see the Microsoft SharePoint Server 2010 TechCenter.
  
    
    

### Spoofing

We recommend that you use SSL to help mitigate the threats of hijacked Web service Internet Protocol (IP) addresses and ports, and to help prevent attackers from receiving requests and replying on behalf of the Web service.
  
    
    
The SSL certificate is matched against a few properties, one of which is the IP address from which the message is coming. The attacker cannot spoof the IP address if it does not have the Web service SSL certificate.
  
    
    
For more information, see  [Securing Your Network](http://msdn.microsoft.com/library/af62ece0-0dd7-4b8e-ad12-4d13f2d60816.aspx).
  
    
    

## Excel Services User-Defined Functions (UDFs)


### Strong Name Dependencies

In some cases, a user-defined function (UDF) assembly depends on other assemblies that are deployed with it. These dependent DLLs load successfully if they are in the global assembly cache, or if they are located in the same folder as the UDF assembly.
  
    
    
In the latter case, however, it is possible for the load to fail if Excel Calculation Services has already loaded another assembly with the same name. (It fails either because the assembly is not strongly named, or because another version with the same name has been deployed and loaded.)
  
    
    
Consider the following scenario, with the following directory structure:
  
    
    

1. C:\\Udfs\\Udf01
    
    The Udf01 folder contains:
    
  - Udf01.dll 
    
  
  - dependent.dll (not strongly named)
    
  

    The Udf01.dll file has a dependency on the dependent.dll file.
    
  
2. C:\\Udfs\\Udf02
    
    The Udf02 folder contains:
    
  - Udf02.dll (which depends on Interop.dll)
    
  
  - dependent.dll (which is not strongly named)
    
  

    The Udf02.dll file has a dependency on the dependent.dll file. Udf01.dll's dependency and Udf02.dll's dependency share the same name. But Udf02.dll's dependent.dll file is not the same as Udf01.dll's dependent.dll file.
    
  
Assume the following flow:
  
    
    

1. Udf01.dll is the first DLL to be loaded. Excel Calculation Services looks for dependent.dll and loads Udf01.dll's dependency, which in this case is dependent.dll. 
    
  
2. Udf02.dll is loaded after Udf01.dll. Excel Calculation Services sees that Udf02.dll depends on dependent.dll. However, a DLL with the name "dependent.dll" is already loaded. Therefore, Udf02.dll's dependent.dll file is not loaded, and the currently loaded dependent.dll file is used as the dependency.
    
  
As a result, the object—in this case, the dependent.dll file that Udf02.dll needs—is not loaded into memory.
  
    
    
To avoid name collision, we recommend that you strongly name your dependencies, and name them uniquely.
  
    
    

## General


### Naming Managed-Code DLLs

To ensure that your assembly names are unique, use the fully qualified class name, following the  [Namespace Naming Guidelines](http://msdn.microsoft.com/library/c08bc0d8-9b3a-4564-9af6-71699f62e00d.aspx).
  
    
    
For example, use CompanyName.Hierarchichal.Namespace.ClassName instead ofNamespace.ClassName. 
  
    
    

## See also


#### Tasks


  
    
    
 [How to: Trust a Location](how-to-trust-a-location.md)
#### Concepts


  
    
    
 [Excel Services Architecture](excel-services-architecture.md)
  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
  
    
    
 [Excel Services Blogs, Forums, and Resources](excel-services-blogs-forums-and-resources.md)
