---
title: Synchronize SharePoint items using the REST service
description: Synchronize items between SharePoint and your add-ins or services by using the GetListItemChangesSinceToken resource, part of the SharePoint REST service.
ms.date: 1/14/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Synchronize SharePoint items using the REST service

If you want to synchronize items between SharePoint and your add-ins or services, you can use the **GetListItemChangesSinceToken** resource to do so. The **GetListItemChangesSinceToken**, part of the SharePoint REST service, corresponds to the **Lists.GetListItemChangesSinceToken** web service call.

Perform a **POST** request that includes an [SP.ChangeLogItemQuery object properties](#bk_props) object in the request body.

The request returns ADO **rowset** XML, which includes rows corresponding to any list item change matching the specified query. For more information about these properties, including property data structures, CAML element descriptions, and return values, see [Lists.GetListItemChangesSinceToken](https://msdn.microsoft.com/library/office/jj247029.aspx).

## Example

```http
POST https://{site_url}/_api/web/Lists/GetByTitle('Announcements')/GetListItemChangesSinceToken`
Authorization: "Bearer " + accessToken
Content-Type: "application/json"
Content-Length: {length of request body as integer}

{ "d" : {
  "query": {
    "__metadata": {
      "type": "SP.ChangeLogItemQuery"
    },
    "ViewName": "",
    "Query": "
      <Query>
        <Where>
          <Contains>
            <FieldRef Name='Title' />
            <Value Type='Text'>Te</Value>
          </Contains>
        </Where>'
      </Query>,
    "QueryOptions": "
      <QueryOptions>
        <IncludeMandatoryColumns>FALSE</IncludeMandatoryColumns>
        <DateInUtc>False</DateInUtc>
        <IncludePermissions>TRUE</IncludePermissions>
        <IncludeAttachmentUrls>FALSE</IncludeAttachmentUrls>
        <Folder>Shared Documents/Test1</Folder>
      </QueryOptions>',
    "ChangeToken":"1;3;eee4c6d5-f88a-42c4-8ce1-685122984870;634397182229400000;3710",
    "Contains": "
      <Contains>
        <FieldRef Name="Title"/>
        <Value Type="Text">Testing</Value>
      </Contains>"
    }
  }
}
```

## SP.ChangeLogItemQuery object properties

|**Property**|**Description**|
|:-----|:-----|
|**ListName**|A string that contains either the title or the GUID for the list. When querying the UserInfo table, the string contains UserInfo. Using the GUID results in better performance.|
|**ViewName**|A string that contains the GUID for the view, which determines the view to use for the default view attributes represented by the _query_, _viewFields_, and _rowLimit_ parameters. If this argument is not supplied, the default view is assumed.<br/><br/>If it is supplied, the value of the _query_,  _viewFields_, or _rowLimit_ parameter overrides the equivalent setting within the view.<br/><br/>For example, if the view specified by the _viewFields_ parameter has a row limit of 100 rows, but the _rowLimit_ parameter contains a value of 1000, then 1,000 rows are returned in the response.|
|**Query**|A [Query](https://msdn.microsoft.com/library/ms471093.aspx) element containing the query that determines which records are returned and in what order.|
|**QueryOptions**|An XML fragment in the following form that contains separate nodes for the various properties of the **SPQuery** object.|
|**ChangeToken**|A string that contains the change token for the request.<br/><br/>For a description of the format that is used in this string, see [Overview of the Change Log](https://msdn.microsoft.com/library/bb417456.aspx). If null is passed, all items in the list are returned.|
|**Contains**|A [Contains](https://msdn.microsoft.com/library/ms196501.aspx) element that defines custom filtering for the query.|

## See also

- [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md)
- [Use ETag values through the REST service to get document list item versioning](working-with-lists-and-list-items-with-rest.md#using-etag-values-to-determine-document-and-list-item-versioning)
- [OData resources](get-to-know-the-sharepoint-rest-service.md#odata-resources)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
