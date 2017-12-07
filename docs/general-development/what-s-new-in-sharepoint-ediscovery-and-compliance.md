---
title: What's new in SharePoint eDiscovery and compliance
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 39a1cc3f-c78d-478f-8c15-928b96386a52
---


# What's new in SharePoint eDiscovery and compliance
Learn what's new in SharePoint for eDiscovery and compliance features. Use these features to manage and recover evidence in civil litigations.
## What's new in SharePoint eDiscovery and compliance

In SharePoint, you can use eDiscovery and compliance features to manage and recover evidence used in civil litigations, and manage the records for your enterprise. SharePoint also includes built-in support for the Content Management Interoperability Services (CMIS) interoperability standard. To learn more about CMIS, see the specification for the standard on the  [OASIS website](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cmis).
  
    
    

### eDiscovery in SharePoint

Discovery is a legal process used to recover evidence in civil litigations. SharePoint Server 2010 delivered electronic discovery (eDiscovery) functionality and APIs as part of its records management feature set. SharePoint delivers greatly expanded and revised eDiscovery functionality. Key features and APIs in eDiscovery include:
  
    
    

- **Case Manager**, which enables records managers to create and manage enterprise-wide discovery projects, place potentially large amounts and various types of content on hold, and preserve a snapshot of content.
    
  
- **Enterprise-wide access**, which includes the ability to put content on hold and to search for content from a central location. It also includes the ability to conduct searches, access SharePoint content, and place content on hold in any configured SharePoint location.
    
  
- **In-Place Holds**, which enables an attorney to preserve a snapshot of content while ensuring that users can continue to make changes without disturbing the state of the content snapshot.
    
  
- **Analytics**, which enable attorneys, administrators, and records managers to collect and analyze data about eDiscovery activity.
    
  

### What's new with records management programmability?

The .NET server programming model is updated in SharePoint to include new functionality to manage project details and get project metadata. Classes with new functionality include:
  
    
    

- The  [ProjectPolicy](https://msdn.microsoft.com/library/Microsoft.Office.RecordsManagement.InformationPolicy.ProjectPolicy.aspx) class. You can use this class to customize the details of the project policy.
    
  
- All of the  [Microsoft.Office.RecordsManagement.Preservation](https://msdn.microsoft.com/library/Microsoft.Office.RecordsManagement.Preservation.aspx) classes. These classes enable you to customize how hold information and status information is managed.
    
  
- The  [Microsoft.Office.RecordsManagement.SearchAndProcess](https://msdn.microsoft.com/library/Microsoft.Office.RecordsManagement.SearchAndProcess.aspx) classes. Use these classes to create and manage search parameters.
    
  

### The Content Management Interoperability Services (CMIS) producer

The CMIS producer was introduced as part of the SharePoint Administrator's Toolkit a few months after SharePoint Server 2010 was released. It is completely redesigned in SharePoint. The CMIS producer is especially useful in situations when you want to migrate data, create a repository graphical user interface for slates, and for saving data to a content management system from an authoring application. The CMIS producer supports basic document-management operations such as creating, updating, deleting, checking in and checking out, and managing the versions of documents and document metadata.
  
    
    
The CMIS standard is the OASIS standard that compliant content management systems use to interoperate with each other.
  
    
    
Enhancements to the CMIS connector in SharePoint include:
  
    
    

- Support for CMIS 1.0.
    
  
- Functionality in most authoring environments where SharePoint list web services work.
    
  
- Support for interoperating in a claims environment.
    
  
- Support for interoperating with other authoring protocols, including basic authentication, NTLM authentication, Digest authentication, Kerberos protocol transitioning/constrained delegation, Windows claims authentication, claims multi-authentication, and claims mixed authentication.
    
  
The CMIS consumer web part has been removed from SharePoint.
  
    
    

### Project compliance

Sites, and other large objects, sometimes require that their users comply with a specific usage policy. To support these scenarios, enterprise content management in SharePoint delivers the capability to apply policies to SharePoint sites, SharePoint site content, and associated mailboxes, and to apply policy flows to the associated mailboxes.
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [eDiscovery in SharePoint](ediscovery-in-sharepoint.md)
    
  

