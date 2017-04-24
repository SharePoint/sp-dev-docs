---
title: Changes in the BDC model schema for SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 882ea867-9acb-4313-99c9-865a523b72fd
---


# Changes in the BDC model schema for SharePoint 2013
Learn what has changed in SharePoint 2013 for the BDC model schema.
The number of changes in the schema (BDCMetadata.xsd) for creating BDC models in SharePoint 2013 is relatively small. But these changes have significant impact on the feature set offerings of Business Connectivity Services (BCS).
  
    
    

For more information about the BDCMetadata schema, see  [BDC model schema reference for SharePoint 2013](bdc-model-schema-reference-for-sharepoint.md).
## Changes to complex type elements in BDCMetadata.xsd
<a name="bkmk_ChangesToElements"> </a>

The following table shows what changes have been made to the top-level elements in the BDCMetadata schema.
  
    
    

**Table 1. New complex types**


|**Element**|**Description**|
|:-----|:-----|
|IndividuallySecurableMetadataObject  <br/> |Used to designate that the specified **MetadataObject** is able to be secured explicitly and not by association to its parent. <br/> |
|MetadataObject  <br/> |Used to store additional metadata about the connection to the external data source.  <br/> |
   

## Changes to simple type elements in BDCMetadata.xsd
<a name="bkmk_ChangesToSimpleTypes"> </a>

The following table lists the changes that have been made to the attributes of each element.
  
    
    

**Table 2. Changes to simple types**


|**Element**|**Description**|
|:-----|:-----|
|No changes  <br/> ||
   

## Changes to attributes in BDCMetadata.xsd
<a name="bkmk_ChangesToAttributes"> </a>

The following table lists the changes to the attributes of each element.
  
    
    

**Table 3. Changes to attributes**


|**Attribute**|**Parent**|**Description**|
|:-----|:-----|:-----|
|No changes  <br/> |||
   

## Additional resources
<a name="bkmk_AdditionalResources"> </a>


-  [Business Connectivity Services in SharePoint 2013](business-connectivity-services-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint 2013](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint 2013](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [Business Connectivity Services programmers reference for SharePoint 2013](business-connectivity-services-programmers-reference-for-sharepoint.md)
    
  
-  [BDC model schema reference for SharePoint 2013](bdc-model-schema-reference-for-sharepoint.md)
    
  

