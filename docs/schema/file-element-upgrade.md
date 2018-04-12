---
title: "File Element (Upgrade)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Upgrade schema
api_type:
- schema
ms.assetid: bf026bdf-1be3-47d7-a32f-3ecbd27511dc
description: "Last modified: March 09, 2015"
---

# File Element (Upgrade)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Describes the relationship between an existing provisioned file to its equivalent file for upgrading to Microsoft SharePoint Foundation 2010, specifying how setup paths of files in the previous version map (relate) to setup paths in the new version relative to their %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE directories.
  
```
<File
  FromPath = "String"
  ToPath = "String">
</File>
```
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes


|**Attribute**|**Description**|
|:-----|:-----|
|**FromPath** <br/> |Required **String**. Specifies the setup path of the file to be upgraded relative to the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE directory. Use the token **{LocaleId}** to specify a locale identifier as part of the path. Example:  <br/>  `FromPath="{LocaleId}\STS\Lists\announce\EditForm.aspx"` <br/> |
|**ToPath** <br/> |Required **String**. Specifies the location in the setup directory of the file to which the file of the old version is mapped relative to the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE directory. Example:  <br/>  `ToPath= "Features\AnnouncementsList\announce\EditForm.aspx"` <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Files](files-element-upgrade.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

File upgrades can be applied to any sort of uncustomized file, usually .aspx pages, but also to entities such as document templates. In the upgrade definition it is best to list all previously installed uncustomized (also known as "ghosted") files, including ones that were provisioned as part of a list, or files located only in the top-level website, such as .dwp files for Web Parts.
  
SharePoint Foundation supports a **{LocaleId}** token, which specifies the locale identifier to be included as part of the path. This makes it possible to map locale-specific files. 
  
For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

