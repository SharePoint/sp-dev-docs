---
title: "Properties Element (AlertTemplates)"
ms.author: rickki
author: rickki
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
description: "Last modified: March 09, 2015"
---

# Properties Element (AlertTemplates)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Excludes fields from the list that is displayed in the alert message.
  
```
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

## Attributes

None
  
## Child Elements

||
|:-----|
|[ImmediateNotificationExcludedFields](immediatenotificationexcludedfields-element-alerttemplates.md) <br/> |
|[DigestNotificationExcludedFields](digestnotificationexcludedfields-element-alerttemplates.md) <br/> |
|[NotificationHandlerAssembly](notificationhandlerassembly-element-alert-templates.md) <br/> |
|[NotificationHandlerClassName](notificationhandlerclassname-element-alerttemplates.md) <br/> |
|[UpdateHandlerAssembly](updatehandlerassembly-element-alerttemplates.md) <br/> |
|[UpdateHandlerClassName](updatehandlerclassname-element-alerttemplates.md) <br/> |
   
## Parent Elements

||
|:-----|
|[AlertTemplate](alerttemplate-element-alerttemplates.md)|
   
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


