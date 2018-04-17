---
title: "ReadSecurity element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b9961811-42e2-449d-9484-2134962adccd
description: Contains the Read security setting for a list.
---

# ReadSecurity element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the Read security setting for a list.
  
```XML
<ReadSecurity>
</ReadSecurity>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [Security](security-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

The **ReadSecurity** element can contain the following values: 
  
- **1** — All users have Read access to all items. 
    
- **2** — Users have Read access only to items that they create. 
    
For an example that shows how to use the **ReadSecurity** element, see [Security element](security-element.md). 
  
## See also

- [SchemaSecurity element](schemasecurity-element.md) 
- [WriteSecurity element](writesecurity-element.md)

