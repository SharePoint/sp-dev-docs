---
title: "RightsGroup Element (View)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 2581816d-83ce-4206-9dcc-da6edd82ae52
description: "Last modified: March 09, 2015"
---

# RightsGroup Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a permission that the current user must have to permit the contents of the [Then](then-element-view.md) clause within an [IfHasRight](ifhasrights-element-view.md) element to be displayed. 
  
```
<RightsGroup
    Permission = "Required">
</RightsGroup>
```
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes


|**Attribute**|**Description**|
|:-----|:-----|
|**PermAddAndCustomizePages="Required"** <br/> |Add, change, or delete ASPX pages, HTML pages, or Web Part Pages, and edit the Web site using a SharePoint Foundation-compatible editor.  <br/> |
|**PermAddDelPrivateWebParts="Required"** <br/> |Add or remove Web Parts on a personalized Web Part Page.  <br/> |
|**PermAddListItems="Required"** <br/> |Add items to lists, add documents to document libraries, and add Web discussion comments.  <br/> |
|**PermApplyStyleSheets="Required"** <br/> |Apply a style sheet (.CSS file) to the Web site.  <br/> |
|**PermApplyThemeAndBorder="Required"** <br/> |Apply a theme or borders to the entire Web site.  <br/> |
|**PermApproveItems="Required"** <br/> |Approve items.  <br/> |
|**PermBrowseDirectories="Required"** <br/> |Browse directories in a Web site.  <br/> |
|**PermBrowseUserInfo="Required"** <br/> |View information about users. This right is not available through the user interface.  <br/> |
|**PermCancelCheckout="Required"** <br/> |Check in a document without saving the current changes.  <br/> |
|**PermCreateAlerts="Required"** <br/> |Create alerts.  <br/> |
|**PermCreateGroups="Required"** <br/> |Create, change, and delete groups, including adding users to the groups and specifying which rights are assigned to a group.  <br/> |
|**PermCreateSSCSite="Required"** <br/> |Create a Web site using Self-Service Site Creation.  <br/> |
|**PermDeleteListItems="Required"** <br/> |Delete items from a list, documents from a document library, and Web discussion comments in documents.  <br/> |
|**PermDeleteVersions="Required"** <br/> |Delete versions.  <br/> |
|**PermEditListItems="Required"** <br/> |Edit items in lists, edit documents in document libraries, edit Web discussion comments in documents, and customize Web Part Pages in document libraries.  <br/> |
|**PermEditMyUserInfo="Required"** <br/> |Edit personal user information.  <br/> |
|**PermEnumeratePermissions="Required"** <br/> |View permissions.  <br/> |
|**PermFullMask="Required"** <br/> |Has all permissions on the Web site. Not available through the user interface.  <br/> |
|**PermManageAlerts="Required"** <br/> |Manage alerts.  <br/> |
|**PermManageLists="Required"** <br/> |Approve content in lists, add or remove columns in a list, and add or remove public views of a list.  <br/> |
|**PermManagePermissions="Required"** <br/> |Manage permissions.  <br/> |
|**PermManagePersonalViews="Required"** <br/> |Create, change, and delete personal views of lists.  <br/> |
|**PermManageSubwebs="Required"** <br/> |Manage or create subsites.  <br/> |
|**PermManageWeb="Required"** <br/> |Manage a site, including the ability to perform all administration tasks for the site and manage contents and permissions  <br/> |
|**PermOpen="Required"** <br/> |Open documents.  <br/> |
|**PermOpenItems="Required"** <br/> |Open items.  <br/> |
|**PermUpdatePersonalWebPar="Required"ts** <br/> |Update Web Parts to display personalized information.  <br/> |
|**PermUseRemoteAPIs="Required"** <br/> |Use the APIs defined through remote applications.  <br/> |
|**PermViewFormPages="Required"** <br/> |View list item form pages.  <br/> |
|**PermViewListItems="Required"** <br/> |View items in lists, documents in document libraries, view Web discussion comments, and set up e-mail alerts for lists.  <br/> |
|**PermViewPages="Required"** <br/> |View pages in a Web site.  <br/> |
|**PermViewUsageData="Required"** <br/> |View reports on Web site usage.  <br/> |
|**PermViewVersions="Required"** <br/> |View versions of items.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[RightsChoices](rightschoices-element-view.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

