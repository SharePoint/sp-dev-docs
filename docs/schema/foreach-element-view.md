---
title: "ForEach Element (View)"
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
ms.assetid: b92ddf6a-951e-45aa-8302-daa342563394
description: "Last modified: March 09, 2015"
---

# ForEach Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Provides a basic mechanism for enumerating a collection of views or fields defined in the current list.
  
```
<ForEach
  Select = "Text">
</ForEach>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Select** <br/> |Required **Text**. The namespace to enumerate.  <br/> |
   
## Child Elements

||
|:-----|
|Numerous |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

The value of the **Select** attribute varies in the different schema files: 
  
- CHOICES/CHOICE inside a **Choice** field. Note capitalization and the lack of a leading forward slash (/). In this case, the **ForEach** element must be nested inside another **ForEach** element that enumerates Fields/Field (in other words, inside a [Fields](fields-element-view.md) element). The current point in the **Fields** enumeration must be a **Choice** field. 
    
- /FIELDS/Field for enumerating all the fields in the current list.
    
- /FORMS/Form for enumerating all the forms for a particular list (very similar to views).
    
- /LISTTEMPLATES/ListTemplate for enumerating all the server-supported list definitions specified in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file (for announcements, tasks, contacts, events, and so on). 
    
- /DOCUMENTTEMPLATES/DocumentTemplate for enumerating all the server-supported document library template files (Microsoft Excel worksheet, Microsoft Word document, etc.).
    
The body of the **ForEach** element is rendered once for each view or field in the collection. The [Property](property-element-view.md) element can be used to extract individual properties of the view or field. 
  
The **ForEach** element can also be used to reference a single field or view. To do so, a variable must be set with the name of the desired field or view; the **MatchVar** attribute is used to reference that variable. 
  
## Example

The following example uses the **ForEach** element to construct a drop-down list box. 
  
```XML
<ForEach Select="CHOICES/CHOICE">
   <HTML>fld.AddChoice(</HTML>
   <ScriptQuote>
      <Property Select="."/>
   </ScriptQuote>
   <HTML>, </HTML>
   <ScriptQuote>
      <Property Select="Value"/>
   </ScriptQuote>
   <HTML>);</HTML>
</ForEach>
```


