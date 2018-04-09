---
title: "GroupTemplate Element"
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
ms.assetid: de7dba66-d71d-45cc-9d8a-7f62a9de6a19
description: "Last modified: March 09, 2015"
---

# GroupTemplate Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines the scaling behavior for controls in a [Group](group-element-ribbon.md) element. 
  
```
<GroupTemplate
  Id="Text"
  ClassName="CSS Class Selector"
/>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. A string that unambiguously identifies the element, such as "Ribbon.Templates.CustomTemplateExample".  <br/> |
|**ClassName** <br/> |Optional. The name of a CSS class selector to apply to the group.  <br/> |
   
## Child Elements

||
|:-----|
|[Layout](layout-element.md)|
   
## Parent Elements

||
|:-----|
|[RibbonTemplates](ribbontemplates.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example defines a custom group template.
  
```XML
<GroupTemplate Id="Ribbon.Templates.CustomTemplateExample">
  <Layout
    Title="OneLargeTwoMedium" LayoutTitle="OneLargeTwoMedium">
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


