---
title: Sample App To Migrate from Azure Blob Storage container to SharePoint Embedded container 
description: Tutorial in how to migrate from Azure Blob Storage container to SharePoint Embedded container
ms.date: 07/31/2024
ms.localizationpriority: high
---

# Introduction

## Purpose

This tutorial will guide you through the process of migrating content from Azure Blob Storage (ABS) to SharePoint Embedded (SPE). This is particularly useful for smaller customers who need to move their content efficiently.

## Prerequisites

1. .NET Core SDK
1. Dotnet environment to run sample app
    - It can be run Windows, Linux and MacOs
1. SharePoint Embedded container
    - For more information how to set up [SPE container](http://aka.ms/start-spe)
1. Azure Blob Storage container
    - For more information how to set up [ABS container](https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction)

### Packages
1. Microsoft Graph SDK (version 5.56.0)
1. Azure.Identity (version 1.12.0)
1. Azure.Storage.Blobs (version 12.21.0)
1. CommandLineParser (version 2.9.1)
1. Newtonsoft.Json (13.0.3)

# Authenication

## Azure Blob Storage

1. Credentials - Container level Shared Access Signature (SAS) URL.
1. Permission - Read and List

## SharePoint Embedded site

1. App type - A guest app
1. Credentials - SPE client id and SPE container
    -  Have permissions to Write and Create folder in the container
1. Permission - "User.Read", "FileStorage.Container.Selected", "Files.ReadWrite"

# Overview of the Sample App

## Description

The sample app is called "MigrateABStoSPE" and it is designed to migrate files from an Azure Blob Storage (ABS) container to a SharePoint Online (SPE) container. It uses Azure.Storage.Blobs and Newtonsoft.Json libraries for working with ABS and JSON data respectively. The app authenticates with both ABS and SPE using client credentials and performs the migration of files.

## Running the Sample App

1.	Open a terminal or command prompt.
1.	Navigate to the directory where the Program.cs file is located.
1.	Make sure you have the .NET Core SDK installed on your machine. You can check this by running the command dotnet --version in the terminal. If the command is not recognized, you can download and install the .NET Core SDK from the official Microsoft website.
1.	Once you have confirmed that the .NET Core SDK is installed, you can build the application by running the command `dotnet build`. This will compile the code and generate the necessary binaries.
1.	After the build process is complete, you can run the application by executing the command dotnet run followed by the required arguments. The required arguments are:
    - The container-level SAS URL: This is an Azure Blob container level SAS URL. It provides access to the container and its blobs.
    - The SPE client ID: This is the client ID that you are authenticating against in the SPE.
    - The SPE container ID: This is the container ID that you are migrating content to in the SPE.
    - (Optional) The list of blobs you want to copy in JSON format: This is an optional argument that allows you to specify a list of blobs to copy. The format should be an array of strings in JSON format.

For example, the command to run the application with the required arguments would look like this:

   `dotnet run Program.cs -s "<sas url>" -c "<clientid>" -o "<container id>" [-b "[\""example1.txt\"", \""example2.txt\"", \""example3.txt\""]"]`

## Code Structure

The code is organized into a single file named "Program.cs" within the "MigrateABStoSPE" namespace. The file contains the main entry point of the application, which is the Main method. It also includes several helper methods and a class definition for the Options class.

The Options class is a nested class within the Program class and defines the command-line options that the app accepts. These options include the container-level SAS URL, the SPE client ID, the SPE container ID, and an optional list of blobs to copy in JSON format.

The Main method is an asynchronous method that serves as the entry point of the application. It starts by parsing the command-line arguments using the Parser.Default.ParseArguments method and populating the corresponding variables with the provided values. It then calls the ValidateArguments method to validate the provided arguments.

After validating the arguments, the app proceeds to authenticate with both SPE and ABS using the provided credentials. If the authentication is successful, it retrieves the list of blobs to migrate from the ABS container. If no blob list is provided, it retrieves all the blobs in the container.

Next, the app iterates over the list of blobs and prints each blob's name to the console. It then creates an instance of the FileMigrator class and calls its MigrateFiles method to perform the actual migration of files.

Finally, the app checks if any blobs failed to upload during the migration process. If there are failed blobs, it prints them to the console along with a line of code that can be used to re-run the migration for those specific blobs. If all the blobs were successfully migrated, it prints a success message to the console.

## Blob and SPE Item Structure

ABS container does not adhere to a folder structure, all the blobs are stored in a flat listing structure. When migrating to SPE, the sample app parses the blob name and creates the folder structure in the container Id provided, with the container name as the top folder.

**Source**
- Container Name: Container1
    - Blob name: FolderA/blob1.txt
    - Blob name: FolderA/FolderB/blob2.txt
    - Blob name: FolderA/FolderB/FolderC/blob3.txt

**Destination**
- root
    - Container1
        - FolderA
            - blob1.txt
            - FolderB
                - blob2.txt
                - FolderC
                    - blob3.txt


# Migrating Data from Azure Blob Storage container to SharePoint Embedded container

## Connecting to Azure Blob Storage Container

```C#
    _containerClient = new BlobContainerClient(new Uri(_containerLevelSASUrl));
```

## Connecting to SharePoint Embedded

```C#
    string[] _scopes = { "User.Read", "FileStorage.Container.Selected", "Files.ReadWrite" };
    InteractiveBrowserCredentialOptions interactiveBrowserCredentialOptions = new InteractiveBrowserCredentialOptions()
    {
        ClientId = clientId,
        RedirectUri = new Uri("http://localhost"),
    };
    InteractiveBrowserCredential interactiveBrowserCredential = new InteractiveBrowserCredential(interactiveBrowserCredentialOptions);

    _graphClient = new GraphServiceClient(interactiveBrowserCredential, scopes, null);

    // Will open up a brower to provide your credentials
    var user = await _graphClient.Me.GetAsync();
```

## Downloading Data from Azure Blob Storage Container

```C#
    BlobClient blobClient = _containerClient.GetBlobClient(blobName);

    MemoryStream memoryStream = new MemoryStream();
    await blobClient.DownloadToAsync(memoryStream);
    memoryStream.Position = 0; // Reset the stream position to the beginning
    return memoryStream;
```

## Upload Data to SharePoint Embedded

```C#
    private const int _maxChunkSize = 320 * 1024;
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

    var fileUploadTask = new LargeFileUploadTask<DriveItem>(uploadSession, stream, _maxChunkSize, _graphClient.RequestAdapter);
```

# Handling Errors and Exceptions

## Common Issues

1. File already exists in destination
    - This app checks to see if the file name exist in the destination before it uploads. If there is a file with the exact same name it will not do the upload again. It will print to stdout a message that the file already exist. To fix you can either delete the file from the destination, or change the conflictBehavior to replace and not call `CheckIfItemExists` on upload.
1. Passing a blob list
    - The blob list is string that would be converted into Json value. The double quotes that wraps each item in the array would need to be escape. The app checks if this value is in correct format, if it isn't it will print an error to stdout and exit the program.
    - For example: 
        - Correct: `"[\"example1.txt\", \"example2.txt\", \"example3.txt\"]"`
        - Incorrect: `"["example1.txt", "example2.txt", "example3.txt"]"`
1. Not giving enough permission to access the ABS container
    - The minimum permissions is Read and List
1. Assigning the correct permissions to the SPE container
    - The container exists because you can get lists all of the containers. However, when you try to do something to act on the container, it just exits the program.

## Debugging Tips

# Testing the Migration

## Verification
1. When the file is queued, it will print to stdout. 

1. If the upload is **successfully** it will print out to stdout and add to array to an array blobUploadSuccessfully. When the application is complete, this data wil be set as an environment variable named `BLOB_UPLOAD_SUCCESSFULLY`.

1. If the upload **fails** it will print out to stdout and add to array blobUploadFailed. When the application is complete, this data wil be set as an environment variable named `BLOB_UPLOAD_FAILED`.

1. If the file **already exist** in the destination it will print out to stdout and add to array blobExistJoined. When the application is complete, this data wil be set as an environment variable named `BLOB_EXIST`.

1. To access the environment, open a new powershell or command prompt and type `echo $env:BLOB_EXIST` for example.

# Conclusion

## Summary

In this tutorial, we explored how to migrate content from ABS container to SPE container. By following the steps outlined, writing your own app to migrate content should be easy.

To recap, we:
1. Authenticated with ABS and Graph
1. Retrieved the blob list from ABS container
1. Uploaded the blob to the SPE container

Understanding these steps is crucial for migrating content from ABS container to SPE container. Now, try implementing these steps in your own projects and see the difference it makes!

Happy coding!

## Next Steps
- For more information about Blob Storage, see [Blob Storage documentation](https://learn.microsoft.com/azure/storage/blobs/).
- For more information about SPE, see [SharePoint Embedded documentation](http://aka.ms/start-spe).

# Appendix

## Code Repository

GitHub link