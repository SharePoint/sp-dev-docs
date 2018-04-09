---
title: "AliasInfo complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 96483d28-b4c0-8241-9773-c74963047fc9
description: "Last modified: March 09, 2015"
---

# AliasInfo complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:BaseInfo  <br/> |
   
## Definition

```XML
<xs:complexType name="AliasInfo">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfo">
            <xs:sequence>
                <xs:element name="ManagedPid" type="xs:int" minOccurs="0"></xs:element>
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
|[ManagedPid](managedpid-element-aliasinfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
|[SchemaId](schemaid-element-aliasinfo-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
   
### Attributes

None.
  

