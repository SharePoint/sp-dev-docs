---
title: "Case Element (View)"
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
ms.assetid: 5100d92b-a09f-430d-ab79-5cb770c1bd61
description: "Last modified: March 09, 2015"
---

# Case Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used inside a [Switch](switch-element-view.md) statement or [FieldSwitch](fieldswitch-element-view.md) statement to perform a comparison. 
  
```
<Case
  Value = "Text">
</Case>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Value** <br/> |Optional **Text**. The value to check for in a comparison.  <br/> |
   
## Child Elements

||
|:-----|
|Numerous |
   
## Parent Elements

||
|:-----|
|[FieldSwitch](fieldswitch-element-view.md), [Switch](switch-element-view.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

Within a [Switch](switch-element-view.md) statement, the **Case** element is often used in conjunction with the [Default](default-element-view.md) element. If the criteria set by the **Case** value proves false, then the default value is implemented. 
  
## Example

The following example checks the value of a **UserID** field and returns "User Zero" if the value is 0 (zero). Otherwise, it sets a default value: "Not User Zero". 
  
```XML
<Switch>
  <Expr><UserID/></Expr>
  <Case Value="0">User Zero</Case>
  <Default>Not User Zero</Default>
</Switch>
```


