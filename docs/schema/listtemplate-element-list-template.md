---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
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

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**AllowDeletion**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that lists created through the template cannot be deleted; otherwise, **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowEveryoneViewItems**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to allow any user to view items in the library. The **AllowEveryoneViewItems** attribute is used, for example, in the Master Page gallery to give all users access to master pages.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AlwaysIncludeContent**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that list content be included by default when lists created through the template are saved as list templates in the user interface; otherwise, **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Required **Integer**. Specifies the base type, or default schema, for lists created from the definition.</p>
<ul>
<li><p>0 - GenericList</p></li>
<li><p>1 - DocumentLibrary</p></li>
<li><p>3 - DiscussionBoard</p></li>
<li><p>4 - Survey</p></li>
<li><p>5 - Issue</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**CacheSchema**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to enable schema caching of the list when provisioning a site. The **CacheSchema** attribute is used, for example, in the global <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a> file to enable caching of the user list for the current site collection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Catalog**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the list definition is for a site gallery, a list gallery, or a web part gallery.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Category**</p></td>
<td align="left"><p>Optional **Text**. Specifies the category with which to associate lists created through the list definition. Possible values include the following:</p>
<ul>
<li><p>**Libraries**</p></li>
<li><p>**Communications**</p></li>
<li><p>**Tracking**</p></li>
<li><p>**Custom Lists**</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that new SharePoint sites will include this list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides a description of the list definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisableAttachments**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that users can attach files to items in lists created through the template; otherwise, **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisallowContentTypes**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that content types cannot be managed on lists created through the template; otherwise, **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **Text**. Specifies the display name of the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentAsEnclosure**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if the list includes documents as an enclosure object.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DocumentTemplate**</p></td>
<td align="left"><p>Optional **Integer**. Currently unused. This is valid only in a **ListTemplate** element whose **BaseType** is set to 1 (document libraries). For future compatibility, this should either be blank or correspond to the **Type** attribute of a **DocumentTemplate** element in the **DocumentTemplates** enumeration. [Same as previous version, but deprecated.]</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DontSaveInTemplate**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to exclude the content of the list when the list is saved as a custom list template or when the site to which the list belongs is saved as a custom site template through the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EditPage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of a custom application page (`/_layouts`) to use as the page for editing list properties for lists created through the list template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableModeration**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that content approval is enabled by default in lists created through the template; otherwise, **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnablePeopleSelector**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies the value for the <span sdata="cer" target="P:Microsoft.SharePoint.SPList.EnablePeopleSelector"><span class="nolink">EnablePeopleSelector</span></span> property.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableResourceSelector**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies the value for the <span sdata="cer" target="P:Microsoft.SharePoint.SPList.EnableResourceSelector"><span class="nolink">EnableResourceSelector</span></span> property.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID that identifies the Feature with which the template is associated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FolderCreation**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to enable folder creation within the list and to specify that the **New Folder** command appears on the **New** menu in list views; otherwise, **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the list definition is not available on the **Create** page for creating lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**HiddenList**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that a list created from the list definition is hidden.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image**</p></td>
<td align="left"><p>Optional **URL**. Specifies a URL to an icon used to represent a list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MultipleMtgDataList**</p></td>
<td align="left"><p>Optional **Boolean**. If `MultipleMtgDataList="TRUE"` is specified, the list within a Meeting Workspace site contains data for multiple meeting instances within the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MultipleTypes**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if there are multiple list types.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MustSaveRootFiles**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to save the pages contained within a special document library that is used internally for a Meeting Workspace site when the list template is saved without content. This attribute is not intended for public use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies the internal name of the list definition. No spaces or special characters can be used. This name is also used to find the folder that contains the Schema.xml file that defines the schema in use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NewPage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of a custom page to use as the page for creating a new list through the list template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NoCrawl**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the list not be visible in search results; otherwise, **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OnQuickLaunch**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to display lists created from the list definition on the **QuickLaunch** bar.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of the site definition that contains the list definition; for example, **STS**. This path is assumed to be relative to the 12\TEMPLATE directory. The path can be directed at a Features schema; for example, Features\Announcements. [Same as previous version, but deprecated.]</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the list created from the definition exists only in the root website of a site collection. [Same as previous version, but deprecated.]</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SecurityBits**</p></td>
<td align="left"><p>Optional **Text**. Defines the item-level permissions in the list for users with sufficient permission to read or edit list items. The **SecurityBits** attribute contains a 2-digit string. The first digit in the string controls the read access; the second digit in the string controls the edit access. For read access, the following are valid digits:</p>
<ul>
<li><p>**1**   Users can read all items.</p></li>
<li><p>**2**   Users can read only their own items.</p></li>
</ul>
<p>For edit access, the following are valid digits:</p>
<ul>
<li><p>**1**   Users can edit all items.</p></li>
<li><p>**2**   Users can edit only their own items.</p></li>
<li><p>**4**   Users cannot edit items.</p></li>
</ul>
<p>**Note**: Users with the <span sdata="cer" target="F:Microsoft.SharePoint.SPBasePermissions.ManageLists"><span class="nolink">ManageLists</span></span> permission can read and edit all items, regardless of value of the **SecurityBits** attribute.</p>
<p>This attribute does not apply to document libraries.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the ordering priority to use for the list template on the **Create** page. If **Sequence** is not set, the template appears last in arbitrary order with any other templates that also lack a **Sequence** value. Two templates that specify the same sequence are sorted together in an arbitrary order.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text**. Specifies the path to a folder in the SharePoint Foundation setup directory (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\\TEMPLATE) that contains a file to include in the template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SyncType**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to override the default client list type associated with a SharePoint Foundation base template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Integer**. Provides a unique identifier for the template. This identifier must be unique within the feature, but need not be unique across all feature definitions or site definitions. For a list of the default list template types, see <span sdata="cer" target="T:Microsoft.SharePoint.SPListTemplateType"><span class="nolink">SPListTemplateType</span></span>.</p>
<p>This attribute corresponds to the **Type** attribute of the <a href="list-element-list.md">List</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Unique**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the list definition or list template can be used to create a list only during site creation and cannot be used to create a list through the object model or user interface after the site template or definition is applied. Setting this attribute to **TRUE** has the effect of making the list hidden so that it does not appear as an option on the **Create** page or on the **Documents and Lists** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UseRootFolderForNavigation**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that a link to the list that is displayed in **Quick Launch** points to the root folder so that users go to a custom welcome page, instead of to the default list view page.</p>
<p>If a custom welcome URL is not set for the list, rendering a link to the root folder is functionally equivalent to linking to the default list view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**VersioningEnabled**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that versioning is enabled by default in lists created through the template; otherwise, **FALSE**.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elements-element-list-template.md">Elements</a></p></td>
</tr>
</tbody>
</table>


## Example

For an example of how this element is used, see [List Template Files](list-template-files.md).








