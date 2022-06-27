---
title: "PropertyRuleCollection complexType (SPS15XSDSearchSet2)"
description: "Describes the definition, type, element, and attribute information for the PropertyRuleCollection complexType (SPS15XSDSearchSet2)."
manager: arnek
ms.date: 06/10/2022
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: c055590f-4dbb-62fa-0eab-6d80c903d15a
---

# PropertyRuleCollection complexType (SPS15XSDSearchSet2)

 
  
## Type information

|Information|Location|
|:-----|:-----|
|**Namespace**|http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration|
|**Schema file**|schema_Microsoft.Office.Server.Search.Administration.xsd|
|**Extension base**|None|
   
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
|[PropertyRules](propertyrules-element-propertyrulecollection-complextypesps15xsdsearchset2.md)|tns:ArrayOfPropertyRule||
   
### Attributes

None.
  

