---
title: "Section Element"


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
ms.assetid: c75b13c7-3102-46b9-931e-48a834b09e98
description: "Last modified: March 09, 2015"
---

# Section Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a section of a layout.
  
```
<Section
  Type="Divider | OneRow | TwoRow | ThreeRow"
  Alignment="Top | Middle"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** <br/> | Optional. An enumeration value that specifies the type of section.  <br/> **Divider**. The section cannot contain child [Row](row-element.md) elements.  <br/> **OneRow**. The section can contain one child **Row** element.  <br/> **TwoRow**. The section can contain two child **Row** elements.  <br/> **ThreeRow**. The section can contain three child **Row** elements.  <br/> |
|**Alignment** <br/> | Optional. An enumeration value that specifies the vertical alignment of controls within the section.  <br/> **Top**. Control icons are aligned to the top edge of their row.  <br/> **Middle**. Control icons are aligned in the middle of their row.  <br/>  The default alignment is **Top**.  <br/> |
   
### Child elements

||
|:-----|
|[Row](row-element.md)|
   
### Parent elements

||
|:-----|
|[Layout](layout-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following example defines a layout with two sections of different types.
  
```XML
<Layout Title="Large">
  <Section Type="OneRow">
    <Row>
      <ControlRef TemplateAlias="createView" DisplayMode="Large" />
    </Row>
  </Section>
  <Section Type="ThreeRow">
    <Row>
      <ControlRef TemplateAlias="viewSelector" DisplayMode="Medium" />
    </Row>
    <Row>
      <ControlRef TemplateAlias="modifyView" DisplayMode="Medium" />
    </Row>
    <Row>
      <Strip>
        <ControlRef TemplateAlias="previousPage" DisplayMode="Small" />
        <ControlRef TemplateAlias="currentPage" DisplayMode="Medium" />
        <ControlRef TemplateAlias="nextPage" DisplayMode="Small" />
      </Strip>
    </Row>
  </Section>
</Layout>
```


