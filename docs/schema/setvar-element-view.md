---
title: "SetVar Element (View)"
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
ms.assetid: e74bf955-f6af-4f60-bfe1-eb5e88f48f78
description: "Last modified: March 09, 2015"
---

# SetVar Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Allows variables to be set in the context of rendering the page—either locally to the current level of XML or globally to the page.
  
```
<SetVar
  ID = "Text"
  Name = "Text"
  Scope = "Request"
  Value = "Text">
</SetVar>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Optional **Text**. Provides an ID for the variable.  <br/> |
|**Name** <br/> |Required **Text**. Specifies a name for the variable.  <br/> |
|**Scope** <br/> |If set to **Request**, the variable is global.  <br/> |
|**Value** <br/> |Optional **Text**. Can be used to assign a value to the variable when this is an empty element.  <br/> |
   
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
   
### Remarks

The **SetVar** element has both a spanning and a non-spanning form, so that  `<SetVar Name="MyVar">Announcements</SetVar>` would be the same as  `<SetVar Name="MyVar" Value="Announcements/>`.
  
If **Scope="Request"** is specified in the **SetVar** element, a variable assignment takes effect anywhere in the current page. Otherwise, the assignment affects only children of the **SetVar** element. 
  
The **SetVar** element is often a child to a [Method](method-element-view.md) element used in batch processing of requests. 
  
The **SetVar** element is frequently used to change the display mode by setting **DisplayMode** to one of the following values. 
  
|**Value**|**Description**|
|:-----|:-----|
|**DISPLAY** <br/> |Used when rendering the **ViewBody** section of a view.  <br/> |
|**EDIT** <br/> |Used when rendering an edit item form.  <br/> |
|**DISPLAYHEAD** <br/> |Used when rendering the **ViewHeader** section of a view.  <br/> |
|**NEW** <br/> |Used when rendering a new item form.  <br/> |
|**PREVIEWDISPLAY** <br/> |Used when editing a display form with Microsoft FrontPage.  <br/> |
|**PREVIEWNEW** <br/> |Used when editing a new item form with FrontPage.  <br/> |
|**PREVIEWEDIT** <br/> |Used when editing an edit item form with FrontPage.  <br/> |
   
## Example

The following example illustrates using the **SetVar** element to set global scope for a variable. The second line returns the value set in the first line. 
  
```XML
<SetVar Name="GlobalVar" Scope="Request">Value</SetVar>
...
<GetVar Name="GlobalVar">
```

In the following example, the first [GetVar](http://msdn.microsoft.com/library/abf483e3-c6e7-4d72-97c6-76300e1b483e%28Office.15%29.aspx) element returns "Value_2", and the second **GetVar** element returns "Value_1", because the **SetVar** element that contains "Value_2" applies only to children of the "Sample" element. "Value_2" goes out of scope after the closing "Sample" tag. 
  
```XML
<SetVar Name="myVar">Value_1</SetVar>
   <Sample>
      <SetVar Name="myVar">Value_2</SetVar>
      <GetVar Name="myVar"/>
   </Sample>
   <GetVar Name="myVar"/>
```

The following example evaluates whether a field is required and, if it is required, creates the red asterisk (*) that is displayed beside required fields in New or Edit forms and sets the **HasRequired** variable to **TRUE**.
  
```XML
<Switch>
   <Expr>
      <Property Select="Required"/>
   </Expr>
   <Case Value="TRUE">
      <HTML><![CDATA[<font color=red> *</font>]]></HTML>
      <SetVar Scope="Request" Name="HasRequired">TRUE</SetVar>
   </Case>
</Switch>
```

## See also



[GetVar Element (View)](getvar-element-view.md)

