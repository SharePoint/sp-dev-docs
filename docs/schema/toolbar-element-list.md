---
title: "Toolbar Element (List)"


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
ms.assetid: 75aabf27-88ad-4c87-be5f-0592fce90d56
description: "Last modified: March 09, 2015"
---

# Toolbar Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the toolbar of a list view, which is the section of a view that is rendered above the view header.
  
```
<Toolbar
  Position = "After"
  Type = "Standard" | "FreeForm">
</Toolbar>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Position** <br/> |Optional **Text**. If **Position = "After"** is specified, the toolbar will appear below the view body. If not specified, the toolbar will appear above the view body.  <br/> |
|**Type** <br/> |Required **Text**. Specifies the kind of toolbar; this can be set to either **Standard** or **FreeForm**.  <br/> |
   
### Child elements

||
|:-----|
|Numerous |
   
### Parent elements

||
|:-----|
|[MetaData (List)](metadata-element-list.md), [MetaData (Site)](metadata-element-site.md), [View](view-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following excerpt from the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for custom lists defines the **New** command of the toolbar, displaying the option to create items only to users with permission to add list items. 
  
```XML
<Toolbar Position="After" Type="Freeform">
  <IfHasRights>
    <RightsChoices>
      <RightsGroup PermAddListItems="required" />
    </RightsChoices>
    <Then>
      <HTML><![CDATA[ <table width=100% cellpadding=0 cellspacing=0 border=0 > <tr> <td colspan="2" class="ms-partline"><IMG SRC="/_layouts/images/blank.gif" width=1 height=1 alt=""></td> </tr> <tr> <td class="ms-addnew" style="padding-bottom: 3px"> <img src="/_layouts/images/rect.gif" alt="">&amp;nbsp;<a class="ms-addnew" ID="idAddNewItem" href="]]></HTML>
      <URL Cmd="New" /><HTML><![CDATA[" ONCLICK="javascript:NewItem(']]></HTML>
      <URL Cmd="New" /><HTML><![CDATA[', true);javascript:return false;" target="_self">]]></HTML><HTML><!-- _locID_text="onetid6" _locComment="{StringCategory=HTX}" -->$Resources:core,addnewitem;</HTML><HTML><![CDATA[</a> </td> </tr> <tr><td><IMG SRC="/_layouts/images/blank.gif" width=1 height=5 alt=""></td></tr> </table>]]></HTML>
    </Then>
  </IfHasRights>
</Toolbar>
```

## See also



[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

