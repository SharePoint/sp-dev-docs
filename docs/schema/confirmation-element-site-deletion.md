---
title: "Confirmation element (Site Deletion)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site Deletion Confirmation schema
api_type:
- schema
ms.assetid: b4650e11-6923-4ba1-b1f6-f08b46a0f315
description: Used in DEADWEB.XML to contain the subject and body of the email message sent to the creator of a site collection to confirm whether the site collection is still in use. 
---

# Confirmation element (Site Deletion)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in DEADWEB.XML (`\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\1033\XML`) to contain the subject and body of the email message sent to the creator of a site collection to confirm whether the site collection is still in use. 
  
```XML
<Confirmation>
   <ConfirmationSubject>
   </ConfirmationSubject>
   <ConfirmationBody>
   </ConfirmationBody>
</Confirmation>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [ConfirmationBody](confirmationbody-element-site-deletion.md)
- [ConfirmationSubject](confirmationsubject-element-site-deletion.md)
   
### Parent elements

- [Email](email-element-site-deletion.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  

<br/> 
   

