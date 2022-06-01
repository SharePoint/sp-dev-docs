---
title: Pagination for large result sets
description: If you have a large number of search results (for example, over 50,000) to page through in a query, it is recommended to use the approach explained in this article instead of the approach of StartRow.
ms.date: 10/14/2020
ms.prod: sharepoint
ms.localizationpriority: high
---

# Pagination for large result sets

If you have a large number of search results (for example, over 50,000) to page through in a query, it is recommended to use the approach explained in this article instead of the approach of [StartRow](./sharepoint-search-rest-api-overview.md#startrow). This approach uses sorting on `[docid]` in ascending order and uses a query restriction on the `IndexDocId` value with an increasing value of `IndexDocID` for each new page.

The advantages of this approach are:

- It provides pagination with better performance
- It does not have a limit on the number of pages (if you use the approach of [StartRow](./sharepoint-search-rest-api-overview.md#startrow) and the `StartRow` value is greater than 50,000, there is a risk of being throttled by SharePoint)

Here is an example of using this approach:

For Page 1, issue a query with sort on `[docid]` in ascending order:

```http
GET http://{site_url}/_api/search/query?querytext='sharepoint'&amp;sortlist='[docid]:ascending'
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
GET http://{site_url}/_api/search/query?querytext='sharepoint indexdocid>10'&amp;sortlist='[docid]:ascending'
```

Let's say the `DocId` value of the last entry in the result is 20.

For Page 3, continue the query with the same pattern as previous page:

```http
GET http://{site_url}/_api/search/query?querytext='sharepoint indexdocid>20'&amp;sortlist='[docid]:ascending'
```

And so on for the rest of the pages.

To use the same approach in CSOM, see the following example:
```csharp
...
if (startRow == 0) // When issueing the query for first time, we don't have a DocId value yet
    keywordQuery.QueryText = "sharepoint";
else  // Putting the IndexDocId first and then the 'actual' query matters (in this case searching for the keyword 'sharepoint')
    keywordQuery.QueryText = string.Format("IndexDocId>{0} AND (sharepoint)", startRow);
keywordQuery.EnableSorting = true;
keywordQuery.SortList.Add("[DocId]", Microsoft.SharePoint.Client.Search.Query.SortDirection.Ascending);
...
```

> [!NOTE]
> When using the SortList in search queries, the fieldname being used must be enclosed by brackets (e.g. `[DocId]`).
