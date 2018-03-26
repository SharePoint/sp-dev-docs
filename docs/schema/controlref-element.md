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
ms.assetid: f0fe56cb-8773-498c-954b-4485647441a8
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
<td align="left"># ControlRef Element</td>
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

Represents a placeholder for a control in a
[GroupTemplate](grouptemplate-element.htm) element.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ControlRef
  DisplayMode=&quot;Small | Medium | Large | Menu | Menu16 | Menu32&quot;
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
<td align="left"><p>**DisplayMode**</p></td>
<td align="left"><p>Optional. An enumeration value that determines how a control is rendered.</p>
<ul>
<li><p>**Small**. Renders as a small icon without label text.</p></li>
<li><p>**Medium**. Renders as a 16-by-16-pixel icon with label text.</p></li>
<li><p>**Large**. Renders as a 32-by-32-pixel icon with label text.</p></li>
<li><p>**Menu**. Renders as a text-only menu item.</p></li>
<li><p>**Menu16**. Renders as a menu item with a 16-by-16-pixel icon.</p></li>
<li><p>**Menu32**. Renders as a menu item with a 32-by-32-pixel icon.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**TemplateAlias**</p></td>
<td align="left"><p>Optional. A string that a control can reference in its own **TemplateAlias</span> attribute. The <span class="keyword">TemplateAlias</span> attribute is used to size and position controls in a group when a template is applied to the group. No two elements that are contained by the same <a href="grouptemplate-element.htm">GroupTemplate</a> element should have the same <span class="keyword">TemplateAlias** value.</p></td>
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
<td align="left"><p><a href="row-element.htm">Row</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="strip-element.htm">Strip</a></p></td>
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


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Controls do not necessarily support all display modes. The following
table lists the modes that are supported by each type of control.

<table>
<colgroup>
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
<col width="14%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p></p></th>
<th align="left"><p>Small</p></th>
<th align="left"><p>Medium</p></th>
<th align="left"><p>Large</p></th>
<th align="left"><p>Menu</p></th>
<th align="left"><p>Menu16</p></th>
<th align="left"><p>Menu32</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="button-element.htm">Button</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="checkbox-element.htm">CheckBox</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="colorpicker-element.htm">ColorPicker</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="combobox-element.htm">ComboBox</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="dropdown-element.htm">DropDown</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="flyoutanchor-element.htm">FlyoutAnchor</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="gallerybutton-element-gallery.htm">GalleryButton</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="inserttable-element.htm">InsertTable</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="label-element.htm">Label</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="menusection-element.htm">MenuSection</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="mrusplitbutton-element.htm">MRUSplitButton</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spinner-element.htm">Spinner</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="splitbutton-element.htm">SplitButton</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="textbox-element.htm">TextBox</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="togglebutton-element.htm">ToggleButton</a></p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p>X</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example is an XML fragment that shows the relationship
between the **TemplateAlias** attribute for
controls in a [Group](group-element-ribbon.htm) element
and the same attribute for **ControlRef**
elements in a [GroupTemplate](grouptemplate-element.htm)
element. Notice that the **Group** element
contains three [Button](button-element.htm)
elements, each with a **TemplateAlias**
attribute set to a value of "row1", "row2", or "row3". The <span
class="keyword">GroupTemplate</span> element also contains three <span
class="keyword">ControlRef</span> elements that have attributes set to a
value of "row1", "row2", or "row3". When the template is applied to the
group, the layout of the controls in the group is determined by matching
the **TemplateAlias** attribute of a <span
class="keyword">Button</span> element to the <span
class="keyword">TemplateAlias</span> attribute of a <span
class="keyword">ControlRef</span> element.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Group
      Id="Ribbon.CustomTabExample.CustomGroupExample"
      Description="This is a custom group."
      Title="Custom Group"
      Sequence="52"
      Template="Ribbon.Templates.CustomTemplateExample">
      <Controls Id="Ribbon.CustomTabExample.CustomGroupExample.Controls">
        <Button
          Id="Ribbon.CustomTabExample.CustomGroupExample.HelloWorld"
          Command="CustomTabExample.HelloWorldCommand"
          Sequence="15"
          Description="Says hello to the World!"
          LabelText="Hello!"
          TemplateAlias="row1"/>
        <Button
          Id="Ribbon.CustomTabExample.CustomGroupExample.GoodbyeWorld"
          Command="CustomTabExample.GoodbyeWorldCommand"
          Sequence="17"
          Description="Says goodbye to the World!"
          LabelText="Goodbye!"
          TemplateAlias="row2"/>
        <Button
          Id="Ribbon.CustomTabExample.CustomGroupExample.LaterWorld"
          Command="CustomTabExample.LaterWorldCommand"
          Sequence="19"
          Description="Says I will see you later to the World!"
          LabelText="Later!"
          TemplateAlias="row3"/>
      </Controls>
    </Group>

    <GroupTemplate Id="Ribbon.Templates.CustomTemplateExample">
      <Layout
        Title="OneLargeTwoMedium"
        LayoutTitle="OneLargeTwoMedium">
        <Section Alignment="Top" Type="OneRow">
          <Row>
            <ControlRef DisplayMode="Large" TemplateAlias="row1" />
          </Row>
        </Section>
        <Section Alignment="Top" Type="TwoRow">
          <Row>
            <ControlRef DisplayMode="Medium" TemplateAlias="row2" />
          </Row>
          <Row>
            <ControlRef DisplayMode="Medium" TemplateAlias="row3" />
          </Row>
        </Section>
      </Layout>
    </GroupTemplate>








