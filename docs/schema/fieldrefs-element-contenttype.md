---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, fieldrefs element
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e7a61a08-dd2a-4ce8-8e1b-d4fbbdc4749d
---

# FieldRefs Element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of column references included in the content type.

## Definition

```XML
<FieldRefs>
</FieldRefs>
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
<td align="left"><p>**None**</p></td>
<td align="left"><p></p></td>
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
<td align="left"><p><a href="fieldref-element-contenttype.md">FieldRef</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="removefieldref-element-contenttype.md">RemoveFieldRef</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="http://msdn.microsoft.com/library/a4ae965b-6ac7-41f6-9a11-47f3d2b06cd0(Office.15).aspx">DocumentTemplate</a></p></td>
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
<td align="left"><p><a href="contenttype-element-contenttype.md">ContentType</a></p></td>
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
<td align="left"><p>Minimum: 1</p></td>
</tr>
<tr class="even">
<td align="left"><p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

### Remarks

The **FieldRefs** element contains a collection of [FieldRef](fieldref-element-contenttype.md) elements. The **FieldRef** element is a reference to a column defined elsewhere, either at the site or list level. In the field reference, you can override a subset of the column properties, such as the following:

- Display name

- XML promotion and demotion attributes

- Whether the field is read-only, required, or hidden

Changing these properties in the field reference only changes them as they apply to the specific content type that contains the field reference.

> [!NOTE] 
> The order in which **FieldRef** elements are listed determines the order of fields shown on NewForm.aspx.

The [DocumentTemplate](http://msdn.microsoft.com/library/a4ae965b-6ac7-41f6-9a11-47f3d2b06cd0(Office.15).aspx)
child element is obsolete. Instead use the [DocumentTemplate](documenttemplate-element-contenttype.md) element
that is a child of the [ContentType](contenttype-element-contenttype.md) element.

For more information about field references, see [Fields and Field References](http://msdn.microsoft.com/library/6b536c1a-719c-4203-8006-c162de199bfc(Office.15).aspx).


## Example

The following example shows the field references collection for the Document content type.

```XML
    <ContentType ID="0x0101"
        Name="$Resources:Document"
        Group="$Resources:Document_Content_Types"
        Description="$Resources:DocumentCTDesc"
        V2ListTemplateName="doclib"
        Version="0">
        <FieldRefs>
            <RemoveFieldRef ID="{67df98f4-9dec-48ff-a553-29bece9c5bf4}" Name="Attachments" /> <!-- Attachments -->
            <RemoveFieldRef ID="{f1e020bc-ba26-443f-bf2f-b68715017bbc}" Name="WorkflowVersion" /> <!-- WorkflowVersion -->
            <RemoveFieldRef ID="{bc91a437-52e7-49e1-8c4e-4698904b2b6d}" Name="LinkTitleNoMenu" /> <!-- LinkTitleNoMenu -->
            <RemoveFieldRef ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" Name="LinkTitle" /> <!-- LinkTitle -->
            <RemoveFieldRef ID="{ae069f25-3ac2-4256-b9c3-15dbc15da0e0}" Name="GUID" /> <!-- GUID -->
            <RemoveFieldRef ID="{de8beacf-5505-47cd-80a6-aa44e7ffe2f4}" Name="WorkflowInstanceID" /> <!-- WorkflowInstanceID -->
            <FieldRef ID="{5f47e085-2150-41dc-b661-442f3027f552}" Name="SelectFilename" /> <!-- SelectFilename -->
            <FieldRef ID="{8553196d-ec8d-4564-9861-3dbe931050c8}" Name="FileLeafRef" Required="TRUE"/> <!-- FileLeafRef -->
            <FieldRef ID="{8c06beca-0777-48f7-91c7-6da68bc07b69}" Name="Created" Hidden="TRUE" /> <!-- Created -->
            <FieldRef ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Name="Title" Required="FALSE" ShowInNewForm="FALSE" ShowInEditForm="TRUE"/> <!-- Title -->            
            <FieldRef ID="{28cf69c5-fa48-462a-b5cd-27b6f9d2bd5f}" Name="Modified"  Hidden="TRUE" /> <!-- Modified -->
            <FieldRef ID="{822c78e3-1ea9-4943-b449-57863ad33ca9}" Name="Modified_x0020_By" Hidden="FALSE"/> <!-- Modified_x0020_By -->
            <FieldRef ID="{4dd7e525-8d6b-4cb4-9d3e-44ee25f973eb}" Name="Created_x0020_By" Hidden="FALSE" /> <!-- Created_x0020_By -->
         </FieldRefs>
        <XmlDocuments>
            <XmlDocument NamespaceURI="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms">
                <FormTemplates xmlns="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms">
                    <Display>DocumentLibraryForm</Display>
                    <Edit>DocumentLibraryForm</Edit>
                    <New>DocumentLibraryForm</New>
                </FormTemplates>
            </XmlDocument>
        </XmlDocuments>
    </ContentType>
```

## See also

- [Content Type Definitions](content-type-definitions.md)
- [Content Types](http://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)









