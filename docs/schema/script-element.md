---
title: "Script Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9bd3c468-7211-4a3f-a304-2228f2997854
description: "Last modified: March 09, 2015"
---

# Script Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains a script fragment.
  
```
<Script>
</Script>
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
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
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


