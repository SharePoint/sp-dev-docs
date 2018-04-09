---
title: "Module Element (Site)"
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
ms.assetid: cee7eacc-0142-4b33-a363-3ef0873799dc
description: "Last modified: March 09, 2015"
---

# Module Element (Site)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies files and "all user" Web Parts with which to provision a Web site.
  
```
<Module>
  HyperlinkBaseUrl = "Text"
  IncludeFolders = "Text"
  List = "Integer"
  Name = "Text"
  Path = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  SetupPath = "Text"
  Url = "Text"
</Module>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**HyperlinkBaseUrl** <br/> |Optional **Text**.  <br/> |
|**IncludeFolders** <br/> |Optional **Text**.  <br/> |
|**List** <br/> |Optional **Integer**. Specifies the type of list, which is defined within [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx).  <br/> |
|**Name** <br/> | Required **Text**. Contains the name of the file set. Can only contain the following characters:  <br/>  alphanumeric  <br/>  hyphen ( **-**)  <br/>  underscore ( **_**)  <br/>  period ( **.**)  <br/>  space ( )  <br/> |
|**Path** <br/> | Optional **Text**. Specifies the physical path to the file set relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\SiteTemplates\ _Site_Definition_. Can only contain the following characters:  <br/>  alphanumeric  <br/>  hyphen ( **-**)  <br/>  underscore ( **_**)  <br/>  period ( **.**)  <br/>  space ( )  <br/> |
|**RootWebOnly** <br/> |Optional **Boolean**. **TRUE** if the files specified in the module are installed only in the top-level Web site of the site collection.  <br/> |
|**SetupPath** <br/> | Optional **Text**. Specifies the physical path to a folder in the SharePoint Foundation setup directory %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE) that contains a file to include in the module. Can only contain the following characters:  <br/>  alphanumeric  <br/>  hyphen ( **-**)  <br/>  underscore ( **_**)  <br/>  period ( **.**)  <br/>  space ( )  <br/> |
|**Url** <br/> | Optional **Text**. Specifies the virtual path of the folder in which to place the files when a site is instantiated. If **Path** is not specified, the value of **Url** is used for the physical path. Use the **Url** attribute to provision a folder through the site definition.  <br/>  The **Url** attribute cannot contain the following characters:  <br/>  \"  <br/>  #  <br/>  %  <br/>  &amp;  <br/>  \*  <br/>  :  <br/>  \<  <br/>  \>  <br/>  ?  <br/>  \\  <br/>  {  <br/>  }  <br/>  |  <br/>  ~  <br/>  \x7f  <br/> |
   
## Child Elements

||
|:-----|
|[File](file-element.md)|
   
## Parent Elements

||
|:-----|
|[Modules](modules-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

A detailed **Module** element appears in a **Modules** element directly under the **Project** element of an  `Onet.xml` file. Each such module is referenced by at least one other **Module** element that is in a **Configuration** element of the same file. 
  
The **Module** element specifies a file or collection of files and a location where the files are installed during site creation. If the file is a Web Part Page, the module definition can specify which Web Parts should be included on the page. 
  
## Example

The following example from [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) defines the views and files to include within a module. 
  
```XML
<Module Name="Default" Url="" Path="">
  <File Url="default.aspx" NavBarHome="True">
    <View List="$Resources:core,lists_Folder;/$Resources:core,announce_Folder;" BaseViewID="0" WebPartZoneID="Left" />
    <View List="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;" BaseViewID="0" RecurrenceRowset="TRUE" WebPartZoneID="Left" WebPartOrder="2" />
    <AllUsersWebPart WebPartZoneID="Right" WebPartOrder="1"><![CDATA[
      <WebPart xmlns="http://schemas.microsoft.com/WebPart/v2" xmlns:iwp="http://schemas.microsoft.com/WebPart/v2/Image">
        <Assembly>Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>
        <TypeName>Microsoft.SharePoint.WebPartPages.ImageWebPart
        </TypeName>
        <FrameType>None</FrameType>
        <Title>$Resources:wp_SiteImage;</Title>
                        <iwp:ImageLink>/_layouts/images/homepage.gif</iwp:ImageLink>
      </WebPart>
    ]]></AllUsersWebPart>
    <View List="$Resources:core,lists_Folder;/$Resources:core,links_Folder;" BaseViewID="0" WebPartZoneID="Right" WebPartOrder="2" />
    <NavBarPage Name="$Resources:core,nav_Home;" ID="1002" Position="Start" />
    <NavBarPage Name="$Resources:core,nav_Home;" ID="0" Position="Start" />
  </File>
</Module>
```

## See also

#### Other resources

[How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6%28Office.15%29.aspx)

