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
ms.assetid: afca9360-75fe-4e05-bbd1-149f2eb3b7a7
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># Where Element (Query)</td>
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

Used within the context of a query to specify a filter.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Where&gt;
&lt;/Where&gt;</code></pre></td>
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
<td align="left"><p>None</p></td>
<td align="left"><p>N/A</p></td>
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
<td align="left"><p><a href="and-element-query.md">And</a>, <a href="beginswith-element-query.md">BeginsWith</a>, <a href="contains-element-query.md">Contains</a>, <a href="daterangesoverlap-element-query.md">DateRangesOverlap</a>, <a href="eq-element-query.md">Eq</a>, <a href="geq-element-query.md">Geq</a>, <a href="gt-element-query.md">Gt</a>, <a href="in-element-query.md">In</a>, <a href="includes-element-query.md">Includes</a>, <a href="isnotnull-element-query.md">IsNotNull</a>, <a href="isnull-element-query.md">IsNull</a>, <a href="leq-element-query.md">Leq</a>, <a href="lt-element-query.md">Lt</a>, <a href="membership-element-query.md">Membership</a>, <a href="neq-element-query.md">Neq</a>, <a href="notincludes-element-query.md">NotIncludes</a>, <a href="or-element-query.md">Or</a></p></td>
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
<td align="left"><p><a href="expr1-element-view.md">Expr1</a>, <a href="expr2-element-view.md">Expr2</a>, <a href="query-element-list.md">Query</a></p></td>
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


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **Where** clause translates into the SQL
**SELECT** statement. The format of the <span
class="keyword">Where</span> clause is a structured XML tree with a
mixture of comparison operators, simple arithmetic operators, field
(column) references, constant values, and predefined Collaborative
Application Markup Language (CAML) constants.

Fields referenced in a **Where** element do not
have to be fields of the primary list that is being queried. If a
foreign list is being joined, then fields from the foreign list can be
itemized in a
[ProjectedFields](projectedfields-element-view.md) element and
can then be referenced in the **Where**
element.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the following example, the **Where** element
uses the [Geq](geq-element-query.md) element as the
filter in the query, returning cases where the date and time value in
the **Expires** field is greater than today's
date and time.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Query>
      <Where>
        <Geq>
          <FieldRef Name="Expires"/>
          <Value Type="DateTime">
            <Today/>
          </Value>
        </Geq>
      </Where>
      <OrderBy>
        <FieldRef Name="Modified"/>
      </OrderBy>
    </Query>








