---
title: "GetProgID Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 02b87839-e514-4f59-a26d-55094a0ea725
description: "Last modified: March 09, 2015"
---

# GetProgID Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the **ProgID** for the given URL of a particular document. This is an internal element that returns the **ProgID** for any HTML file, which identifies the application that the HTML file was created in (whether it was a Microsoft Word document that was saved as HTML or a Microsoft Excel worksheet saved as HTML, etc.). 
  
```
<GetProgID>
</GetProgID>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|Numerous |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

This element can be used within a view only if the **HackLockWeb** attribute of the [View](../../collaborative-application-markup-language-caml-schemas/list-schema/view-element-list.md) element is set to **TRUE**.
  
## Example

The following example maps the **ProgID** and file extension for the Template lookup column, separated by a pipe symbol ("|"), to an icon. 
  
```XML
<MapToIcon>
  <GetProgID>
    <LookupColumn Name="Template"/>
  </GetProgID>
  <HTML>|</HTML>
  <GetFileExtension>
    <LookupColumn Name="Template"/>
  </GetFileExtension>
</MapToIcon>
```


