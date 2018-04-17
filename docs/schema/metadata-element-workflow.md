---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- workflow definition schema, metadata element (workflow)
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c454e18c-ea94-4dd1-8081-a25a8acbacef
---

# MetaData Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains any additional, custom metadata elements that are valid XML for the workflow.

## Definition

```XML
<MetaData>
</MetaData>
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
<td align="left"><p><a href="workflow-element-elements.md">Workflow Element (Elements)</a></p></td>
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

SharePoint Foundation uses the following elements to define additional workflow information in the **MetaData** element:

- **InitiationType**

- **Modification\_GUID\_Name**

- **StatusPageUrl**

- **ExtendedStatusColumnValues**

## Example

Following is an example of a **Metadata** element containing information on how the workflow can be initiated, the name of a workflow modification contained in the workflow, and custom status column values.

```XML
      <MetaData>
        <InitiationType>Manual;#OnNewItem;#OnItemUpdate;#OnMajorCheckIn</InitiationType>
        <Modification_af71f77b-e6c8-483a-acbf-30b4a84bd209_Name>myWorkflowModification</Modification_af71f77b-e6c8-483a-acbf-30b4a84bd209_Name>
        <Modification_Format><my:myFields xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:my="http://schemas.adventureworks.com/workflows/myXSD">{0}</my:myFields></Modification_Format>
        <StatusPageUrl>_layouts/myWrkStat.aspx</StatusPageUrl>
        <ExtendedStatusColumnValues>
          <StatusColumnValue>Canceled</StatusColumnValue>
          <StatusColumnValue>Approved</StatusColumnValue>
          <StatusColumnValue>Rejected</StatusColumnValue>
        </ExtendedStatusColumnValues>  
      </MetaData>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)










