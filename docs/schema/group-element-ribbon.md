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
ms.assetid: ac68e3f5-6d5d-4384-86d4-4e94132d06d4
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
<td align="left"># Group Element (Ribbon)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines a group of controls.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Group
  Command=&quot;Text&quot;
  Description=&quot;Text&quot;
  Id=&quot;Text&quot;
  Image32by32Popup=&quot;Url&quot;
  Image32by32PopupClass=&quot;CSS Class Selector&quot;
  Image32by32PopupLeft=&quot;Negative Integer&quot;
  Image32by32PopupTop=&quot;Negative Integer&quot;
  Sequence=&quot;Integer&quot;
  Template=&quot;Text&quot;
  Title=&quot;Text&quot;
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
<td align="left"><p>Optional. The value is used to enable or disable the controls in the group. If the **Command** attribute is present and has a value, the ribbon polls to see if the command is disabled. If it is disabled, the ribbon does not poll for any commands that are associated with the controls in the group; the controls are also effectively disabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional. A description of the group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required. A string that identifies the group, such as &quot;Ribbon.DocLibListForm.Edit.Clipboard&quot;.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image32by32Popup**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used to represent the group, such as &quot;/_layouts/1033/images/formatmap32x32.png&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image32by32PopupClass**</p></td>
<td align="left"><p>Optional. The name of a CSS class selector to be applied to the image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image32by32PopupLeft**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32Popup</span> attribute points to an image file that contains images for many icons. The value of the **Image32by32PopupLeft</span> attribute is used to set the CSS **left</span> attribute for the inline style of an HTML **img** tag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image32by32PopupTop**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32Popup</span> attribute points to an image file that contains images for many icons. The value of the **Image32by32PopupTop</span> attribute is used to set the CSS **top</span> attribute for the inline style of an HTML **img** tag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Template**</p></td>
<td align="left"><p>Optional. A string that corresponds to the **Id** attribute of a <a href="grouptemplate-element.md">GroupTemplate</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional. The text that is displayed as the group's title on the ribbon and in the tooltip.</p></td>
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
<td align="left"><p><a href="controls-element-group.md">Controls</a></p></td>
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
<td align="left"><p><a href="groups-element.md">Groups</a></p></td>
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

The following XML fragment defines a group that contains two buttons.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Group
      Id="Ribbon.WikiPageTab.CustomGroup"
      Sequence="55"
      Description="Custom Group"
      Title="Custom"
      Command="EnableCustomGroup"
      Template="Ribbon.Templates.Flexible2">
      <Controls Id="Ribbon.WikiPageTab.CustomGroup.Controls">
        <Button
          Id="Ribbon.WikiPageTab.CustomGroup.CustomGroupHello"
          Command="CustomGroupHelloWorld"
          Image16by16="/_layouts/images/FILMSTRP.GIF"
          Image32by32="/_layouts/images/PPEOPLE.GIF"
          LabelText="Hello, World"
          TemplateAlias="o2"
          Sequence="15" />
        <Button
          Id="Ribbon.WikiPageTab.CustomGroup.CustomGroupGoodbye"
          Command="CustomGroupGoodbyeWorld"
          Image16by16="/_layouts/images/FILMSTRP.GIF"
          Image32by32="/_layouts/images/PPEOPLE.GIF"
          LabelText="Good-bye, World"
          TemplateAlias="o2"
          Sequence="18" />
      </Controls>
    </Group>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Walkthrough: Adding a Group to the Server
Ribbon](http://msdn.microsoft.com/library/0696705f-e805-49e7-90c5-0e9e5f894d6a(Office.15).aspx)








