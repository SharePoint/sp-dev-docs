---
title: "Project Element (Site)"
ms.

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
ms.assetid: 2ee96a89-03e9-4283-8a29-05c1e5b4788a
description: "Last modified: March 09, 2015"
---

# Project Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Serves as the top-level element in an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file that contains a site definition configuration or Web template configuration for a new Web site. 
  
```
<Project
  AlternateCSS = "Text"
  AlternateHeader = "Text"  AlternateUrl = "Text"
  CustomJSUrl = "Text"
  DisableWebDesignFeatures = "Text"
  ListDir = "Text"
  Revision = "Integer"
  SiteLogoUrl = "Text"  SiteLogoDescription = "Text"
  Title = "Text"  UIVersion = "Integer">
</Project>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AlternateCSS** <br/> |Optional **Text**. Used to specify the name of an alternate cascading style sheets (CSS) file located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS\ _lcid_\STYLES directory (where  _lcid_ is the ID of a language/culture; for example, 1033 for English) that defines styles to use in the configuration.  <br/> |
|**AlternateHeader** <br/> |Optional **Text**. Used to specify the name of an ASPX page located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS directory that defines an alternate header for the top area in site pages. This attribute provides a means to replace the header region of a page with the output of an ASPX page that defines a different header. For example, add  `AlternateHeader="myHeader.aspx"` to the **Project** element to specify  `myHeader.aspx` as the name of the file that provides an alternate header.  <br/> |
|**AlternateUrl** <br/> |Optional **Text**.  <br/> |
|**CustomJSUrl** <br/> |Optional **Text**. Specifies a custom JavaScript file located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS directory that contains script to execute within a site created from the site definition.  <br/> |
|**DisableWebDesignFeatures** <br/> | Optional **Text**. Blocks specific editing features that are used in SharePoint Designer. Possible values include the following, which can be delimited using semicolons:  <br/> **wdfbackup** Disable Web site backup.  <br/> **wdfrestore** Disable Web site restore.  <br/> **wdfpackageimport** Disable Web site package import.  <br/> **wdfpackageexport** Disable Web site package export.  <br/> **wdfthemeweb** Disable theme support for the Web site.  <br/> **wdfthemepage** Disable theme support for individual pages.  <br/> **wdfnavigationbars** Disable support for navigation bars.  <br/> **wdfnavigationview** Disable the Navigation view for the Web site.  <br/> **wdfpublishview** Disable the Remote Web site view for the Web site.  <br/> **wdfpublishselectedfile** Do not allow the selected file to be published.  <br/> **wdfopensite** Disable access to the entire Web site.  <br/> **wdfnewsubsite** Do not allow the creation of a new subsite.  <br/> |
|**ListDir** <br/> |Required **Text**. Specifies the directory in which to implement new lists.  <br/> |
|**Revision** <br/> |Optional **Integer**. Specifies the build number of the site definition.  <br/> |
|**SiteLogoUrl** <br/> |Optional **Text**. Specifies a server-relative URL for a custom image to use for the site logo. For example,  `/_layouts//images/MyCustomLogo.gif`.  <br/> |
|**SiteLogoDescription** <br/> |Optional **Text**. Provides a description of the site logo.  <br/> |
|**Title** <br/> |Required **Text**. Specifies a default name for Web sites that are created from the site definition.  <br/> |
|**UIVersion** <br/> |Optional **Integer**. Specifies the version of the SharePoint Foundation UI that is being used by the sites based on the site definition.  <br/> |
   
### Child elements

||
|:-----|
|[BaseTypes](basetypes-element-site.md), [Components](components-element-site.md), [Configurations](configurations-element-site.md), [DocumentTemplates](documenttemplates-element-site.md), [ListTemplates](listtemplates-element-site.md), [Modules](modules-element-site.md), [NavBars](navbars-element-site.md), [ServerEmailFooter](serveremailfooter-element-site.md)|
   
### Parent elements

||
|:-----|
|None |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example shows the opening line of the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file for the standard SharePoint Foundation site definition (**STS**).
  
```XML
<Project Title="$Resources:onet_TeamWebSite;" Revision="2" ListDir="$Resources:core,lists_Folder;" xmlns:ows="Microsoft SharePoint">
```


