---
title: "ThreadStamp Element (View)"

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
ms.assetid: dfd500ad-2b86-49c8-b272-74b858a48f4f
description: "Last modified: March 09, 2015"
---

# ThreadStamp Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Obsolete. Renders, in discussion boards, the current server's local time in a specific format (YYYYMMDDHHMMSS) for sorting purposes.
  
```
<ThreadStamp
  StripWS = "TRUE" | "FALSE">
</ThreadStamp>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

Each discussion board has a special threading field that consists of a concatenation of timestamps. The threading value of a discussion item is the threading value of its parent followed by the **ThreadStamp** value corresponding to the current local time. 
  
## Example

The following example uses CAML to render a hidden **\<INPUT\>** element in an HTML form. The value of this element is the first 504 characters of the concatenation of the Threading variable (if present; if not, the value is an empty string), followed by the value rendered by the **ThreadStamp** element, which represents the current time. 
  
```XML
<RenderPattern Name="NewPattern" DisplayName="NewPattern">
  <HTML><![CDATA[<INPUT TYPE=HIDDEN NAME="]]></HTML>
  <FieldPrefix/>
  <Property Select="Name"/>
  <HTML>" VALUE="</HTML>
  <Limit Len="504" StripWS="TRUE">
    <GetVar Name="Threading" StripWS="TRUE"/>
    <ThreadStamp StripWS="TRUE"/>
  </Limit>
  <HTML><![CDATA[">]]></HTML>
</RenderPattern>
```


