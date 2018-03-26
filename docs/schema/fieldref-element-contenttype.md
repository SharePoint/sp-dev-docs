---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, fieldref element
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1b4c2bfa-7a75-4143-bf7f-050509e4607d
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
<td align="left"># FieldRef Element (ContentType)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Specifies a column to reference in this content type.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;FieldRef
  Aggregation=&quot;sum&quot; | &quot;count&quot; | &quot;average&quot; | &quot;min&quot; | &quot;max&quot; | &quot;merge&quot; | &quot;plaintext&quot; | &quot;first&quot; | &quot;last&quot;
  Customization=&quot;Text&quot;
  DefaultValue=&quot;Text&quot;
  Description=&quot;Text&quot;
  DisplayName=&quot;Text&quot;
  Format=&quot;Text&quot;
  Filterable=&quot;TRUE&quot; | &quot;FALSE&quot;
  FilterableNoRecurrence=&quot;TRUE&quot; | &quot;FALSE&quot;
  FromBaseType=&quot;TRUE&quot; | &quot;FALSE&quot;
  Hidden=&quot;TRUE&quot; | &quot;FALSE&quot; | &quot;orResource&quot;
  ID=&quot;Text&quot;
  Locked=&quot;TRUE&quot; | &quot;FALSE&quot;
  Name=&quot;Text&quot;
  Node=&quot;Text&quot;
  NumLines=&quot;Integer&quot;
  PIAttribute=&quot;Text&quot;
  PITarget=&quot;Text&quot;
  PrimaryPIAttribute=&quot;Text&quot;
  PrimaryPITarge=&quot;Text&quot;
  ReadOnly=&quot;TRUE&quot; | &quot;FALSE&quot;
  ReadOnlyClient=&quot;TRUE&quot; | &quot;FALSE&quot;
  Required=&quot;TRUE&quot; | &quot;FALSE&quot;
  Sealed=&quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInDisplayForm=&quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInEditForm=&quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInFileDlg=&quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInListSettings=&quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInNewForm=&quot;TRUE&quot; | &quot;FALSE&quot;
  Sortable=&quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/FieldRef&gt;</code></pre></td>
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
<td align="left"><p>**Aggregation**</p></td>
<td align="left"><p>If you use the **Node</span> attribute to specify an XPath expression that returns a collection of values, you can also include an <span class="keyword">Aggregation** attribute that specifies the action to take on the value set that is returned.</p>
<p>This action can be either an aggregation function or an indication of the particular element within the collection.</p>
<p>Possible values include the following:</p>
<ul>
<li><p>sum</p></li>
<li><p>count</p></li>
<li><p>average</p></li>
<li><p>min</p></li>
<li><p>max</p></li>
<li><p>merge</p></li>
<li><p>plaintext   Converts node text content into plain text.</p></li>
<li><p>first   Applies property promotion and demotion to the first element in the collection.</p></li>
<li><p>last   Applies property promotion and demotion to the last element in the collection.</p></li>
</ul>
<p>For more information about how the **Node</span>, <span class="keyword">PIAttribute</span>, <span class="keyword">PITarget</span>, <span class="keyword">Primary</span><span class="keyword">PIAttribute</span>, and <span class="keyword">PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Customization**</p></td>
<td align="left"><p>Optional **Text**. A string in Collaborative Application Markup Language (CAML) that defines custom field properties.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultValue**</p></td>
<td align="left"><p>Obsolete.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides the description that is shown in the edit form for a list if a column description is specified. By default, columns in SharePoint Foundation do not have descriptions.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **Text**. The displayed name for the column. Maximum length is 255 characters.</p>
<p>The value of this attribute is used as a column heading when the field is displayed in a table view and as a form label when the field is displayed in a form. You use the **DisplayName** attribute to change the display name to a value that is different from the name that is defined on the field itself.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Format**</p></td>
<td align="left"><p>Optional **Text**. Specifies the formatting to be used for numerical values.</p>
<p>For date/time columns, the following values are possible:</p>
<ul>
<li><p>DateOnly   Only display (and allow edits to) the date portion (the time portion is set to 12:00 A.M. for all edited values).</p></li>
<li><p>DateTime   Display and edit both date and time of day (default).</p></li>
<li><p>ISO8601   Display date and time in ISO8601 time format converted to UTC: YYYY-MM-DDTHH:MM:SSZ.</p>
<p>This is the format used for document properties in the Microsoft Office system, as well as for the standard interchange format used in Microsoft SharePoint Foundation between New and Edit forms and the server.</p></li>
<li><p>ISO8601Basic   Use the abbreviated form of 8601 date/time formats: YYYYMMDDTHHMMSSZ.</p>
<p>This is the format used for vCard/iCal.</p></li>
</ul>
<p>For **Choice</span> fields, this attribute can be set to <span class="keyword">Dropdown</span> (default), which provides editing options through a drop-down selection, or to <span class="keyword">RadioButtons**, which provides options through a group of radio buttons.</p>
<p>For URL fields, this attribute can be set to **Hyperlink</span> (default), which displays the URL as a normal &lt;A&gt; tag, or to <span class="keyword">Image**, which displays the URL as &lt;IMG SRC=&quot;URL&quot; ALT=&quot;Description&quot;&gt;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Filterable**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to define the column as filterable.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FilterableNoRecurrence**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to define the column as filterable with no recurring values.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FromBaseType**</p></td>
<td align="left"><p>Optional **Boolean</span>. This attribute has been deprecated in favor of the <span class="keyword">Sealed** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. If <span class="keyword">TRUE</span>, the field is completely hidden from the user interface. Setting <span class="keyword">ReadOnly</span> to <span class="keyword">TRUE</span> means the field is not displayed in <span class="keyword">New</span> or <span class="keyword">Edit** forms but can still be included in views.</p>
<p>If you do not include this attribute, SharePoint Foundation treats the column as if the attribute was set to **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the field ID of the column that this <span class="keyword">FieldRef** element references. The field ID is the string representation of a GUID, including braces. The value is case sensitive.</p>
<p>You can find the IDs for built-in fields in the file <span class="code">fieldswss.xml</span> located on the following path: %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\FEATURES\fields.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Locked**</p></td>
<td align="left"><p>Obsolete.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. The name of a column. This is the internal name of a column and is guaranteed never to change for the lifetime of the field definition. It must be unique with respect to the set of fields in a list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Node**</p></td>
<td align="left"><p>Optional **Text**. Specifies the XML node in the document which contains the column value. Used for property promotion and demotion in XML documents.</p>
<p>For more information about how the **Node</span>, <span class="keyword">PIAttribute</span>, <span class="keyword">PITarget</span>, <span class="keyword">Primary PIAttribute</span>, and <span class="keyword">PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NumLines**</p></td>
<td align="left"><p>Optional **Integer**. Recommends the number of lines (rows) to display in a TEXTAREA block during editing. This is merely a client UI hint; there is no enforced limitation on the number of lines of text that can be edited.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PIAttribute**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the attribute in the document processing instruction (specified by the <span class="keyword">PITarget** attribute) to use as the column value. Used for property promotion and demotion in XML documents.</p>
<p>If you specify the **PIAttribute</span> attribute, you must also specify the <span class="keyword">PITarget** attribute.</p>
<p>For more information about how the **Node</span>, <span class="keyword">PIAttribute</span>, <span class="keyword">PITarget</span>, <span class="keyword">Primary PIAttribute</span>, and <span class="keyword">PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PITarget**</p></td>
<td align="left"><p>Optional **Text**. Specifies the document processing instruction in which the column value is stored in documents of this content type. Used for property promotion and demotion in XML documents.</p>
<p>If you specify the **PIAttribute</span> attribute, you must also specify the <span class="keyword">PITarget** attribute.</p>
<p>For more information about how the **Node</span>, <span class="keyword">PIAttribute</span>, <span class="keyword">PITarget</span>, <span class="keyword">Primary PIAttribute</span>, and <span class="keyword">PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PrimaryPIAttribute**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies an alternate attribute in the document processing instruction, specified by the <span class="keyword">PrimaryPITarget**, to use as the column value.</p>
<p>If you specify the **PrimaryPIAttribute</span> attribute, you must also specify the <span class="keyword">PrimaryPITarget</span> attribute. If specified, SharePoint Foundation uses these values before those specified in the <span class="keyword">PITarget</span> and <span class="keyword">PIAttribute** attributes.</p>
<p>Used for property promotion and demotion in XML documents.</p>
<p>For more information about how the **Node</span>, <span class="keyword">PIAttribute</span>, <span class="keyword">PITarget</span>, <span class="keyword">Primary PIAttribute</span>, and <span class="keyword">PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PrimaryPITarget**</p></td>
<td align="left"><p>Optional **Text**. Specifies an alternative document processing instruction in which the column value is stored for documents of this content type.</p>
<p>If you specify the **PrimaryPIAttribute</span> attribute, you must also specify the <span class="keyword">PrimaryPITarget</span> attribute. If specified, SharePoint Foundation uses these values before those specified in the <span class="keyword">PITarget</span> and <span class="keyword">PIAttribute** attributes.</p>
<p>For more information about how the **Node</span>, <span class="keyword">PIAttribute</span>, <span class="keyword">PITarget</span>, <span class="keyword">Primary PIAttribute</span>, and <span class="keyword">PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. If <span class="keyword">TRUE</span>, the field is not displayed in <span class="keyword">New</span> or <span class="keyword">Edit</span> forms but can be included in views. Setting the <span class="keyword">Hidden</span> attribute to <span class="keyword">TRUE** completely hides the field from the UI.</p>
<p>If you do not include this attribute, SharePoint Foundation treats the column as if the attribute was set to **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Required**</p></td>
<td align="left"><p>Required **Boolean</span>. If <span class="keyword">TRUE**, the field must have value assigned to it before an item that is created using this content type can be saved. If an empty field value is given in a form post, either the standard required-field text or an explicitly specified message (that is, via &lt;ErrorText&gt; tags) is displayed in the error form. This validation is handled by the client only (the database always allows NULL for all user-defined fields).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sealed**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to define the column as sealed. You cannot edit sealed columns through the SharePoint Foundation user interface or object model.</p>
<p>If you do not include this attribute, SharePoint Foundation treats the column as if the attribute was set to **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInDisplayForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to display the column on the Display form for items of this content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInEditForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to display the field on the Edit Item page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowinFileDlg**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to display the column in the file dialog box for items of this content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInListSettings**</p></td>
<td align="left"><p>Optional **Boolean</span>. If <span class="keyword">FALSE</span>, the field does not show up in a <span class="keyword">Fields</span> enumeration when the display mode is set to <span class="keyword">New**. Fields with this setting do not show up in the default New Item page for a given list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInNewForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to display the column on the New form for items of this content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sortable**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** if values in the field can be sorted.</p></td>
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
<td align="left"><p>None.</p></td>
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
<td align="left"><p><span sdata="link"><a href="fieldrefs-element-contenttype.htm">FieldRefs Element (ContentType)</a></span></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p></td>
</tr>
<tr class="even">
<td align="left"><p>Maximum: No limit</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **FieldRef** element is a reference to a
column defined elsewhere, either at the site or list level. In the field
reference, you can override a subset of the column properties, such as
the following:

-   Display name

-   XML promotion and demotion attributes

-   Whether the field is read-only, required, or hidden

Changing these properties in the field reference changes them only as
they apply to the specific content type that contains the field
reference.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_caution.gif" title="Important note" alt="Important note" /><strong>Important</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The **ID</span>, <span class="keyword">Name</span>, <span class="keyword">DisplayName</span>, and <span class="keyword">Required</span> attributes are always required, even when the <span class="keyword">FieldRef** element references a field that is defined in the same element manifest.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows two **FieldRef**
elements specifying columns to include in a content type.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <FieldRefs>
      <!--  Built-in Title field -->
      <FieldRef ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Name="Title" DisplayName="Item" Required="TRUE" Sealed="TRUE"/>
      <!--  Custom CostCenter field -->
      <FieldRef ID="{943E7530-5E2B-4C02-8259-CCD93A9ECB18}" Name="CostCenter" DisplayName="Department" Required="TRUE"/>
    </FieldRefs>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPFieldLink"><span
class="nolink">SPFieldLink</span></span>

#### Concepts

[Content Type
Definitions](content-type-definitions.md)</span>

#### Other resources

[Fields and Field
References](http://msdn.microsoft.com/library/6b536c1a-719c-4203-8006-c162de199bfc(Office.15).aspx)








