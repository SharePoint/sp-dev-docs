---
title: "ViewBody element (List)"
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
ms.assetid: 266e866a-dae8-499e-aad6-8e0925381d14
description: Defines how the rows of data in a view are rendered.
---

# ViewBody element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines how the rows of data in a view are rendered.

```XML
<ViewBody
  ExpandXML = "TRUE" | "FALSE">
</ViewBody>
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
   
### Remarks

A fields enumeration works differently in the **ViewBody** element for a view than it does elsewhere in CAML. In a view body, the enumeration loops through the fields in the [ViewFields](viewfields-element-list.md) collection, instead of through all the fields in the list. 
  
## Example

The following example defines the body for a document library view. Each record in the view is rendered according to the class **ms-vb** defined in the Core.css file (`\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\LAYOUTS\` _LCID_ `\STYLES`).
  
```XML
<ViewBody>
  <HTML>
    <![CDATA[ <TR> ]]>
  </HTML>
  <Fields>
    <HTML>
      <![CDATA[ <TD Class="ms-vb"> ]]>
    </HTML>
    <Field />
    <HTML>
      <![CDATA[ </TD> ]]>
    </HTML>
  </Fields>
  <HTML>
    <![CDATA[ </TR> ]]>
  </HTML>
</ViewBody>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)  
- [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)  
- [ViewEmpty element (List)](viewempty-element-list.md) 
- [ViewFooter element (List)](viewfooter-element-list.md)  
- [ViewHeader element (List)](viewheader-element-list.md)

