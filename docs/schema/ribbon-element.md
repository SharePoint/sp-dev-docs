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
ms.assetid: 98ffbc4d-ec57-4dbd-8e3b-d16e17bc75dc
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
<td align="left"># Ribbon Element</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Contains elements that define the Server ribbon user interface.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Ribbon
  Id=&quot;Text&quot;
  Image32by32GroupPopupDefault=&quot;Url&quot;
  Image32by32GroupPopupDefaultClass=&quot;CSS Selector&quot;
  Image32by32GroupPopupDefaultLeft=&quot;Negative Integer&quot;
  Image32by32GroupPopupDefaultTop=&quot;Negative Integer&quot;
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
  RootEventCommand=&quot;Text&quot;
  TabSwitchCommand=&quot;Text&quot;
  ScaleCommand=&quot;Text&quot;
  TextDirection=&quot;Text&quot;
  ToolTipFooterText=&quot;Text&quot;
  ToolTipFooterImage16by16=&quot;Url&quot;
  ToolTipFooterImage16by16Class=&quot;CSS Selector&quot;
  ToolTipFooterImage16by16Left=&quot;Negative Integer&quot;
  ToolTipFooterImage16by16Top=&quot;Negative Integer&quot;
  ToolTipDisabledCommandImage16by16=&quot;Url&quot;
  ToolTipDisabledCommandImage16by16Class=&quot;CSS Selector&quot;
  ToolTipDisabledCommandImage16by16Left=&quot;Negative Integer&quot;
  ToolTipDisabledCommandImage16by16Top=&quot;Negative Integer&quot;
  ToolTipDisabledCommandDescription=&quot;Text&quot;
  ToolTipDisabledCommandTitle=&quot;Text&quot;
  ToolTipDisabledCommandHelpKey=&quot;Text&quot;
  ToolTipHelpCommand=&quot;Text&quot;
  ToolTipSelectedItemTitlePrefix=&quot;Text&quot;
  ShortcutKeyJumpToRibbon_Ctrl=&quot;Text&quot;
  ShortcutKeyJumpToRibbon_Alt=&quot;Text&quot;
  ShortcutKeyJumpToRibbon_Shift=&quot;Text&quot;
  ShortcutKeyJumpToRibbon_AccessKey=&quot;Text&quot;
  ShortcutKeyJumpToFirstControl_Ctrl=&quot;Text&quot;
  ShortcutKeyJumpToFirstControl_Alt=&quot;Text&quot;
  ShortcutKeyJumpToFirstControl_Shift=&quot;Text&quot;
  ShortcutKeyJumpToFirstControl_AccessKey=&quot;Text&quot;
  ATContextualTabText=&quot;Text&quot;
  ATTabPositionText=&quot;Text&quot;
  NavigationHelpText=&quot;Text&quot;
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
<td align="left"><p>Required. A string that identifies the element, such as &quot;Ribbon&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image32by32GroupPopupDefault**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to use for the pop-up image, such as &quot;/_layouts/1033/images/formatmap32x32.png&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image32by32GroupPopupDefaultClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the pop-up image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image32by32GroupPopupDefaultLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32GroupPopupDefault</span> attribute points to an image file that contains the images for many icons. The value of the **Image32by32GroupPopupDefaultLeft</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image32by32GroupPopupDefaultTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32GroupPopupDefault</span> attribute points to an image file that contains the images for many icons. The value of the **Image32by32GroupPopupDefaultTop</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageSideArrowTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootEventCommand**</p></td>
<td align="left"><p>Optional. The name of the default command to invoke when a ribbon event occurs.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TabSwitchCommand**</p></td>
<td align="left"><p>Optional. The name of the command to invoke when the active ribbon tab is changed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ScaleCommand**</p></td>
<td align="left"><p>Optional. The name of the command to invoke when the ribbon is scaled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TextDirection**</p></td>
<td align="left"><p>Optional. A string that specifies the direction in which to draw text, such as &quot;ltr&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipFooterText**</p></td>
<td align="left"><p>Optional. Text to use in the tooltip footer.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipFooterImage16by16**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the tooltip footer, such as &quot;/_layouts/1033/images/formatmap16x16.png&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipFooterImage16by16Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipFooterImage16by16Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipFooterImage16by16Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipDisabledCommandImage16by16**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use in the tooltip when the control is disabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipDisabledCommandImage16by16Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipDisabledCommandImage16by16Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipDisabledCommandImage16by16Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipDisabledCommandDescription**</p></td>
<td align="left"><p>Optional. Text of the tooltip when the control is disabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipDisabledCommandTitle**</p></td>
<td align="left"><p>Optional. Title of the tooltip when the control is disabled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipDisabledCommandHelpKey**</p></td>
<td align="left"><p>Optional. Key that invokes Help when the control is disabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipHelpCommand**</p></td>
<td align="left"><p>Optional. The name of the command that invokes Help when the control is disabled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipSelectedItemTitlePrefix**</p></td>
<td align="left"><p>Optional. Prefix for the title of the tooltip for the selected item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShortcutKeyJumpToRibbon_Ctrl**</p></td>
<td align="left"><p>Optional. Either &quot;t&quot; or &quot;f&quot;, indicating whether the CTRL key should be pressed to set focus to the first ribbon tab.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShortcutKeyJumpToRibbon_Alt**</p></td>
<td align="left"><p>Optional. Either &quot;t&quot; or &quot;f&quot;, indicating whether the ALT key should be pressed to set focus to the first ribbon tab.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShortcutKeyJumpToRibbon_Shift**</p></td>
<td align="left"><p>Optional. Either &quot;t&quot; or &quot;f&quot;, indicating whether the SHIFT key should be pressed to set focus to the first ribbon tab.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShortcutKeyJumpToRibbon_AccessKey**</p></td>
<td align="left"><p>Optional. A one-character string that specifies the key that should be pressed to set focus to the first ribbon tab.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShortcutKeyJumpToFirstControl_Ctrl**</p></td>
<td align="left"><p>Optional. Either &quot;t&quot; or &quot;f&quot;, indicating whether the CTRL key should be pressed to set focus on the first control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShortcutKeyJumpToFirstControl_Alt**</p></td>
<td align="left"><p>Optional. Either &quot;t&quot; or &quot;f&quot;, indicating whether the ALT key should be pressed to set focus on the first control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShortcutKeyJumpToFirstControl_Shift**</p></td>
<td align="left"><p>Optional. Either &quot;t&quot; or &quot;f&quot;, indicating whether the SHIFT key should be pressed to set focus on the first control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShortcutKeyJumpToFirstControl_AccessKey**</p></td>
<td align="left"><p>Optional. A one character string that specifies the key that should be pressed to set focus on the first control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ATContextualTabText**</p></td>
<td align="left"><p>Optional. Hidden text to convey contextual tab information to screen readers, such as &quot; {0} group. Tab {1} of {2}.&quot;</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ATTabPositionText**</p></td>
<td align="left"><p>Optional. Hidden text to convey tab information to screen readers, such as &quot;Tab {0} of {1}.&quot;</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NavigationHelpText**</p></td>
<td align="left"><p>Optional. The text of a message that describes how to navigate the ribbon using the keyboard, which is displayed as hidden text for a screen reader.</p></td>
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
<td align="left"><p><a href="tabs-element.md">Tabs</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="contextualtabs-element.md">ContextualTabs</a></p></td>
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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Customizing the Server
Ribbon](http://msdn.microsoft.com/library/dedfad80-0f32-44cd-9080-1507be3288e7(Office.15).aspx)








