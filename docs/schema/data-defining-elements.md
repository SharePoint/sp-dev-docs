---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e873b640-c1ee-436a-81ef-ae8f6a439e61
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
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
<td align="left"># Data-Defining Elements</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Collaborative Application Markup Language (CAML) has two major kinds of
elements: those for page rendering, and those for field rendering and
schema definition. The CAML field rendering elements are designed for
use when rendering individual field values. These can appear in field
type definitions or, more commonly, in
[FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx)
at <span class="code">\\\\Program Files\\Common Files\\Microsoft
Shared\\web server extensions\\12\\TEMPLATES\\XML</span>.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A field is a column or an attribute containing information that a user
can add to a list. Each list on a Web site based on Microsoft SharePoint
Foundation has metadata stored in the database. The format of the schema
is an XML structure, such as the following:

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Fields>
      <Field Type="Counter" Name="ID"/>
      ...other field definitions...
    </Fields>

To simplify the implementation of the various field types, and to allow
for a higher degree of flexibility in rendering the various fields,
[FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx)
contains information about the rendering and behavior of each field
type. The [Field](field-element-list.md) element
renders different HTML depending on the data type of the field in
question, and FldTypes.xml defines the data types and rendering patterns
for each kind of field. The following table presents the schema used in
this file.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Name</p></th>
<th align="left"><p>Data type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Column2Suffix**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Contains text to append to base column name to derive **ColumnName2</span> from **ColumnName</span> (for two-column fields such as **URL**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Contains the HTML template for rendering the field in the display mode of a view or a form.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EditPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Contains the HTML template for generating the Edit form control to edit the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HeaderPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Contains the HTML template for displaying the heading of a table view column.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**InternalType**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Determines both the behavior of the **Column</span> element in rendering data from the SharePoint Foundation database and how data is posted back to the database. Can be one of the following values: **Text</span>, **Note</span>, **Number</span>, **Currency</span>, **Integer</span>, **Boolean</span>, **DateTime</span>, **Threading</span>, **Lookup</span>, **Choice</span>, **URL</span>, **Counter</span>, or **DisplayOnly</span>. Note that a **DisplayOnly** field type has no storage of its own.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Contains the name of the internal data type as referenced in a Type attribute of the Field element: <span class="code"><Field Type="Name"/></span>. Examples are **Text</span>, **Note</span>, **Number**, etc.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NewPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Contains the HTML template for generating the New form for editing the initial value of a field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PreviewDisplayPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Specifies how fields are rendered when a display form is edited in Microsoft SharePoint Designer.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PreviewEditPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Specifies how fields are rendered when an edit form is edited in Microsoft SharePoint Designer.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PreviewNewPattern**</p></td>
<td align="left"><p>**Note**</p></td>
<td align="left"><p>Specifies how fields are rendered when a new form is edited in Microsoft SharePoint Designer.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sortable**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Specifies whether a field can be sorted. Can be **TRUE</span> or **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TypeName**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Specifies a name in the definition of a field type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SQLType**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Determines the underlying SQL data type for the given field. Examples are nvarchar(255), memo, integer, float. Used to generate the appropriate SQL (CREATE TABLE) for creation of a field of this type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SQLType2**</p></td>
<td align="left"><p>**Text**</p></td>
<td align="left"><p>When not blank, gives the type of a secondary column to create for the current field (see URL field type, for example).</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Each of the display modes (**Display**, <span
class="keyword">Edit</span>, and **New**)
contains a definition of how to render each of the field data types that
are supported by SharePoint Foundation.

For each display mode there is a display pattern, or CAML-rendering
expression. Some CAML elements are used specifically in display
patterns. Others can be used in either context, for page rendering or
for field rendering, but are used primarily in rendering fields. The
following intrinsic CAML-rendering elements are used to build templates
that can include both static HTML and data, as well as metadata of the
field being rendered.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="column-element-view.md">Column</a></p></td>
<td align="left"><p>Returns the raw data value for a particular field.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="column2-element-view.md">Column2</a></p></td>
<td align="left"><p>Used in rendering a Link field type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="escape-element.md">Escape</a></p></td>
<td align="left"><p>Used to escape certain characters in strings.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fieldfilteroptions-element.md">FieldFilterOptions</a></p></td>
<td align="left"><p>Used in the **HeaderPattern** sections of <a href="http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx">FldTypes.xml</a> to display filter drop-down menus.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fieldprefix-element-view.md">FieldPrefix</a></p></td>
<td align="left"><p>Returns the Microsoft Office namespace, "urn:schemas-microsoft-com:office:office#".</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="http://msdn.microsoft.com/library/1fec6304-0e3a-455a-a94d-df3232bb77a7(Office.15).aspx">FieldRef</a></p></td>
<td align="left"><p>Used in computed fields to refer to the constituent fields and in views to define what fields are present.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fieldsortimageurl-element.md">FieldSortImageURL</a></p></td>
<td align="left"><p>Returns the URL to the image file used to indicate how a column is sorted.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fieldsortparams-element-view.md">FieldSortParams</a></p></td>
<td align="left"><p>Returns the sort direction on a list, rendering **Asc</span> or **Desc** based on whether the field has been sorted, and the current default sort direction for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="ifequal-element-view.md">IfEqual</a></p></td>
<td align="left"><p>Allows for conditional rendering based on the comparison of two CAML expressions.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ifnew-element-view.md">IfNew</a></p></td>
<td align="left"><p>Returns **TRUE** if the item is considered new.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="imagespath-element.md">ImagesPath</a></p></td>
<td align="left"><p>Returns the HTTP path to the images directory for the project.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="limit-element-view.md">Limit</a></p></td>
<td align="left"><p>Truncates text to a specified size.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="localeinfo-element.md">LocaleInfo</a></p></td>
<td align="left"><p>Transfers server locale information to the client in order to display and edit dates and numbers properly.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pageurl-element-view.md">PageUrl</a></p></td>
<td align="left"><p>Used anywhere to return the absolute, encoded URL of the current page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="property-element-view.md">Property</a></p></td>
<td align="left"><p>Returns the property from the current **ForEach** context.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="scriptquote-element-view.md">ScriptQuote</a></p></td>
<td align="left"><p>Used for rendering text from the server that must be interpreted as a quoted string.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="todayiso-element.md">TodayISO</a></p></td>
<td align="left"><p>Renders today's date and time in ISO format.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

[HTML-Rendering
Elements](html-rendering-elements.md)</span>








