---
title: "PagedRecurrenceRowset element (List)"
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
ms.assetid: de4d0dab-c427-4536-9c5d-6d3d1da8c1e9
description: Contains the definition of the page to display for a recurring item in an events list when the number of items in the recurrence surpasses the limit set by the RowLimit element.
---

# PagedRecurrenceRowset element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the definition of the page to display for a recurring item in an events list when the number of items in the recurrence surpasses the limit set by the [RowLimit](rowlimit-element-list.md) element. 
  
Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx).
  
```XML
<PagedRecurrenceRowset>
</PagedRecurrenceRowset>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [View](view-element-list.md)
- [ViewStyle](viewstyle-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example from the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for announcements lists defines how to display items when the number of items exceeds the value specified by the [RowLimit](rowlimit-element-list.md) element. 
  
```XML
<PagedRecurrenceRowset>
   <HTML><![CDATA[ <TABLE width="100%" border=0>
      <TR><TD  nowrap Class="ms-vb"> ]]></HTML>
   <Switch>
      <Expr>
         <GetVar Name="PrevPageData" />
      </Expr>
      <Case Value="" />
      <Default>
         <HTML><![CDATA[&amp;nbsp;<A id=onetidPrev HREF=
                "javascript:" OnClick='javascript:SubmitFormPost
                   (" ]]></HTML>
         <ScriptQuote NotAddingQuote="TRUE">
            <PageUrl />
            <HTML>?</HTML>
            <GetVar Name="PrevPageData" />
         </ScriptQuote>
         <HTML><![CDATA[ ");javascript:return false;'>
            <img src="/_layouts/images/prev.gif" border=0 alt=" ]]>
               <![CDATA[ Previous ]]>
               <![CDATA[ "></A><A HREF="javascript:" 
                  OnClick='javascript:SubmitFormPost("]]></HTML>
         <ScriptQuote NotAddingQuote="TRUE">
            <PageUrl />
            <HTML>?</HTML>
            <GetVar Name="PrevPageData" />
         </ScriptQuote>
         <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
         <HTML>Previous</HTML>
         <HTML><![CDATA[ </A> ]]></HTML>
      </Default>
   </Switch>
   <HTML><![CDATA[ </TD><TD align=right nowrap 
      Class="ms-vb"> ]]></HTML>
   <Switch>
      <Expr>
         <GetVar Name="NextPageData" />
      </Expr>
      <Case Value="" />
      <Default>
         <HTML><![CDATA[<A HREF="javascript:" 
            OnClick='javascript:SubmitFormPost(" ]]></HTML>
         <ScriptQuote NotAddingQuote="TRUE">
            <PageUrl />
            <HTML>?</HTML>
            <GetVar Name="NextPageData" />
         </ScriptQuote>
         <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
         <HTML>Next</HTML>
         <HTML><![CDATA[ </A><A id=onetidNext HREF="javascript:" 
            OnClick='javascript:SubmitFormPost("]]></HTML>
         <ScriptQuote NotAddingQuote="TRUE">
            <PageUrl />
            <HTML>?</HTML>
            <GetVar Name="NextPageData" />
         </ScriptQuote>
         <HTML><![CDATA[ ");javascript:return false;'>
               <img src="/_layouts/images/next.gif" border=0 alt=" ]]>
            <![CDATA[ Next ]]>
            <![CDATA[ "></A>&amp;nbsp; ]]></HTML>
      </Default>
   </Switch>
   <HTML><![CDATA[ </TD></TR></TABLE> ]]></HTML>
</PagedRecurrenceRowset>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)  
- [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)

