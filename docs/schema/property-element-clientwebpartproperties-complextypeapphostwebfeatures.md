---
title: Property element (ClientWebPartProperties complexType)
description: Describes the Property element (ClientWebPartProperties complexType) and provides the element information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 8e87451c-6146-2e5b-c37f-a932f2a2e68a
---

# Property element (ClientWebPartProperties complexType) 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

| Resource | File |
|---|---|
| **Element type** | ClientWebPartProperty |
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file** | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:element name="Property" type="ClientWebPartProperty" minOccurs="0" maxOccurs="unbounded"></xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.


### Parent elements

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
<td align="left"><p><a href="properties-element-clientwebpartdefinition-complextypeapphostwebfeatures.md">Properties</a></p></td>
<td align="left"><p><a href="clientwebpartproperties-complextype-apphostwebfeatures.md">ClientWebPartProperties</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/> 

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
<td align="left"><p><a href="enumitems-element-clientwebpartproperty-complextypeapphostwebfeatures.md">EnumItems</a></p></td>
<td align="left"><p><a href="clientwebpartenumitems-complextype-apphostwebfeatures.md">ClientWebPartEnumItems</a></p></td>
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
<td align="left"><p>DefaultValue</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ManagedLinkConvertServerLinksToRelative</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ManagedLinkFixup</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Multilingual</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>PersonalizableIsSensitive</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PersonalizationScope</p></td>
<td align="left"><p><a href="webpartpersonalizationscope-simpletype-apphostwebfeatures.md">WebPartPersonalizationScope</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the WebPartPersonalizationScope type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>RequiresDesignerPermission</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p><a href="clientwebpartpropertytype-simpletype-apphostwebfeatures.md">ClientWebPartPropertyType</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the ClientWebPartPropertyType type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebBrowsable</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WebCategory</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebDescription</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WebDisplayName</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>

<br/> 

<br/> 








