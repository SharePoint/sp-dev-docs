---
title: How to Crawl associated external content types in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 187ec42e-f749-4e22-abef-1df604143063
---


# How to: Crawl associated external content types in SharePoint 2013
Learn how to use the search specific properties in the Business Data Connectivity (BDC) service metadata model for crawling associations, and the different user experiences that you can enable.
## Crawling the associated external content type
<a name="HowToCrawlAssociations_CrawlingAssociatedExternalTypes"> </a>

Microsoft Business Connectivity Services (BCS) enables you to link two related external content types, which then enables you to fetch related external content. For example, you can fetch external content from two SQL Server database table-based external content types that are based on foreign keys. This concept of linking two related external content types is known as an  *association*  . For more information about associations, see [Adding Associations Between External Content Types](http://msdn.microsoft.com/library/791e95ab-9b3c-413b-be12-bd0e59962c93%28Office.15%29.aspx). 
  
    
    
In the context of the Search connector framework, the source external content type of an association is referred to as the parent external content type. The Search crawler can crawl external content types that are associated with the parent in two ways: as attachments or as children. These external content type associations affect the following:
  
    
    

- User experience
    
  
- Incremental crawls
    
  
- Processing crawl deletions
    
  

### User experience effects from external content type associations

A child external content type has its own search result URL and profile page, if the profile page has been created. The search result URL is the URL that is displayed if the user searches for a term in the child external content type data. 
  
    
    
The external content type for an attachment does not have its own search result URL. So if the user searches for a term in the attachment external item, the URL for the parent external content type is displayed instead. You can set this URL to the profile page URL of the parent. The profile page for the parent external content type will display all the fields from the attachment external content type that are exposed by the association navigator.
  
    
    

### Incremental crawl effects from external content type associations

Child external items are re-crawled and updated for timestamp-based incremental crawls if the timestamp of the child external item changes. 
  
    
    
For attachment external content types, the timestamp of the parent external item is interpreted as the timestamp of the attachment external item. This means that any changes in the attachment external item are picked up by an incremental crawl only when the timestamp of the parent external item changes.
  
    
    

### Processing crawl deletions effects from external content type associations

When processing crawl deletions, if the parent external content type is deleted from the index, the Search crawler deletes the associated attachment external content types and child external content types from the index.
  
    
    

## Crawling associated external content type attachments
<a name="HowToCrawlAssociations_CrawlingAttachments"> </a>

To mark an association so that it is crawled as an attachment, add the **AttachmentAccessor** property to the **Association** method instance, as follows.
  
    
    

```XML

<Association Name="AttachmentsNavigate Association" Type="AssociationNavigator" ...>
    <Properties>
        <Property Name="ForeignFieldMappings" Type="System.String">....... </Property>
        <Property Name="AttachmentAccessor" Type="System.String">x</Property>
    </Properties>
    <SourceEntity Namespace="ParentExternalContentType" Name="Parent" />
    <DestinationEntity Namespace="AttachmentExternalContentType" Name="Attachment External Content Type" />
</Association>
```


> [!NOTE]
> You can specify any value for the **AttachmentAccessor** property; Search does not examine this value.
  
    
    


## Crawling associated external content types as child external content types
<a name="HowToCrawlAssociations_CrawlingChildExternalTypes"> </a>

To mark an association so that it is crawled as a child external content type, add the **DirectoryLink** property to the **Association** method instance, as follows.
  
    
    

```XML

<Association Name="ChildrenNavigator Association" Type="AssociationNavigator" ...>
    <Properties>
        <Property Name="DirectoryLink" Type="System.String">x</Property>
    </Properties>
    <SourceEntity Namespace="ParentExternalContentType" Name="Parent" />
    <DestinationEntity Namespace="ChildExternalContentType" Name="Child External Content Type" />
</Association>
```


> [!NOTE]
> You can specify any value for the **DirectoryLink** property. Search does not examine this value.
  
    
    


## Additional resources
<a name="SP15crawlects_addlresources"> </a>


-  [Search connector framework in SharePoint 2013](search-connector-framework-in-sharepoint.md)
    
  
-  [Adding Associations Between External Content Types](http://msdn.microsoft.com/library/791e95ab-9b3c-413b-be12-bd0e59962c93%28Office.15%29.aspx)
    
  
-  [Association Element in MethodInstances (BDCMetadata Schema)](http://msdn.microsoft.com/library/9659a1f5-1b12-03ef-f9e3-5c9904cc5dd0%28Office.15%29.aspx)
    
  
-  [Step 4 (Optional): Define Associations](http://msdn.microsoft.com/library/6bc55f46-459a-4986-8744-8c6c5f45097b%28Office.15%29.aspx)
    
  

