---
manager: soliver
ms.date: 1/25/2016
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d9694afe-e700-81a8-b76b-c42ebd1ff5f3
---

# Internal element 

(AppPrincipalDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The presence of this element means that the add-in is SharePoint-hosted, rather than provider-hosted.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

<br/>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p>Not defined</p></td>
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
    <xs:element name="Internal" >
      <xs:attribute name="AllowedRemoteHostUrl"
        type="ManifestUri"
        use="optional"
        />
      <xs:attribute name="RedirectUrl"
        type="ManifestUri"
        use="optional"
        />
    </xs:element>
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
<td align="left"><p><a href="appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.md">AppPrincipal</a></p></td>
<td align="left"><p><a href="appprincipaldefinition-complextype-sharepoint-add-in-manifest.md">AppPrincipalDefinition</a></p></td>
<td align="left"><p>The add-in principal information.</p></td>
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
<td align="left"><p>AllowedRemoteHostUrl</p></td>
<td align="left"><p><a href="manifesturi-simpletype-sharepoint-add-in-manifest.md">ManifestUri</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The allowed remote host URL of the add-in principal.</p></td>
<td align="left"><p>Values of the ManifestUri type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>RedirectUrl</p></td>
<td align="left"><p><a href="manifesturi-simpletype-sharepoint-add-in-manifest.md">ManifestUri</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The redirect URL of the add-in principal.</p></td>
<td align="left"><p>Values of the ManifestUri type.</p></td>
</tr>
</tbody>
</table>








