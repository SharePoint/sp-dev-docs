---
title: "Components element (Site)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 77a1b2e2-b261-45a1-8bd3-92fa821989aa
description: Used in the Onet.xml file of a site definition to provide information about Microsoft SharePoint Foundation components.
---

# Components element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file of a site definition to provide information about Microsoft SharePoint Foundation components. 
  
```XML
<Components>
</Components>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [ExternalSecurityProvider](externalsecurityprovider-element-site.md)
- [FileDialogPostProcessor](filedialogpostprocessor-element-site.md)
   
### Parent elements

- [Project](project-element-site.md)
   
### Occurrences

- Minimum: 0 
- Maximum: 1 
   
### Remarks

Both child elements of the **Components** element are optional, and neither element can appear more than once. 
  
## Example

The following example from an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file shows how the **Components** element is used. 
  
```XML
<Components>
  <FileDialogPostProcessor ID="C6659361-1625-4746-931C-36014B146679" />
  <ExternalSecurityProvider ID="A373E6A8-7A87-11D3-B1C1-00C04F68155C" 
    Type="Microsoft.SharePoint.Portal;Microsoft.SharePoint
    .Portal.SiteData.CategoryWebSecurityProvider" />
</Components>
```

<br/>
