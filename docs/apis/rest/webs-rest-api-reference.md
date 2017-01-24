---
title: Webs REST API reference
ms.prod: MULTIPLEPRODUCTS
ms.assetid: 73b8a37a-c005-46f6-9ab0-18cdf47830af
ms.locale: en-US
---



# Webs REST API reference
Learn about site-related resources and endpoints in the SharePoint REST API.
 

 **Last modified:** September 15, 2016
 

 * **Applies to:** apps for SharePoint | SharePoint Online | SharePoint Server 2013* 
 


 


## About the request examples in this article
<a name="bk_AboutTheExamples"> </a>

The examples in this article use jQuery AJAX requests. Before you try to use the examples, do the following:
 

 

- Change  _<site url>_ and other placeholder data such as any IDs, names, or paths of SharePoint entities.
    
 
- If you're using the cross-domain library, you'll have to change the request format. For example, it might look like the following.
    
```
  executor.executeAsync({
  url: "<app web url>/_api/SP.AppContextSite(@target)/web/getchanges?@target='<host web url>'",
  method: "POST",
  body: "{ 'query': { '__metadata': { 'type': 'SP.ChangeQuery' }, 'Web': true, 'Update': true } }",
  headers: {
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```

- If you're using OAuth, add an  **Authorization** header ( `"Authorization": "Bearer " + <access token>`) to send the OAuth access token.
    
 
- Remove the line breaks from the  **url** and **data** property values in the request examples. Line breaks are added to the examples to make them easier to read.
    
 
- If you want the server to return responses in Atom format, remove the  `"accept": "application/json;odata=verbose"` header.
    
 
See  [How REST requests differ by environment](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#bk_HowRequestsDiffer) for more information about changing the requests. See [Additional resources](fields-rest-api-reference.md#bk_AdditionalResources) for links to more information about using the cross-domain library, OAuth, and the SharePoint REST service.
 

 

 **Tip**  The SharePoint Online REST service supports combining multiple requests into a single call to the service by using the OData  `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](http://msdn.microsoft.com/library/make-batch-requests-with-the-rest-apis%28Office.15%29.aspx). This option is not yet supported for on-premise SharePoint.
 


## Web resource
<a name="bk_Web"> </a>

 [Endpoint URI](webs-rest-api-reference.md#bk_WebEndpoint) | [Properties](webs-rest-api-reference.md#bk_WebProperties) | [Methods](webs-rest-api-reference.md#bk_WebMethods) | [OData representation](webs-rest-api-reference.md#bk_WebOData)
 

 
Represents a SharePoint site. A site is a type of  **SP.SecurableObject**.
 

 

### Endpoint URI
<a name="bk_WebEndpoint"> </a>

http:// _<site url>_/_api/web
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_WebRequestExamples"> </a>

 **GET request example:** Get a site
 

 

```
$.ajax({
  url: "http://<site url>/_api/web",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

 **POST request example:** Create a site by using the [Add method](webs-rest-api-reference.md#bk_WebCollectionAdd) from the [WebCollection](webs-rest-api-reference.md#bk_WebCollection) resource
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/webs/add",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.WebCreationInformation' },
    'Title': 'Team projects', 'Url': 'TeamProjects', 'WebTemplate': 'STS',
    'UseSamePermissionsAsParentSite': true } }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

Or you can use the  **Add** method from the **WebInformationCollection** resource, as shown in [Creating a site with REST](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#bk_CreateSite).
 

 
 **MERGE request example:** Change a site
 

 



```
$.ajax({
  url: "http://<site url>/_api/web",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.Web' }, 'Description': 'All team projects',
    'EnableMinimalDownload': false }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

 **DELETE request example:** Delete a site
 

 



```
$.ajax({
  url: "http://<site url>/_api/web",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### Web properties
<a name="bk_WebProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|AllowCreateDeclarativeWorkflowForCurrentUser|**Boolean**|R|No|Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the  **AllowCreateDeclarativeWorkflow** property of the site collection. Default value: **true**.|
|AllowDesignerForCurrentUser|**Boolean**|R|No|Gets a value that specifies whether the current user is allowed to use a designer application to customize this site.|
|AllowMasterPageEditingForCurrentUser|**Boolean**|R|No|Gets a value that specifies whether the current user is allowed to edit the master page.|
|AllowRevertFromTemplateForCurrentUser|**Boolean**|R|No|Gets a value that specifies whether the current user is allowed to revert the site to a default site template.|
|AllowRssFeeds|**Boolean**|R|Yes|Gets a value that specifies whether the site allows RSS feeds.|
|AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser|**Boolean**|R|No|Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the  **AllowSaveDeclarativeWorkflowAsTemplate** property of the site collection. Default value: **true**.|
|AllowSavePublishDeclarativeWorkflowForCurrentUser|**Boolean**|RW|No|Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the  **AllowSavePublishDeclarativeWorkflowAsTemplate** property of the site collection. When enabled, can only be set by a site collection administrator. Default value: **true**.|
|AllProperties|**SP.PropertyValues**|R|No|Gets a collection of metadata for the Web site.|
|AppInstanceId|**GUID**|R|Yes|The instance Id of the App Instance that this web represents. |
|AssociatedMemberGroup| [SP.Group](users-groups-and-roles-rest-api-reference.md#bk_Group)|RW|No|Gets or sets the group of users who have been given contribute permissions to the Web site.|
|AssociatedOwnerGroup| [SP.Group](users-groups-and-roles-rest-api-reference.md#bk_Group)|RW|No|Gets or sets the associated owner group of the Web site.|
|AssociatedVisitorGroup| [SP.Group](users-groups-and-roles-rest-api-reference.md#bk_Group)|RW|No|Gets or sets the associated visitor group of the Web site.|
|AvailableContentTypes|**SP.ContentTypeCollection**|R|No|Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.|
|AvailableFields| [SP.FieldCollection](fields-rest-api-reference.md#bk_FieldCollection)|R|No|Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.|
|Configuration|**Int16**|R|Yes|Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived.|
|ContentTypes|**SP.ContentTypeCollection**|R|No|Gets the collection of content types for the Web site.|
|Created|**DateTime**|R|Yes|Gets a value that specifies when the site was created.|
|CurrentUser| [SP.User](users-groups-and-roles-rest-api-reference.md#bk_User)|R|No|Gets the current user of the site.|
|CustomMasterUrl|**String**|RW|Yes|Gets or sets the URL for a custom master page file to apply to the website.|
|Description|**String**|RW|Yes|Gets or sets the description for the site.|
|DesignerDownloadUrlForCurrentUser|**String**|R|No|Gets the URL where the current user can download SharePoint Designer.|
|DocumentLibraryCalloutOfficeWebAppPreviewersDisabled|**Boolean**|R|Yes|Determines if the Document Library Callout's WAC previewers are enabled or not.|
|EffectiveBasePermissions| [SP.BasePermissions](complex-types-in-the-sp-namespace.md#bk_BasePermissions)|R|No|Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal.To check only user permissions (ignoring app permissions), use the  [GetUserEffectivePermissions](webs-rest-api-reference.md#bk_WebGetUserEffectivePermissions) method.|
|EnableMinimalDownload|**Boolean**|RW|Yes|Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy.|
|EventReceivers|**SP.EventReceiverCollection**|R|No|Gets the collection of event receiver definitions that are currently available on the website.|
|Features|**SP.FeatureCollection**|R|No|Gets a value that specifies the collection of features that are currently activated in the site.|
|Fields| [SP.FieldCollection](fields-rest-api-reference.md#bk_FieldCollection)|R|No|Gets the collection of field objects that represents all the fields in the Web site.|
|Folders| [SP.FolderCollection](files-and-folders-rest-api-reference.md#bk_FolderCollection)|R|No|Gets the collection of all first-level folders in the Web site.|
|Id|**GUID**|R|Yes|Gets a value that specifies the site identifier for the site.|
|Language|**Int32**|R|Yes|Gets a value that specifies the LCID for the language that is used on the site.|
|LastItemModifiedDate|**DateTime**|R|Yes|Gets a value that specifies when an item was last modified in the site.|
|Lists| [SP.ListCollection](lists-and-list-items-rest-api-reference.md#bk_ListCollection)|R|No|Gets the collection of all lists that are contained in the Web site available to the current user based on the permissions of the current user.|
|ListTemplates|**SP.ListTemplateCollection**|R|No|Gets a value that specifies the collection of list definitions and list templates available for creating lists on the site.|
|MasterUrl|**String**|RW|Yes|Gets or sets the URL of the master page that is used for the website.|
|Navigation|**SP.Navigation**|R|No|Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.|
|ParentWeb| [SP.Web](webs-rest-api-reference.md#bk_Web)|R|No|Gets the parent website of the specified website.|
|PushNotificationSubscribers|**SP.PushNotificationSubscriberCollection**|R|No|Gets the collection of push notification subscribers over the site.|
|QuickLaunchEnabled|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the Quick Launch area is enabled on the site.|
|RecycleBin|**SP.RecycleBin**|R|No|Specifies the collection of recycle bin items of the recycle bin of the site.|
|RecycleBinEnabled|**Boolean**|R|Yes|Gets or sets a value that determines whether the recycle bin is enabled for the website.|
|RegionalSettings|**SP.RegionalSettings**|R|No|Gets the regional settings that are currently implemented on the website.|
|RoleDefinitions| [SP.RoleDefinitionCollection](users-groups-and-roles-rest-api-reference.md#bk_RoleDefinitionCollection)|R|No|Gets the collection of role definitions for the Web site.|
|RootFolder| [SP.Folder](files-and-folders-rest-api-reference.md#bk_Folder)|R|No|Gets the root folder for the Web site.|
|SaveSiteAsTemplateEnabled|**Boolean**|RW|No|Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.|
|ServerRelativeUrl|**String**|RW|Yes|Gets or sets the server-relative URL for the Web site.|
|ShowUrlStructureForCurrentUser|**Boolean**|R|No|Gets a value that specifies whether the current user is able to view the file system structure of this site.|
|SiteGroups| [SP.GroupCollection](users-groups-and-roles-rest-api-reference.md#bk_GroupCollection)|R|No|Gets the collection of groups for the site collection.|
|SiteUserInfoList| [SP.List](lists-and-list-items-rest-api-reference.md#bk_List)|R|No|Gets the UserInfo list of the site collection that contains the Web site.|
|SiteUsers| [SP.UserCollection](users-groups-and-roles-rest-api-reference.md#bk_UserCollection)|R|No|Gets the collection of all users that belong to the site collection.|
|SupportedUILanguageIds|**Collection(Int32)**|R|No|Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.|
|SyndicationEnabled|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the RSS feeds are enabled on the site.|
|ThemeInfo|**SP.ThemeInfo**|R|No|The theming information for this site. This includes information like colors, fonts, border radii sizes etc.|
|Title|**String**|RW|Yes|Gets or sets the title for the Web site.|
|TreeViewEnabled|**Boolean**|RW|Yes|Gets or sets value that specifies whether the tree view is enabled on the site.|
|UIVersion|**Int32**|RW|Yes|Gets or sets the user interface (UI) version of the Web site.|
|UIVersionConfigurationEnabled|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden.|
|Url|**String**|R|Yes|Gets the absolute URL for the website.|
|UserCustomActions| [SP.UserCustomActionCollection](users-groups-and-roles-rest-api-reference.md#bk_UserCustomActionCollection)|R|No|Gets a value that specifies the collection of user custom actions for the site.|
|WebInfos|**SP.WebInformation**|R|No|Represents key properties of the subsites of a site.|
|Webs| [SP.WebCollection](webs-rest-api-reference.md#bk_WebCollection)|R|No|Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.|
|WebTemplate|**String**|R|Yes|Gets the name of the site definition or site template that was used to create the site.|
|WorkflowAssociations|**SP.WorkflowAssociationCollection**|R|No|Gets a value that specifies the collection of all workflow associations for the site.|
|WorkflowTemplates|**SP.WorkflowTemplateCollection**|R|No|Gets a value that specifies the collection of workflow templates associated with the site.|

### Web methods
<a name="bk_WebMethods"> </a>

 [ApplyTheme](webs-rest-api-reference.md#bk_WebApplyTheme)
 
 [ApplyWebTemplate](webs-rest-api-reference.md#bk_WebApplyWebTemplate)
 
 [BreakRoleInheritance](webs-rest-api-reference.md#bk_WebBreakRoleInheritance)
 
 [DeleteObject](webs-rest-api-reference.md#bk_WebDeleteObject)
 
 [DoesPushNotificationSubscriberExist](webs-rest-api-reference.md#bk_WebDoesPushNotificationSubscriberExist)
 
 [DoesUserHavePermissions](webs-rest-api-reference.md#bk_WebDoesUserHavePermissions)
 
 [EnsureUser](webs-rest-api-reference.md#bk_WebEnsureUser)
 
 [ExecuteRemoteLOB](webs-rest-api-reference.md#bk_WebExecuteRemoteLOB )
 
 [GetAppBdcCatalog](webs-rest-api-reference.md#bk_WebGetAppBdcCatalog)
 
 [GetAppBdcCatalogForAppInstance](webs-rest-api-reference.md#bk_WebGetAppBdcCatalogForAppInstance)
 
 [GetAppInstanceById](webs-rest-api-reference.md#bk_WebGetAppInstanceById)
 
 [GetAppInstancesByProductId](webs-rest-api-reference.md#bk_WebGetAppInstancesByProductId)
 
 [GetAvailableWebTemplates](webs-rest-api-reference.md#bk_WebGetAvailableWebTemplates)
 
 [GetCatalog](webs-rest-api-reference.md#bk_WebGetCatalog)
 
 [GetChanges](webs-rest-api-reference.md#bk_WebGetChanges)
 
 [GetContextWebInformation](webs-rest-api-reference.md#bk_WebGetContextWebInformation)
 
 [GetEntity](webs-rest-api-reference.md#bk_WebGetEntity)
 
 [GetDocumentLibraries](webs-rest-api-reference.md#bk_WebGetDocumentLibraries)
 
 [GetFileByServerRelativeUrl](webs-rest-api-reference.md#bk_WebGetFileByServerRelativeUrl)
 
 [GetFolderByServerRelativeUrl](webs-rest-api-reference.md#bk_WebGetFolderByServerRelativeUrl)
 
 [GetList](webs-rest-api-reference.md#bk_WebGetList)
 
 [GetPushNotificationSubscriber](webs-rest-api-reference.md#bk_WebGetPushNotificationSubscriber)
 
 [GetPushNotificationSubscribersByArgs](webs-rest-api-reference.md#bk_WebGetPushNotificationSubscribersByArgs)
 
 [GetPushNotificationSubscribersByUser](webs-rest-api-reference.md#bk_WebGetPushNotificationSubscribersByUser)
 
 [GetSubwebsFilteredForCurrentUser](webs-rest-api-reference.md#bk_WebGetSubwebsFilteredForCurrentUser)
 
 [GetUserById](webs-rest-api-reference.md#bk_WebGetUserById)
 
 [GetUserEffectivePermissions](webs-rest-api-reference.md#bk_WebGetUserEffectivePermissions)
 
 [GetWebUrlFromPageUrl](webs-rest-api-reference.md#bk_WebGetWebUrlFromPageUrl)
 
 [LoadAndInstallApp](webs-rest-api-reference.md#bk_WebLoadAndInstallApp)
 
 [LoadAndInstallAppInSpecifiedLocale](webs-rest-api-reference.md#bk_WebLoadAndInstallAppInSpecifiedLocale)
 
 [LoadApp](webs-rest-api-reference.md#bk_WebLoadApp)
 
 [MapsToIcon](webs-rest-api-reference.md#bk_WebMapToIcon)
 
 [ProcessExternalNotification](webs-rest-api-reference.md#bk_WebProcessExternalNotification)
 
 [RegisterPushNotificationSubscriber](webs-rest-api-reference.md#bk_WebRegisterPushNotificationSubscriber)
 
 [ResetRoleInheritance](webs-rest-api-reference.md#bk_WebResetRoleInheritance)
 
 [UnregisterPushNotificationSubscriber](webs-rest-api-reference.md#bk_WebUnregisterPushNotificationSubscriber)
 

 

#### ApplyTheme method
<a name="bk_WebApplyTheme"> </a>

Applies the theme specified by the contents of each of the files specified in the arguments to the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/applytheme( _colorpaletteurl_,  _fontschemeurl_,  _backgroundimageurl_,  _sharegenerated_)|
|**Parameters**| colorpaletteurlType: StringThe server-relative URL of the color palette file.fontschemeurlType: StringThe server-relative URL of the font scheme.backgroundimageurlType: StringThe server-relative URL of the background image.sharegeneratedType: Booleantrue to store the generated theme files in the root site, or false to store them in this site. |
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /applytheme(colorpaletteurl='/_catalogs/theme/15/palette011.spcolor',
        fontschemeurl='/_catalogs/theme/15/fontscheme007.spfont',
        backgroundimageurl='/piclibrary/th.jpg', sharegenerated=true)",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```

Or, you can send the parameters in the body:  `{ 'colorPaletteUrl':'/_catalogs/theme/15/palette011.spcolor', 'fontSchemeUrl':'/_catalogs/theme/15/fontscheme007.spfont', 'backgroundImageUrl':'/piclibrary/pics/th.jpg', 'shareGenerated':true }`
 

 
See  [Themes overview for SharePoint 2013](http://msdn.microsoft.com/library/ae585dd3-82fe-46bb-ac93-065edc0a16f4%28Office.15%29.aspx).
 

 

#### ApplyWebTemplate method
<a name="bk_WebApplyWebTemplate"> </a>

Applies the specified site definition or site template to the Web site that has no template applied to it.
 

 

 **Note**  Calling this method inside a site provisioning callback function defined within the same site definition configuration that is being applied can result in an infinite loop. Instead, create two similar site-definition configurations within the site definition, one that is visible and one that is hidden. The visible configuration can then contain a provisioning assembly callback that applies the hidden configuration to sites.
 


|||
|:-----|:-----|
|**Endpoint**|/applywebtemplate(' _<site definition or web template name>_')|
|**Parameters**|Type:  **String** The name of the site definition or the name of the site template. Use the  [GetAvailableWebTemplates method](webs-rest-api-reference.md#bk_WebGetAvailableWebTemplates) to get the names of available site templates.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /applywebtemplate(@v)?@v='blog%230'",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### BreakRoleInheritance method
<a name="bk_WebBreakRoleInheritance"> </a>

Creates unique role assignments for the securable object.
 

 

|||
|:-----|:-----|
|**Endpoint**|/breakroleinheritance( _copyroleassignments_,  _clearsubscopes_)|
|**Parameters**| copyroleassignmentsType: Booleantrue to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.clearsubscopesType: BooleanOptional. true to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object. |
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /breakroleinheritance(copyroleassignments=false, clearsubscopes=true)",
  method: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### DeleteObject method
<a name="bk_WebDeleteObject"> </a>

The recommended way to delete a site is to send a  **DELETE** request to the **Web** resource endpoint, as shown in [Web request examples](webs-rest-api-reference.md#bk_WebRequestExamples).
 

 

#### DoesPushNotificationSubscriberExist method
<a name="bk_WebDoesPushNotificationSubscriberExist"> </a>

Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
 

 

|||
|:-----|:-----|
|**Endpoint**|/doespushnotificationsubscriberexist(' _<device app instance id >_')|
|**Parameters**|Type:  **GUID** The ID of the device app instance.|
|**HTTP method**|GET|
|**Response**|Type:  **Boolean**  **true** if the subscription exists; otherwise **false**.|

#### DoesUserHavePermissions method
<a name="bk_WebDoesUserHavePermissions"> </a>

Returns whether the current user has the given set of permissions.
 

 

|||
|:-----|:-----|
|**Endpoint**|/doesuserhavepermissions(@v)?@v={'High':' _<value>_', 'Low':' _<value>_'}|
|**Parameters**|Type:  [SP.BasePermissions](complex-types-in-the-sp-namespace.md#bk_BasePermissions) The high and low permission range. Use the  `…/_api/web/roledefinitions` endpoint to get the high and low permission values for the roles on the site.|
|**HTTP method**|GET|
|**Response**|Type:  **Boolean**  **true** if the user has the permissions, otherwise **false**.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /doesuserhavepermissions(@v)?@v={'High':'432', 'Low':'1012866047'}",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### EnsureUser method
<a name="bk_WebEnsureUser"> </a>

Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/ensureuser|
|**Parameters**| logonNameType: StringThe login name of the user. Pass the logonName parameter in the request body, as shown in the request example. |
|**HTTP method**|POST|
|**Response**|Type:  [SP.User](users-groups-and-roles-rest-api-reference.md#bk_User) The specified user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /ensureuser",
  type: "POST",
  data: "{ 'logonName': 'i:0#.f|membership|user@domain.onmicrosoft.com' }",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


#### ExecuteRemoteLOB method
<a name="bk_WebExecuteRemoteLOB"> </a>

Sends data to an OData service.
 

 
This method is the entry point for hybrid connectivity and is used to invoke the OData service from an on-premises server. Input parameters required to make the OData service call are passed as custom HTTP headers. See  [ExecuteRemoteLOB](http://msdn.microsoft.com/en-us/library/hh623975%28v=office.12%29.aspx).
 

 

|||
|:-----|:-----|
|**Endpoint**|/executeremotelob|
|**Parameters**| inputStreamType: StreamThe OData input object. Used for create or update operations only. |
|**HTTP method**|POST|
|**Response**|Type:  **Stream** The OData response from the OData service.|

#### GetAppBdcCatalog method
<a name="bk_WebGetAppBdcCatalog"> </a>


 

 

|||
|:-----|:-----|
|**Endpoint**|/getappbdccatalog|
|**Parameters**|None|
|**HTTP method**|POST|
|**Response**|Type:  **SP.BusinessData.AppBdcCatalog** The Business Data Connectivity (BDC) service MetadataCatalog for the current app instance.|

#### GetAppBdcCatalogForAppInstance method
<a name="bk_WebGetAppBdcCatalogForAppInstance"> </a>


 

 

|||
|:-----|:-----|
|**Endpoint**|/getappbdccatalogforappinstance(' _<app instance id>_')|
|**Parameters**|Type:  **GUID** The ID of the app instance.|
|**HTTP method**|POST|
|**Response**|Type:  **SP.BusinessData.AppBdcCatalog** The BDC MetadataCatalog for the specified app instance.|

#### GetAppInstanceById method
<a name="bk_WebGetAppInstanceById"> </a>

Retrieves an AppInstance installed on this Site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getappinstancebyid(' _<app instance id>_')|
|**Parameters**|Type:  **GUID** The ID of the app instance.|
|**HTTP method**|GET|
|**Response**|Type:  **SP.AppInstance** The specified app instance.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getappinstancebyid('3122ea58-8435-4d9a-a302-345599838671')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetAppInstancesByProductId method
<a name="bk_WebGetAppInstancesByProductId"> </a>

Retrieves all AppInstances installed on this site that are instances of the specified App.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getappinstancesbyproductid(' _<product id>_')|
|**Parameters**|Type:  **GUID** The product ID of the app.|
|**HTTP method**|GET|
|**Response**|Type:  **Collection(SP.AppInstance)** The app instances installed on the site for the specified product.|

#### GetAvailableWebTemplates method
<a name="bk_WebGetAvailableWebTemplates"> </a>

Returns a collection of site templates available for the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getavailablewebtemplates( _lcid_,  _doincludecrosslanguage_)|
|**Parameters**| lcidType: Int64The LCID of the site templates to get.doincludecrosslanguageType: Booleantrue to include language-neutral site templates; otherwise false. |
|**HTTP method**|GET|
|**Response**|Type:  **SP.WebTemplateCollection** The collection of available site templates. Returns an empty collection if the specified LCID is not valid.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getavailablewebtemplates(lcid=1033, doincludecrosslanguage=true)",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetCatalog method
<a name="bk_WebGetCatalog"> </a>

Returns the list gallery on the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getcatalog( _<gallery type >_)|
|**Parameters**|Type:  **Int32** The gallery type. Represents a  **ListTemplateType** value such as **WebTemplateCatalog** = 111, **WebPartCatalog** = 113 **ListTemplateCatalog** = 114, **MasterPageCatalog** = 116, **SolutionCatalog** = 121, **ThemeCatalog** = 123, **DesignCatalog** = 124, **AppDataCatalog** = 125.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.List](lists-and-list-items-rest-api-reference.md#bk_Liat) The gallery for the specified list type. Returns  **null** if there is no gallery with the specified type or if the list template type is not valid.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getcatalog(113)",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetChanges method
<a name="bk_WebGetChanges"> </a>

Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getchanges|
|**Parameters**| queryType: SP.ChangeQueryThe change query. Pass the query parameter in the request body, as shown in the request example. |
|**HTTP method**|POST|
|**Response**|Type:  **SP.ChangeCollection** The changes to the site that match the criteria of the specified change query.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getchanges",
  type: "POST",
  data: "{ 'query': { '__metadata': { 'type': 'SP.ChangeQuery' },
    'Web': true, 'Update': true, 'Add': true } }",
  headers: {
    "X-RequestDigest": <form digest value>
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```


#### GetContextWebInformation
<a name="bk_WebGetContextWebInformation"> </a>

Gets the context information for the site. Static method.
 

 

|||
|:-----|:-----|
|**Endpoint**|http:// _<site url>_/_api/contextinfo|
|**Parameters**|None|
|**HTTP method**|POST|
|**Response**|Type:  [SP.ContextWebInformation](complex-types-in-the-sp-namespace.md#bk_ContextWebInformation) The context information for the site.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api
    /contextinfo",
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


#### GetCustomListTemplates method
<a name="bk_WebGetCustomListTemplates"> </a>

Gets the custom list templates for the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getcustomlisttemplates|
|**Parameters**|None|
|**HTTP method**|GET|
|**Response**|Type:  **SP.ListTemplateCollection** The custom list templates for the site.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getcustomlisttemplates",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetDocumentLibraries method
<a name="bk_WebGetDocumentLibraries"> </a>

Gets the document libraries on a site. Static method. (SharePoint Online only)
 

 

|||
|:-----|:-----|
|**Endpoint**|http:// _<site url>_/_api/sp.web.getdocumentlibraries(@v)?@v=' _<full site url>_'|
|**Parameters**|Type:  **String** The full URL of the site.|
|**HTTP method**|GET|
|**Response**|Type: Collection( [SP.DocumentLibraryInformation](complex-types-in-the-sp-namespace.md#bk_DocumentLibraryInformation)) Properties of the document libraries on the site. This method doesn't return private libraries, picture libraries, catalog libraries, asset libraries, application lists, or libraries that the user doesn't have permissions to view items.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api
    /sp.web.getdocumentlibraries(@v)?@v='https://contoso.sharepoint.com'",
  method: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler});
```


#### GetEntity method
<a name="bk_WebGetEntity"> </a>

Gets the specified external content type in a line-of-business (LOB) system application.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getentity( _namespace_,  _name_)|
|**Parameters**| namespaceType: StringThe namespace of the external content type.nameType: StringThe name of the external content type. |
|**HTTP method**|POST|
|**Response**|Type:  **SP.BusinessData.Entity** The external content type.|

#### GetFileByServerRelativeUrl method
<a name="bk_WebGetFileByServerRelativeUrl"> </a>

Returns the file object located at the specified server-relative URL.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getfilebyserverrelativeurl(' _<server relative url>_')|
|**Parameters**|Type:  **String** The server relative URL of the file.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.File](files-and-folders-rest-api-reference.md#bk_File) The specified file.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getfilebyserverrelativeurl('/templates/ResourceRequest.docx')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetFolderByServerRelativeUrl method
<a name="bk_WebGetFolderByServerRelativeUrl"> </a>

Returns the folder object located at the specified server-relative URL.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getfolderbyserverrelativeurl(' _<server relative url>_')|
|**Parameters**|Type:  **String** The server relative URL of the folder.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.Folder](files-and-folders-rest-api-reference.md#bk_Folder) The specified folder.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getfolderbyserverrelativeurl('/templates/test')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetList method
<a name="bk_WebGetList"> </a>

Gets the list at the specified site-relative URL. 
 

 

|||
|:-----|:-----|
|**Endpoint**|/getlist(' _<list url>_')|
|**Parameters**|Type:  **String** The site-relative URL of the list.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.List](lists-and-list-items-rest-api-reference.md#bk_List) The specified list.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getlist('/lists/ideas')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetPushNotificationSubscriber method
<a name="bk_WebGetPushNotificationSubscriber"> </a>

Gets the push notification subscriber over the site for the specified device application instance ID.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getpushnotificationsubscriber(' _<device app instance id>_')|
|**Parameters**|Type:  **GUID** The ID of the device app instance.|
|**HTTP method**|GET|
|**Response**|Type:  **SP.PushNotificationSubscriber** The registered push notification subscriber.|

#### GetPushNotificationSubscribersByArgs method
<a name="bk_WebGetPushNotificationSubscribersByArgs"> </a>

Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getpushnotificationsubscribersbyargs(' _<arguments>_')|
|**Parameters**|Type:  **String** Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass  **null** or empty arguments to return unfiltered results.|
|**HTTP method**|GET|
|**Response**|Type:  **SP.PushNotificationSubscriberCollection** The registered push notification subscribers that match the arguments. Returns an empty collection if no match is found.|

#### GetPushNotificationSubscribersByUser method
<a name="bk_WebGetPushNotificationSubscribersByUser"> </a>

Queries for the push notification subscribers over the site for the specified user.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getpushnotificationsubscribersbyuser(@v)?@v=' _<login name>_'|
|**Parameters**|Type:  **String** The login name of the user. See  [User](users-groups-and-roles-rest-api-reference.md#bk_User) for formats used to pass login names in the query string.|
|**HTTP method**|GET|
|**Response**|Type:  **SP.PushNotificationSubscriberCollection** The registered push notification subscribers for the user.|

#### GetSubwebsFilteredForCurrentUser method
<a name="bk_WebGetSubwebsFilteredForCurrentUser"> </a>

Returns the collection of child sites of the current site based on the specified query.
 

 
Available in SharePoint Online only.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getsubwebsfilteredforcurrentuser( _nwebtemplatefilter_,  _nconfigurationfilter_)|
|**Parameters**| nwebtemplatefilterType: Int32The ID of the template used in the site definition of the sites.nconfigurationfilterType: Int16The ID of the site template used to provision the sites. |
|**HTTP method**|GET|
|**Response**|Type:  **Collection(SP.WebInformation)** Information about the sites that the current user can access.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getsubwebsfilteredforcurrentuser(nwebtemplatefilter=-1,nconfigurationfilter=0)",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetUserById method
<a name="bk_WebGetUserById"> </a>

Returns the user corresponding to the specified member identifier for the current site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getuserbyid( _<user id>_)|
|**Parameters**|Type:  **Int32** The ID of the user.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.User](users-groups-and-roles-rest-api-reference.md#bk_User) The specified user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getuserbyid(12)",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetUserEffectivePermissions method
<a name="bk_WebGetUserEffectivePermissions"> </a>

Gets the effective permissions that the specified user has within the current application scope.
 

 
To check the permissions of a user other than the current user, apps must have  **Full Control** permissions for the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getusereffectivepermissions(@v)?@v=' _<login name>_'|
|**Parameters**|Type:  **String** The login name of the user. See  [User](users-groups-and-roles-rest-api-reference.md#bk_User) for formats used to pass login names in the query string.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.BasePermissions](complex-types-in-the-sp-namespace.md#bk_BasePermissions) The permissions of the specified user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /getusereffectivepermissions(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetWebUrlFromPageUrl method
<a name="bk_WebGetWebUrlFromPageUrl"> </a>

Gets the site URL from a page URL. Static method.
 

 

|||
|:-----|:-----|
|**Endpoint**|http:// _<site url>_/_api/sp.web.getweburlfrompageurl(@v)?@v=' _<full page url>_'|
|**Parameters**|Type:  **String** The full URL of the SharePoint page, with URL encoded characters as needed.|
|**HTTP method**|GET|
|**Response**|Type:  **String** The full URL of the SharePoint site.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api
    /sp.web.getweburlfrompageurl(@v)?@v='https://contoso.sharepoint.com/subsite/_layouts/15/start.aspx'",
  method: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### LoadAndInstallApp method
<a name="bk_WebLoadAndInstallApp"> </a>

Uploads and installs an app package to this site.
 

 
This site must be enabled for remote development.
 

 

|||
|:-----|:-----|
|**Endpoint**|/loadandinstallapp|
|**Parameters**| appPackageStreamType: StreamThe app package stream. |
|**HTTP method**|POST|
|**Response**|Type:  **SP.AppInstance** The app instance.|

#### LoadAndInstallAppInSpecifiedLocale method
<a name="bk_WebLoadAndInstallAppInSpecifiedLocale"> </a>

Uploads and installs an App package on the site in a specified locale.
 

 

|||
|:-----|:-----|
|**Endpoint**|/loadandinstallappinspecifiedlocale|
|**Parameters**| appPackageStreamType: StreamThe app package stream.installationLocaleLCIDType: Int32The LCID of the locale to use to create the app instance. |
|**HTTP method**|POST|
|**Response**|Type:  **SP.AppInstance** The app instance.|

#### LoadApp method
<a name="bk_WebLoadApp"> </a>

Uploads an App package and creates an instance from it.
 

 

|||
|:-----|:-----|
|**Endpoint**|/loadapp|
|**Parameters**| appPackageStreamType: StreamThe app package stream.installationLocaleLCIDType: Int32The LCID of the locale to use to create the app instance. |
|**HTTP method**|POST|
|**Response**|Type:  **SP.AppInstance** The app instance.|

#### MapToIcon method
<a name="bk_WebMapToIcon"> </a>

Returns the name of the image file for the icon that is used to represent the specified file.
 

 

|||
|:-----|:-----|
|**Endpoint**|/maptoicon( _filename_,  _progid_,  _size_)|
|**Parameters**| filenameType: StringThe file name. If this parameter is empty, the server returns an empty string.progidType: StringThe ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.sizeType: Int32The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1. |
|**HTTP method**|GET|
|**Response**|Type:  **String** The name of the icon image file.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /maptoicon(filename='spectemplate.docx', progid='', size=0)",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### ProcessExternalNotification method
<a name="bk_WebProcessExternalNotification"> </a>

Processes a notification from an external system.
 

 

|||
|:-----|:-----|
|**Endpoint**|/processexternalnotification|
|**Parameters**| streamType: StreamThe notification message from the external system. |
|**HTTP method**|POST|
|**Response**|Type:  **String** The processing status:  **Success** indicates successful processing, **SubscriptionNotRequired** indicates that the subscription is no longer required and can be safely deleted.|

#### RegisterPushNotificationSubscriber method
<a name="bk_WebRegisterPushNotificationSubscriber"> </a>

Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
 

 

|||
|:-----|:-----|
|**Endpoint**|/registerpushnotificationsubscriber( _deviceappinstanceid_,  _servicetoken_)|
|**Parameters**| deviceappinstanceidType: GUIDThe ID of the device app instance.servicetokenType: StringThe token provided by the notification service to the device to receive notifications. |
|**HTTP method**|POST|
|**Response**|Type:  **SP.PushNotificationSubscriber** The registered push notification subscriber.|

#### ResetRoleInheritance method
<a name="bk_WebResetRoleInheritance"> </a>

Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
 

 

|||
|:-----|:-----|
|**Endpoint**|/resetroleinheritance|
|**Parameters**|None|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /resetroleinheritance",
  method: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### UnregisterPushNotificationSubscriber method
<a name="bk_WebUnregisterPushNotificationSubscriber"> </a>

Unregisters the subscriber for push notifications from the site.
 

 

|||
|:-----|:-----|
|**Endpoint**|/unregisterpushnotificationsubscriber(' _<device app instance id>_')|
|**Parameters**|Type:  **GUID** The ID of the device app instance.|
|**HTTP method**|POST|
|**Response**|None|

### OData representation
<a name="bk_WebOData"> </a>

The following example represents a  [Web](webs-rest-api-reference.md#bk_Web) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"https://<site url>/_api/Web",
    "uri":"https://<site url>/_api/Web",
    "type":"SP.Web"
  },
  "FirstUniqueAncestorSecurableObject":{"__deferred":{"uri":"https://<site url>/_api/Web/FirstUniqueAncestorSecurableObject"}},
  "RoleAssignments":{"__deferred":{"uri":"https://<site url>/_api/Web/RoleAssignments"}},
  "AllProperties":{"__deferred":{"uri":"https://<site url>/_api/Web/AllProperties"}},
  "AssociatedMemberGroup":{"__deferred":{"uri":"https://<site url>/_api/Web/AssociatedMemberGroup"}},
  "AssociatedOwnerGroup":{"__deferred":{"uri":"https://<site url>/_api/Web/AssociatedOwnerGroup"}},
  "AssociatedVisitorGroup":{"__deferred":{"uri":"https://<site url>/_api/Web/AssociatedVisitorGroup"}},
  "AvailableContentTypes":{"__deferred":{"uri":"https://<site url>/_api/Web/AvailableContentTypes"}},
  "AvailableFields":{"__deferred":{"uri":"https://<site url>/_api/Web/AvailableFields"}},
  "ContentTypes":{"__deferred":{"uri":"https://<site url>/_api/Web/ContentTypes"}},
  "CurrentUser":{"__deferred":{"uri":"https://<site url>/_api/Web/CurrentUser"}},
  "DescriptionResource":{"__deferred":{"uri":"https://<site url>/_api/Web/DescriptionResource"}},
  "EventReceivers":{"__deferred":{"uri":"https://<site url>/_api/Web/EventReceivers"}},
  "Features":{"__deferred":{"uri":"https://<site url>/_api/Web/Features"}},
  "Fields":{"__deferred":{"uri":"https://<site url>/_api/Web/Fields"}},
  "Folders":{"__deferred":{"uri":"https://<site url>/_api/Web/Folders"}},
  "Lists":{"__deferred":{"uri":"https://<site url>/_api/Web/Lists"}},
  "ListTemplates":{"__deferred":{"uri":"https://<site url>/_api/Web/ListTemplates"}},
  "Navigation":{"__deferred":{"uri":"https://<site url>/_api/Web/Navigation"}},
  "ParentWeb":{"__deferred":{"uri":"https://<site url>/_api/Web/ParentWeb"}},
  "PushNotificationSubscribers":{"__deferred":{"uri":"https://<site url>/_api/Web/PushNotificationSubscribers"}},
  "RecycleBin":{"__deferred":{"uri":"https://<site url>/_api/Web/RecycleBin"}},
  "RegionalSettings":{"__deferred":{"uri":"https://<site url>/_api/Web/RegionalSettings"}},
  "RoleDefinitions":{"__deferred":{"uri":"https://<site url>/_api/Web/RoleDefinitions"}},
  "RootFolder":{"__deferred":{"uri":"https://<site url>/_api/Web/RootFolder"}},
  "SiteGroups":{"__deferred":{"uri":"https://<site url>/_api/Web/SiteGroups"}},
  "SiteUserInfoList":{"__deferred":{"uri":"https://<site url>/_api/Web/SiteUserInfoList"}},
  "SiteUsers":{"__deferred":{"uri":"https://<site url>/_api/Web/SiteUsers"}},
  "ThemeInfo":{"__deferred":{"uri":"https://<site url>/_api/Web/ThemeInfo"}},
  "TitleResource":{"__deferred":{"uri":"https://<site url>/_api/Web/TitleResource"}},
  "UserCustomActions":{"__deferred":{"uri":"https://<site url>/_api/Web/UserCustomActions"}},
  "Webs":{"__deferred":{"uri":"https://<site url>/_api/Web/Webs"}},
  "WebInfos":{"__deferred":{"uri":"https://<site url>/_api/Web/WebInfos"}},
  "WorkflowAssociations":{"__deferred":{"uri":"https://<site url>/_api/Web/WorkflowAssociations"}},
  "WorkflowTemplates":{"__deferred":{"uri":"https://<site url>/_api/Web/WorkflowTemplates"}},
  "AllowRssFeeds":true,
  "AppInstanceId":"d025f690-8281-4cb7-ab11-04793e232661",
  "Configuration":0,
  "Created":"2014-02-27T20:08:25",
  "CustomMasterUrl":"/_catalogs/masterpage/app.master",
  "Description":"",
  "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled":false,
  "EnableMinimalDownload":false,
  "Id":"ba0bfd3d-ba13-4400-aacf-f60d56eecfbc",
  "Language":1033,
  "LastItemModifiedDate":"2014-02-27T20:08:28Z",
  "MasterUrl":"/_catalogs/masterpage/app.master",
  "QuickLaunchEnabled":true,
  "RecycleBinEnabled":true,
  "ServerRelativeUrl":"",
  "SyndicationEnabled":true,
  "Title":"ParseUm",
  "TreeViewEnabled":false,
  "UIVersion":15,
  "UIVersionConfigurationEnabled":false,
  "Url":"https://<site url>",
  "WebTemplate":"APP"
}}
```


## WebCollection resource
<a name="bk_WebCollection"> </a>

 [Endpoint URI](webs-rest-api-reference.md#bk_WebCollectionEndpoint) | [Methods](webs-rest-api-reference.md#bk_WebCollectionMethods) | [OData representation](webs-rest-api-reference.md#bk_WebCollectionOData)
 

 
Represents a collection of sites.
 

 

### Endpoint URI
<a name="bk_WebCollectionEndpoint"> </a>

http:// _<site url>_/_api/web/webs
 

 

#### Supported HTTP methods

GET | POST
 

 

#### Request examples
<a name="bk_WebCollectionRequestExamples"> </a>

 **GET request example:** Get all the subsites in a site
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/webs",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

 **POST request example:** Create a site by using the [Add method](webs-rest-api-reference.md#bk_WebCollectionAdd)
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/webs/add",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.WebCreationInformation' },
    'Title': 'Social Meetup', 'Url': 'social', 'WebTemplate': 'MPS#3',
    'UseSamePermissionsAsParentSite': true } }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

Or you can use the  **Add** method from the **WebInformationCollection** resource, as shown in [Creating a site with REST](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#bk_CreateSite).
 

 
See  [Web request examples](webs-rest-api-reference.md#bk_WebRequestExamples) for examples that show how to change or delete a site.
 

 

### WebCollection methods
<a name="bk_WebCollectionMethods"> </a>

 [Add](webs-rest-api-reference.md#bk_WebCollectionAdd)
 

 

#### Add method
<a name="bk_WebCollectionAdd"> </a>

Adds a new Web site to the collection.
 

 

|||
|:-----|:-----|
|**Endpoint**|/add|
|**Parameters**| parametersType: SP.WebCreationInformationThe properties of the new site. Send this parameter in the request body, as shown in the request example. |
|**HTTP method**|POST|
|**Response**|Type:  [SP.Web](webs-rest-api-reference.md#bk_Web) The new site.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/webs
    /add",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.WebCreationInformation' },
    'Title': 'Social Meetup', 'Url': 'social', 'WebTemplate': 'MPS#3',
    'UseSamePermissionsAsParentSite': true } }",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

Use the  [GetAvailableWebTemplates method](webs-rest-api-reference.md#bk_WebGetAvailableWebTemplates) to get the names of available site templates.
 

 

### OData representation
<a name="bk_WebCollectionOData"> </a>

The following example represents a  [WebCollection](webs-rest-api-reference.md#bk_WebCollection) resource in JSON format.
 

 

```
{"d":{
  "results":[{
      "__metadata":{
        "id":"https://<site url>/_api/Web",
        "uri":"https://<site url>/_api/Web",
        "type":"SP.Web"
      },
      "FirstUniqueAncestorSecurableObject":{"__deferred":{"uri":"https://<site url>/_api/Web/FirstUniqueAncestorSecurableObject"}},
      "RoleAssignments":{"__deferred":{"uri":"https://<site url>/_api/Web/RoleAssignments"}},
      "AllProperties":{"__deferred":{"uri":"https://<site url>/_api/Web/AllProperties"}},
      "AssociatedMemberGroup":{"__deferred":{"uri":"https://<site url>/_api/Web/AssociatedMemberGroup"}},
      "AssociatedOwnerGroup":{"__deferred":{"uri":"https://<site url>/_api/Web/AssociatedOwnerGroup"}},
      "AssociatedVisitorGroup":{"__deferred":{"uri":"https://<site url>/_api/Web/AssociatedVisitorGroup"}},
      "AvailableContentTypes":{"__deferred":{"uri":"https://<site url>/_api/Web/AvailableContentTypes"}},
      "AvailableFields":{"__deferred":{"uri":"https://<site url>/_api/Web/AvailableFields"}},
      "ContentTypes":{"__deferred":{"uri":"https://<site url>/_api/Web/ContentTypes"}},
      "CurrentUser":{"__deferred":{"uri":"https://<site url>/_api/Web/CurrentUser"}},
      "DescriptionResource":{"__deferred":{"uri":"https://<site url>/_api/Web/DescriptionResource"}},
      "EventReceivers":{"__deferred":{"uri":"https://<site url>/_api/Web/EventReceivers"}},
      "Features":{"__deferred":{"uri":"https://<site url>/_api/Web/Features"}},
      "Fields":{"__deferred":{"uri":"https://<site url>/_api/Web/Fields"}},
      "Folders":{"__deferred":{"uri":"https://<site url>/_api/Web/Folders"}},
      "Lists":{"__deferred":{"uri":"https://<site url>/_api/Web/Lists"}},
      "ListTemplates":{"__deferred":{"uri":"https://<site url>/_api/Web/ListTemplates"}},
      "Navigation":{"__deferred":{"uri":"https://<site url>/_api/Web/Navigation"}},
      "ParentWeb":{"__deferred":{"uri":"https://<site url>/_api/Web/ParentWeb"}},
      "PushNotificationSubscribers":{"__deferred":{"uri":"https://<site url>/_api/Web/PushNotificationSubscribers"}},
      "RecycleBin":{"__deferred":{"uri":"https://<site url>/_api/Web/RecycleBin"}},
      "RegionalSettings":{"__deferred":{"uri":"https://<site url>/_api/Web/RegionalSettings"}},
      "RoleDefinitions":{"__deferred":{"uri":"https://<site url>/_api/Web/RoleDefinitions"}},
      "RootFolder":{"__deferred":{"uri":"https://<site url>/_api/Web/RootFolder"}},
      "SiteGroups":{"__deferred":{"uri":"https://<site url>/_api/Web/SiteGroups"}},
      "SiteUserInfoList":{"__deferred":{"uri":"https://<site url>/_api/Web/SiteUserInfoList"}},
      "SiteUsers":{"__deferred":{"uri":"https://<site url>/_api/Web/SiteUsers"}},
      "ThemeInfo":{"__deferred":{"uri":"https://<site url>/_api/Web/ThemeInfo"}},
      "TitleResource":{"__deferred":{"uri":"https://<site url>/_api/Web/TitleResource"}},
      "UserCustomActions":{"__deferred":{"uri":"https://<site url>/_api/Web/UserCustomActions"}},
      "Webs":{"__deferred":{"uri":"https://<site url>/_api/Web/Webs"}},
      "WebInfos":{"__deferred":{"uri":"https://<site url>/_api/Web/WebInfos"}},
      "WorkflowAssociations":{"__deferred":{"uri":"https://<site url>/_api/Web/WorkflowAssociations"}},
      "WorkflowTemplates":{"__deferred":{"uri":"https://<site url>/_api/Web/WorkflowTemplates"}},
      "AllowRssFeeds":true,
      "AppInstanceId":"9f85a4a6-3609-44d6-9427-e7a5f16ceeeb",
      "Configuration":0,
      "Created":"2013-10-03T19:45:27",
      "CustomMasterUrl":"/apppart/_catalogs/masterpage/app.master",
      "Description":"",
      "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled":false,
      "EnableMinimalDownload":false,
      "Id":"2dbf86de-6538-4d1a-b4fe-2a8e9816d692",
      "Language":1033,
      "LastItemModifiedDate":"2013-10-03T19:45:30Z",
      "MasterUrl":"/apppart/_catalogs/masterpage/app.master",
      "QuickLaunchEnabled":true,
      "RecycleBinEnabled":true,
      "ServerRelativeUrl":"/apppart",
      "SyndicationEnabled":true,
      "Title":"apppart",
      "TreeViewEnabled":false,
      "UIVersion":15,
      "UIVersionConfigurationEnabled":false,
      "Url":"https://<site url>",
      "WebTemplate":"APP"
    },{
    "__metadata":{
      "id":"https://<site url>,
      "uri":"https://<site url>,
      "type":"SP.Web"
    },
      "FirstUniqueAncestorSecurableObject":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/FirstUniqueAncestorSecurableObject"}},
      "RoleAssignments":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/RoleAssignments"}},
      "AllProperties":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/AllProperties"}},
      "AssociatedMemberGroup":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/AssociatedMemberGroup"}},
      "AssociatedOwnerGroup":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/AssociatedOwnerGroup"}},
      "AssociatedVisitorGroup":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/AssociatedVisitorGroup"}},
      "AvailableContentTypes":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/AvailableContentTypes"}},
      "AvailableFields":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/AvailableFields"}},
      "ContentTypes":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/ContentTypes"}},
      "CurrentUser":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/CurrentUser"}},
      "DescriptionResource":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/DescriptionResource"}},
      "EventReceivers":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/EventReceivers"}},
      "Features":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/Features"}},
      "Fields":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/Fields"}},
      "Folders":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/Folders"}},
      "Lists":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/Lists"}},
      "ListTemplates":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/ListTemplates"}},
      "Navigation":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/Navigation"}},
      "ParentWeb":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/ParentWeb"}},
      "PushNotificationSubscribers":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/PushNotificationSubscribers"}},
      "RecycleBin":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/RecycleBin"}},
      "RegionalSettings":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/RegionalSettings"}},
      "RoleDefinitions":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/RoleDefinitions"}},
      "RootFolder":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/RootFolder"}},
      "SiteGroups":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/SiteGroups"}},
      "SiteUserInfoList":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/SiteUserInfoList"}},
      "SiteUsers":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/SiteUsers"}},
      "ThemeInfo":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/ThemeInfo"}},
      "TitleResource":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/TitleResource"}},
      "UserCustomActions":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/UserCustomActions"}},
      "Webs":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/Webs"}},
      "WebInfos":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/WebInfos"}},
      "WorkflowAssociations":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/WorkflowAssociations"}},
      "WorkflowTemplates":{"__deferred":{"uri":"https://<site url>/TeamProjects/_api/Web/WorkflowTemplates"}},
      "AllowRssFeeds":true,
      "AppInstanceId":"00000000-0000-0000-0000-000000000000",
      "Configuration":0,
      "Created":"2014-02-28T21:41:11",
      "CustomMasterUrl":"/TeamProjects/_catalogs/masterpage/seattle.master",
      "Description":"",
      "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled":false,
      "EnableMinimalDownload":true,
      "Id":"3a37226d-8f0b-41bd-a720-6f63fd1e2abb",
      "Language":1033,
      "LastItemModifiedDate":"2014-02-28T21:41:23Z",
      "MasterUrl":"/TeamProjects/_catalogs/masterpage/seattle.master",
      "QuickLaunchEnabled":true,
      "RecycleBinEnabled":true,
      "ServerRelativeUrl":"/TeamProjects",
      "SyndicationEnabled":true,
      "Title":"Team projects",
      "TreeViewEnabled":false,
      "UIVersion":15,
      "UIVersionConfigurationEnabled":false,
      "Url":"https://<site url>/TeamProjects",
      "WebTemplate":"STS"
    },{
      ...
    }
  }]
}}
```


## Additional resources
<a name="bk_AdditionalResources"> </a>


-  [REST API reference and samples](rest-api-reference-and-samples.md)
    
 
-  [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/get-to-know-the-sharepoint-2013-rest-service%28Office.15%29.aspx)
    
 
-  [Complete basic operations using SharePoint 2013 REST endpoints](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx)
    
 
-  [Access SharePoint 2013 data from add-ins using the cross-domain library](http://msdn.microsoft.com/library/access-sharepoint-2013-data-from-add-ins-using-the-cross-domain-library%28Office.15%29.aspx)
    
 
-  [OAuth authentication and authorization flow for cloud-hosted apps](http://msdn.microsoft.com/library/context-token-oauth-flow-for-sharepoint-add-ins%28Office.15%29.aspx)
    
 
-  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/use-odata-query-operations-in-sharepoint-rest-requests%28Office.15%29.aspx)
    
 
