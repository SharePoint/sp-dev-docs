---
title: "RowLimitExceeded Element (List)"


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
ms.assetid: f40d722e-6579-4d89-9c9c-1c683bd3ca9a
description: "Last modified: March 09, 2015"
---

# RowLimitExceeded Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies alternate rendering when a row limit is exceeded. It executes if the **Paged** attribute of the [Row](row-element-site.md) element is not set to **TRUE**.
  
> [!NOTE]
> Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx). 
  
```
<RowLimitExceeded>
</RowLimitExceeded>
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
|Numerous |
   
### Parent elements

||
|:-----|
|[View](view-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example provides a link to more items if the row limit is exceeded.
  
```XML
<RowLimitExceeded>
   <HTML><![CDATA[ <table class="ms-summarycustombody" cellpadding=0 
         cellspacing=0 border=0 rules=rows>
      <TR><TD Class="ms-vb"><a href=" ]]></HTML>
   <ListProperty Select="DefaultViewUrl" />
   <HTML><![CDATA[ " ID=onetidMoreAnn> ]]></HTML>
   <HTML>(More Announcements...)</HTML>
   <HTML><![CDATA[ </a></TD></TR>
                    <tr><td height="8"><IMG SRC="/_layouts/images
                    /blank.gif" width=1 height=8 alt="">
                    </td></tr></table> ]]></HTML>
</RowLimitExceeded>
```

## See also



[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)
  
[XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)
  
[RowLimit Element (List)](rowlimit-element-list.md)
  
[Rows Element (Site)](rows-element-site.md)

