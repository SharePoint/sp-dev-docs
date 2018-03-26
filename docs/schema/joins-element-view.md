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
ms.assetid: 3fd26dab-9ba5-43a5-9af7-c566c343875e
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
<td align="left"># Joins Element (View)</td>
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

Contains [Join elements](join-element-view.htm)
needed for a query.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Joins&gt;  &lt;Join ... &gt;  &lt;/Join&gt;    &lt;Join ... &gt;  &lt;/Join&gt;  ...&lt;/Joins&gt;</code></pre></td>
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
<td align="left"><p><a href="join-element-view.htm">Join</a></p></td>
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
<td align="left"><p><a href="view-element-list.htm">View</a></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>When a **Joins</span> element is used as part of a dynamic query instead of as part of the definition of a list view; that is, when it is the value of the <span sdata="cer" target="P:Microsoft.SharePoint.SPQuery.Joins"><span class="nolink">SPQuery.Joins</span></span>property rather than the <span sdata="cer" target="P:Microsoft.SharePoint.SPView.Joins"><span class="nolink">Joins</span>**property, then it does not really have a parent element.</p></td>
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

The following is an example of a **Joins**
element with two left outer joins. CustomerName is a lookup field on an
Orders list. It looks up to the ID field of a Customers list. The
Customer list, in turn, has a CityName field that is a lookup field to a
Cities list. The first [Join](join-element-view.htm)
element assigns 'customers' as an alias for the Customers list. The
[Eq](eq-element-query.htm) element child defines the
join using the same source and target fields that constitute the lookup
relation. The second Join element assigns 'customerCities' as an alias
to the Cities list. It defines the join in parallel to the existing
lookup relation between the Customer and Cities lists.

Aliases are needed for the lists because there can be more than one join
to the same list and different aliases are needed to differentiate the
joins. For example, in addition to the joins from Orders to Customer and
from Customer to Cities, there could also be joins from Orders to
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
          <FieldRef List='customer' Name='CityName' RefType='Id' />
          <FieldRef List='customerCities' Name='ID' />
        </Eq>
      </Join>
    </Joins>








