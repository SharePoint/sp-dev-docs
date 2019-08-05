---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5f06a5ba-0b74-497d-a88c-9a104225c0a5
---

# RemoveFieldRef element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a column reference that is included in the parent content type but is to be removed from this content type.

You need only specify the ID attribute of the **RemoveFieldRef** element. SharePoint Foundation ignores all other attributes of this element.

## Definition

```XML
<RemoveFieldRef
  Aggregation="sum" | "count" | "average" | "min" | "max" | "merge" | "plaintext" | "first" | "last"
  Customization="Text"
  DefaultValue="Text"
  Description="Text"
  DisplayName="Text"
  Format="Text"
  Filterable="TRUE" | "FALSE"
  FilterableNoRecurrence="TRUE" | "FALSE"
  FromBaseType="TRUE" | "FALSE"
  Hidden="TRUE" | "FALSE" | "orResource"
  ID="Text"
  Locked="TRUE" | "FALSE"
  Name="Text"
  Node="Text"
  NumLines="Integer"
  PIAttribute="Text"
  PITarget="Text"
  PrimaryPIAttribute="Text"
  ReadOnly="TRUE" | "FALSE"
  ReadOnlyClient="TRUE" | "FALSE"
  Required="TRUE" | "FALSE"
  Sealed="TRUE" | "FALSE"
  ShowInDisplayForm="TRUE" | "FALSE"
  ShowInEditForm="TRUE" | "FALSE"
  ShowInFileDlg="TRUE" | "FALSE"
  ShowInListSettings="TRUE" | "FALSE"
  ShowInNewForm="TRUE" | "FALSE"
  Sortable="TRUE" | "FALSE" 
  PrimaryPITarget="Text"
/>
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
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Text**. Specifies the field ID of the column to be removed from this content type.</p></td>
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
<td align="left"><p>None.</p></td>
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
<td align="left"><p><a href="fieldrefs-element-contenttype.md">FieldRefs</a></p></td>
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
<td align="left"><p>Minimum: 0</p></td>
</tr>
<tr class="even">
<td align="left"><p>Maximum: No limit</p></td>
</tr>
</tbody>
</table>

### Remarks

If the **RemoveFieldRef** element specifies a column that is not included in the parent content type, SharePoint Foundation disregards the element.

## Example

The following example shows **RemoveFieldRef** elements specifying several columns to remove from a content type.

```XML
    <FieldRefs>
      <RemoveFieldRef ID="{67df98f4-9dec-48ff-a553-29bece9c5bf4}" Name="Attachments" /> <!-- Attachments -->
      <RemoveFieldRef ID="{f1e020bc-ba26-443f-bf2f-b68715017bbc}" Name="WorkflowVersion" /> <!-- WorkflowVersion -->
      <RemoveFieldRef ID="{bc91a437-52e7-49e1-8c4e-4698904b2b6d}" Name="LinkTitleNoMenu" /> <!-- LinkTitleNoMenu -->
      <RemoveFieldRef ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" Name="LinkTitle" /> <!-- LinkTitle -->
      <RemoveFieldRef ID="{ae069f25-3ac2-4256-b9c3-15dbc15da0e0}" Name="GUID" /> <!-- GUID -->
      <RemoveFieldRef ID="{de8beacf-5505-47cd-80a6-aa44e7ffe2f4}" Name="WorkflowInstanceID" /> <!-- WorkflowInstanceID -->
    </FieldRefs>
```

## See also

- [Content Type Definitions](content-type-definitions.md)
- [Content Types](http://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)
- [Fields and Field References](http://msdn.microsoft.com/library/6b536c1a-719c-4203-8006-c162de199bfc(Office.15).aspx)
- [FieldRef element (ContentType)](fieldref-element-contenttype.md)








