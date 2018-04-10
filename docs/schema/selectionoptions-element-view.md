---
title: "SelectionOptions Element (View)"

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
ms.assetid: 97ec7231-680a-4bb5-931a-92175899b655
description: "Last modified: March 09, 2015"
---

# SelectionOptions Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies options for a drop-down list.
  
```
<SelectionOptions
  BlankPattern = "Text"
  Len = "Integer"
  MoreText = "Text">
</SelectionOptions>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**BlankPattern** <br/> |Required **Text**. The **BlankPattern** attribute is used to generate a localized text pattern for displaying text values for lookup fields that are blank (empty string). In the United States, this is localized as "(Item ^1)". ^1 is replaced with the item ID of the item being referenced.  <br/> |
|**Len** <br/> |Required **Integer**. The **Len** attribute causes the members of the drop-down list to be truncated to the specified number of Unicode characters if they exceed the value of  _Len_. This prevents the drop-down menu from being excessively wide.  <br/> |
|**MoreText** <br/> |Required **Text**. The **MoreText** attribute specifies what is displayed in order to indicate that the string has been truncated (typically an ellipsis, "...").  <br/> |
   
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
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

Conditional rendering is based on the display mode. New items use the default value of the field, while items in Edit mode use the current value of the field to set the value of the HTML **Selected** attribute, with **Selected=True** added for the default or current value of the item. 
  
For **Lookup** field types, this element produces the sequence  `<OPTION VALUE="ID">` _Title_ `</OPTION>`.
  
## Example

The following example constructs a drop-down list box and uses the **SelectOptions** element to delineate the options. 
  
```XML
<HTML><![CDATA[ <SELECT TITLE=" ]]></HTML>
<Property Select="DisplayName" />
<HTML><![CDATA[ " TABINDEX=1 NAME=" ]]></HTML>
<FieldPrefix />
<Property Select="Name" />
<HTML><![CDATA[ "> ]]></HTML>
<Switch>
   <Expr>
      <Property Select="Required" />
   </Expr>
   <Case Value="TRUE" />
   <Default>
      <HTML><![CDATA[ <OPTION Value=""> ]]></HTML>
      <HTML>(None)</HTML>
      <HTML><![CDATA[ </OPTION> ]]></HTML>
   </Default>
</Switch>
<SelectionOptions Len="100" MoreText="..." />
<HTML><![CDATA[ </SELECT> ]]></HTML>
```


