---
title: "ViewStyle Element (List)"


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
ms.assetid: 6a970855-360e-4e20-b793-34078b95f005
description: "Last modified: March 09, 2015"
---

# ViewStyle Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the definition of a view style for a list.
  
```
<ViewStyle
  BaseType = "Integer" | "Text"
  Description = "Text"
  DisplayName = "Text"
  ID = "Counter"
  Preview = "Text"
  Type = "Integer">
</ViewStyle>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**BaseType** <br/> |Optional. Specifies the base type of the list. The **BaseType** attribute can be set to **Integer**, which stores values as integers, or to **Text** (default), which stores values as text.  <br/> |
|**Description** <br/> |Optional **Text**. Contains a description for the view style.  <br/> |
|**DisplayName** <br/> |Required **Text**. Specifies the display name of the view style.  <br/> |
|**ID** <br/> |Required **Counter**. Specifies the ID that uniquely identifies the view style.  <br/> |
|**Preview** <br/> |Optional **Text**. Specifies the site-relative path to a preview image for the view style. For example,  `_layouts/images/prvpicl.gif`.  <br/> |
|**Type** <br/> |Optional **Integer**. Specifies the list definition type.  <br/> |
   
### Child elements

|**Element**|
|:-----|
|[GroupByFooter](groupbyfooter-element-list.md), [GroupByHeader](groupbyheader-element-list.md), [PagedClientCallbackRowset](pagedclientcallbackrowset-element-list.md), [PagedRecurrenceRowset](pagedrecurrencerowset-element-list.md), [PagedRowset](pagedrowset-element-list.md), [Script](script-element.md)[ViewBidiHeader](viewbidiheader-element-list.md), [ViewBody](viewbody-element-list.md), [ViewEmpty](viewempty-element-list.md), [ViewFields](viewfields-element-list.md), [ViewFooter](viewfooter-element-list.md), [ViewHeader](viewheader-element-list.md)|
   
### Parent elements

||
|:-----|
|[View Element (List)](view-element-list.md), [ViewStyles](viewstyles-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1 (Unbounded within [ViewStyles](viewstyles-element.md))  <br/> |
   
## Example

The following example outlines the sections contained within the Boxed view style of a ViewStyles.xml file.
  
```XML
<ViewStyle ID="13" DisplayName="Boxed" BaseType="0">
   <ViewFields />
   <GroupByHeader>
   ...
   </GroupByHeader>
   <GroupByFooter>
   ...
   </GroupByFooter>
   <ViewHeader ExpandXML="TRUE">
   ...
   </ViewHeader>
   <ViewBidiHeader ExpandXML="TRUE">
   ...
   </ViewBidiHeader>
   <ViewBody ExpandXML="TRUE">
   ...
   </ViewBody>
   <ViewFooter ExpandXML="TRUE">
   ...
   </ViewFooter>
   <PagedRowset>
   ...
   </PagedRowset>
   <PagedRecurrenceRowset>
   ...
   </PagedRecurrenceRowset>
   <RowLimit Paged="TRUE">100</RowLimit>
   <ViewEmpty>
   ...
   </ViewEmpty>
   ...
</ViewStyle>
```

## See also



[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

