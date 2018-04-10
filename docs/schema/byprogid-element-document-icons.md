---
title: "ByProgID Element (Document Icons)"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Document Icons schema
api_type:
- schema
ms.assetid: dc0afe03-3169-4ad0-8f0a-26206f0002f0
description: "Last modified: March 09, 2015"
---

# ByProgID Element (Document Icons)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines icons for documents according to their programmatic identifiers. 
  
```
<ByProgID>
</ByProgID>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[Mapping](mapping-element.md)|
   
### Parent elements

||
|:-----|
|[DocIcons](docicons-element-document-icons.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

This element is used in the [DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb%28Office.15%29.aspx) file to drive mapping between **ProgIDs** and their corresponding document library icons. 
  
> [!NOTE]
> A ProgId is a registry entry that associates the program identifier (ProgID) of a COM object with its class identifier (CLSID). For example, the registry key  `HKLM\Software\Classes\Word.Document` has a subkey named  `CLSID` with a value of  `{F4754C9B-64F5-4B40-8AF4-679732AC0607}`. In this case, the key name  `Word.Document` is a ProgId, a shorthand way of saying  `{F4754C9B-64F5-4B40-8AF4-679732AC0607}`. For more information, see [\<ProgId\> Key (COM)](http://msdn.microsoft.com/library/f9ef2934-0815-4a6f-9283-8f748eee083b%28Office.15%29.aspx). 
  
For example, an HTML document that contains  `<META Name="ProgId" Content="Word.Document">` would map to the icon that is specified for the ProgId "Word.Document" by a [Mapping](mapping-element-document-icons.md) element inside the [ByProgID](byprogid-element-document-icons.md) element. 
  
```
<ByProgID>
    <Mapping Key="Word.Document" Value="ichtmdoc.gif"/>
</ByProgID>

```

See [DocIcons Element (Document Icons)](docicons-element-document-icons.md) for an extended example that shows how to use the **ByProgID** element. 
  

