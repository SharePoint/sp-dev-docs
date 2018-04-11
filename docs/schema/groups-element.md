---
title: "Groups Element"


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
ms.assetid: dc90a6a1-4a9e-4707-9e78-e9b98452ca17
description: "Last modified: March 09, 2015"
---

# Groups Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the groups of controls on a tab.
  
```
<Groups
  Id="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. A string that identifies the element, such as "Ribbon.DocLibListForm.Edit.Groups".  <br/> |
   
### Child elements

||
|:-----|
|[Group](group-element-ribbon.md)|
   
### Parent elements

||
|:-----|
|[CommandUIDefinition](commanduidefinition-element.md) <br/> |
|[Tab](tab-element.md) <br/> |
   
### Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: 1  <br/> |
   
## Example

The following XML fragment defines a tab that contains zero groups of controls.
  
```XML
<Tab Id="Ribbon.Read" Sequence="100" Command="ReadTab" Description="" Title="$Resources:core,TabRead;" CssClass="ms-browseTab">
  <Scaling Id="Ribbon.Read.Scaling">
  </Scaling>
  <Groups Id="Ribbon.Read.Groups">
  </Groups>
</Tab>
```


