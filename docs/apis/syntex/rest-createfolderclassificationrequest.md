---
title: Create folder classification request
ms.author: chucked
author: chuckedmonson
manager: pamgreen
ms.reviewer: ssquires
audience: admin
ms.topic: reference
ms.prod: microsoft-365-enterprise
search.appverid: 
ms.collection: m365initiative-syntex
ms.localizationpriority: high
description: Use REST API to create a request to classify an entire folder using a trained document understanding model.
---

# Create folder classification request

Creates a request to classify a whole folder during off-peak hours by using the applied document understanding model. (For more information, see [example](rest-createfolderclassificationrequest.md#examples).)
This API can be used to classify a whole document library by creating a work item for its root folder.

## HTTP request

```http
POST /_api/machinelearning/workItems HTTP/1.1
```

## URI Parameters

None

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for current site|

## Request body

|Name    |Type   |Description |
|--------|-------|------------|
|_metadata|string |Set the object meta on the SPO. Always use the value: {"type": "Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemEntityData"}. |
|TargetSiteId|guid|The ID of the site where the folder to classify is located. This can be omitted when TargetSiteUrl has a value. |
|TargetSiteUrl|string|The full URL of the site where the folder to classify is located. This can be omitted when TargeSiteId has a value.|
|TargetWebId|guid|The ID of the web where the folder to classify is located. This can be omitted when TargetWebServerRelativeUrl has a value. |
|TargetWebServerRelativeUrl|string|The server relative URL of the web where the folder to classify is located. This can be omitted when TargetWebId has a value.  |
|TargetUniqueId|guid|The ID of the folder to classify. This can be omitted when TargetServerRelativeUrl has a value. |
|TargetServerRelativeUrl|string|The server relative URL of the folder to classify is located. This can be omitted when TargetUniqueId has a value.|
|IsFolder|boolean|The flag that indicates if what will be classified is a folder. Always set this to true for creating a folder classification work item. |


## Responses

| Name   | Type  | Description|
|--------|-------|------------|
|201 Created| |The response is customized. If there is failure, it could still return 201 Created. The caller should further check the response body to determine the exact result.|

## Response body

| Name   | Type  | Description|
|--------|-------|------------|
|StatusCode |int |The HTTP status code. If it’s not 200 or 201, the API should have failed.|
|ErrorMessage |string |The error message that tells what's wrong when apply the model to the document library.|

## Examples

### Enqueue a request to classify a whole folder of ID "e6cff8b7-c90c-4564-b5b8-033449090932"


#### Sample request

```JSON
{
    "__metadata": {
        "type": "Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItemEntityData"
    },
    "TargetSiteId": "f686e63b-aba7-48e5-97c7-68c4c1df292f",
    "TargetWebId": "66d6b64d-6f88-4dd9-b3db-47e6f00c53e8",
    "TargetUniqueId": "e6cff8b7-c90c-4564-b5b8-033449090932",
    "IsFolder": true 
}
```

#### Sample response

**Status code:** 201

```JSON
{
    "ErrorMessage":  null,
    "StatusCode":  201
}
```

## See also

[Syntex document understanding model REST API](syntex-model-rest-api.md)
