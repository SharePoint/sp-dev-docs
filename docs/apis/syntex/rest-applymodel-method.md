---
title: Batch apply model
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
description: Use REST API to apply a document understanding model to one or more libraries.
---

# Batch Apply model

Applies (or syncs) a trained document understanding model to one or more libraries (see [example](rest-applymodel-method.md#examples)).

## HTTP request

```HTTP
POST /_api/machinelearning/publications HTTP/1.1
```

## URI parameters

None

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for current site.|

## Request body

| Name | Required | Type | Description |
|--------|-------|--------|------------|
|__metadata|yes|string|Set the object meta on the SPO. Always use the value: {"type": "Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationsEntityData"}.|
|Publications|yes|MachineLearningPublicationEntityData[]|The collection of MachineLearningPublicationEntityData each of which specifies the model and target document library.|

### MachineLearningPublicationEntityData

| Name | Required | Type | Description |
|--------|-------|--------|------------|
|ModelUniqueId|yes|string|The unique ID of the model file.|
|TargetSiteUrl|yes|string|The full URL of the target library site.|
|TargetWebServerRelativeUrl|yes|string|The server relative URL of the web for the target library.|
|TargetLibraryServerRelativeUrl|yes|string|The server relative URL of the target library.|
|ViewOption|no|string|Specifies whether to set new model view as the library default.|

## Response

| Name   | Type  | Description|
|--------|-------|------------|
|201 Created||This is a customized API to support applying a model to multi document libraries. In the case of partial success, 201 created could still be returned and the caller needs to inspect the response body to understand if the model has been successfully applied to a document library.|

## Response Body

| Name   | Type  | Description|
|--------|-------|------------|
|TotalSuccesses|int|The total number of a model being successfully applied to a document library.|
|TotalFailures|int|The total number of a model failing to be applied to a document library.|
|Details|MachineLearningPublicationResult[]|The collection of MachineLearningPublicationResult each of which specifies the detailed result of applying the model to the document library.|

### MachineLearningPublicationResult

| Name   | Type  | Description|
|--------|-------|------------|
|StatusCode|int|The HTTP status code.|
|ErrorMessage|string|The error message which tells what's wrong when apply the model to the document library.|
|Publication|MachineLearningPublicationEntityData|It specifies the model info and the target document library.| 

### MachineLearningPublicationEntityData

| Name | Type | Description |
|--------|--------|------------|
|ModelUniqueId|string|The unique ID of the model file.|
|TargetSiteUrl|string|The full URL of the target library site.|
|TargetWebServerRelativeUrl|string|The server relative URL of the web for the target library.|
|TargetLibraryServerRelativeUrl|string|The server relative URL of the target library.|

## Examples

### Apply a model to the contracts document library in the repository site

In this sample, the ID of the Contoso Contract document understanding model is `7645e69d-21fb-4a24-a17a-9bdfa7cb63dc`.

#### Sample request

```HTTP
{
    "__metadata": {
        "type": "Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationsEntityData"
    },
    "Publications": {
        "results": [
            {
                "ModelUniqueId": "7645e69d-21fb-4a24-a17a-9bdfa7cb63dc",
                "TargetSiteUrl": "https://contoso.sharepoint.com/sites/repository/",
                "TargetWebServerRelativeUrl": "/sites/repository",
                "TargetLibraryServerRelativeUrl": "/sites/repository/contracts",
                "ViewOption": "NewViewAsDefault"
            }
        ]
    }
}
```


#### Sample response

In the response, TotalFailures and TotalSuccesses refers to the number of failures and successes of the model being applies to the specified libraries.

**Status code:** 201

```JSON
{
    "Details": [
        {
            "ErrorMessage": null,
            "Publication": {
                "ModelUniqueId": "7645e69d-21fb-4a24-a17a-9bdfa7cb63dc",
                "TargetSiteUrl": "https://contoso.sharepoint.com/sites/repository/",
                "TargetWebServerRelativeUrl": "/sites/repository",
                "TargetLibraryServerRelativeUrl": "/sites/repository/contracts",
                "ViewOption": "NewViewAsDefault"
            },
            "StatusCode": 201
        }
    ],
    "TotalFailures": 0,
    "TotalSuccesses": 1
}
```

## See also

[Syntex document understanding model REST API](syntex-model-rest-api.md)
