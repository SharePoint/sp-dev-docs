---
title: "ManagedPropertyInfoCollection complexType (SPS15XSDSearchSet2)"
description: Outlines information, a definition, and elements and attributes for the ManagedPropertyInfoCollection complexType in Sharepoint.
manager: arnek
ms.date: 06/09/2022
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 91d12373-cd92-1425-53ae-205466821c1b
---

# ManagedPropertyInfoCollection complexType (SPS15XSDSearchSet2)

 
  
## Type information
|Name|Value|
|:-----|:-----|
|**Namespace** |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration   |
|**Schema file**  |schema_Microsoft.Office.Server.Search.Administration.xsd  |
|**Extension base** |tns:BaseInfoCollectionOfManagedPropertyInfoTzWWwPjw   |
   
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
  

