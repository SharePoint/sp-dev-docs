---
title: "DocIcons element (Document Icons)"
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
ms.assetid: d0f8e100-2b24-4296-bc8d-75431a8b0655
description: Top-level element in the DocIcon.xml file that defines the mapping between file types and their corresponding document library icons. 
---

# DocIcons element (Document Icons)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Top-level element in the [DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb%28Office.15%29.aspx) file that defines the mapping between file types and their corresponding document library icons. 
  
```XML
<DocIcons>
</DocIcons>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [ByExtension](byextension-element-document-icons.md)
- [ByProgID](byprogid-element-document-icons.md)
   
### Parent elements

None
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

In general, there are two ways that mapping can be performed: by extension (for example, the [ByExtension](byextension-element-document-icons.md) element can be used to map .xls to the appropriate icon for a Microsoft Excel file) and by ProgID. 
  
> [!NOTE]
> A ProgId is a registry entry that associates the program identifier (ProgID) of a COM object with its class identifier (CLSID). For example, the registry key  `HKLM\Software\Classes\Word.Document` has a subkey named  `CLSID` with a value of  `{F4754C9B-64F5-4B40-8AF4-679732AC0607}`. In this case, the key name  `Word.Document` is a ProgId, a shorthand way of saying  `{F4754C9B-64F5-4B40-8AF4-679732AC0607}`. For more information, see [\<ProgId\> Key (COM)](http://msdn.microsoft.com/library/f9ef2934-0815-4a6f-9283-8f748eee083b%28Office.15%29.aspx). 
  
## Example

The following example defines file icons by both **ProgIDs** and file extensions, but it also sets a default icon for new documents. 
  
```XML
<DocIcons>
  <ByProgID>
    <Mapping Key="Excel.Sheet" Value="ichtmxls.gif"/>
    <Mapping Key="PowerPoint.Slide" Value="ichtmppt.gif"/>
    <Mapping Key="Word.Document" Value="ichtmdoc.gif"/>
  </ByProgID>
  <ByExtension>
    <Mapping Key="doc" Value="icdoc.gif"/>
    <Mapping Key="gif" Value="icgif.gif"/>
    <Mapping Key="htm" Value="ichtm.gif"/>
    <Mapping Key="html" Value="ichtm.gif"/>
    <Mapping Key="ppt" Value="icppt.gif"/>
  </ByExtension>
  <Default>
    <Mapping Value="icgen.gif"/>
  </Default>
</DocIcons>
```


