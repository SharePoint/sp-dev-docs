---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
keywords:
- customizing site definitions,site definition configurations [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8c873040-28c8-4fa9-a411-6638af47131b
---

# Template Element (WorkflowConfig)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the information necessary for a declarative rules-based, code-free workflow editor, such as Microsoft SharePoint Designer 2010, to generate a workflow template in SharePoint Foundation.

## Definition

```
<Template
  BaseID="Text"
  DocLibID="Text"
  XomlID="Text" | "Integer"
  XomlHref="Text"
  XomlVersion="Text"
  RulesID="Text" | "Integer"
  RulesHref="Text"
  RulesVersion="Text"
>
</Template>
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
<td align="left"><p>**DocLibID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the document library that contains the workflow markup (.xoml) file and, if necessary, the rules markup (xoml.rules) file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**BaseID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID used to uniquely identify this workflow. The BaseID is the same for all versions of the workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**XomlID**</p></td>
<td align="left"><p>Optional **Integer**. An optional way to uniquely identify the workflow markup file. This attribute must equal the ID property of the item in the document library.</p>
<p>If present, this attribute is used, rather than the **XomlHref** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**XomlVersion**</p></td>
<td align="left"><p>Required **Text**. Specifies the version of the workflow markup file to use when creating an instance of this workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**XomlHref**</p></td>
<td align="left"><p>Required **Text**. Specifies the path to the workflow markup file. The path specified must be relative to the location of the workflow configuration file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RulesID**</p></td>
<td align="left"><p>Optional **Integer**. An optional way to uniquely identify the workflow rules file. This attribute must equal the ID property of the item in the document library.</p>
<p>If present, this attribute is used, rather than the **RulesHref** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RulesVersion**</p></td>
<td align="left"><p>Required **Text**. Specifies the version of the workflow rules file, in there is one, to use when creating an instance of this workflow.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RulesHref**</p></td>
<td align="left"><p>Required **Text**. Specifies the path to the workflow rules markup file. The path specified must be relative to the location of the workflow configuration file.</p></td>
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
<td align="left"><p>None.</p></td>
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

Applications created to work as a declarative rules-based, code-free workflow editor can use the <span sdata="cer" target="M:websvcWebPartPages.WebPartPagesWebService.AssociateWorkflowMarkup(System.String,System.String ">**AssociateWorkflowMarkup(String, String)**</span> method of the <span sdata="cer" target="N:websvcWebPartPages">**websvcWebPartPages**</span> Web Service to create a workflow template and associate it to a SharePoint list specifying a workflow markup file, a workflow configuration file, and optionally, a workflow rules markup file.

For more information about creating an application that can act as a declarative rules-based, code-free workflow editor, see [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx).

## Example

The following example shows a Template element for a workflow configuration.

```XML 
    <Template
        BaseID="{68B99644-EDCE-4988-9D11-7FD5CCAE09CC}"
        DocLibID="{74FAE22C-0176-46DF-AA12-988CE79C8889}"
        XomlHref="Workflows/Notify Me/Notify Me.xoml"
        XomlVersion="V3.0"
        RulesHref="Workflows/Notify Me/Notify Me.xoml.rules"
        RulesVersion="V3.0"
    >
```

## See also

- [Workflow configuration schema reference](workflow-configuration-schema-reference.md)
- [Workflow Development for Windows SharePoint Services](https://msdn.microsoft.com/en-us/library/office/ms414613.aspx)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Office SharePoint Designer Overview](https://msdn.microsoft.com/en-us/library/office/ms454098.aspx)








