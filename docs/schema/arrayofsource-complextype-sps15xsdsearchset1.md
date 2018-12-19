---
title: "ArrayOfSource complexType (SPS15XSDSearchSet1)"
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4bdb8121-495b-b729-2de5-e1d157e83169
description: "Last modified: March 09, 2015"
---

# ArrayOfSource complexType (SPS15XSDSearchSet1)

**Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.Query.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ArrayOfSource">
    <xs:sequence>
        <xs:element name="Source" type="tns:Source" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[Source](source-element-arrayofsource-complextypesps15xsdsearchset1.md) <br/> |tns:Source  <br/> ||
   
### Attributes

None.
  

