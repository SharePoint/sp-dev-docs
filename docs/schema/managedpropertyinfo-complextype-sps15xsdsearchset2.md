---
title: "ManagedPropertyInfo complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8c4106a9-2ca6-a114-94a2-2d3ac56f654c
description: "Last modified: March 09, 2015"
---

# ManagedPropertyInfo complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:BaseInfo  <br/> |
   
## Definition

```XML
<xs:complexType name="ManagedPropertyInfo">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfo">
            <xs:sequence>
                <xs:element name="Aliases" type="q13:ArrayOfstring" minOccurs="0"></xs:element>
                <xs:element name="CompleteMatching" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Context" type="xs:short" minOccurs="0"></xs:element>
                <xs:element name="DeleteDisallowed" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Description" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="EnabledForScoping" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="EntityExtractorBitMap" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="FullTextIndex" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="HasMultipleValues" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="IndexOptions" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="IsReadOnly" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="ManagedType" type="tns:ManagedDataType" minOccurs="0"></xs:element>
                <xs:element name="MappedCrawledProperties" type="tns:ArrayOfCrawledPropertyInfo" minOccurs="0"></xs:element>
                <xs:element name="MappingDisallowed" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Pid" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="Queryable" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Refinable" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="RefinerConfiguration" type="tns:RefinerConfiguration" minOccurs="0"></xs:element>
                <xs:element name="RemoveDuplicates" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="RespectPriority" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Retrievable" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="SafeForAnonymous" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Searchable" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Sortable" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="SortableType" type="tns:SortableType" minOccurs="0"></xs:element>
                <xs:element name="TokenNormalization" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="UpdateGroup" type="xs:string" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:extension>
    </xs:complexContent>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[Aliases](aliases-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |q13:ArrayOfstring  <br/> ||
|[CompleteMatching](completematching-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Context](context-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:short  <br/> ||
|[DeleteDisallowed](deletedisallowed-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Description](description-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[EnabledForScoping](enabledforscoping-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[EntityExtractorBitMap](entityextractorbitmap-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[FullTextIndex](fulltextindex-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[HasMultipleValues](hasmultiplevalues-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[IndexOptions](indexoptions-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[IsReadOnly](isreadonly-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[ManagedType](managedtype-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |tns:ManagedDataType  <br/> ||
|[MappedCrawledProperties](mappedcrawledproperties-element-managedpropertyinfo-complextypesps15xsdsearchset.md) <br/> |tns:ArrayOfCrawledPropertyInfo  <br/> ||
|[MappingDisallowed](mappingdisallowed-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Pid](pid-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[Queryable](queryable-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Refinable](refinable-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[RefinerConfiguration](refinerconfiguration-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |tns:RefinerConfiguration  <br/> ||
|[RemoveDuplicates](removeduplicates-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[RespectPriority](respectpriority-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Retrievable](retrievable-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[SafeForAnonymous](safeforanonymous-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Searchable](searchable-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Sortable](sortable-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[SortableType](sortabletype-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |tns:SortableType  <br/> ||
|[TokenNormalization](tokennormalization-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[UpdateGroup](updategroup-element-managedpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
   
### Attributes

None.
  

