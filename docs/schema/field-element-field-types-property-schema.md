---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: e63ac515-9eb9-4fa4-bc34-2db37d4dec76
---

# Field Element (Field Types Property Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

> [!IMPORTANT] 
> This topic describes markup that was used in an obsolete method of rendering custom field type properties. It is provided solely to assist with the debugging of custom field type properties developed against earlier versions of SharePoint Foundation. For information about the recommended method, see [Custom Field Type Property Rendering](https://msdn.microsoft.com/en-us/library/ms472859(v=office.14).aspx).

Represents a variable property of a custom field type that is set when a column based on the field type is created.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Field
  Name="Text" 
  DisplayName="Text" 
  MaxLength="Integer" 
  DisplaySize="Integer" 
  Type="Text"&gt;
&lt;/Field&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text</span>. The name of the property of the field type that the **Field** element represents.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **Text**. The name of the property that appears in the UI when a column based on the field type is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MaxLength**</p></td>
<td align="left"><p>Required **Text**. The maximum length, in characters, of the property's value.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplaySize**</p></td>
<td align="left"><p>Required **Text**. The length, in characters, of the control that holds the property value in the UI.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **Text**. The underlying data type of the property's value.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="default-element-field-types-property-schema.md">Default Element (Field Types Property Schema)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fields-element-field-types-property-schema.md">Fields Element (Field Types Property Schema)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For a detailed description and example of this element in context, see [PropertySchema Element (Field Types)](propertyschema-element-field-types.md).

<br/>

## See also

- [Custom Field Types](https://msdn.microsoft.com/en-us/library/ms446361(v=office.14).aspx)
- [Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069(Office.15).aspx)
- [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a(Office.15).aspx)
- [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx)








