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
ms.assetid: 20fae442-aca1-4bbc-b89c-139afab7dead
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
<td align="left"># Jewel Element</td>
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

Defines the Microsoft Office button.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Jewel
  Alt=&quot;Text&quot;
  CacheMenuVersions=&quot;TRUE | FALSE&quot;
  Command=&quot;Text&quot;
  CommandMenuClose=&quot;Text&quot;
  CommandMenuOpen=&quot;Text&quot;
  Height=&quot;Integer&quot;
  Id=&quot;Text&quot;
  ImageDownArrow=&quot;Url&quot;
  ImageDownArrowClass=&quot;CSS Selector&quot;
  ImageDownArrowLeft=&quot;Negative Integer&quot;
  ImageDownArrowTop=&quot;Negative Integer&quot;
  ImageSideArrow=&quot;Url&quot;
  ImageSideArrowClass=&quot;CSS Selector&quot;
  ImageSideArrowLeft=&quot;Negative Integer&quot;
  ImageSideArrowTop=&quot;Negative Integer&quot;
  ImageUpArrow=&quot;Url&quot;
  ImageUpArrowClass=&quot;CSS Selector&quot;
  ImageUpArrowLeft=&quot;Negative Integer&quot;
  ImageUpArrowTop=&quot;Negative Integer&quot;
  Image=&quot;Url&quot;
  ImageClass=&quot;CSS Selector&quot;
  ImageLeft=&quot;Negative Integer&quot;
  ImageTop=&quot;Negative Integer&quot;
  ImageHover=&quot;Url&quot;
  ImageHoverClass=&quot;CSS Selector&quot;
  ImageHoverLeft=&quot;Negative Integer&quot;
  ImageHoverTop=&quot;Negative Integer&quot;
  ImageDown=&quot;Url&quot;
  ImageDownClass=&quot;CSS Selector&quot;
  ImageDownLeft=&quot;Negative Integer&quot;
  ImageDownTop=&quot;Negative Integer&quot;
  ImageLeftSide=&quot;Url&quot;
  ImageLeftSideClass=&quot;CSS Selector&quot;
  ImageLeftSideLeft=&quot;Negative Integer&quot;
  ImageLeftSideTop=&quot;Negative Integer&quot;
  ImageLeftSideWidth=&quot;Integer&quot;
  ImageLeftSideHover=&quot;Url&quot;
  ImageLeftSideHoverClass=&quot;CSS Selector&quot;
  ImageLeftSideHoverLeft=&quot;Negative Integer&quot;
  ImageLeftSideHoverTop=&quot;Negative Integer&quot;
  ImageLeftSideDown=&quot;Url&quot;
  ImageLeftSideDownClass=&quot;CSS Selector&quot;
  ImageLeftSideDownLeft=&quot;Negative Integer&quot;
  ImageLeftSideDownTop=&quot;Negative Integer&quot;
  ImageRightSide=&quot;Url&quot;
  ImageRightSideClass=&quot;CSS Selector&quot;
  ImageRightSideLeft=&quot;Negative Integer&quot;
  ImageRightSideTop=&quot;Negative Integer&quot;
  ImageRightSideWidth=&quot;Integer&quot;
  ImageRightSideHover=&quot;Url&quot;
  ImageRightSideHoverClass=&quot;CSS Selector&quot;
  ImageRightSideHoverLeft=&quot;Negative Integer&quot;
  ImageRightSideHoverTop=&quot;Negative Integer&quot;
  ImageRightSideDown=&quot;Url&quot;
  ImageRightSideDownClass=&quot;CSS Selector&quot;
  ImageRightSideDownLeft=&quot;Negative Integer&quot;
  ImageRightSideDownTop=&quot;Negative Integer&quot;
  LabelCss=&quot;CSS Selector&quot;
  LabelText=&quot;Text&quot;
  PopulateDynamically=&quot;TRUE | FALSE&quot;
  PopulateQueryCommand=&quot;Text&quot;
  PopulateOnlyOnce=&quot;TRUE | FALSE&quot;
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
<td align="left"><p>Optional. Alternative text that is used for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CacheMenuVersions**</p></td>
<td align="left"><p>Optional. **TRUE</span> to store previously constructed versions of a dynamic menu. The default is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandMenuClose**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the drop-down menu is closed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandMenuOpen**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the drop-down menu is opened.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Height**</p></td>
<td align="left"><p>Optional. The height of the control in pixels.</p></td>
</tr>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageDownArrow</span> attribute points to an image file that contains the images for many icons. The value of the <span class="keyword">ImageDownArrowLeft</span> attribute is used to set the CSS <span class="keyword">left</span> attribute for the inline style of an HTML <span class="keyword">img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageDownArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageDownArrow</span> attribute points to an image file that contains the images for many icons. The value of the <span class="keyword">ImageDownArrowTop</span> attribute is used to set the CSS <span class="keyword">top</span> attribute for the inline style of an HTML <span class="keyword">img** tag when the page is created.</p></td>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageSideArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUpArrow**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the up arrow, such as &quot;/_layouts/1033/images/formatmap16x16.png&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUpArrowClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the up arrow image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUpArrowLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUpArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the center image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageHover**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image to replace the center image when the mouse pointer hovers over it.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageHoverClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageHoverLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageHoverTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageDown**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image to replace the center image when the toolbar is expanded.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageDownClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageDownLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageDownTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSide**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image for the left side of the jewel.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeftSideClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSideLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeftSideTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSideWidth**</p></td>
<td align="left"><p>Optional. The width of the image in pixels.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeftSideHover**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image to replace the left image when the mouse pointer hovers over it.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSideHoverClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeftSideHoverLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSideHoverTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeftSideDown**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image to replace the left image when the toolbar is expanded.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSideDownClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeftSideDownLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageLeftSideDownTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSide**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image for the right side of the jewel.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageRightSideClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSideLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageRightSideTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSideWidth**</p></td>
<td align="left"><p>Optional. The width of the image in pixels.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageRightSideHover**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image to replace the right image when the mouse pointer hovers over it.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSideHoverClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageRightSideHoverLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSideHoverTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageRightSideDown**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains the image to replace the right image when the toolbar is expanded.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSideDownClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageRightSideDownLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageRightSideDownTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LabelCss**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the label.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LabelText**</p></td>
<td align="left"><p>Optional. The text of the label.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PopulateDynamically**</p></td>
<td align="left"><p>Optional. **TRUE</span> to create the menu dynamically. The default is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PopulateOnlyOnce**</p></td>
<td align="left"><p>Optional. **TRUE** to populate a dynamic menu only the first time that it is accessed.</p></td>
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
<td align="left"><p><a href="menu-element.md">Menu</a></p></td>
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








