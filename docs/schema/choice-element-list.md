---
title: "CHOICE Element (List)"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 36923464-f2bd-44c9-9fa0-74664205a02f
description: "Last modified: March 09, 2015"
---

# CHOICE Element (List)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used to define a choice within a **Choice** field. 
  
```
<CHOICES>
  <CHOICE
    Value = "Text">
  </CHOICE>
  <CHOICE
    Value = "Text">
  </CHOICE>
  ...
</CHOICES>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Value** <br/> |Optional **Text**. Specifies the display text for the choice.  <br/> The value can be a reference to a resource in the format  `$Resources:String`. However, choice values are not supported by the multilingual user interface (MUI). Choice values are initialized in the default language of the web site and do not change when a user switches to an alternate language supported by the site.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[CHOICES](choices-element-list.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

Remember that CAML is case-sensitive; the **CHOICE** and **CHOICES** elements are in all capital letters. 
  
The **CHOICE** element contains the value within its body. 
  
## Example

The following example defines a **Choice** field with three choices. 
  
```XML
<CHOICES>
  <CHOICE>Not Started</CHOICE>
  <CHOICE>In Progress</CHOICE>
  <CHOICE>Completed</CHOICE>
</CHOICES>
    
```


