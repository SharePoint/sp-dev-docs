---
title: "MetaData Element (List)"


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
ms.assetid: d5db52a4-83b2-45a9-a259-f539937dbcb3
description: "Last modified: March 09, 2015"
---

# MetaData Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in list definitions ([Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file) to separate list metadata from data. 
  
```
<MetaData>
</MetaData>
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
|[ContentTypes](contenttypes-element-list.md), [Default](default-element-listform.md), [DefaultDescription](defaultdescription-element-list.md), [DocumentLibraryTemplate](documentlibrarytemplate-element-list.md), [Fields](fields-element-list.md), [Forms](forms-element-list.md), [Toolbar](toolbar-element-list.md), [Validation](validation-element-list.md), [Views](views-element-list.md)|
   
### Parent elements

||
|:-----|
|[List](list-element-list.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following sample illustrates the skeletal structure of a list with **MetaData** and [Data](../../collaborative-application-markup-language-caml-schemas/site-schema/data-element-site.md) elements. 
  
```XML
<List Name="Announcements" Title="My Announcements">
  <MetaData>
    <Fields>
      ...
    </Fields>
    <Views>
      ...
    </Views>
    <Forms>
      ...
    </Forms>
  </MetaData>
  <Data>
    <Rows>
      <Row>
        ...
    </Rows>
  </Data>
</List>
```

## See also



[Data](../../collaborative-application-markup-language-caml-schemas/site-schema/data-element-site.md)

