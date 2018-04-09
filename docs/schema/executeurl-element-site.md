---
title: "ExecuteUrl Element (Site)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 251fbe32-dfee-4bb1-b0c8-098512bec38c
description: "Last modified: March 09, 2015"
---

# ExecuteUrl Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file to specify the URL that is called after the site definition is instantiated. 
  
```
<ExecuteUrl
  Url = "Text">
</ExecuteUrl>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Url** <br/> |Required **Text**. Specifies the URL of a page located in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS to open after the site is instantiated. For example,  `<ExecuteUrl Url="_layouts/[%=System.Threading` <br/>  `.Thread.CurrentThread.CurrentUICulture.LCID%]/settings.aspx"/>` <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Configuration](configuration-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Remarks

Use the **ExecuteUrl** element to open the site definition creation process to arbitrary post-processing capabilities. 
  

