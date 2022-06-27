---
title: ListTemplate element (List Template)
description: Outlines the ListTemplate element, which specifies a list definition that is available as an option for creating lists on the Create page.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: e565ead9-adcb-4a90-97e3-04850719420a
---

# ListTemplate element (List Template)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a list definition that is available as an option for creating lists on the **Create** page.

## Definition

```XML
<ListTemplate
  AllowDeletion = "TRUE" | "FALSE"
  AllowEveryoneViewItems = "TRUE" | "FALSE"
  AlwaysIncludeContent = "TRUE" | "FALSE"
  BaseType = "0" | "1" | "3" |"4" | "5"
  CacheSchema = "TRUE" | "FALSE"
  Catalog = "TRUE" | "FALSE"
  Category = "Libraries" | "Communications" | "Tracking" | 
    "Custom Lists"
  Default = "TRUE" | "FALSE"
  Description = "Text"
  DisableAttachments = "TRUE" | "FALSE"
  DisallowContentTypes = "TRUE" | "FALSE"
  DisplayName = "Text"
  DocumentAsEnclosure = "TRUE" | "FALSE"
  DocumentTemplate = "Integer"
  DontSaveInTemplate = "TRUE" | "FALSE"
  EditPage = "Text"
  EnableModeration = "TRUE" | "FALSE"
  EnablePeopleSelector = "TRUE" | "FALSE"
  EnableResourceSelector = "TRUE" | "FALSE"
  FeatureId = "Text"
  FolderCreation = "TRUE" | "FALSE"
  Hidden = "TRUE" | "FALSE"
  HiddenList = "TRUE" | "FALSE"
  Image = "URL"
  MultipleTypes = "TRUE" | "FALSE"
  MustSaveRootFiles = "TRUE" | "FALSE"
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


  
| Attribute | Description |
| --- | --- |
| \*\*AllowDeletion\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that lists created through the template cannot be deleted; otherwise, \*\*FALSE\*\*. |
| \*\*AllowEveryoneViewItems\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to allow any user to view items in the library. The \*\*AllowEveryoneViewItems\*\* attribute is used, for example, in the Master Page gallery to give all users access to master pages. |
| \*\*AlwaysIncludeContent\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that list content be included by default when lists created through the template are saved as list templates in the user interface; otherwise, \*\*FALSE\*\*. |
| \*\*BaseType\*\* | Required \*\*Integer\*\*. Specifies the base type, or default schema, for lists created from the definition.<br><br>* 0 - GenericList<br>    <br>* 1 - DocumentLibrary<br>    <br>* 3 - DiscussionBoard<br>    <br>* 4 - Survey<br>    <br>* 5 - Issue |
| \*\*CacheSchema\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to enable schema caching of the list when provisioning a site. The \*\*CacheSchema\*\* attribute is used, for example, in the global [Onet.xml](https://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx) file to enable caching of the user list for the current site collection. |
| \*\*Catalog\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that the list definition is for a site gallery, a list gallery, or a web part gallery. |
| \*\*Category\*\* | Optional \*\*Text\*\*. Specifies the category with which to associate lists created through the list definition. Possible values include the following:<br><br>* \*\*Libraries\*\*<br>    <br>* \*\*Communications\*\*<br>    <br>* \*\*Tracking\*\*<br>    <br>* \*\*Custom Lists\*\* |
| \*\*Default\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that new SharePoint sites will include this list. |
| \*\*Description\*\* | Optional \*\*Text\*\*. Provides a description of the list definition. |
| \*\*DisableAttachments\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that users can attach files to items in lists created through the template; otherwise, \*\*FALSE\*\*. |
| \*\*DisallowContentTypes\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that content types cannot be managed on lists created through the template; otherwise, \*\*FALSE\*\*. |
| \*\*DisplayName\*\* | Required \*\*Text\*\*. Specifies the display name of the list definition. |
| \*\*DocumentAsEnclosure\*\* | Optional \*\*Boolean\*\*. Specifies if the list includes documents as an enclosure object. |
| \*\*DocumentTemplate\*\* | Optional \*\*Integer\*\*. Currently unused. This is valid only in a \*\*ListTemplate\*\* element whose \*\*BaseType\*\* is set to 1 (document libraries). For future compatibility, this should either be blank or correspond to the \*\*Type\*\* attribute of a \*\*DocumentTemplate\*\* element in the \*\*DocumentTemplates\*\* enumeration. \[Same as previous version, but deprecated.\] |
| \*\*DontSaveInTemplate\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to exclude the content of the list when the list is saved as a custom list template or when the site to which the list belongs is saved as a custom site template through the user interface. |
| \*\*EditPage\*\* | Optional \*\*Text\*\*. Specifies the name of a custom application page (`/_layouts`) to use as the page for editing list properties for lists created through the list template. |
| \*\*EnableModeration\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that content approval is enabled by default in lists created through the template; otherwise, \*\*FALSE\*\*. |
| \*\*EnablePeopleSelector\*\* | Optional \*\*Boolean\*\*. Specifies the value for the EnablePeopleSelector property. |
| \*\*EnableResourceSelector\*\* | Optional \*\*Boolean\*\*. Specifies the value for the EnableResourceSelector property. |
| \*\*FeatureId\*\* | Optional \*\*Text\*\*. Specifies the GUID that identifies the Feature with which the template is associated. |
| \*\*FolderCreation\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to enable folder creation within the list and to specify that the \*\*New Folder\*\* command appears on the \*\*New\*\* menu in list views; otherwise, \*\*FALSE\*\*. |
| \*\*Hidden\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that the list definition is not available on the \*\*Create\*\* page for creating lists. |
| \*\*HiddenList\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that a list created from the list definition is hidden. |
| \*\*Image\*\* | Optional \*\*URL\*\*. Specifies a URL to an icon used to represent a list. |
| \*\*MultipleMtgDataList\*\* | Optional \*\*Boolean\*\*. If \`MultipleMtgDataList="TRUE"\` is specified, the list within a Meeting Workspace site contains data for multiple meeting instances within the site. |
| \*\*MultipleTypes\*\* | Optional \*\*Boolean\*\*. Specifies if there are multiple list types. |
| \*\*MustSaveRootFiles\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to save the pages contained within a special document library that is used internally for a Meeting Workspace site when the list template is saved without content. This attribute is not intended for public use. |
| \*\*Name\*\* | Required \*\*Text\*\*. Specifies the internal name of the list definition. No spaces or special characters can be used. This name is also used to find the folder that contains the Schema.xml file that defines the schema in use. |
| \*\*NewPage\*\* | Optional \*\*Text\*\*. Specifies the name of a custom page to use as the page for creating a new list through the list template. |
| \*\*NoCrawl\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that the list not be visible in search results; otherwise, \*\*FALSE\*\*. |
| \*\*OnQuickLaunch\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to display lists created from the list definition on the \*\*QuickLaunch\*\* bar. |
| \*\*Path\*\* | Optional \*\*Text\*\*. Specifies the name of the site definition that contains the list definition; for example, \*\*STS\*\*. This path is assumed to be relative to the 12\\TEMPLATE directory. The path can be directed at a Features schema; for example, Features\\Announcements. \[Same as previous version, but deprecated.\] |
| \*\*RootWebOnly\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that the list created from the definition exists only in the root website of a site collection. \[Same as previous version, but deprecated.\] |
| \*\*SecurityBits\*\* | Optional \*\*Text\*\*. Defines the item-level permissions in the list for users with sufficient permission to read or edit list items. The \*\*SecurityBits\*\* attribute contains a 2-digit string. The first digit in the string controls the read access; the second digit in the string controls the edit access. For read access, the following are valid digits:<br><br>* \*\*1\*\*   Users can read all items.<br>    <br>* \*\*2\*\*   Users can read only their own items.<br>    <br><br>For edit access, the following are valid digits:<br><br>* \*\*1\*\*   Users can edit all items.<br>    <br>* \*\*2\*\*   Users can edit only their own items.<br>    <br>* \*\*4\*\*   Users cannot edit items.<br>    <br><br>\*\*Note\*\*: Users with the ManageLists permission can read and edit all items, regardless of value of the \*\*SecurityBits\*\* attribute.<br><br>This attribute does not apply to document libraries. |
| \*\*Sequence\*\* | Optional \*\*Integer\*\*. Specifies the ordering priority to use for the list template on the \*\*Create\*\* page. If \*\*Sequence\*\* is not set, the template appears last in arbitrary order with any other templates that also lack a \*\*Sequence\*\* value. Two templates that specify the same sequence are sorted together in an arbitrary order. |
| \*\*SetupPath\*\* | Optional \*\*Text\*\*. Specifies the path to a folder in the SharePoint Foundation setup directory (%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\\TEMPLATE) that contains a file to include in the template. |
| \*\*SyncType\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to override the default client list type associated with a SharePoint Foundation base template. |
| \*\*Type\*\* | Optional \*\*Integer\*\*. Provides a unique identifier for the template. This identifier must be unique within the feature, but need not be unique across all feature definitions or site definitions. For a list of the default list template types, see SPListTemplateType.<br><br>This attribute corresponds to the \*\*Type\*\* attribute of the [List](list-element-list.md) element. |
| \*\*Unique\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that the list definition or list template can be used to create a list only during site creation and cannot be used to create a list through the object model or user interface after the site template or definition is applied. Setting this attribute to \*\*TRUE\*\* has the effect of making the list hidden so that it does not appear as an option on the \*\*Create\*\* page or on the \*\*Documents and Lists\*\* page. |
| \*\*UseRootFolderForNavigation\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that a link to the list that is displayed in \*\*Quick Launch\*\* points to the root folder so that users go to a custom welcome page, instead of to the default list view page.<br><br>If a custom welcome URL is not set for the list, rendering a link to the root folder is functionally equivalent to linking to the default list view. |
| \*\*VersioningEnabled\*\* | Optional \*\*Boolean\*\*. \*\*TRUE\*\* to specify that versioning is enabled by default in lists created through the template; otherwise, \*\*FALSE\*\*. |

### Child elements

None

### Parent elements
|Elements|
|----|
|[Elements](elements-element-list-template.md)|

## Example

For an example of how this element is used, see [List Template Files](list-template-files.md).








