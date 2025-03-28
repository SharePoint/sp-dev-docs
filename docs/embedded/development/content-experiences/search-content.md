---
title: Search SharePoint Embedded containers and content
description: Overview on how to search SharePoint Embedded containers and content
ms.date: 03/03/2025
ms.localizationpriority: high
---

# Search SharePoint Embedded content

Use the [Microsoft Search](/microsoftsearch/overview-microsoft-search) API in Microsoft Graph to search SharePoint Embedded containers and content. The Search API lets you scope the container type and file type for your queries by specifying the corresponding parameter in the request body. This article describes some examples.

> [!NOTE]
>
> 1. Searching SharePoint Embedded content is in Preview stage and is subject to change. Please refer to the [exceptional access pattern](../auth.md#operations-involving-searching-sharepoint-embedded-content) that describes its current permission requirements.
> 1. Search API only supports Delegated permissions.
> 1. Your search requests must specify and set the `includeHiddenContent` parameter if your application has opted out of content discoverability in Microsoft 365. Learn more about [SharePoint Embedded content discoverability](./user-experiences-overview.md).

## Example 1: Search containers by container type

This example queries all containers by the specified container type with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all container instances (`drive`) of the specified container type in the tenant:

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

This example queries all containers by a specified container display name and the SharePoint Embedded application didn't opt out from content discoverability on Microsoft 365. The response includes all container instances in the tenant that match the criteria:

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

This example queries all containers by the specified container type and container description, with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all container instances in the tenant that match the criteria:

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

This example queries all the content by a specific title in a specific container instance, with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all `driveItems` in the specific container instance that match the criteria:

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

This example queries all the content by the specified words across all containers of a specific container type, with the SharePoint Embedded application opted out from content discoverability on Microsoft 365. The response includes all `driveItems` that match the criteria:

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
## Example 6: Search containers by container custom property

This example queries all containers by the specified custom property key:value pair, with the SharePoint Embedded application that has opted out from content discoverability on Microsoft 365. The response includes all containers that match the criteria:

> [!NOTE]
> The custom property name must be appended with the text "OWSTEXT" in the query string.

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
        "queryString": "customPropertyNametOWSTEXT:customPropertyValue AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
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
              "hitId": "b!C4Psl-ZZZkaZINVay8RKt2fqu3agJbVNlIUjNuIzqlPhOJMrr7ThS4aR8L8XdZu4",
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
                "lastModifiedDateTime": "2024-08-02T17:31:06Z",
                "name": "AllItems.aspx",
                "parentReference": {
                  "sharepointIds": {
                    "listId": "2b9338e1-b4af-4be1-8691-f0bf17759bb8"
                  },
                  "siteId": "contoso.sharepoint.com,97ec830b-59e6-4666-9920-d55acbc44ab7,76bbea67-25a0-4db5-9485-2336e233aa53"
                },
                "webUrl": "https://contoso.sharepoint.com/contentstorage/CSP_97ec830b-59e6-4666-9920-d55acbc44ab7/Document Library/Forms/AllItems.aspx"
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
## Example 7: Search for content with specific content properties in the response body and sort the results

This example queries container content by specific words and requires the response to include all specified attributes on the content. Properties that are [sortable](/sharepoint/technical-reference/crawled-and-managed-properties-overview) can be used to sort the results.

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
        "queryString": "Everything about contoso"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      },
      "fields": [
        "SampleOWSText",
        "id",
        "name",
        "parentReference",
        "file",
        "folder",
        "webUrl",
        "createdDateTime",
        "lastModifiedDateTime",
        "size",
        "fileSystemInfo",
        "createdBy",
        "lastModifiedBy",
        "fileSystemInfo",
        "fileSystemInfo"
      ],
        "sortProperties": [
            {
              "name": "Created",
              "isDescending": false
            }
          ]
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
        "everything",
        "about",
        "contoso"
      ],
      "hitsContainers": [
        {
          "hits": [
            {
              "hitId": "017JL52SWZQ2M5MULUKFBIL7SZ56EB4V2Z",
              "rank": 1,
              "summary": "Everything about Contoso",
              "resource": {
                "@odata.type": "#microsoft.graph.driveItem",
                "size": 17363,
                "fileSystemInfo": {
                  "createdDateTime": "2024-06-20T21:49:03Z",
                  "lastModifiedDateTime": "2024-04-01T16:57:00Z"
                },
                "listItem": {
                  "@odata.type": "#microsoft.graph.listItem",
                  "id": "d69986d9-7451-4251-85fe-59ef881e5759",
                  "fields": {
                    "sampleOWSText": "Sample Value",
                    "id": "AAAAAH_MwHAjYctMtjgTN1cWJnYHAApvY20ubJFGtzLui9sETKcAAAAAASsAAApvY20ubJFGtzLui9sETKcAAAAAJqsAAA2",
                    "size": 17363,
                    "createdBy": "Dylan Williams"
                  }
                },
                "id": "017JL52SWZQ2M5MULUKFBIL7SZ56EB4V2Z",
                "createdBy": {
                  "user": {
                    "displayName": "Dylan Williams",
                    "email": "dywilliams@contoso.onmicrosoft.com"
                  }
                },
                "createdDateTime": "2024-06-20T21:49:03Z",
                "lastModifiedBy": {
                  "user": {
                    "displayName": "Dylan Williams",
                    "email": "dywilliams@contoso.onmicrosoft.com"
                  }
                },
                "lastModifiedDateTime": "2024-04-01T16:57:00Z",
                "name": "Constoso Details.docx",
                "parentReference": {
                  "driveId": "b!rWzsZXXFWEOeeP31bSE5BTjn_6qC3dFNloUBMv62EMilewHuRwQrQau-zcJu2BT0",
                  "id": "017JL52SXQSKBKPB7VKZCJE5ZSWUN4LZDZ",
                  "sharepointIds": {
                    "listId": "ee017ba5-0447-412b-abbe-cdc26ed814f4",
                    "listItemId": "1",
                    "listItemUniqueId": "d69986d9-7451-4251-85fe-59ef881e5759"
                  },
                  "siteId": "contoso.sharepoint.com,65ec6cad-c575-4358-9e78-fdf56d213905,aaffe738-dd82-4dd1-9685-0132feb610c8"
                },
                "webUrl": "https://contoso.sharepointt.com/contentstorage/CSP_65ec6cad-c575-4358-9e78-fdf56d213905/Document Library/Constoso Details.docx"
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

## Known Limitations

- Search requests run in the context of the signed-in user. Search results are only scoped to enforce any access control applied to the items by the user. For example, search results will include all container or container content matching the search criteria and accessible by the user regardless of whether the SharePoint Embedded application is authorized to access. You should specify the desired container type by including the ContainerTypeId as part of your **queryString** when searching for containers or container content to ensure search results are properly scoped.
- For your application to access the containers or container content in search results, it must have access permissions to the corresponding container types.

## Enumerate (filter) SharePoint Embedded content

Content can also be enumerated using URL parameters to return specific content in SharePoint Embedded containers. This does not use the search API to retrieve items.  See the [enumerate query parameter](/graph/filter-query-parameter?tabs=http) for reference.

## Example 1: enumerate content by a specific column property and view the results

This example enumerates the specified container content by the column property that is on the item:

### Request

```HTTP
GET https://graph.microsoft.com/v1.0/drives/{{ContainerID}}/items?$filter=startswith(listitem/fields/{{ColumnProperty}}, '{{Value}}')&$expand=listitem($expand=fields)
```

### Response

```HTTP
HTTP/1.1 200 OK
Content-type: application/json
{
  "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#drives('b%21CORq-a8orUGIrd3_z9t1_vjCBSeqM3JKhDglEU3DIDvEl-Hms0qoQ7QCWYNQfGOF')/items(listItem(fields()))",
  "value": [
    {
      "@odata.etag": "\"{B8051D89-836E-4B8E-BD2B-7634BAC92825},21\"",
      "@microsoft.graph.downloadUrl": "https://<tenant>.sharepoint.com/contentstorage/CSP_f96ae408-28af-41ad-88ad-ddffcfdb75fe/_layouts/15/download.aspx?UniqueId=b8051d89-836e-4b8e-bd2b-7634bac92825&Translate=false&tempauth=v1.eyJzaXRlaWQiOiJmOTZhZTQwOC0yOGFmLTQxYWQtODhhZC1kZGZmY2ZkYjc1ZmUiLCJhcHBfZGlzcGxheW5hbWUiOiJTUEUtQmFzZWJhbGwiLCJhcHBpZCI6ImZiN2NmNTIwLWNiMzMtNDViZi1hMjM4LWFlNTFkMzE2NjY1ZiIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9wdWNlbGlrZW50ZXJwcmlzZS5zaGFyZXBvaW50LmNvbUAxNTNhNmViZS1mZjYyLTRiY2UtYjFiYy1hMWVkYTNiYzY2NDUiLCJleHAiOiIxNzMxNjE3MDE3In0.CgoKBHNuaWQSAjY5EgsIzpKzp9W7wj0QBRoNMjAuMTkwLjEzNS40MioscW54cjFGalBneHh2N1lGTkp1dUpxTFZWdFFIS1hOQ2RlQ3EvUUk2aHhlcz0wuAE4AUIQoWPmC1YwAABF4iHcgCWrfkoQaGFzaGVkcHJvb2Z0b2tlbnIpMGguZnxtZW1iZXJzaGlwfDEwMDM3ZmZlOWE5NDg5ZGRAbGl2ZS5jb216ATKCARIJvm46FWL_zksRsbyh7aO8ZkWSAQVTdGV2ZZoBB1B1Y2VsaWuiASdzdGV2ZUBwdWNlbGlrZW50ZXJwcmlzZS5vbm1pY3Jvc29mdC5jb22qARAxMDAzN0ZGRTlBOTQ4OUREsgFyY29udGFpbmVyLnNlbGVjdGVkIGFsbGZpbGVzLnJlYWQgYWxsZmlsZXMud3JpdGUgY29udGFpbmVyLnNlbGVjdGVkIGFsbHNpdGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkyAEB.tfaYgtjhQxMctJeHUWb9RU7CChHXqFHT0FaM9Dt7J9I&ApiVersion=2.1",
      "createdDateTime": "2024-09-20T16:46:00Z",
      "eTag": "\"{B8051D89-836E-4B8E-BD2B-7634BAC92825},21\"",
      "id": "01UELPCREJDUC3Q3UDRZF32K3WGS5MSKBF",
      "lastModifiedDateTime": "2024-11-01T08:14:28Z",
      "name": "ClaimExample-1.docx",
      "size": 2299607,
      "webUrl": "https://<tenant>.sharepoint.com/contentstorage/CSP_f96ae408-28af-41ad-88ad-ddffcfdb75fe/_layouts/15/Doc.aspx?sourcedoc=%7BB8051D89-836E-4B8E-BD2B-7634BAC92825%7D&file=ClaimExample-1.docx&action=default&mobileredirect=true",
      "cTag": "\"c:{B8051D89-836E-4B8E-BD2B-7634BAC92825},5\"",
      "commentSettings": {
        "commentingDisabled": {
          "isDisabled": false
        }
      },
      "createdBy": {
        "application": {
          "displayName": "SPEContainerType",
          "id": "fb7cf520-cb33-45bf-a238-ae51d316665f"
        },
        "user": {
          "displayName": "SharePoint App"
        }
      },
      "lastModifiedBy": {
        "application": {
          "displayName": "SPEContainerType",
          "id": "fb7cf520-cb33-45bf-a238-ae51d316665f"
        },
        "user": {
          "displayName": "Steve Pucelik",
          "email": "Steve@<tenant>.onmicrosoft.com"
        }
      },
      "parentReference": {
        "driveId": "b!CORq-a8orUGIrd3_z9t1_vjCBSeqM3JKhDglEU3DIDvEl-Hms0qoQ7QCWYNQfGOF",
        "driveType": "other",
        "id": "01UELPCRF6Y2GOVW7725BZO354PWSELRRZ",
        "path": "/drives/b!CORq-a8orUGIrd3_z9t1_vjCBSeqM3JKhDglEU3DIDvEl-Hms0qoQ7QCWYNQfGOF/root:",
        "sharepointIds": {
          "listId": "e6e197c4-4ab3-43a8-b402-5983507c6385",
          "listItemUniqueId": "c4782251-bdd3-4766-a747-b2a2f51c3a00",
          "siteId": "f96ae408-28af-41ad-88ad-ddffcfdb75fe",
          "siteUrl": "https://<teannt>.sharepoint.com/contentstorage/CSP_f96ae408-28af-41ad-88ad-ddffcfdb75fe",
          "tenantId": "153a6ebe-ff62-4bce-b1bc-a1eda3bc6645",
          "webId": "2705c2f8-33aa-4a72-8438-25114dc3203b"
        }
      },
      "file": {
        "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "hashes": {
          "quickXorHash": "DMzi0kCsuukcHlMXiPX9tmTCXtA="
        }
      },
      "fileSystemInfo": {
        "createdDateTime": "2024-09-20T16:46:00Z",
        "lastModifiedDateTime": "2024-11-01T08:14:28Z"
      },
      "shared": {
        "scope": "unknown"
      },
      "listItem@odata.context": "https://graph.microsoft.com/v1.0/$metadata#drives('b%21CORq-a8orUGIrd3_z9t1_vjCBSeqM3JKhDglEU3DIDvEl-Hms0qoQ7QCWYNQfGOF')/items('01UELPCREJDUC3Q3UDRZF32K3WGS5MSKBF')/listItem(fields())/$entity",
      "listItem": {
        "@odata.etag": "\"{B8051D89-836E-4B8E-BD2B-7634BAC92825},21\"",
        "createdDateTime": "2024-09-20T16:46:00Z",
        "eTag": "\"{B8051D89-836E-4B8E-BD2B-7634BAC92825},21\"",
        "id": "23",
        "lastModifiedDateTime": "2024-11-01T08:14:28Z",
        "webUrl": "https://<tenant>.sharepoint.com/contentstorage/CSP_f96ae408-28af-41ad-88ad-ddffcfdb75fe/_layouts/15/Doc.aspx?sourcedoc=%7BB8051D89-836E-4B8E-BD2B-7634BAC92825%7D&file=ClaimExample-1.docx&action=default&mobileredirect=true",
        "createdBy": {
          "application": {
            "displayName": "SPEContainerType",
            "id": "fb7cf520-cb33-45bf-a238-ae51d316665f"
          },
          "user": {
            "displayName": "SharePoint App"
          }
        },
        "lastModifiedBy": {
          "application": {
            "displayName": "SPEContainerType",
            "id": "fb7cf520-cb33-45bf-a238-ae51d316665f"
          },
          "user": {
            "displayName": "Steve Pucelik",
            "email": "Steve@M<tenant>.onmicrosoft.com"
          }
        },
        "parentReference": {
          "id": "0",
          "path": "Document Library",
          "siteId": "f96ae408-28af-41ad-88ad-ddffcfdb75fe"
        },
        "contentType": {
          "id": "0x0101004368E78BC3115C4CAD94FEA35E0F9D90",
          "name": "Document"
        },
        "fields@odata.context": "https://graph.microsoft.com/v1.0/$metadata#drives('b%21CORq-a8orUGIrd3_z9t1_vjCBSeqM3JKhDglEU3DIDvEl-Hms0qoQ7QCWYNQfGOF')/items('01UELPCREJDUC3Q3UDRZF32K3WGS5MSKBF')/listItem/fields/$entity",
        "fields": {
          "@odata.etag": "\"{B8051D89-836E-4B8E-BD2B-7634BAC92825},21\"",
          "id": "23",
          "FileLeafRef": "ClaimExample-1.docx",
          "<ColumnProperty>": "<Value>",
          "ContentType": "Document",
          "Created": "2024-09-20T16:46:00Z",
          "AuthorLookupId": "1073741822",
          "Modified": "2024-11-01T08:14:28Z",
          "EditorLookupId": "7",
          "_CheckinComment": "",
          "LinkFilenameNoMenu": "ClaimExample-1.docx",
          "LinkFilename": "ClaimExample-1.docx",
          "DocIcon": "docx",
          "FileSizeDisplay": "2299607",
          "ItemChildCount": "0",
          "FolderChildCount": "0",
          "_ComplianceFlags": "",
          "_ComplianceTag": "",
          "_ComplianceTagWrittenTime": "",
          "_ComplianceTagUserId": "",
          "_CommentCount": "",
          "_LikeCount": "",
          "_DisplayName": "Confidential \\ Internal only",
          "AppAuthorLookupId": "1",
          "AppEditorLookupId": "1",
          "Edit": "0",
          "_UIVersionString": "19.0",
          "MediaServiceImageTags@odata.type": "#Collection(microsoft.graph.Json)",
          "MediaServiceImageTags": []
        }
      }
    }
  ]
}
```

## Example 2: Enumerate content by a specific column property and Order the results

This example enumerates the specified container content by the column property that is on the item and will order the results by the column specified:

### Request

```HTTP
GET https://graph.microsoft.com/v1.0/drives/{{ContainerID}}/items?$filter=listitem/fields/{{ColumnProperty}} eq '{{Value}}'&$select=id,name,lastModifiedDateTime,size&$expand=listitem($expand=fields)&$orderby=createdDateTime desc
Headers:
Content-Type: application/json
Prefer: HonorNonIndexedQueriesWarningMayFailRandomly
```

> [!NOTE]
>
> When a container has more than 5,000 items and you are using the enumerate method with the OrderBy clause, you must include the following in the header of your request.
> 
> `Content-Type: application/json`
> `Prefer: HonorNonIndexedQueriesWarningMayFailRandomly`
## Example 3: Enumerate content by mulitple column properties and Order the results

This example enumerates the specified container content by the column property you specify and the name of the document (listitem/fields/FileLeafRef) that is on the item and will order the results by the column specified:

### Request

```HTTP
GET https://graph.microsoft.com/v1.0/drives/{{ContainerID}}/items?$filter=listitem/fields/{{ColumnProperty1}} eq '{{Value}}' AND listitem/fields/FileLeafRef eq '{{Value}}' &$select=id,name,lastModifiedDateTime,size&$expand=listitem($expand=fields)&$orderby=createdDateTime desc
Headers:
Content-Type: application/json
Prefer: HonorNonIndexedQueriesWarningMayFailRandomly
```