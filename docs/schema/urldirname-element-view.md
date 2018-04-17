---
title: "UrlDirName element (View)"
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
ms.assetid: 8f02b269-f9af-4d6d-acb8-2756b2ec34c3
description: Specifies the site-relative URL for the directory that contains a document.
---

# UrlDirName element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the site-relative URL for the directory that contains a document.
  
```XML
<UrlDirName>
</UrlDirName>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

Numerous 
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
## Example

The following example uses the **UrlDirName** element to construct the absolute URL for a thumbnail image in a picture library. 
  
```XML
<DisplayPattern>
   <HttpHost />
   <UrlDirName>
      <HTML>/</HTML>
      <LookupColumn URLEncodeAsURL="TRUE" Name="FileRef" />
   </UrlDirName>
   <HTML>/_t/</HTML>
   <UrlBaseName>
      <Field Name="EncodedAbsUrl" />
   </UrlBaseName>
   <HTML>_</HTML>
   <GetFileExtension>
      <Field Name="EncodedAbsUrl" />
   </GetFileExtension>
   <HTML>.jpg</HTML>
</DisplayPattern>
```

If the image file has a .jpg extension and is contained in a picture library on a subsite, the example creates a URL in the following form:
  
 `http://Server_Name/Subsite_Name/Library_Name/_t/File_Base_Name/_jpg.jpg`
  
## See also

- [URL element (View)](url-element-view.md)
- [UrlBaseName element (View)](urlbasename-element-view.md)

