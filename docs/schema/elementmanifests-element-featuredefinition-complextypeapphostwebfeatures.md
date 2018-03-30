---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5f720156-326c-d29e-a8f6-5ba12842ce0e
---

# ElementManifests element (FeatureDefinition complexType) 

(AppHostWebFeatures)

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
<td align="left"><p><a href="elementmanifestreferences-complextype-apphostwebfeatures.md">ElementManifestReferences</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
</tbody>
</table>

<br/> 

```XML
    <xs:element name="ElementManifests" type="ElementManifestReferences" minOccurs="0" maxOccurs="1"></xs:element>
```

<br/> 

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/> 

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
<td align="left"><p><a href="feature-element-apphostwebfeatures.md">Feature</a></p></td>
<td align="left"><p><a href="featuredefinition-complextype-apphostwebfeatures.md">FeatureDefinition</a></p></td>
<td align="left"><p></p></td>
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
<td align="left"><p><a href="elementfile-element-elementmanifestreferences-complextypeapphostwebfeatures.md">ElementFile</a></p></td>
<td align="left"><p><a href="elementmanifestreference-complextype-apphostwebfeatures.md">ElementManifestReference</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="elementmanifest-element-elementmanifestreferences-complextypeapphostwebfeatures.md">ElementManifest</a></p></td>
<td align="left"><p><a href="elementmanifestreference-complextype-apphostwebfeatures.md">ElementManifestReference</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/> 

### Attributes

None.








