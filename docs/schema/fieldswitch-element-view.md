---
title: "FieldSwitch Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: 94f1c64a-50d6-4560-b941-98ce3df807b0
description: "Last modified: March 09, 2015"
---

# FieldSwitch Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Obsolete. Allows for conditional rendering based on the value of a field property. 
  
```
<FieldSwitch
   StripWS = "TRUE" | "FALSE">
       <Expr></Expr>
       <Case Value="Value_1"></Case>
       <Case Value="Value_2"></Case>
       ...
       <Default></Default>
</FieldSwitch>
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
|[Case](case-element-view.md), [Default](default-element-view.md), [Expr](expr-element-view.md)|
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

The **FieldSwitch** element and the [Switch](switch-element-view.md) element use identical syntax, but a **FieldSwitch** element is evaluated only once per request for each view in which it applies to a view body or for each field in which it applies to a display pattern. The **FieldSwitch** element substantially optimizes performance in cases where different Collaborative Application Markup Language (CAML) code paths are required, depending on a field property (for example, whether rich text formatting is enabled) whose value does not change during the rendering process. 
  
A **FieldSwitch** element contains an [Expr](expr-element-view.md) element, any number of [Case](case-element-view.md) elements, and a [Default](default-element-view.md) element. The value of the **Expr** element is compared against the **Value** attribute of each **Case** element. When a match is found, the **FieldSwitch** element returns the value of the matching **Case** element. If no match is found, and if a **Default** element is given, then the **FieldSwitch** element returns the value of the **Default** element. If no **Default** element is specified and none of the **Case** values match the **Expr** value, then the **FieldSwitch** element returns an empty string. 
  
This element does not require any particular parent element.
  
## Example

The following example from the [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) file defines two different rendering patterns for a **Note** field, depending on whether the field has rich text formatting. 
  
```XML
<RenderPattern Name="DisplayPattern" DisplayName="DisplayPattern">
   <FieldSwitch>
      <Expr>
         <Property Select="RichText" />
      </Expr>
      <Case Value="TRUE">
         <Column AutoHyperLinkNoEncoding="TRUE" />
      </Case>
      <Default>
         <Column HTMLEncode="TRUE" AutoHyperLink="TRUE" 
            AutoNewLine="TRUE" />
      </Default>
   </FieldSwitch>
</RenderPattern>
```

## See also



[Switch Element (View)](switch-element-view.md)

