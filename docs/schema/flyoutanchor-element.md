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
ms.assetid: 3f9dd191-ab3a-4e6a-93c8-d477418cccb8
---

# FlyoutAnchor Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines the anchor point for a flyout menu.

```
<FlyoutAnchor
     Alt="Text"
     CachMenuVersions="TRUE | FALSE"
     Command="Text"
     CommandType="General | OptionSelect | IgnoredByMenu"
     CommandMenuClose="Text"
     Id="Text"
     Image16by16="Url"
     Image16by16Class="CSS Class Selector"
     Image16by16Left="Negative Integer"
     Image16by16Top="Negative Integer"
     Image32by32="Url"
     Image32by32Class="CSS Class Selector"
     Image32by32Left="Negative Integer"
     Image32by32Top="Negative Integer"
     LabelText="Text"
     PopulateDynamically="TRUE | FALSE"
     PopulateQueryCommand="Text"
     PopulateOnlyOnce="TRUE | FALSE"
     Sequence="Integer"
     TemplateAlias="Text"
     ToolTipImage32by32="Url"
     ToolTipImage32by32Class="Text"
     ToolTipImage32by32Left="Negative Integer"
     ToolTipImage32by32Top="Negative Integer"
     ToolTipTitle="Text"
     ToolTipDescription="Text"
     ToolTipHelpKeyWord="Text"
     ToolTipShortcutKey="Text"
/>
```


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
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.md">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the **Command** attribute of a corresponding <a href="commanduihandler-element.md">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandType**</p></td>
<td align="left"><p>Optional. An enumeration value that specifies the type of command.</p>
<ul>
<li><p>**General**. Not a specific type of command.</p></li>
<li><p>**OptionSelection**. A command that is generated when a user selects one option in an option group.</p></li>
<li><p>**IgnoredByMenu**. A command that is used for controls that should not close the menu when they are clicked.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandMenuClose**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the menu closes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the control, such as "Ribbon.WikiPageTab.Share.AlertMe".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image16by16**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap16x16.png".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image16by16Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image16by16Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons.</p>
<p>The value of the **Image16by16Left</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img</span> tag. For example, setting the **Image16by16Left</span> attribute to "-176" and the **Image16by16Top** attribute to "-48" results in an inline style that is similar to the one in the following HTML markup:</p>
<div class="code">
<span codelanguage="html"></span>
HTML 
<span class="copyCode" onclick="CopyCode(this)" onkeypress="CopyCode_CheckKey(this, event)" onmouseover="ChangeCopyCodeIcon(this)" onmouseout="ChangeCopyCodeIcon(this)" tabindex="0"><img src=".." title="Copy code" alt="Copy code" />Copy code</span>
<pre><code><img src="/_layouts/1033/images/formatmap16x16.png" style="position: absolute;left: -176px;top: -48px;" /></code></pre>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Image16by16Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image16by16</span> attribute points to an image file that contains images for many icons. The value of the **Image16by16Top</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image32by32**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap32x32.png".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image32by32Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image32by32Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32</span> attribute points to an image file that contains images for many icons. The value of the **Image32by32Left</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LabelText**</p></td>
<td align="left"><p>Optional. Text for the label.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PopulateDynamically**</p></td>
<td align="left"><p>Optional. **TRUE</span> to create the menu dynamically. The default is **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PopulateQueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when creating a dynamic menu.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PopulateOnlyOnce**</p></td>
<td align="left"><p>Optional. **TRUE** to populate a dynamic menu only the first time that it is accessed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.md">ControlRef</a> element, an <a href="overflowarea-element.md">OverflowArea</a> element, or an <a href="overflowsection-element.md">OverflowSection</a> element in a <a href="grouptemplate-element.md">GroupTemplate</a> element. The **TemplateAlias</span> attribute is used to size and position controls within a group when a template is applied to the group. The value for this attribute should be unique within the group. No two controls that are contained by the same <a href="grouptemplate-element.md">Group</a> element should use the same **TemplateAlias** value.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Class**</p></td>
<td align="left"><p>Optional. The name of a CSS selector to be applied to the tooltip image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left</span> attribute is used to set the CSS **left** attribute when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top</span> attribute is used to set the CSS **top** attribute when the page is created.</p></td>
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
<tr class="odd">
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
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>








