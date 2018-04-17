---
title: "Template element (Site)"
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
ms.assetid: 093d5a6c-c6a0-472e-8e79-172ceedd0e24
description: Specifies, in a WebTemp*.xml file, a site definition that can be used to create websites within the deployment. 
---

# Template element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies, in a `WebTemp*.xml` file, a site definition that can be used to create websites within the deployment. 
  
```XML
<Template
  ID = "Text"
  Name = "Text"
  SetupPath = "Text">
</Template>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Integer**. Specifies the ID of the site definition. To avoid conflict with IDs that are natively used in Microsoft SharePoint Foundation, use IDs with values greater than 10,000 when you create custom site definitions.  <br/> |
|**Name** <br/> |Required **Text**. Contains the name of the site type, such as STS.  <br/> |
|**SetupPath** <br/> |Optional **Text**. Specifies the relative path in the setup directory that contains files used in the site definition, for example,  `SetupPath="global"`.  <br/> |
   
### Child elements

- [Configuration](configuration-element-site.md)
   
### Parent elements

- [Templates](templates-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  

<br/> 
   

