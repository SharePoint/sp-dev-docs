---
title: "ViewFooter element (List)"
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
ms.assetid: d36abf5f-814e-42c7-90c8-a50c7f1130ac
description: Defines the footer, or suffix, for a view.
---

# ViewFooter element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the footer, or suffix, for a view.

```XML
<ViewFooter
  ExpandXML = "TRUE" | "FALSE">
</ViewFooter>
```

> [!NOTE]
> Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx). 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
   
### Child elements

Numerous 
   
### Parent elements

- [View](view-element-list.md)
- [ViewStyle](viewstyle-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
## Example

The following example defines the view footer for a document library.
  
```XML
<ViewFooter>
  <HTML>
    <![CDATA[ </TABLE> ]]>
  </HTML>
  <HTML>
    <![CDATA[ <TABLE width="100%" border=0 rules=rows>
        <tr><td height="8"><img src=" ]]>
  </HTML>
  <HttpVDir />
  <HTML>
    <![CDATA[ /_layouts/images/blank.gif" width="1" 
        height="5"></td></tr></table> ]]>
  </HTML>
</ViewFooter>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)  
- [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx) 
- [ViewBody element (List)](viewbody-element-list.md) 
- [ViewHeader element (List)](viewheader-element-list.md)

