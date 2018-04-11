---
title: "List element (Site)"
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
ms.assetid: 8aeb55e1-2661-400d-a2d8-036c08fe9f30
description: Specifies a list instance to include in sites created through a site definition configuration or Web template configuration.
---

# List element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a list instance to include in sites created through a site definition configuration or Web template configuration.
  
```XML
<List
  CustomSchema = "Text"
  Description = "Text"
  EmailAlias = "Text"
  EnableContentTypes = "TRUE" | "FALSE"
  EnableMinorVersions = "TRUE" | "FALSE"
  FeatureId = "GUID"
  ForceCheckout = "TRUE" | "FALSE"  HyperlinkBaseUrl = Text
  QuickLaunchUrl = Text
  RootWebOnly = "TRUE" | "FALSE"
  Title = "Text"
  Type = Integer
  Url = "Text"
  VersioningEnabled = "TRUE" | "FALSE">
</List>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**CustomSchema** <br/> |Optional **Text**.  <br/> |
|**Description** <br/> |Optional **Text**. Provides a description for the list. This attribute must be specified within a configuration in an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file when you are adding a custom list definition to a site definition. The value of this attribute overrides the value contained with the [DefaultDescription](defaultdescription-element-list.md) element of a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file.  <br/> |
|**EmailAlias** <br/> |Optional **Text**. If e-mail notification is enabled, specifies the e-mail address to use to notify to the owner of an item when an assignment has changed or the item has been updated.  <br/> |
|**EnableContentTypes** <br/> |Optional **Boolean**. **TRUE** to enable management of content types in lists created through the list definition.  <br/> |
|**EnableMinorVersions** <br/> |Optional **Boolean**. **TRUE** to enable minor versions for items in the list.  <br/> |
|**FeatureId** <br/> |Optional **GUID**. Specifies the GUID of a Feature to associate with the list.  <br/> |
|**ForceCheckout** <br/> |Optional **Boolean**. **TRUE** to require that documents be checked out from the document library in order to be edited.  <br/> |
|**HyperlinkBaseUrl** <br/> |Optional **Text**.  <br/> |
|**QuickLaunchUrl** <br/> |Optional **Text**. Specifies the URL of the view page to open for the list through Quick Launch navigation.  <br/> |
|**RootWebOnly** <br/> |Optional **Boolean**. **TRUE** to specify that the list created from the definition exists only in the root website of a site collection.  <br/> |
|**Title** <br/> |Required **Text**. The generic display name of the list.  <br/> |
|**Type** <br/> | Optional **Integer**. Specifies the list template type of the list.<br/><br/>The following values are the default list template types.<br/><br/> **100** Generic list  <br/> **101** Document library  <br/> **102** Survey  <br/> **103** Links list  <br/> **104** Announcements list  <br/> **105** Contacts list  <br/> **106** Events list  <br/> **107** Tasks list  <br/> **108** Discussion board  <br/> **109** Picture library  <br/> **110** Data sources  <br/> **111** Site template gallery  <br/> **112** User Information list  <br/> **113** Web Part gallery  <br/> **114** List template gallery  <br/> **115** XML Form library  <br/> **116** Master pages gallery  <br/> **117** No-Code Workflows  <br/> **118** Custom Workflow Process  <br/> **119** Wiki Page library  <br/> **120** Custom grid for a list  <br/> **130** Data Connection library  <br/> **140** Workflow History  <br/> **150** Gantt Tasks list  <br/> **200** Meeting Series list  <br/> **201** Meeting Agenda list  <br/> **202** Meeting Attendees list  <br/> **204** Meeting Decisions list  <br/> **207** Meeting Objectives list  <br/> **210** Meeting text box  <br/> **211** Meeting Things To Bring list  <br/> **212** Meeting Workspace Pages list  <br/> **301** Blog Posts list  <br/> **302** Blog Comments list  <br/> **303** Blog Categories list  <br/> **1100** Issue tracking  <br/> **1200** Administrator tasks list  <br/><br/> This attribute corresponds to the **Type** attribute of the [ListTemplate](listtemplate-element-site.md) element.  <br/> |
|**Url** <br/> |Optional **Text**. Specifies the path to the root of the directory that contains the ASPX files to which the list definition applies, relative to the root URL of the website.  <br/> |
|**VersioningEnabled** <br/> |Optional **Boolean**. **TRUE** to specify within a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file that versioning is enabled by default for document libraries that are created through the list definition. Setting this attribute has no effect on existing document libraries. If **TRUE**, versioning can still be disabled for a document library on the New Document Library page when the library is being created.  <br/> |
   
### Child elements

- [Data](data-element-site.md)
   
### Parent elements

- [GlobalLists](globallists-element.md)
- [Lists](lists-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  

<br/> 
   

