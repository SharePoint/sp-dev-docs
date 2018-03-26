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
ms.assetid: 34effc7f-c03d-48b0-bc77-6685087cb2a5
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
<td align="left"># CheckBox Element</td>
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

Defines a check box control.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;CheckBox
     Alt=&quot;Text&quot;
     Command=&quot;Text&quot;
     Id=&quot;Text&quot;
     LabelText=&quot;Text&quot;
     MenuItemId=&quot;Text&quot;
     QueryCommand=&quot;Text&quot;
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
<td align="left"><p>Optional. Alternative text that is used for the check box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.htm">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the <span class="keyword">Command** attribute of a corresponding <a href="commanduihandler-element.htm">CommandUIHandler</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. Identifies the control. The value can be a string representation of a GUID or a unique term, such as &quot;Ribbon.Library.Share.NewRibbonCheckBox&quot;.</p></td>
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
<td align="left"><p>**QueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when polling for state information.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.htm">ControlRef</a> element, an <a href="overflowarea-element.htm">OverflowArea</a> element, or an <a href="overflowsection-element.htm">OverflowSection</a> element in a <a href="grouptemplate-element.htm">GroupTemplate</a> element. The <span class="keyword">TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
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
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains images for many icons. The value of the <span class="keyword">ToolTipImage32by32Left</span> attribute is used to set the CSS <span class="keyword">left</span> attribute for the inline style of an HTML <span class="keyword">img** tag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the <span class="keyword">ToolTipImage32by32Top</span> attribute is used to set the CSS <span class="keyword">top</span> attribute for the inline style of an HTML <span class="keyword">img** tag.</p></td>
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
<td align="left"><p><a href="commanduidefinition-element.htm">CommandUIDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="controls-element-group.htm">Controls</a> (Group)</p></td>
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

The following example is an XML fragment that defines a group of
controls that includes a **CheckBox** element.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Group 
      Id="Ribbon.Image.Image.Size"
      Sequence="50"
      Command="ImageSizeGroup"
      Description=""
      Title="$Resources:core,GrpSize;"
      Image32by32Popup="/_layouts/$Resources:core,Language;/images/formatmap32x32.png" Image32by32PopupTop="-128" Image32by32PopupLeft="0"
      Template="Ribbon.Templates.Flexible2"
    >
      <Controls Id="Ribbon.Image.Image.Size.Controls">
        <Label
          Id="Ribbon.Image.Image.Size.HorizontalSizeLabel"
          LabelText="$Resources:core,LabelHorizSize;"
          Command="ImageHorizontalLabel"
          ForId="Ribbon.Image.Image.Size.HorizontalSize"
          Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="-80" Image16by16Left="-16"
          TemplateAlias="o1"
          Sequence="10" 
        />
        <Spinner
           Id="Ribbon.Image.Image.Size.HorizontalSize"
           DefaultUnit="pixel"
           DefaultValue="10"
           AltUpArrow="$Resources:core,cui_spnUpAlt;"
           AltDownArrow="$Resources:core,cui_spnDownAlt;"
           AccelerationInterval="125"
           MultiplierInterval="2000"
           ImeEnabled="false"
           Command="ImageWidth"
           QueryCommand="QueryImageWidth"
           ToolTipTitle="$Resources:core,LabelHorizSize;"
           ToolTipDescription="$Resources:core,cui_stt_ButSizeMenuHorizontalSizeTooltip;"
           TemplateAlias="o2"
          Sequence="20" 
        >
          <Unit
              Name="pixel"
              MinimumValue="1"
              MaximumValue="2000"
              DecimalDigits="0"
              Interval="5"
            >
            <UnitAbbreviation Value="px" />
          </Unit>
          <Unit
              Name="percent"
              MinimumValue="1"
              MaximumValue="100"
              DecimalDigits="0"
              Interval="1"
            >
            <UnitAbbreviation Value="%" />
          </Unit>
        </Spinner>
        <Label
          Id="Ribbon.Image.Image.Size.VertSizeLabel"
          LabelText="$Resources:core,LabelVertSize;"
          Command="ImageVerticalLabel"
          ForId="Ribbon.Image.Image.Size.VerticalSize" 
          Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="-208" Image16by16Left="-224"
          TemplateAlias="o1"
          Sequence="30" 
        />
        <Spinner
          Id="Ribbon.Image.Image.Size.VerticalSize"
          DefaultUnit="pixel"
          DefaultValue="10"
          AltUpArrow="$Resources:core,cui_spnUpAlt;"
          AltDownArrow="$Resources:core,cui_spnDownAlt;"
          AccelerationInterval="125"
          MultiplierInterval="2000"
          Command="ImageHeight"
          ImeEnabled="false"
          QueryCommand="QueryImageHeight"
          ToolTipTitle="$Resources:core,LabelVertSize;"
          ToolTipDescription="$Resources:core,cui_stt_ButSizeMenuVerticalSizeTooltip;"
          TemplateAlias="o2"
          Sequence="40" 
        >
          <Unit
              Name="pixel"
              MinimumValue="1"
              MaximumValue="2000"
              DecimalDigits="0"
              Interval="5"
            >
            <UnitAbbreviation Value="px" />
          </Unit>
          <Unit
              Name="percent"
              MinimumValue="1"
              MaximumValue="100"
              DecimalDigits="0"
              Interval="1"
            >
            <UnitAbbreviation Value="%" />
          </Unit>
        </Spinner>
        <CheckBox
          Id="Ribbon.Image.Image.Size.LockAspect"
          Command="ImageLockRatio"
          QueryCommand="QueryImageLockRatio"
          LabelText="$Resources:core,LabelLockAspect;"
          Alt="$Resources:core,ButLockAspectAlt;"
          TemplateAlias="o2"
          Sequence="50" 
        />
      </Controls>
    </Group>








