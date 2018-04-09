---
title: "Attachments Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 88568c7a-ed02-4d08-9190-c621a62e5ead
description: "Last modified: March 09, 2015"
---

# Attachments Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the URLs of attachments for a specified list item.
  
```
<Attachments>
</Attachments>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

|**Element**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Parent elements

||
|:-----|
|[RenderPattern](http://msdn.microsoft.com/library/439b5aec-2c0f-4085-86a0-bfd3a84bb0b2%28Office.15%29.aspx)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
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


