---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2ef32bbe-06b8-4bba-bba7-86e457579eaf
---

# CustomActionGroup Element (Custom Action)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the core definition for a grouping of custom actions.

## Definition

```XML
<CustomActionGroup
  Description = "Text"
  Id = "Text"
  Location = "Text"
  Sequence = "Integer"
  Title = "Text">
</CustomActionGroup>
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
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Specifies a longer description that is exposed as a sub-description for the action group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies a unique identifier for the element. The ID may be a GUID, or it may be a unique term, for example,</p>
<p>`"SiteManagement"`. See <a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a> for a list of the default custom action group IDs that are used in SharePoint Foundation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Required **Text**. Specifies a value for where the action lives. This string is a name that is declared on the **LinkSectionTable** control within a page. See <a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a> for a list of the default custom action group locations that are used in SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the ordering priority for the action group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. Specifies the end user description for the action group.</p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><a href="elements-element-custom-action.md">Elements</a></p></td>
</tr>
</tbody>
</table>

### Remarks

To ensure that a custom action group section is displayed within a link section table, supply additional custom actions outside this element.

## See also

- [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md)








