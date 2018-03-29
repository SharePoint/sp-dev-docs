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
ms.assetid: 795f4be2-9dd2-4da0-88bb-2b0bc33a6133
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
<td align="left"># QAT Element</td>
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

Defines a quick-access toolbar.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;QAT
  Id=&quot;Text&quot;
  ImageDownArrow=&quot;Url&quot;
  ImageDownArrowClass=&quot;CSS Class Selector&quot;
  ImageDownArrowLeft=&quot;Negative Integer&quot;
  ImageDownArrowTop=&quot;Negative Integer&quot;
  ImageSideArrow=&quot;Url&quot;
  ImageSideArrowClass=&quot;CSS Class Selector&quot;
  ImageSideArrowLeft=&quot;Negative Integer&quot;
  ImageSideArrowTop=&quot;Negative Integer&quot;
  ImageUpArrow=&quot;Url&quot;
  ImageUpArrowClass=&quot;CSS Class Selector&quot;
  ImageUpArrowLeft=&quot;Negative Integer&quot;
  ImageUpArrowTop=&quot;Negative Integer&quot;
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
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageDownArrow**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the down arrow, such as &quot;/_layouts/1033/images/formatmap16x16.png&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageDownArrowClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the down arrow image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageDownArrowLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageDownArrow</span> attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowLeft</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageDownArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageDownArrow</span> attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowTop</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageSideArrow**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the side arrow.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageSideArrowClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the side arrow image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageSideArrowLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageSideArrow</span> attribute points to an image file that contains the images for many icons. The value of the **ImageSideArrowLeft</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageSideArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageSideArrow</span> attribute points to an image file that contains the images for many icons. The value of the **ImageSideArrowTop</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUpArrow**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the up arrow, such as &quot;/_layouts/images/arwup.gif&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUpArrowClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the up arrow image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUpArrowLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageUpArrow</span> attribute points to an image file that contains the images for many icons. The value of the **ImageUpArrowLeft</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUpArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageUpArrow</span> attribute points to an image file that contains the images for many icons. The value of the **ImageUpArrowTop</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
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
<td align="left"><p><a href="controls-element-group.md">Controls</a></p></td>
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
<td align="left"><p><a href="commandui-element.md">CommandUI</a></p></td>
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








