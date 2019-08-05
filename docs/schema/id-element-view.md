---
title: "ID element (View)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 170a56a9-1259-4e57-aabf-05d4758aed88
description: "Last modified: March 09, 2015"
---

# ID element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the ID of the current item being displayed in an edit or display form. The **ID** element can also be used in a view to render the ID of the current row in the list. 
  
```XML
<ID>
</ID>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
### Remarks

As an example of the use of the **ID** element, if the browser is displaying `http://server/Lists/Announcements/DispForm.htm?ID=37,` then `<ows:ID>` renders 37. 
  

