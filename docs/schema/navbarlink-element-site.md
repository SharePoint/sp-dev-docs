---
title: "NavBarLink Element (Site)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 4ff60a7b-7dc9-4129-add5-0a4e50a47175
description: "Last modified: March 09, 2015"
---

# NavBarLink Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a hyperlink used in the top navigation area of a home page.
  
```
<NavBarLink
  Name = "Text"
  Url = "Text">
</NavBarLink>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Required **Text**. Contains the text displayed for the hyperlink.  <br/> |
|**Url** <br/> |Required **Text**. Contains the URL for the hyperlink.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[NavBar](navbar-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example specifies the links for the top navigation area of a home page.
  
```XML
<NavBar Name="SharePoint Top Navbar" Separator="&amp;nbsp;&amp;nbsp;&amp;nbsp;" 
   Body="<a ID='onettopnavbar#LABEL_ID#' href='#URL#' 
      accesskey='J'>#LABEL#</a>" ID="1002">
   <NavBarLink Name="Documents and Lists" 
      Url="_layouts/[%=System.Threading.Thread.CurrentThread.
         CurrentUICulture.LCID%]/viewlsts.aspx" />
   <NavBarLink Name="Create" 
      Url="_layouts/[%=System.Threading.Thread.CurrentThread.
         CurrentUICulture.LCID%]/create.aspx" />
   <NavBarLink Name="Site Settings" 
      Url="_layouts/[%=System.Threading.Thread.CurrentThread.
         CurrentUICulture.LCID%]/settings.aspx" />
   <NavBarLink Name="Help" Url="javascript:HelpWindowKey("helphome")" />
</NavBar>
```


