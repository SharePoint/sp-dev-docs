---
title: "Batch Element (View)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 2d716503-4843-4f8c-86d6-392707ce9095
description: "Last modified: March 09, 2015"
---

# Batch Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Provides batch processing of commands within HTTP protocol.
  
```
<Batch
  OnError = "Return" | "Continue"
  ListVersion = ""
  Version = ""
  ViewName = "">
  <Method>
  ...
  </Method>
  ...
</Batch>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ListVersion** <br/> |Optional **Integer**. Specifies the version number of the list.  <br/> |
|**OnError** <br/> | Optional. The following values are possible:  <br/> **Return** — Stops execution of any more methods after the first error is encountered. This is the default.  <br/> **Continue** — After an error is encountered, continues executing subsequent methods.  <br/> |
|**Version** <br/> |Optional **String**. Specifies the version number of Microsoft SharePoint Foundation that is running on the server. A version number consists of four integers in the format  _N.N.N.NNNN_, which represent the major, minor, phase, and incremental versions of the product.  <br/> |
|**ViewName** <br/> |Optional **Guid**. Specifies the GUID for the view.  <br/> |
   
### Child elements

||
|:-----|
|[Method](method-element-view.md)|
   
### Parent elements

||
|:-----|
|None |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

The **Batch** element must contain at least one [Method](method-element-view.md) element. The **Batch** element allows the client application to post more than one command to the server at a time. 
  
## Example

The following code example, if contained within HTTP protocol, would return a list named "Documents" from the server.
  
```XML
<?xml version="1.0" encoding="UTF-8"?>
<ows:Batch Version="6.0.2.5608" OnError="Return">
  <Method ID="0,ExportList">
    <SetList Scope="Request">Documents</SetList>
    <SetVar Name="Cmd">ExportList</SetVar>
  </Method> 
</ows:Batch>
```


