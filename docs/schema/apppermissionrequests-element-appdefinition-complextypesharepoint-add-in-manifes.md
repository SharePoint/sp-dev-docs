---
title: AppPermissionRequests element (AppDefinition complexType)
description: Outlines information, a definition, and elements and attributes of the AppPermissionRequests element in Sharepoint.
manager: soliver
ms.date: 06/07/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 4e617622-78d3-3d23-677d-9957eb1fb107
---

# AppPermissionRequests element (AppDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

A list of resources that a SharePoint Add-in needs access to.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information
**Element type**: AppPermissionRequestsDefinition

**Namespace**: `http://schemas.microsoft.com/sharepoint/2012/app/manifest`

**Schema file**: appmanifest.xsd

## Definition

```XML 
  <xs:element name="AppPermissionRequests"  type="AppPermissionRequestsDefinition"
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
<td align="left"><p>The top level node of a SharePoint add-in Manifest.</p></td>
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
<td align="left"><p><a href="apppermissionrequest-element-apppermissionrequestsdefinition-complextypesharepoi.md">AppPermissionRequest</a></p></td>
<td align="left"><p><a href="apppermissionrequestdefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionRequestDefinition</a></p></td>
<td align="left"><p>The add-in permission requests.</p></td>
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
<col width="20%" />
<col width="20%" />
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
<td align="left"><p>AllowAppOnlyPolicy</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Whether to allow the add-in to use add-in-only policy.</p></td>
<td align="left"><p>Values of the xs:boolean type.</p></td>
</tr>
</tbody>
</table>








