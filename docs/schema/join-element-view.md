---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 26ceade6-f193-4d5b-bad2-11ab05e2baa7
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
<td align="left"># Join Element (View)</td>
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
SharePoint Online | SharePoint Server 2013*

Used to join two lists for queries.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Join   Type= &quot;LEFT&quot; | &quot;INNER&quot;  ListAlias= &quot;TEXT&quot;&gt;&lt;/Join&gt;</code></pre></td>
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
<td align="left"><p>Type</p></td>
<td align="left"><p>Required. &quot;LEFT&quot; means a left outer join. &quot;INNER&quot; means an inner join.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ListAlias</p></td>
<td align="left"><p>Optional. Specifies an alternate name for the foreign list. This can be useful when there are two joins to the same list. Different aliases are needed to differentiate the joins.</p>
<p>There is no need to explicitly map the alias onto the real name of the foreign list because joins are only allowed through a lookup field relation and the foreign list is specified in the Lookup field definition.</p>
<p>After this value is defined in a **Join</span> element, it is used as the value of a <span class="keyword">List** attribute in two places:</p>
<ul>
<li><p>In a <a href="fieldref-element-query.htm">FieldRef</a> element that is a child to the <a href="eq-element-query.htm">Eq</a> element of the **Join** element.</p></li>
<li><p>In a <a href="field-element-list.htm">Field</a> element that is a child of a <a href="projectedfields-element-view.htm">ProjectedFields</a> element.</p></li>
</ul></td>
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
<td align="left"><p><a href="eq-element-query.htm">Eq</a></p></td>
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
<td align="left"><p><a href="joins-element-view.htm">Joins</a></p></td>
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
<td align="left"><p>Minimum: 1</p>
<p>Maximum: The value of the <span sdata="cer" target="P:Microsoft.SharePoint.Administration.SPWebApplication.MaxQueryLookupFields"><span class="nolink">MaxQueryLookupFields</span></span> property for the <span sdata="cer" target="T:Microsoft.SharePoint.Administration.SPWebApplication"><span class="nolink">SPWebApplication</span></span> object that contains the primary list that is being queried. The system default is 8.</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **Join** element translates into the SQL
**JOIN** statement. The <span
class="keyword">Join</span> element refactors the
[Eq](eq-element-query.htm) element to specify the
primary and foreign fields on which to make the join. The primary field
must be defined as a Lookup field to the foreign field.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following is an example of two **Join**
elements; both are left outer joins. CustomerName is a lookup field on
an Orders list. It looks up to the ID field of a Customers list. The
Customer list, in turn, has a CityName field that is a lookup field to a
Cities list. The first **Join** element assigns
'customers' as an alias for the Customers list. The
[Eq](eq-element-query.htm) element child defines the
join using the same source and target fields that constitute the lookup
relation. The second **Join** element assigns
'customerCities' as an alias to the Cities list. It defines the join in
parallel to the existing lookup relation between the Customer and Cities
lists.

Aliases are valuable for the lists because there can be more than one
join to the same list and different aliases are needed to differentiate
the joins. For example, in addition to the joins from Orders to Customer
and from Customer to Cities, there could also be joins from Orders to
Suppliers and from Suppliers to Cities. In the case of the last join, a
different alias, say 'supplierCities', would be assigned to the Cities
list from the one that is used for the Customer to Cities join.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Joins>
      <Join Type='LEFT' ListAlias='customers'>
        <Eq>
          <FieldRef Name='CustomerName' RefType='Id' />
          <FieldRef List='customers' Name='ID' />
        </Eq>
      </Join>

      <Join Type='LEFT' ListAlias='customerCities'>
        <Eq>
          <FieldRef List='customers' Name='CityName' RefType='Id' />
          <FieldRef List='customerCities' Name='ID' />
        </Eq>
      </Join>
    </Joins>








