---
title: "PropertyRuleCollection complexType (SPS15XSDSearchSet2)"


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c055590f-4dbb-62fa-0eab-6d80c903d15a
description: "Last modified: March 09, 2015"
---

# PropertyRuleCollection complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="PropertyRuleCollection">
    <xs:sequence>
        <xs:element name="PropertyRules" type="tns:ArrayOfPropertyRule" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[PropertyRules](propertyrules-element-propertyrulecollection-complextypesps15xsdsearchset2.md) <br/> |tns:ArrayOfPropertyRule  <br/> ||
   
### Attributes

None.
  

