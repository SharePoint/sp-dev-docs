---
title: "ImagesPath Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fb008d30-a447-4c8c-a315-eac2bab8874b
description: "Last modified: March 09, 2015"
---

# ImagesPath Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns the HTTP path to the images directory for the project, including the trailing forward slash.
  
```
<ImagesPath>
</ImagesPath>
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

The following example uses the **ImagesPath** element to specify the path for the **Edit** icon. 
  
```XML
<DisplayPattern>
   <HTML><![CDATA[ <a href="]]></HTML>
   <URL Cmd="Edit" />
   <HTML><![CDATA[ " onclick='GoToLink(this);return false;' 
      target="_self">]]></HTML>
   <HTML><![CDATA[ <img border="0" alt="]]></HTML>
   <HTML>Edit</HTML>
   <HTML><![CDATA[ " src="]]></HTML>
   <ImagesPath />
   <HTML><![CDATA[ edititem.gif">]]></HTML>
   <HTML><![CDATA[ </a>]]></HTML>
</DisplayPattern>
```


