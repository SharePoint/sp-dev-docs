---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- workflow definition schema, modification_guid_name element (workflow)
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ca629084-42d0-4e22-9559-34ed1158b30a
---

# Modification_GUID_Name Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents the name of the modification form, where GUID represents the actual unique identifier assigned to the modification form.

## Definition

```XML
<Modification_GUID_Name>
</Modification_GUID_Name>
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

The modification name is displayed as the link text for the modification link on the workflow status page.

To specify a modification form, you must first set the <span sdata="cer" target="P:Microsoft.SharePoint.WorkflowActions.EnableWorkflowModification.ModificationId"><span class="nolink">ModificationId</span></span> property of the <span sdata="cer" target="T:Microsoft.SharePoint.WorkflowActions.EnableWorkflowModification"><span class="nolink">EnableWorkflowModification</span></span> activity to the GUID you generated for your modification form. You can have multiple modifications available in your workflow; you must assign each modification a unique identifier.

## Example

The following example specifies a modification name of **Add a New Reviewer**. This link text is displayed for this modification on the workflow status page.

```XML
    <Modification_af71f77b-e6c8-483a-acbf-30b4a84bd209_Name>
      Add a New Reviewer
    </Modification_af71f77b-e6c8-483a-acbf-30b4a84bd209_Name>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)










