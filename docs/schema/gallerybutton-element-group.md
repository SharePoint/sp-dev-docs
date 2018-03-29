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
ms.assetid: 67ae0276-4cde-4bc8-a44d-28e7b7ff2052
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># GalleryButton Element (Group)</td>
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

Defines a gallery button.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;GalleryButton
  Alt=&quot;Text&quot;
  Command=&quot;Text&quot;
  CommandPreview=&quot;Text&quot;
  CommandRevert=&quot;Text&quot;
  CommandType=&quot;General | OptionSelect | IgnoredByMenu&quot;
  CommandValueId=&quot;Text&quot;
  ElementDimensions=&quot;Size16by16 | Size32by32 | Size48by48 | Size72by96 | Size96by72 | Size96by96 | Size128by128 | Size190by30 | Size190by40 | Size190by50 | Size190by60&quot;
  Id=&quot;Text&quot;
  Image=&quot;Url&quot;
  ImageClass=&quot;CSS Selector&quot;
  ImageLeft=&quot;Negative Integer&quot;
  ImageTop=&quot;Negative Integer&quot;
  InnerHTML=&quot;HTML&quot;
  MenuItemId=&quot;Text&quot;
  QueryCommand=&quot;Text&quot;
  Sequence=&quot;Integer&quot;
  TemplateAlias=&quot;Text&quot;
  ToolTipImage32by32=&quot;Url&quot;
  ToolTipImage32by32Class=&quot;CSS Selector&quot;
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
<td align="left"><p>Optional. Alternative text that is used for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Optional. The name of the command to execute when the control is clicked. If the control is in a <a href="commanduidefinition-element.htm">CommandUIDefinition</a> element, the value of the **Command</span> attribute of the control should be the same as the value of the <span class="keyword">Command** attribute of a corresponding <a href="commanduihandler-element.htm">CommandUIHandler</a> element.</p></td>
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
<td align="left"><p>Required. An enumeration value that specifies the dimensions of the rectangle in which the button is rendered. Dimensions are in pixels and are in the format &quot;width by height&quot;.</p>
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
<td align="left"><p>Required. A string that identifies the element, such as &quot;buttonStaticStyle1&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Image**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains an image to be used as an icon.</p>
<p>If an **Image</span> attribute is not defined, an <span class="keyword">InnerHTML** attribute must be defined.</p></td>
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
<p>If the **InnerHTML</span> attribute is not defined, the <span class="keyword">Image** attribute must be defined.</p></td>
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
<td align="left"><p>Optional. A string that matches the value of the **TemplateAlias</span> attribute for a <a href="controlref-element.htm">ControlRef</a> element, an <a href="overflowarea-element.htm">OverflowArea</a> element, or an <a href="overflowsection-element.htm">OverflowSection</a> element in a <a href="grouptemplate-element.htm">GroupTemplate</a> element. The <span class="keyword">TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32**</p></td>
<td align="left"><p>Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as &quot;/_layouts/1033/images/formatmap32x32.png&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Class**</p></td>
<td align="left"><p>Optional. The name of a CSS selector to be applied to the tooltip image.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToolTipImage32by32Left**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the <span class="keyword">ToolTipImage32by32Left</span> attribute is used to set the CSS <span class="keyword">left** attribute when the page is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolTipImage32by32Top**</p></td>
<td align="left"><p>Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32</span> attribute points to an image file that contains the images for many icons. The value of the <span class="keyword">ToolTipImage32by32Top</span> attribute is used to set the CSS <span class="keyword">top** attribute when the page is created.</p></td>
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

The following example is an XML fragment that defines a group of gallery
button controls that are used for applying a formatting style.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Group
        Id="grpStyles"
        Description=""
        Title="Group Styles"
        Template="tmpStyles">
        <Controls>
            <GalleryButton
                Id="buttonStaticStyle1"
                Command="ApplyStyle"
                QueryCommand="QueryStyle"
                InnerHTML="&lt;DIV class=&quot;PreviewStyleContainer&quot;&gt;&lt;P class=&quot;PreviewStaticStyle1&quot; id=&quot;labelPreviewContent0&quot;&gt;&lt;/P&gt;&lt;P class=&quot;PreviewStyleLabel&quot; id=&quot;labelPreviewStyle0&quot;&gt;&lt;/P&gt;&lt;/DIV&gt;"
                ElementDimensions="Size64by48"
                LabelText="Heading1"
                Alt="Heading1"
                TemplateAlias="preview1"/>
            <GalleryButton
                Id="buttonStaticStyle2"
                Command="ApplyStyle"
                QueryCommand="QueryStyle"
                InnerHTML="&lt;DIV class=&quot;PreviewStyleContainer&quot;&gt;&lt;P class=&quot;PreviewStaticStyle2&quot; id=&quot;labelPreviewContent1&quot;&gt;&lt;/P&gt;&lt;P class=&quot;PreviewStyleLabel&quot; id=&quot;labelPreviewStyle1&quot;&gt;&lt;/P&gt;&lt;/DIV&gt;"
                ElementDimensions="Size64by48"
                LabelText="Heading2"
                Alt="Heading2"
                TemplateAlias="preview2"/>
            <GalleryButton
                Id="buttonStaticStyle3"
                QueryCommand="QueryStyle"
                Command="ApplyStyle"
                InnerHTML="&lt;DIV class=&quot;PreviewStyleContainer&quot;&gt;&lt;P class=&quot;PreviewStaticStyle3&quot; id=&quot;labelPreviewContent2&quot;&gt;&lt;/P&gt;&lt;P class=&quot;PreviewStyleLabel&quot; id=&quot;labelPreviewStyle2&quot;&gt;&lt;/P&gt;&lt;/DIV&gt;"
                ElementDimensions="Size64by48"
                LabelText="Heading3"
                Alt="Heading3"
                TemplateAlias="preview3"/>
            <GalleryButton
                Id="buttonStaticStyle4"
                Command="ApplyStyle"
                QueryCommand="QueryStyle"
                InnerHTML="&lt;DIV class=&quot;PreviewStyleContainer&quot;&gt;&lt;P class=&quot;PreviewStaticStyle4&quot; id=&quot;labelPreviewContent3&quot;&gt;&lt;/P&gt;&lt;P class=&quot;PreviewStyleLabel&quot; id=&quot;labelPreviewStyle3&quot;&gt;&lt;/P&gt;&lt;/DIV&gt;"
                ElementDimensions="Size64by48"
                LabelText="Quote"
                Alt="Quote"
                TemplateAlias="preview4"/>
            <GalleryButton
                Id="buttonStaticStyle5"
                Command="ApplyStyle"
                QueryCommand="QueryStyle"
                InnerHTML="&lt;DIV class=&quot;PreviewStyleContainer&quot;&gt;&lt;P class=&quot;PreviewStaticStyle5&quot; id=&quot;labelPreviewContent4&quot;&gt;&lt;/P&gt;&lt;P class=&quot;PreviewStyleLabel&quot; id=&quot;labelPreviewStyle4&quot;&gt;&lt;/P&gt;&lt;/DIV&gt;"
                ElementDimensions="Size64by48"
                LabelText="Citation"
                Alt="Citation"
                TemplateAlias="preview5"/>
            <FlyoutAnchor
                Alt="STR@L_MenuMoreStyles"
                Id="fsfaMoreStyles"
                Command="MenuOpenEditOnly"
                MenuAlt="STR@L_MenuMoreStyles"
                LabelText="STR@L_MenuMoreStyles"
                Image32by32="IMGMAP@one@UxGalWordQuickFormatsHH"
                TemplateAlias="morestyles"
                PopulateDynamically="true"
                PopulateOnlyOnce="false"
                PopulateQueryCommand="PopulateMenuMoreStyles"
                CommandMenuClose="MenuClose"
                CacheMenuVersions="false">
            </FlyoutAnchor>
        </Controls>
    </Group>








