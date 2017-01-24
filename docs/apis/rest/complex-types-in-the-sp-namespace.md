---
title: Complex types in the SP namespace
ms.prod: MULTIPLEPRODUCTS
ms.assetid: f50f8700-a307-4a67-958d-51388cbb3cb4
ms.locale: en-US
---



# Complex types in the SP namespace
Find complex types from the  **SP** namespace that are used by the SharePoint REST interface.
 

 **Last modified:** March 09, 2015
 

 * **Applies to:** apps for SharePoint | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013* 
 

In the REST interface, complex types are sent in the request body in  **POST**,  **MERGE**, and  **PUT** requests and as method parameters, and they're returned as object and property data types.
 


## AppLicense complex type
<a name="bk_AppLicense"> </a>

Represents an app license for the specified user for the specified SharePoint Add-in.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|RawXMLLicenseToken|**String**|Gets an XML fragment that represents the app license token, which contains license property information.|true|

## AppLicenseCollection complex type
<a name="bk_AppLicenseCollection"> </a>


 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Items|Collection( [SP.AppLicense](complex-types-in-the-sp-namespace.md#bk_AppLicense))|A collection of app licenses.|true|

## AppPrincipalConfiguration complex type
<a name="bk_AppPrincipalConfiguration"> </a>

The configuration associated with an app principal.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|ApplicationEndpointAuthorities|**Collection(String)**|The list of endpoint authorities exposed by the principal.|true|
|ApplicationPrincipalNames|**Collection(String)**|The list of names for the principal.|true|
|NameIdentifier|**String**|The name identifier of the principal.|true|
|RedirectAddresses|**Collection(String)**|The list of redirect addresses for the principal.|true|

## AppPrincipalCredentialReference complex type
<a name="bk_AppPrincipalCredentialReference"> </a>

Represents a reference to a credential for an app principal.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Id|**Guid**|The unique identifier of the principal.|false|
|NameIdentifier|**String**|The name identifier of the principal.|true|
|NotAfter|**DateTime**|The time when this key expires.|false|
|NotBefore|**DateTime**| The time when this key becomes valid.|false|

## BasePermissions complex type
<a name="bk_BasePermissions"> </a>

Represents base permissions for a role definition.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|High|**Int64**|The bitwise high-order boundary (higher 32 bits) of the permission.|false|
|Low|**Int64**|The bitwise low-order boundary (lower 32 bits) of the permission.|false|

## CamlQuery complex type
<a name="bk_CamlQuery"> </a>

Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|DatesInUtc|**Boolean**|Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.|false|
|FolderServerRelativeUrl|**String**|Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned.|true|
|ListItemCollectionPosition| [SP.ListItemCollectionPosition](complex-types-in-the-sp-namespace.md#bk_ListItemCollectionPosition)|Gets or sets a value that specifies the information required to get the next page of data for the list view.|true|
|ViewXml|**String**|Gets or sets value that specifies the XML schema that defines the list view.|true|

## ChangeLogItemQuery complex type
<a name="bk_ChangeLogItemQuery"> </a>

Represents the input parameter of the  **GetListItemChangesSinceToken** method.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|ChangeToken|**String**|The change token for the request.|true|
|Contains|**String**|The XML element that defines custom filtering for the query.|true|
|Query|**String**|The records from the list to return and their return order.|true|
|QueryOptions|**String**|The options for modifying the query.|true|
|RowLimit|**String**|The maximum number of items in the query to return per page.|true|
|ViewFields|**String**|The names of the fields to include in the query result.|true|
|ViewName|**String**|The GUID of the view.|true|

## ChangeQuery complex type
<a name="bk_ChangeQuery"> </a>

Defines a query that is performed against the change log.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Add|**Boolean**|Gets or sets a value that specifies whether add changes are included in the query.|false|
|Alert|**Boolean**|Gets or sets a value that specifies whether changes to alerts are included in the query.|false|
|ChangeTokenEnd| [SP.ChangeToken](complex-types-in-the-sp-namespace.md#bk_ChangeToken)|Gets or sets a value that specifies the end date and end time for changes that are returned through the query.|false|
|ChangeTokenStart| [SP.ChangeToken](complex-types-in-the-sp-namespace.md#bk_ChangeToken)|Gets or sets a value that specifies the start date and start time for changes that are returned through the query.|false|
|ContentType|**Boolean**|Gets or sets a value that specifies whether changes to content types are included in the query.|false|
|DeleteObject|**Boolean**|Gets or sets a value that specifies whether changes to content types are included in the query.|false|
|Field|**Boolean**|Gets or sets a value that specifies whether changes to content types are included in the query.|false|
|File|**Boolean**|Gets or sets a value that specifies whether changes to content types are included in the query.|false|
|Folder|**Boolean**|Gets or sets value that specifies whether changes to folders are included in the query.|false|
|Group|**Boolean**|Gets or sets a value that specifies whether changes to groups are included in the query.|false|
|GroupMembershipAdd|**Boolean**|Gets or sets a value that specifies whether adding users to groups is included in the query.|false|
|GroupMembershipDelete|**Boolean**|Gets or sets a value that specifies whether deleting users from the groups is included in the query.|false|
|Item|**Boolean**|Gets or sets a value that specifies whether general changes to list items are included in the query.|false|
|List|**Boolean**|Gets or sets a value that specifies whether changes to lists are included in the query.|false|
|Move|**Boolean**|Gets or sets a value that specifies whether move changes are included in the query.|false|
|Navigation|**Boolean**|Gets or sets a value that specifies whether changes to the navigation structure of a site collection are included in the query.|false|
|Rename|**Boolean**|Gets or sets a value that specifies whether renaming changes are included in the query.|false|
|Restore|**Boolean**|Gets or sets a value that specifies whether restoring items from the recycle bin or from backups is included in the query.|false|
|RoleAssignmentAdd|**Boolean**|Gets or sets a value that specifies whether adding role assignments is included in the query.|false|
|RoleAssignmentDelete|**Boolean**|Gets or sets a value that specifies whether adding role assignments is included in the query.|false|
|RoleDefinitionAdd|**Boolean**|Gets or sets a value that specifies whether adding role assignments is included in the query.|false|
|RoleDefinitionDelete|**Boolean**|Gets or sets a value that specifies whether adding role assignments is included in the query.|false|
|RoleDefinitionUpdate|**Boolean**|Gets or sets a value that specifies whether adding role assignments is included in the query.|false|
|SecurityPolicy|**Boolean**|Gets or sets a value that specifies whether modifications to security policies are included in the query.|false|
|Site|**Boolean**|Gets or sets a value that specifies whether changes to site collections are included in the query.|false|
|SystemUpdate|**Boolean**|Gets or sets a value that specifies whether updates made using the item  **SystemUpdate** method are included in the query.|false|
|Update|**Boolean**|Gets or sets a value that specifies whether update changes are included in the query.|false|
|User|**Boolean**|Gets or sets a value that specifies whether changes to users are included in the query.|false|
|View|**Boolean**|Gets or sets a value that specifies whether changes to views are included in the query.|false|
|Web|**Boolean**|Gets or sets a value that specifies whether changes to Web sites are included in the query.|false|

## ChangeToken complex type
<a name="bk_ChangeToken"> </a>

Represents the unique sequential location of a change within the change log.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|StringValue|**String**|Gets or sets a string value that contains the serialized representation of the change token generated by the protocol server.|true|

## ContentTypeCreationInformation complex type
<a name="bk_ContentTypeCreationInformation"> </a>

Specifies properties that are used as parameters to initialize a new content type.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Description|**String**|Gets or sets a value that specifies the description of the content type that will be constructed.|true|
|Group|**String**|Gets or sets a value that specifies the content type group of the content type that will be constructed.|true|
|Id|**String**||true|
|Property name|**String**|Gets or sets a value that specifies the name of the content type that will be constructed.|true|

## ContentTypeId complex type
<a name="bk_ContentTypeId"> </a>

Represents the content type identifier (ID) of a content type.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|StringValue|**String**|A string of hex characters that represents the content type ID.|true|

## ContextWebInformation complex type
<a name="bk_ContextWebInformation"> </a>

The context information for a site.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|FormDigestTimeoutSeconds|**Int32**|The amount of time in seconds that the form digest will timeout.|false|
|FormDigestValue|**String**|The form digest value.|true|
|LibraryVersion|**String**|The library version.|true|
|SiteFullUrl|**String**|The full URL of the site collection context.|true|
|SupportedSchemaVersions|**Collection(String)**|The supported client-side object model request schema version.|true|
|WebFullUrl|**String**|The full URL of the site context.|true|

## DocumentLibraryInformation complex type
<a name="bk_DocumentLibraryInformation"> </a>

Represents information about a document library.
 

 


|**Property name**|**Type**|**Description**|**Nullable**|
|:-----|:-----|:-----|:-----|
|Modified|**DateTime**|The last modified date.|false|
|ModifiedFriendlyDisplay|**String**|The friendly display for the last modified date.|true|
|ServerRelativeUrl|**String**|The server-relative URL of the document library.|true|
|Title|**String**|The title of the document library.|true|

## EventReceiverDefinitionCreationInformation complex type
<a name="bk_EventReceiverDefinitionCreationInformation"> </a>

Specifies event receiver creation information.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|EventType|**Int32**|The type of event. See  **EventReceiverType** in the .NET client object model reference for a list of values.|false|
|ReceiverAssembly|**String**|Specifies the strong name of the assembly that is used for receiving events.|true|
|ReceiverClass|**String**|Specifies a string that represents the class that is used for receiving events.|true|
|ReceiverName|**String**|Specifies the name of the event receiver.|true|
|ReceiverUrl|**String**|Specifies the URL of a web service that is used for receiving events.|true|
|SequenceNumber|**Int32**|Specifies an integer that represents the relative sequence of the event.|false|
|Synchronization|**Int32**|Specifies the execution synchronization of the event receiver.|false|

## ExternalAppPrincipalCreationParameters complex type
<a name="bk_ExternalAppPrincipalCreationParameters"> </a>

Represents the object that encapsulates all parameters used to create a new external app principal.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|AppIdentifier|**String**|The unique identifier of the app principal.|true|
|ApplicationEndpointAuthorities|**Collection(String)**|The list of hostname[:port] that expose app endpoints.|true|
|DisplayName|**String**|The display name of the app principal.|true|
|RedirectAddresses|**Collection(String)**|The redirect addresses.|true|
|TrustedForDelegation|**Boolean**|Indicates whether the app principal is trusted for delegation.|false|

## FieldCalculatedErrorValue complex type
<a name="bk_FieldCalculatedError"> </a>

Represents the value of the calculated field of a list item when the value of the field is a calculation error, such as division by zero or overflow.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|ErrorMessage|**String**|Gets the error message of a calculated field.|true|

## FieldCreationInformation complex type
<a name="bk_FieldCreationInformation"> </a>

Represents properties that can be set when creating a field.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Choices|**Collection(String)**|The values that are available for selection in the field.|true|
|IsCompactName|**Boolean**|Indicates whether only the first eight characters are used for the field name.|false|
|LookupFieldName|**String**|The name of the source lookup field.|true|
|LookupListId|**Guid**|The ID of the target list for the source lookup field.|false|
|LookupWebId|**Guid**|The ID of the site that contains the list that is the source for the lookup field value.|false|
|Required|**Boolean**|Gets or sets a value that specifies whether the field requires a value.|false|
|Title|**String**|Gets or sets value that specifies the display name of the field.|true|
|FieldTypeKind|**Int32**|Gets or sets a value that specifies the type of the field.|false|

## FieldGeolocationValue complex type
<a name="bk_FieldGeolocationValue"> </a>

Represents altitude, latitude, longitude and measure values for a geolocation field.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Altitude|**Double**|The user-defined altitude value for a geolocation field.|false|
|Latitude|**Double**|The latitude value for a geolocation field.|false|
|Longitude|**Double**|The longitude value for a geolocation field.|false|
|Measure|**Double**|The user-defined measure value for a geolocation field.|false|

## FieldLookupValue complex type
<a name="bk_FieldLookupValue"> </a>

Specifies the value of a lookup for a field within a list item.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|LookupId|**Int32**|Gets or sets the identifier (ID) of the list item that this instance of the lookup field is referring to.|false|
|LookupValue|**String**|Gets a summary of the list item that this instance of the lookup field is referring to.|true|

## FieldRatingScaleQuestionAnswer complex type
<a name="bk_FieldRatingScaleQuestionAnswer"> </a>

Represents a specific sub question and answer within a rating scale field of a list item.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Answer|**Int32**|Gets or sets value that specifies the answer for a sub question.|false|
|Question|**String**|Gets or sets a value that specifies a sub question within a rating scale.|true|

## FieldUrlValue complex type
<a name="bk_FieldUrlValue"> </a>

Specifies the hyperlink and the description values for FieldURL.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Description|**String**|Gets or sets a value that specifies the description for the URI.|true|
|Url|**String**|Specifies the URI.|true|

## FieldUserValue complex type
<a name="bk_FieldUserValue"> </a>

Represents the value of a user field for a list item. Inherits from  [SP.FieldLookupValue](complex-types-in-the-sp-namespace.md#bk_FieldLookupValue).
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|LookupId|**Int32**|The user ID that the value of a lookup field for user data represents.|false|
|LookupValue|**String**|The user that the value of a lookup field for user data represents.|true|

## FileCreationInformation complex type
<a name="bk_FileCreationInformation"> </a>

Represents properties that can be set when creating a file by using the  **FileCollection.Add** method.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Content|**Binary**|The binary content of the file.|true|
|Overwrite|**Boolean**|Indicates whether to overwrite an existing file with the same name and in the same location as the one being added.|false|
|Url|**String**|The URL of the file.|true|

## GroupCreationInformation complex type
<a name="bk_GroupCreationInformation"> </a>

An object used to facilitate creation of a cross-site group.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Description|**String**|Gets or sets a string that contains the description of the group to be created.|true|
|Title|**String**|Gets or sets a string that contains the name of the group to be created.|true|

## KeyValue complex type
<a name="bk_KeyValue"> </a>

Represents a dictionary of key and value pairs.
 

 

### Properties
<a name="bk_KeyValueProperties"> </a>



|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Key|**String**|The key.|true|
|Value|**String**|The value.|true|
|ValueType|**String**|The value type.|true|

## Language complex type
<a name="bk_Language"> </a>

Represents a natural language used within the context of Microsoft SharePoint Foundation.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|DisplayName|**String**|Represents a natural language used within the context of Microsoft SharePoint Foundation.|true|
|LanguageTag|**String**|Gets the language tag for this language. |true|
|Lcid|**Int32**|Gets the locale identifier (LCID) for the language. |false|

## ListDataSource complex type
<a name="bk_ListDataSource"> </a>

Represents information associated with a connection to an external data source.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Properties|Collection( [SP.KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue))|Gets the properties associated with the connection to the data source.|true|

## ListDataValidationExceptionValue complex type
<a name="bk_ListDataValidationExceptionValue"> </a>

The exception that is thrown when the data for a list field or list item fails validation.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|FieldFailures|Collection( [SP.ListDataValidationFailure](complex-types-in-the-sp-namespace.md#bk_ListDataValidationFailure))|The validation failures for a field.|true|
|ItemFailure| [SP.ListDataValidationFailure](complex-types-in-the-sp-namespace.md#bk_ListDataValidationFailure)|The validation failures for a list item.|true|

## ListDataValidationFailure complex type
<a name="bk_ListDataValidationFailure"> </a>

Describes a specific validation failure when a list item is inserted or updated.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|DisplayName|**String**|Gets the title of the list or the display name of the field where validation failed.|true|
|Message|**String**|Gets a message with information about the failure.|true|
|Name|**String**|Gets the field name or list ID where validation failed.|true|
|Reason |**Int32**|Gets the reason for the failure.|false|
|ValidationType|**Int32**|Describes the type of validation that caused the failure.|false|

## ListItemCollectionPosition complex type
<a name="bk_ListItemCollectionPosition"> </a>

Specifies the information required to get the next page of data for a list view.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|PagingInfo|**String**|Gets or sets a value that specifies information, as name-value pairs, required to get the next page of data for a list view.|true|

## ListItemCreationInformation complex type
<a name="bk_ListItemCreationInformation"> </a>

Specifies the properties of the new list item.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|FolderUrl|**String**|Gets or sets a value that specifies the folder for the new list item.|true|
|LeafName|**String**|Gets or sets a value that specifies the name of the new list item. It must be the name of the file if the parent list of the list item is a document library.|true|
|UnderlyingObjectType|**Int32**|Gets or sets a value that specifies whether the new list item is a file or a folder.|false|

## ListItemFormUpdateValue complex type
<a name="bk_ListItemFormUpdateValue"> </a>

Represents properties of a list item field and its value.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|ErrorMessage|**String**|The error message result after validating the value for the field.|true|
|FieldName|**String**|The internal name of the field.|true|
|FieldValue|**String**|The value of the field.|true|
|HasException|**Boolean**|Indicates whether there was an error result after validating the value for the field.|false|

## MenuNode complex type
<a name="bk_MenuNode"> </a>

Represents a navigation node in the navigation hierarchy. A navigation hierarchy is a tree structure of navigation nodes.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|CustomProperties|Collection( [SP.KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue))|Node properties.|true|
|FriendlyUrlSegment|**String**|The URL of the navigation node relative to the URL of the parent navigation node.|true|
|IsHidden|**Boolean**|Indicates whether the node is hidden in the navigation menu. During editing, all nodes temporarily become visible.|false|
|Key|**String**|The identifier for the navigation node in the menu tree.|true|
|Nodes|Collection( [SP.MenuNode](complex-types-in-the-sp-namespace.md#bk_MenuNode))|The child nodes.|true|
|NodeType|**Int32**|The type of the navigation node.|false|
|SimpleUrl|**String**|The relative or absolute URL of the navigation node. Site-relative URLs can start with the "~site" token and site collection-relative URLs can start with the "~sitecollection" token. Applies only to  **SimpleLink** node types.|true|
|Title|**String**|The title of the navigation node.|true|

## MenuState complex type
<a name="bk_MenuState"> </a>

Represents the menu state of the default  **SiteMapProvider** ("SPSiteMapProvider") where the dump starts at the site's root node with a depth of 10 levels.
 

 
The following parameters are available for querying the menu state: 
 

 

|||
|:-----|:-----|
| _menuNodeKey_|The key of the start node. If no key is provided, the root node is used.|
| _depth_|The depth of the dump. Default is 10.|
| _customProperties_|(Optionally implemented by a site map data provider.) A comma-separated list of custom properties to return. Use the "\" character to escape a comma separator within a property.|
| _mapProviderName_|Specifies which provider on the site is selected. If no  **SiteMapProvider** used, "CurrentNavSiteMapProviderNoEncode" is used.|
 **Example requests:**
 
 `http://<site url>/_api/navigation/menustate?menuNodeKey='1006'&amp;depth=5` returns the menu state of the "SPSiteMapProvider," starting with the node with the key 1006 with a depth of 5.
 
 `http://<site url>/_api/navigation/menustate?depth=5&amp;mapProviderName='CurrentNavSiteMapProviderNoEncode'` returns the menu state of "CurrentNavSiteMapProviderNoEncode" from the root node of the provider with a depth of 5.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|FriendlyUrlPrefix|**String**|Specifies the site collection-relative URL for the root node of the menu tree.|true|
|Nodes|Collection( [SP.MenuNode](complex-types-in-the-sp-namespace.md#bk_MenuNode))|The child nodes of the root node of the menu tree.|true|
|SimpleUrl|**String**|The relative or absolute URL of the navigation node. Site-relative URLs can begin with the "~site" URL token and site collection-relative URLs can begin with the "~sitecollection" URL token. Applies only to  **SimpleLink** node types.|true|
|SPSitePrefix|**String**|The string that replaces the "~sitecollection" token in site collection-relative links. For example, to get the  **Try Link** command to work with the relative link `~sitecollection/Pages/MyPage.aspx`, this value might be  _http://contoso.com/sites/site1/_.|true|
|SPWebPrefix|**String**|The string that replaces the "~site" token in site-relative links. For example, to get the  **Try Link** command to work with the relative link `~site/Pages/MyPage.aspx`, this value might be  `http://contoso.com/sites/site1/web1`.|true|
|StartingNodeKey|**String**|The identifier of the root node in the menu tree.|true|
|StartingNodeTitle|**String**|The title of the root node in the menu tree. (Example: "Document Center")|true|
|Version|**String**|An implementation-specific value that the server uses to detect external changes. For example, it could be a change timestamp for the database or a monotonically increasing version number such as "2009-06-15T20:45:30Z".|true|

## NavigationNodeCreationInformation complex type
<a name="bk_NavigationNodeCreationInformation"> </a>

Describes a new navigation node to be created.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|AsLastNode|**Boolean**|Gets or sets a value that specifies whether the navigation node will be created as the last node in the collection.|false|
|IsExternal|**Boolean**|Gets or sets a value that specifies whether the navigation node URL potentially corresponds to pages outside of the site collection.|false|
|Title|**String**|Gets or sets a value that specifies the anchor text for the node navigation link.|true|
|Url|**String**|Gets or sets a value that specifies the URL to be stored with the navigation node.|true|

## RelatedItem complex type
<a name="bk_RelatedItem"> </a>


 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|IconUrl|**String**||true|
|ItemId|**Int32**||false|
|ListId|**String**||true|
|Title|**String**||true|
|Url|**String**||true|
|WebId|**String**||true|

## RenderListDataParameters complex type
<a name="bk_RenderListDataParameters"> </a>

Represents the parameters to use to render list data as a JavaScript Object Notation (JSON) string.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|FolderServerRelativeUrl|**String**|The URL of the folder to return items from.|true|
|Paging|**String**|The paging information.|true|
|ViewXml|**String**|The Collaborative Application Markup Language (CAML) view XML.|true|

## RoleDefinitionCreationInformation complex type
<a name="bk_RoleDefinitionCreationInformation"> </a>

Contains properties that are used as parameters to initialize a role definition.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|BasePermissions| [SP.BasePermissions](complex-types-in-the-sp-namespace.md#bk_BasePermissions)|Gets or sets a value that specifies the permissions for the role definition.|true|
|Description|**String**|Gets or sets a value that specifies a description of the role definition.|true|
|Property name|**String**|Gets or sets a value that specifies the name of the role definition.|true|
|Order|**Int32**|Gets or sets a value that specifies the order in which roles are displayed.|false|

## SimpleDataRow complex type
<a name="bk_SimpleDataRow"> </a>

Represents a row in a data table.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Cells|Collection( [SP.KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue))|The row cells.|true|

## SimpleDataTable complex type
<a name="bk_SimpleDataTable"> </a>

Represents a data table.
 

 

### Properties
<a name="bk_SimpleDataTableProperties"> </a>



|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Rows|Collection( [SP.SimpleDataRow](complex-types-in-the-sp-namespace.md#bk_SimpleDataRow))|The rows in the table.|true|

## TimeZoneInformation complex type
<a name="bk_TimeZoneInformation"> </a>

Represents information about a time zone.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Bias|**Int32**|The number of minutes that the time zone differs from Coordinated Universal Time (UTC). A positive value indicates that the time zone is behind UTC.|false|
|DaylightBias|**Int32**|The number of minutes added to the bias during Daylight Savings Time.|false|
|StandardBias|**Int32**|The number of minutes added to the Bias outside of Daylight Savings Time.|false|

## UpgradeInfo complex type
<a name="bk_UpgradeInfo"> </a>

Represents the site collection upgrade information.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|ErrorFile|**String**|The location of the file that contains upgrade errors.|true|
|Errors|**Int32**|The number of errors encountered during the site collection upgrade.|false|
|LastUpdated|**DateTime**|The  **DateTime** of the latest upgrade progress update.|false|
|LogFile|**String**|The location of the file that contains upgrade log.|true|
|RequestDate|**DateTime**|The  **DateTime** when the site collection upgrade was requested.|false|
|RetryCount|**Int32**|The number of times the site collection upgrade was attempted.|false|
|StartTime|**DateTime**|The  **DateTime** when the site collection upgrade was started.|false|
|Status|**Int32**|The current status of the site collection upgrade.|false|
|UpgradeType|**Int32**|The type of upgrade for the site collection. The type can be either a build to build upgrade (value = 0), or a version to version upgrade (value = 1).|false|
|Warnings|**Int32**|The number of warnings encountered during the site collection upgrade.|false|

## UsageInfo complex type
<a name="bk_UsageInfo"> </a>

Provides fields that are used to access information about site collection usage.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Bandwidth|**Int64**|Gets a value that specifies the cumulative bandwidth, in bytes, used by the site collection during an implementation specific period.|false|
|DiscussionStorage|**Int64**|Gets a value that specifies the total amount of disk space, in bytes, currently being used to store Web discussion comments in the site collection.|false|
|Hits|**Int64**|Gets a value that specifies the cumulative number of requests for pages in the site collection during an implementation specific period.|false|
|Storage|**Int64**|Gets a value that specifies the total amount of disk space, in bytes, currently being used by the site collection.|false|
|StoragePercentageUsed|**Double**|Gets a value that specifies the ratio of the amount of disk space currently being used by the site collection to the maximum disk space specified in the site collection quota.|false|
|Visits|**Int64**|Gets a value that specifies the cumulative number of requests for pages in the site collection, with no referring URL, or a referring URL outside of the current site collection during an implementation specific period.|false|

## UserCreationInformation complex type
<a name="bk_UserCreationInformation"> </a>

Parameters to invite a user.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Email|**String**|Gets or sets a value that specifies the e-mail address for the user to be created.|true|
|LoginName|**String**|Gets or sets a value that specifies the login name for the user to be created.|true|
|Title|**String**|Gets or sets a value that specifies the display name for the user to be created.|true|

## UserIdInfo complex type
<a name="bk_UserIdInfo"> </a>

Represents an identity provider's unique identifier information.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|NameId|**String**|The identity provider's unique identifier.|true|
|NameIdIssuer|**String**|The identity provider's display name as registered in a farm.|true|

## ViewCreationInformation complex type
<a name="bk_ViewCreationInformation"> </a>

Specifies the properties used to create a new list view.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Paged|**Boolean**|Gets or sets a value that specifies whether the new list view is a paged view.|false|
|PersonalView|**Boolean**|Gets or sets a value that specifies whether the new list view is a personal view. If the value is  **false**, the new list view is a public view.|false|
|Query|**String**|Gets or sets a value that specifies the query for the new list view.|true|
|RowLimit|**Int32**|Gets or sets a value that specifies the maximum number of list items that the new list view displays on a visual page of the list view.|false|
|SetAsDefaultView|**Boolean**|Gets or sets a value that specifies whether the new list view is the default list view.|false|
|Title|**String**|Gets or sets the value that specifies the display name of the new list view.|true|
|ViewFields|**Collection(String)**|Gets or sets the value that specifies the collection of field internal names for the list fields in the new list view.|true|
|ViewTypeKind|**Int32**|Gets or sets a value that specifies the type of the new list view.|false|

## WebCreationInformation complex type
<a name="bk_WebCreationInformation"> </a>

Specifies the properties of a new site.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Description|**String**|Gets or sets the description of the new site.|true|
|Language|**Int32**|Gets or sets the locale ID that specifies the language of the new site.|false|
|Title|**String**|Gets or sets a value that specifies the title of the new site.|true|
|Url|**String**|Gets or sets the URL leaf name of the new site.The URL must not contain the following: The characters  **~**, **"**, **#**, **%**, **&amp;**, *****, **:**, **<**, **>**, **?**, **\**, **{**, **|**, or **}** The string  **\x7f** Consecutive  **.** or **/** characters Starting  **.**, **/**, or **_** characters  Ending **.** or **/** characters|true|
|UseSamePermissionsAsParentSite|**Boolean**|Gets or sets a value that specifies whether the new site will inherit permissions from its parent site.|false|
|WebTemplate|**String**|Gets or sets a value that specifies the name of the site template to be used for creating the new site. Use the  [GetAvailableWebTemplates method](webs-rest-api-reference.md#bk_WebGetAvailableWebTemplates) to get the names of available web templates on the site.|true|

## WebInfoCreationInformation complex type
<a name="bk_WebInfoCreationInformation"> </a>

Represents metadata about site creation.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Description|**String**|The description of the site.|true|
|Language|**Int32**|A valid language code identifier (LCID) of the language to use on the site.|false|
|Title|**String**|The title of the site.|true|
|Url|**String**|The URL of the site.The URL must not contain the following: The characters  **~**, **"**, **#**, **%**, **&amp;**, *****, **:**, **<**, **>**, **?**, **\**, **{**, **|**, or **}** The string  **\x7f** Consecutive  **.** or **/** characters Starting  **.**, **/**, or **_** characters  Ending **.** or **/** characters|true|
|UseUniquePermissions|**Boolean**|Indicates whether the site inherits permissions from its parent.|false|
|WebTemplate|**String**|The name of the site template that is used to create the site.|true|

## WebRequestInfo complex type
<a name="bk_WebRequestInfo"> </a>

Represents the data from the caller needed to make the outbound web request.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Body|**String**|Gets or sets the body of the HTTP request message.|true|
|Headers|Collection( [SP.KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue))|Gets or sets a dictionary containing the name-value pairs for the headers to send in the HTTP request.|true|
|Method|**String**|Gets or sets the HTTP method for the web request.|true|
|Url|**String**|Gets or sets the URL for the web request.|true|

## WebResponseInfo complex type
<a name="bk_WebResponseInfo"> </a>

Contains a copy of the third-party service response.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Body|**String**|Gets or sets the body of the HTTP response.|true |
|Headers|Collection( [SP.KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue))|Gets or sets the headers of the HTTP response.|true|
|StatusCode|**Int32**|Gets or sets the status code of the HTTP response.|false|

## XmlSchemaFieldCreationInformation complex type
<a name="bk_XmlSchemaFieldCreationInformation"> </a>

Represents properties that can be set when creating a field.
 

 


|**Property name**|**Type**|**Description**|** [Nullable](complex-types-in-the-sp-namespace.md#bk_Notes)**|
|:-----|:-----|:-----|:-----|
|Options|**Int32**|The options to use to add to the field. See  **AddFieldOptions** in the .NET client object model reference for a list of values.|false|
|SchemaXml|**String**|A  [Collaborative Application Markup Language](http://msdn.microsoft.com/en-us/library/office/ms462365.aspx) (CAML) string that contains the schema.|true|

## Implementation notes
<a name="bk_Notes"> </a>

For  **Nullable** type parameters, a null value may be specified by not including the parameter in the query string of the URI.
 

 

## See also
<a name="bk_Notes"> </a>


#### Concepts


 
 [REST API reference and samples](rest-api-reference-and-samples.md)
#### Other resources


 
 [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/get-to-know-the-sharepoint-2013-rest-service%28Office.15%29.aspx)
 
 [Complete basic operations using SharePoint 2013 REST endpoints](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx)
