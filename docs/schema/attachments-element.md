---
title: "Attachments element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 88568c7a-ed02-4d08-9190-c621a62e5ead
description: Contains the URLs of attachments for a specified list item.
---

# Attachments element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the URLs of attachments for a specified list item.
  
```XML
<Attachments>
</Attachments>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [RenderPattern (Field Types)](renderpattern-element-field-types.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1
   
## Example

The following example shows a SOAP response for the **GetAttachmentCollection(String, String)** method. 
  
```XML
<GetAttachmentCollectionResult>
   <Attachments>
      <Attachment>http://Myoffice.Net/Poster.bmp</Attachment>
      <Attachment>http://Myoffice.Net/Attachment.bmp</Attachment>
      <Attachment>http://Myoffice.Net/Paris.bmp</Attachment>
   <Attachments>
<GetAttachmentCollectionResult>
```


