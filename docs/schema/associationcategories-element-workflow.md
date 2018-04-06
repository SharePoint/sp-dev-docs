---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- workflow definition schema, associationcategories element
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4296c120-5ebc-4b22-97cd-214146d5a65e
---

# AssociationCategories Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the categories of list and content types to which you can associate this workflow.

## Definition

```XML
<AssocationCategories/>
</AssociationCatagories>
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

SharePoint Foundation uses the categories specified in this element to display only the appropriate workflows for a list or content type. Specify association categories as a character-delimited list, using the characters `";#"` as delimiters. Each category can be up to 256 characters in length.

Valid values include the following:

- **General** This workflow can be associated to any list or content type.

- **"List;" + featureID + ";" + listID**  The workflow can be associated with a specific list type, defined in the specified feature. For example:

    `List;29d85c25-170c-4df9-a641-12db0b9d4130;1300`

- **"ContentType;" +contentTypeID** The workflow can be associated with a specific content type. For example:

    `ContentType;0x01010029d85c25-170c-4df9-a641-12db0b9d4130`

## Example

The following example specifies that the workflow can be associated with lists of list type 1300, which is defined in feature **29d85c25-170c-4df9-a641-12db0b9d4130**.

```XML
    <MetaData>
      <AssociationCategories>List;29d85c25-170c-4df9-a641-12db0b9d4130;1300</AssociationCategories>
    </MetaData>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)








