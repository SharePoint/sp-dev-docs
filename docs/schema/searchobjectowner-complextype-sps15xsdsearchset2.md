---
title: "SearchObjectOwner complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 06/14/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: a071bfbc-d23d-d37f-b2b3-92878bbe11ec
description: Learn more about SearchObjectOwner complexType (SPS15XSDSearchSet2).
---

# SearchObjectOwner complexType (SPS15XSDSearchSet2)



## Type information

|Information|Location|
|:-----|:-----|
|**Namespace** |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  |
|**Schema file** |schema_Microsoft.Office.Server.Search.Administration.xsd  |
|**Extension base** |None   |

## Definition

```XML
<xs:complexType name="SearchObjectOwner">
    <xs:sequence>
        <xs:element name="DatabaseId" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="DisableInheritance" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="SPFarmId" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="SPSiteId" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="SPSiteSubscriptionId" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="SPWebId" type="ser:guid" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[DatabaseId](databaseid-element-searchobjectowner-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[DisableInheritance](disableinheritance-element-searchobjectowner-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[SPFarmId](spfarmid-element-searchobjectowner-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[SPSiteId](spsiteid-element-searchobjectowner-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[SPSiteSubscriptionId](spsitesubscriptionid-element-searchobjectowner-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||
|[SPWebId](spwebid-element-searchobjectowner-complextypesps15xsdsearchset2.md) <br/> |ser:guid  <br/> ||

### Attributes

None.
