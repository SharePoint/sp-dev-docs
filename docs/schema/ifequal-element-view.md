---
title: "IfEqual element (View)"
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
ms.assetid: 61d1a179-91ae-4760-a697-fef330adb4ff
description: Allows for conditional rendering based on the comparison of two Collaborative Application Markup Language (CAML) expressions.
---

# IfEqual element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Allows for conditional rendering based on the comparison of two Collaborative Application Markup Language (CAML) expressions.
  
```XML
<IfEqual>
</IfEqual>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Else](else-element-view.md)
- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
- [Then](then-element-view.md)
   
### Parent elements

Numerous 
   
## Example

The following example uses the **IfEqual** element to define the display pattern for the **Checked Out To** column. If the user ID equals null, nothing is displayed. If the user ID does not equal null, a link is provided to a display form with information about the user. 
  
```XML
<DisplayPattern>
   <IfEqual>
      <Expr1>
         <Field Name="CheckedOutUserId" />
      </Expr1>
      <Expr2 />
      <Then />
      <Else>
         <HTML><![CDATA[ <a href="]]></HTML>
         <HttpVDir/>
         <HTML>
            <![CDATA[ /_layouts/[%=System.Threading.Thread.
               CurrentThread.CurrentUICulture.LCID%]/UserDisp.aspx?ID=
            ]]></HTML>
         <Field Name="CheckedOutUserId" />
         <HTML><![CDATA[ ">]]></HTML>
         <Field HTMLEncode="TRUE" Name="CheckedOutTitle" />
         <HTML><![CDATA[ </a>]]></HTML>
      </Else>
   </IfEqual>
</DisplayPattern>
```

## See also

- [IfNew element (View)](ifnew-element-view.md)

