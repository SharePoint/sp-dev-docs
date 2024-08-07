---
title: Sample App to Migrate from Azure Blob Storage container to SharePoint Embedded container
description: Tutorial in how to migrate from Azure Blob Storage container to SharePoint Embedded container
ms.date: 07/31/2024
ms.localizationpriority: high
---

# Tutorial For Migrating Content From ABS To SPE

## Purpose

This tutorial will guide you through migrating content from Azure Blob Storage (ABS) to SharePoint Embedded (SPE). This is particularly useful for customers who have 500 docs in the blob storage container.

### Prerequisites

1. M365 subscription
1. Azure account
1. .NET Core SDK [version 8.0.303](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
1. Dotnet environment to run sample app
    - It can be run Windows, Linux and MacOs
1. SharePoint Embedded container
    - For more information how to set up [SPE container](https://aka.ms/start-spe)
1. Azure Blob Storage container
    - For more information how to set up [ABS container](../../../../azure/storage/blobs/storage-blobs-introduction)

### Packages
1. Microsoft Graph SDK (version 5.56.0)
1. Azure.Identity (version 1.12.0)
1. Azure.Storage.Blobs (version 12.21.0)
1. CommandLineParser (version 2.9.1)
1. Newtonsoft.Json (13.0.3)

## Authentication

### Azure Blob Storage

1. Credentials - Container level Shared Access Signature (SAS) URL.
1. Permission - Read and List

### SharePoint Embedded site

Minimum Requirements
1. An app registration in Azure
1. Credentials - SPE client id and SPE container
    -  Have permissions to Write and Create folder in the container
1. Permission - "User.Read", "FileStorageContainer.Selected", "Files.ReadWrite"
1. Add `Mobile and desktop application` - add redirect URI `http://localhost`
![alt text](../images/app-registration-console-platform.png)

## Overview of the Sample App

### Description

The sample app is called "MigrateABStoSPE" and it is designed to migrate files from an Azure Blob Storage (ABS) container to a SharePoint Embedded (SPE) container. It uses Azure.Storage.Blobs and Newtonsoft.Json libraries for working with ABS and JSON data respectively. The app authenticates with both ABS and SPE using client credentials and performs the migration of files.

### Running the Sample App

1.	Open a terminal or command prompt.
1.	Navigate to the directory where the Program.cs file is located.
1.	Make sure you have the .NET Core SDK installed on your machine. You can check this by running the command dotnet --version in the terminal. If the command is not recognized, you can download and install the .NET Core SDK from the official Microsoft website.
1.	Once you have confirmed that the .NET Core SDK is installed, you can build the application by running the command `dotnet build`. This will compile the code and generate the necessary binaries.
1.	After the build process is complete, you can run the application by executing the command dotnet run followed by the required arguments. The required arguments are:
    - The container-level SAS URL: This is an Azure Blob container level SAS URL. It provides access to the container and its blobs.
    - The SPE tenant ID: This is the tenant you are authenticating against in the SPE.
    - The SPE client ID: This is the client you are authenticating against in the SPE.
    - The SPE container ID: This is the container you are migrating content to in the SPE. For more information on how to get [container id](../../../../graph/api/filestorage-list-containers?view=graph-rest-1.0&tabs=http)
    - (Optional) The list of blobs you want to copy in JSON format: This is an optional argument that allows you to specify a list of blobs to copy. The format should be an array of strings in JSON format.

For example, the command to run the application with the required arguments would look like this:

`dotnet run Program.cs -- --sasurl "<sas url>" --tenantid "<tenant id>" --clientid "<client id>" --containerid "<container id>" [ --blobfile "<file name>" --outputfile "<file name>" ]`

### Blob and SPE Item Structure

ABS container does not adhere to a folder structure, all the blobs are stored in a flat listing structure. When migrating to SPE, the sample app parses the blob name and creates the folder structure in the container Id provided, with the container name as the top folder. If you are migrating to the root folder, you can ignore this section.

**Source**
- Container Name: Container1
    - Blob name: FolderA/blob1.txt
    - Blob name: FolderA/FolderB/blob2.txt
    - Blob name: FolderA/FolderB/FolderC/blob3.txt

**Destination**
- Drive Item folder
    - Container1
        - FolderA
            - blob1.txt
            - FolderB
                - blob2.txt
                - FolderC
                    - blob3.txt


## Migrating Data from Azure Blob Storage container to SharePoint Embedded container

This provides code snippets on how to accomplish the migration. Keep in mind all the validation has been removed.

### Connecting to Azure Blob Storage Container
```C#
    _containerClient = new BlobContainerClient(new Uri(_containerLevelSASUrl));
```

### Connecting to SharePoint Embedded
```C#
    string[] _scopes = { "User.Read", "FileStorageContainer.Selected", "Files.ReadWrite" };
    InteractiveBrowserCredentialOptions interactiveBrowserCredentialOptions = new InteractiveBrowserCredentialOptions()
    {
        ClientId = clientId,
        RedirectUri = new Uri("http://localhost"),
    };
    InteractiveBrowserCredential interactiveBrowserCredential = new InteractiveBrowserCredential(interactiveBrowserCredentialOptions);

    _graphClient = new GraphServiceClient(interactiveBrowserCredential, scopes, null);

    // Will open up a browser to provide your credentials
    var user = await _graphClient.Me.GetAsync();
```

### Geting the blob list
```C#
    var blobs = new List<string>();
    await foreach (var blobItem in _containerClient.GetBlobsAsync())
    {
        blobs.Add(blobItem.Name);
    }
    return blobs;
```

### Thread pooling
```C#
    private CountdownEvent _countdown;

    // This is how the thread pool knows how many files are being migrated
    _countdown = new CountdownEvent(blobs.Count);
```

### Traverse blob list
```C#
    // It creates a new folder in the destination. The name of the folder is the blob's container name.
    containerFolder = await _gcm.CreateFolder(_containerName, "root");

    // Traverse the blob list
    foreach (var blobName in fileList)
    {
        FileStructure fs = new FileStructure() { blobName = blobName };

        // This function parses the flat file into folder hierarchy and create the folder structure in the destination. It will retrieve the parentFolderId that the file should be copied to.
        // If you are going to copy it to root you can comment this line out. The parentFolderId will be containerFolder.Id
        fs.parentFolderId = TraverseFileListing(fs, containerFolder.Id)

        // This is where the thread pool happens
        ThreadPool.QueueUserWorkItem(MigrateFile, fs);
    }

    // Call so the program doesn't end, it waits for all the files to be processed
    _countdown.Wait();
```

### Traverse file listing
```C#
    // Check if file exist before traversing to same time
    ...

    // Parse for folder path not including the file name and put it in an array
    var pathSegments = filePath.Split(new char[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
    string[] directoriesParts = pathSegments.Take(pathSegments.Length - 1).ToArray();

    // Traverse the folder listing and create 1 folder at a time
    string relativePath = _containerName;
    string newFolderId = parentFolderId;
    foreach (string folderName in directoriesParts)
    {
        string newPath = relativePath + _separator + folderName;
        ...

        DriveItem subFolder = await _gcm.CheckIfItemExists(folderName, newFolderId);
        if (subFolder == null)
        {
            subFolder = await _gcm.CreateFolder(folderName, newFolderId);
            ...
        }
        newFolderId = subFolder.Id;

        relativePath = newPath;
    }

    return newFolderId;
```

### Check if item exists
```C#
    var item = await _graphClient.Drives[_containerId].Items[parentFolderId].ItemWithPath(itemPath).GetAsync();
```

### Create folder
```C#
    private const int _maxRetry = 3;

    var folder = new DriveItem
    {
        Name = folderName,
        Folder = new Folder(),
        AdditionalData = new Dictionary<string, object>()
        {
            { "@microsoft.graph.conflictBehavior", "fail" }
        }
    };

    // For more information on retry handler, https://github.com/microsoftgraph/msgraph-sdk-dotnet/blob/dev/docs/upgrade-to-v5.md#per-request-options.
    var retryHandlerOption = new RetryHandlerOption
    {
        MaxRetry = _maxRetry,
        ShouldRetry = (delay, attempt, message) => true
    };

    var createdFolder = await _graphClient.Drives[_containerId].Items[parentFolderId].Children.PostAsync(folder, requestConfiguration => requestConfiguration.Options.Add(retryHandlerOption));
```

### MigrateFile
```C#
    internal async void MigrateFile(Object stateInfo)
    {
        var fileStructure = (FileStructure)stateInfo;

        // Check if file exists in destination
        ...

        // Migrate the file
        bool result = await TransferBlobToSharePointAsync(fileStructure.blobName, fileStructure.parentFolderId);

        // Signal the countdown event that a file has been migrated
        _countdown.Signal();

        return;
    }
```

### TransferBlobToSharePointAsync
```C#
    Stream blobStream = await _abm.DownloadBlobStreamAsync(blobName);

    string fileName = Path.GetFileName(blobName);
    await _gcm.UploadStreamToSharePointAsync(blobStream, parentFolderId, fileName);
```

### DownloadBlobStreamAsync
```C#
    BlobClient blobClient = _containerClient.GetBlobClient(blobName);

    MemoryStream memoryStream = new MemoryStream();
    await blobClient.DownloadToAsync(memoryStream);
    memoryStream.Position = 0; // Reset the stream position to the beginning
```

### UploadStreamToSharePointAsync
```C#
    int _maxChunkSize = 320 * 1024;

    var uploadSessionRequestBody = new CreateUploadSessionPostRequestBody()
    {
        AdditionalData = new Dictionary<string, object>
        {
            // Fail is set here, so it doesn't get upload again if it already exist
            { "@microsoft.graph.conflictBehavior", "fail" }
        }
    };

    var uploadSession = await _graphClient.Drives[_containerId]
        .Items[parentFolderId]
        .ItemWithPath(fileName)
        .CreateUploadSession
        .PostAsync(uploadSessionRequestBody);

    // The stream is the same stream from the downloading the blob
    var fileUploadTask = new LargeFileUploadTask<DriveItem>(uploadSession, stream, _maxChunkSize, _graphClient.RequestAdapter);
        IProgress<long> progress = new Progress<long>(prog => Console.WriteLine($"Uploaded {fileName} {prog} bytes"));

    // Check uploadResult.UploadSucceeded to see if it is successful
    var uploadResult = await fileUploadTask.UploadAsync(progress);
```

## Handling Errors and Exceptions

### Common Issues

1. File already exists in destination
    - This app checks to see if the file name exists in the destination before it uploads. If there is a file with the exact same name, it will not do the upload again. It will print to stdout a message that the file already exists. To fix it you can either delete the file from the destination or change the conflictBehavior to replace and not call `CheckIfItemExists` on upload.
1. Passing a blob list
    - The blob list is string that would be converted into Json value. The double quotes that wrap each item in the array would need to be escaped. The app checks if this value is in correct format, if it isn't it will print an error to stdout and exit the program.
    - For example:
        - Correct: `"[\""example1.txt\", \""example2.txt\", \""example3.txt\"]"`
        - Incorrect: `"["example1.txt", "example2.txt", "example3.txt"]"`
1. Not giving enough permission to access the ABS container
    - The minimum permissions are Read and List
1. Assigning the correct permissions to the SPE container
    - The container exists because you can get lists of all the containers. However, when you try to do something to act on the container, it just exits the program.

## Testing the Migration

### Verification
1. When the file is queued, it will print to stdout.

1. If the upload is **successfully** it will print out to stdout and add to array to an array blobUploadSuccessfully. When the application is complete, this data wil be set as an environment variable named `BLOB_UPLOAD_SUCCESSFULLY`.

1. If the upload **fails** it will print out to stdout and add to array blobUploadFailed. When the application is complete, this data wil be set as an environment variable named `BLOB_UPLOAD_FAILED`.

1. If the file **already exist** in the destination it will print out to stdout and add to array blobExistJoined. When the application is complete, this data wil be set as an environment variable named `BLOB_EXIST`.

1. To access the environment, open a new powershell or command prompt and type `echo $env:BLOB_EXIST` for example.

## Conclusion

### Summary

In this tutorial, we explored how to migrate content from ABS container to SPE container. By following the steps outlined, writing your own app to migrate content should be easy.

To recap, we:
1. Authenticated with ABS and Graph
1. Retrieved the blob list from ABS container
1. Uploaded the blob to the SPE container

Understanding these steps is crucial for migrating content from ABS container to SPE container. Now, try implementing these steps in your own projects and see the difference it makes!

Happy coding!

### Next Steps
- For more information about Blob Storage, see [Blob Storage documentation](../../../../azure/storage/blobs/storage-blobs-introduction).
- For more information about SPE, see [SharePoint Embedded documentation](https://aka.ms/start-spe).

## Appendix

### Code Repository

GitHub link