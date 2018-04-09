---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cfefe8e5-2656-4d71-bb4e-5f991a800598
---

# ListInstance Element (List Instance)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies default data with which to provision the given list type.

## Definition

```XML
<ListInstance 
  CustomSchema = string
  Description = "Text"
  DocumentTemplate = integer
  FeatureId = "Text"
  Hidden = "TRUE" | "FALSE"
  HyperlinkBaseUrl = string
  Id = Text
  OnQuickLaunch = "TRUE" | "FALSE"
  QuickLaunchUrl = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  TemplateType = Integer
  Title = "Text"
  Url = "Text"
  VersioningEnabled = "TRUE" | "FALSE"
</ListInstance>
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
<td align="left"><p>**CustomSchema**</p></td>
<td align="left"><p>Optional **string**. Specifies the custom schema to use for the list instance.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Contains a description of the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentTemplate**</p></td>
<td align="left"><p>Optional **string**. Specifies the document template to use for the list instance.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the Feature. If you do not specify a Feature GUID, Microsoft SharePoint Foundation uses the ID of the default Feature, in other words, the one containing the **ListInstance** element. If the list template for the list instance is contained within a different Feature, you must specify the ID of that Feature through the **FeatureId** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if the list is hidden.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HyperlinkBaseUrl**</p></td>
<td align="left"><p>Optional **string**. Specifies the absolute URL used for hyperlinks in the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies a unique identifier for the list instance. The integer must be unique across the Feature definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OnQuickLaunch**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to display lists created from the list definition on the Quick Launch bar.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QuickLaunchUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL of the view page to open for the list through Quick Launch navigation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the list created from the definition exists only in the root website of a site collection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateType**</p></td>
<td align="left"><p>Required **Integer**. Returns the integer identifier of the list template to use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. Title of the list in the schema. This must also be unique.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required **Text**. Returns the site-relative URL at which to place the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**VersioningEnabled**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if versioning is enabled on the list.</p></td>
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
<td align="left"><p><a href="data-element-list-instance.md">Data</a>, <a href="datasource-element-list-instance.md">DataSource Element (List Instance)</a></p></td>
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
<td align="left"><p><a href="elements-element-list-instance.md">Elements</a></p></td>
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

## Remarks

The **ListInstance** Feature element maps to the [List](list-element-list.md) element as used in SharePoint Foundation within the [Configuration](configuration-element-site.md) element in Onet.xml.

## Example

For an example of how this element is used, see [List Instances](list-instances.md).

<br/>








