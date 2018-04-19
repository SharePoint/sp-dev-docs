---
title: Upload large files sample add-in for SharePoint
ms.date: 11/03/2017
---
# Upload large files sample add-in for SharePoint

Upload files larger than 2MB to SharePoint and SharePoint Online using SaveBinaryDirect, ContentStream, StartUpload, ContinueUpload and FinishUpload. 

_**Applies to:** add-ins for SharePoint | SharePoint 2013 | SharePoint Online_

The  [Core.LargeFileUpload](https://github.com/SharePoint/PnP/tree/master/Samples/Core.LargeFileUpload) sample shows you how to use a provider-hosted add-in to upload large files to SharePoint, and how to bypass the 2 MB file upload limit. Use this solution if you want to upload files that are larger than 2 MB to SharePoint. This sample runs as a console application that uploads large files to a document library by using one of the following methods:

- The  ** [SaveBinaryDirect](https://msdn.microsoft.com/library/office/ee538285.aspx)** method on the **Microsoft.SharePoint.Client.File** class.
    
- The  ** [ContentStream](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.filecreationinformation.contentstream.aspx)** property on the **FileCreationInformation** class.
    
- The  ** [StartUpload](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.file.startupload.aspx)**,  ** [ContinueUpload](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.file.continueupload.aspx)** and ** [FinishUpload](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.file.finishupload.aspx)** methods on the **File** class.
    
The following table lists the file upload methods that are available and describes when to use each method.

**Options for uploading files**

|**File upload option**|**Considerations**|**When should you use this?**|**Supported platforms**|
|:-----|:-----|:-----|:-----|
| [Content](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.filecreationinformation.content.aspx) property on the **FileCreationInformation** class.|Maximum file size that can be uploaded is 2 MB. Time-out occurs after 30 minutes.|Use to upload files that are less than 2 MB only. |SharePoint Server 2013, SharePoint Online|
| **SaveBinaryDirect** method on the **File** class.|No file size limits. Time-out occurs after 30 minutes.|Only use this method if you're using a user-only authentication policy. User-only authentication policy is not available in an add-in for SharePoint, but can be used in native device apps, Windows PowerShell, and Windows console applications.|SharePoint Server 2013, SharePoint Online|
| **ContentStream** property on the **FileCreationInformation** class.|No file size limits. Time-out occurs after 30 minutes.|Recommended for:<br/>- SharePoint Server 2013.<br/>- SharePoint Online when the file is smaller than 10 MB.|SharePoint Server 2013, SharePoint Online|
|Upload a single file as a set of chunks using the  **StartUpload**,  **ContinueUpload**, and  **FinishUpload** methods on the **File** class.|No file size limits. Time-out occurs after 30 minutes. Each chunk of the file must upload within 30 minutes of completion of the previous chunk to avoid the time-out. |Recommended for SharePoint Online when the file is larger than 10 MB.|SharePoint Online|

## Before you begin
<a name="sectionSection0"> </a>

To get started, download the  [Core.LargeFileUpload](https://github.com/SharePoint/PnP/tree/master/Samples/Core.LargeFileUpload) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Using the Core.LargeFileUpload sample app
<a name="sectionSection1"> </a>

When you start this code sample, a console application appears. You must supply a SharePoint Online site collection URL and your logon credentials for Office 365. After authentication, the console application displays an exception. The exception occurs when the  **UploadDocumentContent** method in FileUploadService.cs tries to use the **FileCreationInformation.Content** property to upload a file that is larger than 2 MB. **UploadDocumentContent** also creates a document library called **Docs** if it does not already exist. The **Docs** document library is used later in this code sample.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```csharp
public void UploadDocumentContent(ClientContext ctx, string libraryName, string filePath)
        {
            Web web = ctx.Web;

            // Ensure that target library exists. Create if it is missing.
            if (!LibraryExists(ctx, web, libraryName))
            {
                CreateLibrary(ctx, web, libraryName);
            }

            FileCreationInformation newFile = new FileCreationInformation();

		 // The next line of code causes an exception to be thrown for files larger than 2 MB.
            newFile.Content = System.IO.File.ReadAllBytes(filePath);
            newFile.Url = System.IO.Path.GetFileName(filePath);

            // Get instances to the given library.
            List docs = web.Lists.GetByTitle(libraryName);
            
 // Add file to the library.
            Microsoft.SharePoint.Client.File uploadFile = docs.RootFolder.Files.Add(newFile);
            ctx.Load(uploadFile);
            ctx.ExecuteQuery();
        } 

```

In FileUploadService.cs, this code sample provides three options that you can use to upload large files to a document library:

- The  **File.SaveBinaryDirect** method.
    
- The  **FileCreationInformation.ContentStream** property.
    
- The  **StartUpload**,  **ContinueUpload**, and  **FinishUpload** methods on the **File** class.
    
In FileUploadService.cs,  **SaveBinaryDirect** uses the **Microsoft.SharePoint.Client.File.SaveBinaryDirect** method with a **FileStream** object to upload files to a document library.

```csharp
public void SaveBinaryDirect(ClientContext ctx, string libraryName, string filePath)
        {
            Web web = ctx.Web;
            // Ensure that the target library exists. Create it if it is missing.
            if (!LibraryExists(ctx, web, libraryName))
            {
                CreateLibrary(ctx, web, libraryName);
            }

            using (FileStream fs = new FileStream(filePath, FileMode.Open))
            {
                Microsoft.SharePoint.Client.File.SaveBinaryDirect(ctx, string.Format("/{0}/{1}", libraryName, System.IO.Path.GetFileName(filePath)), fs, true);
            }

        } 

```

In FileUploadService.cs,  **UploadDocumentContentStream** uses the **FileCreationInformation.ContentStream** property with the **FileStream** object to upload a file to a document library.

```csharp
public void UploadDocumentContentStream(ClientContext ctx, string libraryName, string filePath)
        {

            Web web = ctx.Web;
            // Ensure that the target library exists. Create it if it is missing.
            if (!LibraryExists(ctx, web, libraryName))
            {
                CreateLibrary(ctx, web, libraryName);
            }

            using (FileStream fs = new FileStream(filePath, FileMode.Open))
            {
                FileCreationInformation flciNewFile = new FileCreationInformation();

                // This is the key difference for the first case - using ContentStream property
                flciNewFile.ContentStream = fs;
                flciNewFile.Url = System.IO.Path.GetFileName(filePath);
                flciNewFile.Overwrite = true;

                List docs = web.Lists.GetByTitle(libraryName);
                Microsoft.SharePoint.Client.File uploadFile = docs.RootFolder.Files.Add(flciNewFile);

                ctx.Load(uploadFile);
                ctx.ExecuteQuery();
            }
        }

```

In FileUploadService.cs,  **UploadFileSlicePerSlice** uploads a large file to a document library as a set of chunks or fragments. **UploadFileSlicePerSlice** performs the following tasks:

1. Gets a new GUID. To upload a file in chunks, you must use a unique GUID. 
    
2. Calculates the block size of the chunk in bytes. To calculate the block size in bytes,  **UploadFileSlicePerSlice** uses **fileChunkSizeInMB**, which specifies the size of the individual chunks in MB. 
    
3. Tests if the size of the file to upload ( **fileSize**) is less than or equal to the chunk size ( **blockSize**).
    
    1. If  **fileSize** is less than or equal to the chunk size, the sample ensures that the file is still uploaded by using the **FileCreationInformation.ContentStream** property. Remember that the recommended chunk size is 10 MB or larger.
      
    2. If  **fileSize** is larger than the chunk size:
    
        1. A chunk of the file is read into  **buffer**.
    
        2. If the chunk size is equal to the file size, the entire file was read. The chunk is copied to  **lastBuffer**.  **lastBuffer** then uses **File.FinishUpload** to upload the chunk.
    
    3. If the chunk size is not equal to the file size, there is more than one chunk to read from the file.  **File.StartUpload** is called to upload the first chunk. **fileoffset**, which is used as the starting point of the next chunk, is then set to the amount of bytes uploaded from the first chunk. When the next chunk is read, if the last chunk has not been reached,  **File.ContinueUpload** is called to upload the next chunk of the file. The process repeats until the last chunk is read. When the last chunk is read, **File.FinishUpload** uploads the last chunk and commits the file. The file content is then changed when this method is finished.

> [!NOTE] 
> Consider the following best practices:
- Use a retry mechanism in case your upload is interrupted. When an uploaded file is interrupted, the file is called an unfinished file. You may restart uploading an unfinished file soon after the upload was interrupted. Unfinished files are removed from the server between 6 hours to 24 hours after the unfinished file was interrupted. This removal period might change without notice.
- When uploading a file in chunks to SharePoint Online, a lock is placed on the file in SharePoint Online. When an interruption occurs, the file remains locked for 15 minutes. If the next chunk of the file is not uploaded to SharePoint Online within 15 minutes, the lock is removed. After the lock is removed, you can resume uploading, or another user can start uploading the file. If another user starts uploading the file, your unfinished file is removed from SharePoint Online. The period of time the lock remains on a file after an upload is interrupted can change without notice.
- You might change the chunk size. We recommend using a chunk size of 10 MB.
- Resume an interrupted chunk by tracking which chunks uploaded successfully.

Chunks must be uploaded in sequential order. You cannot upload slices concurrently (for example, by using a multithreaded approach).

```
 public Microsoft.SharePoint.Client.File UploadFileSlicePerSlice(ClientContext ctx, string libraryName, string fileName, int fileChunkSizeInMB = 3)
        {
            // Each sliced upload requires a unique ID.
            Guid uploadId = Guid.NewGuid();

            // Get the name of the file.
            string uniqueFileName = Path.GetFileName(fileName);

            // Ensure that target library exists, and create it if it is missing.
            if (!LibraryExists(ctx, ctx.Web, libraryName))
            {
                CreateLibrary(ctx, ctx.Web, libraryName);
            }
            // Get the folder to upload into. 
            List docs = ctx.Web.Lists.GetByTitle(libraryName);
            ctx.Load(docs, l => l.RootFolder);
            // Get the information about the folder that will hold the file.
            ctx.Load(docs.RootFolder, f => f.ServerRelativeUrl);
            ctx.ExecuteQuery();

            // File object.
            Microsoft.SharePoint.Client.File uploadFile;

            // Calculate block size in bytes.
            int blockSize = fileChunkSizeInMB * 1024 * 1024;

            // Get the information about the folder that will hold the file.
            ctx.Load(docs.RootFolder, f => f.ServerRelativeUrl);
            ctx.ExecuteQuery();


            // Get the size of the file.
            long fileSize = new FileInfo(fileName).Length;

            if (fileSize <= blockSize)
            {
                // Use regular approach.
                using (FileStream fs = new FileStream(fileName, FileMode.Open))
                {
                    FileCreationInformation fileInfo = new FileCreationInformation();
                    fileInfo.ContentStream = fs;
                    fileInfo.Url = uniqueFileName;
                    fileInfo.Overwrite = true;
                    uploadFile = docs.RootFolder.Files.Add(fileInfo);
                    ctx.Load(uploadFile);
                    ctx.ExecuteQuery();
                    // Return the file object for the uploaded file.
                    return uploadFile;
                }
            }
            else
            {
                // Use large file upload approach.
                ClientResult<long> bytesUploaded = null;

                FileStream fs = null;
                try
                {
                    fs = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                    using (BinaryReader br = new BinaryReader(fs))
                    {
                        byte[] buffer = new byte[blockSize];
                        Byte[] lastBuffer = null;
                        long fileoffset = 0;
                        long totalBytesRead = 0;
                        int bytesRead;
                        bool first = true;
                        bool last = false;

                        // Read data from file system in blocks. 
                        while ((bytesRead = br.Read(buffer, 0, buffer.Length)) > 0)
                        {
                            totalBytesRead = totalBytesRead + bytesRead;

                            // You've reached the end of the file.
                            if (totalBytesRead == fileSize)
                            {
                                last = true;
                                // Copy to a new buffer that has the correct size.
                                lastBuffer = new byte[bytesRead];
                                Array.Copy(buffer, 0, lastBuffer, 0, bytesRead);
                            }

                            if (first)
                            {
                                using (MemoryStream contentStream = new MemoryStream())
                                {
                                    // Add an empty file.
                                    FileCreationInformation fileInfo = new FileCreationInformation();
                                    fileInfo.ContentStream = contentStream;
                                    fileInfo.Url = uniqueFileName;
                                    fileInfo.Overwrite = true;
                                    uploadFile = docs.RootFolder.Files.Add(fileInfo);

                                    // Start upload by uploading the first slice. 
                                    using (MemoryStream s = new MemoryStream(buffer))
                                    {
                                        // Call the start upload method on the first slice.
                                        bytesUploaded = uploadFile.StartUpload(uploadId, s);
                                        ctx.ExecuteQuery();
                                        // fileoffset is the pointer where the next slice will be added.
                                        fileoffset = bytesUploaded.Value;
                                    }

                                    // You can only start the upload once.
                                    first = false;
                                }
                            }
                            else
                            {
                                // Get a reference to your file.
                                uploadFile = ctx.Web.GetFileByServerRelativeUrl(docs.RootFolder.ServerRelativeUrl + System.IO.Path.AltDirectorySeparatorChar + uniqueFileName);

                                if (last)
                                {
                                    // Is this the last slice of data?
                                    using (MemoryStream s = new MemoryStream(lastBuffer))
                                    {
                                        // End sliced upload by calling FinishUpload.
                                        uploadFile = uploadFile.FinishUpload(uploadId, fileoffset, s);
                                        ctx.ExecuteQuery();

                                        // Return the file object for the uploaded file.
                                        return uploadFile;
                                    }
                                }
                                else
                                {
                                    using (MemoryStream s = new MemoryStream(buffer))
                                    {
                                        // Continue sliced upload.
                                        bytesUploaded = uploadFile.ContinueUpload(uploadId, fileoffset, s);
                                        ctx.ExecuteQuery();
                                        // Update fileoffset for the next slice.
                                        fileoffset = bytesUploaded.Value;
                                    }
                                }
                            }

                        } // while ((bytesRead = br.Read(buffer, 0, buffer.Length)) > 0)
                    }
                }
                finally
                {
                    if (fs != null)
                    {
                        fs.Dispose();
                    }
                }
            }

            return null;
        }
```

After the code sample is finished, in your Office 365 site, you can go to the  **Docs** document library by choosing **Recent** > **Docs**. Verify that the  **Docs** document library contains three large files.

## See also
<a name="bk_addresources"> </a>

-  [Enterprise content management solutions for SharePoint 2013 and SharePoint Online](Enterprise-Content-Management-solutions-for-SharePoint-2013-and-SharePoint-Online.md)
    
-  [Core.BulkDocumentUploader sample](https://github.com/SharePoint/PnP/tree/master/Samples/Core.BulkDocumentUploader)
