---
title: "PagedRowset Element (List)"


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
ms.assetid: 92b3b08a-c193-4a68-bfe0-706a349d448b
description: "Last modified: March 09, 2015"
---

# PagedRowset Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders Collaborative Application Markup Language (CAML) within a view, executing if more items are returned in the view than the specified row limit for the view.
  
Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx).
  
```
<PagedRowset>
</PagedRowset>
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
|Numerous |
   
### Parent elements

||
|:-----|
|[View](view-element-list.md), [ViewStyle](viewstyle-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

This element provides a section of the view that is rendered if there is more than one page of data. Within a **PagedRowset** element, the following variables can be implemented: 
  
-  `<GetVar Name="PageFirstRow"/>` returns the item number of the first item on the current page. 
    
-  `<GetVar Name="PageLastRow"/>` returns the item number of the last item on the current page. 
    
-  `<GetVar Name="NextPageData"/>` returns the information that must be passed along in the URL so that the next page of data to be displayed can be determined. 
    
## Example

The following example uses the **PagedRowset** element to display the string "(Items 1 to  _N_)" where  _N_ represents the current setting for the [RowLimit](rowlimit-element-list.md) element. The example also displays "Next" and an icon representing "Next," which are both hyperlinks to the current view page with information necessary to display the next 100 items. 
  
```

```

```XML
<PagedRowset>
   <HTML><![CDATA[ <TABLE width="100%" border=0><TR><TD align=right 
      Class="ms-vb"> ]]></HTML>
   <HTML>(Items</HTML>
   <HTML><![CDATA[ &amp;nbsp; ]]></HTML>
   <GetVar Name="PageFirstRow" HTMLEncode="TRUE" />
   <HTML><![CDATA[ &amp;nbsp; ]]></HTML>
   <HTML>to</HTML>
   <HTML><![CDATA[ &amp;nbsp; ]]></HTML>
   <GetVar Name="PageLastRow" HTMLEncode="TRUE" />
   <HTML>)</HTML>
   <HTML><![CDATA[ &amp;nbsp;<A HREF="javascript:" 
      OnClick='javascript:SubmitFormPost(" ]]></HTML>
   <ScriptQuote NotAddingQuote="TRUE">
      <PageUrl />
      <HTML>?</HTML>
      <GetVar Name="NextPageData" />
   </ScriptQuote>
   <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
   <HTML>Next</HTML>
   <HTML><![CDATA[ </A> <A HREF="javascript:" 
      OnClick='javascript:SubmitFormPost(" ]]></HTML>
   <ScriptQuote NotAddingQuote="TRUE">
      <PageUrl />
      <HTML>?</HTML>
      <GetVar Name="NextPageData" />
   </ScriptQuote>
   <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
   <HTML><![CDATA[ <img src=" ]]></HTML>
   <ImagesPath />
   <HTML><![CDATA[ /next.gif" border=0></A>&amp;nbsp;
      </TD></TR></TABLE> ]]></HTML>
</PagedRowset>
```

## See also



[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)
  
[XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)

