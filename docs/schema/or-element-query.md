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
ms.assetid: a2e4f3fc-12b5-4fe3-a1ca-9a5c118479d3
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
<td align="left"># Or Element (Query)</td>
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

Used within the [Where](where-element-query.md)
element to group filters in a query.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Or&gt;
&lt;/Or&gt;</code></pre></td>
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
<td align="left"><p><a href="and-element-query.md">And</a>, <a href="or-element-query.md">Or</a>, <a href="where-element-query.md">Where</a></p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This element can be nested inside other **Or**
and [And](and-element-query.md) elements. The server
supports unlimited complicated queries. However, any given <span
class="keyword">Or</span> element can have only two disjuncts; that is,
only two child elements. If you need to disjoin three or more
conditions, you must nest the **Or** elements,
as demonstrated by the second example in the following section.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example performs a query for cases in which values of the
Status field either do not equal Completed or are <span
class="keyword">null</span>. The results are sorted in descending order
according to the Modified field.

<span codelanguage="caml"></span>
CAML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Query>
      <OrderBy>
        <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
      </OrderBy>
      <Where>
        <Or>
          <Neq>
            <FieldRef Name="Status"></FieldRef>
            <Value Type="Text"></Value>
          </Neq>
          <IsNull>
            <FieldRef Name="Status"></FieldRef>
          </IsNull>
        </Or>
      </Where>
    </Query>

The following example shows how to disjoin three conditions. Note that
the first pair of conditions are within their own <span
class="keyword">Or</span> element, which is itself a condition of an
outer **Or** element.

<span codelanguage="caml"></span>
CAML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Where>
      <Or>
        <Or>
          <Eq><FieldRef Name="LastName" />
            <Value Type="Text">Bagel</Value>
          </Eq>
          <Eq><FieldRef Name="LastName" />
            <Value Type="Text">Smith</Value>
          </Eq>
        </Or>
        <Includes>
          <FieldRef Name="Title" /><Value Type="Text">President</Value>
        </Includes>
      </Or>
    </Where>








