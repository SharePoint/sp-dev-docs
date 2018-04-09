---
title: "ContentTypeRef Element (List)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 7ab41bf5-2cd7-47d4-81f9-965a846d4ad4
description: "Last modified: March 09, 2015"
---

# ContentTypeRef Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a reference to a content type to associate with lists that are created through the list definition.
  
```
<ContentTypeRef
  ID = "Text">
</ContentTypeRef>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Text**. Specifies the ID of the content type. For information on the format of content type IDs, see [Content Type IDs](http://msdn.microsoft.com/library/81fa8d81-c4f5-4750-8f70-811620fdffcf%28Office.15%29.aspx).  <br/> |
   
### Child elements

||
|:-----|
|[Folder](folder-element-list.md)|
   
### Parent elements

||
|:-----|
|[ContentTypes](contenttypes-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example shows part of a definition for a list that uses three content types.
  
```XML
<ContentTypes>
  <ContentTypeRef ID="0x01010012841A8869DB425cB829C3875EC558CE01">
    <Folder TargetName="Forms/Document" />
  </ContentTypeRef>
  <ContentTypeRef ID="0x01010012841A8869DB425cB829C3875EC558CE02">
    <Folder TargetName="Forms/Document" />
  </ContentTypeRef>
  <ContentTypeRef ID="0x0120" />
</ContentTypes>
```


