---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Property Bag Schema
ms.assetid: f249df32-1c9a-4d60-96e7-a97f0dd8f5f4
---

# PropertyBag Element (Property Bag)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the properties in the property bag for the list item, file, folder, or website.

## Definition

```XML
<PropertyBag
  HyperlinkBaseUrl = "Text"
  ItemIndex = "Text"
  ParentType = "PropertyBagParentTypeDefinition"
  RootWebOnly = "Text"
  Url = "Text">

  <Property  ... />
</ PropertyBag >
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
<td align="left"><p>**HyperlinkBaseUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies an absolute URL to use as the base URL for hyperlinks.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ItemIndex**</p></td>
<td align="left"><p>Optional **Text**. Specifies the ID of the list item. This attribute is used only when **ParentType** is "ListItem".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentType**</p></td>
<td align="left"><p>Required **PropertyBagParentTypeDefinition** enumeration. Must be one of **File**, **Folder**, **ListItem**, or **Web**. Specifies the kind of object to which the property bag belongs.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **TRUE/FALSE**. Indicates whether the parent object must be the site collection's top-level site when the **ParentType** attribute is "Web". This attribute is not used with any other **ParentType** value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text**. The site-relative URL of the parent object to which the property bag belongs, except when **ParentType** is "ListItem". In that case, this attribute specifies the site-relative URL of the list, not the list item.</p></td>
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
<td align="left"><p><a href="property-element-property-bag.md">Property</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elements-element-property-bag.md">Elements</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>

## Example

For an example of how this element is used, see [Property Bag Schema](property-bag-schema.md).








