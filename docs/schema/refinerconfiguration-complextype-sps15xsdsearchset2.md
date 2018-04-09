---
title: "RefinerConfiguration complexType (SPS15XSDSearchSet2)"


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ed726d55-576d-1801-4bc7-310389d8e93b
description: "Last modified: March 09, 2015"
---

# RefinerConfiguration complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="RefinerConfiguration">
    <xs:sequence>
        <xs:element name="Anchoring" type="tns:RefinerAnchoring" minOccurs="0"></xs:element>
        <xs:element name="CutoffMaxBuckets" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="Divisor" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="Intervals" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="Resolution" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="Type" type="tns:RefinerType" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[Anchoring](anchoring-element-refinerconfiguration-complextypesps15xsdsearchset2.md) <br/> |tns:RefinerAnchoring  <br/> ||
|[CutoffMaxBuckets](cutoffmaxbuckets-element-refinerconfiguration-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[Divisor](divisor-element-refinerconfiguration-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[Intervals](intervals-element-refinerconfiguration-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[Resolution](resolution-element-refinerconfiguration-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[Type](type-element-refinerconfiguration-complextypesps15xsdsearchset2.md) <br/> |tns:RefinerType  <br/> ||
   
### Attributes

None.
  

