---
title: "SetList Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: cd87a9ba-771d-4980-9a8a-1cca4cfd2ad1
description: "Last modified: March 09, 2015"
---

# SetList Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Designates which list is current.
  
```
<SetList
  Name = "Text"
  PreserveContext = "TRUE" | "FALSE"
  Scope = "Request">
</SetList>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Required **Text**. Specifies the name of the list.  <br/> |
|**PreserveContext** <br/> |Optional **Boolean**. If **FALSE**, implementing the **SetList** element reruns the database query that is necessary to fetch the data for a form that displays a single list item. This functionality is useful when a view and a form are on the same page. The default value is **TRUE**.  <br/> |
|**Scope** <br/> |When set to **Request**, this attribute makes the list globally available to the page.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[Method](method-element-view.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Remarks

When you use the **SetList** element, you need to use the internal name, which has no spaces and is invariant. 
  
The **SetList** element has both a spanning and a nonspanning form, so that  `<SetList>Announcements</SetList>` would be the same as  `<SetList Name="Announcements"/>`.
  
The **SetList** element is often a child to a [Method](method-element-view.md) element used in batch processing of requests. 
  
## Example

The following example returns the value of the **Title** field from the Lists table in the database if the current list equals the list that is looked up. Initially, the current list is temporarily assigned to a variable,  `Old`, and then reinstated as the current list.
  
```XML
<SetVar Scope="Request" Name="Old">
   <List/>
</SetVar>
<SetList>
   <GetVar Name="Lookup"/>
</SetList>
<IfEqual>
   <Expr1>
      <List/>
   </Expr1>
   <Expr2>
      <GetVar Name="Lookup"/>
   </Expr2>
   <Then>
      <ListProperty HTMLEncode="TRUE" Select="Title"/>
   </Then>
</IfEqual>
<SetList><GetVar Name="Old"/></SetList>
```

## See also

#### Other resources

[List Element (List)](../../collaborative-application-markup-language-caml-schemas/list-schema/list-element-list.md)

