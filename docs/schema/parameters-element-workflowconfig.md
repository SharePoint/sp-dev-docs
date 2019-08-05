---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 28c73384-447e-45ba-99a5-31ab32ee286a
---

# Parameters Element (WorkflowConfig)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of the parameters for the workflow initiation form.

## Definition

```XML
<Parameters>
</Parameters>
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
<td align="left"><p><span sdata="link"><a href="parameter-element-workflowconfig.md">Parameter Element (WorkflowConfig)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="initiation-element-workflowconfig.md">Initiation Element (WorkflowConfig)</a></span></p></td>
</tr>
</tbody>
</table>

### Remarks

For each [Field Element (Field)](field-element-field.md) element contained in the [Fields Element (WorkflowConfig)](fields-element-workflowconfig.md) element, there must be a corresponding [Parameter Element (WorkflowConfig)](parameter-element-workflowconfig.md) element, in the Parameters element, with a matching Name attribute. The [Parameter Element (WorkflowConfig)](parameter-element-workflowconfig.md) element specifies the System data type of the field.

The [Fields Element (WorkflowConfig)](fields-element-workflowconfig.md) element contains a collection of [Field Element (Field)](field-element-field.md) elements. Each
[Field Element (Field)](field-element-field.md) element represents a data field on the workflow initiation form.

The [Parameter Element (WorkflowConfig)](parameter-element-workflowconfig.md) element also represents a workflow variable of the same name. When the user submits the workflow initiation form, SharePoint Foundation passes the value specified for each parameter to the workflow instance as part of the [InitiationData](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowactivationproperties.initiationdata.aspx) property.

Use the URL attribute of the [Initiation Element (WorkflowConfig)](initiation-element-workflowconfig.md) element to specify the path to the workflow initiation form for the workflow.

## Example

The following example Initiation element contains a URL attribute that specifies the location of the workflow initiation form to use for this workflow.

The element also contains a Fields element, which in turn contains a Field element that defines the single data field on the initiation form. Note that the Parameters element contains a corresponding Parameter element, with a matching Name attribute value, that specifies the data type of the Field element.

This example has been edited for clarity.

```XML
    <Initiation 
        URL="Workflows/Notify Me/Notify Me.aspx">
      <Fields>
        <Field 
          Name="Reason_for_Review" 
          …
          DisplayName="Reason for Review" 
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
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Office SharePoint Designer Overview](https://msdn.microsoft.com/en-us/library/office/ms454098.aspx)








