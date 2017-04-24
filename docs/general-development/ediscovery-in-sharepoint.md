---
title: eDiscovery in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 45cb324a-75f5-444d-a0fa-5c223df19016
---


# eDiscovery in SharePoint 2013
Learn about eDiscovery features in SharePoint 2013. You can use eDiscovery to provide litigators the ability to discover content in electronic format.
## Introduction to eDiscovery in SharePoint 2013
<a name="SP15_eDiscoveryInSP_IntroductionToeDiscovery"> </a>

eDiscovery is how records managers and litigators discover content in electronic format. Typically, eDiscovery requires searching for documents, websites, and email messages spread across laptops, email servers, file servers, and other sources, and collecting and acting on content that meets the criteria for a legal case.
  
    
    
In SharePoint Server 2010, Microsoft added the Hold and eDiscovery feature, which made it possible to place a hold on any site in SharePoint. A records manager could put documents, pages, and list items on hold, which prevented users from deleting or editing them. Exchange 2010 introduced a way to place legal holds on mailboxes, conduct searches across multiple mailboxes, and use a Windows PowerShell cmdlet to export mailboxes.
  
    
    
eDiscovery in SharePoint 2013 and includes new ways to reduce the cost and complexity of discovery. These include:
  
    
    

- **The eDiscovery Center**, a central SharePoint site used to manage preservation, search, and export of content stored in Exchange and SharePoint across SharePoint farms and Exchange servers.
    
  
- **SharePoint In-Place Hold**, which preserves entire SharePoint sites. In-Place Hold protects all documents, pages, and list items within the site but allows users to continue to edit and delete preserved content. 
    
  
- **Exchange In-Place Hold**, which preserves Exchange mailboxes. In-Place Hold protects all mailbox content through the same UI and APIs used to preserve SharePoint sites.
    
  
- **Query-based preservation** allows users to apply query filters to one or more Exchange mailboxes and SharePoint sites and restrict the content that is held.
    
  

## How eDiscovery works in SharePoint 2013
<a name="SP15_eDiscoveryInSP_HoweDiscoveryWorks"> </a>

eDiscovery uses search service applications (SSAs) to crawl SharePoint farms. You can configure SSAs in many ways, but the most common way is to have a central search services farm that crawls multiple SharePoint farms. You can use this one search service to crawl all SharePoint content, or you can use it to crawl specific regions—for example, all SharePoint content in Europe.
  
    
    
To crawl a SharePoint farm, search first uses a service application proxy to connect to it. The eDiscovery Center uses the proxy connection to send preservations to SharePoint sites in other SharePoint farms.
  
    
    

## Prerequisites
<a name="SP15_eDiscoveryInSP_Prerequisites"> </a>

Before deploying SharePoint Server eDiscovery features, you should plan the search service application infrastructure for your organization. For example, if you have two separate SSAs that crawl specific sets of SharePoint sites, you'll need one eDiscovery Center for each SSA.
  
    
    

## Site holds
<a name="SP15_eDiscoveryInSP_SiteHolds"> </a>

SharePoint preserves content on the site level. When you preserve a site, its lists, libraries, and subsites are preserved. If you preserve a root site collection, all documents, pages, lists, and subsites in that site collection are preserved.
  
    
    
To hold a site, create a Discovery Case in the eDiscovery Center. A case is a container for all of the queries, content, and preservations associated with specific litigation. After you create the case, create a Discovery Set to specify the site. To validate the site, just enter its URL address.
  
    
    
In-Place Hold works by retaining content where it lives at the time the discovery search is completed. When content items are edited or deleted, eDiscovery places a copy of the item in a specific document library, called the Preservation Hold Library, on the SharePoint site where the content was modified. Only the search indexer and users with site collection administrator permission or web application permission can access the Preservation Hold Library. Most users without these permissions do not see the library and do not know it exists or that the content is copied there.
  
    
    
To preserve content in a way that minimizes storage space and maximizes efficiency, eDiscovery uses copy on write to manage identical copies of the same information. Because most content that is placed on hold will never be modified, there is no reason to take up space by creating a copy of it. Instead, in-place preservation creates copies of items only when they are deleted or after they are changed for the first time after preservation is started. If a document is changed again, eDiscovery keeps only the current checked-in or deleted version, and the version created at the time the document was originally preserved.
  
    
    
If multiple holds are placed on a site, the next edit of a document is copied again, even though it may have already been copied for the first hold.
  
    
    

## eDiscovery programming model
<a name="SP15_eDiscoveryInSP_eDiscoveryProgrammingModel"> </a>

SharePoint 2013 provides a Microsoft .NET server programming model that you can use to build custom solutions and apps that include eDiscovery functionality. Table 1 lists the types in the **Microsoft.Office.Server.Discovery** namespace.
  
    
    

**Table 1. eDiscovery types**


|**Type**|**Description**|
|:-----|:-----|
| [Case](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.Case.aspx) <br/> |Represents an eDiscovery case. Associated with a specified  [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) object, a case can be closed by a specified date or as a specific action. Cases can contain source groups, locations, mailboxes, custodians, saved searches, exports, export configurations for specified IDs, queries, and lists of all of the source groups, custodians, and locations in this **Case** object. <br/> |
| [Custodian](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.Custodian.aspx) <br/> |Represents the person who is responsible for keeping records for an eDiscovery case.  <br/> |
| [CustodianCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.CustodianCollection.aspx) <br/> |Represents a collection of **Custodian** objects. <br/> |
| **DiscoveryDuplicateSourceCollection** <br/> |An exception that is thrown when the value of a **Source** object is not unique. <br/> |
| [DiscoveryException](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.DiscoveryException.aspx) <br/> |An exception specific to the eDiscovery API that takes a message and also can take an inner exception.  <br/> |
| [Export](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.Export.aspx) <br/> |Represents an export that is associated with a specific **Case** object. The **Export** object can be constructed from a **T:Microsoft.SharePoint.SPListItem** object. You can add a **SavedSearch** object to an **Export** object and optionally rights-manage and download the **Export** object. <br/> |
| [ExportCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.ExportCollection.aspx) <br/> |Represents a collection of **Export** objects. <br/> |
| [ExportStatus](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.ExportStatus.aspx) <br/> |Represents the status of an export, which indicates whether the export has started, not started, finished, or finished with failures.  <br/> |
| [SavedSearch](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SavedSearch.aspx) <br/> |Represents a saved eDiscovery search. **SavedSearch** objects can be copied, deleted, or updated. Statistics that are associated with a saved search can be updated. Search refinements, Exchange 2013 refinements, source IDs, source group IDs, queries, and filters can be associated with a **SavedSearch** object. <br/> |
| [SavedSearchCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SavedSearchCollection.aspx) <br/> |Represents a collection of **SavedSearch** objects. <br/> |
| [Source](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.Source.aspx) <br/> |Represents the type of data source that is used in eDiscovery operations. A **Source** object takes a specific **Case** object, a type of data source, and a filter (that is, a partial or complete specification of the container that identifies the source) as parameters. Information about the source can be returned, such as its preservation status, the location of the source as indexed by SharePoint, and whether the source is a mailbox. <br/> |
| [SourceCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SourceCollection.aspx) <br/> |Represents a collection of **Source** objects. <br/> |
| [SourceGroup](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SourceGroup.aspx) <br/> |Represents a group of **Source** objects. <br/> |
| [SourceGroupCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SourceGroupCollection.aspx) <br/> |Represents a collection of **SourceGroup** objects. <br/> |
| [SourceManagementType](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SourceManagementType.aspx) <br/> |Represents the scale at which sources are managed. Options include the source, the source group, and all content.  <br/> |
| [SourceType](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SourceType.aspx) <br/> |Represents the type of source. Source types include Exchange 2013, both current and older versions of SharePoint Server, and file shares.  <br/> |
| [SourceValidation](https://msdn.microsoft.com/library/Microsoft.Office.Server.Discovery.SourceValidation.aspx) <br/> |Indicates whether the source is valid.  <br/> |
   

## Additional resources
<a name="SP15_eDiscoveryInSP_AdditionalResources"> </a>


-  [What's new in SharePoint 2013 eDiscovery and compliance](what-s-new-in-sharepoint-ediscovery-and-compliance.md)
    
  
-  [Complete basic operations using SharePoint 2013 client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx)
    
  

