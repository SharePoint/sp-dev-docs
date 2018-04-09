---
title: "ID Element (View)"
ms.author: NormSohl
author: NormSohl
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

# ID Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Renders the ID of the current item being displayed in an edit or display form. The **ID** element can also be used in a view to render the ID of the current row in the list. 
  
```
<ID>
</ID>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

As an example of the use of the **ID** element, if the browser is displaying  `http://server/Lists/Announcements/DispForm.htm?ID=37,` then  `<ows:ID>` renders 37. 
  

