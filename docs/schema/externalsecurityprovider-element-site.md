---
title: "ExternalSecurityProvider Element (Site)"
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
ms.assetid: a3f25b67-1ab6-4b74-bd10-eb1df99046b4
description: "Last modified: March 09, 2015"
---

# ExternalSecurityProvider Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an interface that returns custom information about the security used in Microsoft SharePoint Foundation for indexing by a search crawler on a portal.
  
```
<ExternalSecurityProvider
  ID = "Text"
  Type = "Text">
</ExternalSecurityProvider>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Text**. Specifies the GUID of the component.  <br/> |
|**Type** <br/> |Optional **Text**. If **Type="View"** is specified, the counter returns a number that increases each time a view is created for the list. This counter can be used, for example, to give unique names to elements on a page depending on the view.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Components](components-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

The **ExternalSecurityProvider** element corresponds to the **Microsoft.SharePoint.IExternalSecurityWeb** interface. 
  
See [Components Element (Site)](components-element-site.md) for an example that uses the **ExternalSecurityProvider** element. 
  

