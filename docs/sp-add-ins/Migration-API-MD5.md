---
title: "OneDrive for Business and SharePoint Online Migration API –Change for Ship Disk option"
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 6/10/2018
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint-server-itpro
localization_priority: Priority
ms.collection: 
- IT_Sharepoint_Server_Top
ms.assetid: 
description: "Change for ship disk option."
---
# OneDrive for Business and SharePoint Online Migration API:  Change for "Ship Disk" option

To use the Migration API, you must have a temporary storage container in Azure. When uploading files into the temporary storage, an MD5 is required for every files as a property. Unfortunately, when shipping the data on hard drives this MD5 property doesn’t get assigned automatically.  As a work around, we have adapted the Migration API to allow the MD5 to be passed for every files as part of the manifest instead. The same applies for IV values when encrypting the data.  

## What is stored in those Azure Blob Containers
The Migration API requires the Azure Container for content passing and also for log and queue reporting back. It can be split down as a summary into those buckets:<br>

|**Content**|**Manifest**|
|:-----|:-----|
|Files and folders|XML files|

## Other advantage
There is another big advantage of enabling the API for Ship Disk.  Since the MD5 is generated at the source instead of at the upload time in Azure, Microsoft can confirm the integrity of the file directly against the source MD5. 

## How to adapt to this change as a developer
New optional parameters in manifest.xml:

- MD5Hash <br>
- InitializationVector


## Preparing the package
The method for calling the Migration Job doesn’t change The only thing that needs to be changed is the package generation. 

In the Manifest container one file is named Manifest.xml. There are 2 optional attributes added to the file node: *MD5Hash* and *InitializationVector*. <br>

Here is a simple example:

```csharp
<File … MD5Hash="CXPP/MWYxY87NjjnLZrFg==" InitializationVector="4WlC5zQK0r9s39LoB2w==" />
```