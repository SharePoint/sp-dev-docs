---
title: Security and Compliance
description: Details Security and Compliance methods provided by SharePoint repository services
ms.date: 11/14/2023
ms.localizationpriority: high
---

# Security and Compliance 

Microsoft's SharePoint repository services provides a faster way to create secure and compliant documents stored in various applications. SharePoint repository services leverages Microsoft’s comprehensive compliance and data governance solutions to help organizations manage risks, protect, and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions will work in a similar manner in the SharePoint repository services platform as they do today in Microsoft 365 (M365) platform so that data is stored in a secure, protected way that meets customers’ business and compliance policies while making it easy for Compliance and SharePoint Administrators to enforce critical security and compliance policies on the content.  In this article, we describe the security and compliance policies that are supported today on content that reside in the SharePoint repository services platform. 


##  Compliance Policies using Microsoft Purview 

Currently, SharePoint repository services supports the following Compliance features using Microsoft Purview. For information on how to retrieve container URL to set various Compliance policies at a Container level, please visit <insert CTA doc link here>. 
 

* ### Audit 

    Thousands of user and admin operations performed in various applications hosted in SharePoint repository services are captured, recorded, and retained in your organization's unified audit log which can then be searched for by IT admins, insider risk teams, and compliance and legal investigators in your organization.  

    Audit events are logged with additional data such as app ID, container ID etc. to help filter the Audit search results to isolate the relevant SharePoint repository services content. 
    
    ![Audit](../images/sc7-audit.png)

    For more information on Audit, please visit [Auditing solutions in Microsoft Purview](https://learn.microsoft.com/en-us/purview/audit-solutions-overview)


* ### eDiscovery  

    Electronic discovery (eDiscovery) is the process of identifying and delivering electronic information that can be used as evidence in legal cases. Compliance Admins can use eDiscovery tools in Microsoft Purview to successfully search/hold/export content in the SharePoint repository services platform. For more information on eDiscovery, please visit [Microsoft Purview eDiscovery solutions](https://learn.microsoft.com/en-us/purview/ediscovery).

    To perform an eDiscovery Search on all SharePoint repository services content, Admins can click on ‘All’ SharePoint Sites when configuring the eDiscovery Search in Microsoft Purview. This enables the Search for content stored in all SharePoint Online Sites and also on all SharePoint repository services Containers. 

   

![Search](../images/sc1.png)

To limit the Search to one/few SharePoint repository services Containers, Admins can ‘Choose sites’ under the ‘SharePoint sites’ workload and provide the desired Container URL –


 ![eDiscovery](../images/sc8-edisc.png)

* ### Data Lifecycle Management (DLM) 

    Retaining and deleting content is often needed for compliance and regulatory requirements, but deleting content that no longer has business value also helps you manage risk and liability. SharePoint repository services supports retention and hold policies on content stored in its applications using the Microsoft Purview portal. For more information on DLM, please visit [Learn about Microsoft Purview Data Lifecycle Management](https://learn.microsoft.com/en-us/purview/data-lifecycle-management). 


Creating a retention/hold policy on ‘All SharePoint Sites’ will automatically enforce the policy on all SharePoint Online Sites and on all SharePoint repository services Containers.  

![DLP Policy](../images/sc6.png)

To selectively enforce the policy on one/few SharePoint repository services Containers, copy the Container URL and configure the policy to be selectively enforced only on that Container(s). 

Since SharePoint repository services applications are built by ISVs and Developers, it is upto the individual application to provide a mechanism through which Container owners and Admins can set retention label on a Container using the app’s UX.  

* ### Data Loss Protection (DLP) 

    Using Microsoft Purview, Admins can identify, monitor, and automatically protect sensitive items stored in applications using SharePoint repository services. DLP detects sensitive items by using deep content analysis, not by just a simple text scan. For more information on DLP, please visit  [Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp).

    Like retention policies, DLP policies can be enforced on all SharePoint Online Sites and SharePoint repository services Containers by choosing to configure the policy on ‘All SharePoint Sites’. Admins can also restrict the enforcement of a DLP policy to specific SharePoint repository services Containers by specifying the relevant Container URL(s) during policy configuration. 


## Security Features 
* ### Sensitivity labels on Containers 

    Global Administrators and SharePoint Administrators can set and remove sensitivity labels on a SharePoint repository services Container by using the newly created SharePoint PowerShell cmdlet –  

```
Set -SPOContainer -Identity <ContainerID/ContainerSiteURL> -SensitivityLabel "<SensitivityLabelGUID>" 
```
<br></br>


To learn more about the new Sensitivity Label PowerShell cmdlet and its various configurable optional parameters, please visit [<link to new Sen label cmdlet page – WIP>](learn.microsoft.com)

Sensitivity labels can also be set at the file level for content stored in SharePoint repository services Containers by opening web-previewable files and choosing a label from the “Sensitivity bar” that’s available for these files. To learn more about setting sensitivity labels at a file level, please visit [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels).

* ## Block Download policy
    Block Download policy allows SharePoint Administrator or Global Administrator to block download of files from SharePoint repository services Containers. This allows users to remain productive while addressing the risk of accidental data loss. Users have browser-only access with no ability to download, print, or sync files. They also won't be able to access content through apps, including the Microsoft Office desktop apps. 

```
Set-SPOSite -Identity <ContainerSiteURL> -BlockDownloadPolicy $true 
```


Please note that a SharePoint Advanced Management (SAM) license is needed to enforce this policy. To learn more about the new Block Download PowerShell cmdlet and its various configurable options, please visit [<link to new BDP cmdlet page – WIP>](learn.microsoft.com)

* ## Conditional Access policy
    SharePoint repository services supports basic Conditional Access policy features such as BlockAccess, AllowLimitedAccess, AllowEditing and ReadOnlyForUnmanagedDevices using the newly built SharePoint PowerShell cmdlet. AuthorizationContext will be supported in the near future.

    To learn more about the new Conditional Access Policy PowerShell cmdlet and its various configurable options, please visit [<link to new CAP cmdlet page – WIP>](learn.microsoft.com)



