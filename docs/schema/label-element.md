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
ms.assetid: 6b271365-08bf-470c-9e5d-8f9240e79baa
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
<td align="left"># Label Element</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Defines a label control.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Label
  ForId=&quot;Text&quot;
  Id=&quot;Text&quot;
  LabelText=&quot;Text&quot;
  Image16by16=&quot;Url&quot;
  Image16by16Class=&quot;CSS Class Selector&quot;
  Image16by16Left=&quot;Negative Integer&quot;
  Image16by16Top=&quot;Negative Integer&quot;
  Sequence=&quot;Integer&quot;
  TemplateAlias=&quot;Text&quot;
  QueryCommand=&quot;Text&quot;
  Command=&quot;Text&quot;
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
<td align="left"><p>**ForId**</p></td>
<td align="left"><p>Optional. The ID of the control that this control labels.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the control, such as &quot;Ribbon.Image.Image.Size.HorizontalSizeLabel&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LabelText**</p></td>
<td align="left"><p>Optional. The text of the label.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image16by16**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to be used as an icon, such as &quot;/_layouts/1033/images/formatmap16x16.png&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image16by16Class**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image16by16Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image16by16</span> attribute points to an image file that contains images for many icons. The value of the <span class="keyword">Image16by16Left</span> attribute is used to set the CSS <span class="keyword">left</span> attribute for the inline style of an HTML <span class="keyword">img** tag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image16by16Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image16by16</span> attribute points to an image file that contains images for many icons. The value of the <span class="keyword">Image16by16Top</span> attribute is used to set the CSS <span class="keyword">top</span> attribute for the inline style of an HTML <span class="keyword">img** tag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.htm">ControlRef</a> element, an <a href="overflowarea-element.htm">OverflowArea</a> element, or an <a href="overflowsection-element.htm">OverflowSection</a> element in a <a href="grouptemplate-element.htm">GroupTemplate</a> element. The <span class="keyword">TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**QueryCommand**</p></td>
<td align="left"><p>Optional. The name of the command to execute when polling for state information.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the label receives focus.</p></td>
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
<td align="left"><p><a href="controls-element-group.htm">Controls</a></p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example is an XML fragment that shows a <span
class="keyword">Controls</span> element that contains two text box
controls and two labels for them.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Controls Id="Ribbon.Link.Link.Properties.Controls">
      <Label
        Id="Ribbon.Link.Link.Properties.LinkAddressLabel"
        LabelText="$Resources:core,LabelLinkAddress;"
        Command="LinkUrlLabel"
        ForId="Ribbon.Link.Link.Properties.LinkAddress"
        Sequence="10"
        Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="-160" Image16by16Left="-224"
        TemplateAlias="o1"/>
      <TextBox
        Id="Ribbon.Link.Link.Properties.LinkAddress"
        Command="LinkUrlChanged"
        ToolTipTitle="$Resources:core,cui_LinkAddress;"
        ToolTipDescription="$Resources:core,cui_STT_LinkAddress;"
        QueryCommand="QueryLinkUrl"
        MaxLength="512"
        TemplateAlias="o2"
        Sequence="20"
                    />
      <Label
        Id="Ribbon.Link.Link.Properties.LinkTooltipLabel"
        LabelText="$Resources:core,LabelLinkTooltip;"
        Command="LinkAltLabel"
        ForId="Ribbon.Link.Link.Properties.LinkTooltip"
        Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="0" Image16by16Left="-88"
        Sequence="30"
        TemplateAlias="o1"/>
      <TextBox
        ToolTipTitle="$Resources:core,cui_LinkTooltip;"
        ToolTipDescription="$Resources:core,cui_STT_LinkTooltip;"
        Id="Ribbon.Link.Link.Properties.LinkTooltip"
        Command="LinkTitleChanged"
        QueryCommand="QueryLinkTitle"
        MaxLength="128"
        Sequence="40"
        TemplateAlias="o2"/>
    </Controls>








