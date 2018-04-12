---
title: "MappingInfo complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9f76cdfb-9587-98cc-768f-bc22433c088f
description: "Last modified: March 09, 2015"
---

# MappingInfo complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:BaseInfo  <br/> |
   
## Definition

```XML
<xs:complexType name="MappingInfo">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfo">
            <xs:sequence>
                <xs:element name="CrawledPropertyName" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="CrawledPropset" type="ser:guid" minOccurs="0"></xs:element>
                <xs:element name="ManagedPid" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="MappingOrder" type="xs:int" minOccurs="0"></xs:element>
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
|[CrawledPropertyName](crawledpropertyname-element-mappinginfo-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[CrawledPropset](crawledpropset-element-mappinginfo-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[ManagedPid](managedpid-element-mappinginfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[MappingOrder](mappingorder-element-mappinginfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[SchemaId](schemaid-element-mappinginfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
   
### Attributes

None.
  

