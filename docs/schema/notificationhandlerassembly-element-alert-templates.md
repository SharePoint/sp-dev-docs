---
title: "NotificationHandlerAssembly element (AlertTemplates)"
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
ms.assetid: 09ba7a32-e810-4fcf-8993-efb3d4678b7d
description: Specifies assembly information for an alert notification handler.
---

# NotificationHandlerAssembly element (AlertTemplates)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies assembly information for an alert notification handler.
  
```XML
<NotificationHandlerAssembly>
</NotificationHandlerAssembly>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

None
  
### Parent elements

- [Properties](properties-element-alerttemplates.md)
   
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

## See also

- [UpdateHandlerAssembly element (AlertTemplates)](updatehandlerassembly-element-alerttemplates.md)

