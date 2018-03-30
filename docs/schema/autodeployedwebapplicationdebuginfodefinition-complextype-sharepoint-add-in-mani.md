---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 01b2ddb3-33b1-e65c-f3ee-623ddbad94c6
---

# AutoDeployedWebApplicationDebugInfoDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The add-in principal information used for debugging purposes.

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
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="AutoDeployedWebApplicationDebugInfoDefinition">
      <xs:attribute name="AppUrl"
       type="ManifestUri"
       use="required"
      />
      <xs:attribute name="ClientSecret"
       type="xs:base64Binary"
       use="required"
      />
      <xs:attribute name="RedirectUri"
       type="ManifestUri"
       use="optional"
      />
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








