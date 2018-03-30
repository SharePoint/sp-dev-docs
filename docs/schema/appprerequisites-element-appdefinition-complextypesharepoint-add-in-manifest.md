---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7622b55f-01a1-2c39-9daa-7cfb1a3c890f
---

# AppPrerequisites element (AppDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

A list of prerequisites that a SharePoint Add-in depends on.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="appprerequisitecollection-complextype-sharepoint-add-in-manifest.md">AppPrerequisiteCollection</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
   <xs:element name="AppPrerequisites"  type="AppPrerequisiteCollection"
        minOccurs="0"
        maxOccurs="1"
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
<td align="left"><p><a href="app-element-sharepoint-add-in-manifest.md">App</a></p></td>
<td align="left"><p><a href="appdefinition-complextype-sharepoint-add-in-manifest.md">AppDefinition</a></p></td>
<td align="left"><p>The top level node of a SharePoint Add-in Manifest.</p></td>
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
<td align="left"><p><a href="appprerequisite-element-appprerequisitecollection-complextypesharepoint-add-in-m.md">AppPrerequisite</a></p></td>
<td align="left"><p><a href="appprerequisite-complextype-sharepoint-add-in-manifest.md">AppPrerequisite</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

None.

<br/>
<br/>







