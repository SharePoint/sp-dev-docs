---
title: "Migration events in Azure Queue"
description: "This article provides in-depth information on how to use Azure Queue events in migration."
ms.date: 04/18/2024
ms.author: ranren
author: underreview
manager: dapodean
audience: ITPro
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---
# Migration events in Azure Queue

This document lists all types of events Migration API and AMR API written to the Azure Queue. Use these events to get status updates on migration jobs.

## JobQueued

```log
JobId:845daca4-5529-4b0e-85ab-a603efee5b12
Time:09/29/2020 19:56:02.883
SiteId:48917234-de43-474a-9f1b-8d98ffa08425
DbId:8fd09323-b23f-430d-8957-213586ce3861
TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
CorrelationId:c8d97e9f-802f-0000-ceac-44663834d510
```

## JobPostponed

```log
JobId:845daca4-5529-4b0e-85ab-a603efee5b12
Time:09/29/2020 19:56:57.598
NextPickupTime:09/29/2020 20:16:57.519
SiteId:48917234-de43-474a-9f1b-8d98ffa08425
DbId:8fd09323-b23f-430d-8957-213586ce3861
JobsInQueue:TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
CorrelationId:d5d97e9f-702c-0000-ceb9-354fefa5e9f6
```

## JobLogFileCreate

```log
JobId:071f9aad-36e6-4bef-9f09-40b5c7498ecdTime:09/29/2020 19:56:29053
FileName:Import-071f9aad-36e6-4bef-9f09-40b5c7498ecd-1.log
CorrelationId:22ca20ec-23de-468b-add3-4e52e90d3a68
JobStart
JobId:071f9aad-36e6-4bef-9f09-40b5c7498ecdTime:09/29/2020 19:56:29:100
SiteId:48917234-de43-474a-9f1b-8d98ffa08425
WebId:36b66979-4a43-4b93-9b92-909c7186ff98
DBId:8fd09323-b23f-430d-8957-213586ce3861
FarmId:211e600c-f48d-4319-ba92-61150c8e8e8c
ServerId:cfd27448-822a-420b-bcc8-4f39629b01bc
SubscriptionId:51812136-3cba-482d-9696-532cddceab31
TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
CorrelationId:c308c0ea-a7f5-4be9-acd4-1ebd39867434
```

## JobProgress

```log
JobId:845daca4-5529-4b0e-85ab-a603efee5b12
Time:09/29/2020 19:56:32.265
FilesCreated:15
BytesProcessed:45
ObjectsProcessed:217
TotalExpectedSPObjects:403
TotalErrors:0
TotalWarnings:0
TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
WaitTimeOnSqlThrottlingMilliseconds:0
TotalDurationInMs:0
CpuDurationInMs:0
SqlDurationInMs:0
SqlQueryCount:0
CreatedOrUpdatedFileStatsBySize:
{
  "0-1K": {
    "Count": 15,
    "TotalSize": 45,
    "TotalDownloadTime": 251,
    "TotalCreationTime": 6754
  }
}
ObjectsStatsByType:
{
  "SPUser": {
    "Count": 1,
    "TotalTime": 289,
    "AccumulatedVersions": 0,
    "ObjectsWithVersions": 0
  },
  "SPFolder": {
    "Count": 2,
    "TotalTime": 144,
    "AccumulatedVersions": 0,
    "ObjectsWithVersions": 0
  },
  "SPDocumentLibrary": {
    "Count": 1,
    "TotalTime": 173,
    "AccumulatedVersions": 0,
    "ObjectsWithVersions": 0
  },
  "SPFile": {
    "Count": 200,
    "TotalTime": 6765,
    "AccumulatedVersions": 0,
    "ObjectsWithVersions": 0
  },
  "SPListItem": {
    "Count": 14,
    "TotalTime": 2111,
    "AccumulatedVersions": 0,
    "ObjectsWithVersions": 0
  }
}
TotalExpectedBytes:0
CorrelationId:ccd97e9f-a0cc-0000-ceb9-37a900bec68d
```

## JobEnd (Import)

```json
{
"Event": "JobEnd",
"JobId": "aed28dcc-efc3-46c3-89f2-b5df71ccfe85",
"Time": "04/11/2024 14:51:53.531",
"FilesCreated": "5",
"BytesProcessed": "260999",
"ObjectsProcessed": "6",
"TotalErrors": "2",
"TotalWarnings": "0",
"FilesCreatedIrrespectiveOfVersions": "1",
"BytesProcessedOnlyCurrentVersion": "111001"
}
```

### **FilesCreatedIrrespectiveOfVersions** property

An integer.

The number of files created, exclusive of file versions. If a file has multiple versions, this count increases by 1 only when all the versions are migrated.

List items aren't counted in this property.

### **BytesProcessedOnlyCurrentVersion** property

An integer. The bytes are processed with the last version of the file. If a file has multiple versions, this byte count increases only when all the versions are migrated.

List items aren't counted in this property.

## JobEnd (AMR)

AMR API generates `JobEnd` event with estimation of item counts in `TotalExpectedSPObjects` field:

```log
Event:JobEnd
JobId:e915f93a-b377-476e-995c-952fd28c0a12
Time:11/28/2023 13:41:06.109
FilesCreated:182
BytesProcessed:441084014
ObjectsProcessed:425
TotalExpectedSPObjects:425
TotalErrors:2
TotalWarnings:0
TotalRetryCount:0
MigrationType:AsyncRead
MigrationDirection:Export
```

## JobDeleted

```log
JobId:071f9aad-36e6-4bef-9f09-40b5c7498ecd
Time:09/29/2020 19:56:29.053
CorrelationId:22ca20ec-23de-468b-add3-4e52e90d3a68
```

### JobCancelled

```log
JobId:071f9aad-36e6-4bef-9f09-40b5c7498ecd
Time:09/29/2020 19:58:29053
TotalRetryCount:0
CancelledByUser:false
MigrationType:None
MigrationDirection:Import
CorrelationId:22ca20ec-23de-468b-add3-4e52e90d3a68
```

## JobError

```log
JobId:b427d8d7-2b91-4da0-aee5-4b5a5a5d867e
Time: 02/05/2019 06:56:09.732
TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
ObjectType:File
Url:Shared Documents/file.pdf
Id:fae7b4b0-2912-11e9-b0f3-7b554a52d6ab
ErrorCode:-2147024816
ErrorType:Microsoft.SharePoint.SPException
Message:ErrorMessage
CorrelationId:d8e9bc9e-20e2-8000-aa83-48a62fc5ce75
```

## JobFatalError

```log
JobId:8f728c13-95d0-4d54-96bc-4ee912bd32ce
Time: 02/05/2019 06:57:20.523
TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
ObjectType:
Url:
Id:
ErrorCode:-2147213196
ErrorType:Microsoft.SharePoint.SPException
Message:ErrorMessage
CorrelationId:b370d5a0-105d-4000-241f-9b2d70449d7b
```

## JobWarning

```log
JobId:b427d8d7-2b91-4da0-aee5-4b5a5a5d867e
Time: 02/05/2019 06:56:09.732
TotalRetryCount:0
MigrationType:None
MigrationDirection:Import
ObjectType:File
Url:Shared Documents/file.pdf
Id:fae7b4b0-2912-11e9-b0f3-7b554a52d6ab
ErrorCode:-2147024816
ErrorType:Microsoft.SharePointSPException
Message:ErrorMessage
CorrelationId:d8e9bc9e-20e2-8000-aa83-48a62fc5ce75
FinishManifestFileUpload
JobId:b427d8d7-2b91-4da0-aee5-4b5a5a5d867e
Time:02/05/2019 06:56:09.732
ManifestFileName:Filename
CorrelationId:d8e9bc9e-20e2-8000-aa83-48a62fc5ce75
```

## FinishManifestFileUpload

Indicates that AMR API exported metadata. Find exported manifest files in the Azure Blob Storage Container supplied. The event also contains the location and file names of the exported files.

### Example

```json
{"Event", "FinishManifestFileUpload"},
{"JobId", “f8d7d577-676e-47ce-ab69-ae7803979883”},
{"Time", “2019-09-03T19:11:33.903”},
{"ManifestFileName", “f8d7d577-676e-47ce-ab69-ae7803979883/ExportSettings.xml”}
```
