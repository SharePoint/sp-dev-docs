---
title: "SchemaSecurity Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 879efff7-9ac3-4653-b9e8-cf5b4e31e2b2
description: "Last modified: March 09, 2015"
---

# SchemaSecurity Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the Schema security setting for a list.
  
```
<SchemaSecurity>
</SchemaSecurity>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Security](security-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

The **SchemaSecurity** element can contain the following values: 
  
1 — Anyone can modify the schema (add and delete columns, etc.).
  
2 — Only the list owner can modify the schema.
  
See [Security Element](security-element.md) for an example that shows how to use the **SchemaSecurity** element. 
  
## See also



[ReadSecurity Element](readsecurity-element.md)
  
[WriteSecurity Element](writesecurity-element.md)

