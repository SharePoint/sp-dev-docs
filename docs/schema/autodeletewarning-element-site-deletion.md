---
title: "AutoDeleteWarning Element (Site Deletion)"


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
ms.assetid: 8851cb04-88fc-4cc4-b0ba-e61c6090cadd
description: "Last modified: March 09, 2015"
---

# AutoDeleteWarning Element (Site Deletion)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in DEADWEB.XML ( `\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\1033\XML`) to contain the subject and body of the e-mail message sent to the creator of a site collection when automatic deletion is enabled in Microsoft SharePoint Foundation Central Administration and the site collection is not in use.
  
```
<AutoDeleteWarning>
  <AutoDeleteSubject>
  </AutoDeleteSubject>
  <AutoDeleteBody>
  </AutoDeleteBody>
</AutoDeleteWarning>
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
|[AutoDeleteBody](autodeletebody-element-site-deletion.md), [AutoDeleteSubject](autodeletesubject-element-site-deletion.md)|
   
### Parent elements

||
|:-----|
|[Email](email-element-site-deletion.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

