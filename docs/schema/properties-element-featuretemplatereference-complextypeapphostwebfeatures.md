---
title: Properties element (FeatureTemplateReference complexType)
description: Describes the Properties element (FeatureTemplateReference complexType) and provides the element information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: d0072541-fbe7-4ac4-2687-17b0829b8c43
---

# Properties element (FeatureTemplateReference complexType) 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

| Resource | File |
|---|---|
| Element type  | FeaturePropertyDefinitions |
| Namespace  | `http://schemas.microsoft.com/sharepoint/` |
| Schema file  | apphostwebfeatures.xsd |

## Definition 

```XML
    <xs:element name="Properties" type="FeaturePropertyDefinitions" minOccurs="0" maxOccurs="1"></xs:element>
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
<td align="left"><p><a href="feature-element-featuretemplatereferences-complextypeapphostwebfeatures.md">Feature</a></p></td>
<td align="left"><p><a href="featuretemplatereference-complextype-apphostwebfeatures.md">FeatureTemplateReference</a></p></td>
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
<td align="left"><p><a href="property-element-featurepropertydefinitions-complextypeapphostwebfeatures.md">Property</a></p></td>
<td align="left"><p><a href="featurepropertydefinition-complextype-apphostwebfeatures.md">FeaturePropertyDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/> 

### Attributes

None.

<br/> 

<br/> 








