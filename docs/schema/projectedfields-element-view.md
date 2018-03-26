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
ms.assetid: 40188d7d-3206-4162-b2c5-58cd9ef97e1d
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
<td align="left"># ProjectedFields Element (View)</td>
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

Specifies the fields in joined lists that can be included in the view
when one or more other lists have been joined in a query.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ProjectedFields&gt;   
  &lt;Field ... /&gt;  
  &lt;Field ... /&gt;
&lt;/ProjectedFields&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

None


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="field-element-list.htm">Field</a></p></td>
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
<td align="left"><p>There is a maximum number of <a href="field-element-list.htm">Field</a> child elements. It is defined as the difference between the maximum number of allowed fields in the list and the number of fields that are already in the list.</p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p>The <a href="view-element-list.htm">View</a> element cannot have a **ProjectedFields</span> element unless it has a <a href="joins-element-view.htm">Joins</a> element that has at least one <a href="join-element-view.htm">Join</a> child element. However, a <span class="keyword">ProjectedFields</span> element that forms the value of a <span sdata="cer" target="P:Microsoft.SharePoint.SPQuery.ProjectedFields"><span class="nolink">SPQuery.ProjectedFields</span></span> property, and therefore, is not a child of a <a href="view-element-list.htm">View</a> element, can be used to support an implicit join without a <a href="joins-element-view.htm">Joins</a> element. We do not recommend working without a <a href="joins-element-view.htm">Joins</a> element. You will maximize your solution's chances of being compatible with future releases of Microsoft SharePoint Foundation by always using an explicit <span class="keyword">Join</span> element. For more information about implicit joins with <span class="keyword">ProjectedFields** elements, see <a href="http://msdn.microsoft.com/library/f8e07793-3053-4930-97aa-556e38b9f21b(Office.15).aspx">List Joins and Projections</a>.</p></td>
</tr>
</tbody>
</table>

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

If a field from a joined list is not represented in <span
class="keyword">ProjectedFields</span>, it cannot be included in the
[ViewFields](viewfields-element-list.htm) element.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows how to add another field to the results that
are returned by the query. The value of the <span
class="keyword">List</span> attribute is an alias to the foreign list.
The alias is defined in a <span sdata="link">[Join Element
(View)](join-element-view.htm)</span>. The <span
class="keyword">ShowField</span> attribute must be set to the internal
name of the foreign field.

The **Type** attribute does not indicate the
data type of the field as it usually does in a
[Field](field-element-list.htm) element. When a
[Field](field-element-list.htm) element is a child of
a **ProjectedFields** element, <span
class="keyword">Type</span> simply indicates whether the
[Join](join-element-view.htm) element (in the
[Joins](joins-element-view.htm) element on which the
**ProjectedFields** element depends) is based
on an existing lookup relation between the lists. As of SharePoint
Foundation 2010, all joins must be based on an existing lookup relation,
so **Type** always has the value "Lookup". The
actual data type of the field is not indicated when it is a child of the
**ProjectedFields** element. However, the
field's data type does matter because only the following types of fields
can be included in a **ProjectedFields**
element:

-   Calculated (treated as plain text)

-   ContentTypeId

-   Counter

-   Currency

-   DateTime

-   Guid

-   Integer

-   Note (one-line only)

-   Number

-   Text

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <ProjectedFields>
      <Field
        Name='CustomerCity'
        Type='Lookup'
        List='customerCities'
        ShowField='Title' />
    </ProjectedFields>

For an example of a **ProjectedFields** element
whose child **Field** element has a <span
class="keyword">FieldRef</span> attribute instead of a <span
class="keyword">List</span> attribute, see [List Joins and
Projections](http://msdn.microsoft.com/library/f8e07793-3053-4930-97aa-556e38b9f21b(Office.15).aspx).








