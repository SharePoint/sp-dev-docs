---
title: "ManagedPropertyInfoCollection complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 91d12373-cd92-1425-53ae-205466821c1b
description: "Last modified: March 09, 2015"
---

# ManagedPropertyInfoCollection complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:BaseInfoCollectionOfManagedPropertyInfoTzWWwPjw  <br/> |
   
## Definition

```XML
<xs:complexType name="ManagedPropertyInfoCollection">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfoCollectionOfManagedPropertyInfoTzWWwPjw">
            <xs:sequence>
                <xs:element name="TotalCount" type="xs:int" minOccurs="0"></xs:element>
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
|[TotalCount](totalcount-element-managedpropertyinfocollection-complextypesps15xsdsearchset2.md) <br/> |xs:int  <br/> ||
   
### Attributes

None.
  

