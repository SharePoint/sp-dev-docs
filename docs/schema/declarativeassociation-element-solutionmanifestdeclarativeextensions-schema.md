---
title: DeclarativeAssociation Element
description: The DeclarativeAssociation element derives from the Association element.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: a5458eec-878b-4b20-715f-245660d09069
---

# DeclarativeAssociation Element

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DeclarativeAssociation** element derives from the **Association** element. In intermediate declarative Microsoft Outlook 2010 solutions, this element is used to describe an association of the external content type that the Outlook folder contains. Specifically, this element is used to set or get the Outlook property that maps to the entity instance reference of the association. If set, this is used by the External Item Picker functionality.

**Namespace**:
`http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions`

**Schema**: SolutionManifestDeclarativeExtensions

```
<Association  xsl:type="DeclarativeAssociation" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance"  DisplayNameOfficeItemPropertyName = "String" AssociationName = "String" EntityTypeNamespace = "String" EntityTypeName = "String" ReferenceOfficeItemPropertyName = "String" Name = "String" Description = "String"> </Association>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|Attribute|Description|
|---|---|
|**DisplayNameOfficeItemPropertyName**|The display name of the Office Item Property Name from the Solution Manifest. Optional. Attribute type: **String**|
|**AssociationName**|The name of the association from the BDC model. Required. Attribute type: **String**|
|**EntityTypeNamespace**|The name of the entity namespace from the BDC model. Required. Attribute type: **String**|
|**EntityTypeName**|The entity name from the BDC model. Required. Attribute type: **String**|
|**ReferenceOfficeItemPropertyName**|The name of the Outlook property in which you want to store the entity instance reference of the association. Must match the name of an **OfficeItemProperty** in the Solution Manifest. Required. Attribute type: **String**|
|**Name**|A name for the association. Required. Attribute type: **String**|
|**Description**|A description for the association. Optional. Attribute type: **String**|

### Child elements

None.

### Parent elements

None.


<br/>

<br/>
