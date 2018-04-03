---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: 4c912a6d-0c01-4cd0-affd-6333af69bd55
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
<td align="left"># FieldRef Element (Query)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Represents a reference to a field within a query.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><FieldRef
  Alias = "Text"
  Ascending = "TRUE" | "FALSE"
  CreateURL = "Text"
  DisplayName = "Text"
  Explicit = "TRUE" | "FALSE"    Format = "Text"
  ID = "Text"
  Key = "Text"  List = "Text"
  LookupId = "TRUE" | "FALSE"
  Name = "Text"
  RefType = "Text"
  ShowField = "Text"
  TextOnly = "TRUE" | "FALSE"
  Type = "Text">
</FieldRef></code></pre></td>
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
<td align="left"><p>**Alias**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Ascending**</p></td>
<td align="left"><p>Optional **Boolean</span>. This specifies the sort order on a **FieldRef</span> element that is defined in a view. The default value is **TRUE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CreateURL**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL for the .aspx file that is used to create a Meeting Workspace site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **Text**. This attribute provides the display name of the field that is referenced.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Explicit**</p></td>
<td align="left"><p>Optional **Boolean</span>. This attribute is only supported within the **ViewFields</span> element. **TRUE</span> if the field is explicitly declared in the view definition and is not returned in a **Fields** enumeration inside a view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Format**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID that identifies the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Key**</p></td>
<td align="left"><p>Optional **Text</span>. If set to **Primary**, specifies that the field is the primary key for its table and thus uniquely identifies each record in the table.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the parent foreign list when the **FieldRef</span> element is a child of an <a href="eq-element-query.md">Eq</a> element in <a href="join-element-view.md">Join</a> element. The value is an alias for the list that is defined by the **ListAlias** attribute of the <a href="join-element-view.md">Join</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LookupId**</p></td>
<td align="left"><p>Optional **Boolean**. When the field is a Lookup type, specifies that queries should look for the item by its unique item ID rather than the field value. This can be useful, for example, when multiple items have identical values in the field and you want to query for a specific item. The default is false.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. This attribute provides the internal name of the field that is referenced.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RefType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the type of reference for a field in an events list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowField**</p></td>
<td align="left"><p>Optional **Text</span>. The **ShowField</span> attribute can be set to the field name to display. By default, a hyperlinked text from the Title field of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list.</p>
<p>The following data types are allowed as targets of a **ShowField</span> attribute: **Text</span>, **Choice</span>, and **Counter**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TextOnly**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies that the field contains only text values.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text**. Specifies the function that is applied to a totals column or a calculated column. Possible values include the following:</p>
<ul>
<li><p>**AVG</span>   Average value. Applies to **DateTime</span>**Number</span>, **Integer</span>, and **Currency** field types.</p></li>
<li><p>**COUNT**   Number of items. Applies to all field types that allow aggregation.</p></li>
<li><p>**MAX</span>   Maximum value. Applies to **DateTime</span>**Number</span>, **Integer</span>, and **Currency** field types.</p></li>
<li><p>**MIN</span>   Minimum value. Applies to **DateTime</span>**Number</span>, **Integer</span>, and **Currency** field types.</p></li>
<li><p>**SUM</span>   Sum of values. Applies to **Number</span>, **Integer</span>, and **Currency** field types.</p></li>
<li><p>**STDEV</span>   Standard deviation. Applies to **Number</span>, **Integer</span>, and **Currency** field types.</p></li>
<li><p>**VAR</span>   Variance. Applies to **Number</span>, **Integer</span>, and **Currency** field types.</p></li>
</ul>
<p>The values for the **Type** attribute are not case-sensitive.</p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><a href="beginswith-element-query.md">BeginsWith</a>, <a href="contains-element-query.md">Contains</a>, <a href="daterangesoverlap-element-query.md">DateRangesOverlap</a>, <a href="eq-element-query.md">Eq</a>, <a href="fieldrefs-element-list.md">FieldRefs</a>, <a href="geq-element-query.md">Geq</a>, <a href="groupby-element-query.md">GroupBy</a>, <a href="gt-element-query.md">Gt</a>, <a href="in-element-query.md">In</a>, <a href="includes-element-query.md">Includes</a>, <a href="isnotnull-element-query.md">IsNotNull</a>, <a href="isnull-element-query.md">IsNull</a>, <a href="leq-element-query.md">Leq</a>, <a href="lt-element-query.md">Lt</a>, <a href="neq-element-query.md">Neq</a>, <a href="notincludes-element-query.md">NotIncludes</a>, <a href="orderby-element-query.md">OrderBy</a></p></td>
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
<td align="left"><p>Minimum: 0</p>
<p>Maximum: 1 (Unbounded within <a href="orderby-element-query.md">OrderBy</a>)</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example queries for cases where the Expires field is
either **null** or contains a value greater
than or equal to the current date.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Query>
       <Where>
          <Or>
             <IsNull>
                <FieldRef Name="Expires" />
             </IsNull>
             <Geq>
                <FieldRef Name="Expires" />
                <Value Type="DateTime">
                   <Today />
                </Value>
             </Geq>
          </Or>
       </Where>
       <OrderBy>
          <FieldRef Name="Modified" Ascending="FALSE" />
       </OrderBy>
    </Query>

The next example from the
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file for contacts lists specifies fields to display in the toolbar.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <ViewFields>
       <FieldRef Name="LinkTitleNoMenu"></FieldRef>
       <FieldRef Name="FirstName"></FieldRef>
       <FieldRef Name="WorkPhone"></FieldRef>
       <FieldRef Name="Email"></FieldRef>
    </ViewFields>








