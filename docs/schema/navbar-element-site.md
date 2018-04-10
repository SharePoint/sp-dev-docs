---
title: "NavBar Element (Site)"


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
ms.assetid: 0f997d7b-d1c1-4405-9d83-26e20cd37767
description: "Last modified: March 09, 2015"
---

# NavBar Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the definition of the navigation area for either the top links of all pages within a site or for the Quick Launch area of the home page.
  
```
<NavBar
  Body = "Text"
  ID = "Integer"
  Name = "Text"
  Prefix = "Text"
  Separator = "Text"
  Suffix = "Text"
  Url = "Text">
</NavBar>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Body** <br/> |Required **Text**. Contains the body of the definition for the navigation bar.  <br/> |
|**ID** <br/> |Required **Integer**. Specifies the ID of the navigation bar.  <br/> |
|**Name** <br/> |Required **Text**. Contains the name of the navigation bar.  <br/> |
|**Prefix** <br/> |Optional **Text**. Contains the opening tag for the table that contains the navigation bar.  <br/> |
|**Separator** <br/> |Optional **Text**. Specifies the separator to use between items in the navigation bar.  <br/> |
|**Suffix** <br/> |Optional **Text**. Contains the closing tag for the table that contains the navigation bar.  <br/> |
|**Url** <br/> |Optional **Text**.  <br/> |
   
### Child elements

||
|:-----|
|[NavBarLink](navbarlink-element-site.md), [NavBarPage](navbarpage-element-sitemodule.md)|
   
### Parent elements

||
|:-----|
|[NavBars](navbars-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example defines the top navigation area of a home page.
  
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
   <NavBarLink Name="Help" 
      Url="javascript:HelpWindowKey("helphome")" />
</NavBar>
```


