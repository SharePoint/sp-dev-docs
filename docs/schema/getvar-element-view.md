---
title: "GetVar Element (View)"
ms.author: NormSohl
author: NormSohl
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
ms.assetid: 0bdaee4d-7d7c-4e2f-9b7c-09ea5f5d0b99
description: "Last modified: March 09, 2015"
---

# GetVar Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns a variable in the context of rendering the page. Variables can be set either locally to the current level of XML or globally to the page.
  
```
<GetVar
  AutoHyperlink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "TRUE" | "FALSE"
  ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  Scope ="Request"
    StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</GetVar>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AutoHyperlink** <br/> |Optional **Boolean**. **TRUE** to surround text with **\<A\>** tags if the text appears like a hyperlink, for example, www.microsoft.com.  <br/> |
|**AutoHyperLinkNoEncoding** <br/> |Optional **Boolean**. **TRUE** to surround text with **\<A\>** tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.  <br/> |
|**AutoNewLine** <br/> |Optional **Boolean**. **TRUE** to insert **\<BR\>** tags into the text stream and to replace multiple spaces with a non-breaking space ( **&amp;nbsp;**).  <br/> |
|**Default** <br/> |Optional **Text**. Renders the text assigned to this attribute if the value returned by the **Select** attribute of another element is an empty string.  <br/> |
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**Name** <br/> |Required **Text**. The name of the variable.  <br/> |
|**Scope** <br/> |If set to **Request**, the variable is globally available on the page.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.  <br/> |
|**URLEncodeAsUrl** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

The **GetVar** element is often used within an [Expr](expr-element-view.md) element in a [Switch](switch-element-view.md) or [IfEqual](ifequal-element-view.md) element. 
  
If **Scope="Request"** is specified in the [SetVar](setvar-element-view.md) element, a variable assignment will take effect anywhere on the current page. Otherwise, the assignment affects only children of the **SetVar** element. 
  
## Example

The following example uses the **GetVar** element to return current filtering information for determining what text to display in the toolbar above the list. 
  
```XML
<Switch>
   <Expr>
      <GetVar Name="Filter" />
   </Expr>
   <Case Value="1">
      <HTML>Hide Filter Choices</HTML>
   </Case>
   <Default>
      <Switch>
         <Expr>
            <GetVar Name="FilterField1" />
         </Expr>
         <Case Value="">
            <HTML>Filter</HTML>
         </Case>
         <Default>
            <HTML>Change Filter</HTML>
         </Default>
      </Switch>
   </Default>
</Switch>
```

If filter choices are open on the list and the Filter variable contains 1, "Hide Filter Choices" is displayed. If not, the default action implements a second **Switch** statement that evaluates a second variable, FilterField1. If the value of FilterField1 is an empty string, then no filter is applied and "Filter" is displayed in the toolbar; otherwise, the default action is to display "Change Filter." 
  
## See also

#### Other resources

[SetVar Element (View)](setvar-element-view.md)

