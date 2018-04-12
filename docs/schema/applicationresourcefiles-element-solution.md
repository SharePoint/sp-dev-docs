---
title: "ApplicationResourceFiles Element (Solution)"


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
ms.assetid: e955edd9-2874-413b-8475-b78740174728
description: "Last modified: March 09, 2015"
---

# ApplicationResourceFiles Element (Solution)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the application resource files to include in the solution.
  
```
<ApplicationResourceFiles>
  <ApplicationResourceFile 
    Location=string/>
  <App_GlobalResourceFile 
    Location=string/>
</ApplicationResourceFiles>
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
|[ApplicationResourceFile](applicationresourcefile-element-solution.md) <br/> |
|[App_GlobalResourceFile](app_globalresourcefile-element-solution.md) <br/> |
   
### Parent elements

||
|:-----|
|[Solution](solution-element-solution.md)|
   
### Remarks

Use this element to deploy binary resources to an Internet Information Services (IIS) website used by a SharePoint Foundation Web Application. Files specified by [ApplicationResourceFile](applicationresourcefile-element-solution.md) child elements are deployed to a virtual directory named  `wpresources`. Files specified by [App_GlobalResourceFile](app_globalresourcefile-element-solution.md) child elements are deployed to a virtual directory named  `App_GlobalResources`.
  
## See also



[ApplicationResourceFile Element (Solution)](applicationresourcefile-element-solution.md)
  
[App_GlobalResourceFile Element (Solution)](app_globalresourcefile-element-solution.md)

