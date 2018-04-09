---
title: "DisplayBidiPattern Element (List)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 0d5cfc8f-f8b1-4754-863b-f3c655b9a4e5
description: "Last modified: March 09, 2015"
---

# DisplayBidiPattern Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the display pattern to use for a column that supports bidirectional reading order.
  
```
<DisplayBidiPattern>
</DisplayBidiPattern>
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
|[Field](field-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

The **DisplayBidiPattern** element applies to sites whose locale identifier supports bidirectional reading order, including Arabic, Farsi, Hebrew, and Urdu languages. 
  
## Example

The following example defines a display pattern for a **Title** column whose reading order is bidirectional. 
  
```XML
<DisplayBidiPattern>
   <HTML><![CDATA[<p dir=]]></HTML>
   <Property Select="Direction"/>
   <HTML><![CDATA[><a onfocus="OnLink(this)" href="]]></HTML>
   <URL/>
   <HTML><![CDATA[" ONCLICK="GoToLink(this);return false;" 
      target="_self">]]></HTML>
   <Column HTMLEncode='TRUE' Name='Title' 
      Default='(no title)'></Column>
   <HTML><![CDATA[</a>]]></HTML>
   <IfNew>
      <HTML><![CDATA[<IMG SRC="/_layouts/[%=System.Threading.Thread
         .CurrentThread.CurrentUICulture.LCID%]
         /images/new.gif" alt="]]></HTML>
      <HTML>New</HTML>
      <HTML><![CDATA[">]]></HTML>
   </IfNew>
   <HTML><![CDATA[</p>]]></HTML>
</DisplayBidiPattern>
```


