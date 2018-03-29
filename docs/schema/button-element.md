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
ms.assetid: 2e49d1b4-8bab-4671-b843-5beec6767417
---

# Button Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a push button control.

```
<Button
     Alt="Text"
     Command="Text"
     CommandType="General | OptionSelect | IgnoredByMenu"
     CommandValueId="Text"
     Description="Text"
     Id="Text"
     Image32by32="Url"
     Image32by32Class="CSS Class Selector"
     Image32by32Left="Negative Integer"
     Image32by32Top="Negative Integer"
     Image16by16="Url"
     Image16by16Class="CSS Class Selector"
     Image16by16Left="Negative Integer"
     Image16by16Top="Negative Integer"
     LabelCss="Text"
     LabelText="Text"
     MenuItemId="Text"
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
/ >
```

<br/>

### Attributes

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
<td align="left"><p>Optional. Alternative text for the button.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.md">CommandUIDefinition</a> element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding <a href="commanduihandler-element.md">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandType**</p></td>
<td align="left"><p>Optional. An enumeration value that specifies the type of command.</p>
<ul>
<li><p>**General**. Not a specific type of command.</p></li>
<li><p>**OptionSelection**. A command that is generated when a user selects one option in an option group.</p></li>
<li><p>**IgnoredByMenu**. A command that is used for controls that should not close the menu when clicked.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandValueId**</p></td>
<td align="left"><p>Optional. A string that is sent with the command event when the button is clicked.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional. A string that describes the button. The description is displayed only when the button is in a menu and is being rendered with the **Menu32** display mode.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the control, such as "Ribbon.Library.Share.NewRibbonButton".</p></td>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32** attribute points to an image file that contains images for many icons.</p>
<p>The value of the **Image32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag. For example, setting the **Image32by32Left** attribute to "-160" and the **Image32by32Top** attribute to "-448" results in an inline style that is similar to the one in the following HTML markup: <br/><br/><img src="/_layouts/1033/images/formatmap32x32.png" style="position: absolute;left: -160px;top: -448px;" /></p>
</td>
</tr>
<tr class="even">
<td align="left"><p>**Image32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32** attribute points to an image file that contains the images for many icons. The value of the **Image32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.</p></td>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image16by16</span> attribute points to an image file that contains images for many icons. The value of the <span class="keyword">Image16by16Left</span> attribute is used to set the CSS <span class="keyword">left</span> attribute for the inline style of an HTML <span class="keyword">img** tag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image16by16Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image16by16</span> attribute points to an image file that contains images for many icons. The value of the <span class="keyword">Image16by16Top</span> attribute is used to set the CSS <span class="keyword">top</span> attribute for the inline style of an HTML <span class="keyword">img** tag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LabelCss**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the control's label.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LabelText**</p></td>
<td align="left"><p>Optional. The text to label the control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MenuItemId**</p></td>
<td align="left"><p>Optional. A string that identifies the menu item where the button is located.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias** attribute for a <a href="controlref-element.md">ControlRef</a> element, an <a href="overflowarea-element.md">OverflowArea</a> element, or an <a href="overflowsection-element.md">OverflowSection</a> element in a <a href="grouptemplate-element.md">GroupTemplate</a> element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute when the page is created.</p></td>
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
<td align="left"><p>Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT+J, the value for this attribute is "ALT+J". The tooltip displays the text for the shortcut key in parentheses after the tooltip title: "(ALT+J)".</p></td>
</tr>
</tbody>
</table>

<br/>

None

<br/>

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

<br/>

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

<br/>

### Example

The following example shows how to add a button control to the Server ribbon. The example adds a "Help" button to the ribbon in the same group as the built-in **New Document**, **New Folder**, and **Upload Document** controls:

```XML
    <?xml version="1.0" encoding="utf-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <CustomAction
        Id="NewUIRibbonControl"
        RegistrationType="List"
        RegistrationId="101"
        Location="CommandUI.Ribbon">
        <CommandUIExtension>
          <CommandUIDefinitions>
            <CommandUIDefinition
               Location="Ribbon.Documents.New.Controls._children">
              <Button
                 Id="NewUIRibbonControl.ShowHelp"
                 Alt="Help"
                 Sequence="1981"
                 Command="ShowHelp"
                 Image32by32="/_layouts/images/newui/dochelp.png"
                 LabelText="Help"
                 TemplateAlias="o1"/>
            </CommandUIDefinition>
          </CommandUIDefinitions>
          <CommandUIHandlers>
            <CommandUIHandler
             Command="ShowHelp"
             CommandAction="javascript:window.open('http://msdn.microsoft.com/en-us/library/ee539395%28office.14%29.aspx');" />
          </CommandUIHandlers>
        </CommandUIExtension>
      </CustomAction>
    </Elements>
```

## See also

- [Walkthrough: Adding a Button to the Server Ribbon](http://msdn.microsoft.com/library/82d7078a-696d-4c93-99bf-d40cfb4db305(Office.15).aspx)








