---
title: "Security Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 20e21cab-8353-449a-a5a9-da18e16c1a0c
description: "Last modified: March 09, 2015"
---

# Security Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the Read, Schema, and Write security settings that specify how the security for a list is configured.
  
```
<Security>
  <ReadSecurity> 1 | 2 </ReadSecurity>
  <SchemaSecurity> 1 | 2 </SchemaSecurity>
  <WriteSecurity> 1 | 2 | 4 </WriteSecurity>
</Security>
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
|[ReadSecurity](readsecurity-element.md), [SchemaSecurity](schemasecurity-element.md), [WriteSecurity](writesecurity-element.md)|
   
### Parent elements

||
|:-----|
|[List](../../collaborative-application-markup-language-caml-schemas/list-schema/list-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

The following table summarizes possible values that subelements of the **Security** element can contain. 
  
|**Value**|**ReadSecurity**|**SchemaSecurity**|**WriteSecurity**|
|:-----|:-----|:-----|:-----|
|**1** <br/> |Read all items.  <br/> |Anyone can modify the schema (add and delete columns, etc.).  <br/> |Write all items.  <br/> |
|**2** <br/> |Read only my items.  <br/> |Only the list owner can modify the schema.  <br/> |Write only my items.  <br/> |
|**4** <br/> |N/A  <br/> |N/A  <br/> |Write no items (read-only list).  <br/> |
   
## Example

The following example outlines how to use the **Security** element. 
  
```XML
<List Name="Announcements"...>
    ...
  <Security>
    <ReadSecurity>1</ReadSecurity>
    <WriteSecurity>1</WriteSecurity>
    <SchemaSecurity>1</SchemaSecurity>
  </Security>
    ...
</List>
```


