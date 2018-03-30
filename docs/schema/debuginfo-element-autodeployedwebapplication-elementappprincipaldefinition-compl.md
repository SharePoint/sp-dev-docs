---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0317f92e-a422-0431-2693-514aa9892c9e
---

# DebugInfo element 

(AutoDeployedWebApplication element) (AppPrincipalDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

For possible future use only.

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
<td align="left"><p><a href="autodeployedwebapplicationdebuginfodefinition-complextype-sharepoint-add-in-mani.md">AutoDeployedWebApplicationDebugInfoDefinition</a></p></td>
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

<br/>

```XML 
    <xs:element name="DebugInfo"  type="AutoDeployedWebApplicationDebugInfoDefinition" minOccurs="0"></xs:element>     
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Parent elements

<br/>

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
<td align="left"><p><a href="autodeployedwebapplication-element-appprincipaldefinition-complextypesharepoint.md">AutoDeployedWebApplication</a></p></td>
<td align="left"><p>For possible future use only.</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

None.

<br/>

### Attributes

<br/>

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
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
<td align="left"><p>AppUrl</p></td>
<td align="left"><p><a href="manifesturi-simpletype-sharepoint-add-in-manifest.md">ManifestUri</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The host URL of the add-in principal.</p></td>
<td align="left"><p>Values of the ManifestUri type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ClientSecret</p></td>
<td align="left"><p>xs:base64Binary</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The secret of the add-in principal.</p></td>
<td align="left"><p>Values of the xs:base64Binary type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RedirectUri</p></td>
<td align="left"><p><a href="manifesturi-simpletype-sharepoint-add-in-manifest.md">ManifestUri</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The redirect URL of the add-in principal.</p></td>
<td align="left"><p>Values of the ManifestUri type.</p></td>
</tr>
</tbody>
</table>








