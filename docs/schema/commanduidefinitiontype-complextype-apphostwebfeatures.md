---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d4f4221c-8ad3-e966-37c8-12b59b6181f3
---

# CommandUIDefinitionType complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="CommandUIDefinitionType">
        <xs:choice minOccurs="0" maxOccurs="1">
            <xs:element name="Button" type="ButtonType"></xs:element>
            <xs:element name="CheckBox" type="CheckBoxType"></xs:element>
            <xs:element name="ComboBox" type="ComboBoxType"></xs:element>
            <xs:element name="ColorPicker" type="ColorPickerType"></xs:element>
            <xs:element name="ContextualGroup" type="ContextualGroupType"></xs:element>
            <xs:element name="ContextualTabs" type="ContextualTabsType"></xs:element>
            <xs:element name="Controls" type="ControlsType"></xs:element>
            <xs:element name="DropDown" type="DropDownType"></xs:element>
            <xs:element name="FlyoutAnchor" type="FlyoutAnchorType"></xs:element>
            <xs:element name="Gallery" type="GalleryType"></xs:element>
            <xs:element name="GalleryButton" type="GalleryButtonType"></xs:element>
            <xs:element name="GroupTemplate" type="GroupTemplateType"></xs:element>
            <xs:element name="Group" type="GroupType"></xs:element>
            <xs:element name="Groups" type="GroupsType"></xs:element>
            <xs:element name="InsertTable" type="InsertTableType"></xs:element>
            <xs:element name="Label" type="LabelType"></xs:element>
            <xs:element name="MRUSplitButton" type="MRUSplitButtonType"></xs:element>
            <xs:element name="MaxSize" type="MaxSizeType"></xs:element>
            <xs:element name="Menu" type="MenuType"></xs:element>
            <xs:element name="MenuSection" type="MenuSectionType"></xs:element>
            <xs:element name="QAT" type="QATType"></xs:element>
            <xs:element name="Ribbon" type="RibbonType"></xs:element>
            <xs:element name="Scale" type="ScaleType"></xs:element>
            <xs:element name="Scaling" type="ScalingType"></xs:element>
            <xs:element name="Spinner" type="SpinnerType"></xs:element>
            <xs:element name="SplitButton" type="SplitButtonType"></xs:element>
            <xs:element name="Tab" type="TabType"></xs:element>
            <xs:element name="Tabs" type="TabsType"></xs:element>
            <xs:element name="TextBox" type="TextBoxType"></xs:element>
            <xs:element name="ToggleButton" type="ToggleButtonType"></xs:element>
        </xs:choice>
        <xs:attribute name="Location" type="xs:string" use="required" />
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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
<td align="left"><p><a href="button-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Button</a></p></td>
<td align="left"><p>ButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="checkbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">CheckBox</a></p></td>
<td align="left"><p>CheckBoxType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="colorpicker-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">ColorPicker</a></p></td>
<td align="left"><p>ColorPickerType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="combobox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">ComboBox</a></p></td>
<td align="left"><p>ComboBoxType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="contextualgroup-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">ContextualGroup</a></p></td>
<td align="left"><p>ContextualGroupType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="contextualtabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">ContextualTabs</a></p></td>
<td align="left"><p>ContextualTabsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="controls-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Controls</a></p></td>
<td align="left"><p>ControlsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="dropdown-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">DropDown</a></p></td>
<td align="left"><p>DropDownType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="flyoutanchor-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">FlyoutAnchor</a></p></td>
<td align="left"><p>FlyoutAnchorType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="gallery-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Gallery</a></p></td>
<td align="left"><p>GalleryType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="gallerybutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">GalleryButton</a></p></td>
<td align="left"><p>GalleryButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="group-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Group</a></p></td>
<td align="left"><p>GroupType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="groups-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Groups</a></p></td>
<td align="left"><p>GroupsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="grouptemplate-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">GroupTemplate</a></p></td>
<td align="left"><p>GroupTemplateType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="inserttable-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">InsertTable</a></p></td>
<td align="left"><p>InsertTableType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="label-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Label</a></p></td>
<td align="left"><p>LabelType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="maxsize-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">MaxSize</a></p></td>
<td align="left"><p>MaxSizeType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="menu-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Menu</a></p></td>
<td align="left"><p>MenuType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="menusection-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">MenuSection</a></p></td>
<td align="left"><p>MenuSectionType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="mrusplitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">MRUSplitButton</a></p></td>
<td align="left"><p>MRUSplitButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="qat-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">QAT</a></p></td>
<td align="left"><p>QATType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ribbon-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Ribbon</a></p></td>
<td align="left"><p>RibbonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="scale-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Scale</a></p></td>
<td align="left"><p>ScaleType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="scaling-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Scaling</a></p></td>
<td align="left"><p>ScalingType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spinner-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Spinner</a></p></td>
<td align="left"><p>SpinnerType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="splitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">SplitButton</a></p></td>
<td align="left"><p>SplitButtonType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="tab-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Tab</a></p></td>
<td align="left"><p>TabType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="tabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">Tabs</a></p></td>
<td align="left"><p>TabsType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="textbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">TextBox</a></p></td>
<td align="left"><p>TextBoxType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="togglebutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md">ToggleButton</a></p></td>
<td align="left"><p>ToggleButtonType</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="10%" />
<col width="30%" />
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

<br/>

<br/>






