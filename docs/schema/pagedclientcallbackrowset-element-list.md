---
title: "PagedClientCallbackRowset Element (List)"
ms.author: NormSohl
author: NormSohl
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
ms.assetid: 4013f6b8-ec7e-4072-a74e-e9c1a38b716e
description: "Last modified: March 09, 2015"
---

# PagedClientCallbackRowset Element (List)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines user interface elements to display for accessing subsequent pages when the number of rows returned in a view surpasses the limit set by the [RowLimit](rowlimit-element-list.md) element. 
  
> [!NOTE]
> Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx). 
  
```
<PagedClientCallbackRowset>
</PagedClientCallbackRowset>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|Numerous |
   
## Parent Elements

||
|:-----|
|[View](view-element-list.md), [ViewStyle](viewstyle-element-list.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example uses the **PagedClientCallbackRowset** element to define a link for viewing more list data on the subsequent page. 
  
```XML
<PagedClientCallbackRowset>
  <HTML><![CDATA[<TR><TD></TD><TD align=left Class="ms-vb">]]></HTML>
  <Switch>
    <Expr>
      <GetVar Name="NextPageData" />
    </Expr>
    <Case Value="" />
    <Default>
      <HTML><![CDATA[&amp;nbsp;<A HREF="]]></HTML>
      <PageUrl HTMLEncode="TRUE" />
      <HTML>?</HTML>
      <GetVar Name="NextPageData" HTMLEncode="TRUE" />
      <HTML><![CDATA[" OnClick='javascript:SubmitFormPost("]]></HTML>
      <ScriptQuote NotAddingQuote="TRUE">
        <PageUrl />
        <HTML>?</HTML>
        <GetVar Name="NextPageData" />
      </ScriptQuote>
      <HTML><![CDATA[");javascript:return false;'>]]></HTML>
      <HTML><![CDATA[$Resources:core,groupMore;]]></HTML>
      <HTML><![CDATA[</A>&amp;nbsp;]]></HTML>
    </Default>
  </Switch>
  <HTML><![CDATA[</TD></TR>]]></HTML>
</PagedClientCallbackRowset>
```

## See also

#### Other resources

[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)
  
[XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)

