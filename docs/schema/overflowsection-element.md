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
ms.assetid: c5e266a6-6664-41a2-acf3-c0d338fa5f41
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
<td align="left"># OverflowSection Element</td>
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

Defines a section that can be created dynamically with a variable number
of controls.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;OverflowSection
  DisplayMode=&quot;Small | Medium | Large | Menu | Menu16 | Menu32&quot;
  DividerAfter=&quot;TRUE | FALSE&quot;
  DividerBefore=&quot;TRUE | FALSE&quot;
  TemplateAlias=&quot;Text&quot;
  Type=&quot;OneRow | TwoRow | ThreeRow&quot;
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
<td align="left"><p>**DisplayMode**</p></td>
<td align="left"><p>Optional. An enumeration value that determines how a control is rendered.</p>
<ul>
<li><p>**Small**. Renders as a small icon without label text.</p></li>
<li><p>**Medium**. Renders as a 16-by-16-pixel icon with label text.</p></li>
<li><p>**Large**. Renders as a 32-by-32-pixel icon with label text.</p></li>
<li><p>**Menu**. Renders as a text-only menu item.</p></li>
<li><p>**Menu16**. Renders as a menu item with a 16-by-16-pixel icon.</p></li>
<li><p>**Menu32**. Renders as a menu item with a 32-by-32-pixel icon.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**DividerAfter**</p></td>
<td align="left"><p>Optional. **TRUE** to render a divider at the end of the section.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DividerBefore**</p></td>
<td align="left"><p>Optional. **TRUE** to render a divider at the start of the section.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that a control can reference in its own **TemplateAlias</span> attribute. The <span class="keyword">TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional. An enumeration value that specifies the type of section.</p>
<ul>
<li><p>**OneRow**. The section renders with one row of controls.</p></li>
<li><p>**TwoRow**. The section renders with two rows of controls.</p></li>
<li><p>**ThreeRow**. The section renders with three rows of controls.</p></li>
</ul></td>
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
<td align="left"><p><a href="layout-element.htm">Layout</a></p></td>
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
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>








