---
title: "FileDialogPostProcessor element (Site)"
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
ms.assetid: 5c1876ef-9e45-410f-85dc-e478b01aeaac
description: "Last modified: March 09, 2015"
---

# FileDialogPostProcessor element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an interface in Microsoft SharePoint Foundation that is used for Web views in the file dialog boxes and forms of document libraries.
  
```XML
<FileDialogPostProcessor
  ID = "Text">
</FileDialogPostProcessor>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Text**. Specifies the GUID of CLSID used to instantiate the object.  <br/> |
   
### Child elements

None
   
### Parent elements

- [Components](components-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

The **FileDialogPostProcessor** element corresponds to the **Microsoft.SharePoint.IFileDialogPostProcessor** interface. 
  
For an example that uses the **FileDialogPostProcessor** element, see [Components element (Site)](components-element-site.md).
  

