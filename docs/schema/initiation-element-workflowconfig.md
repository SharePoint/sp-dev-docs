---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5aab14eb-fa08-4917-b0d3-5f25626f5509
---

# Initiation Element (WorkflowConfig)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains workflow initiation information, such as the workflow initiation form and the data fields on the initiation form.

## Definition

```
<Initiation URL="Text"
</Initiation>
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
<td align="left"><p>**URL**</p></td>
<td align="left"><p>Required **Text**. Specifies the path to the workflow initiation form for the workflow.</p>
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
<td align="left"><p><span sdata="link"><a href="parameters-element-workflowconfig.md">Parameters Element (WorkflowConfig)</a></span></p>
<p><span sdata="link"><a href="fields-element-workflowconfig.md">Fields Element (WorkflowConfig)</a></span></p></td>
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

The initiation form specified should contain a data field for each [Field Element (Field)](field-element-field.md) element defined in the [Fields Element (WorkflowConfig)](fields-element-workflowconfig.md) section of the workflow configuration file. If a data field is not present, the default value is used when the workflow starts.

After the workflow has been associated with a specific SharePoint list, the contents of the URL attribute are stored in the [InstantiationUrl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowtemplate.instantiationurl.aspx) property of the [SPWorkflowTemplate](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowtemplate.aspx) and [SPWorkflowAssociation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.aspx) objects for the workflow.

Applications created to work as a declarative rules-based, code-free workflow editor can use the **AssociateWorkflowMarkup(String, String)** method of the **websvcWebPartPages** Web Service to create a workflow template and associate it to a SharePoint list specifying a workflow markup file, a workflow configuration file, and optionally, a workflow rules markup file.

For more information about creating an application that can act as a declarative rules-based, code-free workflow editor, see [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx).

## Example

The following example **Initiation** element contains a URL attribute that specifies the location of the workflow initiation form to use for this workflow.

The element also contains a **Fields** element, which in turn contains a **Field** element that defines the single data field on the initiation form. Note that the **Parameters** element contains a corresponding **Parameter** element, with a matching **Name** attribute value that specifies the data type of the **Field** element.

This example has been edited for clarity.

```XML
    <Initiation 
        URL="Workflows/Notify Me/Notify Me.aspx">
      <Fields>
        <Field 
          Name="Reason_for_Review" 
          …
          DisplayName="Reason_for_Review" 
          …
        >
          <Default>Standard review of new documents</Default>
        </Field>
      </Fields>
      <Parameters>
        <Parameter Name="Reason_for_Review" Type="System.String" />
      </Parameters>
    </Initiation>
```

## See also

- [Workflow configuration schema reference](workflow-configuration-schema-reference.md)
- [Workflow Development for Windows SharePoint Services](https://msdn.microsoft.com/en-us/library/office/ms414613.aspx)
- [Office SharePoint Designer Overview](https://msdn.microsoft.com/en-us/library/office/ms454098.aspx)









