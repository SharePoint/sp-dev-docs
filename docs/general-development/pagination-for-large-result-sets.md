---
title: Pagination for large result sets
ms.date: 10/14/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Pagination for large result sets

If you have a large number of search results (for example, over 50,000) to page through in a query, it is recommended to use the approach explained in this article instead of the approach of [StartRow](https://docs.microsoft.com/sharepoint/dev/general-development/sharepoint-search-rest-api-overview#startrow). This approach uses sorting on `[docid]` in ascending order and uses a query restriction on the `IndexDocId` value with an increasing value of `IndexDocID` for each new page.

The advantages of this approach are:

- It provides pagination with better performance
- It does not have a limit on the number of pages (if you use the approach of [StartRow](https://docs.microsoft.com/sharepoint/dev/general-development/sharepoint-search-rest-api-overview#startrow) and the `StartRow` value is greater than 50,000, there is a risk of being throttled by SharePoint)

Here is an example of using this approach:

For Page 1, issue a query with sort on `[docid]` in ascending order:

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;sortlist='[docid]:ascending'
```

The result of this query should contain the following content:

```xml
...
<d:element m:type="SP.SimpleDataRow">
    <d:Cells>
        ...
        <d:element m:type="SP.KeyValue">
            <d:Key>DocId</d:Key>
            <d:Value>10</d:Value>
            <d:ValueType>Edm.Int64</d:ValueType>
        </d:element>
        ...
```

Get the `DocId` value of the last entry in the result. You should be able to find `DocId` under `SP.SimpleDataRow`. Let's say the `DocId` value is `10`. You will use that as the `DocID` restriction for page 2:

For Page 2, use the following query, where you need to continue using sortlist on `DocId` in ascending order, but also add an `IndexDocId` restriction:

```http
GET http:// _server_/_api/search/query?querytext='sharepoint indexdocid>10'&amp;sortlist='[docid]:ascending'
```

Let's say the `DocId` value of the last entry in the result is 20.

For Page 3, continue the query with the same pattern as previous page:

```http
GET http:// _server_/_api/search/query?querytext='sharepoint indexdocid>20'&amp;sortlist='[docid]:ascending'
```

And so on for the rest of the pages.
