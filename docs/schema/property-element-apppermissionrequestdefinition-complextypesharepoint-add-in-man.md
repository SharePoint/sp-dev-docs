---
title: Property element (AppPermissionRequestDefinition complexType)
description: Describes the Property element (AppPermissionRequestDefinition complexType) and provides the element information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 69cd6425-593f-c412-cb30-5e59ed341330
---

# Property element (AppPermissionRequestDefinition complexType)

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Add-in Permission Property.

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

| Resource | File |
|---|---|
| **Element type** | AppPermissionPropertyDefinition |
| **Namespace** | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file** | appmanifest.xsd |

## Definition

```XML
        <xs:element name="Property"  type="AppPermissionPropertyDefinition"
         minOccurs="0"
         maxOccurs="1000"
        >
        </xs:element>
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
<td align="left"><p><a href="apppermissionrequest-element-apppermissionrequestsdefinition-complextypesharepoi.md">AppPermissionRequest</a></p></td>
<td align="left"><p><a href="apppermissionrequestdefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionRequestDefinition</a></p></td>
<td align="left"><p>The add-in permission requests.</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The property name.</p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Value</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The property value.</p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>

<br/>
<br/>
