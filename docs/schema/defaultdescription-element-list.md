---
title: "DefaultDescription Element (List)"


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
ms.assetid: 04d63b39-b0fb-4458-a8e0-3fc14cd29986
description: "Last modified: March 09, 2015"
---

# DefaultDescription Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Sets the default description that appears in the title area of list views and on the **Documents and Lists** page in Microsoft SharePoint Foundation. 
  
```
<DefaultDescription>
</DefaultDescription>
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
|None |
   
### Parent elements

||
|:-----|
|[MetaData (List)](metadata-element-list.md), [MetaData (Site)](../../collaborative-application-markup-language-caml-schemas/site-schema/metadata-element-site.md)|
   
### Remarks

The **DefaultDescription** element requires a value within the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file of a custom list definition. 
  
## Example

The following excerpt sets the default description for announcements lists.
  
```XML
<DefaultDescription>
  Use the Announcements list to post messages on the home page 
    of your site.
</DefaultDescription>
```


