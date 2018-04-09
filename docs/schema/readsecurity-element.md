---
title: "ReadSecurity Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b9961811-42e2-449d-9484-2134962adccd
description: "Last modified: March 09, 2015"
---

# ReadSecurity Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains the Read security setting for a list.
  
```
<ReadSecurity>
</ReadSecurity>
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

The **ReadSecurity** element can contain the following values: 
  
- **1** — All users have Read access to all items. 
    
- **2** — Users have Read access only to items that they create. 
    
See [Security Element](security-element.md) for an example that shows how to use the **ReadSecurity** element. 
  
## See also

#### Reference

[SchemaSecurity Element](schemasecurity-element.md)
  
[WriteSecurity Element](writesecurity-element.md)

