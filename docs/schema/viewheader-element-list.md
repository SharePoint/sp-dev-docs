---
title: "ViewHeader Element (List)"


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
ms.assetid: a1007cbe-1c8d-4b2f-9ef7-9e302d15d5b0
description: "Last modified: March 09, 2015"
---

# ViewHeader Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines how the headers, or prefixes, of view fields are rendered.
  
> [!NOTE]
> Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx). 
  
```
<ViewHeader
  ExpandXML = "TRUE" | "FALSE">
</ViewHeader>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
   
### Child elements

||
|:-----|
|Numerous |
   
### Parent elements

||
|:-----|
|[View](view-element-list.md), [ViewStyle](viewstyle-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

This element often contains an HTML fragment with **ExpandXML** set to **TRUE** to render embedded [Field](field-element-list.md) elements. 
  
## Example

The following example defines the field headers for a view. Each field header in the view is rendered according to the class **ms-vh**, which is defined in Core.css ( `\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\LAYOUTS\LCID\STYLES`).
  
.
  
```XML
<ViewHeader>
  <HTML>
    <![CDATA[ <TABLE ID="onetidDoclibViewTbl0 ]]> 
  </HTML>
  <HTML>
    <![CDATA[ " width="100%" border=0 cellspacing=0 cellpadding=1 
        rules=rows><TR VALIGN=TOP><FORM> ]]> 
  </HTML>
  <Fields>
    <HTML>
      <![CDATA[ <TH class="ms-vh"> ]]> 
    </HTML>
    <Field /> 
    <HTML>
      <![CDATA[ </TH> ]]> 
    </HTML>
  </Fields>
  <HTML>
    <![CDATA[ </FORM></TR> ]]> 
  </HTML>
</ViewHeader>
```

## See also



[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)
  
[XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)
  
[ViewBidiHeader Element (List)](viewbidiheader-element-list.md)
  
[ViewBody Element (List)](viewbody-element-list.md)
  
[ViewFooter Element (List)](viewfooter-element-list.md)

