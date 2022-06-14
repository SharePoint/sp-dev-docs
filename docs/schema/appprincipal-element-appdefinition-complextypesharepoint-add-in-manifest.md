---
title: AppPrincipal element (AppDefinition complexType)
description: Discusses the definition, elements and attributes for AppPrincipal element (AppDefinition complexType) which applies to SharePoint.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 6ba448d6-26ec-f918-ac4d-136809236752
---

# AppPrincipal element (AppDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The add-in principal information.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

|Information|Location|
|---|---|
| **Element type**  | AppPrincipalDefinition |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML 
    <xs:element name="AppPrincipal" type="AppPrincipalDefinition" minOccurs="1" maxOccurs="1">
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



### Child elements

<table>
<colgroup>
<col width="30%" />
<col width="40%" />
<col width="30%" />
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
<td align="left"><p><a href="autodeployedwebapplication-element-appprincipaldefinition-complextypesharepoint.md">AutoDeployedWebApplication</a></p></td>
<td align="left"><p>For possible future use only.</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="internal-element-appprincipaldefinition-complextypesharepoint-add-in-manifest.md">Internal</a></p></td>
<td align="left"><p>Mainly for SharePoint-hosted SharePoint Add-ins.</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="remotewebapplication-element-appprincipaldefinition-complextypesharepoint-add-in.md">RemoteWebApplication</a></p></td>
<td align="left"><p>For provider-hosted SharePoint Add-ins.</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>



### Attributes

None.









