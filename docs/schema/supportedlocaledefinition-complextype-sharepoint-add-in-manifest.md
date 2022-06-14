---
title: SupportedLocaleDefinition complexType
manager: soliver
ms.date: 06/14/2022
description: Describes SupportedLocaleDefinition complexType and provides information elements and attributes.
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: f3affad3-4ac8-2124-57fc-b3599899997b
---

# SupportedLocaleDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Identifies a locale in [Internet Engineering Task Force (IETF)](http://tools.ietf.org/html/rfc1766)-compliant format; for example, en-us.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|Information|Location|
|---|---|
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |
| **Extension base**  | None |

## Definition

```XML
    <xs:complexType name="SupportedLocaleDefinition">
        <xs:attribute name="CultureName" type="CultureNameDefinition" use="required" />
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

None.

<br/>

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="25%" />
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
<td align="left"><p>CultureName</p></td>
<td align="left"><p><a href="culturenamedefinition-simpletype-sharepoint-add-in-manifest.md">CultureNameDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The Culture Name of a locale that the add-in supports.</p></td>
<td align="left"><p>Values of the CultureNameDefinition type; for example, en-us.</p></td>
</tr>
</tbody>
</table>








