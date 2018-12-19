---
title: "ArrayOfManagedPropertyInfo complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 801faafe-a507-7b34-0b85-07368704e67c
description: "Last modified: March 09, 2015"
---

# ArrayOfManagedPropertyInfo complexType (SPS15XSDSearchSet2)

## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ArrayOfManagedPropertyInfo">
    <xs:sequence>
        <xs:element name="ManagedPropertyInfo" type="tns:ManagedPropertyInfo" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[ManagedPropertyInfo](managedpropertyinfo-element-arrayofmanagedpropertyinfo-complextypesps15xsdsearch.md) <br/> |tns:ManagedPropertyInfo  <br/> ||
   
### Attributes

None.
  

