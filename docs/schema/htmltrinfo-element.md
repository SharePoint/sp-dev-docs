---
title: "HtmlTrInfo Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 307fc4c8-9e87-4db1-8213-81d66fe0c232
description: "Last modified: March 09, 2015"
---

# HtmlTrInfo Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in HtmlTransInfo.xml file ( `\Program Files\Common Files\Microsoft Shared\web server extensions\12TEMPLATE\XML`) to contain mapping instructions for directing a request to the URL for handling a request when the client computer does not have the 2007 Microsoft Office system installed.
  
```
<HtmlTrInfo>
  <Mapping
    AcceptHeader = "Text"
    Extension = "Text"
    HandlerUrl = "Text"
    ProgId = "Text" />
  ...
</HtmlTrInfo>
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
|[Mapping](mapping-element.md)|
   
### Parent elements

||
|:-----|
|None |
   
### Remarks

When the client computer does not have the Office application installed, Microsoft SharePoint Foundation creates an HTML rendition of the page by using a converter program on the server.
  
## Example

The following example shows the instructions used in the HtmlTransInfo.xml file.
  
```XML
<HtmlTrInfo>
   <Mapping Extension="xls" AcceptHeader="application/vnd.ms-excel" 
      HandlerUrl="HtmlTranslate.aspx" />
   <Mapping Extension="doc" AcceptHeader="application/msword" 
      HandlerUrl="HtmlTranslate.aspx" />
   <Mapping Extension="ppt" AcceptHeader="application/
      vnd.ms-powerpoint" HandlerUrl="HtmlTranslate.aspx" />
   <Mapping Extension="pps" AcceptHeader="application/
      vnd.ms-powerpoint" HandlerUrl="HtmlTranslate.aspx" />
</HtmlTrInfo>
```


