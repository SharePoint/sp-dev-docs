---
title: "Layout Element"
ms.author: ricardol
author: ricardol
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
ms.assetid: 60a72dbc-6c85-4adc-98d9-f75129458482
description: "Last modified: March 09, 2015"
---

# Layout Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the layout of controls in a template.
  
```
<Layout
  Title="Text"
  LayoutTitle="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Title** <br/> |Required. A string that identifies the element within its parent [GroupTemplate](grouptemplate-element.md) element. The element's ID in the Document Object Model (DOM) is formed on the pattern "ParentId-Title".  <br/> |
|**LayoutTitle** <br/> |Optional. An alternative identifier for the element. Use this attribute to provide a title when the value of the **Title** attribute is "Popup".  <br/> |
   
### Child elements

||
|:-----|
|[Section](section-element.md) <br/> |
|[OverflowSection](overflowsection-element.md) <br/> |
   
### Parent elements

||
|:-----|
|[GroupTemplate](grouptemplate-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following example is an XML fragment that defines a group template that has several **Layout** elements. 
  
```XML
<GroupTemplate Id="Ribbon.Templates.FontGroup">
  <Layout Title="Large">
    <Section Type="TwoRow" Alignment="Middle">
      <Row>
        <ControlRef TemplateAlias="font" DisplayMode="Medium" />
        <ControlRef TemplateAlias="fontsize" DisplayMode="Medium" />
      </Row>
      <Row>
        <Strip>
          <ControlRef TemplateAlias="bold" DisplayMode="Small" />
          <ControlRef TemplateAlias="italics" DisplayMode="Small" />
          <ControlRef TemplateAlias="underline" DisplayMode="Small" />
          <ControlRef TemplateAlias="strikethrough" DisplayMode="Small" />
          <ControlRef TemplateAlias="subscript" DisplayMode="Small" />
          <ControlRef TemplateAlias="superscript" DisplayMode="Small" />
        </Strip>
        <Strip>
          <ControlRef TemplateAlias="backgroundcolor" DisplayMode="Small" />
          <ControlRef TemplateAlias="fontcolor" DisplayMode="Small" />
        </Strip>
        <Strip>
          <ControlRef TemplateAlias="clearformat" DisplayMode="Small" />
        </Strip>
      </Row>
    </Section>
    <OverflowSection Type="OneRow" TemplateAlias="o1" DisplayMode="Large"/>
  </Layout>
  <Layout Title="Medium">
    <Section Type="ThreeRow">
      <Row>
        <ControlRef TemplateAlias="font" DisplayMode="Medium" />
        <ControlRef TemplateAlias="fontsize" DisplayMode="Medium" />
      </Row>
      <Row>
        <Strip>
          <ControlRef TemplateAlias="bold" DisplayMode="Small" />
          <ControlRef TemplateAlias="italics" DisplayMode="Small" />
          <ControlRef TemplateAlias="underline" DisplayMode="Small" />
          <ControlRef TemplateAlias="strikethrough" DisplayMode="Small" />
          <ControlRef TemplateAlias="subscript" DisplayMode="Small" />
          <ControlRef TemplateAlias="superscript" DisplayMode="Small" />
        </Strip>
      </Row>
      <Row>
        <Strip>
          <ControlRef TemplateAlias="backgroundcolor" DisplayMode="Small" />
          <ControlRef TemplateAlias="fontcolor" DisplayMode="Small" />
        </Strip>
        <Strip>
          <ControlRef TemplateAlias="clearformat" DisplayMode="Small" />
        </Strip>
      </Row>
    </Section>
    <OverflowSection Type="ThreeRow" TemplateAlias="o1" DisplayMode="Medium"/>
  </Layout>
  <Layout Title="Popup" LayoutTitle="Large" />
</GroupTemplate>
```


