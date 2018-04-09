---
title: "NotificationHandlerClassName Element (AlertTemplates)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: 7eb1fb83-2a22-44e4-9526-c20400a9eb6b
description: "Last modified: March 09, 2015"
---

# NotificationHandlerClassName Element (AlertTemplates)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a class name for an alert notification handler.
  
```
<NotificationHandlerClassName>
</NotificationHandlerClassName>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

None
  
## Parent Element

||
|:-----|
|[Properties](properties-element-alerttemplates.md)|
   
## Example

```XML
<Properties>
   <NotificationHandlerAssembly>
      AlertHandler, Version=1.0.0.0, Culture=neutral, PublicKeyToken=d59ecf2a3bd66904
   </NotificationHandlerAssembly>
   <NotificationHandlerClassName>
      AlertHandler.Class1
   </NotificationHandlerClassName>
</Properties>
```


