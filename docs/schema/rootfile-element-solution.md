---
title: "RootFile Element (Solution)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Solution Schema
api_type:
- schema
ms.assetid: 40f9da2a-f1cc-4948-9dec-9a12f41c0d64
description: "Last modified: March 09, 2015"
---

# RootFile Element (Solution)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a root path to which solution files are copied.
  
```
<RootFile
  Location = "Text">
</RootFile>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Location** <br/> |Required **Text**. A path that is relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[RootFiles](rootfiles-element-solution.md)|
   
### Remarks

Use this element to deploy a localization resource that is shared by several features. Shared localization resources are located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\Resources folder. For example, the following XML deploys three shared localization resource files.
  
```XML
<RootFiles>
  <RootFile Location="Resources\wingtip.resx" />
  <RootFile Location="Resources\wingtip.en-US.resx" />
  <RootFile Location="Resources\wingtip.es-ES.resx" />
</RootFiles>

```

For more information about using shared localization resources, see the description of the **DefaultResourceFile** attribute in [Feature Element (Feature)](../../sharepoint-features-schemas/feature-xml-files/feature-element-feature.md).
  
Localization resources used by extensions to the Central Administration user interface are located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\Config\AdminResources folder. The following XML deploys localization resource files to that folder.
  
```XML
<RootFiles>
  <RootFile Location="Config\AdminResources\wingtip.resx" />
  <RootFile Location="Config\AdminResources\wingtip.en-US.resx" />
  <RootFile Location="Config\AdminResources\wingtip.es-ES.resx" />
</RootFiles>

```


