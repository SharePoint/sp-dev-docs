---
title: Property element (PropertyBagDefinition complexType)
description: Describes the Property element (PropertyBagDefinition complexType) and provides the element information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: b820d65f-12d5-8521-09c6-3db3902ca4a1
---

# Property element (PropertyBagDefinition complexType) 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

| Resource | File |
|---|---|
| Element type  | PropertyValueAttributeDefinition |
| Namespace  | `http://schemas.microsoft.com/sharepoint/` |
| Schema file  | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:element name="Property" type="PropertyValueAttributeDefinition" minOccurs="0" maxOccurs="unbounded"></xs:element>
```

## Elements and attributes 

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.


### Parent elements

None.

<br/> 

### Child elements

None.

<br/> 

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="10%" />
<col width="30%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p><a href="propertybagtype-simpletype-apphostwebfeatures.md">PropertyBagType</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the PropertyBagType type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Value</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>

<br/> 

<br/> 








