---
title: "SearchSchemaConfigurationSettings complexType (SPS15XSDSearchSet3)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fc48b8f7-68e5-ff8c-dc0b-9a584248a54b
description: "Last modified: March 09, 2015"
---

# SearchSchemaConfigurationSettings complexType (SPS15XSDSearchSet3)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Portability.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="SearchSchemaConfigurationSettings">
    <xs:sequence>
        <xs:element name="Aliases" type="q8:AliasInfoCollection" minOccurs="0"></xs:element>
        <xs:element name="CategoriesAndCrawledProperties" type="q9:ArrayOfKeyValueOfguidCrawledPropertyInfoCollectionaSYUqUE_P" minOccurs="0"></xs:element>
        <xs:element name="CrawledProperties" type="q10:CrawledPropertyInfoCollection" minOccurs="0"></xs:element>
        <xs:element name="ManagedProperties" type="q11:ManagedPropertyInfoCollection" minOccurs="0"></xs:element>
        <xs:element name="Mappings" type="q12:MappingInfoCollection" minOccurs="0"></xs:element>
        <xs:element name="Overrides" type="q13:OverrideInfoCollection" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[Aliases](aliases-element-searchschemaconfigurationsettings-complextypesps15xsdsearchset3.md) <br/> |q8:AliasInfoCollection  <br/> ||
|[CategoriesAndCrawledProperties](categoriesandcrawledproperties-element-searchschemaconfigurationsettings-complex.md) <br/> |q9:ArrayOfKeyValueOfguidCrawledPropertyInfoCollectionaSYUqUE_P  <br/> ||
|[CrawledProperties](crawledproperties-element-searchschemaconfigurationsettings-complextypesps15xsds.md) <br/> |q10:CrawledPropertyInfoCollection  <br/> ||
|[ManagedProperties](managedproperties-element-searchschemaconfigurationsettings-complextypesps15xsds.md) <br/> |q11:ManagedPropertyInfoCollection  <br/> ||
|[Mappings](mappings-element-searchschemaconfigurationsettings-complextypesps15xsdsearchset3.md) <br/> |q12:MappingInfoCollection  <br/> ||
|[Overrides](overrides-element-searchschemaconfigurationsettings-complextypesps15xsdsearchset.md) <br/> |q13:OverrideInfoCollection  <br/> ||
   
### Attributes

None.
  

