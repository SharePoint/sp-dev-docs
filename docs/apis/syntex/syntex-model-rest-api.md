---
title: Microsoft Syntex document understanding model REST API
description: Overview of the Microsoft Syntex document understanding model REST API.
ms.date: 10/20/2022
ms.author: chucked
author: chuckedmonson
manager: pamgreen
ms.reviewer: ssquires
audience: admin
ms.topic: reference
ms.collection: m365initiative-syntex
ms.localizationpriority: medium
---

# Microsoft Syntex unstructured document processing model REST API

You can use the SharePoint REST interface to create an unstructured document processing model, apply or remove the model to one or more libraries, and obtain or update information about the model.

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option.

For details and links to code samples, see [Make batch requests with the REST APIs](/sharepoint/dev/sp-add-ins/make-batch-requests-with-the-rest-apis).

## Prerequisites

Before you get started, make sure that you're familiar with the following:

- [Get to know the SharePoint REST service](/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)
- [Complete basic operations using SharePoint REST endpoints](/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints)

## REST commands

The following REST commands are available for working with Syntex unstructured document processing models:

- [Create model](rest-createmodel-method.md) – Creates a model and its associated content type.
- [GetByUniqueId](rest-getbyuniqueid-method.md) – Gets or updates information about a Syntex unstructured document processing model.
- [GetByTitle](rest-getbytitle-method.md) – Gets or updates information about a Syntex unstructured document processing model using the model title.
- [Apply model](rest-applymodel-method.md) – Applies (or syncs) a trained unstructured document processing model to one or more libraries.
- [Get model and library information](rest-getmodelandlibraryinfo.md) – Gets information about a model and the library where it has been applied.
- [UpdateModelSettings](rest-updatemodelsettings-method.md) – Updates available models settings (associated retention label and model description) for a Syntex unstructured document processing model.
- [BatchDelete](rest-batchdelete-method.md) – Removes an applied unstructured document processing model from one or more libraries.
- [Create file classification request](rest-createclassificationrequest.md) – Creates a request to classify a specified file or files using the applied model.
- [Create folder classification request](rest-createclassificationrequest.md) – Creates a request to classify an entire folder using the applied model.

## Scenarios

Note the following scenario examples that aren't intuitive from the method name. For more information, see each article.

The create model method only creates the model object and its associated content type. You'll need to first train the model in the content center before it can be applied to a library.

The apply model method is used to configure the model on the target library to classify documents and optionally extract additional information. This API also supports batch applying the model to multiple libraries.

The remove model method just removes the model from one or more libraries where it was previously applied. If you want to delete the model, it must first be removed from all the libraries where it was applied.


## See also

[Unstructured document processing overview](/microsoft-365/contentunderstanding/document-understanding-overview)
