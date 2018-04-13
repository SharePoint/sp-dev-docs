---
title: "ControlRef element (Server Ribbon)"
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
description: Represents a placeholder for a control in a GroupTemplate element. 
---

# ControlRef element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a placeholder for a control in a [GroupTemplate](grouptemplate-element.md) element. 
  
```XML
<ControlRef
  DisplayMode="Small | Medium | Large | Menu | Menu16 | Menu32"
  TemplateAlias="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**DisplayMode** <br/> | Optional. An enumeration value that determines how a control is rendered:<br/><br/>- **Small**. Renders as a small icon without label text.  <br/>- **Medium**. Renders as a 16-by-16-pixel icon with label text.  <br/>- **Large**. Renders as a 32-by-32-pixel icon with label text.  <br/>- **Menu**. Renders as a text-only menu item.  <br/>- **Menu16**. Renders as a menu item with a 16-by-16-pixel icon.  <br/>- **Menu32**. Renders as a menu item with a 32-by-32-pixel icon.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that a control can reference in its own **TemplateAlias** attribute. The **TemplateAlias** attribute is used to size and position controls in a group when a template is applied to the group. No two elements that are contained by the same [GroupTemplate](grouptemplate-element.md) element should have the same **TemplateAlias** value.  <br/> |
   
### Child elements

None
  
### Parent elements

- [Row](row-element.md) 
- [Strip](strip-element.md) 
   
### Occurrences

- Minimum: 0
- Maximum: unbounded  
   
### Remarks

Controls do not necessarily support all display modes. The following table lists the modes that are supported by each type of control.

<br/>
  
||**Small**|**Medium**|**Large**|**Menu**|**Menu16**|**Menu32**|
|:-----|:-----|:-----|:-----|:-----|:-----|:-----|
|[Button](button-element.md) <br/> |X  <br/> |X  <br/> |X  <br/> |X  <br/> |X  <br/> |X  <br/> |
|[CheckBox](checkbox-element.md) <br/> |X  <br/> |X  <br/> |||||
|[ColorPicker](colorpicker-element.md) <br/> ||||X  <br/> |||
|[ComboBox](combobox-element.md) <br/> ||X  <br/> |||||
|[DropDown](dropdown-element.md) <br/> ||X  <br/> |||||
|[FlyoutAnchor](flyoutanchor-element.md) <br/> |X  <br/> |X  <br/> |X  <br/> |X  <br/> |X  <br/> |X  <br/> |
|[GalleryButton](gallerybutton-element-gallery.md) <br/> |||X  <br/> |X  <br/> |||
|[InsertTable](inserttable-element.md) <br/> ||||X  <br/> |||
|[Label](label-element.md) <br/> |X  <br/> |X  <br/> |||||
|[MenuSection](menusection-element.md) <br/> |||||X  <br/> |X  <br/> |
|[MRUSplitButton](mrusplitbutton-element.md) <br/> |X  <br/> |X  <br/> |X  <br/> ||||
|[Spinner](spinner-element.md) <br/> ||X  <br/> |||||
|[SplitButton](splitbutton-element.md) <br/> |X  <br/> |X  <br/> |X  <br/> ||||
|[TextBox](textbox-element.md) <br/> ||X  <br/> |||||
|[ToggleButton](togglebutton-element.md) <br/> |X  <br/> |X  <br/> |X  <br/> ||||
   
## Example

The following example is an XML fragment that shows the relationship between the **TemplateAlias** attribute for controls in a [Group](group-element-ribbon.md) element and the same attribute for **ControlRef** elements in a [GroupTemplate](grouptemplate-element.md) element. 

Notice that the **Group** element contains three [Button](button-element.md) elements, each with a **TemplateAlias** attribute set to a value of `"row1"`, `"row2"`, or `"row3"`. 

The **GroupTemplate** element also contains three **ControlRef** elements that have attributes set to a value of `"row1"`, `"row2"`, or `"row3"`. 

When the template is applied to the group, the layout of the controls in the group is determined by matching the **TemplateAlias** attribute of a **Button** element to the **TemplateAlias** attribute of a **ControlRef** element. 
  
```XML
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
```


