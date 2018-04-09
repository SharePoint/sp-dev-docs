---
title: "Link Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ae7f8996-6eea-4d95-9388-e599aa92d5c1
description: "Last modified: March 09, 2015"
---

# Link Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a SharePoint Foundation link ([SPLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLink.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Link" 
        type="SPLink" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Links>
        <Link
                TargetId="Guid"
                TargetUrl="xs:string"
                IsDirty="xs:boolean"
                WebPartId="Guid"
                LinkNumber="xs:int"
                Type="xs:unsignedByte"
                Security="xs:unsignedByte"
                Dynamic="xs:unsignedByte"
                ServerRel="xs:boolean"
                Level="xs:unsignedByte"
                Search="xs:string"
        />
</Links>

```

## Type

[Microsoft.SharePoint.SPLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLink.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**TargetId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Identifier of the link target.  <br/> |
|**TargetUrl** <br/> |xs:string  <br/> |Required. URL represented by the link.  <br/> |
|**IsDirty** <br/> |xs:boolean  <br/> |Required. Specifies whether the link value has been changed; **true** if the link has changed, otherwise **false**.  <br/> |
|**WebPartId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the Web Part in which the link is sited.  <br/> |
|**LinkNumber** <br/> |xs:int  <br/> |Optional. Identifying number of the link, if any.  <br/> |
|**Type** <br/> |xs:unsignedByte  <br/> |Optional.  <br/> |
|**Security** <br/> |xs:unsignedByte  <br/> |Optional.  <br/> |
|**Dynamic** <br/> |xs:unsignedByte  <br/> |Optional.  <br/> |
|**ServerRel** <br/> |xs:boolean  <br/> |Optional. Specifies whether the link is a server-relative URL; **true** if the link is server-relative, otherwise **false**.  <br/> |
|**Level** <br/> |xs:unsignedByte  <br/> |Optional.  <br/> |
|**Search** <br/> |xs:string  <br/> |Optional.  <br/> |
   
### Child elements

None
   
### Parent elements

[Links Element (DeploymentManifest - SPFile)](links-element-deploymentmanifestspfile.md)
   
## See also

- [SPLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLink.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

