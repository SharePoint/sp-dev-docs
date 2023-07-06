---
title: "Exporting video transcripts when using the SharePoint Import Migration API"
description: "Learn how to export videos that contains a transcript as an alternate content stream."
ms.date: 06/30/2023
ms.author: jhendr
author: JoanneHendrickson
manager: serdars
search.appverid: MET150
ms.subservice: migration-tool
---

# How to export video transcripts using the SharePoint Important Migration API

Transcripts of video files, like those in Teams meeting recordings, are stored in a format similar to a zip file. If you are migrating videos from one source to another, you must use a new flag to ensure the entire zip file is migrated to the destination. Otherwise, you will inadvertently leave behind the alternate content stream, the transcript.

## Step 1:  Check if the file contains alternate content streams

1. Check to see if the SPFile object has the property **SPFile.HasAlternateContentStreams**.  Use the [REST or CSOM API](/sharepoint/dev/sp-add-ins/working-with-folders-and-files-with-rest) to fetch this property value.
3. If set to **True**, the file contains alternate content streams.


***Example:***

```powershell

GET https://{site_url}/_api/web/GetFileByServerRelativeUrl(‘/serverrelativeurl’)/HasAlternateContentStreams

```

## Step 2: Download the file with alternate content streams

A zip formatted stream including primary and alternate streams can be downloaded if the file request includes **SPOpenBinaryOptions.GetAsZipWithAltStreamsIfAvailable**. 

1. Use [REST or CSOM API](/sharepoint/dev/sp-add-ins/working-with-folders-and-files-with-rest) to download the zip formatted content stream. 
2. You must include **SPOpenBinaryOptions.GetAsZipWithAltStreamsIfAvailable**.  If this is not specified, only the primary file content stream is returned.

***Example:*** 

```powershell

GET https://{site_url}/_api/web/GetFileByServerRelativeUrl(‘/serverrelativeurl’)/OpenBinaryStreamWithOptions(openOptions=1048576)

```
Note: In the example above, "1048576" corresponds to the integer value of enum *SPOpenBinaryOptions.GetAsZipWithAltStreamsIfAvailable*.

## Step 3: Import the file with alternate content streams

Use the Migration API to import the zip formatted stream for a file with alternate content streams to SPO. The main steps involved are:

 
1. Upload the zip formatted stream downloaded with *SPOpenBinaryOptions.GetAsZipWithAltStreamsIfAvailable* as the primary file to the Azure location.
2. When preparing the migration Manifest .xml file, add the property **vti_hasAlternateContentStreams** to the SPFile object with the value of **TRUE**.  
3. Call the Migration API as normal. Internally, SPO will unzip the provided content stream and set the primary file stream and associated alternate content streams correctly.
4. After the import, verify the property **SPFile.HasAlternateContentStreams** to confirm if it’s set to **True**.

***Example:***

```powershell 

<SPObject Url="Shared Documents/TestTMR.mp4" ObjectType="SPFile" Id="72b62f15-24be-4a8d-8023-ed7c4feae8c9"….>
<File Url="Shared Documents/TestTMR.mp4" ParentWebUrl="/" … Name="TestTMR.mp4">
<Properties>
<Property Name="vti_hasAlternateContentStreams" Value="TRUE" Access="ReadWrite" Type="Boolean"/>
</Properties>

```
