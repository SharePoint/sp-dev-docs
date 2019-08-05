---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fcfdc7be-8952-4641-abe0-d3b7f114d378
---

# Modification Element (WorkflowActions)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a workflow modification.

## Definition

```XML
<Actions>
    <Action>
        <Modifications>
            <Modification>
            </Modification>
        </Modifications >
    </Action>
</Actions>
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
<td align="left"><p>**TypeId**</p></td>
<td align="left"><p>Required **text**. Specifies the identifier that is used to activate and deactivate the workflow modification.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NameFormat**</p></td>
<td align="left"><p>Required **text**. Specifies the format of text to display at the beginning of a workflow modification.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FormURN**</p></td>
<td align="left"><p>Required **text**. Specifies the form to display for the workflow modification.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="modifications-element-workflowactions.md">Modifications</a></p></td>
</tr>
</tbody>
</table>


## See also

- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)







