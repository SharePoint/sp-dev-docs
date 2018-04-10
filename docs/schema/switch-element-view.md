---
title: "Switch Element (View)"


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
ms.assetid: 6c1b46cc-1f8c-412a-baa2-21bf051746f4
description: "Last modified: March 09, 2015"
---

# Switch Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Allows for conditional rendering based on the value of a Collaborative Application Markup Language (CAML) expression.
  
```
<Switch
  StripWS = "TRUE" | "FALSE">
  <Expr></Expr>
  <Case Value="Value_1"></Case>
  <Case Value="Value_2"></Case>
  ...
  <Default></Default>
</Switch>
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
   
### emarks

A **Switch** element contains an [Expr](expr-element-view.md) element, any number of [Case](case-element-view.md) elements, and a [Default](default-element-view.md) element. The value of the **Expr** element is compared against the **Value** attribute of each **Case** element. When a match is found, the **Switch** element returns the value of the matching **Case** element. If no match is found, and if a **Default** element is given, the **Switch** element returns the value of the **Default** element. If no **Default** element is specified and none of the **Case** values match the **Expr** value, the **Switch** element returns an empty string. 
  
This element does not require any particular parent element.
  
## Example

The following example returns "User Zero" if the **UserID** value equals 0 (zero); otherwise, the example returns "Not User Zero." 
  
```XML
<Switch>
  <Expr><UserID/></Expr>
  <Case Value="0">User Zero</Case>
  <Default>Not User Zero</Default>
</Switch>
```

## See also



[FieldSwitch Element (View)](fieldswitch-element-view.md)

