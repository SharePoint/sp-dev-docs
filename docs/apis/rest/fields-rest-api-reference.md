---
title: Fields REST API reference
ms.prod: MULTIPLEPRODUCTS
ms.assetid: 0f418ceb-8064-46c1-a149-ba1eae3d9fc7
ms.locale: en-US
---



# Fields REST API reference
Learn about field-related resources and endpoints in the SharePoint REST API.
 

 **Last modified:** March 09, 2015
 

 * **Applies to:** apps for SharePoint | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013* 
 

## About the request examples in this article
<a name="bk_AboutTheExamples"> </a>

The examples in this article use jQuery AJAX requests. Before you try to use the examples, do the following:
 

 

- Change  _<site url>_ and other placeholder data such as any IDs, names, or paths of SharePoint entities.
    
 
- If you're using the cross-domain library, you'll need to change the request format. For example, it might look like the following.
    
  ```
  executor.executeAsync({
  url: "<app web url>/_api/SP.AppContextSite(@target)/web/fields?@target='<host web url>'",
  method: "POST",
  body: "{ '__metadata': { 'type': 'SP.Field' }, 'Title': 'Comments', 'FieldTypeKind': 3 }",
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
    
 
- If you want the server to return responses in Atom format, remove the  `"accept": "application/json; odata=verbose"` header.
    
 
See  [How REST requests differ by environment](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#bk_HowRequestsDiffer) for more information about changing the requests. See [Additional resources](fields-rest-api-reference.md#bk_AdditionalResources) for links to more information about using the cross-domain library, OAuth, and the SharePoint REST service.
 

 

 **Tip**  The SharePoint Online REST service supports combining multiple requests into a single call to the service by using the OData  `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](http://msdn.microsoft.com/library/make-batch-requests-with-the-rest-apis%28Office.15%29.aspx). This option is not yet supported for on-premise SharePoint.
 


## Field resource
<a name="bk_Field"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldProperties) | [Methods](fields-rest-api-reference.md#bk_FieldMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldOData)
 

 
Represents a field in a SharePoint list.
 

 

### Endpoint URI
<a name="bk_FieldEndpoint"> </a>

http:// _<site url>_/_api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldRequestExamples"> </a>

 **GET request example:** Get a field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.Field' }, 'Title': 'Comments', 'FieldTypeKind': 3 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json; odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

 **POST request example:** Create a field including the field schema. To send a complex schema, you can use the [CreateFieldAsXml](fields-rest-api-reference.md#bk_FieldCollectionCreateFieldAsXml) method.
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 20, 'Title':
    'Stakeholders', 'SchemaXml': '<Field Type=\"UserMulti\" Required=\"TRUE\"
    UserSelectionMode=\"PeopleAndGroups\" UserSelectionScope=\"0\" Mult=\"TRUE\" />' },
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json; odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.Field' }, 'Title': 'Internal stakeholders' }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### Field properties
<a name="bk_FieldProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|CanBeDeleted|**Boolean**|R|Yes|Gets a value that specifies whether the field can be deleted.|
|DefaultValue|**String**|RW|Yes|Gets or sets a value that specifies the default value for the field.|
|Description|**String**|RW|Yes|Gets or sets a value that specifies the description of the field.|
|Direction|**String**|RW|Yes|Gets or sets a value that specifies the reading order of the field.|
|EnforceUniqueValues|**Boolean**|RW|Yes|Gets or sets a value that specifies whether to require unique field values in a list or library column.|
|EntityPropertyName|**String**|R|Yes|Gets the name of the entity property for the list item entity that uses this field.|
|FieldTypeKind|**Int32**|RW|Yes|Gets or sets a value that specifies the type of the field. Represents a  **FieldType** value. See **FieldType** in the .NET client object model reference for a list of field type values.|
|Filterable|**Boolean**|R|Yes|Gets a value that specifies whether list items in the list can be filtered by the field value.|
|FromBaseType|**Boolean**|R|Yes|Gets a  **Boolean** value that indicates whether the field derives from a base field type.|
|Group|**String**|RW|Yes|Gets or sets a value that specifies the field group.|
|Hidden|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the field is hidden in list views and list forms.|
|Id|**GUID**|R|Yes|Gets a value that specifies the field identifier.|
|Indexed|**Boolean**|RW|Yes|Gets or sets a Boolean value that specifies whether the field is indexed.|
|InternalName|**String**|R|Yes|Gets a value that specifies the field internal name.|
|JSLink|**String**|RW|Yes|Gets or sets the name of an external JS file containing any client rendering logic for fields of this type.|
|ReadOnlyField|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the value of the field is read-only.|
|Required|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the field requires a value.|
|SchemaXml|**String**|RW|Yes|Gets or sets a value that specifies the XML schema that defines the field.|
|SchemaXmlWithResourceTokens|**String**|R|No|Gets the schema that defines the field and includes resource tokens.|
|Scope|**String**|RW|Yes|Gets a value that specifies the server-relative URL of the list or the site to which the field belongs.|
|Sealed|**Boolean**|RW|Yes|Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted.|
|Sortable|**Boolean**|RW|Yes|Gets a value that specifies whether list items in the list can be sorted by the field value.|
|StaticName|**String**|RW|Yes|Gets or sets a value that specifies a customizable identifier of the field.|
|Title|**String**|RW|Yes|Gets or sets value that specifies the display name of the field.|
|TypeAsString|**String**|RW|Yes|Gets or sets a value that specifies the type of the field.|
|TypeDisplayName|**String**|R|Yes|Gets a value that specifies the display name for the type of the field.|
|TypeShortDescription|**String**|R|Yes|Gets a value that specifies the description for the type of the field.|
|ValidationFormula|**String**|RW|Yes|Gets or sets a value that specifies the data validation criteria for the value of the field.|
|ValidationMessage|**String**|RW|Yes|Gets or sets a value that specifies the error message returned when data validation fails for the field.|

### Field methods
<a name="bk_FieldMethods"> </a>

 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

#### DeleteObject method
<a name="bk_FieldDeleteObject"> </a>

The recommended way to delete a field is to send a  **DELETE** request to the **Field** resource endpoint, as shown in [Field request examples](fields-rest-api-reference.md#bk_FieldRequestExamples).
 

 

#### SetShowInDisplayForm method
<a name="bk_FieldSetShowInDisplayForm"> </a>

Sets the value of the  **ShowInDisplayForm** property for this field.
 

 

|||
|:-----|:-----|
|**Endpoint**|/setshowindisplayform( _<boolean>_)|
|**Parameters**|Type:  **Boolean**  **true** to show the field in the form; otherwise **false**.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')
    /setshowindisplayform(false)",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### SetShowInEditForm method
<a name="bk_FieldSetShowInEditForm"> </a>

Sets the value of the  **ShowInEditForm** property for this field.
 

 

|||
|:-----|:-----|
|**Endpoint**|/setshowineditform( _<boolean>_)|
|**Parameters**|Type:  **Boolean**  **true** to show the field in the form; otherwise **false**.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')
    /setshowineditform(false)",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### SetShowInNewForm method
<a name="bk_FieldSetShowInNewForm"> </a>

Sets the value of the  **ShowInNewForm** property for this field.
 

 

|||
|:-----|:-----|
|**Endpoint**|/setshowinnewform( _<boolean>_)|
|**Parameters**|Type:  **Boolean**  **true** to show the field in the form; otherwise **false**.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')
    /setshowinnewform(false)",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


### OData representation
<a name="bk_FieldOData"> </a>

The following example represents a  [Field](fields-rest-api-reference.md#bk_FieldRequestExamples) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{,
    "id":"https://<site url>/_api/Web/Lists(guid'da58632f-faf0-4a78-8219-99c307747741')/Fields(guid'fa564e0f-0c70-4ab9-b863-0177e6ddd247')",
    "uri":"https://<site url>/_api/Web/Lists(guid'da58632f-faf0-4a78-8219-99c307747741')/Fields(guid'fa564e0f-0c70-4ab9-b863-0177e6ddd247')",
    "type":"SP.FieldText"
  },
  "CanBeDeleted":false,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Title",
  "Filterable":true,
  "FromBaseType":true,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"fa564e0f-0c70-4ab9-b863-0177e6ddd247",
  "Indexed":false,
  "InternalName":"Title",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":true,
  "SchemaXml":"<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Task Name\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" Sealed=\"TRUE\" ColName=\"nvarchar1\" />",
  "Scope":"/Lists/Backlog items",
  "Sealed":true,
  "Sortable":true,
  "StaticName":"Title",
  "Title":"Task Name",
  "FieldTypeKind":2,
  "TypeAsString":"Text",
  "TypeDisplayName":"Single line of text",
  "TypeShortDescription":"Single line of text",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "MaxLength":255
}}
```


## FieldCalculated resource
<a name="bk_FieldCalculated"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldCalculatedEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldCalculatedProperties) | [Methods](fields-rest-api-reference.md#bk_FieldCalculatedMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldCalculatedOData)
 

 
Specifies a calculated field. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 17.
 

 

### Endpoint URI
<a name="bk_FieldCalculatedEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldCalculatedRequestExamples"> </a>

 **GET request example:** Get a calculated field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a calculated field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldCalculated' }, 'FieldTypeKind': 17, 'Title':
    'Days Remaining', 'Formula': '=DATEDIF([Start Date],[End Date],"d")', 'OutputType': 9 }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field. See [Calculated Field Formulas](http://msdn.microsoft.com/en-us/library/office/bb862071%28v=office.14%29.aspx) for examples of supported formulas.
 

 
 **MERGE request example:** Change a calculated field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldCalculated' }, 'Title': 'Remaining', 'Formula':
    '=DATEDIF([Start Date],[End Date],"d")&amp;" days"', 'OutputType': 2 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a calculated field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});

```


### FieldCalculated properties
<a name="bk_FieldCalculatedProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|
|DateFormat|**Int32**|RW|Yes|Gets or sets the date and time format that is displayed in the field. Represents a  **DateTimeFieldFormatType** value: DateOnly = 0, DateTime = 1.|
|Formula|**String**|RW|Yes|Gets or sets a value that specifies the formula for the field.|
|OutputType|**Int32**|RW|Yes|Gets or sets a value that specifies the output format for the field. Represents a  **FieldType** value. See **FieldType** in the .NET client object model reference for a list of field type values.|

### FieldCalculated methods
<a name="bk_FieldCalculatedMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldCalculatedRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldCalculatedOData"> </a>

The following example represents an  [SP.FieldCalculated](fields-rest-api-reference.md#bk_FieldCalculated) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'ddb702c8-e343-479b-9fda-b71af9175031')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'ddb702c8-e343-479b-9fda-b71af9175031')",
    "type":"SP.FieldCalculated"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Remaining",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"ddb702c8-e343-479b-9fda-b71af9175031",
  "Indexed":false,
  "InternalName":"Remaining",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":true,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Remaining\" Type=\"Calculated\" Required=\"FALSE\" ResultType=\"Number\" ID=\"{ddb702c8-e343-479b-9fda-b71af9175031}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Remaining\" Name=\"Remaining\" ColName=\"sql_variant6\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Version=\"1\"><Formula>=DATEDIF(Start_x0020_Date,End_x0020_Date,\"d\")</Formula><FieldRefs><FieldRef Name=\"End_x0020_Date\" /><FieldRef Name=\"Start_x0020_Date\" /></FieldRefs></Field>",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Remaining",
  "Title":"Remaining",
  "FieldTypeKind":17,
  "TypeAsString":"Calculated",
  "TypeDisplayName":"Calculated",
  "TypeShortDescription":"Calculated (calculation based on other columns)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "DateFormat":0,
  "Formula":"=DATEDIF([Start Date],[End Date],\"d\")",
  "OutputType":9
}}
```


## FieldCollection resource
<a name="bk_FieldCollection"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldCollectionEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldCollectionProperties) | [Methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldCollectionOData)
 

 
Represents a collection of  [Field](fields-rest-api-reference.md#bk_Field) resources.
 

 

### Endpoint URI
<a name="bk_FieldCollectionEndpoint"> </a>

http:// _<site url>_/_api/web/fields
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields
 

 

#### Supported HTTP methods

GET | POST
 

 

#### Request examples
<a name="bk_FieldCollectionRequestExamples"> </a>

 **GET request example:** Get all the fields in a list
 

 

```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

 **GET request example:** Get a specific field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('fa564e0f-0c70-4ab9-b863-0177e6ddd247')",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle) or [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Assigned To')`.
 

 
 **POST request example:** Create a field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.Field' }, 'Title': 'Comments', 'FieldTypeKind': 3 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json; odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

 **POST request example:** Create a field including the field schema. To send a complex schema, you can use the [CreateFieldAsXml](fields-rest-api-reference.md#bk_FieldCollectionCreateFieldAsXml) method.
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 20, 'Title':
    'Stakeholders', 'SchemaXml': '<Field Type="UserMulti" Required="TRUE"
    UserSelectionMode="PeopleAndGroups" UserSelectionScope="0" Mult="TRUE" />' },
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json; odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field. See [Field request examples](fields-rest-api-reference.md#bk_FieldRequestExamples) for examples that show how to change or delete a field.
 

 

### FieldCollection properties
<a name="bk_FieldCollectionProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/schemaxml",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|SchemaXml|**String**|R|No|Specifies the XML schema of the collection of fields.|

### FieldCollection methods
<a name="bk_FieldCollectionMethods"> </a>

 [AddDependentLookupField](fields-rest-api-reference.md#bk_FieldCollectionAddDependentLookupField)
 
 [AddField](fields-rest-api-reference.md#bk_FieldCollectionAddField)
 
 [CreateFieldAsXml](fields-rest-api-reference.md#bk_FieldCollectionCreateFieldAsXml)
 
 [GetById](fields-rest-api-reference.md#bk_FieldCollectionGetById)
 
 [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle)
 
 [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle)
 

 

#### AddDependentLookupField method
<a name="bk_FieldCollectionAddDependentLookupField"> </a>

Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
 

 

|||
|:-----|:-----|
|**Endpoint**|/adddependentlookupfield( _displayname_,  _primarylookupfieldid_,  _showfield_)|
|**Parameters**| displaynameType: StringThe title of the new field.primarylookupfieldidType: StringThe ID of the lookup field to associate this dependent lookup field with.showfieldType: StringThe name of the field from the target list to include data from. |
|**HTTP method**|POST|
|**Response**|Type:  [SP.Field](fields-rest-api-reference.md#bk_Field) The new field.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields
    /adddependentlookupfield(displayname='Project', primarylookupfieldid='c3a92d97-2b77-4a25-9698-3ab54874bc6f', showfield='Title')",
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


#### AddField method
<a name="bk_FieldCollectionAddField"> </a>

Adds a field to the field collection.
 

 

|||
|:-----|:-----|
|**Endpoint**|/addfield|
|**Parameters**| parametersType: SP.FieldCreationInformationProperties that define the new field. Send this parameter in the request body, as shown in the example. |
|**HTTP method**|POST|
|**Response**|Type:  [SP.Field](fields-rest-api-reference.md#bk_Field) The new field.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields
    /addfield",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.FieldCreationInformation' }, 'Title':
    'Impact', 'FieldTypeKind': 6, 'Required': true, 'Choices': { '__metadata': { 'type':
    'Collection(Edm.String)' }, 'results': [ 'High', 'Medium', 'Low' ] } } }",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json; odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

Or, you can add a field by sending a  **POST** request to the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource endpoint, as shown in [FieldCollection request examples](fields-rest-api-reference.md#bk_FieldCollectionRequestExamples).
 

 

#### CreateFieldAsXml method
<a name="bk_FieldCollectionCreateFieldAsXml"> </a>

Creates a field based on the specified schema,  **Boolean** value, and field options.
 

 

|||
|:-----|:-----|
|**Endpoint**|/createfieldasxml|
|**Parameters**| parametersType: SP.XmlSchemaFieldCreationInformationThe properties of the new field. Send this parameter in the request body, as shown in the example. |
|**HTTP method**|POST|
|**Response**|Type:  [SP.Field](fields-rest-api-reference.md#bk_Field) The new field.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields
    /createfieldasxml",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.XmlSchemaFieldCreationInformation' },
    'SchemaXml': '<Field Type="UserMulti" Title="Stakeholders" DisplayName="Stakeholders"
    Required="FALSE" UserSelectionMode="PeopleAndGroups" UserSelectionScope="0" Mult="TRUE" />' } }",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json; odata=verbose",
    "content-length": <length of body data>
  },
  success: successHandler,
  error: errorHandler
});
```

Or, you can add a field by sending a  **POST** request to the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource endpoint, as shown in [FieldCollection request examples](fields-rest-api-reference.md#bk_FieldCollectionRequestExamples).
 

 

#### GetById method
<a name="bk_FieldCollectionGetById"> </a>

Gets the field with the specified ID.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getbyid(' _<field id>_')|
|**Parameters**|Type:  **String** The ID of the field.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.Field](fields-rest-api-reference.md#bk_Field) The specified field.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields
    /getbyid('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can just pass the field ID to the  [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')`.
 

 

#### GetByInternalNameOrTitle method
<a name="bk_FieldCollectionGetByInternalNameOrTitle"> </a>

Returns the first  [Field](d1e50cda-8d5e-47aa-8c78-23b1707dca04.md) object with the specified internal name or title from the collection.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getbyinternalnameortitle(' _<field internal name or title>_')|
|**Parameters**|Type:  **String** The case-sensitive internal name or title of the field.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.Field](fields-rest-api-reference.md#bk_Field) The specified field.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields
    /getbyinternalnameortitle('AssignedTo')",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetByTitle method
<a name="bk_FieldCollectionGetByTitle"> </a>

Returns the first field object in the collection based on the title of the specified field.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getbytitle(' _<field title>_')|
|**Parameters**|Type:  **String** The case-sensitive title of the field.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.Field](fields-rest-api-reference.md#bk_Field) The specified field.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/web
    /lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields
    /getbytitle('Start Date')",
  type: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


### OData representation
<a name="bk_FieldCollectionOData"> </a>

The following example represents a  [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource in JSON format.
 

 

```
{"d":{
  "results":[{
    "__metadata":{
      "id":"https://<site url>/_api/Web/Lists(guid'da58632f-faf0-4a78-8219-99c307747741')/Fields(guid'03e45e84-1992-4d42-9116-26f756012634')",
      "uri":"https://<site url>/_api/Web/Lists(guid'da58632f-faf0-4a78-8219-99c307747741')/Fields(guid'03e45e84-1992-4d42-9116-26f756012634')",
      "type":"SP.Field"
    },
    "CanBeDeleted":false,
    "DefaultValue":null,
    "Description":"",
    "Direction":"none",
    "EnforceUniqueValues":false,
    "EntityPropertyName":"ContentTypeId",
    "Filterable":true,
    "FromBaseType":true,
    "Group":"Custom Columns",
    "Hidden":true,
    "Id":"03e45e84-1992-4d42-9116-26f756012634",
    "Indexed":false,
    "InternalName":"ContentTypeId",
    "JSLink":null,
    "ReadOnlyField":true,
    "Required":false,
    "SchemaXml":"<Field ID="{03e45e84-1992-4d42-9116-26f756012634}" RowOrdinal="0" Type="ContentTypeId" Sealed="TRUE" ReadOnly="TRUE" Hidden="TRUE" DisplayName="Content Type ID" Name="ContentTypeId" DisplaceOnUpgrade="TRUE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="ContentTypeId" ColName="tp_ContentTypeId" FromBaseType="TRUE" />",
    "Scope":"/Lists/Backlog items",
    "Sealed":true,
    "Sortable":true,
    "StaticName":"ContentTypeId",
    "Title":"Content Type ID",
    "FieldTypeKind":25,
    "TypeAsString":"ContentTypeId",
    "TypeDisplayName":"Content Type Id",
    "TypeShortDescription":"Content Type Id",
    "ValidationFormula":null,
    "ValidationMessage":null
    },{
    "__metadata":{
      "id":"https://<site url>/_api/Web/Lists(guid'da58632f-faf0-4a78-8219-99c307747741')/Fields(guid'fa564e0f-0c70-4ab9-b863-0177e6ddd247')",
      "uri":"https://<site url>/_api/Web/Lists(guid'da58632f-faf0-4a78-8219-99c307747741')/Fields(guid'fa564e0f-0c70-4ab9-b863-0177e6ddd247')",
      "type":"SP.FieldText"
    },
    "CanBeDeleted":false,
    "DefaultValue":null,
    "Description":"",
    "Direction":"none",
    "EnforceUniqueValues":false,
    "EntityPropertyName":"Title",
    "Filterable":true,
    "FromBaseType":true,
    "Group":"Custom Columns",
    "Hidden":false,
    "Id":"fa564e0f-0c70-4ab9-b863-0177e6ddd247",
    "Indexed":false,
    "InternalName":"Title",
    "JSLink":"clienttemplates.js",
    "ReadOnlyField":false,
    "Required":true,
    "SchemaXml":"<Field ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Type="Text" Name="Title" DisplayName="Task Name" Required="TRUE" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="Title" FromBaseType="TRUE" Sealed="TRUE" ColName="nvarchar1" />",
    "Scope":"/Lists/Backlog items",
    "Sealed":true,
    "Sortable":true,
    "StaticName":"Title",
    "Title":"Task Name",
    "FieldTypeKind":2,
    "TypeAsString":"Text",
    "TypeDisplayName":"Single line of text",
    "TypeShortDescription":"Single line of text",
    "ValidationFormula":null,
    "ValidationMessage":null,
    "MaxLength":255
    },{
    ...
  }]
}}
```


## FieldComputed resource
<a name="bk_FieldComputed"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldComputedEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldComputedProperties) | [Methods](fields-rest-api-reference.md#bk_FieldComputedMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldComputedOData)
 

 
Represents a field that depends on other fields for its contents, but can specify a custom rendering pattern. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 12.
 

 

### Endpoint URI
<a name="bk_FieldComputedEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldComputedRequestExamples"> </a>

 **GET request example:** Get a computed field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a computed field by using the [CreateFieldAsXml](fields-rest-api-reference.md#bk_FieldCollectionCreateFieldAsXml) method
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields/createfieldasxml",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.XmlSchemaFieldCreationInformation' },
    'SchemaXml': '<Field Type=\"Computed\" DisplayName=\"Search\">
    <FieldRefs><FieldRef Name="Title" /></FieldRefs></Field>' } }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose",
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>
  }
  success: successHandler,
  error: errorHandler
});
```

After you create a computed field and specify the schema XML, you'll have to create the XSL rendering file. See  [Overview of XSLT List View Rendering System](http://msdn.microsoft.com/en-us/library/ff604024.aspx).
 

 
 **MERGE request example:** Change a computed field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldComputed' }, 'SchemaXml': '<Field Type=\"Computed\" DisplayName=\"Search\">
    <FieldRefs><FieldRef Name="ID" /><FieldRef Name="Title" /></FieldRefs></Field>' }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a computed field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldComputed properties
<a name="bk_FieldComputedProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|
|EnableLookup|**Boolean**|RW|Yes|Gets or sets a value that specifies whether a lookup field can reference the field.|

### FieldComputed methods
<a name="bk_FieldComputedMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldComputedRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldComputedOData"> </a>

The following example represents an  [SP.FieldComputed](fields-rest-api-reference.md#bk_FieldComputed) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'dceca14e-c897-4988-ae4f-f7c21bea80e5')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'dceca14e-c897-4988-ae4f-f7c21bea80e5')",
    "type":"SP.FieldComputed"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Search",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"dceca14e-c897-4988-ae4f-f7c21bea80e5",
  "Indexed":false,
  "InternalName":"Search",
  "JSLink":null,
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field Type=\"Computed\" DisplayName=\"Search\" ID=\"{dceca14e-c897-4988-ae4f-f7c21bea80e5}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Search\" Name=\"Search\"><FieldRefs><FieldRef Name=\"Title\" /></FieldRefs></Field>",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Search",
  "Title":"Search",
  "FieldTypeKind":12,
  "TypeAsString":"Computed",
  "TypeDisplayName":"Computed",
  "TypeShortDescription":"Computed",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "EnableLookup":false
}}
```


## FieldDateTime resource
<a name="bk_FieldDateTime"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldDateTimeEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldDateTimeProperties) | [Methods](fields-rest-api-reference.md#bk_FieldDateTimeMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldDateTimeOData)
 

 
Specifies a field that contains date and time values. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 4.
 

 

### Endpoint URI
<a name="bk_FieldDateTimeEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldDateTimeRequestExamples"> </a>

 **GET request example:** Get a date time field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a date time field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldDateTime' }, 'FieldTypeKind': 4,
    'Title': 'Handoff Date', 'DisplayFormat': 1 }";
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a date time field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldDateTime' }, 'FriendlyDisplayFormat': 2 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a date time field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldDateTime properties
<a name="bk_FieldDateTimeProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|
|DateTimeCalendarType|**Int32**|RW|Yes|Gets or sets a value that specifies the calendar type of the field. Represents a  **CalendarType** value: Gregorian (localized) = 1, Japanese Emperor Era = 3, Taiwan Calendar = 4, Korean Tangun Era = 5, Hijri (Arabic Lunar) = 6, Thai = 7, Hebrew Lunar = 8, Gregorian (Middle East French) = 9, Gregorian (Arabic) = 10, Gregorian (Transliterated English) = 11, Gregorian (Transliterated French) = 12, Korean and Japanese Lunar = 14, Chinese Lunar = 15, Saka Era = 16.|
|DisplayFormat|**Int32**|RW|Yes|Gets or sets the format of the date and time that is displayed in the field. Represents a  **DateTimeFieldFormatType** value: DateOnly = 0, DateTime = 1.|
|FriendlyDisplayFormat|**Int32**|RW|Yes| Represents a **DateTimeFieldFriendlyFormat** value: Unspecified = 0, Disabled (standard absolute) = 1, Relative (standard friendly relative) = 2.|

### FieldDateTime methods
<a name="bk_FieldDateTimeMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldDateTimeRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldDateTimeOData"> </a>

The following example represents an  [SP.FieldDateTime](fields-rest-api-reference.md#bk_FieldDateTime) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'd6b835d3-820f-4926-85bd-7711cc31c4c8')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'd6b835d3-820f-4926-85bd-7711cc31c4c8')",
    "type":"SP.FieldDateTime"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Handoff_x0020_Date",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"d6b835d3-820f-4926-85bd-7711cc31c4c8",
  "Indexed":false,
  "InternalName":"Handoff_x0020_Date",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Handoff Date\" Type=\"DateTime\" Required=\"FALSE\" ID=\"{d6b835d3-820f-4926-85bd-7711cc31c4c8}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Handoff_x0020_Date\" Name=\"Handoff_x0020_Date\" ColName=\"datetime3\" RowOrdinal=\"0\" Format=\"DateTime\" FriendlyDisplayFormat=\"Unspecified\" Version=\"9\" />",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Handoff_x0020_Date",
  "Title":"Handoff Date",
  "FieldTypeKind":4,
  "TypeAsString":"DateTime",
  "TypeDisplayName":"Date and Time",
  "TypeShortDescription":"Date and Time",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "DateTimeCalendarType":0,
  "DisplayFormat":1,
  "FriendlyDisplayFormat":0
}}
```


## FieldGeolocation resource
<a name="bk_FieldGeolocation"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldGeolocationEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldGeolocationProperties) | [Methods](fields-rest-api-reference.md#bk_FieldGeolocationMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldGeolocationOData)
 

 
Represents a field that contains geographical location values. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 31.
 

 
To learn more about using location fields, see  [Integrating location and map functionality in SharePoint 2013](http://msdn.microsoft.com/library/10d4a904-ed27-4513-8c20-d2098aebf22c%28Office.15%29.aspx).
 

 

### Endpoint URI
<a name="bk_FieldGeolocationEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldGeolocationRequestExamples"> </a>

 **GET request example:** Get a location field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a location field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 31, 'Title': 'Location' }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a location field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.Field' }, 'Title': 'City' }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a location field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldGeolocation properties
<a name="bk_FieldGeolocationProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|

### FieldGeolocation methods
<a name="bk_FieldGeolocationMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldGeolocationRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldGeolocationOData"> </a>

The following example represents an  [SP.FieldGeolocation](fields-rest-api-reference.md#bk_FieldGeolocation) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'aec4b49c-573e-42a5-8844-cb1a9e1a720e')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'aec4b49c-573e-42a5-8844-cb1a9e1a720e')",
    "type":"SP.FieldGeolocation"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Location",
  "Filterable":false,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"aec4b49c-573e-42a5-8844-cb1a9e1a720e",
  "Indexed":false,
  "InternalName":"Location",
  "JSLink":"Geolocationfieldtemplate.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Location\" Type=\"Geolocation\" Required=\"FALSE\" ID=\"{aec4b49c-573e-42a5-8844-cb1a9e1a720e}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Location\" Name=\"Location\" ColName=\"geography1\" RowOrdinal=\"0\" Version=\"3\" />",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":false,
  "StaticName":"Location",
  "Title":"Location",
  "FieldTypeKind":31,
  "TypeAsString":"Geolocation",
  "TypeDisplayName":"Geolocation",
  "TypeShortDescription":"Geographic location that represents a point on a map",
  "ValidationFormula":null,
  "ValidationMessage":null
}}
```


## FieldGuid resource
<a name="bk_FieldGuid"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldGuidEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldGuidProperties) | [Methods](fields-rest-api-reference.md#bk_FieldGuidMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldGuidOData)
 

 
 Inherits from [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 14.
 

 

### Endpoint URI
<a name="bk_FieldGuidEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldGuidRequestExamples"> </a>

 **GET request example:** Get a GUID field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a GUID field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldGuid' }, 'FieldTypeKind': 14,
    'Title': 'Project ID' }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a GUID field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldGuid' }, 'Title': 'Project GUID', 'EnforceUniqueValues': true }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});

```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a GUID field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});

```


### FieldGuid properties
<a name="bk_FieldGuidProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|

### FieldGuid methods
<a name="bk_FieldGuidMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldGuidRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldGuidOData"> </a>

The following example represents an  [SP.FieldGuid](fields-rest-api-reference.md#bk_FieldGuid) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'53f865f8-675b-47d2-b4d6-1c8803eb6295')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'53f865f8-675b-47d2-b4d6-1c8803eb6295')",
    "type":"SP.FieldGuid"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Project_x0020_ID",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"53f865f8-675b-47d2-b4d6-1c8803eb6295",
  "Indexed":false,
  "InternalName":"Project_x0020_ID",
  "JSLink":null,
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Project ID\" Type=\"Guid\" Required=\"FALSE\" ID=\"{53f865f8-675b-47d2-b4d6-1c8803eb6295}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Project_x0020_ID\" Name=\"Project_x0020_ID\" ColName=\"uniqueidentifier1\" RowOrdinal=\"0\" Version=\"1\" />",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Project_x0020_ID",
  "Title":"Project ID",
  "FieldTypeKind":14,
  "TypeAsString":"Guid",
  "TypeDisplayName":"Guid",
  "TypeShortDescription":"Guid",
  "ValidationFormula":null,
  "ValidationMessage":null
}}
```


## FieldLookup and FieldUser resources
<a name="bk_FieldLookup"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldLookupEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldLookupProperties) | [Methods](fields-rest-api-reference.md#bk_FieldLookupMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldLookupOData)
 

 


|**Resource**|**Description**|**Field type value**|
|:-----|:-----|:-----|
|FieldLookup|Specifies a lookup field. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field).|7|
|FieldUser|Specifies a field that contains a user. Inherits from  **SP.FieldLookup**.|20|

### Endpoint URI
<a name="bk_FieldLookupEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldLookupRequestExamples"> </a>

 **GET request example:** Get a lookup or userfield
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a lookup field. Use the [AddField](fields-rest-api-reference.md#bk_FieldCollectionAddField) method to create a lookup field.
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields/addfield",
  type: "POST",
  data: "{ 'parameters': { '__metadata': { 'type': 'SP.FieldCreationInformation' }, 'FieldTypeKind': 7,
    'Title': 'Project Rollup', 'LookupListId': '4635daeb-7206-4513-ad17-ea06e09187ad',
    'LookupFieldName': 'Title' } }",
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

 **POST request example:** Create a user field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldUser' }, 'FieldTypeKind': 20,
    'Title': 'Owner', 'SelectionGroup': 7, 'SelectionMode': 0 }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a lookup field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldLookup' }, 'AllowMultipleValues': true }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a lookup or user field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldLookup and FieldUser properties
<a name="bk_FieldLookupProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**. An  ***** indicates that the property is not inherited from **FieldLookup**.|
|AllowDisplay*|**Boolean**|RW|Yes|Gets or sets a value that specifies whether to display the name of the user in a survey list. *Applies only to  **FieldUser**.|
|AllowMultipleValues|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the lookup field allows multiple values. You cannot set a deletion constraint on a lookup field that allows multiple values.|
|IsRelationship|**Boolean**|RW|Yes|Gets or sets a value that specifies whether this lookup field is returned by  **SP.List.getRelatedFields** from the list being looked up to. Always returns **false** if the field represents a secondary column in a multiple-column lookup. Secondary columns are not discoverable from the source list. See **IsRelationship** in the .NET client object model reference for more information about this property.|
|LookupField|**String**|RW|Yes|Gets or sets a value that specifies the internal field name of the field used as the lookup values.|
|LookupList|**String**|RW|Yes|Gets or sets a value that specifies the list identifier of the list that contains the field to use as the lookup values.|
|LookupWebId|**GUID**|RW|Yes|Gets or sets the ID of the Web site that contains the list that is the source of this field's value.|
|Presence*|**Boolean**|RW|Yes|Gets or sets a value that specifies whether presence is enabled on the field. *Applies only to  **FieldUser**.|
|PrimaryFieldId|**String**|RW|Yes|Gets or sets a value that specifies the primary lookup field identifier if this is a dependent lookup field. Otherwise, it is an empty string.|
|RelationshipDeleteBehavior|**Int32**|RW|Yes|Gets or sets a value that specifies the delete behavior of the lookup field. Represents a  **RelationshipDeleteBehaviorType** value: None = 0, Cascade = 1, Restrict = 2. See **RelationshipDeleteBehavior** in the .NET client object model reference for more information about this property.|
|SelectionGroup*|**Int32**|RW|Yes|Gets or sets a value that specifies the identifier of the SharePoint group whose members can be selected as values of the field. *Applies only to  **FieldUser**.|
|SelectionMode*|**Int32**|RW|Yes|Gets or sets a value that specifies whether users and groups or only users can be selected. Represents a  **FieldUserSelectionMode** value: PeopleOnly = 0, PeopleAndGroups = 1. *Applies only to  **FieldUser**.|

### FieldLookup and FieldUser methods
<a name="bk_FieldLookupMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldLookupRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldLookupOData"> </a>

The following example represents an  [SP.FieldLookup](fields-rest-api-reference.md#bk_FieldLookup) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'2ee42785-f5b4-4af3-9011-96a9dea67d23')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'2ee42785-f5b4-4af3-9011-96a9dea67d23')",
    "type":"SP.FieldLookup"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Project_x0020_Rollup",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"2ee42785-f5b4-4af3-9011-96a9dea67d23",
  "Indexed":false,
  "InternalName":"Project_x0020_Rollup",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Project Rollup\" Type=\"Lookup\" Required=\"FALSE\" List=\"{4635DAEB-7206-4513-AD17-EA06E09187AD}\" ID=\"{2ee42785-f5b4-4af3-9011-96a9dea67d23}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Project_x0020_Rollup\" Name=\"Project_x0020_Rollup\" ColName=\"int1\" RowOrdinal=\"0\" ShowField=\"Title\" Version=\"1\" />",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Project_x0020_Rollup",
  "Title":"Project Rollup",
  "FieldTypeKind":7,
  "TypeAsString":"Lookup",
  "TypeDisplayName":"Lookup",
  "TypeShortDescription":"Lookup (information already on this site)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "AllowMultipleValues":false,
  "IsRelationship":true,
  "LookupField":"Title",
  "LookupList":"{4635DAEB-7206-4513-AD17-EA06E09187AD}",
  "LookupWebId":"0d787dd7-3d5b-481f-93a3-085687dbb644",
  "PrimaryFieldId":null,
  "RelationshipDeleteBehavior":0
}}
```

The following example represents an  [SP.FieldUser](fields-rest-api-reference.md#bk_FieldLookup) resource in JSON format.
 

 



```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'7feaefbb-c501-4539-8973-839da0d2e6f6')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'7feaefbb-c501-4539-8973-839da0d2e6f6')",
    "type":"SP.FieldUser"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Owner",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"7feaefbb-c501-4539-8973-839da0d2e6f6",
  "Indexed":false,
  "InternalName":"Owner",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Owner\" Type=\"User\" Required=\"FALSE\" List=\"UserInfo\" ID=\"{7feaefbb-c501-4539-8973-839da0d2e6f6}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Owner\" Name=\"Owner\" ColName=\"int2\" RowOrdinal=\"0\" UserSelectionScope=\"7\" UserSelectionMode=\"PeopleOnly\" Version=\"1\" />",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Owner",
  "Title":"Owner",
  "FieldTypeKind":20,
  "TypeAsString":"User",
  "TypeDisplayName":"Person or Group",
  "TypeShortDescription":"Person or Group",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "AllowMultipleValues":false,
  "IsRelationship":false,
  "LookupField":"",
  "LookupList":"{a63367c0-83e8-48eb-9b88-d2c0d2db001c}",
  "LookupWebId":"0d787dd7-3d5b-481f-93a3-085687dbb644",
  "PrimaryFieldId":null,
  "RelationshipDeleteBehavior":0,
  "AllowDisplay":true,
  "Presence":true,
  "SelectionGroup":7,
  "SelectionMode":0
}
```


## FieldMultiChoice, FieldChoice, and FieldRatingScale resources
<a name="bk_FieldMultiChoice"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldMultiChoiceEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldMultiChoiceProperties) | [Methods](fields-rest-api-reference.md#bk_FieldMultiChoiceMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldMultiChoiceOData)
 

 


|**Resource**|**Description**|**Field type value**|
|:-----|:-----|:-----|
|FieldMultiChoice|Specifies a field that contains one or more values from a set of specified values. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field).|15|
|FieldChoice|Represents a choice field control. Inherits from  **SP.FieldMultiChoice**.|6|
|FieldRatingScale|Specifies a field that contains rating scale values for a survey list. Inherits from  **SP.FieldMultiChoice**. Also called  **GridChoice**.|16|

### Endpoint URI
<a name="bk_FieldMultiChoiceEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldMultiChoiceRequestExamples"> </a>

 **GET request example:** Get a field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Status')`.
 

 
 **POST request example:** Create a multiple choice field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldMultiChoice' }, 'FieldTypeKind': 15,
    'Title': 'Features', 'Choices': { '__metadata': { 'type': 'Collection(Edm.String)' },
    'results': [ 'ECM', 'Workflow', 'Collaboration' ] }, 'FillInChoice': true, 'DefaultValue': 'ECM' }",
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

 **POST request example:** Create a choice field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6,
    'Title': 'Scope', 'Choices': { '__metadata': { 'type': 'Collection(Edm.String)' },
    'results': [ 'Internal', 'External' ] }, 'EditFormat': 1 }",
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

 **POST request example:** Create a rating scale field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldRatingScale' }, 'FieldTypeKind': 16,
    'Title': 'How frequently do you use these features?', 'Choices':  { '__metadata':
    { 'type': 'Collection(Edm.String)' }, 'results': [ 'ECM', 'Workflow', 'Collaboration' ] },
    'GridTextRangeLow': 'Rarely', 'GridTextRangeAverage': 'Sometimes', 'GridTextRangeHigh': 'Often',
    'GridStartNumber': 1, 'GridEndNumber': 3, 'RangeCount': 3 }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a choice field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'43c6d385-122f-4b77-a7cd-538ede2a047f')
    /fields('509e9ac8-7ee6-4452-aaf9-1d2c42909187')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldChoice' }, 'DefaultValue': 'External', 'EditFormat': 0 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldMultiChoice, FieldChoice, and FieldRatingScale properties
<a name="bk_FieldMultiChoiceProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**. An  ***** indicates that the property is not inherited from **FieldMultiChoice**.|
|Choices|**Collection(Edm.String)**|RW|Yes|Gets or sets a value that specifies values that are available for selection in the field.|
|EditFormat*|**Int32**|RW|Yes|Determines whether to display the choice field as option buttons (also known as "radio buttons") or as a drop-down list. Represents a  **ChoiceFormatType** value: Dropdown = 0, RadioButtons = 1. *Applies only to  **FieldChoice**.|
|FillInChoice|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the field can accept values other than those specified by the  **Choices** property.|
|GridEndNumber*|**Int32**|RW|Yes|Gets or sets a value that specifies the end number for the rating scale. *Applies only to  **FieldRatingScale**.|
|GridNAOptionText*|**String**|RW|Yes|Gets or sets a value that specifies the display text corresponding to the choice in the rating scale that indicates the non-applicable option. *Applies only to  **FieldRatingScale**.|
|GridStartNumber*|**Int32**|RW|Yes|Gets or sets a value that specifies the start number for the rating scale. *Applies only to  **FieldRatingScale**.|
|GridTextRangeAverage*|**String**|RW|Yes|Gets or sets a value that specifies the display text corresponding to the average of the rating scale. *Applies only to  **FieldRatingScale**.|
|GridTextRangeHigh*|**String**|RW|Yes|Gets or sets a value that specifies the display text corresponding to the maximum of the rating scale. *Applies only to  **FieldRatingScale**.|
|GridTextRangeLow*|**String**|RW|Yes|Gets or sets a value that specifies the display text corresponding to the minimum of the rating scale. *Applies only to  **FieldRatingScale**.|
|Mappings|**String**|R|Yes|Gets a value that specifies the internal values corresponding to Choices.|
|RangeCount*|**Int32**|R|Yes|Gets a value that specifies the number of options in the rating scale. *Applies only to  **FieldRatingScale**.|

### FieldMultiChoice, FieldChoice, and FieldRatingScale methods
<a name="bk_FieldMultiChoiceMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldMultiChoiceRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representations
<a name="bk_FieldMultiChoiceOData"> </a>

The following example represents an  [SP.FieldMultiChoice](fields-rest-api-reference.md#bk_FieldMultiChoice) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'de0a7921-f807-4806-a4b6-a611224f19e5')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'de0a7921-f807-4806-a4b6-a611224f19e5')",
    "type":"SP.FieldMultiChoice"
  },
  "CanBeDeleted":true,
  "DefaultValue":"ECM",
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Features",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"de0a7921-f807-4806-a4b6-a611224f19e5",
  "Indexed":false,
  "InternalName":"Features",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":true,
  "SchemaXml":"<Field Type=\"MultiChoice\" DisplayName=\"Features\" Required=\"TRUE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" FillInChoice=\"TRUE\" ID=\"{de0a7921-f807-4806-a4b6-a611224f19e5}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Features\" Name=\"Features\" ColName=\"ntext6\" RowOrdinal=\"0\"><Default>ECM</Default><CHOICES><CHOICE>ECM</CHOICE><CHOICE>Workflow</CHOICE><CHOICE>Collaboration</CHOICE></CHOICES></Field>",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":false,
  "StaticName":"Features",
  "Title":"Features",
  "FieldTypeKind":15,
  "TypeAsString":"MultiChoice",
  "TypeDisplayName":"Choice",
  "TypeShortDescription":"Choice (menu to choose from)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "FillInChoice":true,
  "Mappings":null,
  "Choices":{"__metadata":{"type":"Collection(Edm.String)"},"results":["ECM","Workflow","Collaboration"]}
}}
```

The following example represents an  [SP.FieldChoice](fields-rest-api-reference.md#bk_FieldMultiChoice) resource in JSON format.
 

 



```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'509e9ac8-7ee6-4452-aaf9-1d2c42909187')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'509e9ac8-7ee6-4452-aaf9-1d2c42909187')",
    "type":"SP.FieldChoice"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Impact",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"509e9ac8-7ee6-4452-aaf9-1d2c42909187",
  "Indexed":false,
  "InternalName":"Impact",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Impact\" Type=\"Choice\" Required=\"FALSE\" ID=\"{509e9ac8-7ee6-4452-aaf9-1d2c42909187}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Impact\" Name=\"Impact\" ColName=\"nvarchar6\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>High</CHOICE><CHOICE>Medium</CHOICE><CHOICE>Low</CHOICE></CHOICES></Field>",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Impact",
  "Title":"Impact",
  "FieldTypeKind":6,
  "TypeAsString":"Choice",
  "TypeDisplayName":"Choice",
  "TypeShortDescription":"Choice (menu to choose from)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "FillInChoice":false,
  "Mappings":null,
  "Choices":{"__metadata":{"type":"Collection(Edm.String)"},"results":["High","Medium","Low"]},
  "EditFormat":0
}}
```

The following example represents an  [SP.FieldRatingScale](fields-rest-api-reference.md#bk_FieldMultiChoice) resource in JSON format.
 

 



```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'7804ea60-6093-489d-a483-bafd70ea01e9')/Fields(guid'8eac1672-8a47-4d44-a261-f5620db71402')",
    "uri":"http://<site url>/_api/Web/Lists(guid'7804ea60-6093-489d-a483-bafd70ea01e9')/Fields(guid'8eac1672-8a47-4d44-a261-f5620db71402')",
    "type":"SP.FieldRatingScale"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"How_x0020_frequently_x0020_do_x02",
  "Filterable":false,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"8eac1672-8a47-4d44-a261-f5620db71402",
  "Indexed":false,
  "InternalName":"How_x0020_frequently_x0020_do_x02",
  "JSLink":"",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"How frequently do you use these features?\" Type=\"GridChoice\" Required=\"FALSE\" ID=\"{8eac1672-8a47-4d44-a261-f5620db71402}\" SourceID=\"{7804ea60-6093-489d-a483-bafd70ea01e9}\" StaticName=\"How_x0020_frequently_x0020_do_x02\" Name=\"How_x0020_frequently_x0020_do_x02\" ColName=\"ntext6\" RowOrdinal=\"0\" Version=\"2\" GridTxtRng1=\"Rarely\" GridTxtRng2=\"Sometimes\" GridTxtRng3=\"Often\" GridStartNum=\"1\" GridEndNum=\"3\"><CHOICES><CHOICE>ECM</CHOICE><CHOICE>Workflow</CHOICE><CHOICE>Collaboration</CHOICE></CHOICES></Field>",
  "Scope":"/Lists/Survey",
  "Sealed":false,
  "Sortable":false,
  "StaticName":"How_x0020_frequently_x0020_do_x02",
  "Title":"How frequently do you use these features?",
  "FieldTypeKind":16,
  "TypeAsString":"GridChoice",
  "TypeDisplayName":"Rating Scale",
  "TypeShortDescription":"Rating Scale (a matrix of choices or a Likert scale)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "FillInChoice":false,
  "Mappings":null,
  "Choices":{"__metadata":{"type":"Collection(Edm.String)"},"results":["ECM","Workflow","Collaboration"]},
  "GridEndNumber":3,
  "GridNAOptionText":null,
  "GridStartNumber":1,
  "GridTextRangeAverage":"Sometimes",
  "GridTextRangeHigh":"Often",
  "GridTextRangeLow":"Rarely",
  "RangeCount":3
}}
```


## FieldMultiLineText resource
<a name="bk_FieldMultiLineText"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldMultiLineTextEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldMultiLineTextProperties) | [Methods](fields-rest-api-reference.md#bk_FieldMultiLineTextMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldMultiLineTextOData)
 

 
Specifies a field that can contain multiple lines of text. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 3.
 

 

### Endpoint URI
<a name="bk_FieldMultiLineTextEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldMultiLineTextRequestExamples"> </a>

 **GET request example:** Get a multiple line text field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a multiple line text field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldMultiLineText' }, 'FieldTypeKind': 3,
    'Title': 'Justification', 'NumberOfLines': 8 }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a multiple line text field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldMultiLineText' }, 'RichText': true }",
  headers: {
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a multiple line text field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldMultiLineText properties
<a name="bk_FieldMultiLineTextProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|
|AllowHyperlink|**Boolean**|RW|Yes|Gets or sets a value that specifies whether a hyperlink is allowed as a value of the field.|
|AppendOnly|**Boolean**|RW|Yes|Gets or sets a value that specifies whether all changes to the value of the field are displayed in list forms.|
|NumberOfLines|**Int32**|RW|Yes|Gets or sets a value that specifies the number of lines of text to display for the field.|
|RestrictedMode|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the field supports a subset of rich formatting.|
|RichText|**Boolean**|RW|Yes|Gets or sets a value that specifies whether the field supports rich formatting.|
|WikiLinking|**Boolean**|R|Yes|Gets a value that specifies whether an implementation specific mechanism for linking wiki pages is supported.|

### FieldMultiLineText methods
<a name="bk_FieldMultiLineTextMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldMultiLineTextRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldMultiLineTextOData"> </a>

The following example represents an  [SP.FieldMultiLineText](fields-rest-api-reference.md#bk_FieldMultiLineText) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'c9569638-28a9-498d-9ed7-8151f54da247')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'c9569638-28a9-498d-9ed7-8151f54da247')",
    "type":"SP.FieldMultiLineText"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Justification",
  "Filterable":false,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"c9569638-28a9-498d-9ed7-8151f54da247",
  "Indexed":false,
  "InternalName":"Justification",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Justification\" Type=\"Note\" Required=\"FALSE\" ID=\"{c9569638-28a9-498d-9ed7-8151f54da247}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Justification\" Name=\"Justification\" ColName=\"ntext8\" RowOrdinal=\"0\" NumLines=\"8\" Version=\"3\" AllowHyperlink=\"TRUE\" RichText=\"TRUE\" />",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":false,
  "StaticName":"Justification",
  "Title":"Justification",
  "FieldTypeKind":3,
  "TypeAsString":"Note",
  "TypeDisplayName":"Multiple lines of text",
  "TypeShortDescription":"Multiple lines of text",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "AllowHyperlink":false,
  "AppendOnly":false,
  "NumberOfLines":8,
  "RestrictedMode":true,
  "RichText":true,
  "WikiLinking":false
}}
```


## FieldNumber and FieldCurrency resources
<a name="bk_FieldNumber"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldNumberEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldNumberProperties) | [Methods](fields-rest-api-reference.md#bk_FieldNumberMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldNumberOData)
 

 


|**Resource**|**Description**|**Field type value**|
|:-----|:-----|:-----|
|FieldNumber|Specifies a field that contains number values. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field).|9|
|FieldCurrency|Specifies a field that contains currency values. Inherits from  **SP.FieldNumber**.|10|

### Endpoint URI
<a name="bk_FieldNumberEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldNumberRequestExamples"> </a>

 **GET request example:** Get a number or currency field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a number field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldNumber' }, 'FieldTypeKind': 9, 'Title': 'Target',
    'Minimum Value': 1 }",
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

 **POST request example:** Create a currency field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldCurrency' }, 'FieldTypeKind': 10, 'Title': 'Est Cost',
    'CurrencyLocaleId': 2058, 'Minimum Value': 0 }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a number or currency field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldNumber' }, 'Minimum Value': 0, 'Maximum Value': 10000 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});
```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a number or currency field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldNumber and FieldCurrency properties
<a name="bk_FieldNumberProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**. An  ***** indicates that the property is not inherited from **FieldNumber**.|
|CurrencyLocaleId*|**Int32**|RW|Yes|Gets or sets a value that specifies the language code identifier (LCID) used to format the value of the field. See a  [list of locale IDs](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splocale.lcid.aspx). *Applies only to  **FieldCurrency**.|
|MaximumValue|**Double**|RW|Yes|Gets or sets a value that specifies the minimum allowed value for the field.|
|MinimumValue|**Double**|RW|Yes|Gets or sets a value that specifies the minimum allowed value for the field.|

### FieldNumber and FieldCurrency methods
<a name="bk_FieldNumberMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldNumberRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldNumberOData"> </a>

The following example represents an  [SP.FieldNumber](fields-rest-api-reference.md#bk_FieldNumber) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'6b98a3a1-0b14-4495-b184-4de33c32de92')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'6b98a3a1-0b14-4495-b184-4de33c32de92')",
    "type":"SP.FieldNumber"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Target",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"6b98a3a1-0b14-4495-b184-4de33c32de92",
  "Indexed":false,
  "InternalName":"Target",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Target\" Type=\"Number\" Required=\"FALSE\" ID=\"{6b98a3a1-0b14-4495-b184-4de33c32de92}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Target\" Name=\"Target\" ColName=\"float1\" RowOrdinal=\"0\" Min=\"1\" Version=\"1\" />",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Target",
  "Title":"Target",
  "FieldTypeKind":9,
  "TypeAsString":"Number",
  "TypeDisplayName":"Number",
  "TypeShortDescription":"Number (1, 1.0, 100)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "MaximumValue":1.7976931348623157e+308,
  "MinimumValue":1
}}
```

The following example represents an  [SP.FieldCurrency](fields-rest-api-reference.md#bk_FieldNumber) resource in JSON format.
 

 



```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'63ea3717-a47f-4cec-858d-7fcae10de409')",
    "uri":"http://<site url>/_api/Web/Lists(guid'b784e682-3373-4c29-b3c2-373bdb71ce93')/Fields(guid'63ea3717-a47f-4cec-858d-7fcae10de409')",
    "type":"SP.FieldCurrency"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Est_x0020_Cost",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"63ea3717-a47f-4cec-858d-7fcae10de409",
  "Indexed":false,
  "InternalName":"Est_x0020_Cost",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Est Cost\" Type=\"Currency\" Required=\"FALSE\" ID=\"{63ea3717-a47f-4cec-858d-7fcae10de409}\" SourceID=\"{b784e682-3373-4c29-b3c2-373bdb71ce93}\" StaticName=\"Est_x0020_Cost\" Name=\"Est_x0020_Cost\" ColName=\"float3\" RowOrdinal=\"0\" LCID=\"2058\" Min=\"0\" Version=\"1\" />",
  "Scope":"/Lists/Targets",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Est_x0020_Cost",
  "Title":"Est Cost",
  "FieldTypeKind":10,
  "TypeAsString":"Currency",
  "TypeDisplayName":"Currency",
  "TypeShortDescription":"Currency ($, ¥, €)",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "MaximumValue":1.7976931348623157e+308,
  "MinimumValue": 0,
  "CurrencyLocaleId":2058
}}
```


## FieldText resource
<a name="bk_FieldText"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldTextEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldTextProperties) | [Methods](fields-rest-api-reference.md#bk_FieldTextMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldTextOData)
 

 
Specifies a field that contains a single line of text. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 2.
 

 

### Endpoint URI
<a name="bk_FieldTextEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldTextRequestExamples"> </a>

 **GET request example:** Get a text field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a text field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldText' }, 'FieldTypeKind': 2,
    'Title': 'Project Name', 'MaxLength': '22' }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a text field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldText' }, 'Title': 'Code Name', 'MaxLength': '15' }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});

```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a text field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});

```


### FieldText properties
<a name="bk_FieldTextProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|
|MaxLength|**Int32**|RW|Yes|Gets or sets a value that specifies the maximum number of characters allowed in the value of the field.|

### FieldText methods
<a name="bk_FieldTextMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldTextRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldTextOData"> </a>

The following example represents an  [SP.FieldText](fields-rest-api-reference.md#bk_FieldText) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{,
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'bab9754a-3779-4862-8a8f-efcfef4fe073')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'bab9754a-3779-4862-8a8f-efcfef4fe073')",
    "type":"SP.FieldText"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Project_x0020_Name",
  "Filterable":true,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"bab9754a-3779-4862-8a8f-efcfef4fe073",
  "Indexed":false,
  "InternalName":"Project_x0020_Name",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Project Name\" Type=\"Text\" Required=\"FALSE\" ID=\"{bab9754a-3779-4862-8a8f-efcfef4fe073}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Project_x0020_Name\" Name=\"Project_x0020_Name\" ColName=\"nvarchar5\" RowOrdinal=\"0\" MaxLength=\"22\" Version=\"1\" />",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Project_x0020_Name",
  "Title":"Project Name",
  "FieldTypeKind":2,
  "TypeAsString":"Text",
  "TypeDisplayName":"Single line of text",
  "TypeShortDescription":"Single line of text",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "MaxLength":22
}}
```


## FieldUrl resource
<a name="bk_FieldUrl"> </a>

 [Endpoint URI](fields-rest-api-reference.md#bk_FieldUrlEndpoint) | [Properties](fields-rest-api-reference.md#bk_FieldUrlProperties) | [Methods](fields-rest-api-reference.md#bk_FieldUrlMethods) | [OData representation](fields-rest-api-reference.md#bk_FieldUrlOData)
 

 
Specifies a field that contains a URL. Inherits from  [SP.Field](fields-rest-api-reference.md#bk_Field). Field type value = 11.
 

 

### Endpoint URI
<a name="bk_FieldUrlEndpoint"> </a>

http:// _<site url>__api/web/fields(' _<field id>_')
 
http:// _<site url>_/_api/web/lists(guid' _<list id>_')/fields(' _<field id>_')
 

 

#### Supported HTTP methods

GET | POST | DELETE | MERGE | PUT
 

 

#### Request examples
<a name="bk_FieldUrlRequestExamples"> </a>

 **GET request example:** Get a URL field
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```

Or, you can use the  [GetByInternalNameOrTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByInternalNameOrTitle ) or [GetByTitle](fields-rest-api-reference.md#bk_FieldCollectionGetByTitle ) method from the [FieldCollection](fields-rest-api-reference.md#bk_FieldCollection) resource to get a field by its (case-sensitive) internal name or title. Example: `…/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')/fields/getbytitle('Start Date')`.
 

 
 **POST request example:** Create a URL field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldUrl' }, 'FieldTypeKind': 11,
    'Title': 'Avatar', 'DisplayFormat': 1 }",
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

See  [FieldCollection methods](fields-rest-api-reference.md#bk_FieldCollectionMethods) for other ways to create a field.
 

 
 **MERGE request example:** Change a URL field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  data: "{ '__metadata': { 'type': 'SP.FieldUrl' }, 'Title': 'Team pics', 'DisplayFormat': 0 }",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "content-type": "application/json;odata=verbose",
    "content-length": <length of body data>,
    "X-HTTP-Method": "MERGE"
  },
  success: successHandler,
  error: errorHandler
});

```

See  [Implementation Notes](fields-rest-api-reference.md#bk_ImplementationNotes) for information about specifying the field type in a MERGE or PUT request.
 

 
 **DELETE request example:** Delete a URL field
 

 



```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')",
  type: "POST",
  headers: { 
    "X-RequestDigest": <form digest value>,
    "X-HTTP-Method": "DELETE"
  },
  success: successHandler,
  error: errorHandler
});
```


### FieldUrl properties
<a name="bk_FieldUrlProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/web/lists(guid'da58632f-faf0-4a78-8219-99c307747741')
    /fields('1d22ea11-1e32-424e-89ab-9fedbadb6ce1')/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|See  [Field properties](fields-rest-api-reference.md#bk_FieldProperties) for properties that are inherited from **SP.Field**.|
|DisplayFormat|**Int32**|RW|Yes|Gets or sets a value that specifies the display format for the value in the field. Represents a  **UrlFieldFormatType** value: Hyperlink = 0, Image = 1.|

### FieldUrl methods
<a name="bk_FieldUrlMethods"> </a>

Methods are inherited from  [SP.Field](fields-rest-api-reference.md#bk_Field).
 

 
 [DeleteObject](fields-rest-api-reference.md#bk_FieldDeleteObject) (or send a DELETE [request](fields-rest-api-reference.md#bk_FieldUrlRequestExamples) to the field endpoint)
 
 [SetShowInDisplayForm](fields-rest-api-reference.md#bk_FieldSetShowInDisplayForm)
 
 [SetShowInEditForm](fields-rest-api-reference.md#bk_FieldSetShowInEditForm)
 
 [SetShowInNewForm](fields-rest-api-reference.md#bk_FieldSetShowInNewForm)
 

 

### OData representation
<a name="bk_FieldUrlOData"> </a>

The following example represents an  [SP.FieldUrl](fields-rest-api-reference.md#bk_FieldUrl) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{
    "id":"Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'ac80888e-9373-4886-8496-2ee2461cdf03')",
    "uri":"http://<site url>/_api/Web/Lists(guid'47f89cf2-359d-4792-9dc4-8da877a5050a')/Fields(guid'ac80888e-9373-4886-8496-2ee2461cdf03')",
    "type":"SP.FieldUrl"
  },
  "CanBeDeleted":true,
  "DefaultValue":null,
  "Description":"",
  "Direction":"none",
  "EnforceUniqueValues":false,
  "EntityPropertyName":"Avatar",
  "Filterable":false,
  "FromBaseType":false,
  "Group":"Custom Columns",
  "Hidden":false,
  "Id":"ac80888e-9373-4886-8496-2ee2461cdf03",
  "Indexed":false,
  "InternalName":"Avatar",
  "JSLink":"clienttemplates.js",
  "ReadOnlyField":false,
  "Required":false,
  "SchemaXml":"<Field DisplayName=\"Avatar\" Type=\"URL\" Required=\"FALSE\" ID=\"{ac80888e-9373-4886-8496-2ee2461cdf03}\" SourceID=\"{47f89cf2-359d-4792-9dc4-8da877a5050a}\" StaticName=\"Avatar\" Name=\"Avatar\" ColName=\"nvarchar13\" RowOrdinal=\"0\" ColName2=\"nvarchar14\" RowOrdinal2=\"0\" Format=\"Image\" Version=\"1\" />",
  "Scope":"/Lists/Team tasks",
  "Sealed":false,
  "Sortable":true,
  "StaticName":"Avatar",
  "Title":"Avatar",
  "FieldTypeKind":11,
  "TypeAsString":"URL",
  "TypeDisplayName":"Hyperlink or Picture",
  "TypeShortDescription":"Hyperlink or Picture",
  "ValidationFormula":null,
  "ValidationMessage":null,
  "DisplayFormat":1
}}
```


## Implementation notes
<a name="bk_ImplementationNotes"> </a>

To change an inherited property, the  **type** value in the body data can specify either the parent field type that defines the field or the child field type that inherits it. For example, the following body data changes the **Title** property for any field derived from [SP.Field](fields-rest-api-reference.md#bk_Field):  `"{ '__metadata': { 'type': 'SP.Field' }, 'Title': 'Comments' }"`. However, to change a property that isn't inherited, you must specify the field type that contains the property. For example, the following body data specifies the  **SP.FieldMultiLineText** type because it also changes the **NumberOfLines** property: `"{ '__metadata': { 'type': 'SP.FieldMultiLineText' }, 'Title': 'Comments', 'NumberOfLines': 6 }"`
 

 

## Additional resources
<a name="bk_AdditionalResources"> </a>


-  [REST API reference and samples](rest-api-reference-and-samples.md)
    
 
-  [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/get-to-know-the-sharepoint-2013-rest-service%28Office.15%29.aspx)
    
 
-  [Complete basic operations using SharePoint 2013 REST endpoints](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx)
    
 
-  [Access SharePoint 2013 data from add-ins using the cross-domain library](http://msdn.microsoft.com/library/access-sharepoint-2013-data-from-add-ins-using-the-cross-domain-library%28Office.15%29.aspx)
    
 
-  [OAuth authentication and authorization flow for cloud-hosted apps](http://msdn.microsoft.com/library/context-token-oauth-flow-for-sharepoint-add-ins%28Office.15%29.aspx)
    
 
-  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/use-odata-query-operations-in-sharepoint-rest-requests%28Office.15%29.aspx)
    
 
