---
title: REST API reference and samples
ms.prod: SHAREPOINT
ms.assetid: 02128c70-9d27-4388-9374-a11bce68fdb8
ms.locale: en-US
---


# REST API reference and samples
Find documentation on MSDN about the SharePoint 2013 representational state transfer (REST) interface.
 
This page contains links to commonly used REST resources that are available for SharePoint 2013 developers.
 

 **Last modified:** November 17, 2015
 

 * **Applies to:** apps for SharePoint | SharePoint Foundation 2013 | SharePoint Server 2013* 
 

**Watch the video: SharePoint 2013 REST and OData fundamentals**

 

 
![Videos](images/mod_icon_video.png)
 

 

 

 **Tip**  The SharePoint Online REST service supports combining multiple requests into a single call to the service by using the OData  `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](http://msdn.microsoft.com/library/make-batch-requests-with-the-rest-apis%28Office.15%29.aspx). This option is not yet supported for on-premise SharePoint.
 


## SharePoint 2013 REST reference
<a name="Reference"> </a>


 **Note**  Some of the following links open to the documentation for the corresponding JavaScript object, which displays the REST endpoint at the bottom of the page.
 


**REST core endpoints**


|**Resource**|**Description**|
|:-----|:-----|
| [SP.ChangeCollection object](http://msdn.microsoft.com/library/528b8776-f295-77ff-5403-a3556b4f3081%28Office.15%29.aspx)|Represents a collection of  [SP.Change](00548ce1-e09c-db03-39ca-bac0ea869a7c.md) objects.|
| [SP.EventReceiverDefinitionCollection object](http://msdn.microsoft.com/library/1a495e76-00ab-4e20-e824-c3612458448d%28Office.15%29.aspx)|Represents a collection of  [EventReceiverDefinition](7d78e562-fb0e-2e87-aa47-022aa0c5848c.md) objects that are used to enumerate a list of registered event receivers for Microsoft SharePoint Foundation objects.|
| [SP.EventReceiverDefinition object](http://msdn.microsoft.com/library/7d78e562-fb0e-2e87-aa47-022aa0c5848c%28Office.15%29.aspx)||
| [SP.FeatureCollection object](http://msdn.microsoft.com/library/ab02330d-3102-8342-5641-a9a4f6a48772%28Office.15%29.aspx)|Represents a collection of  [SP.Feature](e998df87-9250-17d1-737d-a37092f36ec8.md) objects.|
| [SP.Feature object](http://msdn.microsoft.com/library/e998df87-9250-17d1-737d-a37092f36ec8%28Office.15%29.aspx)|Represents an activated feature.|
| [SP.RecycleBinItemCollection object](http://msdn.microsoft.com/library/e182d87a-b0be-dc3e-ba9e-69f9148e9366%28Office.15%29.aspx)|Represents a collection of  [SP.RecycleBinItem](4109c8f7-2dbe-95db-a0b2-064da24f4ed9.md) objects.|
| [SP.RecycleBinItem object](http://msdn.microsoft.com/library/4109c8f7-2dbe-95db-a0b2-064da24f4ed9%28Office.15%29.aspx)|Represents a Recycle Bin item in the Recycle Bin of a site or a site collection.|
| [SP.RegionalSettings object](http://msdn.microsoft.com/library/fcf7b8c8-c595-8646-6d60-7ae27084848d%28Office.15%29.aspx)|Represents regional settings that are used on the server that is running Microsoft SharePoint Foundation.|
| [SP.Site object](http://msdn.microsoft.com/library/d3169eb6-882f-180a-2159-34301f66746a%28Office.15%29.aspx)|Represents a collection of sites in a Web application, including a top-level Web site and all its subsites.|
| [SP.TimeZoneCollection object](http://msdn.microsoft.com/library/95b45caa-c88f-2f53-c99e-738859d7bb93%28Office.15%29.aspx)||
| [SP.TimeZone object](http://msdn.microsoft.com/library/5bef51e2-c86c-1821-0462-0749e77f9be3%28Office.15%29.aspx)||
| [Web](webs-rest-api-reference.md#bk_Web)|Represents a SharePoint site.|
| [SP.WebTemplateCollection object](http://msdn.microsoft.com/library/c6e8b2c8-4f0f-bfda-2626-49c59ef92844%28Office.15%29.aspx)|Specifies a collection of site templates.|
| [SP.WebTemplate object](http://msdn.microsoft.com/library/cd670582-20a3-30b7-20f5-758be6d838da%28Office.15%29.aspx)|Specifies a site definition or a site template that is used to instantiate a site.|

**REST list-related endpoints**


|**Resource**|**Description**|
|:-----|:-----|
| [ListCollection](lists-and-list-items-rest-api-reference.md#bk_ListCollection)|Represents a collection of  [List](lists-and-list-items-rest-api-reference.md#bk_List) resources.|
| [List](lists-and-list-items-rest-api-reference.md#bk_List)|Represents a list on a SharePoint Web site.|
| [ListItemCollection](lists-and-list-items-rest-api-reference.md#bk_ListItemCollection)|Represents a collection of  [ListItem](lists-and-list-items-rest-api-reference.md#bk_ListItem) resources.|
| [ListItem](lists-and-list-items-rest-api-reference.md#bk_ListItem)|Represents an item or row in a list.|
| [SP.ContentTypeCollection object](http://msdn.microsoft.com/library/e89cc14d-40ea-5e7a-c3db-efe7e6697445%28Office.15%29.aspx)|Represents a collection of Web site or list content types.|
| [SP.ContentType object](http://msdn.microsoft.com/library/5418f5ad-8a47-3bf7-a8ac-99b10ba04294%28Office.15%29.aspx)|Represents a website, or list, content type.|
| [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection)|Represents a collection of  [Field](fields-rest-api-reference.md#bk_Field) resources.|
| [Field](fields-rest-api-reference.md#bk_Field)|Represents a field in a list on a Microsoft SharePoint Foundation Web site.|
| [SP.FieldLinkCollection object](http://msdn.microsoft.com/library/5172a3fe-0dc1-a730-2a4d-e4b87eb18d08%28Office.15%29.aspx)|Represents a collection of  [SP.FieldLink](5dc71a19-3260-20fa-73ed-3de3cde37825.md) objects that are column or field references in a content type.|
| [SP.FieldLink object](http://msdn.microsoft.com/library/5dc71a19-3260-20fa-73ed-3de3cde37825%28Office.15%29.aspx)|Specifies a reference to a field or field definition for a content type.|
| [SP.FormCollection object](http://msdn.microsoft.com/library/ff3063e8-1c4f-ca12-d625-4cc13f94b628%28Office.15%29.aspx)|Represents a collection of  [SP.Form](8d5429c4-c218-a17e-51ee-1d34914d5550.md) objects for a list.|
| [SP.Form object](http://msdn.microsoft.com/library/8d5429c4-c218-a17e-51ee-1d34914d5550%28Office.15%29.aspx)|A form provides a display and editing interface for a single list item.|
| [SP.InformationRightsManagementSettings object](http://msdn.microsoft.com/library/ec4635a9-795b-961d-7bf9-0b9488981647%28Office.15%29.aspx)||
| [SP.ListTemplateCollection object](http://msdn.microsoft.com/library/7fa8a6c3-883d-aa0f-5706-1634d2e8af29%28Office.15%29.aspx)|Represents a collection of  [SP.ListTemplate](5335d27f-4079-cbb4-8051-ba2666e8ef8f.md) objects.|
| [SP.ListTemplate object](http://msdn.microsoft.com/library/5335d27f-4079-cbb4-8051-ba2666e8ef8f%28Office.15%29.aspx)|Specifies a list template.|
| [SP.RelatedFieldCollection object](http://msdn.microsoft.com/library/6bc17fda-5ac3-4cc9-bc44-563c04d90216%28Office.15%29.aspx)|Represents a collection of  [SP.RelatedField](edc6215f-6830-03b6-2ea9-ed3ac0af60cb.md) objects storing properties of relationship lookup fields.|
| [SP.RelatedField object](http://msdn.microsoft.com/library/edc6215f-6830-03b6-2ea9-ed3ac0af60cb%28Office.15%29.aspx)|Specifies a relationship to a lookup field.|
| [ViewCollection](lists-and-list-items-rest-api-reference.md#bk_ViewCollection)|Represents a collection of  [View](lists-and-list-items-rest-api-reference.md#bk_View) resources.|
| [View](lists-and-list-items-rest-api-reference.md#bk_View)|Specifies a list view.|
| [ViewFieldCollection](lists-and-list-items-rest-api-reference.md#bk_View)|Represents a collection of fields in a list view.|

**REST endpoints for files and folders**


|**Resource**|**Description**|
|:-----|:-----|
| [FileCollection](files-and-folders-rest-api-reference.md#bk_FileCollection)|Represents a collection of  [File](files-and-folders-rest-api-reference.md#bk_File) resources.|
| [File](files-and-folders-rest-api-reference.md#bk_File)|Represents a file in a SharePoint Web site that can be a Web Part Page, an item in a document library, or a file in a folder.|
| [FileVersionCollection](files-and-folders-rest-api-reference.md#bk_FileVersionCollection)|Represents a collection of  [FileVersion](files-and-folders-rest-api-reference.md#bk_FileVersion) resources.|
| [FileVersion](files-and-folders-rest-api-reference.md#bk_FileVersion)|Represents a version of an  [File](files-and-folders-rest-api-reference.md#bk_File) resource.|
| [FolderCollection](files-and-folders-rest-api-reference.md#bk_FolderCollection)|Represents a collection of  [Folder](files-and-folders-rest-api-reference.md#bk_Folder) resources.|
| [Folder](files-and-folders-rest-api-reference.md#bk_Folder)|Represents a folder on a SharePoint Web site.|

**REST endpoints for users and groups**


|**Resource**|**Description**|
|:-----|:-----|
| [GroupCollection](users-groups-and-roles-rest-api-reference.md#bk_GroupCollection)|Represents a collection of  [Group](users-groups-and-roles-rest-api-reference.md#bk_Group) resources.|
| [Group](users-groups-and-roles-rest-api-reference.md#bk_Group)|Represents a group on a Microsoft SharePoint Foundation website.|
| [RoleAssignmentCollection](users-groups-and-roles-rest-api-reference.md#bk_RoleAssignmentCollection)|Represents a collection of  [RoleAssignment](users-groups-and-roles-rest-api-reference.md#bk_RoleAssignment) resources that defines all the role assignments for a securable object.|
| [RoleAssignment](users-groups-and-roles-rest-api-reference.md#bk_RoleAssignment)|Defines the securable object role assignments for a user or group on the Web site, list, or list item.|
| [RoleDefinitionCollection](users-groups-and-roles-rest-api-reference.md#bk_RoleDefinitionCollection)|Represents the collection of  [RoleDefinition](users-groups-and-roles-rest-api-reference.md#bk_RoleDefinition) resources which define the role definitions that are available for use within the site.|
| [RoleDefinition](users-groups-and-roles-rest-api-reference.md#bk_RoleDefinition)|Defines a single role definition, including a name, description, and set of rights.|
| [RoleDefinitionBindingCollection](users-groups-and-roles-rest-api-reference.md#bk_RoleDefinitionBindingCollection)|Defines the role definitions that are bound to a role assignment object.|
| [UserCollection](users-groups-and-roles-rest-api-reference.md#bk_UserCollection)|Represents a collection of  [User](users-groups-and-roles-rest-api-reference.md#bk_User) resources.|
| [User](users-groups-and-roles-rest-api-reference.md#bk_User)|Represents a user in Microsoft SharePoint Foundation.|
| [UserCustomActionCollection](users-groups-and-roles-rest-api-reference.md#bk_UserCustomActionCollection)|Represents a collection of  [UserCustomAction](users-groups-and-roles-rest-api-reference.md#bk_UserCustomAction) resources.|
| [UserCustomAction](users-groups-and-roles-rest-api-reference.md#bk_UserCustomAction)|Represents a custom action associated with a SharePoint list, Web site, or subsite.|

**REST complex types**


|**Resource**|**Description**|
|:-----|:-----|
| [AppLicense](complex-types-in-the-sp-namespace.md#bk_AppLicense)|Represents an app license for the specified user for the specified SharePoint Add-in.|
| [AppLicenseCollection](complex-types-in-the-sp-namespace.md#bk_AppLicenseCollection)||
| [AppPrincipalConfiguration](complex-types-in-the-sp-namespace.md#bk_AppPrincipalConfiguration)|The configuration associated with an app principal.|
| [AppPrincipalCredentialReference](complex-types-in-the-sp-namespace.md#bk_AppPrincipalCredentialReference)|Represents a reference to a credential for an app principal.|
| [BasePermissions](complex-types-in-the-sp-namespace.md#bk_BasePermissions)|Represents base permissions for a role definition.|
| [CamlQuery](complex-types-in-the-sp-namespace.md#bk_CamlQuery)|Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.|
| [ChangeLogItemQuery](complex-types-in-the-sp-namespace.md#bk_ChangeLogItemQuery)|Represents the input parameter of the  **GetListItemChangesSinceToken** method.|
| [ChangeQuery](complex-types-in-the-sp-namespace.md#bk_ChangeQuery)|Defines a query that is performed against the change log.|
| [ChangeToken](complex-types-in-the-sp-namespace.md#bk_ChangeToken)|Represents the unique sequential location of a change within the change log.|
| [ContentTypeCreationInformation](complex-types-in-the-sp-namespace.md#bk_ContentTypeCreationInformation)|Specifies properties that are used as parameters to initialize a new content type.|
| [ContentTypeId](complex-types-in-the-sp-namespace.md#bk_ContentTypeId)|Represents the content type identifier (ID) of a content type.|
| [ContextWebInformation](complex-types-in-the-sp-namespace.md#bk_ContextWebInformation)|The context information for a site.|
| [DocumentLibraryInformation](complex-types-in-the-sp-namespace.md#bk_DocumentLibraryInformation)|Represents information about a document library.|
| [EventReceiverDefinitionCreationInformation](complex-types-in-the-sp-namespace.md#bk_EventReceiverDefinitionCreationInformation)|Specifies event receiver creation information.|
| [ExternalAppPrincipalCreationParameters](complex-types-in-the-sp-namespace.md#bk_ExternalAppPrincipalCreationParameters)|Represents the object that encapsulates all parameters used to create a new external app principal.|
| [FieldCalculatedErrorValue](complex-types-in-the-sp-namespace.md#bk_FieldCalculatedErrorValue)|Represents the value of the calculated field of a list item when the value of the field is a calculation error, such as division by zero or overflow.|
| [FieldCreationInformation](complex-types-in-the-sp-namespace.md#bk_FieldCreationInformation)|Represents properties that can be set when creating a field.|
| [FieldGeolocationValue](complex-types-in-the-sp-namespace.md#bk_FieldGeolocationValue)|Represents altitude, latitude, longitude and measure values for a geolocation field.|
| [FieldLookupValue](complex-types-in-the-sp-namespace.md#bk_FieldLookupValue)|Specifies the value of a lookup for a field within a list item.|
| [FieldRatingScaleQuestionAnswer](complex-types-in-the-sp-namespace.md#bk_FieldRatingScaleQuestionAnswer)|Represents a specific sub question and answer within a rating scale field of a list item.|
| [FieldUrlValue](complex-types-in-the-sp-namespace.md#bk_FieldUrlValue)|Specifies the hyperlink and the description values for FieldURL.|
| [FieldUserValue](complex-types-in-the-sp-namespace.md#bk_FieldUserValue)|Represents the value of a user field for a list item.|
| [FileCreationInformation](complex-types-in-the-sp-namespace.md#bk_FileCreationInformation)|Represents properties that can be set when creating a file by using the  **FileCollection.Add** method.|
| [GroupCreationInformation](complex-types-in-the-sp-namespace.md#bk_GroupCreationInformation)|An object used to facilitate creation of a cross-site group.|
| [KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue)|Represents a dictionary of key and value pairs.|
| [Language](complex-types-in-the-sp-namespace.md#bk_Language)|Represents a natural language used within the context of Microsoft SharePoint Foundation.|
| [ListDataSource](complex-types-in-the-sp-namespace.md#bk_ListDataSource)|Represents information associated with a connection to an external data source.|
| [ListDataValidationExceptionValue](complex-types-in-the-sp-namespace.md#bk_ListDataValidationExceptionValue)|The exception that is thrown when the data for a list field or list item fails validation.|
| [ListDataValidationFailure](complex-types-in-the-sp-namespace.md#bk_ListDataValidationFailure)|Describes a specific validation failure when a list item is inserted or updated.|
| [ListItemCollectionPosition](complex-types-in-the-sp-namespace.md#bk_ListItemCollectionPosition)|Specifies the information required to get the next page of data for a list view.|
| [ListItemCreationInformation](complex-types-in-the-sp-namespace.md#bk_ListItemCreationInformation)|Specifies the properties of the new list item.|
| [ListItemFormUpdateValue](complex-types-in-the-sp-namespace.md#bk_ListItemFormUpdateValue)|Represents properties of a list item field and its value.|
| [MenuNode](complex-types-in-the-sp-namespace.md#bk_MenuNode)|Represents a navigation node in the navigation hierarchy. A navigation hierarchy is a tree structure of navigation nodes.|
| [MenuState](complex-types-in-the-sp-namespace.md#bk_MenuState)|Represents the menu state of the default  **SiteMapProvider** ("SPSiteMapProvider") where the dump starts at the site's root node with a depth of 10 levels.|
| [NavigationNodeCreationInformation](complex-types-in-the-sp-namespace.md#bk_NavigationNodeCreationInformation)|Describes a new navigation node to be created.|
| [RelatedItem](complex-types-in-the-sp-namespace.md#bk_RelatedItem)||
| [RenderListDataParameters](complex-types-in-the-sp-namespace.md#bk_RenderListDataParameters)|Represents the parameters to use to render list data as a JavaScript Object Notation (JSON) string.|
| [RoleDefinitionCreationInformation](complex-types-in-the-sp-namespace.md#bk_RoleDefinitionCreationInformation)|Contains properties that are used as parameters to initialize a role definition.|
| [SimpleDataRow](complex-types-in-the-sp-namespace.md#bk_SimpleDataRow)|Represents a row in a data table.|
| [SimpleDataTable](complex-types-in-the-sp-namespace.md#bk_SimpleDataTable)|Represents a data table.|
| [TimeZoneInformation](complex-types-in-the-sp-namespace.md#bk_TimeZoneInformation)|Represents information about a time zone.|
| [UpgradeInfo](complex-types-in-the-sp-namespace.md#bk_UpgradeInfo)|Represents the site collection upgrade information.|
| [UsageInfo](complex-types-in-the-sp-namespace.md#bk_UsageInfo)|Provides fields that are used to access information about site collection usage.|
| [UserCreationInformation](complex-types-in-the-sp-namespace.md#bk_UserCreationInformation)|Parameters to invite a user.|
| [UserIdInfo](complex-types-in-the-sp-namespace.md#bk_UserIdInfo)|Represents an identity provider's unique identifier information.|
| [ViewCreationInformation](complex-types-in-the-sp-namespace.md#bk_ViewCreationInformation)|Specifies the properties used to create a new list view.|
| [WebCreationInformation](complex-types-in-the-sp-namespace.md#bk_WebCreationInformation)|Specifies the properties of a new site.|
| [WebInfoCreationInformation](complex-types-in-the-sp-namespace.md#bk_WebInfoCreationInformation)|Represents metadata about site creation.|
| [WebRequestInfo](complex-types-in-the-sp-namespace.md#bk_WebRequestInfo)|Represents the data from the caller needed to make the outbound web request.|
| [WebResponseInfo](complex-types-in-the-sp-namespace.md#bk_WebResponseInfo)|Contains a copy of the third-party service response.|
| [XmlSchemaFieldCreationInformation](complex-types-in-the-sp-namespace.md#bk_XmlSchemaFieldCreationInformation)|Represents properties that can be set when creating a field.|

## SharePoint 2013 REST overviews
<a name="Overviews"> </a>


****


|**Resource**|**Description**|
|:-----|:-----|
| [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/get-to-know-the-sharepoint-2013-rest-service%28Office.15%29.aspx)|Get the basics of using the SharePoint 2013 REST service to access and update SharePoint data, using the REST and OData web protocol standards.|
| [Complete basic operations using SharePoint 2013 REST endpoints](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx)|Learn how to perform basic CRUD operations with the SharePoint 2013 REST interface.|
| [SharePoint Search REST API overview](http://msdn.microsoft.com/library/8a4f7863-e4c1-4099-9189-a1894db36930%28Office.15%29.aspx)|Add search functionality to client and mobile applications using the Search REST service in SharePoint Server 2013 and any technology that supports REST web requests.|
| [User profiles REST API reference](user-profiles-rest-api-reference.md)|Learn about SharePoint 2013 REST endpoints for user  **PeopleManager**,  **ProfileLoader**,  **UserProfile**, and related resources.|
| [Social feed REST API reference for SharePoint 2013](http://msdn.microsoft.com/library/f1cb914f-1e91-4e23-bf53-d2ab323eac13%28Office.15%29.aspx)|Learn about SharePoint 2013 REST endpoints for feed-related tasks.|
| [Following people and content REST API reference for SharePoint 2013](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx)|Learn about SharePoint 2013 REST endpoints for following people and content.|

## SharePoint 2013 REST code samples
<a name="Samples"> </a>


****


|**Resource**|**Description**|
|:-----|:-----|
| [SharePoint 2013: Hello World remote app using REST](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Hello-25f8c6f1)|Learn how to create a basic "hello world" provider-hosted SharePoint Add-in that uses the SharePoint REST interface to read information about a SharePoint 2013 site from a remote web application.|
| [SharePoint 2013: Using the search REST service from an app for SharePoint](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Perform-a-1bf3e87d)|Learn how to submit a search query to Search in SharePoint 2013 from within an SharePoint Add-in. |
| [SharePoint 2013: Build REST queries and use REST to traverse a site](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Build-REST-b250c64d)|Learn how to use the SharePoint REST APIs to traverse a SharePoint 2013 site, and to create an app that builds queries that perform basic data operations on basic SharePoint entities that are exposed at REST endpoints.|
| [SharePoint 2013: Perform basic data access operations by using REST in apps](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Perform-335d925b)|Learn how to use the SharePoint REST APIs to perform basic data access operations on SharePoint 2013 lists and list items.|
| [SharePoint 2013: Perform basic data operations on files and folders using REST](http://code.msdn.microsoft.com/SharePoint-2013-Perform-ab9c4ae5)|A code sample using REST and the SharePointJavaScript cross-domain library to perform basic operations on document libraries and files.|
| [SharePoint 2013: Make app-only policy type calls in a remote app (REST)](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Make-app-28141ce6)|Learn how to use the  **AllowAppOnlyPolicy** attribute, with REST and OAuth, to call back into SharePoint 2013.|
| [SharePoint 2013: Accessing external list with REST](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Accessing-a90295d2)|Learn how to create an SharePoint Add-in that will use RESTful URLs to query and manipulate data in an external list.|
| [SharePoint 2013: Use the chrome control and the cross-domain library (REST)](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Use-the-a759e9f8)|Learn how to include a remote webpage that hosts the chrome control and retrieves information from the host web by using the cross-domain library and REST in SharePoint 2013.|
| [SharePoint 2013: Get list items by using the cross-domain library (REST)](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Get-items-7c27024f)|Learn how to use the cross-domain library in SharePoint Add-ins to read items in a list hosted in the app web.|
| [SharePoint 2013: Get the host web title using the cross-domain library (REST)](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Get-the-0ec36bb6)|Learn how to use the cross-domain library in SharePoint 2013 to read the  **title** property of the host web.|
| [Set custom permissions on a list by using the REST interface](http://msdn.microsoft.com/library/set-custom-permissions-on-a-list-by-using-the-rest-interface%28Office.15%29.aspx)|Learn how to define custom, fine-grained permissions on a SharePoint list by using the REST interface and JavaScript.|

## Additional resources
<a name="bk_addresources"> </a>


-  [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/get-to-know-the-sharepoint-2013-rest-service%28Office.15%29.aspx)
    
 
-  [Complete basic operations using SharePoint 2013 REST endpoints](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx)
    
 
-  [Making REST calls with C# and JavaScript for SharePoint 2013](http://www.microsoft.com/resources/msdn/en-us/office/media/video/video.mdl?cid=sdc&amp;from=mscomsdc&amp;VideoID=4e4cc094-ff69-405b-852f-2ac7c41293c5)
    
 
-  [Making REST calls with C# and JavaScript for SharePoint 2013 demo](http://www.microsoft.com/resources/msdn/en-us/office/media/video/video.mdl?cid=sdc&amp;from=mscomsdc&amp;VideoID=b1e7c9c5-0f62-4a78-bb7b-8e283c86145c)
    
 
-  [Develop SharePoint Add-ins](http://msdn.microsoft.com/library/develop-sharepoint-add-ins%28Office.15%29.aspx)
    
 
-  [Secure data access and client object models for SharePoint Add-ins](http://msdn.microsoft.com/library/secure-data-access-and-client-object-models-for-sharepoint-add-ins%28Office.15%29.aspx)
    
 
-  [Work with external data in SharePoint 2013](http://msdn.microsoft.com/library/work-with-external-data-in-sharepoint-2013%28Office.15%29.aspx)
    
 
-  [Open Data Protocol](http://www.odata.org/)
    
 
-  [OData: JavaScript Object Notation (JSON) Format](http://www.odata.org/documentation/odata-version-2-0/JSON-format/)
    
 

 

 

