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
ms.assetid: fb7004bc-2baa-4110-ae30-03e6b349b5e9
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
<td align="left"># Gallery Element</td>
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
SharePoint Online | SharePoint Server 2013*

Defines a gallery.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Gallery
  Command=&quot;Text&quot;
  CommandPreview=&quot;Text&quot;
  CommandRevert=&quot;Text&quot;
  ElementDimensions=&quot;Size16by16 | Size32by32 | Size48by48 | Size72by96 | Size96by72 | Size96by96 | Size128by128 | Size190by30 | Size190by40 | Size190by50 | Size190by60&quot;
  Id=&quot;Text&quot;
  QueryCommand=&quot;Text&quot;
  Sequence=&quot;Integer&quot;
  Width=&quot;Integer&quot;
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
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.htm">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the <span class="keyword">Command** attribute of a corresponding <a href="commanduihandler-element.htm">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandPreview**</p></td>
<td align="left"><p>Optional. The name of the command to execute for previewing a selection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandRevert**</p></td>
<td align="left"><p>Optional. The name of the command to execute to return to the state that existed before previewing a selection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ElementDimensions**</p></td>
<td align="left"><p>Required. An enumeration value that specifies the dimensions of rectangular child elements. Dimensions are in pixels and are in the format &quot;width by height&quot;.</p>
<ul>
<li><p>**Size16by16**</p></li>
<li><p>**Size32by32**</p></li>
<li><p>**Size48by48**</p></li>
<li><p>**Size72by96**</p></li>
<li><p>**Size96by72**</p></li>
<li><p>**Size96by96**</p></li>
<li><p>**Size128by128**</p></li>
<li><p>**Size190by30**</p></li>
<li><p>**Size190by40**</p></li>
<li><p>**Size190by50**</p></li>
<li><p>**Size190by60**</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the element, such as &quot;GadgetsGallery&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**QueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when polling for state information.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Width**</p></td>
<td align="left"><p>Required. The width of the gallery in pixels.</p></td>
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
<td align="left"><p><a href="gallerybutton-element-gallery.htm">GalleryButton</a></p></td>
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
<td align="left"><p><a href="commanduidefinition-element.htm">CommandUIDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="menusection-element.htm">MenuSection</a></p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A <span class="term">gallery</span> is a graphically rich list box. The
items in a gallery are usually mutually exclusive choices, and the
result of a choice is visually previewed either by an image or by a
rendered HTML fragment.








