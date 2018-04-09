---
title: "ResultItemType complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 603dee83-8bb5-018a-c519-9c4f98f4fd1f
description: "Last modified: March 09, 2015"
---

# ResultItemType complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ResultItemType">
    <xs:sequence>
        <xs:element name="BuiltIn" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="DisplayProperties" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="DisplayTemplateUrl" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="ID" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="InternalID" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="IsDeleted" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="LastModifiedDate" type="xs:dateTime" minOccurs="0"></xs:element>
        <xs:element name="Name" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="OptimizeForFrequentUse" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="Owner" type="tns:SearchObjectOwner" minOccurs="0"></xs:element>
        <xs:element name="RulePriority" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="Rules" type="tns:PropertyRuleCollection" minOccurs="0"></xs:element>
        <xs:element name="SourceID" type="ser:guid" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[BuiltIn](builtin-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[DisplayProperties](displayproperties-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[DisplayTemplateUrl](displaytemplateurl-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[ID](id-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[InternalID](internalid-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[IsDeleted](isdeleted-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[LastModifiedDate](lastmodifieddate-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:dateTime  <br/> ||
|[Name](name-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[OptimizeForFrequentUse](optimizeforfrequentuse-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Owner](owner-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |tns:SearchObjectOwner  <br/> ||
|[RulePriority](rulepriority-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[Rules](rules-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |tns:PropertyRuleCollection  <br/> ||
|[SourceID](sourceid-element-resultitemtype-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
   
### Attributes

None.
  

