---
title: 'Supporting % and # in file and folder with the ResourcePath API'
ms.date: 11/03/2017
---
# Supporting % and # in file and folder with the ResourcePath API

Support for % and # in file and folder is being deployed within SharePoint Online.  Unfortunately, due to existing API structures and calling patterns, working with these file names can sometimes become ambiguous.  You can find [more background behind this on our developer blog](https://dev.office.com/blogs/upcoming-changes-to-sharepoint-and-onedrive-for-business-apis-to-support-and-in-file-names).  In summary, new APIs have been added to the SharePoint Online client object model (CSOM) surface to provide support for # and % characters.

## ResourcePath
 
As a recap, note that existing String-based SharePoint APIs (such as SPFileCollection.GetByUrl) handle both encoded and decoded URLs by automatically assuming that % and # characters in a path imply that the URL has been encoded.  With new support % and # in file and folder, this automatic treatment is now problematic because it may cause downstream code to ignore or mishandle filenames with % and # in them.
 
A new class -- `Microsoft.SharePoint.Client.ResourcePath` -- has been added to APIs.  The ResourcePath class is fundamental to the support of these new characters.  It provides a new, unambiguous way to address an item within SharePoint and OneDrive for Business, because it assumes and only works with decoded URLs. It replaces String-based paths to represent a full (absolute) or partial (relative) URL for a site collection, site, file, folder or other artifact and OneDrive for Business. To properly support % and # within URLs, you will need to use the ResourcePath-based APIs along with Decoded URLs.
 
ResourcePath can be simply constructed by calling a static function `ResourcePath.FromDecodedUrl(string)`. The passed in input value can be accessed from the ResourcePath object by calling the property DecodedUrl. 
 
For existing calls that take in a String-based URL, you will need to determine whether the code path leading to String-based URL calls were provided with encoded or decoded URLs, and whether those code paths also permitted Anchor links (that is: #bookmark additions on top of the file URL.)

> Note: Do not simply find and replace existing usages of String-based URL APIs with `ResourcePath.FromDecodedUrl`.  You will need to properly determine URL and potentially decode URLs first before using the `ResourcePath.FromDecodedUrl(string)` API.

In cases where a codepath leading to a String-based SharePoint API call used **Decoded URLs (e.g., 'FY17 Report.docx')**, then you can simply replace these calls with `ResourcePath.FromDecodedUrl(string)` and equivalent ResourcePath methods listed below.
 
Note that in many cases where you read the URL from SharePoint via APIs, the ResourcePath is also provided to make these code patterns more consistent, so you can use the ResourcePath instead of URL.
 
Also note that this change also applies to SharePoint REST-based calls, as well.  Please review the scenarios below to see examples of these new APIs in REST.

## New APIs that are based on ResourcePath and supports # and %
 
Below are the new APIs that we introduced to replace the existing APIs in order to support # and %. We listed the old API and the new API side by side for your comparison. The core functionality of these APIs does not change, but how to represent the location of the item is changed.
 
The documentation of new APIs can be referred at https://msdn.microsoft.com/en-us/library/jj193041.aspx.  We have listed the .net CSOM APIs below, but the new methods are also available in equivalent form in our JavaScript CSOM libraries.
 
**Assembly Microsoft.SharePoint.Client.dll**

| Type | Old Method | New Method | 
|----------|-------------|------|
| Microsoft.SharePoint.SPList | AddItem(Microsoft.SharePoint.SPListItemCreationInformation) | AddItemUsingPath(SPListItemCreationInformationUsingPath parameters) | 
| Microsoft.SharePoint.SPFile | MoveTo(System.String, Microsoft.SharePoint.SPMoveOperations) | MoveToUsingPath(SPResourcePath newPath, SPMoveOperations moveOperations) | 
| Microsoft.SharePoint.SPFile | CopyTo(System.String, Boolean) | CopyToUsingPath(SPResourcePath newPath, bool overwrite) | 
| Microsoft.SharePoint.SPFileCollection | GetByUrl(System.String) | GetByPath(SPResourcePath) | 
| Microsoft.SharePoint.SPFileCollection | Add(System.String, Microsoft.SharePoint.SPTemplateFileType) | AddUsingPath(SPResourcePath, SPFileCollectionAddWithTemplateParameters) | 
| Microsoft.SharePoint.SPFolder | MoveTo(System.String) | MoveToUsingPath(SPResourcePath newPath) | 
| Microsoft.SharePoint.SPFolder | AddSubFolder(System.String) | AddSubFolderUsingPath(SPResourcePath leafPath) | 
| Microsoft.SharePoint.SPFolderCollection | GetByUrl(System.String) | GetByPath(SPResourcePath path) | 
| Microsoft.SharePoint.SPFolderCollection | Add(System.String) | AddUsingPath(SPResourcePath path, SPFolderCreationInformation parameters) | 
|  | AddWithOverwrite(string url, bool overwrite) |  | 
| Microsoft.SharePoint.SPRemoteWeb | GetFileByServerRelativeUrl(System.String) | GetFileByServerRelativePath(SPResourcePath path) | 
| Microsoft.SharePoint.SPWeb | GetList(System.String) | GetListUsingPath(SPResourcePath) | 
| Microsoft.SharePoint.SPWeb | GetListItem(System.String) | GetListItemUsingPath(SPResourcePath) | 


The following CSOM objects return ResourcePath properties that can be used in above APIs. Although the old property also returns decoded URLs, the new ResourcePath property is provided for convenience, simplicity and clarity in calling above APIs.  The one exception to this is the SPFolder.WelcomePage property, which formerly returned both encoded and unencoded URLs; this is now unambiguously returned via the WelcomePagePath property.

| Type | Old Property | New Property | 
|----------|-------------|------|
| Microsoft.SharePoint.SPList | DefaultViewUrl | DefaultViewPath | 
| Microsoft.SharePoint.SPList | DefaultEditFormUrl | DefaultEditFormPath | 
| Microsoft.SharePoint.SPList | DefaultNewFormUrl | DefaultNewFormPath | 
| Microsoft.SharePoint.SPList | DefaultDisplayFormUrl | DefaultDisplayFormPath | 
| Microsoft.SharePoint.SPAttachment | ServerRelativeUrl | ServerRelativePath | 
| Microsoft.SharePoint.SPFile | ServerRelativeUrl | ServerRelativePath | 
| Microsoft.SharePoint.SPFolder | ServerRelativeUrl | ServerRelativePath | 
| Microsoft.SharePoint.SPFolder | WelcomePage | WelcomePagePath/ WelcomePageParameters | 
| Microsoft.SharePoint.SPView | ServerRelativeUrl | ServerRelativePath | 
| Microsoft.SharePoint.SPDocumentLibraryInformation | ServerRelativeUrl | ServerRelativePath | 


## Existing APIs that are not ambiguous about the URL formant and can supports # and %
 
The following APIs only accept properly encoded URLs as input. They also support under-encoded URLs as long as the URL can be consumed without any ambiguity. In order words, at least # or % characters in the path of the URL should be % encoded. These APIs will continue to work in the existing way. '#' in the URL is treated as a fragment delimiter, but not part of URL path.

| Type | Old Property | 
|----------|-------------|
| Microsoft.SharePoint.SPWeb |  GetFileByUrl(System.String) |
| Microsoft.SharePoint.SPWeb |  GetFileByWOPIFrameUrl(System.String) |
| Microsoft.SharePoint.SPWeb |  GetFileByLinkingUrl(System.String) |

The following C# properties are added to return System.Uri with unambiguous encoding for use with the above APIs. The older variant of the below APIs returned decoded URLs and since they never contained # or % characters, the URL was not ambiguous. Going forward, we did not want to break the decoded behavior of the older variants to encode % and # characters in path. Therefore, new APIs were created.
 
| Type   |      Old Property      |  New Property |
|----------|-------------|------|
| Microsoft.SharePoint.SPFile |  LinkingUrl | LinkingUri |
| Microsoft.SharePoint.SPFile |  ServerRedirectedEmbedUrl | ServerRedirectedEmbedUri |


## Sample code

Here are some sample code for basic scenarios in CSOM:
 
- Add a file to a folder (.net)

```C#
  ClientContext context = new ClientContext("http://site");
  Web web = context.Web;
  // Get the parent folder
  ResourcePath folderPath = ResourcePath.FromDecodedUrl("/Shared Documents");
  Folder parentFolder = web.GetFolderByServerRelativePath(folderPath);
 
  // Create the parameters used to add a file
  ResourcePath filePath = ResourcePath.FromDecodedUrl("/Shared Documents/hello world.txt");
  byte[] fileContent = System.Text.Encoding.UTF8.GetBytes("sample file content");
  FileCollectionAddParameters fileAddParameters = new FileCollectionAddParameters();
  fileAddParameters.Overwrite = true;
  using (MemoryStream contentStream = new MemoryStream(fileContent))
  {
    // Add a file
    Microsoft.SharePoint.Client.File addedFile = parentFolder.Files.AddUsingPath(filePath, fileAddParameters, contentStream);
 
    // Select properties of added file to inspect
    context.Load(addedFile, f => f.UniqueId, f1 => f1.ServerRelativePath);
 
    // Perform the actual operation
    context.ExecuteQuery();
 
    // Print the results
    Console.WriteLine(
      "Added File [UniqueId:{0}] [ServerRelativePath:{1}]",
      addedFile.UniqueId,
      addedFile.ServerRelativePath.DecodedUrl);
  }

```

- Add a sub-folder to a folder  (.net)

```C#
    ClientContext context = new ClientContext("http://site");
    Web web = context.Web;
    // Get the parent folder
    ResourcePath folderPath = ResourcePath.FromDecodedUrl("/Shared Documents");
    Folder parentFolder = web.GetFolderByServerRelativePath(folderPath);
 
    // Create the parameters used to add a folder
    ResourcePath subFolderPath = ResourcePath.FromDecodedUrl("/Shared Documents/sub folder");
    FolderCollectionAddParameters folderAddParameters = new FolderCollectionAddParameters();
    folderAddParameters.Overwrite = true;
 
    // Add a sub folder
    Folder addedFolder = parentFolder.Folders.AddUsingPath(subFolderPath, folderAddParameters);
 
    // Select properties of added file to inspect
    context.Load(addedFolder, f => f.UniqueId, f1 => f1.ServerRelativePath);
 
    // Perform the actual operation
    context.ExecuteQuery();
 
    // Print the results
    Console.WriteLine(
        "Added Folder [UniqueId:{0}] [ServerRelativePath:{1}]",
        addedFolder.UniqueId,
        addedFolder.ServerRelativePath.DecodedUrl);
```

- Get a file in the web (.net)

```C#
    ClientContext context = new ClientContext("http://site");
    Web web = context.Web;
    // Get the file
    ResourcePath filePath = ResourcePath.FromDecodedUrl("/Shared Documents/hello world.txt");
    File file = web.GetFileByServerRelativePath(filePath);
 
    // Select properties of the file
    context.Load(file, f => f.UniqueId, f1 => f1.ServerRelativePath);
 
    // Perform the actual operation
    context.ExecuteQuery();
 
    // Print the results
    Console.WriteLine(
        "File Properties [UniqueId:{0}] [ServerRelativePath:{1}]",
        file.UniqueId,
        file.ServerRelativePath.DecodedUrl);
```

Here are some sample code for basic scenarios in REST:

- Get Folders

```
url: http://site url/_api/web/GetFolderByServerRelativePath(decodedUrl='folder name')
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

- Create Folder
 
```
url: http://site url/_api/web/Folders/AddUsingPath(decodedurl='/document library relative url/folder name')
method: POST
headers:
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
 
```
 
- Get Files
 
```
url: http://site url/_api/web/GetFileByServerRelativePath(decodedUrl='folder name/file name')
method: GET
Headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```
 
- Add Files
 
```
url: http://site url/_api/web/GetFolderByServerRelativePath(decodedUrl='folder name')/Files/AddStubUsingPath(decodedurl='testfile.txt')
methods: POST
Headers:
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    Content-Length: length
 
```
