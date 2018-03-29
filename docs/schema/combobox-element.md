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
ms.assetid: 79d28a90-c4bc-47a1-847f-503f3af8fec7
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
<td align="left"># ComboBox Element</td>
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

Defines a combo box control.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ComboBox
  AllowFreeForm=&quot;TRUE | FALSE&quot;
  AltArrow=&quot;Text&quot;
  Alt=&quot;Text&quot;
  AutoComplete=&quot;TRUE | FALSE&quot;
  AutoCompleteDelay=&quot;Integer&quot;
  CacheMenuVersions=&quot;TRUE | FALSE&quot;
  Command=&quot;Text&quot;
  CommandMenuOpen=&quot;Text&quot;
  CommandMenuClose=&quot;Text&quot;
  CommandPreview=&quot;Text&quot;
  CommandPreviewRevert=&quot;Text&quot;
  ImeEnabled=&quot;TRUE | FALSE&quot;
  InitialItem=&quot;Text&quot;
  Id=&quot;Text&quot;
  QueryCommand=&quot;Text&quot;
  PopulateDynamically=&quot;TRUE | FALSE&quot;
  PopulateQueryCommand=&quot;Text&quot;
  PopulateOnlyOnce=&quot;TRUE | FALSE&quot;
  Sequence=&quot;Integer&quot;
  TemplateAlias=&quot;Text&quot;
  ToolTipImage32by32=&quot;Url&quot;
  ToolTipImage32by32Class=&quot;CSS Class Selector&quot;
  ToolTipImage32by32Left=&quot;Negative Integer&quot;
  ToolTipImage32by32Top=&quot;Negative Integer&quot;
  ToolTipTitle=&quot;Text&quot;
  ToolTipDescription=&quot;Text&quot;
  ToolTipHelpKeyWord=&quot;Text&quot;
  ToolTipShortcutKey=&quot;Text&quot;
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
<td align="left"><p>**AllowFreeForm**</p></td>
<td align="left"><p>Optional. **FALSE</span> to restrict input so that only items on the menu are submitted; otherwise, **TRUE</span>. The default is **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AltArrow**</p></td>
<td align="left"><p>Optional. Alternative text that is used for the drop-down arrow button.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Alt**</p></td>
<td align="left"><p>Optional. Alternative text that is used for the combo box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AutoComplete**</p></td>
<td align="left"><p>Optional. **FALSE</span> to turn AutoComplete suggestions off. The default is **TRUE** (on).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoCompleteDelay**</p></td>
<td align="left"><p>Optional. The delay in milliseconds before AutoComplete fills the text box with a best-guess match. The default is 100.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CacheMenuVersions**</p></td>
<td align="left"><p>Optional. **TRUE</span> to store previously constructed versions of a dynamic menu. The default is **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.md">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the **Command** attribute of a corresponding <a href="commanduihandler-element.md">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandMenuOpen**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the drop-down menu is opened.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandMenuClose**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the drop-down menu is closed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandPreview**</p></td>
<td align="left"><p>Optional. The name of the command to execute for previewing a selection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandPreviewRevert**</p></td>
<td align="left"><p>Optional. The name of the command to execute to return to the state that existed before previewing a selection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImeEnabled**</p></td>
<td align="left"><p>Optional. **TRUE</span> to set the <a href="http://msdn.microsoft.com/library/a595a28f-7a9d-4135-ad5c-d66ae45ec682.aspx">Input Method Editor (IME)</a> to the **active** state.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**InitialItem**</p></td>
<td align="left"><p>Optional. The ID of the menu item to display in the text box when it is first rendered.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the control, such as &quot;Ribbon.EditingTools.CPEditTab.Font.Fonts&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when polling for state information.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PopulateDynamically**</p></td>
<td align="left"><p>Optional. **TRUE</span> to create the menu dynamically. The default is **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PopulateQueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when creating a dynamic menu.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PopulateOnlyOnce**</p></td>
<td align="left"><p>Optional. **TRUE</span> to populate a dynamic menu only the first time that it is accessed. The default is **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.md">ControlRef</a> element, an <a href="overflowarea-element.md">OverflowArea</a> element, or an <a href="overflowsection-element.md">OverflowSection</a> element in a <a href="grouptemplate-element.md">GroupTemplate</a> element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as &quot;/_layouts/1033/images/formatmap32x32.png&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the tooltip image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipTitle**</p></td>
<td align="left"><p>Optional. The text that appears as the title of the tooltip.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipDescription**</p></td>
<td align="left"><p>Optional. The text that appears in the body of the tooltip.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipHelpKeyWord**</p></td>
<td align="left"><p>Optional. The keyword that is used by context-sensitive Help.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipShortcutKey**</p></td>
<td align="left"><p>Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is &quot;ALT + J&quot;. The tooltip will display the text for the shortcut key in parentheses after the tooltip title: &quot;(ALT + J)&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Width**</p></td>
<td align="left"><p>Optional. The width in pixels of the text box that is part of this combo box.</p></td>
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
<td align="left"><p><a href="commanduidefinition-element.md">CommandUIDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="controls-element-group.md">Controls</a> (Group)</p></td>
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








