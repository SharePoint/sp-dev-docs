---
title: "URL Element (View)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: c9fb4f3b-c2ce-468d-90f4-5cf7eb325e29
description: "Last modified: March 09, 2015"
---

# URL Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the URL of a particular form for a specified list.
  
```
<URL
  Cmd = "Text"
  NoID = "TRUE" | "FALSE">
</URL>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Cmd** <br/> |Optional **Text**. Specifies the display mode appropriate for the form. Can be one of the following values for **DisplayMode**: **Display**, **DisplayHead**, **Edit**, **New**, **PreviewDisplay**, **PreviewEdit**, **PreviewNew**. This attribute can also be set to **LookUp**, which is used during field rendering to return the display form in the foreign list for a lookup field.  <br/> |
|**NoID** <br/> |Optional **Boolean**. **TRUE** to return the URL of the item form without including the item ID as part of the URL.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

Because links returned by this element are absolute URLs and already encoded, there is no need to use the **URLEncodeAsURL** attribute to encode the URL (see [Global Attributes for HTML-Rendering Elements](global-attributes-for-html-rendering-elements.md)).
  
The following examples show the URLs returned by using the **URL** element on an Announcements list: 
  
-  `<URL Cmd="EDIT"/>` renders  `"http://` _Server_Nam_ _e/_ _Site_Name_ _/_ `Lists/Announcements/EditForm.aspx"`
    
-  `<URL Cmd="NEW"/>` renders  `"http://` _Server_Name_ `/` _Site_Name_ `/Lists/Announcements/NewForm.aspx"`
    
-  `<URL Cmd="DISPLAY"/>` renders  `"http://` _Server_Name_ `/` _Site_Name_ `/Lists/Announcements/DispForm.aspx"`
    
## See also



[UrlBaseName Element (View)](urlbasename-element-view.md)
  
[UrlDirName Element (View)](urldirname-element-view.md)

