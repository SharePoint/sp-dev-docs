---
title: "Row element (Server Ribbon)"
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
ms.assetid: b6043ceb-ab7b-4862-bf43-32eecd74a187
description: Defines a row in a section of a layout.
---

# Row element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a row in a section of a layout.
  
```XML
<Row />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

- [ControlRef](controlref-element.md) 
- [Strip](strip-element.md) 
- [OverflowArea](overflowarea-element.md) 
   
### Parent elements

- [Section](section-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: 3  
   
## Example

The following example is a fragment from the default server ribbon definition.
  
```XML
<GroupTemplate Id="Ribbon.Templates.ClipboardGroup">
  <Layout Title="Large">
    <Section Type="OneRow">
      <Row>
        <ControlRef TemplateAlias="paste" DisplayMode="Large" />
      </Row>
    </Section>
    <Section Type="TwoRow">
      <Row>
        <ControlRef TemplateAlias="copy" DisplayMode="Medium" />
      </Row>
      <Row>
        <ControlRef TemplateAlias="cut" DisplayMode="Medium" />
      </Row>
    </Section>
    <Section Type="TwoRow">
      <Row>
        <ControlRef TemplateAlias="undo" DisplayMode="Medium" />
      </Row>
      <Row>
        <ControlRef TemplateAlias="redo" DisplayMode="Medium" />
      </Row>
    </Section>
  </Layout>
</GroupTemplate>
```


