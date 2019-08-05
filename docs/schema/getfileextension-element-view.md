---
title: GetFileExtension element (View)
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
ms.assetid: a15fb6c3-6635-444f-abca-290d2dce440d
description: Returns the file extension for the specified file.
---

# GetFileExtension element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the file extension for the specified file.
  
```XML
<GetFileExtension
  HTMLEncode = "TRUE" | "FALSE">
</GetFileExtension>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
   
### Child elements

- [Column](column-element-view.md)
- [Field](field-element-view.md)
- [LookupColumn](lookupcolumn-element-view.md)
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0 
- Maximum: Unbounded  
   
## Example

The following line `<GetFileExtension>somefile.xls</GetFileExtension>` would return "xls".
  
The following example returns file extensions from the Lookup column, except in cases where extension equals "htm".
  
```XML
<Switch>
  <Expr>
    <GetFileExtension>
      <LookupColumn StripWS="TRUE" />
    </GetFileExtension>
  </Expr>
  <Case Value="htm" />
  <Default>
    <GetFileExtension HTMLEncode="TRUE">
      <LookupColumn StripWS="TRUE" />
    </GetFileExtension>
  </Default>
</Switch>
```

<br/>
