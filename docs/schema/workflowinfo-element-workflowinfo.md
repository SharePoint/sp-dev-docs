---
title: WorkflowInfo Element (WorkflowInfo)
description: Describes the WorkflowInfo element (WorkflowInfo) and provides the element's definition, attributes, child elements, and an example.
manager: laurawi
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: e5cbdadc-53c2-4b48-9522-ba41c90bc4ba
---

# WorkflowInfo Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The root element of the Actions schema. This element must be included in any .ACTIONS file that is installed on the server.

## Definition

```XML
<WorkflowInfo>
  <Conditions>…</Conditions>
  <Actions>…</Actions>
</WorkflowInfo>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
| --- | --- |
| **Language** | Refers to the language of the server, not the client. This is notated as a language/culture pair. For example "en-us" is used to specify "English-United States" (see [Locale Identifier Constants and Strings](https://msdn.microsoft.com/library/ms776260.aspx)). |

### Child elements

- [Conditions](conditions-element-workflowinfo.md)

- [Actions](actions-element-workflowinfo.md)

### Parent elements

None

## Example

The following XML demonstrates how to construct the **WorkflowInfo** element so that all custom actions or conditions that it contains are correctly displayed in the workflow editor.

```XML
    <WorkflowInfo language="en-us">
       <Conditions>…</Conditions>
       <Actions>…</Actions>
    </WorkflowInfo>
```

## See also

- [Actions Schema Reference](actions-schema-reference-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/library/office/bb897626.aspx)






