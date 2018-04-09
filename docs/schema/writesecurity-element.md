---
title: "WriteSecurity Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 79b479b5-6209-42c6-9811-0b243b6dd99e
description: "Last modified: March 09, 2015"
---

# WriteSecurity Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains the Write security setting for a list.
  
```
<WriteSecurity>
</WriteSecurity>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[Security](security-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Remarks

The **WriteSecurity** element can contain the following values: 
  
1 — Write all items.
  
2 — Write only my items.
  
4 — Write no items (read-only list).
  
See [Security Element](security-element.md) for an example that shows how to use the **WriteSecurity** element. 
  
## See also

#### Reference

[ReadSecurity Element](readsecurity-element.md)
  
[SchemaSecurity Element](schemasecurity-element.md)

