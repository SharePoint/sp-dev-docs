---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8f42a4a9-8238-48e7-949d-3efd95c44b4c
---

# ContentTypes Element (WorkflowConfig)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the content type definitions for any workflow task types used in the workflow.

## Definition

```
<ContentTypes>
</ContentTypes>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

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

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="contenttype-element-workflowconfig.md">ContentType Element (WorkflowConfig)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="workflowconfig-element.md">WorkflowConfig Element</a></span></p></td>
</tr>
</tbody>
</table>


### Remarks

The workflow task content types defined for workflows should ultimately inherit from the WorkflowTask content type.

Use the TaskListId attribute of the [Association Element (WorkflowConfig)](association-element-workflowconfig.md) element to specify the task list the workflow should use.

For more information about the base content types included with SharePoint Foundation, see [Base Content Type Hierarchy](http://msdn.microsoft.com/library/3fdb242a-504c-4c60-b564-491f760be1c8(Office.15).aspx).

Each content type defined in the workflow configuration file must be added to the task list specified for the workflow.

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
- [Workflow Development for Windows SharePoint Services](http://msdn.microsoft.com/library/ad7a5bf2-fab0-4b30-ae0b-46b15f16b491(Office.15).aspx)
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Office SharePoint Designer 2007 Overview](http://msdn.microsoft.com/library/5ef4e933-564e-4dea-b2f4-c1b621774969(Office.15).aspx)







