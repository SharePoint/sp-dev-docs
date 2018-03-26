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
ms.assetid: 86127151-d2e8-474d-aefb-5f66d834d53e
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
<td align="left"># Color Element</td>
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
SharePoint Online | SharePoint Server 2013*

Defines a color.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Color
     Sequence=&quot;Integer&quot;
     Title=&quot;Text&quot;
     Style=&quot;CSS Selector&quot;
     Color=&quot;Color string&quot;
     DisplayColor=&quot;#hexdec&quot;
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
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional. An integer that specifies the order of placement among sibling XML nodes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional. Specifies text for the **Title** attribute of the HTML anchor tag that renders the color.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Style**</p></td>
<td align="left"><p>Optional. The name of a CSS selector to apply to the table cell that represents the color.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Color**</p></td>
<td align="left"><p>Optional. A color string to be passed with the command event when the color is selected.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayColor**</p></td>
<td align="left"><p>Optional. A hexadecimal color code to use for the background color of the table cell, such as &quot;#FF0000&quot; (red).</p></td>
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
<td align="left"><p><a href="colors-element.htm">Colors</a></p></td>
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

The following example defines a section of a menu that includes a color
picker control with several **Color** elements.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <MenuSection
        Id="fontColor"
        Title="Standard Colors">
        <Controls Id="Font.Color.Menu.Controls">
            <ColorPicker
                Id="fontColor"
                Command="FontColor">
                <Colors>
                    <Color Color="0000C0" Title="Dark Red" DisplayColor="#C00000"/>
                    <Color Color="0000FF" Title="Red" DisplayColor="#FF0000" />
                    <Color Color="00C0FF" Title="Orange" DisplayColor="#FFC000"/>
                    <Color Color="00FFFF" Title="Yellow" DisplayColor="#FFFF00" />
                    <Color Color="50D092" Title="Light Green" DisplayColor="#92D050"/>
                    <Color Color="50B000" Title="Dark Green" DisplayColor="#00B050"/>
                    <Color Color="F0B000" Title="Light Blue" DisplayColor="#00B0F0"/>
                    <Color Color="C07000" Title="Blue" DisplayColor="#0070C0"/>
                    <Color Color="602000" Title="Dark Blue" DisplayColor="#002060" />
                    <Color Color="A03070" Title="Purple" DisplayColor="#7030A0"/>
                </Colors>
            </ColorPicker>
        </Controls>
    </MenuSection>








