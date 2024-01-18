---
title: Search SharePoint Embedded containers and content
description: Overview on how to search SharePoint Embedded containers and content
ms.date: 1/14/2024
ms.localizationpriority: high
---

# Search SharePoint Embedded content

Use the Microsoft Search API in Microsoft Graph to search SharPoint Embedded containers and content. The Search API lets you scope the container type and file type for your queries by specifying the corresponding parameter in the request body. This arcticle describes some examples.

Note: Search API only supports Delegated permissions.

## Example 1: Search containers by container type
This example queries all container by the specified container type. The response includes all container instances of the specified container type in the tenant.

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
              "searchTerms": [],
              "hitsContainers": [
                  {
                      "hits": [
                          {
                              "hitId": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                              "rank": 1,
                              "summary": "Everything about Mango",
                              "resource": {
                                  "@odata.type": "#microsoft.graph.drive",
                                  "id": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                  "createdBy": {
                                      "user": {
                                          "displayName": "Thomas Anderson"
                                      }
                                  },
                                  "lastModifiedDateTime": "2024-01-17T01:03:07Z",
                                  "name": "AllItems.aspx",
                                  "parentReference": {
                                      "sharepointIds": {
                                          "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                                      },
                                      "siteId": "m365x87330712.sharepoint.com,b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                  },
                                  "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71/Document Library/Forms/AllItems.aspx"
                              }
                          },
                          {
                              "hitId": "b!3puSISF5wkWmOEhjMJDysJ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                              "rank": 2,
                              "summary": "Everything about Pineapple",
                              "resource": {
                                  "@odata.type": "#microsoft.graph.drive",
                                  "id": "b!3puSISF5wkWmOEhjMJDysJ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                  "createdBy": {
                                      "user": {
                                          "displayName": "Thomas Anderson"
                                      }
                                  },
                                  "lastModifiedDateTime": "2024-01-17T01:04:33Z",
                                  "name": "AllItems.aspx",
                                  "parentReference": {
                                      "sharepointIds": {
                                          "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                                      },
                                      "siteId": "m365x87330712.sharepoint.com,21929bde-7921-45c2-a638-48633090f2b0,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                  },
                                  "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_21929bde-7921-45c2-a638-48633090f2b0/Document Library/Forms/AllItems.aspx"
                              }
                          },
                          {
                              "hitId": "b!449DLtqMZEGv-G7C8riA9J6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                              "rank": 3,
                              "summary": "About Strawberry",
                              "resource": {
                                  "@odata.type": "#microsoft.graph.drive",
                                  "id": "b!449DLtqMZEGv-G7C8riA9J6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                  "createdBy": {
                                      "user": {
                                          "displayName": "Thomas Anderson"
                                      }
                                  },
                                  "lastModifiedDateTime": "2024-01-13T21:35:14Z",
                                  "name": "AllItems.aspx",
                                  "parentReference": {
                                      "sharepointIds": {
                                          "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                                      },
                                      "siteId": "m365x87330712.sharepoint.com,2e438fe3-8cda-4164-aff8-6ec2f2b880f4,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                  },
                                  "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_2e438fe3-8cda-4164-aff8-6ec2f2b880f4/Document Library/Forms/AllItems.aspx"
                              }
                          }
                      ],
                      "total": 3,
                      "moreResultsAvailable": false
                  }
              ]
          }
      ]
}
```

## Example 2: Search containers by title
This example queries all container by a specified container display name. The response includes all container instances in the tenant that match the criteria.

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
                "queryString": "Title:'mango' AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
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
                  "mango"
              ],
              "hitsContainers": [
                  {
                      "hits": [
                          {
                              "hitId": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                              "rank": 1,
                              "summary": "Everything about Mango",
                              "resource": {
                                  "@odata.type": "#microsoft.graph.drive",
                                  "id": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                  "createdBy": {
                                      "user": {
                                          "displayName": "Thomas Anderson"
                                      }
                                  },
                                  "lastModifiedDateTime": "2024-01-17T01:03:07Z",
                                  "name": "AllItems.aspx",
                                  "parentReference": {
                                      "sharepointIds": {
                                          "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                                      },
                                      "siteId": "m365x87330712.sharepoint.com,b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                  },
                                  "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71/Document Library/Forms/AllItems.aspx"
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
This example queries all container by the specified container type and container description. The response includes all container instances in the tenant that match the criteria.

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
                          "hitId": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                          "rank": 1,
                          "summary": "<c0>Everything</c0> about Mango<ddd/>",
                          "resource": {
                              "@odata.type": "#microsoft.graph.drive",
                              "id": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                              "createdBy": {
                                  "user": {
                                      "displayName": "Thomas Anderson"
                                  }
                              },
                              "lastModifiedDateTime": "2024-01-17T01:03:07Z",
                              "name": "AllItems.aspx",
                              "parentReference": {
                                  "sharepointIds": {
                                      "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                                  },
                                  "siteId": "m365x87330712.sharepoint.com,b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                              },
                              "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71/Document Library/Forms/AllItems.aspx"
                          }
                      },
                      {
                          "hitId": "b!3puSISF5wkWmOEhjMJDysJ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                          "rank": 2,
                          "summary": "<c0>Everything</c0> about Pineapple<ddd/>",
                          "resource": {
                              "@odata.type": "#microsoft.graph.drive",
                              "id": "b!3puSISF5wkWmOEhjMJDysJ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                              "createdBy": {
                                  "user": {
                                      "displayName": "Thomas Anderson"
                                  }
                              },
                              "lastModifiedDateTime": "2024-01-17T01:04:33Z",
                              "name": "AllItems.aspx",
                              "parentReference": {
                                  "sharepointIds": {
                                      "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4"
                                  },
                                  "siteId": "m365x87330712.sharepoint.com,21929bde-7921-45c2-a638-48633090f2b0,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                              },
                              "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_21929bde-7921-45c2-a638-48633090f2b0/Document Library/Forms/AllItems.aspx"
                          }
                      }
                  ],
                  "total": 2,
                  "moreResultsAvailable": false
              }
          ]
      }
  ]
}
```

## Example 4: Search for content by title in a specific container
This example queries all the content in a specific container instance by a specific title. The response includes all driveItems in the specific container instance that match the criteria.

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
                "queryString": "Title:'mango' AND ContainerId:b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0"
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
                "mango",
                "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0"
            ],
            "hitsContainers": [
                {
                    "hits": [
                        {
                            "hitId": "01H6SWAJGUN3XLVV4LSRGIJP2K2UYCT2SA",
                            "rank": 1,
                            "summary": "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in southern Asia, particularly in eastern India, Bangladesh, and<ddd/>",
                            "resource": {
                                "@odata.type": "#microsoft.graph.driveItem",
                                "size": 412,
                                "fileSystemInfo": {
                                    "createdDateTime": "2024-01-17T01:03:07Z",
                                    "lastModifiedDateTime": "2024-01-17T01:03:07Z"
                                },
                                "listItem": {
                                    "@odata.type": "#microsoft.graph.listItem",
                                    "fields": {},
                                    "id": "baee6ed4-8bd7-4c94-84bf-4ad53029ea40"
                                },
                                "id": "01H6SWAJGUN3XLVV4LSRGIJP2K2UYCT2SA",
                                "createdBy": {
                                    "user": {
                                        "displayName": "Thomas Anderson",
                                        "email": "thanderson@m365x87330712.onmicrosoft.com"
                                    }
                                },
                                "createdDateTime": "2024-01-17T01:03:07Z",
                                "lastModifiedBy": {
                                    "user": {
                                        "displayName": "Thomas Anderson",
                                        "email": "thanderson@m365x87330712.onmicrosoft.com"
                                    }
                                },
                                "lastModifiedDateTime": "2024-01-17T01:03:07Z",
                                "name": "mango.txt",
                                "parentReference": {
                                    "driveId": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                    "id": "01H6SWAJFPJ5Q5P6YD6VCZHPV7PKILUJ65",
                                    "sharepointIds": {
                                        "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4",
                                        "listItemId": "2",
                                        "listItemUniqueId": "baee6ed4-8bd7-4c94-84bf-4ad53029ea40"
                                    },
                                    "siteId": "m365x87330712.sharepoint.com,b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                },
                                "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71/Document Library/mango.txt"
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
This example queries all the content by the specified words across all containers of a specific contaienr type. The response includes all driveItems that match the criteria.

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
                "queryString": "'fruit' AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
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
                "fruit"
            ],
            "hitsContainers": [
                {
                    "hits": [
                        {
                            "hitId": "01H6SWAJGUN3XLVV4LSRGIJP2K2UYCT2SA",
                            "rank": 1,
                            "summary": "<ddd/><c0>fruit</c0> produced by the tropical tree Mangifera indica. It is believed to have originated in<ddd/><c0>fruit</c0> varies in size, shape, sweetness, skin color, and flesh color, which may be pale <ddd/>",
                            "resource": {
                                "@odata.type": "#microsoft.graph.driveItem",
                                "size": 412,
                                "fileSystemInfo": {
                                    "createdDateTime": "2024-01-17T01:03:07Z",
                                    "lastModifiedDateTime": "2024-01-17T01:03:07Z"
                                },
                                "listItem": {
                                    "@odata.type": "#microsoft.graph.listItem",
                                    "fields": {},
                                    "id": "baee6ed4-8bd7-4c94-84bf-4ad53029ea40"
                                },
                                "id": "01H6SWAJGUN3XLVV4LSRGIJP2K2UYCT2SA",
                                "createdBy": {
                                    "user": {
                                        "displayName": "Thomas Anderson",
                                        "email": "thanderson@m365x87330712.onmicrosoft.com"
                                    }
                                },
                                "createdDateTime": "2024-01-17T01:03:07Z",
                                "lastModifiedBy": {
                                    "user": {
                                        "displayName": "Thomas Anderson",
                                        "email": "thanderson@m365x87330712.onmicrosoft.com"
                                    }
                                },
                                "lastModifiedDateTime": "2024-01-17T01:03:07Z",
                                "name": "mango.txt",
                                "parentReference": {
                                    "driveId": "b!sd3IsKvnekW7t21LBHuNcZ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                    "id": "01H6SWAJFPJ5Q5P6YD6VCZHPV7PKILUJ65",
                                    "sharepointIds": {
                                        "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4",
                                        "listItemId": "2",
                                        "listItemUniqueId": "baee6ed4-8bd7-4c94-84bf-4ad53029ea40"
                                    },
                                    "siteId": "m365x87330712.sharepoint.com,b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                },
                                "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_b0c8ddb1-e7ab-457a-bbb7-6d4b047b8d71/Document Library/mango.txt"
                            }
                        },
                        {
                            "hitId": "01SMRBLT7M5MSDYQRREFDJ4JT3FGVN2APQ",
                            "rank": 2,
                            "summary": "<ddd/><c0>fruit</c0>; it is the most economically significant plant in the family Bromeliaceae. The <ddd/>",
                            "resource": {
                                "@odata.type": "#microsoft.graph.driveItem",
                                "size": 443,
                                "fileSystemInfo": {
                                    "createdDateTime": "2024-01-17T01:04:33Z",
                                    "lastModifiedDateTime": "2024-01-17T01:04:33Z"
                                },
                                "listItem": {
                                    "@odata.type": "#microsoft.graph.listItem",
                                    "fields": {},
                                    "id": "3c24ebec-3142-4621-9e26-7b29aadd01f0"
                                },
                                "id": "01SMRBLT7M5MSDYQRREFDJ4JT3FGVN2APQ",
                                "createdBy": {
                                    "user": {
                                        "displayName": "Thomas Anderson",
                                        "email": "thanderson@m365x87330712.onmicrosoft.com"
                                    }
                                },
                                "createdDateTime": "2024-01-17T01:04:33Z",
                                "lastModifiedBy": {
                                    "user": {
                                        "displayName": "Thomas Anderson",
                                        "email": "thanderson@m365x87330712.onmicrosoft.com"
                                    }
                                },
                                "lastModifiedDateTime": "2024-01-17T01:04:33Z",
                                "name": "pineapple.txt",
                                "parentReference": {
                                    "driveId": "b!3puSISF5wkWmOEhjMJDysJ6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0",
                                    "id": "01SMRBLT5PJ5Q5P6YD6VCZHPV7PKILUJ65",
                                    "sharepointIds": {
                                        "listId": "26d6a67d-bd07-4646-9c5b-85b0e519d6f4",
                                        "listItemId": "1",
                                        "listItemUniqueId": "3c24ebec-3142-4621-9e26-7b29aadd01f0"
                                    },
                                    "siteId": "m365x87330712.sharepoint.com,21929bde-7921-45c2-a638-48633090f2b0,e00b849e-3cec-4ade-8f7b-96d1f0f598fa"
                                },
                                "webUrl": "https://m365x87330712.sharepoint.com/contentstorage/CSP_21929bde-7921-45c2-a638-48633090f2b0/Document Library/pineapple.txt"
                            }
                        }
                    ],
                    "total": 2,
                    "moreResultsAvailable": false
                }
            ]
        }
    ]
}
```

## Recommendation

- When searching for contaienr or container content, you should specify the desired container type by including ContainerTypeId as part of your **queryString**. Your application should have access permission to the specified container type. Searching for container content without specifying container type will return all content the user has access to but may not be accessible by your application.
  
