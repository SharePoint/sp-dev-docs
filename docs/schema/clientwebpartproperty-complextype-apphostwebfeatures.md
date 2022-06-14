---
title: ClientWebPartProperty complexType
description: Describes the definition, type, element, and attribute information for ClientWebPartProperty complexType.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: deebfdda-704b-2393-fdb7-8b6292836a0e
---

# ClientWebPartProperty complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information | Location |
|-------------|----------|
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| **Schema File** | apphostwebfeatures.xsd |
| **Extension Base** | None |

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

| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| DefaultValue | xs:string | required |     | Values of the xs:string type. |
| ManagedLinkConvertServerLinksToRelative | xs:boolean | optional |     | Values of the xs:boolean type. |
| ManagedLinkFixup | xs:boolean | optional |     | Values of the xs:boolean type. |
| Multilingual | xs:boolean | optional |     | Values of the xs:boolean type. |
| Name | xs:string | required |     | Values of the xs:string type. |
| PersonalizableIsSensitive | xs:boolean | optional |     | Values of the xs:boolean type. |
| PersonalizationScope | [WebPartPersonalizationScope](webpartpersonalizationscope-simpletype-apphostwebfeatures.md) | optional |     | Values of the WebPartPersonalizationScope type. |
| RequiresDesignerPermission | xs:boolean | required |     | Values of the xs:boolean type. |
| Type | [ClientWebPartPropertyType](clientwebpartpropertytype-simpletype-apphostwebfeatures.md) | required |     | Values of the ClientWebPartPropertyType type. |
| WebBrowsable | xs:boolean | optional |     | Values of the xs:boolean type. |
| WebCategory | xs:string | optional |     | Values of the xs:string type. |
| WebDescription | xs:string | optional |     | Values of the xs:string type. |
| WebDisplayName | xs:string | optional |     | Values of the xs:string type. |







