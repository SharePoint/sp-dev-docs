---
title: "Default Element (List - Field)"


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
ms.assetid: b3047b62-402d-4c19-99c4-8811826b4a57
description: "Last modified: March 09, 2015"
---

# Default Element (List - Field)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
- Sets the default value for a field.
    
```
<Default>
</Default>
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
|[Field](field-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example provides descriptive text and sets the default value of the **FavoriteColor** field to black. 
  
```XML
<Field Type="Text" Name="FavoriteColor">
  <Description>Enter your favorite color here. If you don't have a 
    favorite color, enter "Black".
  </Description>
  <Default>Black</Default>
</Field>
```


