---
title: "NavBars Element (Site)"
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
ms.assetid: e3e5a204-99e9-47aa-ba25-74f1a7bf5672
description: "Last modified: March 09, 2015"
---

# NavBars Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the collection of links that appear in the top and left navigation areas of a home page.
  
```
<NavBars>
</NavBars>
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
|[NavBar](navbar-element-site.md)|
   
### Parent elements

||
|:-----|
|[Project](project-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example from the file [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) defines the default navigation areas for the home page. 
  
```XML
<NavBars>
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
      <NavBarLink Name="Help" Url="javascript:HelpWindowKey
         ("helphome")" />
   </NavBar>
   <NavBar Name="Documents" Prefix="<table border=0 cellpadding=4 
         cellspacing=0>" 
      Body="<tr><td><table border=0 cellpadding=0 
         cellspacing=0><tr><td>
      <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
         border=0>&amp;nbsp;</td><td valign=top>
      <a ID=onetleftnavbar#LABEL_ID# 
         href='#URL#'>#LABEL#</td></tr></table></td></tr>" 
      Suffix="</table>" ID="1004" />
   <NavBar Name="Pictures" Prefix="<table border=0 cellpadding=4 
         cellspacing=0>" 
      Body="<tr><td><table border=0 cellpadding=0 
         cellspacing=0><tr><td>
      <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
         border=0>&amp;nbsp;</td>
      <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
         href='#URL#'>#LABEL#</td></tr></table>
      </td></tr>" Suffix="</table>" ID="1005" />
   <NavBar Name="Lists" Prefix="<table border=0 cellpadding=4 
         cellspacing=0>" 
      Body="<tr><td><table border=0 cellpadding=0 
         cellspacing=0><tr><td>
      <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
         border=0>&amp;nbsp;</td>
      <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
         href='#URL#'>#LABEL#</td></tr></table>
      </td></tr>" Suffix="</table>" ID="1003" />
   <NavBar Name="Discussions" Prefix="<table border=0 cellpadding=4 
         cellspacing=0>" 
      Body="<tr><td><table border=0 cellpadding=0 
         cellspacing=0><tr><td>
      <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
         border=0>&amp;nbsp;</td>
      <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
         href='#URL#'>#LABEL#</td></tr></table>
      </td></tr>" Suffix="</table>" ID="1006" />
   <NavBar Name="Surveys" Prefix="<table border=0 cellpadding=4 
         cellspacing=0>" 
      Body="<tr><td><table border=0 cellpadding=0 
         cellspacing=0><tr><td>
      <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
         border=0>&amp;nbsp;</td>
      <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
         href='#URL#'>#LABEL#</td></tr></table>
      </td></tr>" Suffix="</table>" ID="1007" />
</NavBars>
```


