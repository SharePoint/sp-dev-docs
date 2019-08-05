---
title: "NavBarPage element (Site - Module)"
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
ms.assetid: 45eaaecd-8576-4e04-abf7-8dd4d03fbe3f
description: Provides information about the file specified as the home page in a module so that other pages can be linked to the page.
---

# NavBarPage element (Site - Module)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Provides information about the file specified as the home page in a module so that other pages can be linked to the page.
  
```XML
<NavBarPage
  ID = "Integer"
  Name = "Text"
  Position = "Text">
</NavBarPage>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Integer**. Specifies the ID for the page.  <br/> |
|**Name** <br/> |Required **Text**. Specifies the text that appears in the navigation area of other pages that link to the page.  <br/> |
|**Position** <br/> | Optional **Text**. Specifies the position of the UI element represented by the **NavBarPage** element with respect to the top navigational area on a page.<br/><br/>Possible values include the following:  <br/> **Start** — add the node at the start (left/top in English) of the top navigational area.  <br/> **End** — add the node to the end (right/bottom in English) of the top navigational area. Default.  <br/> **Number between 1001 and 2000** — add the node after (right/below in English) another **NavBarPage** element whose ID matches the specified value.  <br/> |
   
### Child elements

None 
   
### Parent elements

- [File](file-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
## Example

The following example uses the **NavBarPage** element to specify information about the home page in a module. 
  
```XML
<Module Name="Default" Url="" Path="">
  <File Url="default.aspx" NavBarHome="True">
    <View List="$Resources:core,lists_Folder;/$Resources:core,announce_Folder;" BaseViewID="0" WebPartZoneID="Left" />
    <View List="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;" BaseViewID="0" RecurrenceRowset="TRUE" WebPartZoneID="Left" WebPartOrder="2" />
    <AllUsersWebPart WebPartZoneID="Right" WebPartOrder="1"><![CDATA[
      <WebPart xmlns="http://schemas.microsoft.com/WebPart/v2" xmlns:iwp="http://schemas.microsoft.com/WebPart/v2/Image">
        <Assembly>Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>
         <TypeName>Microsoft.SharePoint.WebPartPages.ImageWebPart</TypeName>
         <FrameType>None</FrameType>
         <Title>$Resources:wp_SiteImage;</Title>
         <iwp:ImageLink>/_layouts/images/homepage.gif</iwp:ImageLink>
       </WebPart>]]>
    </AllUsersWebPart>
    <View List="$Resources:core,lists_Folder;/$Resources:core,links_Folder;" BaseViewID="0" WebPartZoneID="Right" WebPartOrder="2" />
    <NavBarPage Name="$Resources:core,nav_Home;" ID="1002" Position="Start" />
    <NavBarPage Name="$Resources:core,nav_Home;" ID="0" Position="Start" />
  </File>
</Module>
```

## See also

- [Module element (Site)](module-element-site.md)

