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
ms.assetid: 47780c18-200a-40d8-8d75-2b51637ac827
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
<td align="left"># Value Element (Query)</td>
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

Contains the value against which the value returned by the
[FieldRef](fieldref-element-query.md) element is
compared.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Value
  Type = "Text"
  IncludeTimeValue = "TRUE" | "FALSE>
</Value></code></pre></td>
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
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **Text**. Specifies the data type for the value contained by this element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeTimeValue**</p></td>
<td align="left"><p>Optional **Boolean</span>. Specifies to build **DateTime** queries based on time as well as date. If you do not set this attribute, the time portion of queries that involve date and time are ignored.</p></td>
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
<td align="left"><p><a href="listproperty-element-query.md">ListProperty</a>, <a href="month-element-query.md">Month</a>, <a href="now-element-query.md">Now</a>, <a href="today-element-query.md">Today</a>, <a href="userid-element-query.md">UserID</a>, <a href="xml-element.md">XML</a></p></td>
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
<td align="left"><p><a href="beginswith-element-query.md">BeginsWith</a>, <a href="contains-element-query.md">Contains</a>, <a href="daterangesoverlap-element-query.md">DateRangesOverlap</a>, <a href="eq-element-query.md">Eq</a>, <a href="geq-element-query.md">Geq</a>, <a href="gt-element-query.md">Gt</a>, <a href="includes-element-query.md">Includes</a>, <a href="isnotnull-element-query.md">IsNotNull</a>, <a href="isnull-element-query.md">IsNull</a>, <a href="leq-element-query.md">Leq</a>, <a href="lt-element-query.md">Lt</a>, <a href="neq-element-query.md">Neq</a>, <a href="notincludes-element-query.md">NotIncludes</a>, <a href="values-element-query.md">Values</a></p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the following example, the query returns cases where the <span
class="keyword">BaseType</span> field equals 1, and the Project field
equals the ID of the current project property. Results are returned in
ascending order, first by Title and then by ID.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Query>
      <Where>
        <And>
          <Eq>
            <FieldRef Name="BaseType" />
            <Value Type="Integer">1</Value>
          </Eq>
          <Eq>
            <FieldRef Name="Project" />
            <Value Type="Integer">
              <ProjectProperty Select="ID" />
            </Value>
          </Eq>
        </And>
      </Where>
      <OrderBy>
        <FieldRef Name="Title" />
        <FieldRef Name="ID" />
      </OrderBy>
    </Query>








