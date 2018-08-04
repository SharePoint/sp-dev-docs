---
title: Working with lists and list items with REST
description: Perform basic create, read, update, and delete (CRUD) operations on lists and list items with the SharePoint REST interface.
ms.date: 4/19/2018
ms.prod: sharepoint
---

# Working with lists and list items with REST

> [!TIP] 
> The SharePoint Online (and on-premises SharePoint 2016 and later) REST service supports combining multiple requests into a single call to the service by using the OData `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](make-batch-requests-with-the-rest-apis.md).

## Prerequisites

This topic assumes that you are already familiar with the topics [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md) and [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md). It does not provide code snippets.
 
<a name="RetrieveLists"> </a> 

## Retrieving lists and list properties with REST

The following example shows how to **retrieve a specific list if you know its GUID**.

```
url: http://site url/_api/web/lists(guid'list GUID'),
method: GET
Headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```


> [!NOTE] 
> If you want the response in JSON, use `application/json;odata=verbose` in the `accept` header . 

> If you want the response in Atom format, use `application/atom+xml` in the `accept` header.
 
<br/>

The following example shows how to **retrieve a specific list if you know its title**.

```
url: http://site url/_api/web/lists/GetByTitle('Test')
method: GET
Headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

<br/>

The following XML shows an example of the **list properties that are returned when you request the XML content type**.

```XML
  <content type="application/xml">
  <m:properties>
  <d:AllowContentTypes m:type="Edm.Boolean">true</d:AllowContentTypes> 
  <d:BaseTemplate m:type="Edm.Int32">100</d:BaseTemplate> 
  <d:BaseType m:type="Edm.Int32">0</d:BaseType> 
  <d:ContentTypesEnabled m:type="Edm.Boolean">false</d:ContentTypesEnabled> 
  <d:Created m:type="Edm.DateTime">2012-06-26T23:15:58Z</d:Created> 
  <d:DefaultContentApprovalWorkflowId m:type="Edm.Guid">00000000-0000-0000-0000-000000000000</d:DefaultContentApprovalWorkflowId> 
  <d:Description>A list created by Project Based Retention used to store Project Policy Items.</d:Description> 
  <d:Direction>none</d:Direction> 
  <d:DocumentTemplateUrl m:null="true" /> 
  <d:DraftVersionVisibility m:type="Edm.Int32">0</d:DraftVersionVisibility> 
  <d:EnableAttachments m:type="Edm.Boolean">true</d:EnableAttachments> 
  <d:EnableFolderCreation m:type="Edm.Boolean">false</d:EnableFolderCreation> 
  <d:EnableMinorVersions m:type="Edm.Boolean">false</d:EnableMinorVersions> 
  <d:EnableModeration m:type="Edm.Boolean">false</d:EnableModeration> 
  <d:EnableVersioning m:type="Edm.Boolean">false</d:EnableVersioning> 
  <d:EntityTypeName>ProjectPolicyItemList</d:EntityTypeName> 
  <d:ForceCheckout m:type="Edm.Boolean">false</d:ForceCheckout> 
  <d:HasExternalDataSource m:type="Edm.Boolean">false</d:HasExternalDataSource> 
  <d:Hidden m:type="Edm.Boolean">true</d:Hidden> 
  <d:Id m:type="Edm.Guid">74de3ff3-029c-42f9-bd2a-1e9463def69d</d:Id> 
  <d:ImageUrl>/_layouts/15/images/itgen.gif</d:ImageUrl> 
  <d:IrmEnabled m:type="Edm.Boolean">false</d:IrmEnabled> 
  <d:IrmExpire m:type="Edm.Boolean">false</d:IrmExpire> 
  <d:IrmReject m:type="Edm.Boolean">false</d:IrmReject> 
  <d:IsApplicationList m:type="Edm.Boolean">false</d:IsApplicationList> 
  <d:IsCatalog m:type="Edm.Boolean">false</d:IsCatalog> 
  <d:IsPrivate m:type="Edm.Boolean">false</d:IsPrivate> 
  <d:ItemCount m:type="Edm.Int32">0</d:ItemCount> 
  <d:LastItemDeletedDate m:type="Edm.DateTime">2012-06-26T23:15:58Z</d:LastItemDeletedDate> 
  <d:LastItemModifiedDate m:type="Edm.DateTime">2012-06-26T23:15:59Z</d:LastItemModifiedDate> 
  <d:ListItemEntityTypeFullName>SP.Data.ProjectPolicyItemListItem</d:ListItemEntityTypeFullName> 
  <d:MultipleDataList m:type="Edm.Boolean">false</d:MultipleDataList> 
  <d:NoCrawl m:type="Edm.Boolean">true</d:NoCrawl> 
  <d:ParentWebUrl>/</d:ParentWebUrl> 
  <d:ServerTemplateCanCreateFolders m:type="Edm.Boolean">true</d:ServerTemplateCanCreateFolders> 
  <d:TemplateFeatureId m:type="Edm.Guid">00bfea71-de22-43b2-a848-c05709900100</d:TemplateFeatureId> 
  <d:Title>Project Policy Item List</d:Title> 
  </m:properties>
  </content>
```


> [!NOTE] 
> The **ListItemEntityTypeFullName** property (**SP.Data.ProjectPolicyItemListItem** in the previous example) is especially important if you want to create and update list items. This value must be passed as the **type** property in the metadata that you pass in the body of the HTTP request whenever you create and update list items.
 
<br/>

<a name="WorkLists"> </a>

## Working with lists by using REST

The following example shows how to **create a list**.

```
url: http://site url/_api/web/lists
method: POST
body: { '__metadata': { 'type': 'SP.List' }, 'AllowContentTypes': true, 'BaseTemplate': 100,
 'ContentTypesEnabled': true, 'Description': 'My list description', 'Title': 'Test' }
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

<br/>

The following example shows how to **update a list by using the MERGE method**.

```
url: http://site url/_api/web/lists(guid'list GUID')
method: POST
body: { '__metadata': { 'type': 'SP.List' }, 'Title': 'New title' }
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    IF-MATCH": etag or "*"
    X-HTTP-Method: MERGE,
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

<br/>

The following example shows how to **create a custom field for a list**.

```
Url: url: http://site url/_api/web/lists(guid'list GUID')/Fields
Method:POST
Body: { '__metadata': { 'type': 'SP.Field' }, 'Title': 'field title', 'FieldTypeKind': FieldType value,'Required': 'true/false', 'EnforceUniqueValues': 'true/false','StaticName': 'field name'}
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

<br/>

The following example shows how to **delete a list**.

```
url: http://site url/_api/web/lists(guid'list GUID')
method: POST
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    IF-MATCH: etag or "*"
    X-HTTP-Method: DELETE

```

<br/>

### Lookup Column Changes

When refering to a lookup column inside a list using REST API, use the display name of the lookup column instead of the internal name.

```
http://site url/_api/web/lists/getbytitle('ListName')/Items?&$filter=LookupColumnId eq 1

```

<br/>

<a name="ListItems"> </a>

## Working with list items by using REST

### Retrieve all list items

The following example shows how to  retrieve all of a list's items.
 
> [!NOTE] 
> The OData $skip query option does not work when querying list items. In may situations, you can use the [$skiptoken](http://msdn.microsoft.com/library/4dda9434-c2c5-4577-8e01-7bf9e822d90a.aspx) option instead.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

### Retrieve specific list item

The following example shows how to retrieve a specific list item.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items(item id)
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

<br/>

The following XML shows an example of the list item properties that are returned when you request the XML content type.

```XML
<content type="application/xml">
<m:properties> 
<d:FileSystemObjectType m:type="Edm.Int32">0</d:FileSystemObjectType>
<d:Id m:type="Edm.Int32">1</d:Id>
<d:ID m:type="Edm.Int32">1</d:ID>
<d:ContentTypeId>0x010049564F321A0F0543BA8C6303316C8C0F</d:ContentTypeId>
<d:Title>an item</d:Title>
<d:Modified m:type="Edm.DateTime">2012-07-24T22:47:26Z</d:Modified>
<d:Created m:type="Edm.DateTime">2012-07-24T22:47:26Z</d:Created>
<d:AuthorId m:type="Edm.Int32">11</d:AuthorId>
<d:EditorId m:type="Edm.Int32">11</d:EditorId>
<d:OData__UIVersionString>1.0</d:OData__UIVersionString>
<d:Attachments m:type="Edm.Boolean">false</d:Attachments>
<d:GUID m:type="Edm.Guid">eb6850c5-9a30-4636-b282-234eda8b1057</d:GUID>
</m:properties>
</content>
```

### Retrieve items as a stream

Retrieves information about the list and its data. Using this API you can retrieve list items in case they use complex fields such as lookups or managed metadata.

```text
POST /_api/web/GetList(@listUrl)/RenderListDataAsStream?@listUrl=%27%2Fsites%2Fteam-a%2Flists%2FList%27
```

#### URI Parameters

Following properties can be added as query string parameters to manipulate the returned data.

Property|Description|Type|Example
--------|-----------|----|-------
`CascDelWarnMessage`|Specifies if a message should be displayed if there is a cascade deletion warning|number|`1`
`DrillDown`|Specifies that some groups in a grouped view is expanded. Used with `GroupString`.|string|
`GroupString`|Group identifier used for drill down feature.|string|
`HasOverrideSelectCommand`|Used to ensure that certain fields are present for proper functioning of the SharePoint ListView control.|string|
`Field`|Specifies a special field that should be included.|string|
`FieldInternalName`|Used to identify a field when a list has an external data source.  Also used when filtering on a custom field.|string|
`Filter`|Specifies whether the requested view should have a filter applied.|string|
`FilterData`|Data specified by a particular filter.|string|
`FilterData1`|Data specified by a particular filter.|string|
`FilterData2`|Data specified by a particular filter.|string|
`FilterData3`|Data specified by a particular filter.|string|
`FilterData4`|Data specified by a particular filter.|string|
`FilterData5`|Data specified by a particular filter.|string|
`FilterData6`|Data specified by a particular filter.|string|
`FilterData7`|Data specified by a particular filter.|string|
`FilterData8`|Data specified by a particular filter.|string|
`FilterData9`|Data specified by a particular filter.|string|
`FilterData10`|Data specified by a particular filter.|string|
`FilterField`|A filter field name for a specific filter that is applied to the view.|string|
`FilterField1`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField2`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField3`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField4`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField5`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField6`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField7`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField8`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField9`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterField10`|A filter field name for a specific filter that is applied to the view.|string|`ID`
`FilterFields`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields1`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields2`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields3`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields4`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields5`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields6`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields7`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields8`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields9`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterFields10`|Specifies multiple fields that are being filtered on for a multiplier filter.|string|
`FilterValue`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|
`FilterValue1`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue2`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue3`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue4`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue5`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue6`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue7`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue8`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue9`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValue10`|The filter value associated with a particular filter. For example, FilterField3 goes with FilterValue3 and so forth.|string|`1`
`FilterValues`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues1`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues2`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues3`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues4`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues5`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues6`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues7`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues8`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues9`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterValues10`|Used with FilterFields for multiplier filter. For example, FilterFields3 would go with FilterValues3 and so forth.|string|
`FilterLookupId`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId1`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId2`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId3`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId4`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId5`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId6`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId7`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId8`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId9`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterLookupId10`|Used when filtering on a lookup field. This is the item id in the foreign list that has a value that is being filtered on.|string|
`FilterOnly`||string
`FilterOp`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp1`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp2`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp3`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp4`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp5`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp6`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp7`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp8`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp9`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`FilterOp10`|Filter operator. Used when filtering with other operators than Eq (Geq, Leq etc.)|string|`Geq`
`ID`|The item id of the item whose information is being sought.|number|
`InplaceSearchQuery`|Search term for a full list search.|string|
`InplaceFullListSearch`|A boolean that specifies whether there is a full list search.|string|
`IsCSR`|Whether this view is a client side rendered view.|string|
`CustomAction`||string|
`IsGroupRender`|Used to set the IsGroupRender property of the SPView.|string|
`IsRibbon`||string|
`IsXslView`|Whether this view is an xslt list view.|string|
`List`||string|
`ListId`||string|
`ListViewPageUrl`||string|
`OverrideScope`|Used to override a scope on the rendered view: SPView.Scope|string|
`OverrideSelectCommand`|Used to make sure that certain fields are present in the query regardless of whether they are explicitly included in the view.|string|
`PageFirstRow`|Paging information about the first row that is requested. Used for paging list views.|string|
`PageLastRow`|Paging information about the last row that is requested. Used for paging list views.|string|
`RootFolder`|The folder that the view is displaying.|string|
`SortField`|A field that the view should be sorted on.|string|`ID`
`SortField1`|A field that the view should be sorted on.|string|`ID`
`SortField2`|A field that the view should be sorted on.|string|`ID`
`SortField3`|A field that the view should be sorted on.|string|`ID`
`SortField4`|A field that the view should be sorted on.|string|`ID`
`SortField5`|A field that the view should be sorted on.|string|`ID`
`SortField6`|A field that the view should be sorted on.|string|`ID`
`SortField7`|A field that the view should be sorted on.|string|`ID`
`SortField8`|A field that the view should be sorted on.|string|`ID`
`SortField9`|A field that the view should be sorted on.|string|`ID`
`SortField10`|A field that the view should be sorted on.|string|`ID`
`SortFields`|Specifies the name of the first field to sort by|string|
`SortFieldValues`|Specifies the name of the first field to sort by|string|
`SortDir`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir1`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir2`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir3`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir4`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir5`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir6`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir7`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir8`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir9`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`SortDir10`|The sort direction of an ad hoc sort that is being applied to the view.|string|`Desc`
`View`|Specifies the base view that will be used to render the list.|GUID|`3d13559e-3071-5000-76b8-8f1ca6b835f0`
`ViewPath`|Specifies the path of the view that will be used to render the list. If `ViewId` is given then the `ViewId` will be used and this parameters will be ignored.|string|
`ViewCount`|When multiple list views are on a page, this identifies one of them.|string|
`ViewId`|Specifies the base view that will be used to render the list. ad-hoc parameters will be applied on top of this view. If both `ViewXml` and `BaseViewId` are given then the `ViewXml` will be used and the ad-hoc parameters will be ignored.|string|
`WebPartId`|The id of the list view web part that is showing this view.|string|

#### Request headers

Header|Value
-------|-----
Accept|application/json;odata=nometadata
Content-Type|application/json;odata=nometadata

#### Request body

```json
{
    "parameters": {
        "AddRequiredFields": "true",
        "DatesInUtc": "true",
        "RenderOptions": 17
    }
}
```

Property|Description|Type|Example
--------|-----------|----|-------
`AddRequiredFields`|Specifies if required fields should be returned or not|bool|`true`
`AllowMultipleValueFilterForTaxonomyFields`|Specifies if multi value filtering is allowed for taxonomy fields or not|bool|`true`
`DatesInUtc`|Specifies if we return DateTime field in UTC or local time.|bool|`true`
`ExpandGroups`|Specifies if the grouping should be expanded or not.|bool|`true`
`FirstGroupOnly`|Specifies if only the first group should be returned or not (regardless of view schema).|bool|`true`
`FolderServerRelativeUrl`|Specifies the url to the folder from which to return items.|string|`/sites/team-a/lists/Orders/Europe`
`ImageFieldsToTryRewriteToCdnUrls`|Comma-separated list of field names whose values should be rewritten to CDN URLs|string|`ArticleImage,SecondaryImage`
`OverrideViewXml`|Specifies the override XML to be combined with the View CAML. Applies only to the `Query/Where` part of the View CAML.|string|`<Query><Where><Gt><FieldRef Name=\"OrderCount\" /><Value Type=\"Number\">3</Value></Gt></Where></Query>`
`Paging`|Specifies the paging information.|string|
`RenderOptions`|Specifies the type of output to return.|SPRenderListDataOptions|See the next section for possible values. You can specify multiple values by adding their values together
`ReplaceGroup`|Specifies if the grouping should be replaced or not to deal with GroupBy throttling.|bool|`true`
`ViewXml`|Specifies the CAML view XML.|string|

##### SPRenderListDataOptions

Label|Description|Value
-----|-----------|-----
`None`|Return default output|`0`
`ContextInfo`|Return list context information|`1`
`ListData`|Return list data (same as `None`)|`2`
`ListSchema`|Return list schema|`4`
`MenuView`|Return HTML for the list menu|`8`
`ListContentType`|Returns information about list content types. Must be combined with the `ContextInfo` flag|`16`
`FileSystemItemId`|The returned list will have a FileSystemItemId field on each item if possible. Must be combined with the `ListData` flag|`32`
`ClientFormSchema`|Returns the client form schema to add and edit items.|`64`
`QuickLaunch`|Returns QuickLaunch navigation nodes.|`128`
`Spotlight`|Returns Spotlight rendering information.|`256`
`Visualization`|Returns Visualization rendering information.|`512`
`ViewMetadata`|Returns view XML and other information about the current view.|`1024`
`DisableAutoHyperlink`|Prevents AutoHyperlink from being run on text fields in this query.|`2048`
`EnableMediaTAUrls`|Enables URLs pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.|`4096`
`ParentInfo`|Returns parent folder information.|`8192`
`PageContextInfo`|Returns page context info for the current list being rendered.|`16384`
`ClientSideComponentManifest`|Return client-side component manifest information associated with the list. Reserved for future use|`32768`

#### Examples

**Retrieve item with specific ID**

```text
POST https://contoso.sharepoint.com/sites/team-a/_api/web/GetList(@listUrl)/RenderListDataAsStream?@listUrl=%27%2Fsites%2Fteam-a%2Flists%2FList%27&FilterField1=ID&FilterValue1=1
accept: application/json;odata=nometadata
```

**Sort items descending by ID**

```text
POST https://contoso.sharepoint.com/sites/team-a/_api/web/GetList(@listUrl)/RenderListDataAsStream?@listUrl=%27%2Fsites%2Fteam-a%2Flists%2FList%27&SortField=ID&SortDir=Desc
accept: application/json;odata=nometadata
```

**Retrieve items from the specified folder**

```text
POST https://contoso.sharepoint.com/sites/team-a/_api/web/GetList(@listUrl)/RenderListDataAsStream?@listUrl=%27%2Fsites%2Fteam-a%2Flists%2FOrders%27
accept: application/json;odata=nometadata
content-type: application/json;odata=nometadata

{
    "parameters": {
        "FolderServerRelativeUrl": "/sites/team-a/lists/Orders/Europe"
    }
}
```

**Retrieve list schema**

```text
POST https://contoso.sharepoint.com/sites/team-a/_api/web/GetList(@listUrl)/RenderListDataAsStream?@listUrl=%27%2Fsites%2Fteam-a%2Flists%2FList%27
accept: application/json;odata=nometadata
content-type: application/json;odata=nometadata

{
    "parameters": {
        "RenderOptions": 4
    }
}
```

**Retrieve information about list content types**

```text
POST https://contoso.sharepoint.com/sites/team-a/_api/web/GetList(@listUrl)/RenderListDataAsStream?@listUrl=%27%2Fsites%2Fteam-a%2Flists%2FList%27
accept: application/json;odata=nometadata
content-type: application/json;odata=nometadata

{
    "parameters": {
        "RenderOptions": 17
    }
}
```

### Create list item

The following example shows how to create a list item.
 
> [!NOTE] 
> To do this operation, you must know the **ListItemEntityTypeFullName** property of the list and pass that as the value of **type** in the HTTP request body.
 
```
url: http://site url/_api/web/lists/GetByTitle('Test')/items
method: POST
body: { '__metadata': { 'type': 'SP.Data.TestListItem' }, 'Title': 'Test'}
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

### Create list item in a folder

The following example shows how to create a list item in a folder.

```text
POST /_api/web/lists/GetByTitle('Test')/AddValidateUpdateItemUsingPath
```

#### URI Parameters

None

#### Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=nometadata|
|Content-Type|application/json;odata=nometadata|
|x-requestdigest|The appropriate digest for current site|

#### Request body

```json
{
    "listItemCreateInfo": {
        "FolderPath":  { "DecodedUrl": "https://contoso.sharepoint.com/lists/Test/Folder/SubFolder" },
        "UnderlyingObjectType": 0
    },
    "formValues": [
        {
            "FieldName": "Title",
            "FieldValue": "Item"
        }
    ],
    "bNewDocumentUpdate": false
}
```

| Property | Description |
|----------|-------|
|listItemCreateInfo|Information about the list and folder where the item should be created|
|listItemCreateInfo.FolderPath.DecodedUrl|Absolute URL of the folder where the item should be created|
|listItemCreateInfo.UnderlyingObjectType|Type of item to create. For more information see [https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.filesystemobjecttype(v=office.14).aspx](https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.filesystemobjecttype(v=office.14).aspx)|
|formValues|Array of field names and values to set on the newly created item|
|bNewDocumentUpdate|Set to `false` to create a list item|

#### Responses

| Name   | Type    |Description|
|--------|---------|-----------|
|200 OK  | Boolean |Success    |

```json
{
  "value": [
    {
      "ErrorMessage": null,
      "FieldName": "Title",
      "FieldValue": "Item",
      "HasException": false,
      "ItemId": 0
    },
    {
      "ErrorMessage": null,
      "FieldName": "Id",
      "FieldValue": "1",
      "HasException": false,
      "ItemId": 0
    }
  ]
}
```

The `value` property contains the list of properties that have been set when creating the list item.

### Update list item

The following example shows how to update a list item.
 
> [!NOTE] 
> To do this operation, you must know the **ListItemEntityTypeFullName** property of the list and pass that as the value of **type** in the HTTP request body.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items(item id)
method: POST
body: { '__metadata': { 'type': 'SP.Data.TestListItem' }, 'Title': 'TestUpdated'}
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    "IF-MATCH": etag or "*"
    "X-HTTP-Method":"MERGE",
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

### Delete list item

The following example shows how to delete a list item.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items(item id)
method: POST
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    "IF-MATCH": etag or "*"
    "X-HTTP-Method":"DELETE"

```

<br/>

<a name="Etag"> </a>

## Using ETag values to determine document and list item versioning

The SharePoint REST service, which follows the [OData standard](http://www.odata.org/developers/protocols/operations), uses [HTML ETags for concurrency control](http://www.odata.org/developers/protocols/operations#ConcurrencycontrolandETags) of SharePoint lists and list items. To check on an item's version when you perform a **PUT**, **MERGE**, or **DELETE** request, specify an **ETag** in the **If-Match** HTTP request header.

If the **ETag** you specify in your request does not match the **ETag** of the document or list item on the server, the REST service returns a 412 exception, per the OData specification.

- To force an overwrite of the item regardless of version, set the **ETag** value to **"*"**.
    
- If you do not specify an **ETag**, SharePoint overwrites the item regardless of version.
    
 
Within SharePoint, ETags apply only to SharePoint lists and list items.
 
## See also

- [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md)
- [SharePoint-Add-in-REST-OData-BasicDataOperations](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-BasicDataOperations)
- [SharePoint: Perform basic data access operations on files and folders by using REST](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/working-with-folders-and-files-with-rest)
- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md)
- [Work with external data in SharePoint](work-with-external-data-in-sharepoint.md)
- [REST API reference and samples](https://msdn.microsoft.com/library)
- [OData resources](get-to-know-the-sharepoint-rest-service.md#odata-resources)  
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md) 

 

 

