---
title: Create model
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
description: Use REST API to create a model and its associated content type.
---

# Create model

Creates a model and its associated content type. Note that this only creates the model. It will still need to be trained in the content center (see [example](rest-createmodel-method.md#examples)).

## HTTP request

```http
POST /_api/machinelearning/models HTTP/1.1
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
|_metadata|  |Set the object meta on the SPO. Always use the value: {"type": "Microsoft.Office.Server.ContentCenter.SPMachineLearningModelEntityData"}. |
|ContentTypeGroup|string|The associated content type group associated with the model. Defaulted to "Intelligent Document Content Types".|
|ContentTypeName|string|The associated content type name. The created model file will have the same name.|

## Responses

| Name   | Type  | Description|
|--------|-------|------------|
|201 Created| |Success|

## Examples

### Create a new document understanding model called "Contoso Contract"

#### Sample request

```json
{
    "__metadata": {
        "type": "Microsoft.Office.Server.ContentCenter.SPMachineLearningModelEntityData"
    },
    "ContentTypeGroup": "Intelligent Document Content Types",
    "ContentTypeName": "Contoso Contract"
}
```

#### Sample response

**Status code:** 201

## See also

[Syntex document understanding model REST API](syntex-model-rest-api.md)
