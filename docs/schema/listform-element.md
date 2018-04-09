---
title: "ListForm Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 11e82e82-33db-4cd1-b7aa-eef1f6152ddd
description: "Last modified: March 09, 2015"
---

# ListForm Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders a form for the particular list that is specified by a previous [SetList](../../collaborative-application-markup-language-caml-schemas/view-schema/setlist-element-view.md) element. 
  
```
<ListForm
  Type = "DisplayForm" | "EditForm" | "NewForm" | "NewFormDialog">
</ListForm>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** <br/> |Required. Specifies the type of form that is defined. Can be one of the following values:  <br/> **DisplayForm** — The form used to display an item in a list.  <br/> **EditForm** — The form used to edit an existing item.  <br/> **NewForm** — The form used to create a new item.  <br/> **NewFormDialog** — Used only for document libraries, specifying the form that is used as the property dialog box in client-side applications when a file is saved to a document library.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## See also



[SetList Element (View)](../../collaborative-application-markup-language-caml-schemas/view-schema/setlist-element-view.md)

