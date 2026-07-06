---
title: Make batch requests with the REST APIs
description: Use the $batch query option with the REST/OData APIs.
ms.date: 03/29/2023
ms.localizationpriority: high
ms.service: sharepoint
---

# Make batch requests with the REST APIs

This article describes how you can batch queries and operations against the REST/OData API of Microsoft SharePoint Online (and on-premises SharePoint 2016 and later) and the [Files and folders subset](working-with-folders-and-files-with-rest.md) of the Office 365 REST APIs. With this technique, you can improve the performance of your add-in by combining many operations into a single request to the server and a single response back.

## Executive summary of the $batch option

SharePoint Online (and on-premises SharePoint 2016 and later) and the Office 365 APIs implement the OData  `$batch` query option, so you can rely on [the official documentation](https://www.odata.org/documentation/odata-version-3-0/batch-processing) for details about how to use it. (Another option is to see Andrew Connell's blog posts on the subject beginning at [Part 1 - SharePoint REST API Batching](https://www.voitanos.io/blog/part-1-sharepoint-rest-api-batching-understanding-batching-requests).)

The following is a reminder of the major points:

- The request URL consists of the root service URL and the `$batch` option; for example, **`https://fabrikam.sharepoint.com/_api/$batch`** or **`https://fabrikam.office365.com/api/v1.0/me/$batch`**.
- The HTTP request body is MIME type *multipart/mixed*.
- The body of the request is divided into parts that are separated from each other by a boundary string that is specified in the header of the request.
- Each part of the body has its own HTTP verb and REST URL, and its own internal body when applicable.
- A part can be a read operation (or function invocation), or a ChangeSet of one or more write operations (or function invocations). A ChangeSet is itself a MIME type *multipart/mixed*  with subparts that contain insert, update, or delete operations.
- The request URL and the URLs inside the body must target the same site. All URLs are case-sensitive.

> [!IMPORTANT]
> SharePoint and Office 365 APIs aren't transactional and don't support "all or nothing" functionality for ChangeSets that have more than one operation within them. If any of the child operations fails, the others still complete and aren't rolled back.

## Code samples

Samples of code that uses the `$batch` query option against the SharePoint REST/OData APIs:

- **C#:** [OfficeDev/Core.ODataBatch](https://github.com/OfficeDev/PnP/tree/master/Samples/Core.ODataBatch)
- **JavaScript:** [andrewconnell/sp-o365-rest](https://github.com/andrewconnell/sp-o365-rest/blob/master/SpRestBatchSample/Scripts/App.js)

## Example requests and responses

The following is an example of a raw HTTP request that batches two GET operations that retrieve the titles of all the items in two different lists.

```http
POST https://fabrikam.sharepoint.com/_api/$batch HTTP/1.1
Authorization: Bearer <access token omitted>
Content-Type: multipart/mixed; boundary=batch_e3b6819b-13c3-43bb-85b2-24b14122fed1
Host: fabrikam.sharepoint.com
Content-Length: 527
Expect: 100-continue

--batch_e3b6819b-13c3-43bb-85b2-24b14122fed1
Content-Type: application/http
Content-Transfer-Encoding: binary

GET https://fabrikam.sharepoint.com/_api/Web/lists/getbytitle('Composed%20Looks')/items?$select=Title HTTP/1.1

--batch_e3b6819b-13c3-43bb-85b2-24b14122fed1
Content-Type: application/http
Content-Transfer-Encoding: binary

GET https://fabrikam.sharepoint.com/_api/Web/lists/getbytitle('User%20Information%20List')/items?$select=Title HTTP/1.1

--batch_e3b6819b-13c3-43bb-85b2-24b14122fed1--
```

The following is an example of the body of a raw HTTP request that batches a DELETE of a list and a GET of the SharePoint list-of-lists.

```http
POST https://fabrikam.sharepoint.com/_api/$batch HTTP/1.1
Authorization: Bearer <access token omitted>
Content-Type: multipart/mixed; boundary=batch_7ba8d60b-efce-4a2f-b719-60c27cc0e70e
Host: fabrikam.sharepoint.com
Content-Length: 647
Expect: 100-continue

--batch_7ba8d60b-efce-4a2f-b719-60c27cc0e70e
Content-Type: multipart/mixed; boundary=changeset_efb6b37c-a5cd-45cb-8f5f-4d648006e65d

--changeset_efb6b37c-a5cd-45cb-8f5f-4d648006e65d
Content-Type: application/http
Content-Transfer-Encoding: binary

DELETE https://fabrikam.sharepoint.com/_api/Web/lists/getbytitle('OldList') HTTP/1.1
If-Match: "1"

--changeset_efb6b37c-a5cd-45cb-8f5f-4d648006e65d--
--batch_7ba8d60b-efce-4a2f-b719-60c27cc0e70e
Content-Type: application/http
Content-Transfer-Encoding: binary

GET https://fabrikam.sharepoint.com/_api/Web/lists HTTP/1.1

--batch_7ba8d60b-efce-4a2f-b719-60c27cc0e70e--
```

> [!CAUTION]
> Batch requests can reduce the number of round-trip requests to the SharePoint REST API. However, uploading multiple files in a single batch is not supported.

## OData libraries

OData libraries support OData batching for many languages. Following are two examples. For a more complete list, see [OData Libraries](https://www.odata.org/libraries/).

- [.NET OData library](/odata/client/basic-crud-operations)
- [Datajs library](https://www.nuget.org/packages/datajs)

## See also

- [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
