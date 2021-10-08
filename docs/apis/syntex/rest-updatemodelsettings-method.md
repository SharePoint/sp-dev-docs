---
title: UpdateModelSettings
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
description: Use REST API to update available models settings for a SharePoint Syntex document understanding model.
---

# UpdateModelSettings

Updates available models settings (associated retention label and model description) for a SharePoint Syntex document understanding model (see [example](rest-updatemodelsettings-method.md#examples)).

## HTTP request

```HTTP
POST /_api/machinelearning/models/getbytitle('{modelFileName}')/updatemodelsettings HTTP/1.1
```

## URI parameters

|Name |In |Required|Type|Description|
|-----|---|--------|----|-----------|
|modelFileName|query|True|string|Name of the Syntex model file.|

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for the current site.|

## Request body

|Name    |Type   |Description |
|--------|-------|-------|
|ModelSettings|string|JSON of model settings.|
|Description|string|The model description.|
|RetentionLabel| |Info for the associated label (label ID and name).|

## Responses

| Name   | Type  | Description|
|--------|-------|------------|
|200 OK| |Success|

## Examples

### Update model settings for Contoso Contract

In this example, the model description and "Standard Hold" retention label are updated. The ID of the retention label is `27c5fcba-abfd-4c34-823d-0b4a48f7ffe6`.

#### Sample request

```HTTP
{
    "ModelSettings": "{\"Description\":\"This model is used to set files classified as Contoso Contracts with a standard hold retention.\", \"RetentionLabel\":{\"Id\":\"27c5fcba-abfd-4c34-823d-0b4a48f7ffe6\",\"Name\":\"Standard Hold\"}}"
}

```

#### Sample response

**Status code:** 200

## See also

[Syntex document understanding model REST API](syntex-model-rest-api.md)
