---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.ActionParameter
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1f5fa96a-1bff-f007-984d-a644cbbb2648
---

# ActionParameter Element in ActionParameters 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the parameters of a URL-based action. Defines how to parameterize the URL of an action with EntityInstance-specific data.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

The URL attribute of a URL-based action can receive parameters by using the ActionParameter element.

> [!IMPORTANT] 
> **ActionParameters** can either represent identifier values, or values that correspond to **TypeDescriptors** in a **SpecificFinder** of the **Entity**. 
> 
> The **ActionParameter** represents an identifier value when the **IdOrdinal** property is present. The value of the property specifies the index of the identifier whose value this **ActionParameter** represents. If the **IdOrdinal** property is not specified, the **ActionParameter** represents a **TypeDescriptor**, and the **Name** attribute specifies which type descriptor is being represented. The **Name** attribute is specified as a **Dotted Path**.

The **ActionParameter** element accepts the following property.

> [!IMPORTANT] 
> Properties are case-sensitive.

### Properties

<table>
<colgroup>
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Property</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Default Value</p></th>
<th align="left"><p>Limits/Accepted Values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**IdOrdinal**</p></td>
<td align="left"><p>**System.Int32**</p></td>
<td align="left"><p>Specifies if the **ActionParameter** represents an identifier instead of a field.</p></td>
<td align="left"><p>Optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

```XML
<ActionParameter Index = "Integer" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </ActionParameter>
```

<br/>

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Index**</p></td>
<td align="left"><p>Required.</p>
<p>An ordinal attribute that specifies the position of this **ActionParameter** among other **ActionParameters** in the URL.</p>
<p>Attribute type: **Integer**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **ActionParameter**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name for the **ActionParameter**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this **ActionParameter** is used frequently. This attribute is used by the BDC client runtime to cache this **Action**.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized display names for the **ActionParameter**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the **ActionParameter**.</p></td>
</tr>
</tbody>
</table>

<br/>

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>**Element**</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actionparameters-element-in-action-bdcmetadata-schema.md">ActionParameters Element in Action (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The **ActionParameters** element that contains this **ActionParameter**.</p></td>
</tr>
</tbody>
</table>








