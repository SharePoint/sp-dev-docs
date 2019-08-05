---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4de786d0-a31d-49ec-bf21-efe6160c38d4
---

# InitiationType Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies which events are enabled, at workflow association, to initiate the workflow.

## Definition

```XML
<InitiationType>
</InitiationType>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="metadata-element-workflow.md">MetaData Element (Workflow)</a></p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

### Remarks

The **InitiationType** element takes any of the following values:

- **Manual** Users can manually initiate the workflow.

- **OnNewItem** The workflow is initiated automatically when a user creates a new item.

- **OnItemUpdate** The workflow is initiated automatically when a user updates an item, including updating item metadata.

- **OnMajorCheckin** The workflow initiates when the user attempts to approve publishing a major version of an item.

Specify the initiation types as a character-delimited string, using `";#"` as the delimiting characters.

If you do not specify an **InitiationType** element, SharePoint Foundation treats the workflow as if the **Manual**, **OnNewItem**, and **OnItemUpdate** values have been specified.

## Example

The following example specifies that the workflow can be initiated manually, and is initiated automatically when a user creates an item, updates an item, or checks in a major version of an item.

```XML
    <InitiationType>Manual;#OnNewItem;#OnItemUpdate;#OnMajorCheckIn</InitiationType>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)









