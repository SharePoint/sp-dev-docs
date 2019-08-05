---
title: "ListTemplate element (Site)"
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
ms.assetid: 37a89367-4fed-46b9-afe9-386844f3e82c
description: Specifies a list definition that is available as an option for creating lists on the Create Page.
---

# ListTemplate element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a list definition that is available as an option for creating lists on the **Create Page**.
  
```XML
<ListTemplate
  AllowDeletion = "TRUE" | "FALSE"
  AllowEveryoneViewItems = "TRUE" | "FALSE"
  AlwaysIncludeContent = "TRUE" | "FALSE"
  BaseType = "0" | "1" |"3" | "4" | "5"
  CacheSchema = "TRUE" | "FALSE"
  Catalog = "TRUE" | "FALSE"
  Category = "Libraries" | "Communications" | "Tracking" | 
    "Custom Lists"
  Default = "TRUE" | "FALSE"
  Description = "Text"
  DisableAttachments = "TRUE" | "FALSE"
  DisallowContentTypes = "TRUE" | "FALSE"
  DisplayName = "Text"  DocumentAsEnclosure = "TRUE" | "FALSE"
  DocumentTemplate = "Integer"
  DontSaveInTemplate = "TRUE" | "FALSE"
  EditPage = "Text"
  EnableModeration = "TRUE" | "FALSE"  EnablePeopleSelector = "TRUE" | "FALSE"  EnableResourceSelector = "TRUE" | "FALSE"
  FeatureId = "Text"
  FolderCreation = "TRUE" | "FALSE"
  Hidden = "TRUE" | "FALSE"
  HiddenList = "TRUE" | "FALSE"
  Image = "URL"
  MultipleMtgDataList = "TRUE" | "FALSE"
  MustSaveRootFiles = "TRUE" | "FALSE"  MultipleTypes = "TRUE" | "FALSE"
  Name = "Text"
  NewPage = "Text"
  NoCrawl = "TRUE" | "FALSE"
  OnQuickLaunch = "TRUE" | "FALSE"
  Path = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  SecurityBits = "Text"
  Sequence = "Integer"
  SetupPath = "Text"
  SyncType = "Text"
  Type = "Integer"
  Unique = "TRUE" | "FALSE"
  UseRootFolderForNavigation = "TRUE" | "FALSE"
  VersioningEnabled = "TRUE" | "FALSE">
</ListTemplate>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AllowDeletion** <br/> |Optional **Boolean**. **TRUE** to specify that lists created through the list definition cannot be deleted; otherwise, **FALSE**.  <br/> |
|**AllowEveryoneViewItems** <br/> |Optional **Boolean**. **TRUE** to allow any user to view items in the library. The **AllowEveryoneViewItems** attribute is used, for example, in the Master Page gallery to give all users access to master pages.  <br/> |
|**AlwaysIncludeContent** <br/> |Optional **Boolean**. **TRUE** to specify that list content be included by default when lists created through the list definition are saved as list templates in the user interface; otherwise, **FALSE**.  <br/> |
|**BaseType** <br/> |Required **Integer**. Specifies the base type, or default schema, for lists created from the definition. In SharePoint Foundation, this can be 0, 1, 3, 4, or 5. It cannot be 2.  <br/> |
|**CacheSchema** <br/> |Optional **Boolean**. **TRUE** to enable schema caching of the list when provisioning a site. The **CacheSchema** attribute is used, for example, in the global [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file to enable caching of the user list for the current site collection.  <br/> |
|**Catalog** <br/> |Optional **Boolean**. **TRUE** to specify that the list definition is for a site gallery, a list gallery, or a web part gallery.  <br/> |
|**Category** <br/> | Optional **Text**. Specifies the category with which to associate lists created through the list definition.<br/><br/>Possible values include the following:  <br/> **Libraries** <br/> **Communications** <br/> **Tracking** <br/> **Custom Lists** <br/> |
|**Default** <br/> |Optional **Boolean**. **TRUE** to specify that new SharePoint sites will include this list.  <br/> |
|**Description** <br/> |Optional **Text**. Provides a description of the list definition.  <br/> |
|**DisableAttachments** <br/> |Optional **Boolean**. **TRUE** to specify that users can attach files to items in lists created through the list definition; otherwise, **FALSE**.  <br/> |
|**DisallowContentTypes** <br/> |Optional **Boolean**. **TRUE** to specify that content types can be managed on lists created through the list definition; otherwise, **FALSE**.  <br/> |
|**DisplayName** <br/> |Required **Text**. Specifies the display name of the list definition.  <br/> |
|**DocumentAsEnclosure** <br/> |Optional **Boolean**.  <br/> |
|**DocumentTemplate** <br/> |Optional **Integer**. Currently unused. This is only valid in a **ListTemplate** element whose **BaseType** is set to 1 (document libraries). For future compatibility, this should either be left blank or correspond to the **Type** attribute of a **DocumentTemplate** element in the **DocumentTemplates** enumeration. This attribute has been deprecated in SharePoint Foundation.  <br/> |
|**DontSaveInTemplate** <br/> |Optional **Boolean**. **TRUE** to exclude the content of the list when the list is saved as a custom list template or when the site to which the list belongs is saved as a custom site template through the user interface.  <br/> |
|**EditPage** <br/> |Optional **Text**. Specifies the name of a custom form to use as the page for editing items in lists created through the list definition.  <br/> |
|**EnableModeration** <br/> |Optional **Boolean**. **TRUE** to specify that content approval is enabled by default in lists created through the list definition; otherwise, **FALSE**.  <br/> |
|**EnablePeopleSelector** <br/> |Optional **Boolean**.  <br/> |
|**EnableResourceSelector** <br/> |Optional **Boolean**.  <br/> |
|**FeatureId** <br/> |Optional **Text**. Specifies the GUID that identifies the Feature with which the list definition is associated.  <br/> |
|**FolderCreation** <br/> |Optional **Boolean**. **TRUE** to enable folder creation within the list and to specify that the **New Folder** command appears on the **New** menu in list views; otherwise, **FALSE**.  <br/> |
|**Hidden** <br/> |Optional **Boolean**. **TRUE** to specify that the list definition is not available on the **Create Page** for creating lists.  <br/> |
|**HiddenList** <br/> |Optional **Boolean**. **TRUE** to specify that a list created from the list definition is hidden.  <br/> |
|**Image** <br/> |Optional **URL**. Specifies a URL to an icon used to represent a list.  <br/> |
|**MultipleMtgDataList** <br/> |Optional **Boolean**. If **MultipleMtgDataList="TRUE"** is specified, the list within a Meeting Workspace site contains data for multiple meeting instances within the site.  <br/> |
|**MultipleTypes** <br/> |Optional **Boolean**.  <br/> |
|**MustSaveRootFiles** <br/> |Optional **Boolean**. **TRUE** to save the pages contained within a special document library that is used internally for a Meeting Workspace site when the list template is saved without content. This attribute is not intended for public use.  <br/> |
|**Name** <br/> |Required **Text**. Specifies the internal name of the list definition. No spaces or special characters can be used. This name is also used to find the folder that contains the Schema.xml file that defines the schema in use.  <br/> |
|**NewPage** <br/> |Optional **Text**. Specifies the name of a custom form to use as the page for creating items in lists created through the list definition.  <br/> |
|**NoCrawl** <br/> |Optional **Boolean**. **TRUE** to specify that the list not be visible in search results; otherwise, **FALSE**.  <br/> |
|**OnQuickLaunch** <br/> |Optional **Boolean**. **TRUE** to display lists created from the list definition on the **Quick** **Launch** bar, if that bar has a Lists node.  <br/> |
|**Path** <br/> |Optional **Text**. Specifies the name of the site definition that contains the list definition, for example, **STS**. This path is assumed to be relative to the 12\TEMPLATE directory. The path can be directed at a features schema, for example, Features\Announcements. This attribute has been deprecated in SharePoint Foundation.  <br/> |
|**RootWebOnly** <br/> |Optional **Boolean**. **TRUE** to specify that the list created from the definition exists only in the root website of a site collection. This attribute has been deprecated in SharePoint Foundation.  <br/> |
|**SecurityBits** <br/> |Optional **Text**. Defines the item-level permissions in the list for users with sufficient permission to read or edit list items. The **SecurityBits** attribute contains a 2-digit string. The first digit in the string controls the read access, while the second digit in the string controls the edit access.<br/><br/>For read access, the following are valid digits:  <br/> **1** Users can read all items.  <br/> **2** Users can read only their own items.<br/><br/>For edit access, the following are valid digits:  <br/> **1** Users can edit all items.  <br/> **2** Users can edit only their own items.  <br/> **4** Users cannot edit items.<br/><br/>**NOTE**: Users with the **ManageLists** permission can read and edit all items, regardless of the **SecurityBits** attribute value.  <br/> This attribute does not apply to document libraries.  <br/> |
|**Sequence** <br/> |Optional **Integer**. Specifies the ordering priority to use for the list definition on the **Create** page. If **Sequence** is not set, the list definition shows up last in arbitrary order with any other list definitions that also lack a **Sequence** value. Two list definitions that specify the same sequence are sorted together in an arbitrary order.  <br/> |
|**SetupPath** <br/> |Optional **Text**. Specifies the path to a folder in the SharePoint Foundation setup directory ( `\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE`) that contains a file to be included in the list definition.  <br/> |
|**SyncType** <br/> |Optional **Boolean**. **TRUE** to override the default client list type associated with a SharePoint Foundation base template.  <br/> |
|**Type** <br/> | Optional **Integer**. Provides a unique identifier for the list definition. This identifier must be unique within the feature, but need not be unique across all feature definitions or site definitions.<br/><br/>SharePoint Foundation includes the following list types by default.  <br/> **100** Generic list  <br/> **101** Document library  <br/> **102** Survey  <br/> **103** Links list  <br/> **104** Announcements list  <br/> **105** Contacts list  <br/> **106** Events list  <br/> **107** Tasks list  <br/> **108** Discussion board  <br/> **109** Picture library  <br/> **110** Data sources  <br/> **111** Site template gallery  <br/> **112** User Information list  <br/> **113** Web Part Gallery  <br/> **114** List template gallery  <br/> **115** XML Form library  <br/> **116** Master pages gallery  <br/> **117** No-Code Workflows  <br/> **118** Custom Workflow Process  <br/> **119** Wiki Page library  <br/> **120** Custom grid for a list  <br/> **130** Data Connection library  <br/> **140** Workflow History  <br/> **150** Gantt Tasks list  <br/> **200** Meeting Series list  <br/> **201** Meeting Agenda list  <br/> **202** Meeting Attendees list  <br/> **204** Meeting Decisions list  <br/> **207** Meeting Objectives list  <br/> **210** Meeting text box  <br/> **211** Meeting Things To Bring list  <br/> **212** Meeting Workspace Pages list  <br/> **301** Blog Posts list  <br/> **302** Blog Comments list  <br/> **303** Blog Categories list  <br/> **1100** Issue tracking  <br/> **1200** Administrator tasks list<br/><br/>For custom list templates this attribute should be set to a number above 10000 to ensure that it does not conflict with any present or future Microsoft supplied list types.<br/><br/>This attribute corresponds to the **Type** attribute of the [List](list-element-list.md) element.  <br/> |
|**Unique** <br/> |Optional **Boolean**. **TRUE** to specify that the list definition or list template can only be used to create a list during site creation and cannot be used to create a list through the object model or user interface after the site template or definition is applied. Setting this attribute to **TRUE** has the effect of making the list hidden so that it does not appear as an option on the **Create Page** or on the **Documents and Lists** page.  <br/> |
|**UseRootFolderForNavigation** <br/> |Optional **Boolean**. **TRUE** to specify that a link to the list that is displayed in **Quick Launch** points to the root folder so that users go to a custom welcome page, instead of to the default list view page.<br/><br/>**NOTE**: If a custom welcome URL is not set for the list, rendering a link to the root folder is functionally equivalent to linking to the default list view.           |
|**VersioningEnabled** <br/> |Optional **Boolean**. **TRUE** to specify that versioning is enabled by default in lists created through the list definition; otherwise, **FALSE**.  <br/> |
   
### Child elements

None
   
### Parent elements

- [ListTemplates](listtemplates-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
### Remarks

In SharePoint Foundation, the list template for a standard SharePoint list is usually defined within the element manifest file of the Feature that contains the list definition. For more information about list template Features, see [List template files](list-template-files.md).
  

