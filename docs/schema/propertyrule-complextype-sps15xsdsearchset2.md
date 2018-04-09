---
title: "PropertyRule complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 300ff8c8-f118-9c05-248c-fcfbd9585a22
description: "Last modified: March 09, 2015"
---

# PropertyRule complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="PropertyRule">
    <xs:sequence>
        <xs:element name="PropertyName" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="PropertyOperator" type="tns:PropertyRuleOperator" minOccurs="0"></xs:element>
        <xs:element name="PropertyValues" type="q1:ArrayOfstring" minOccurs="0"></xs:element>
        <xs:element name="RuleNameLSID" type="q2:LocStringId" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[PropertyName](propertyname-element-propertyrule-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[PropertyOperator](propertyoperator-element-propertyrule-complextypesps15xsdsearchset2.md) <br/> |tns:PropertyRuleOperator  <br/> ||
|[PropertyValues](propertyvalues-element-propertyrule-complextypesps15xsdsearchset2.md) <br/> |q1:ArrayOfstring  <br/> ||
|[RuleNameLSID](rulenamelsid-element-propertyrule-complextypesps15xsdsearchset2.md) <br/> |q2:LocStringId  <br/> ||
   
### Attributes

None.
  

