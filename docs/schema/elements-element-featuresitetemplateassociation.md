---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f70b3c4a-f9f4-43f0-8828-0d09d92a9cd3
---

# Elements Element (FeatureSiteTemplateAssociation)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Top-level element in a Feature manifest file that contains Feature element declarations.

## Definition

```XML
<Elements
  Id = "Text">
    <FeatureSiteTemplateAssociation
      Id = "Text"
      TemplateName = "Text">
    ...
    </FeatureSiteTemplateAssociation>
  ...
</Elements>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies a unique identifier for the Feature manifest file.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="featuresitetemplateassociation-element-featuresitetemplateassociation.md">FeatureSiteTemplateAssociation</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

None


## Example

For an example of how this element is used, see [Feature/Site Template Associations](feature-site-template-associations.md).








