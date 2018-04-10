---
title: "AlertTemplate Element (AlertTemplates)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: 716ce7f6-2d1e-426d-9afb-48ee9e033a15
description: "Last modified: March 09, 2015"
---

# AlertTemplate Element (AlertTemplates)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines an alert message template.
  
```
<AlertTemplate
  Type="List" | "Item" | "Custom"
  Default="True" | "False"
  Name="Text">
    <EventTypes IsVisible="True" | "False"/>
    <Format>
    ...
    </Format>
    <Properties>
    ...
    </Properties>
    <Filters>
    ...
    </Filters>
</AlertTemplate>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Type  <br/> |Specifies the item type that is associated with the alert template; either "List", "Item", or "Custom".  <br/> |
|Default  <br/> |Specifies whether the template is the default alert template.  <br/> |
|Name  <br/> |Specifies the template name.  <br/> |
   
### Child elements

||
|:-----|
|[EventTypes](eventtypes-element-alerttemplates.md), [Format](format-element-alerttemplates.md), [Properties](properties-element-alerttemplates.md), [Filters](filters-element-alerttemplates.md)|
   
### Parent elements

||
|:-----|
|[AlertTemplates](alerttemplates-element-alerttemplates.md)|
   

