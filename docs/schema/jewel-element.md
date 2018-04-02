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
<td align="left"><pre><code><Jewel
  Alt="Text"
  CacheMenuVersions="TRUE | FALSE"
  Command="Text"
  CommandMenuClose="Text"
  CommandMenuOpen="Text"
  Height="Integer"
  Id="Text"
  ImageDownArrow="Url"
  ImageDownArrowClass="CSS Selector"
  ImageDownArrowLeft="Negative Integer"
  ImageDownArrowTop="Negative Integer"
  ImageSideArrow="Url"
  ImageSideArrowClass="CSS Selector"
  ImageSideArrowLeft="Negative Integer"
  ImageSideArrowTop="Negative Integer"
  ImageUpArrow="Url"
  ImageUpArrowClass="CSS Selector"
  ImageUpArrowLeft="Negative Integer"
  ImageUpArrowTop="Negative Integer"
  Image="Url"
  ImageClass="CSS Selector"
  ImageLeft="Negative Integer"
  ImageTop="Negative Integer"
  ImageHover="Url"
  ImageHoverClass="CSS Selector"
  ImageHoverLeft="Negative Integer"
  ImageHoverTop="Negative Integer"
  ImageDown="Url"
  ImageDownClass="CSS Selector"
  ImageDownLeft="Negative Integer"
  ImageDownTop="Negative Integer"
  ImageLeftSide="Url"
  ImageLeftSideClass="CSS Selector"
  ImageLeftSideLeft="Negative Integer"
  ImageLeftSideTop="Negative Integer"
  ImageLeftSideWidth="Integer"
  ImageLeftSideHover="Url"
  ImageLeftSideHoverClass="CSS Selector"
  ImageLeftSideHoverLeft="Negative Integer"
  ImageLeftSideHoverTop="Negative Integer"
  ImageLeftSideDown="Url"
  ImageLeftSideDownClass="CSS Selector"
  ImageLeftSideDownLeft="Negative Integer"
  ImageLeftSideDownTop="Negative Integer"
  ImageRightSide="Url"
  ImageRightSideClass="CSS Selector"
  ImageRightSideLeft="Negative Integer"
  ImageRightSideTop="Negative Integer"
  ImageRightSideWidth="Integer"
  ImageRightSideHover="Url"
  ImageRightSideHoverClass="CSS Selector"
  ImageRightSideHoverLeft="Negative Integer"
  ImageRightSideHoverTop="Negative Integer"
  ImageRightSideDown="Url"
  ImageRightSideDownClass="CSS Selector"
  ImageRightSideDownLeft="Negative Integer"
  ImageRightSideDownTop="Negative Integer"
  LabelCss="CSS Selector"
  LabelText="Text"
  PopulateDynamically="TRUE | FALSE"
  PopulateQueryCommand="Text"
  PopulateOnlyOnce="TRUE | FALSE"
/></code></pre></td>
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
<td align="left"><p>Optional. **TRUE</span> to store previously constructed versions of a dynamic menu. The default is **FALSE**.</p></td>
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
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the down arrow, such as "/_layouts/1033/images/formatmap16x16.png".</p></td>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageSideArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUpArrow**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the up arrow, such as "/_layouts/1033/images/formatmap16x16.png".</p></td>
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
<td align="left"><p>Optional. **TRUE</span> to create the menu dynamically. The default is **FALSE**.</p></td>
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








