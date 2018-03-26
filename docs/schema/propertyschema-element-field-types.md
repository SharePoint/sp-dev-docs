---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- field type definition schema, propertyschema element (field types)
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: 5723244b-2041-4424-97e5-8dbd828ecdf7
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
<td align="left"># PropertySchema Element (Field Types)</td>
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
<td align="left"><p>This topic describes markup that was used in an obsolete method of rendering custom field type properties. It is provided solely to assist with the debugging of custom field type properties developed against earlier versions of SharePoint Foundation. For information about the recommended method, <a href="http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a(Office.15).aspx">Custom Field Type Property Rendering</a>.</p></td>
</tr>
</tbody>
</table>

Represents the schema of certain special variable properties of a custom
field type, with each property defined as a <span
class="keyword">Field</span> element.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;PropertySchema&gt;
&lt;/PropertySchema&gt;</code></pre></td>
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
<td align="left"><p>**None**</p></td>
<td align="left"><p></p></td>
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
<td align="left"><p><span sdata="link"><a href="fields-element-field-types-property-schema.htm">Fields Element (Field Types Property Schema)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="fieldtype-element-field-types.htm">FieldType Element (Field Types)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Custom field types may have special properties whose value will vary
from one column based on the field type to another column based on the
same field type. Consider a custom regular expression field type that is
designed to hold <span sdata="cer"
target="T:System.String">[String](http://msdn2.microsoft.com/EN-US/library/s1wwdcbf)</span>
values that match a certain regular expression, such as <span
class="code">^(\\d{3})\\d{3}-\\d{4}$</span> for American telephone
numbers. Rather than create separate custom regular expression field
types for British license plate numbers, American Social Security
numbers, Chinese telephone numbers, etc., it is more efficient to create
a single regular expression field type and enable users who create
columns based on the field type, to set the regular expression that
needs to be matched on a column-by-column basis. For example, a user
creating a "US Telephone Number" column would set the column's regular
expression to the string above. Another user, creating a "Brazilian Post
Box" column would set his column's regular expression to <span
class="code">^\\d{5}\\-\\d{3}$</span>.

To do this, the custom field needs to have a <span
class="keyword">RegularExpression</span> property that is rendered in an
editable control on the user interface (UI) when a new column is
created. In SharePoint Foundation, this is in the <span
class="ui">Additional Column Settings</span> section on the <span
class="ui">New Site Column </span>page and the <span class="ui">Create
Column</span> page. The **PropertySchema**
element in the <span class="code">fldtypes\*.xml</span> file is where
such variable properties are declared and given a default rendering
schema. Optionally, they can also be given default values.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>If you define the variable properties of the custom field type in the **PropertySchema** element, SharePoint Foundation automatically renders those properties based on the schema.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example defines a property schema for a custom field type
called "RegularExpressionMatch." The schema declares a field for use by
column creators when they base a column on the field type. The purpose
of the field is to enable a column creator to set a *different* regular
expression for each column she bases on the RegularExpressionMatch field
type.

The **DisplayName** and an editable <span
class="keyword">Text</span> field will appear in the <span
class="ui">Additional Column Settings</span> section on the <span
class="ui">New Site Column </span>page and the <span class="ui">Create
Column</span> page. The **MaxLength** attribute
sets the maximum length, in characters, of the regular expression and
the **DisplaySize** sets the size of the field
that holds it. Users can scroll within the field to see the rest of the
regular expression if it is longer than <span
class="keyword">DisplaySize</span>.

No default has been set in this example, but if the developer of the
field type knew that in most cases it would be used to create columns
containing American telephone numbers, the developer could set the
default as <span
class="code">\<Default\>^(\\d{3})\\d{3}-\\d{4}$\</Default\></span>.

Note: The following code example has been edited for clarity.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <FieldType>
      <Field Name="TypeName">RegularExpressionMatch</Field>
      …
      <PropertySchema>
        <Fields>
          <Field Name="RegularExpression" 
                 DisplayName="Regular Expression To Match" 
                 MaxLength="500" 
                 DisplaySize="100" 
                 Type="Text">
            <Default></Default>
          </Field>
        </Fields>
      </PropertySchema>
      …
    </FieldType>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Custom Field
Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13(Office.15).aspx)

[Custom Field
Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069(Office.15).aspx)

[Custom Field Type Property
Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a(Office.15).aspx)

[Custom Field Type
Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx)








