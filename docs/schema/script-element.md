---
title: "Script element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9bd3c468-7211-4a3f-a304-2228f2997854
description: Contains a script fragment.
---

# Script element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a script fragment.
  
```XML
<Script>
</Script>
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
   
## Example

The following example uses the **Script** element to contain a script fragment that executes within a view of a list. 
  
```XML
<ViewFields>
   <FieldRef Name="SelectedFlag"/>
   <FieldRef Name="DocIcon"/>
   <FieldRef Name="NameOrTitle"/>
   <FieldRef Name="ImageSize"/>
   <FieldRef Name="FileSizeDisplay"/>
   <FieldRef Name="RequiredField" Explicit="TRUE"/>
</ViewFields>
<Script>
    g_RequiredFields[6] = new Array;
    g_RequiredFields[6]["RequiredField"] = true;
</Script>
```


