---
title: "ResultItemType complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 06/13/2022
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 603dee83-8bb5-018a-c519-9c4f98f4fd1f
description: "Describes the ResultItemType complexType (SPS15XSDSearchSet2). If the schema defines specific requirements, see the Definition section."
---

# ResultItemType complexType (SPS15XSDSearchSet2)

 
  
## Type information

|Information type|Value|
|:-----|:-----|
|**Namespace**|http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration |
|**Schema file**|schema_Microsoft.Office.Server.Search.Administration.xsd |
|**Extension base**|None |
   
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
|[BuiltIn](builtin-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:boolean ||
|[DisplayProperties](displayproperties-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:string ||
|[DisplayTemplateUrl](displaytemplateurl-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:string ||
|[ID](id-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:int ||
|[InternalID](internalid-element-resultitemtype-complextypesps15xsdsearchset2.md)|ser:guid ||
|[IsDeleted](isdeleted-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:boolean ||
|[LastModifiedDate](lastmodifieddate-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:dateTime ||
|[Name](name-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:string ||
|[OptimizeForFrequentUse](optimizeforfrequentuse-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:boolean ||
|[Owner](owner-element-resultitemtype-complextypesps15xsdsearchset2.md)|tns:SearchObjectOwner ||
|[RulePriority](rulepriority-element-resultitemtype-complextypesps15xsdsearchset2.md)|xs:int ||
|[Rules](rules-element-resultitemtype-complextypesps15xsdsearchset2.md)|tns:PropertyRuleCollection ||
|[SourceID](sourceid-element-resultitemtype-complextypesps15xsdsearchset2.md)|ser:guid ||
   
### Attributes

None.
  

