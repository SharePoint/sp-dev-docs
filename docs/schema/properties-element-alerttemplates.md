---
title: "Properties element (AlertTemplates)"
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
ms.assetid: d4bdd815-8bbd-40d2-821c-926aa3128ad1
description: Excludes fields from the list that is displayed in the alert message.
---

# Properties element (AlertTemplates)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Excludes fields from the list that is displayed in the alert message.
  
```XML
<Properties>
  [<ImmediateNotificationExcludedFields>
    ...
  </ImmediateNotificationExcludedFields>]  [<DigestNotificationExcludedFields>
    ...
  </DigestNotificationExcludedFields>]
  [<NotificationHandlerAssembly>
  </NotificationHandlerAssembly>]  [<NotificationHandlerClassName>
  </NotificationHandlerClassName>]
  [<UpdateHandlerAssembly>
  </UpdateHandlerAssembly>]  [<UpdateHandlerClassName>
  </UpdateHandlerClassName>]
</Properties>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

- [ImmediateNotificationExcludedFields](immediatenotificationexcludedfields-element-alerttemplates.md) 
- [DigestNotificationExcludedFields](digestnotificationexcludedfields-element-alerttemplates.md) 
- [NotificationHandlerAssembly](notificationhandlerassembly-element-alert-templates.md) 
- [NotificationHandlerClassName](notificationhandlerclassname-element-alerttemplates.md) 
- [UpdateHandlerAssembly](updatehandlerassembly-element-alerttemplates.md) 
- [UpdateHandlerClassName](updatehandlerclassname-element-alerttemplates.md) 
   
### Parent elements

- [AlertTemplate](alerttemplate-element-alerttemplates.md)
   
## Example

```XML
<Properties>
   <ImmediateNotificationExcludedFields>
      ID;Author;Editor;Modified_x0020_By;Created_x0020_By;
      _UIVersionString;ContentType;TaskGroup;IsCurrent;Attachments;
      NumComments;
   </ImmediateNotificationExcludedFields>
   <DigestNotificationExcludedFields>
      ID;Author;Editor;Modified_x0020_By;Created_x0020_By;
      _UIVersionString;ContentType;TaskGroup;IsCurrent;Attachments;
      NumComments;
   </DigestNotificationExcludedFields>
</Properties>
```


