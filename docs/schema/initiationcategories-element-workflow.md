---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f294fe90-8a45-4605-a78a-f71d6dffcc10
---


# InitiationCategories Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the categories of applications in which users can initiate this workflow.

## Definition

```XML
<InitiationCategories/>
</InitiationCatagories>
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
<td align="left"><p><a href="metadata-element-workflow.md">MetaData Element (Workflow)</a></p></td>
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

Microsoft SharePoint Foundation 2010 uses the categories specified in this element to display only the appropriate workflows for an application. Specify association categories as a character-delimited list, using the characters `";#"` as delimiters. Each category can be up to 256 characters in length.

Valid values include the following:

- **General** This workflow is available for initiation in any application, including the SharePoint Foundation Web interface.

- **WebClientInit** This workflow can be initiated only through the SharePoint Foundation Web interface.

- **"OtherClientInit;" + progID** This workflow can be initiated only through the application whose program ID is specified.


## Example

The following example specifies that the workflow can only be initiated through the SharePoint Foundation Web interface.

```XML
    <MetaData>
      <InitiationCategories>WebClientInit</InitiationCategories>
    </MetaData>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)









