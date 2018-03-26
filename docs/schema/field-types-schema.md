---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 53176171-c597-47a0-8b34-b064c415d9df
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># Field Types schema</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Field Types XML markup is used to define information about a field that
is needed to render the field in the UI and in visual designers,
regardless of whether the rendering is done by a user control (ASCX), an
XSLT template, or a (now Obsolete) <span
class="keyword">RenderPattern</span>. For more information on how the
elements are used, see [Custom Field Type
Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx)
and
[FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx).


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following is a list of the elements included the field type
definition. Click the element name for detailed information about that
element.

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








