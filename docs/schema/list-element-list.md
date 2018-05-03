---
title: "List element (List)"
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
ms.assetid: b2b26fee-eb45-48ac-99f1-65f725da293f
description: Top-level element that contains the definition of a list.
---

# List element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Top-level element that contains the definition of a list.
  
```XML
<List
  BaseType = "Integer" | "Text"
  Default = "TRUE" | "FALSE"
  DefaultItemOpen = "Integer"
  Description = "Text"
  Direction = "Text"
  DisableAttachments = "TRUE" | "FALSE"
  DraftVersionVisibility = "Integer"
  EnableContentTypes = "TRUE" | "FALSE"  EnableMinorVersions = "TRUE" | "FALSE"  EnableThumbnails = "TRUE" | "FALSE"
  EventSinkAssembly = "Text"
  EventSinkClass = "Text"
  EventSinkData = "Text"
  FolderCreation = "TRUE" | "FALSE"
  Id = "GUID"
  ModeratedList = "TRUE" | "FALSE"
  ModerationType = "TRUE" | "FALSE"
  Name = "Text"
  OrderedList = "TRUE" | "FALSE"
  PrivateList = "TRUE" | "FALSE"
  QuickLaunchUrl = "URL"
  RootWebOnly = "TRUE" | "FALSE"
  ThumbnailSize = "Integer"
  Title = "Text"
  Type = "Integer"
  Url = "URL"
  URLEncode = "TRUE" | "FALSE"
  VersioningEnabled = "TRUE" | "FALSE" 
  WebImageHeight = "Integer"
  WebImageWidth = "Integer">
</List>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**BaseType** <br/> |Optional **Text**. The **BaseType** attribute can be set to **Integer**, which stores values as integers, or to **Text** (default), which stores values as text. Note that it is not possible to create integer base-type choice fields.  <br/> |
|**Default** <br/> |Optional **Boolean**. **TRUE** to specify that the list referenced in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file be created whenever a site is created. Otherwise, the list will not be created during site creation but will be available for later instantiation.  <br/> |
|**DefaultItemOpen** <br/> |Optional **Boolean**. **1** to specify that applications which generate server transformations of items in the list open the items in a browser rather than in a separate client-side application; otherwise, **0**.  <br/> |
|**Description** <br/> |Optional **Text**. Provides a description for the list. This attribute must be specified within a configuration in an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file when adding a custom list definition to a site definition. The value of this attribute overrides the value contained with the [DefaultDescription](defaultdescription-element-list.md) element of a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file.  <br/> |
|**Direction** <br/> |Required **Text**. Specifies the direction of the reading order for the list. Possible values include **RTL** (right-to-left), **LTR** (left-to-right), or **none**.  <br/> |
|**DisableAttachments** <br/> |Optional **Boolean**. **TRUE** to disable attachments in the list.  <br/> |
|**DraftVersionVisibility** <br/> | Optional **Integer**. Specifies the rights that are required to see drafts.<br/><br/>The following values are possible:  <br/>- **1** Edit rights  <br/>- **2** Approval rights  <br/>- **All other values** Read rights  <br/> |
|**EnableContentTypes** <br/> |Optional **Boolean**. **TRUE** to enable management of content types in lists created through the list definition.  <br/> |
|**EnableMinorVersions** <br/> |Optional **Boolean**.  <br/> |
|**EnableThumbnails** <br/> |Optional **Boolean**. **TRUE** to specify that document parsers in this list generate thumbnail files that correspond to documents that are saved to this list. This attribute only applies to document libraries.  <br/> |
|**EventSinkAssembly** <br/> |Optional **Text**. This option is specified only for schemas upgraded from Windows SharePoint Services 2.0. Specifies the strong name of a file in the Global Assembly Cache (GAC) that provides an event handler for document library events.<br/><br/>For example, `Microsoft.SharePoint, Version=11.0.0.0, Culture=Neutral, PublicKeyToken=71e9bce111e9429c`<br/><br/>This attribute has been deprecated in SharePoint Foundation.  <br/> |
|**EventSinkClass** <br/> |Optional **Text**. Specifies the fully qualified, case-sensitive name of a class that defines an event handler for document library events in the form  _Namespace_Name.Class_Name_. This attribute has been deprecated in SharePoint Foundation.  <br/> |
|**EventSinkData** <br/> |Optional **Text**. Contains an arbitrary string for use by an event handler for document library events. This attribute has been deprecated in SharePoint Foundation.  <br/> |
|**FolderCreation** <br/> |Optional **Boolean**. **TRUE** to display the **New Folder** command on the **New** menu.  <br/> |
|**Id** <br/> |Optional **GUID**. Specifies the GUID of the list.  <br/> |
|**ModeratedList** <br/> |Optional **Boolean**. **TRUE** to require content approval for submitted items.  <br/> |
|**ModerationType** <br/> |Optional **Boolean**. **TRUE** to specify that the list has moderation enabled, requiring an approval process when content is created or modified.  <br/> |
|**Name** <br/> |Required **Text**. The internal name of a list.  <br/> |
|**OrderedList** <br/> |Optional **Boolean**. **TRUE** to specify that the option to allow users to reorder items in the list is available on the Edit View page for the list.  <br/> |
|**PrivateList** <br/> |Optional **Boolean**. **TRUE** to specify that the list is private.  <br/> |
|**QuickLaunchUrl** <br/> |Optional **Text**. Specifies the URL of the view page to open for the list through Quick Launch navigation.  <br/> |
|**RootWebOnly** <br/> |Optional **Boolean**. **TRUE** to specify that the list created from the definition exists only in the root website of a site collection.  <br/> |
|**ThumbnailSize** <br/> |Optional **Integer**. Specifies the width of thumbnails to display in picture libraries.  <br/> |
|**Title** <br/> |Required **Text**. The generic display name of the list.  <br/> |
|**Type** <br/> | Optional **Integer**. Specifies the list template type of the list.<br/><br/>The following values are the default list template types.<br/><br/>**100** Generic list  <br/> **101** Document library  <br/> **102** Survey  <br/> **103** Links list  <br/> **104** Announcements list  <br/> **105** Contacts list  <br/> **106** Events list  <br/> **107** Tasks list  <br/> **108** Discussion board  <br/> **109** Picture library  <br/> **110** Data sources  <br/> **111** Site template gallery  <br/> **112** User Information list  <br/> **113** Web Part Gallery  <br/> **114** List template gallery  <br/> **115** XML Form library  <br/> **116** Master pages gallery  <br/> **117** No-Code Workflows  <br/> **118** Custom Workflow Process  <br/> **119** Wiki Page library  <br/> **120** Custom grid for a list  <br/> **130** Data Connection library  <br/> **140** Workflow History  <br/> **150** Gantt Tasks list  <br/> **200** Meeting Series list  <br/> **201** Meeting Agenda list  <br/> **202** Meeting Attendees list  <br/> **204** Meeting Decisions list  <br/> **207** Meeting Objectives list  <br/> **210** Meeting text box  <br/> **211** Meeting Things To Bring list  <br/> **212** Meeting Workspace Pages list  <br/> **301** Blog Posts list  <br/> **302** Blog Comments list  <br/> **303** Blog Categories list  <br/> **1100** Issue tracking  <br/> **1200** Administrator tasks list<br/><br/>This attribute corresponds to the **Type** attribute of the [ListTemplate](listtemplate-element-site.md) element.  <br/> |
|**Url** <br/> |Optional **Text**. Specifies the path to the root of the directory that contains the ASPX files to which the list definition applies, relative to the root URL of the website.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.  <br/> |
|**VersioningEnabled** <br/> |Optional **Boolean**. **TRUE** to specify within a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file that versioning be enabled by default for document libraries created through the list definition. Setting this attribute has no effect on existing document libraries. If **TRUE**, versioning can still be disabled for a document library on the New Document Library page when the library is being created.  <br/> |
|**WebImageHeight** <br/> |Optional **Integer**. Specifies the height, in pixels, of an image in a picture library.  <br/> |
|**WebImageWidth** <br/> |Optional **Integer**. Specifies the width, in pixels, of an image in a picture library.  <br/> |
   
### Child elements

- [MetaData](metadata-element-list.md)
   
### Parent elements

None
   
### Occurrences

- Minimum: 0 
- Maximum: 1 
   
### Remarks

When used as the root element in the schema file for a list, the **List** element must contain the Microsoft SharePoint Foundation **ows:** namespace declaration. The following lines show the opening of a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for document libraries: 
  
```XML
<List 
  xmlns:ows="Microsoft SharePoint" 
  Name="Documents" 
  Title="$Resources:shareddocuments_Title;" 
  Direction="$Resources:Direction;" 
  Url="Shared Documents" 
  BaseType="1">
```

In a list schema, the [MetaData](http://msdn.microsoft.com/library/649bbdbd-7de2-4921-bbce-13bdd7509205%28Office.15%29.aspx) element contains the different parts of the list definition. Use an empty **List** element (**\<List /\>**) to return the title of the current list.
  
In a site definition ([Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx)), the **List** element does not contain a [MetaData](http://msdn.microsoft.com/library/649bbdbd-7de2-4921-bbce-13bdd7509205%28Office.15%29.aspx) section, but it can contain a [Data](data-element-site.md) section through which to specify default column values for the given list type. 
  
<br/>
