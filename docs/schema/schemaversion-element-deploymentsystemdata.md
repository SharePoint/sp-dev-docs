---
title: "SchemaVersion Element (DeploymentSystemData)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 354c96b8-115a-4960-bfb6-46d3a40f1c61
description: "Last modified: March 09, 2015"
---

# SchemaVersion Element (DeploymentSystemData)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an object (**SPSchemaVersion**) that lists versioning data for the content migration manifest schema.

## Definition

```XML
DECLARATION
<xs:element 
    name="SchemaVersion" 
    type="SPSchemaVersion" 
    minOccurs="1" maxOccurs="1" 
/>
USAGE
<SystemData>
    <SchemaVersion
        Version="xs:string"
        Build="xs:string"
        DatabaseVersion="xs:string"
        SiteVersion="xs:string"
    />
</SystemData>

```

## Type

**SPSchemaVersion**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Version** <br/> |xs:string  <br/> |Version of the manifest schema that is presently in use.  <br/> |
|**Build** <br/> |xs:string  <br/> |Build number.  <br/> |
|**DatabaseVersion** <br/> |xs:string  <br/> |Version of the database exporting content.  <br/> |
|**SiteVersion** <br/> |xs:string  <br/> |Verison of the parent website.  <br/> |
   
### Child elements

None
   
### Parent elements

[SystemData Element (DeploymentSystemData)](systemdata-element-deploymentsystemdata.md)
   
## See also

- [DeploymentSystemData Schema](deploymentsystemdata-schema.md)

