---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ac058b08-1f33-427b-a102-ea11bdeb9a88
---

# DataSourceRef Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the possible values from [DataSource](datasource-element-workflowinfo.md) elements associated with the [Action](action-element-workflowinfo.md) or [Condition](condition-element-workflowinfo.md) element that is the parent of the **RuleDesigner**. This enables dynamic population of the list of possible values by nesting an **Action** or **Condition** element inside an **Action** or **CompositeStep** element, and passing the list of values from the parent element. If there is more than one **DataSourceRef** element, the list of possible values is the union of the possible values.

## Definition

```XML
<FieldBind>
    <DataSourceRef>
    </DataSourceRef>
</FieldBind>
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
<td align="left"><p>**Ref**</p></td>
<td align="left"><p>Optional **text**. Specifies the internal name of the <a href="datasource-element-workflowinfo.md">DataSource</a> element from which to obtain a list of possible values.</p></td>
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
<td align="left"><p><a href="fieldbind-element-workflowinfo.md">FieldBind</a></p></td>
</tr>
</tbody>
</table>


## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)




