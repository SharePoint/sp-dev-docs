---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 4b663d81-e819-42d1-a06e-6c8493b6b94e
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
<td align="left"># InsertTable Element</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines a menu control for inserting a table that contains a variable
number of cells.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;InsertTable
  Alt=&quot;Text&quot;
  Command=&quot;Text&quot;
  CommandType=&quot;General | OptionSelection | IgnoredByMenu&quot;
  CommandPreview=&quot;Text&quot;
  CommandRevert=&quot;Text&quot;
  Id=&quot;Text&quot;
  MenuSectionInitialTitle=&quot;Text&quot;
  MenuSectionTitle=&quot;Text&quot;
  Sequence=&quot;Integer&quot;
/&gt;</code></pre></td>
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
<td align="left"><p>**Alt**</p></td>
<td align="left"><p>Optional. Alternative text for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.md">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the **Command** attribute of a corresponding <a href="commanduihandler-element.md">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandType**</p></td>
<td align="left"><p>Optional. An enumeration value that specifies the type of command.</p>
<ul>
<li><p>**General**. Not a specific type of command.</p></li>
<li><p>**OptionSelection**. A command that is generated when a user selects one option in an option group.</p></li>
<li><p>**IgnoredByMenu**. A command that is used for controls that should not close the menu when they are clicked.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandPreview**</p></td>
<td align="left"><p>Optional. The name of the command to execute to preview a selection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandRevert**</p></td>
<td align="left"><p>Optional. The name of the command to execute to return to the state that existed before previewing a selection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MenuSectionInitialTitle**</p></td>
<td align="left"><p>Optional. The title of the menu section before table cells are selected, such as &quot;Insert Table&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MenuSectionTitle**</p></td>
<td align="left"><p>Optional. The title of the menu section when table cells are selected. This could be a format string such as &quot;Insert a {0} by {1} Table&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

None


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="commanduidefinition-element.md">CommandUIDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="controls-element-menusection.md">Controls</a> (MenuSection)</p></td>
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








