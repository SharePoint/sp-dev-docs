---
title: "DocumentTemplateFile Element (Site)"
ms.

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
ms.assetid: c1d81e2f-80b0-4e84-ad0f-48e350708313
description: "Last modified: March 09, 2015"
---

# DocumentTemplateFile Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a reference to a file that is used within a document template. 
  
```
<DocumentTemplateFile
  Default = "TRUE" | "FALSE"
    Name="Text"
  TargetName="Text">
</DocumentTemplateFile>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Default** <br/> |Optional **Boolean**. **TRUE** to specify that the template file is the default file.  <br/> |
|**Name** <br/> |Required **Text**. The full path to the template file.  <br/> |
|**TargetName** <br/> |Required **Text**. The full path to the target  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[DocumentTemplateFiles](documenttemplatefiles-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

See [DocumentTemplates](documenttemplates-element-site.md) for an example that shows how to use the **DocumentTemplateFile** element. 
  

