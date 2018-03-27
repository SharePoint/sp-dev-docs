---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 53176171-c597-47a0-8b34-b064c415d9df
---

# Field Types schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Field Types XML markup is used to define information about a field that is needed to render the field in the UI and in visual designers, regardless of whether the rendering is done by a user control (ASCX), an XSLT template, or a (now obsolete) RenderPattern. 

For more information about how the elements are used, see [Custom Field Type Definition](https://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx) and [FldTypes.xml](https://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx).

The following is a list of the elements included in the field type definition. Select the element name for detailed information about that element.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>  &lt;<span sdata="link"><a href="fieldtypes-element-field-types.htm">FieldTypes Element (Field Types)</a></span>&gt;</p></td>
<td align="left"><p>The top level container element for the fldtypesDOCS-ASTERISK.xml file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>    &lt;<span sdata="link"><a href="fieldtype-element-field-types.htm">FieldType Element (Field Types)</a></span>&gt;</p></td>
<td align="left"><p>The top level container element for a field type definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>      &lt;<span sdata="link"><a href="field-element-field-types.htm">Field Element (Field Types)</a></span>&gt;</p></td>
<td align="left"><p>An element that represents a single characteristic of the field type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>      &lt;<span sdata="link"><a href="propertyschema-element-field-types.htm">PropertySchema Element (Field Types)</a></span>&gt;</p></td>
<td align="left"><p>An element that defines <em>variable field type properties</em>. Obsolete.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>        &lt;<span sdata="link"><a href="fields-element-field-types-property-schema.htm">Fields Element (Field Types Property Schema)</a></span>&gt;</p></td>
<td align="left"><p>The top-level container element within a **PropertySchema** element. Obsolete.</p></td>
</tr>
<tr class="even">
<td align="left"><p>          &lt;<span sdata="link"><a href="field-element-field-types.htm">Field Element (Field Types)</a></span>&gt;</p></td>
<td align="left"><p>An element that represents a variable property of a custom field type that is set when a column based on the field type is created. Obsolete.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>            &lt;<span sdata="link"><a href="default-element-field-types-property-schema.htm">Default Element (Field Types Property Schema)</a></span>&gt;</p></td>
<td align="left"><p>An element that represents the default value of a property of a custom field type. Obsolete.</p></td>
</tr>
<tr class="even">
<td align="left"><p>      &lt;<span sdata="link"><a href="renderpattern-element-field-types.htm">RenderPattern Element (Field Types)</a></span>&gt;</p></td>
<td align="left"><p>An element that defines how the field is rendered in certain circumstances. Obsolete.</p></td>
</tr>
</tbody>
</table>








 