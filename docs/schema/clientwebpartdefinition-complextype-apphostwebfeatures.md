---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dd652de3-bd44-2997-4dbd-5037171455e4
---

# ClientWebPartDefinition complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="ClientWebPartDefinition">
        <xs:all>
            <xs:element name="Content" type="ClientWebPartDefinitionContent" minOccurs="1" maxOccurs="1"></xs:element>
            <xs:element name="Properties" type="ClientWebPartProperties" minOccurs="0" maxOccurs="1"></xs:element>
        </xs:all>
        <xs:attribute name="Name" type="xs:string" use="required" />
        <xs:attribute name="DefaultWidth" type="xs:int" use="optional" />
        <xs:attribute name="DefaultHeight" type="xs:int" use="optional" />
        <xs:attribute name="Title" type="xs:string" use="optional" />
        <xs:attribute name="Description" type="xs:string" use="optional" />
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
<td align="left"><p><a href="content-element-clientwebpartdefinition-complextypeapphostwebfeatures.md">Content</a></p></td>
<td align="left"><p><a href="clientwebpartdefinitioncontent-complextype-apphostwebfeatures.md">ClientWebPartDefinitionContent</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-clientwebpartdefinition-complextypeapphostwebfeatures.md">Properties</a></p></td>
<td align="left"><p><a href="clientwebpartproperties-complextype-apphostwebfeatures.md">ClientWebPartProperties</a></p></td>
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
<td align="left"><p>DefaultHeight</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:int type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DefaultWidth</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:int type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Title</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







