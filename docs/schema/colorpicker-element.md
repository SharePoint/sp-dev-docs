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
ms.assetid: 95180186-5185-479e-b682-33fd3b8cea31
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
<td align="left"># ColorPicker Element</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines a color picker control.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ColorPicker
     Command=&quot;Text&quot;
     CommandPreview=&quot;Text&quot;
     CommandRevert=&quot;Text&quot;
     Id=&quot;Text&quot;
     QueryCommand=&quot;Text&quot;
     Sequence=&quot;Integer&quot;
     TemplateAlias=&quot;Text&quot;
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
<td align="left"><p>Optional. The name of the command to execute to preview a color selection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandRevert**</p></td>
<td align="left"><p>Optional. The name of the command to execute to return to the state that existed before previewing a color selection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. Identifies the control. The value can be a string representation of a GUID or a unique term such as &quot;Ribbon.Library.Share.NewRibbonColorPicker&quot;.</p></td>
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
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.htm">ControlRef</a> element, an <a href="overflowarea-element.htm">OverflowArea</a> element, or an <a href="overflowsection-element.htm">OverflowSection</a> element in a <a href="grouptemplate-element.htm">GroupTemplate</a> element. The <span class="keyword">TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
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
<td align="left"><p><a href="colors-element.htm">Colors</a></p></td>
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
<td align="left"><p><a href="controls-element-menusection.htm">Controls</a> (MenuSection)</p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example defines a color picker control as part of a flyout
menu.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <CommandUIDefinition
      Location="Ribbon.ListItem.Workflow.Controls._children">
      <FlyoutAnchor
        Id="Ribbon.ListItem.Workflow.Controls.CPFlyout"
        Sequence="130"
        Alt="Ribbon.ListItem.Workflow.Controls.CPFlyout_ALT"
        LabelText="ColorPickerFlyout"
        Command="Ribbon.ListItem.Workflow.Controls.CPFlyout_CMD"
        PopulateDynamically="false"
        PopulateOnlyOnce="true"
        PopulateQueryCommand="Ribbon.ListItem.Workflow.Controls.CPFlyout_Query_CMD"
        TemplateAlias="o2"
        Image16by16="/_layouts/$Resources:core,Language;/images/formatmap32x32.png"
        Image16by16Class="formatmap16x16_Permissions16"
        Image32by32="/_layouts/$Resources:core,Language;/images/formatmap32x32.png"
        Image32by32Class="formatmap32x32_Permissions32"
        ToolTipTitle="$Resources:core,HighlightColorAlt;"
        ToolTipDescription="$Resources:core,cui_STT_HighlightColor;">
        <Menu Id='Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu'>
          <MenuSection
            Id="Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu.MenuSection"
            Title="Custom ColorPicker">
            <Controls Id="Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu.MenuSection.Controls">
              <ColorPicker
                Id="Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu.MenuSection.ColorPicker"
                Command="Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu.MenuSection.ColorPicker_CMD"
                CommandPreview="Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu.MenuSection.ColorPicker_PRE_CMD"
                CommandRevert="Ribbon.ListItem.Workflow.Controls.CPFlyout.Menu.MenuSection.ColorPicker_REV_CMD" >
                <Colors>
                  <Color Title='Light 1' Style='ms-rteThemeBackColor-1-0' DisplayColor='#ffffff' />
                  <Color Title='Dark 1' Style='ms-rteThemeBackColor-2-0' DisplayColor='#000000' />
                  <Color Title='Light 2' Style='ms-rteThemeBackColor-3-0' DisplayColor='#e9f5fa' />
                  <Color Title='Dark 2' Style='ms-rteThemeBackColor-4-0' DisplayColor='#33557b' />
                  <Color Title='Accent 1' Style='ms-rteThemeBackColor-5-0' DisplayColor='#00adee' />
                  <Color Title='Accent 2' Style='ms-rteThemeBackColor-6-0' DisplayColor='#ec008c' />
                  <Color Title='Accent 3' Style='ms-rteThemeBackColor-7-0' DisplayColor='#1d71b6' />
                  <Color Title='Accent 4' Style='ms-rteThemeBackColor-8-0' DisplayColor='#fd9f08' />
                  <Color Title='Accent 5' Style='ms-rteThemeBackColor-9-0' DisplayColor='#62ce33' />
                  <Color Title='Accent 6' Style='ms-rteThemeBackColor-10-0' DisplayColor='#fae032' />
                  <Color Title='Light 1 Lightest' Style='ms-rteThemeBackColor-1-1' DisplayColor='#f2f2f2' />
                  <Color Title='Dark 1 Lightest' Style='ms-rteThemeBackColor-2-1' DisplayColor='#7f7f7f' />
                  <Color Title='Light 2 Lightest' Style='ms-rteThemeBackColor-3-1' DisplayColor='#c1e3f1' />
                  <Color Title='Dark 2 Lightest' Style='ms-rteThemeBackColor-4-1' DisplayColor='#cfddeb' />
                  <Color Title='Accent 1 Lightest' Style='ms-rteThemeBackColor-5-1' DisplayColor='#c8f0ff' />
                  <Color Title='Accent 2 Lightest' Style='ms-rteThemeBackColor-6-1' DisplayColor='#ffc8e8' />
                  <Color Title='Accent 3 Lightest' Style='ms-rteThemeBackColor-7-1' DisplayColor='#cbe3f6' />
                  <Color Title='Accent 4 Lightest' Style='ms-rteThemeBackColor-8-1' DisplayColor='#feebcd' />
                  <Color Title='Accent 5 Lightest' Style='ms-rteThemeBackColor-9-1' DisplayColor='#e0f5d6' />
                  <Color Title='Accent 6 Lightest' Style='ms-rteThemeBackColor-10-1' DisplayColor='#fef8d6' />
                  <Color Title='Light 1 Lighter' Style='ms-rteThemeBackColor-1-2' DisplayColor='#d8d8d8' />
                  <Color Title='Dark 1 Lighter' Style='ms-rteThemeBackColor-2-2' DisplayColor='#595959' />
                  <Color Title='Light 2 Lighter' Style='ms-rteThemeBackColor-3-2' DisplayColor='#86c8e3' />
                  <Color Title='Dark 2 Lighter' Style='ms-rteThemeBackColor-4-2' DisplayColor='#a0bad8' />
                  <Color Title='Accent 1 Lighter' Style='ms-rteThemeBackColor-5-2' DisplayColor='#92e1ff' />
                  <Color Title='Accent 2 Lighter' Style='ms-rteThemeBackColor-6-2' DisplayColor='#ff91d2' />
                  <Color Title='Accent 3 Lighter' Style='ms-rteThemeBackColor-7-2' DisplayColor='#97c7ee' />
                  <Color Title='Accent 4 Lighter' Style='ms-rteThemeBackColor-8-2' DisplayColor='#fed89c' />
                  <Color Title='Accent 5 Lighter' Style='ms-rteThemeBackColor-9-2' DisplayColor='#c0ebad' />
                  <Color Title='Accent 6 Lighter' Style='ms-rteThemeBackColor-10-2' DisplayColor='#fef8d6' />
                  <Color Title='Light 1 Medium' Style='ms-rteThemeBackColor-1-3' DisplayColor='#bfbfbf' />
                  <Color Title='Dark 1 Medium' Style='ms-rteThemeBackColor-2-3' DisplayColor='#3f3f3f' />
                  <Color Title='Light 2 Medium' Style='ms-rteThemeBackColor-3-3' DisplayColor='#2c98c4' />
                  <Color Title='Dark 2 Medium' Style='ms-rteThemeBackColor-4-3' DisplayColor='#7098c4' />
                  <Color Title='Accent 1 Medium' Style='ms-rteThemeBackColor-5-3' DisplayColor='#5bd2ff' />
                  <Color Title='Accent 2 Medium' Style='ms-rteThemeBackColor-6-3' DisplayColor='#ff5abc' />
                  <Color Title='Accent 3 Medium' Style='ms-rteThemeBackColor-7-3' DisplayColor='#64abe6' />
                  <Color Title='Accent 4 Medium' Style='ms-rteThemeBackColor-8-3' DisplayColor='#fdc56a' />
                  <Color Title='Accent 5 Medium' Style='ms-rteThemeBackColor-9-3' DisplayColor='#b9de8c' />
                  <Color Title='Accent 6 Medium' Style='ms-rteThemeBackColor-10-3' DisplayColor='#fcec84' />
                  <Color Title='Light 1 Darker' Style='ms-rteThemeBackColor-1-4' DisplayColor='#a5a5a5' />
                  <Color Title='Dark 1 Darker' Style='ms-rteThemeBackColor-2-4' DisplayColor='#262626' />
                  <Color Title='Light 2 Darker' Style='ms-rteThemeBackColor-3-4' DisplayColor='#164c62' />
                  <Color Title='Dark 2 Darker' Style='ms-rteThemeBackColor-4-4' DisplayColor='#26405c' />
                  <Color Title='Accent 1 Darker' Style='ms-rteThemeBackColor-5-4' DisplayColor='#0081b2' />
                  <Color Title='Accent 2 Darker' Style='ms-rteThemeBackColor-6-4' DisplayColor='#b10069' />
                  <Color Title='Accent 3 Darker' Style='ms-rteThemeBackColor-7-4' DisplayColor='#155488' />
                  <Color Title='Accent 4 Darker' Style='ms-rteThemeBackColor-8-4' DisplayColor='#c27801' />
                  <Color Title='Accent 5 Darker' Style='ms-rteThemeBackColor-9-4' DisplayColor='#499b25' />
                  <Color Title='Accent 6 Darker' Style='ms-rteThemeBackColor-10-4' DisplayColor='#dbbf05' />
                  <Color Title='Light 1 Darkest' Style='ms-rteThemeBackColor-1-5' DisplayColor='#7f7f7f' />
                  <Color Title='Dark 1 Darkest' Style='ms-rteThemeBackColor-2-5' DisplayColor='#0c0c0c' />
                  <Color Title='Light 2 Darkest' Style='ms-rteThemeBackColor-3-5' DisplayColor='#081e27' />
                  <Color Title='Dark 2 Darkest' Style='ms-rteThemeBackColor-4-5' DisplayColor='#192a3e' />
                  <Color Title='Accent 1 Darkest' Style='ms-rteThemeBackColor-5-5' DisplayColor='#005677' />
                  <Color Title='Accent 2 Darkest' Style='ms-rteThemeBackColor-6-5' DisplayColor='#760046' />
                  <Color Title='Accent 3 Darkest' Style='ms-rteThemeBackColor-7-5' DisplayColor='#0e385b' />
                  <Color Title='Accent 4 Darkest' Style='ms-rteThemeBackColor-8-5' DisplayColor='#815001' />
                  <Color Title='Accent 5 Darkest' Style='ms-rteThemeBackColor-9-5' DisplayColor='#316819' />
                  <Color Title='Accent 6 Darkest' Style='ms-rteThemeBackColor-10-5' DisplayColor='#927f03' />
                </Colors>
              </ColorPicker>
            </Controls>
          </MenuSection>
        </Menu>
      </FlyoutAnchor>
    </CommandUIDefinition>








