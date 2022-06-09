---
title: PropertyBagDefinition complexType
description: Describes the PropertyBagDefinition complexType and provides the type information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 8e445cc3-7419-cd8a-befd-35b720f06815
---

# PropertyBagDefinition complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Resource | File |
|---|---|
| Namespace  | `http://schemas.microsoft.com/sharepoint/` |
| Schema file  | apphostwebfeatures.xsd |
| Extension base  | None |

## Definition

```XML
    <xs:complexType name="PropertyBagDefinition">
        <xs:sequence>
            <xs:element name="Property" type="PropertyValueAttributeDefinition" minOccurs="0" maxOccurs="unbounded"></xs:element>
        </xs:sequence>
        <xs:attribute name="ItemIndex" type="xs:string" use="optional" />
        <xs:attribute name="Url" type="xs:string" use="optional" />
        <xs:attribute name="ParentType" type="PropertyBagParentTypeDefinition" use="required" />
        <xs:attribute name="RootWebOnly" type="TRUEFALSE" use="optional" />
        <xs:attribute name="HyperlinkBaseUrl" type="AbsoluteUrl" use="optional" />
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="property-element-propertybagdefinition-complextypeapphostwebfeatures.md">Property</a></p></td>
<td align="left"><p><a href="propertyvalueattributedefinition-complextype-apphostwebfeatures.md">PropertyValueAttributeDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>HyperlinkBaseUrl</p></td>
<td align="left"><p>AbsoluteUrl</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the AbsoluteUrl type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemIndex</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ParentType</p></td>
<td align="left"><p><a href="propertybagparenttypedefinition-simpletype-apphostwebfeatures.md">PropertyBagParentTypeDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the PropertyBagParentTypeDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>RootWebOnly</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Url</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







