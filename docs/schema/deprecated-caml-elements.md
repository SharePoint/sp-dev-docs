---
title: Deprecated CAML elements
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 849d6d71-7b1d-4ce1-a184-93b9d20494c5
description: Collaborative Application Markup Language (CAML) elements and attributes that were deprecated in Windows SharePoint Services 3.0.
---

# Deprecated CAML elements
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The following Collaborative Application Markup Language (CAML) elements and attributes were deprecated in Windows SharePoint Services 3.0.
  
## Elements

- **HTTPHeader**
    
- **InNavBar**
    
- **InheritsPermissions**
    
- **QueryInfo**
    
- **SortSelect**
    
- **ChoiceOptions**
    
- **Cmd**
    
- **ExpandXML**
    
- **FormLayoutEdit**
    
- **MetaKey**
    
- **ToUpper**
    
- **ViewColPicker**
    

## Attributes

- **PageType**
    
- **ReqAuth**
    
- **Created**
    
- **DefaultViewUrl**
    
- **DocTemplateUrl**
    
- **Ext**
    
- **Formats**
    
- **Modified**
    
- **NumeralShapes**
    
- **NumeralShapes**
    
- **PIN**
    
- **Time24**
    
## Differences in page execution

CAML islands cannot be directly used on pages within the site, which now depend on ASP.NET for execution. Web Parts replace CAML views in the display of list data on these pages. This behavior differs from the previous version of SharePoint Foundation.
  

