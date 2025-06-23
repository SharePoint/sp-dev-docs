---
title: "SharePoint Migration Job Progress API"
description: "This article explains how to retrieve migration job status with GetMigrationJobProgress API."
ms.date: 06/15/2025
ms.author: jihongzuo
author: shiongzuo
manager: dapodean
audience: ISV
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---
# SharePoint GetMigrationJobProgress API

After submitting a migration job—whether an import job or an Asynchronous Metadata Read (AMR) job—you can use the GetMigrationJobProgress API to track its progress. The API is available via both SDK and REST interfaces.

It returns a sequence of job status events, including: JobQueued, JobStart, JobProgress, JobError, and JobEnd.

## Permissions
Use application-based authentication when submitting a migration job. Ensure the application is granted with Sites.Read.All permission or higher.

## GetMigrationJobProgress Method (SDK)
### Syntax
```csharp
public ClientResult Site.GetMigrationJobProgress(
Guid jobId, 
String nextToken
)
```

### Method Parameters
|    Name    |   Type   | Required |                     Description                        |
| :--------- | :------- | :------- | :----------------------------------------------------- |
|   jobId    |   Guid   |   Yes    | Unique identifier of the migration job                 |
| nextToken  |  String  |   Yes    | Token for paging position. Use "0" for initial request |

For a completed job, requests using nextToken are idempotent—repeating the same request will consistently return the same result.

### Return Values
|    Name    |   Type   |                                                      Description                                                                      |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------ |
|    Logs    |   IList  | Returns a collection of job status events when new progress is available, or an empty collection if there are no updates.             |
| NextToken  |  String  | Returns an updated string value when new progress is available, or the same value as the nextToken parameter if there are no updates. |

### Method Usage Example
```csharp
ClientResult result = context.Site.GetMigrationJobProgress(jobId, nextToken ?? "0");
context.ExecuteQuery();
IList logs = result.Value.Logs;
string newNextToken = result.Value.NextToken;
```

## GetMigrationJobProgress REST API
### HTTP Request
```rest
GET https://{site_url}/_api/site/GetMigrationJobProgress(jobId='{jobId}',nextToken=0)
```

### URI Parameters
|    Name    |   Type   | Required |                     Description                        |
| :--------- | :------- | :------- | :----------------------------------------------------- |
|   jobId    |   Guid   |   Yes    | Unique identifier of the migration job                 |
| nextToken  |  String  |   Yes    | Token for paging position. Use "0" for initial request |

### Request Headers
|                 Header                 | Required |
| :------------------------------------- | :------- |
| Authorization: Bearer {token}          |    Yes   |
| Accept: application/json;odata=verbose |    Yes   |

### Response
A JSON object when HTTP status code is 200. 

An empty JSON object when HTTP status code is other than 200.

### Error Handling
| Status Code |    Meaning     |                      Action                                             |
| :---------- | :------------- | :---------------------------------------------------------------------- |
|     403     | Unauthorized   | Ensure the app/user has at least Sites.Read.All permission.             |
|     429     | Too Many Requests  | Parse Retry-After header and retry after the specified delay.       |
|     500     | Internal Server Error | Parse error responses to identify internal errors. Do Not Retry. |
|     503     | Service Unavailable   | Parse Retry-After header and retry after the specified delay.    |

| Internal Error Code |                    Meaning                      |
| :------------------ | :---------------------------------------------- |
|     -2147213145     | Job not found                                   |
|     -2147213146     | Job status expired (valid for less than 5 days) |

### API Usage Example
#### Request Sample
```rest
GET https://contoso.sharepoint.com/_api/site/GetMigrationJobProgress(jobId=' 3e280efa-78a3-4ba1-bac6-e447aa538ca5', nextToken=0)
```

#### Successful Response Sample
Status code: 200
Response body:
```rest
{
  "d": {
    "GetMigrationJobProgress": {
      "Logs": {
        "__metadata": {
          "type": "Collection(Edm.String)"
        },
        "results": [
          "{\"MigrationType\":\"None\",\"MigrationDirection\":\"Import\",\"SiteId\":\"48f1898f-77d9-4a1b-bddc-1f49bb6dc134\",\"DbId\":\"de6b85cd-726e-4b13-ae04-629798fddbf3\",\"TotalRetryCount\":\"0\",\"JobId\":\"3e280efa-78a3-4ba1-bac6-e447aa538ca5\",\"Time\":\"05/20/2025 09:18:48.132\",\"CorrelationId\":\"91884a0c-5ee8-4e1f-a23f-e4f7ec170182\",\"Event\":\"JobQueued\"}",
          "{\"MigrationType\":\"None\",\"MigrationDirection\":\"Import\",\"SiteId\":\"48f1898f-77d9-4a1b-bddc-1f49bb6dc134\",\"WebId\":\"7206fc09-e4af-48b3-8730-ed7321396d7a\",\"DbId\":\"de6b85cd-726e-4b13-ae04-629798fddbf3\",\"FarmId\":\"f77d7b6c-ef43-4609-8fce-0e93142ce8a0\",\"ServerId\":\"44af885c-393b-4236-9417-bae7a9edc44e\",\"SubscriptionId\":\"82abb045-250e-4186-ba83-b9295930f272\",\"TotalRetryCount\":\"0\",\"JobId\":\"3e280efa-78a3-4ba1-bac6-e447aa538ca5\",\"Time\":\"05/20/2025 09:20:51.129\",\"CorrelationId\":\"7d3e7a8e-4445-4ce0-adb1-078e78cbf686\",\"Event\":\"JobStart\"}",
          "{\"MigrationType\":\"None\",\"MigrationDirection\":\"Import\",\"TotalRetryCount\":\"0\",\"ObjectType\":\"ListItem\",\"Url\":\"\",\"Id\":\"cb471d5f-593f-4a63-b59e-8eae3e35b08a\",\"SourceListItemIntId\":\"3\",\"TargetListItemIntId\":\"3\",\"ErrorCode\":\"-2147286782\",\"ErrorType\":\"Microsoft.SharePoint.SPException\",\"Message\":\"Attempted to use an object that has ceased to exist. (Exception from HRESULT: 0x80030102 (STG_E_REVERTED)) \",\"JobId\":\"3e280efa-78a3-4ba1-bac6-e447aa538ca5\",\"Time\":\"05/20/2025 09:20:55.490\",\"CorrelationId\":\"7d3e7a8e-4445-4ce0-adb1-078e78cbf686\",\"Event\":\"JobError\"}",
          "{\"MigrationType\":\"None\",\"MigrationDirection\":\"Import\",\"TotalRetryCount\":\"0\",\"FilesCreated\":\"0\",\"BytesProcessed\":\"0\",\"ObjectsProcessed\":\"4\",\"TotalExpectedSPObjects\":\"15\",\"TotalErrors\":\"3\",\"TotalWarnings\":\"0\",\"WaitTimeOnSqlThrottlingMilliseconds\":\"0\",\"TotalDurationInMs\":\"0\",\"CpuDurationInMs\":\"0\",\"SqlDurationInMs\":\"0\",\"SqlQueryCount\":\"0\",\"IsShallowCopy\":\"False\",\"CreatedOrUpdatedFileStatsBySize\":\"{}\",\"ObjectsStatsByType\":\"{\\\"SPUser\\\":{\\\"Count\\\":1,\\\"TotalTime\\\":124,\\\"AccumulatedVersions\\\":0,\\\"ObjectsWithVersions\\\":0},\\\"SPFolder\\\":{\\\"Count\\\":1,\\\"TotalTime\\\":153,\\\"AccumulatedVersions\\\":0,\\\"ObjectsWithVersions\\\":0},\\\"SPDocumentLibrary\\\":{\\\"Count\\\":1,\\\"TotalTime\\\":404,\\\"AccumulatedVersions\\\":0,\\\"ObjectsWithVersions\\\":0},\\\"SPFile\\\":{\\\"Count\\\":1,\\\"TotalTime\\\":0,\\\"AccumulatedVersions\\\":0,\\\"ObjectsWithVersions\\\":0},\\\"SPListItem\\\":{\\\"Count\\\":1,\\\"TotalTime\\\":1880,\\\"AccumulatedVersions\\\":0,\\\"ObjectsWithVersions\\\":0}}\",\"TotalExpectedBytes\":\"0\",\"FilesCreatedIrrespectiveOfVersions\":\"0\",\"BytesProcessedOnlyCurrentVersion\":\"0\",\"JobId\":\"3e280efa-78a3-4ba1-bac6-e447aa538ca5\",\"Time\":\"05/20/2025 09:20:57.380\",\"CorrelationId\":\"7d3e7a8e-4445-4ce0-adb1-078e78cbf686\",\"Event\":\"JobEnd\"}"
        ]
      },
      "NextToken": "1764",
      "__metadata": {
        "type": "SP.MigrationJobProgress"
      }
    }
  }
}
```

#### Error Response Sample
Status code: 500
Response body:
```rest
{
  "error": {
    "code": "-2147213145, Microsoft.SharePoint.SPException",
    "innererror": {
      "message": "Job not found",
      "stacktrace": "STACK_TRACE"
    },
    "message": {
      "lang": "en-US",
      "value": "Job not found"
    }
  }
} 
```

## Best Practice
Begin with nextToken=0, store the returned token, and poll at certain intervals. This method is well-suited for long-running jobs and helps ensure no updates are missed.

Since migration jobs typically take several minutes or more, polling every minute is advised—while adhering to the [guideline](https://aka.ms/spo429) to avoid throttling.

## See Also
[SharePoint Migration API](migration-api-overview.md)

[Migration Events](migration-events.md)
