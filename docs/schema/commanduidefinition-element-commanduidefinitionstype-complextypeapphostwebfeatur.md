---


manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ab5fbcf3-20bc-c93b-518c-f6a542c44c34
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
<td align="left"># CommandUIDefinition element (CommandUIDefinitionsType complexType) (AppHostWebFeatures)</td>
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

**Last modified:** September 16, 2015

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The string &quot;app&quot; appears as part, or all, of some element, attribute, and file names because SharePoint Add-ins were originally called &quot;apps for SharePoint&quot;. To ensure backward compatibility, the schemas have not been changed.</p></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="commanduidefinitiontype-complextype-apphostwebfeatures.htm">CommandUIDefinitionType</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:element name="CommandUIDefinition" type="CommandUIDefinitionType" minOccurs="1" maxOccurs="unbounded"></xs:element>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="commanduidefinitions-element-commanduiextensiontype-complextypeapphostwebfeature.htm">CommandUIDefinitions</a></p></td>
<td align="left"><p><a href="commanduidefinitionstype-complextype-apphostwebfeatures.htm">CommandUIDefinitionsType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="button-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Button</a></p></td>
<td align="left"><p>ButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="checkbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">CheckBox</a></p></td>
<td align="left"><p>CheckBoxType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="colorpicker-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">ColorPicker</a></p></td>
<td align="left"><p>ColorPickerType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="combobox-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">ComboBox</a></p></td>
<td align="left"><p>ComboBoxType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="contextualgroup-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">ContextualGroup</a></p></td>
<td align="left"><p>ContextualGroupType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="contextualtabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">ContextualTabs</a></p></td>
<td align="left"><p>ContextualTabsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="controls-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Controls</a></p></td>
<td align="left"><p>ControlsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="dropdown-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">DropDown</a></p></td>
<td align="left"><p>DropDownType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="flyoutanchor-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">FlyoutAnchor</a></p></td>
<td align="left"><p>FlyoutAnchorType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="gallery-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Gallery</a></p></td>
<td align="left"><p>GalleryType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="gallerybutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">GalleryButton</a></p></td>
<td align="left"><p>GalleryButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="group-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Group</a></p></td>
<td align="left"><p>GroupType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="groups-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Groups</a></p></td>
<td align="left"><p>GroupsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="grouptemplate-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">GroupTemplate</a></p></td>
<td align="left"><p>GroupTemplateType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="inserttable-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">InsertTable</a></p></td>
<td align="left"><p>InsertTableType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="label-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Label</a></p></td>
<td align="left"><p>LabelType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="maxsize-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">MaxSize</a></p></td>
<td align="left"><p>MaxSizeType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="menu-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Menu</a></p></td>
<td align="left"><p>MenuType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="menusection-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">MenuSection</a></p></td>
<td align="left"><p>MenuSectionType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="mrusplitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">MRUSplitButton</a></p></td>
<td align="left"><p>MRUSplitButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="qat-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">QAT</a></p></td>
<td align="left"><p>QATType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ribbon-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Ribbon</a></p></td>
<td align="left"><p>RibbonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="scale-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Scale</a></p></td>
<td align="left"><p>ScaleType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="scaling-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Scaling</a></p></td>
<td align="left"><p>ScalingType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spinner-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Spinner</a></p></td>
<td align="left"><p>SpinnerType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="splitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">SplitButton</a></p></td>
<td align="left"><p>SplitButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="tab-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Tab</a></p></td>
<td align="left"><p>TabType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="tabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">Tabs</a></p></td>
<td align="left"><p>TabsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="textbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">TextBox</a></p></td>
<td align="left"><p>TextBoxType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="togglebutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.htm">ToggleButton</a></p></td>
<td align="left"><p>ToggleButtonType</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Location</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>








