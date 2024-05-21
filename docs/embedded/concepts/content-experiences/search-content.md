---
title: Search SharePoint Embedded containers and content
description: Overview on how to search SharePoint Embedded containers and content
ms.date: 1/14/2024
ms.localizationpriority: high
---

# Search SharePoint Embedded content

Use the Microsoft Search API in Microsoft Graph to search SharePoint Embedded containers and content. The Search API lets you scope the container type and file type for your queries by specifying the corresponding parameter in the request body. This article describes some examples.

> [!NOTE]
> 1. Search API only supports Delegated permissions.
> 2. Your search requests must specify and set the `includeHiddenContent` parameter if your application has opted our from content discoverability in Microsoft 365. Learn more about [SharePoint Embedded content discoverability](./user-experiences-overview.md). 

## Example 1: Search containers by container type

This example queries all containers by the specified container type with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all container instances of the specified container type in the tenant.

### Request

```HTTP
POST /search/query
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": [
        "drive"
      ],
      "query": {
        "queryString": "ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
      },
      "sharePointOneDriveOptions": { 
        "includeHiddenContent": true
      } 
    }
  ]
}
```

### Response

```HTTP
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.searchResponse)",
  "value": [
    {
      "searchTerms": [],
      "hitsContainers": [
        {
          "hits": [
            {
              "hitId": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
              "rank": 1,
              "summary": "Everything about Contoso",
              "resource": {
                "@odata.type": "#microsoft.graph.drive",
                "id": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                "createdBy": {
                  "user": {
                    "displayName": "Dylan Williams"
                  }
                },
                "lastModifiedDateTime": "2024-01-18T19:45:25Z",
                "name": "AllItems.aspx",
                "parentReference": {
                  "sharepointIds": {
                    "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                  },
                  "siteId": "contoso.sharepoint.com,05031a50-e9c7-474c-889e-7cf44659a5b2,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                },
                "webUrl": "https://contoso.sharepoint.com/contentstorage/CSP_05031a50-e9c7-474c-889e-7cf44659a5b2/Document Library/Forms/AllItems.aspx"
              }
            }
          ],
          "total": 1,
          "moreResultsAvailable": false
        }
      ]
    }
  ]
}
```

## Example 2: Search containers by title
This example queries all containers by a specified container display name and the SharePoint Embedded application did not opt out from content discoverability on Microsoft 365. The response includes all container instances in the tenant that match the criteria.

### Request

```HTTP
POST /search/query
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": [
        "drive"
      ],
      "query": {
        "queryString": "Title:'contoso' AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
      }
    }
  ]
}
```

### Response

```HTTP
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.searchResponse)",
  "value": [
    {
      "searchTerms": [
        "contoso"
      ],
      "hitsContainers": [
        {
          "hits": [
            {
              "hitId": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
              "rank": 1,
              "summary": "Everything about Contoso",
              "resource": {
                "@odata.type": "#microsoft.graph.drive",
                "id": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                "createdBy": {
                  "user": {
                    "displayName": "Dylan Williams"
                  }
                },
                "lastModifiedDateTime": "2024-01-18T19:45:25Z",
                "name": "AllItems.aspx",
                "parentReference": {
                  "sharepointIds": {
                    "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                  },
                  "siteId": "contoso.sharepoint.com,05031a50-e9c7-474c-889e-7cf44659a5b2,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                },
                "webUrl": "https://contoso.sharepoint.com/contentstorage/CSP_05031a50-e9c7-474c-889e-7cf44659a5b2/Document Library/Forms/AllItems.aspx"
              }
            }
          ],
          "total": 1,
          "moreResultsAvailable": false
        }
      ]
    }
  ]
}
```

## Example 3: Search containers by container description
This example queries all containers by the specified container type and container description, with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all container instances in the tenant that match the criteria.

### Request

```HTTP
POST /search/query
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": [
        "drive"
      ],
      "query": {
        "queryString": "Description:'Everything' AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
      },
      "sharePointOneDriveOptions": { 
        "includeHiddenContent": true
      } 
    }
  ]
}
```

### Response

```HTTP
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.searchResponse)",
  "value": [
    {
      "searchTerms": [],
      "hitsContainers": [
        {
          "hits": [
            {
              "hitId": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
              "rank": 1,
              "summary": "<c0>Everything</c0> about Contoso<ddd/>",
              "resource": {
                "@odata.type": "#microsoft.graph.drive",
                "id": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                "createdBy": {
                  "user": {
                    "displayName": "Dylan Williams"
                  }
                },
                "lastModifiedDateTime": "2024-01-18T19:45:25Z",
                "name": "AllItems.aspx",
                "parentReference": {
                  "sharepointIds": {
                    "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                  },
                  "siteId": "contoso.sharepoint.com,05031a50-e9c7-474c-889e-7cf44659a5b2,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                },
                "webUrl": "https://contoso.sharepoint.com/contentstorage/CSP_05031a50-e9c7-474c-889e-7cf44659a5b2/Document Library/Forms/AllItems.aspx"
              }
            }
          ],
          "total": 1,
          "moreResultsAvailable": false
        }
      ]
    }
  ]
}
```

## Example 4: Search for content by title in a specific container

This example queries all the content by a specific title in a specific container instance, with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all driveItems in the specific container instance that match the criteria.

### Request

```HTTP
POST /search/query
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": [
        "driveItem"
      ],
      "query": {
        "queryString": "Title:'contoso' AND ContainerId:b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0"
      },
      "sharePointOneDriveOptions": { 
        "includeHiddenContent": true
      } 
    }
  ]
}
```

### Response

```HTTP
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.searchResponse)",
  "value": [
    {
      "searchTerms": [
        "contoso",
        "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0"
      ],
      "hitsContainers": [
        {
          "hits": [
            {
              "hitId": "01SHAK4OWIBDXV4NG2JVFLSGUXVKZ5VF5E",
              "rank": 1,
              "summary": "Contoso Detailed Design Contoso Product Specification",
              "resource": {
                "@odata.type": "#microsoft.graph.driveItem",
                "size": 56,
                "fileSystemInfo": {
                  "createdDateTime": "2024-01-18T19:46:48Z",
                  "lastModifiedDateTime": "2024-01-18T19:46:48Z"
                },
                "listItem": {
                  "@odata.type": "#microsoft.graph.listItem",
                  "fields": {},
                  "id": "5eef08c8-da34-4a4d-b91a-97aab3da97a4"
                },
                "id": "01SHAK4OWIBDXV4NG2JVFLSGUXVKZ5VF5E",
                "createdBy": {
                  "user": {
                    "displayName": "Dylan Williams",
                    "email": "dywilliams@contoso.onmicrosoft.com"
                  }
                },
                "createdDateTime": "2024-01-18T19:46:48Z",
                "lastModifiedBy": {
                  "user": {
                    "displayName": "Dylan Williams",
                    "email": "dywilliams@contoso.onmicrosoft.com"
                  }
                },
                "lastModifiedDateTime": "2024-01-18T19:46:48Z",
                "name": "contoso.txt",
                "parentReference": {
                  "driveId": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                  "id": "01SHAK4OVPJ5Q5P6YD6VCZHPV7PKILUJ65",
                  "sharepointIds": {
                    "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4",
                    "listItemId": "1",
                    "listItemUniqueId": "5eef08c8-da34-4a4d-b91a-97aab3da97a4"
                  },
                  "siteId": "contoso.sharepoint.com,05031a50-e9c7-474c-889e-7cf44659a5b2,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                },
                "webUrl": "https://contoso.sharepoint.com/contentstorage/CSP_05031a50-e9c7-474c-889e-7cf44659a5b2/Document Library/contoso.txt"
              }
            }
          ],
          "total": 1,
          "moreResultsAvailable": false
        }
      ]
    }
  ]
}
```

## Example 5: Search by content
This example queries all the content by the specified words across all containers of a specific container type, with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all driveItems that match the criteria.

### Request

```HTTP
POST /search/query
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": [
        "driveItem"
      ],
      "query": {
        "queryString": "'contoso' AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
      },
      "sharePointOneDriveOptions": { 
        "includeHiddenContent": true
      } 
    }
  ]
}
```

### Response

```HTTP
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.searchResponse)"
  "value": [
    {
      "searchTerms": [
        "contoso"
      ],
      "hitsContainers": [
        {
          "hits": [
            {
              "hitId": "01SHAK4OWIBDXV4NG2JVFLSGUXVKZ5VF5E",
              "rank": 1,
              "summary": "<c0>Contoso</c0> Detailed Design <c0>Contoso</c0> Product Specification<ddd/>",
              "resource": {
                "@odata.type": "#microsoft.graph.driveItem",
                "size": 56,
                "fileSystemInfo": {
                  "createdDateTime": "2024-01-18T19:46:48Z",
                  "lastModifiedDateTime": "2024-01-18T19:46:48Z"
                },
                "listItem": {
                  "@odata.type": "#microsoft.graph.listItem",
                  "fields": {},
                  "id": "5eef08c8-da34-4a4d-b91a-97aab3da97a4"
                },
                "id": "01SHAK4OWIBDXV4NG2JVFLSGUXVKZ5VF5E",
                "createdBy": {
                  "user": {
                    "displayName": "Dylan Williams",
                    "email": "dywilliams@contoso.onmicrosoft.com"
                  }
                },
                "createdDateTime": "2024-01-18T19:46:48Z",
                "lastModifiedBy": {
                  "user": {
                    "displayName": "Dylan Williams",
                    "email": "dywilliams@contoso.onmicrosoft.com"
                  }
                },
                "lastModifiedDateTime": "2024-01-18T19:46:48Z",
                "name": "contoso.txt",
                "parentReference": {
                  "driveId": "b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                  "id": "01SHAK4OVPJ5Q5P6YD6VCZHPV7PKILUJ65",
                  "sharepointIds": {
                    "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4",
                    "listItemId": "1",
                    "listItemUniqueId": "5eef08c8-da34-4a4d-b91a-97aab3da97a4"
                  },
                  "siteId": "contoso.sharepoint.com,05031a50-e9c7-474c-889e-7cf44659a5b2,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                },
                "webUrl": "https://contoso.sharepoint.com/contentstorage/CSP_05031a50-e9c7-474c-889e-7cf44659a5b2/Document Library/contoso.txt"
              }
            }
          ],
          "total": 1,
          "moreResultsAvailable": false
        }
      ]
    }
  ]
}
```

## Known Limitation

- Search requests run in the context of the signed-in user. Search results are only scoped to enforce any access control applied to the items by the user. For example, search results will include all container or container content matching the search criteria and accessible by the user regardless of whether the SharePoint Embedded application is authorized to access. You should specify the desired container type by including the ContainerTypeId as part of your **queryString** when searching for containers or container content to ensure search results are properly scoped.
- For your application to access the containers or container content in search results, it must have access permissions to the corresponding container types.
