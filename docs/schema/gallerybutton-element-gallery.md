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
ms.assetid: aff7ea4c-6599-4770-bedb-e61e2158291f
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
<td align="left"># GalleryButton Element (Gallery)</td>
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

Defines a gallery button.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><GalleryButton
  Alt="Text"
  Command="Text"
  CommandPreview="Text"
  CommandRevert="Text"
  CommandType="General | OptionSelect | IgnoredByMenu"
  CommandValueId="Text"
  ElementDimensions="Size16by16 | Size32by32 | Size48by48 | Size72by96 | Size96by72 | Size96by96 | Size128by128 | Size190by30 | Size190by40 | Size190by50 | Size190by60"
  Id="Text"
  Image="Url"
  ImageClass="CSS Selector"
  ImageLeft="Negative Integer"
  ImageTop="Negative Integer"
  InnerHTML="HTML"
  MenuItemId="Text"
  QueryCommand="Text"
  Sequence="Text"
  TemplateAlias="Text"
  ToolTipImage32by32="Url"
  ToolTipImage32by32Class="CSS Class Selector"
  ToolTipImage32by32Left="Negative Integer"
  ToolTipImage32by32Top="Negative Integer"
  ToolTipTitle="Text"
  ToolTipDescription="Text"
  ToolTipHelpKeyWord="Text"
  ToolTipShortcutKey="Text"
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
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.md">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the **Command** attribute of a corresponding <a href="commanduihandler-element.md">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandPreview**</p></td>
<td align="left"><p>Optional. The name of the command to execute for previewing a selection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandRevert**</p></td>
<td align="left"><p>Optional. The name of the command to execute to return to the state that existed before previewing a selection.</p></td>
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
<td align="left"><p>**CommandValueId**</p></td>
<td align="left"><p>Optional. A string that is sent with the command event when the button is clicked.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ElementDimensions**</p></td>
<td align="left"><p>Required. An enumeration value that specifies the dimensions of the rectangle in which the button is rendered. Dimensions are in pixels and are in the format "width by height".</p>
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
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the element, such as "buttonStaticStyle1".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains an image to be used as an icon.</p>
<p>If an **Image</span> attribute is not defined, an **InnerHTML** attribute must be defined.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image** attribute points to an image file that contains images for several icons.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image** attribute points to an image file that contains images for several icons.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**InnerHTML**</p></td>
<td align="left"><p>Optional. HTML markup that illustrates the choice that the button represents.</p>
<p>If the **InnerHTML</span> attribute is not defined, the **Image** attribute must be defined.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MenuItemId**</p></td>
<td align="left"><p>Optional. A string that identifies the menu item where the button is located.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when polling for state information.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.md">ControlRef</a> element, an <a href="overflowarea-element.md">OverflowArea</a> element, or an <a href="overflowsection-element.md">OverflowSection</a> element in a <a href="grouptemplate-element.md">GroupTemplate</a> element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the tooltip image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipTitle**</p></td>
<td align="left"><p>Optional. The text that appears as the title of the tooltip.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipDescription**</p></td>
<td align="left"><p>Optional. The text that appears in the body of the tooltip.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipHelpKeyWord**</p></td>
<td align="left"><p>Optional. The keyword that is used by context-sensitive Help.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipShortcutKey**</p></td>
<td align="left"><p>Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".</p></td>
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
<td align="left"><p><a href="gallery-element.md">Gallery</a></p></td>
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
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>








