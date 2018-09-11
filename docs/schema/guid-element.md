---
title: "GUID element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 466ffa8a-0f31-4be9-a418-f4ce444024c7
description: An internal ID number used in the database.
---

# GUID element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
An internal ID number used in the database. The **GUID** element generates a globally unique identifier (GUID) as returned by the Microsoft Component Object Model (COM) function **CoCreateGuid**.

```XML
<GUID>
</GUID>
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

This element is used primarily to generate unique IDs for discussion threads.
  
## Example

The following example evaluates a GUID variable and, if it is an empty string, assigns the current GUID to the variable. If it is not an empty string, the value of the GUID variable is returned by default.
  
```XML
<Switch StripWS="TRUE">
  <Expr>
    <GetVar Name="Guid" StripWS="TRUE" /> 
  </Expr>
  <Case Value="">
    <GUID /> 
  </Case>
  <Default>
    <GetVar Name="Guid" StripWS="TRUE" /> 
  </Default>
</Switch>
```

<br/>

