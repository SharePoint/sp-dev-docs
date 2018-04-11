---
title: "WebParts element (List)"
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
ms.assetid: b3cf8641-bf7b-4e48-a4fa-5fe270bd0ad3
description: Contains a collection of Web Parts in a form for a list definition or a list template.
---

# WebParts element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a collection of Web Parts in a form for a list definition or a list template.
  
```XML
<WebParts>
    <AllUsersWebPart
        WebPartOrder = Integer    
        WebPartZoneID = "Text">      <![CDATA[...]]>  
    </AllUsersWebPart>
</WebParts>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [AllUsersWebPart](alluserswebpart-element-list.md)
   
### Parent elements

- [Form](form-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
### Remarks

For an example of how to use this element, see [Creating Custom Form Templates](http://msdn.microsoft.com/library/b77ec86e-9568-4325-b949-13ee2fdcaabf%28Office.15%29.aspx).
  

