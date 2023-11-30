---
title: Security and Compliance
description: Details Security and Compliance methods provided by SharePoint Embedded
ms.date: 11/28/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---

# Security and Compliance 

Microsoft's SharePoint Embedded provides a faster way to create secure and compliant documents stored in various applications. SharePoint Embedded leverages Microsoft’s comprehensive compliance and data governance solutions to help organizations manage risks, protect, and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions will work in a similar manner in the SharePoint Embedded platform as they do today on the Microsoft 365 (M365) platform so that data is stored in a secure, protected way that meets customers’ business and compliance policies while making it easy for Compliance and SharePoint Administrators to enforce critical security and compliance policies on the content.  

In this article, we describe the security and compliance policies that are supported today on content that reside in the SharePoint Embedded platform, and their capabilities and limitations.

Since SharePoint Embedded by design doesn’t have any user interface, some Compliance scenarios necessitating user interaction aren't natively supported. The owning application that governs the Container can choose to support these scenarios and provide optimum experience to end user by leveraging existing Graph API.

##  Compliance Policies using Microsoft Purview 

Currently, SharePoint Embedded supports the following Compliance features under Microsoft Purview.  You can follow the below steps to retrieve the details of a container that the policy needs to be applied to.

1. View list of registered SharePoint Embedded applications registered in the specified tenant:  
```
Get-SPOApplication 
```
2. Retrieve list of Containers in a SharePoint Embedded application by providing the ApplicationID returned in Step #1  
```
Get-SPOContainer -OwningApplicationId <OwningApplicationID>
```
3. Retrieve the details of a container including the ContainerSiteURL by providing the ContainerID returned in Step #2.
```
Get-SPOContainer -OwningApplicationId <ApplicationID> -Identity<ContainerID>
```
For information on how to retrieve ContainerSiteURL to set the various Compliance policies described below at a Container level, please visit [Get-SPOContainer](https://learn.microsoft.com/en-us/powershell/module/sharepoint-online/get-spocontainer?view=sharepoint-ps).  
 
 

* ### Audit 

The Audit capabilities provided by SharePoint Embedded mirror the existing Audit functionalities currently supported within SharePoint Online. All user and admin operations performed in various applications hosted in SharePoint Embedded are captured, recorded, and retained in your organization's unified audit log. For more information on Audit, please visit [Auditing solutions in Microsoft Purview](https://learn.microsoft.com/en-us/purview/audit-solutions-overview).

In addition to existing file properties, Audit events related to SharePoint Embedded are logged with the following additional data to help filter the Audit search results to isolate the relevant SharePoint Embedded content – 
 * ContainerInstanceId
 * ContainerTypeId 

    
![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/50f9e071-8559-4182-be7e-ac849a82f083)



* ### eDiscovery  

Compliance Admins can use eDiscovery tools in Microsoft Purview to search/hold/export content hosted in the SharePoint Embedded platform. For more information on eDiscovery, please visit [Microsoft Purview eDiscovery solutions](https://learn.microsoft.com/en-us/purview/ediscovery).
To perform an eDiscovery Search on all SharePoint Embedded content, Admins should click on ‘All’ SharePoint Sites when configuring the eDiscovery Search in Microsoft Purview. This enables the Search for content stored in all SharePoint Online Sites and all SharePoint Embedded Containers.

To perform an eDiscovery Search on all SharePoint Embedded content, Admins should click on ‘All’ SharePoint Sites when configuring the eDiscovery Search in Microsoft Purview. This enables the Search for content stored in all SharePoint Online Sites and all SharePoint Embedded Containers.

![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/d23bbbe1-b844-468e-a2d2-f8af99036e58)


To limit the eDiscovery Search to one/few SharePoint Embedded Containers, Admins can ‘Choose sites’ under the ‘SharePoint sites’ workload and provide the desired Container URL –

![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/04b8a5c1-8ad7-4dac-aee4-fcb21fa3cd1e)

   
* ### Data Lifecycle Management (DLM) 

SharePoint Embedded supports retention and holds policies on content stored in its applications using the Microsoft Purview portal. For more information on DLM, please visit [Learn about Microsoft Purview Data Lifecycle Management](https://learn.microsoft.com/en-us/purview/data-lifecycle-management).

Existing retention policy will automatically apply to all SharePoint Embedded Containers if policy is configured for ‘All sites’. Similarly, creating a new retention/hold policy on ‘All’ SharePoint Sites workload will automatically enforce the policy on all SharePoint Online Sites as well as all Containers within SharePoint Embedded. 

![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/9e3d36f6-668b-4e44-b765-29cea7787b3d)
    
To selectively enforce the policy on one/few SharePoint Embedded Containers, copy the Container URL and configure the policy to be selectively enforced only on those Container(s).

![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/73606399-10bb-4697-8b69-bfc0ed17cd36)

Since SharePoint Embedded do not have any inbuilt user interface, DLM scenarios requiring user interaction are not natively supported. For instance, if an end user attempts to apply a retention label on a Container using a SharePoint Embedded application (app), the app governing the access to the Container must furnish that functionality. In such cases, Graph APIs for DLM functionalities can be leveraged.

* ### Data Loss Protection (DLP) - Coming soon

Using Microsoft Purview, Admins can identify, monitor, and automatically protect sensitive items stored in applications using SharePoint Embedded. For more information on DLP, please visit  [Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp).

Like retention policies, DLP policies can be enforced on all SharePoint Online Sites and SharePoint Embedded Containers by choosing to configure the policy on ‘All sites’. 



![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/a2bf3ed0-48f1-4b2b-9874-b2fb082ff672)



Admins can also restrict the enforcement of a DLP policy to specific SharePoint Embedded Containers by specifying the relevant Container URL(s) during policy configuration. 


![image](https://github.com/SharePoint/sp-dev-docs/assets/146786900/c49b1100-089f-4d21-840d-809de4c63c58)



Several scenarios supported by DLP today need user interaction which aren’t natively supported by SharePoint Embedded. For instance, based on its configuration, a DLP policy that prevents external sharing may allow end users to provide a business justification to override the policy. The client app which renders this DLP flagged file item will need to support such user interactions.

Policy tips are shown today for files hosted in SharePoint Online so that users are kept informed about DLP-flagged file items and corresponding restrictions. Similarly, for policy tips to be displayed for files hosted in SharePoint Embedded, the client app can opt to provide additional support by utilizing the existing Graph APIs for this purpose. 


## Security Features 
* ### Sensitivity labels on Containers 

Global Administrators and SharePoint Administrators can set and remove sensitivity labels on a SharePoint Embedded Container by using the newly created SharePoint PowerShell cmdlet –  

```
Set -SPOContainer -Identity <ContainerID/ContainerSiteURL> -SensitivityLabel <SensitivityLabelGUID> 
```
<!--To learn more about the new Sensitivity Label PowerShell cmdlet and its various configurable optional parameters, please visit [<link to new Sen label cmdlet page – WIP>](learn.microsoft.com)-->

To learn more about setting sensitivity labels, please visit [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels).

* ## Block Download policy (Coming Soon)

Block Download policy allows SharePoint Administrator or Global Administrator to block download of files from SharePoint Embedded Containers using the below SharePoint PowerShell cmdlet –

```
Set-SPOSite -Identity <ContainerSiteURL> -BlockDownloadPolicy $true 
```
Please note that a SharePoint Advanced Management (SAM) license is needed to enforce this policy. Read the full documentation for advanced capabilities at [Block download policy for SharePoint sites and OneDrive](https://learn.microsoft.com/en-us/sharepoint/block-download-from-sites).

<!--To learn more about the new Block Download PowerShell cmdlet and its various configurable options, please visit [<link to new BDP cmdlet page – WIP>](learn.microsoft.com) -->

* ## Conditional Access policy (Coming Soon)
SharePoint Embedded supports basic Conditional Access policy configurations such as  

 * AllowFullAccess: Allows full access from desktop apps, mobile apps, and the web 

 * AllowLimitedAccess: Allows limited, web-only access 

 * BlockAccess: Blocks Access 

using the below PowerShell cmdlet. AuthorizationContext will also be supported in the near future. 
```
Set-SPOContainer -Identity <ContainerSiteURL> -ConditionalAccessPolicy <SPOConditionalAccessPolicyType> 
```
To learn more about Conditional Access Policy, please visit [Control access from unmanaged devices](https://learn.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices). 



