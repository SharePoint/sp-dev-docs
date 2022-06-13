---
title: "Length element (View)"
description: Describes the Length element (View) and provides the elements and attributes.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
api_name:
- View schema
api_type:
- schema
ms.assetid: 27fc1bdc-c4f1-4358-ac6b-18d84a5d458e
---

# Length element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the length of the string within the element. The value returned can be divided by, or subtracted from, the value of the **Div** or **Sub** attribute, respectively. 
  
```XML
<Length
  Div = "Integer"
  Sub = "Integer">
</Length>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Div** <br/> |Optional **Integer**. Specifies how much to divide the resulting value by.  <br/> |
|**Sub** <br/> |Optional **Integer**. Specifies how much to subtract from the resulting value.  <br/> |
   
### Child elements

- [Column](column-element-view.md)
- [GetVar](getvar-element-view.md)
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
### Remarks

The following line of code sets a variable named **TextLength**.
  
```XML
<SetVar Name="TextLength">This is some text that is 
   45 characters long.</SetVar>
```

The next block of code divides the value of the **TextLength** variable by 5, to render the number 9. 
  
```XML
<Length Div="5">
  <GetVar Name="TextLength"/>
</Length>
```

<br/>
