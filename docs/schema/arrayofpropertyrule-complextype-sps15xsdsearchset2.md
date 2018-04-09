---
title: "ArrayOfPropertyRule complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7f2bc3fb-51e9-c642-c1db-23d02be0e1c4
description: "Last modified: March 09, 2015"
---

# ArrayOfPropertyRule complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ArrayOfPropertyRule">
    <xs:sequence>
        <xs:element name="PropertyRule" type="tns:PropertyRule" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[PropertyRule](propertyrule-element-arrayofpropertyrule-complextypesps15xsdsearchset2.md) <br/> |tns:PropertyRule  <br/> ||
   
### Attributes

None.
  

