---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3f9c266e-6d4c-4984-9517-6828b79b1062
---

# DataSource Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the sources of data for an action or composite step.

## Definition

```XML
<DataSource>
    <SchemaSource>
    </SchemaSource>
    <Evaluation>
    </Evaluation>
</DataSource>
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
<td align="left"><p>**InternalName**</p></td>
<td align="left"><p>Required **text**. Specifies the internal name for the data source for a reference from a <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **text**. Specifies a localizable display name for the data source.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NameProperty**</p></td>
<td align="left"><p>Required **text**. Specifies how to differentiate the user interface (UI) elements defined in a **DataSource** element. If the value begins with "Parent.", the value is retrieved from the parent of the action or composite step that declares the **DataSource** element.</p></td>
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
<td align="left"><p><a href="schemasource-element-workflowinfo.md">SchemaSource</a></p>
<p><a href="evaluation-element-workflowinfo.md">Evaluation</a></p></td>
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
<td align="left"><p><a href="action-element-workflowinfo.md">Action</a></p>
<p><a href="compositestep-element-workflowinfo.md">CompositeStep</a></p></td>
</tr>
</tbody>
</table>

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)








