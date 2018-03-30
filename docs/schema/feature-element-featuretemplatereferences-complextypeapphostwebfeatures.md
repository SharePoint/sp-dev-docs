---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b4acdfbf-74c2-7baa-b29b-332478ed56e8
---

# Feature element (FeatureTemplateReferences complexType) 

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
<td align="left"><p><a href="featuretemplatereference-complextype-apphostwebfeatures.md">FeatureTemplateReference</a></p></td>
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
    <xs:element name="Feature" type="FeatureTemplateReference" minOccurs="0" maxOccurs="unbounded"></xs:element>
```

<br/> 

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/> 

### Parent elements

None.

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
<td align="left"><p><a href="properties-element-featuretemplatereference-complextypeapphostwebfeatures.md">Properties</a></p></td>
<td align="left"><p><a href="featurepropertydefinitions-complextype-apphostwebfeatures.md">FeaturePropertyDefinitions</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="10%" />
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
<td align="left"><p>ID</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SourceVersion</p></td>
<td align="left"><p><a href="featureversion-simpletype-apphostwebfeatures.md">FeatureVersion</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the FeatureVersion type.</p></td>
</tr>
</tbody>
</table>

<br/> 

<br/> 








