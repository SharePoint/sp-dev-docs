---
title: "CrawledPropertyInfo complexType (SPS15XSDSearchSet2)"


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6a4d1072-03d8-3141-d6d9-6a384c2795b8
description: "Last modified: March 09, 2015"
---

# CrawledPropertyInfo complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:BaseInfo  <br/> |
   
## Definition

```XML
<xs:complexType name="CrawledPropertyInfo">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfo">
            <xs:sequence>
                <xs:element name="CategoryName" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="IsMappedToContents" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="IsNameEnum" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="MappedManagedProperties" type="tns:ArrayOfManagedPropertyInfo" minOccurs="0"></xs:element>
                <xs:element name="Propset" type="ser:guid" minOccurs="0"></xs:element>
                <xs:element name="Samples" type="q12:ArrayOfstring" minOccurs="0"></xs:element>
                <xs:element name="SchemaId" type="xs:int" minOccurs="0"></xs:element>
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
|[CategoryName](categoryname-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[IsMappedToContents](ismappedtocontents-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[IsNameEnum](isnameenum-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[MappedManagedProperties](mappedmanagedproperties-element-crawledpropertyinfo-complextypesps15xsdsearchset.md) <br/> |tns:ArrayOfManagedPropertyInfo  <br/> ||
|[Propset](propset-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[Samples](samples-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |q12:ArrayOfstring  <br/> ||
|[SchemaId](schemaid-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
   
### Attributes

None.
  

