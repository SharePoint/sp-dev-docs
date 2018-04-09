---
title: "Confirmation Element (Site Deletion)"
ms.author: NormSohl
author: NormSohl
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
description: "Last modified: March 09, 2015"
---

# Confirmation Element (Site Deletion)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used in DEADWEB.XML ( `\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\1033\XML`) to contain the subject and body of the e-mail message sent to the creator of a site collection to confirm whether the site collection is still in use. 
  
```
<Confirmation>
   <ConfirmationSubject>
   </ConfirmationSubject>
   <ConfirmationBody>
   </ConfirmationBody>
</Confirmation>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[ConfirmationBody](confirmationbody-element-site-deletion.md), [ConfirmationSubject](confirmationsubject-element-site-deletion.md)|
   
## Parent Elements

||
|:-----|
|[Email](email-element-site-deletion.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

