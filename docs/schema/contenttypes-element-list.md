---
title: ContentTypes element (List)
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
ms.assetid: b5af3530-195e-41b6-865e-8623f2a3cd08
description: Contains references to content types to associate with lists that are created through the list definition.
---

# ContentTypes element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains references to content types to associate with lists that are created through the list definition.
  
```XML
<ContentTypes>
</ContentTypes>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [ContentType](contenttype-element-contenttype.md)
- [ContentTypeRef](contenttyperef-element-list.md)
   
### Parent elements

- [MetaData (List)](metadata-element-list.md)
- [MetaData (Site)](metadata-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
## Example

The following example shows a partial definition for a list that uses three content types.
  
```XML
<List xmlns:ows="Microsoft SharePoint" Title="Financial Documents"
  Direction="$Resources:Direction;" Url="Financial Documents"
  BaseType="1"
  EnableContentTypes="TRUE">
  <MetaData>
    <ContentTypes>
      <ContentTypeRef ID="0x01010012841A8869DB425cB829C3875EC558CE01">
        <Folder TargetName="Forms/Document" />
      </ContentTypeRef>
      <ContentTypeRef ID="0x01010012841A8869DB425cB829C3875EC558CE02">
        <Folder TargetName="Forms/Document" />
      </ContentTypeRef>
      <ContentTypeRef ID="0x0120" />
    </ContentTypes>
    ...
  </MetaData>
</List>
```

## See also

- [How to: Add a Content Type to a List](http://msdn.microsoft.com/library/5ae6e295-a406-4f90-920f-030c0dfcd666%28Office.15%29.aspx)

