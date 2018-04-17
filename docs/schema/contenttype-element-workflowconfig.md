---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 463c8566-bdf4-4f48-8eb8-13da21933f66
---

# ContentType Element (WorkflowConfig)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a content type for a workflow task type used in the workflow.

## Definition

```XML
<ContentType>
</ContentType>
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
<tr class="even">
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>Required **text**. Specifies the content type ID of the content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Form**</p></td>
<td align="left"><p>Required **text**. Specifies the path to the content type edit form.</p>
<p>The path specified must be relative to the location of the workflow configuration file.</p></td>
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
<td align="left"><p><span sdata="link"><a href="fields-element-workflowconfig.md">Fields Element (WorkflowConfig)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="contenttypes-element-workflowconfig.md">ContentTypes Element (WorkflowConfig)</a></span></p></td>
</tr>
</tbody>
</table>

### Remarks

Each content type defined in the workflow configuration file must be added to the task list specified for the workflow.

Use the TaskListId attribute of the [Association Element (WorkflowConfig)](association-element-workflowconfig.md) element to specify the task list the workflow should use.

For more information about content type IDs, see [Content Type IDs](http://msdn.microsoft.com/library/81fa8d81-c4f5-4750-8f70-811620fdffcf(Office.15).aspx).

The ContentType element allows any additional attributes.

## Example

The following example shows a **ContentTypes** element that contains a single content type for the tasks created in the workflow.

```XML
      <ContentTypes>
        <ContentType 
          Name="Review New Document" 
          ContentTypeID=
            "0x0108010086C115D5C5C27B439C22EB22F050B49B00DD9F97273595EA4BA32838A26054BF08" 
          Form="/Workflows/Notify Me/Review New Document.aspx" 
          Description="Workflow used to review new documents">
          <Fields/>
        </ContentType>
      </ContentTypes>
```

## See also

- [Workflow configuration schema reference](workflow-configuration-schema-reference.md)
- [Workflow Development for Windows SharePoint Services](https://msdn.microsoft.com/en-us/library/office/ms414613.aspx)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Office SharePoint Designer Overview](https://msdn.microsoft.com/en-us/library/office/ms454098.aspx)







