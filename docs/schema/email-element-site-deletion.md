---
title: "Email element (Site Deletion)"
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
ms.assetid: cf2f8cac-5041-4147-adc1-1aca7f3742b1
description: Used in DEADWEB.XML to contain the email message that is sent to the owner of a site to confirm site usage or to warn that the site will be automatically deleted.
---

# Email element (Site Deletion)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in DEADWEB.XML (`\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\1033\XML`) to contain the email message that is sent to the owner of a site to confirm site usage or to warn that the site will be automatically deleted.
  
```XML
<Email>
  <Confirmation>
  ...
    </Confirmation>
  <AutoDeleteWarning>
  ...
    </AutoDeleteWarning>
</Email>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [AutoDeleteWarning](autodeletewarning-element-site-deletion.md)
- [Confirmation](confirmation-element-site-deletion.md)
   
### Parent elements

None
   
### Occurrences

- Minimum: 0
- Maximum: 1  

<br/> 
   

