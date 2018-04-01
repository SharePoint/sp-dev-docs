---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: deebfdda-704b-2393-fdb7-8b6292836a0e
---

# ClientWebPartProperty complexType 

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
    <xs:complexType name="ClientWebPartProperty">
        <xs:all>
            <xs:element name="EnumItems" type="ClientWebPartEnumItems" minOccurs="0" maxOccurs="1"></xs:element>
        </xs:all>
        <xs:attribute name="Name" type="xs:string" use="required" />
        <xs:attribute name="Type" type="ClientWebPartPropertyType" use="required" />
        <xs:attribute name="RequiresDesignerPermission" type="xs:boolean" use="required" />
        <xs:attribute name="DefaultValue" type="xs:string" use="required" />
        <xs:attribute name="PersonalizationScope" type="WebPartPersonalizationScope" use="optional" />
        <xs:attribute name="PersonalizableIsSensitive" type="xs:boolean" use="optional" />
        <xs:attribute name="WebBrowsable" type="xs:boolean" use="optional" />
        <xs:attribute name="WebDisplayName" type="xs:string" use="optional" />
        <xs:attribute name="WebDescription" type="xs:string" use="optional" />
        <xs:attribute name="WebCategory" type="xs:string" use="optional" />
        <xs:attribute name="ManagedLinkFixup" type="xs:boolean" use="optional" />
        <xs:attribute name="ManagedLinkConvertServerLinksToRelative" type="xs:boolean" use="optional" />
        <xs:attribute name="Multilingual" type="xs:boolean" use="optional" />
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
<td align="left"><p>Name</p></td>
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
<td align="left"><p>Type</p></td>
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







