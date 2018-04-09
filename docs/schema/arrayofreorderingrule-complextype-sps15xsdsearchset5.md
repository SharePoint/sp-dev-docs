---
title: "ArrayOfReorderingRule complexType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7b578356-3500-879f-e823-28bf42dd62d6
description: "Last modified: March 09, 2015"
---

# ArrayOfReorderingRule complexType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ArrayOfReorderingRule">
    <xs:sequence>
        <xs:element name="ReorderingRule" type="tns:ReorderingRule" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[ReorderingRule](reorderingrule-element-arrayofreorderingrule-complextypesps15xsdsearchset5.md) <br/> |tns:ReorderingRule  <br/> ||
   
### Attributes

None.
  

