---
title: "Month element (Regional Settings)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Regional Settings schema
api_type:
- schema
ms.assetid: 16a6ccc7-5d5e-4703-a085-4e861e94dae8
description: Used in TIMEZONE.XML to contain an integer representing the month in which standard time or daylight saving time begins for a time zone. 
---

# Month element (Regional Settings)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG) to contain an integer representing the month in which standard time or daylight saving time begins for a time zone. If the **Month** element is empty outside the context of TIMEZONE.XML, such as in a view definition ([Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx)), it returns the current month.
  
```XML
<Month>
</Month>
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
- Maximum: 1 (Unbounded outside TIMEZONE.XML) 
   
### Remarks

For an example that shows how to use the **Month** element, see [StandardTime element (Regional Settings)](standardtime-element-regional-settings.md).
  
## See also

- [Date element (Regional Settings)](date-element-regional-settings.md) 
- [Day element (Regional Settings)](day-element-regional-settings.md)  
- [Hour element (Regional Settings)](hour-element-regional-settings.md)

