---
title: TodayISO element
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 83548f11-e64d-4b7d-8d6c-5c331cd7f4e8
description: In CAML, renders the current date and time in International Organization for Standardization (ISO) format.
---

# TodayISO element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the current date and time in International Organization for Standardization (ISO) format: YYYY-MM-DDTHH:MM:SSZ (for example, 2001-01-21T22:54:47Z).
  
```XML
<TodayISO>
</TodayISO>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
### Remarks

Note that the date and time returned are relative to the server's local time zone.
  
## Example

The following example evaluates the default value for a **DateTime** field type and inserts the current date in ISO format if the value is "[today]". Otherwise, the code inserts the raw value contained in the field. 
  
```XML
<Switch>
   <Expr>
      <Property Select="Default" />
   </Expr>
   <Case Value="[today]">
      <HTML>"</HTML>
      <TodayISO />
      <HTML>"</HTML>
   </Case>
   <Default>
      <ScriptQuote>
         <Column HTMLEncode="TRUE" />
      </ScriptQuote>
   </Default>
</Switch>
```

## See also

- [Today element (Query)](today-element-query.md)
- [Month element (Regional Settings)](month-element-regional-settings.md) 
- [Now element (Query)](now-element-query.md)