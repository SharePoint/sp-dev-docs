---
title: Machine Translation Services in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 15a81428-da94-40b8-8ed4-6a12f05661e2
---


# Machine Translation Services in SharePoint 2013
Learn about the Machine Translation Service, which is a new service application in SharePoint 2013 that provides automatic machine translation of files and sites.
## Machine Translation Service overview
<a name="TranslationSvc_Overview"> </a>


> **Note:**
> Using machine translation will allow users to send content to Microsoft for translation. Microsoft may use content users send us to improve the quality of translations. If you use the Machine Translation Service in your application, you are responsible for informing users that this application will allow users to send content to Microsoft for translation and that Microsoft may use content users send us to improve the quality of translations. See Microsoft Translator Privacy for more information. 
  
    
    

Machine Translation Service is a new service application in SharePoint 2013 that provides automatic machine translation of files and sites. When the Machine Translation Service application processes a translation request, it forwards the request to the  [Microsoft Translator](http://www.microsoft.com/en-us/translator/) cloud-hosted machine translation service, where the actual translation work is performed. This cloud-service also powers the Microsoft Office, Lync, Yammer and Bing translation features.
  
    
    
The Machine Translation Service application processes translation requests asynchronously and synchronously. Asynchronous translation requests are processed when the translation timer job executes. The default interval of the translation timer job is 15 minutes; you can manage this setting in Central Administration or by using Windows PowerShell. You can also set the timer to execute immediately using the following command:
  
    
    



```

$tj = get-sptimerjob "Sharepoint Translation Services"
$tj.Runnow()
```

Synchronous translation requests are processed as soon as they are submitted.
  
    
    

### Shared components with Word Automation Services
<a name="TranslationSvc_SharedWAS"> </a>

The Machine Translation Service architecture shares several components from the Microsoft Word Automation Services architecture. For more information about the Word Automation Services architecture, see  [Word Automation Services Architecture](http://msdn.microsoft.com/library/567bf68d-46bb-4ee8-981d-186549b9e5b8%28Office.15%29.aspx).
  
    
    
The Machine Translation Service object model is modeled after the Word Automation Services object model, so if you are familiar with Word Automation Services programming, you'll find similarities with programming against the Machine Translation Service object model.
  
    
    

## Using the Machine Translation Service server object model
<a name="TranslationSvc_ServerOM"> </a>

Applications that use the server object model must run directly on a server that is running SharePoint 2013. For information about creating applications that can be hosted remotely, see  [Using the Machine Translation Services client object model](#TranslationSvc_UsingCSOM) later in this topic. The Machine Translation Service server object model resides in the **Microsoft.Office.TranslationServices** namespace, which is located in Microsoft.Office.TranslationServices.dll.
  
    
    
Using the server object model, you can submit requests to the Machine Translation Service application asynchronously or synchronously (for instant translation). The Machine Translation Service application has two working queues for storing translation requests: the asynchronous queue and the synchronous queue. Requests in the synchronous queue are treated as higher priority and are translated before requests in the asynchronous queue. The requests are routed to one of these queues based on the class that you use.
  
    
    

  
    
    
![Related code snippets and sample apps](../../images/mod_icon_links_samples.png)
  
    
    
For sample code demonstrating how to use the server object model from a console application, see  [SharePoint 2013: Access Machine Translation Service using server object model](http://code.msdn.microsoft.com/SharePoint-Access-86639c3d ).
  
    
    

### Asynchronous translation using the server object model

The **TranslationJob** class defines a set of items to be translated. This can be a single file or every file within a folder or document library. Translation jobs that are submitted this way are stored in the translation database. Each time the translation timer job runs, it takes some of the jobs from the translation database and adds them to the asynchronous queue to be translated. The default interval of the translation timer job is 15 minutes.
  
    
    
The following code shows how to translate a single file asynchronously.
  
    
    



```cs

SPServiceContext sc = SPServiceContext.GetContext(new SPSite(site));
TranslationJob job = new TranslationJob(sc, CultureInfo.GetCultureInfo(culture)); 
job.AddFile(input, output);
job.Start(); 

```

The following code shows how to translate every file within a folder asynchronously.
  
    
    



```VB.net

SPServiceContext sc = SPServiceContext.GetContext(new SPSite(site));
TranslationJob job = new TranslationJob(sc, CultureInfo.GetCultureInfo(culture));
using (SPSite siteIn = new SPSite(inputFolder))
{
    using (SPWeb webIn = siteIn.OpenWeb())
    {
        using (SPWeb webOut = siteOut.OpenWeb())
        {
            SPFolder folderIn = webIn.GetFolder(inputFolder);
            SPFolder folderOut = webOut.GetFolder(outputFolder);                    
            job.AddFolder(folderIn, folderOut, true);
            job.Start();
        }
    }
}
```

The following code shows how to translate every file within a document library asynchronously.
  
    
    



```cs

SPServiceContext sc = SPServiceContext.GetContext(new SPSite(site));
TranslationJob job = new TranslationJob(sc, CultureInfo.GetCultureInfo(culture));
using (SPSite siteIn = new SPSite(inputList))
{
    using (SPWeb webIn = siteIn.OpenWeb())
    {
        using (SPSite siteOut = new SPSite(outputList))
        {
            using (SPWeb webOut = siteOut.OpenWeb())
            {
                SPDocumentLibrary listIn = (SPDocumentLibrary)webIn.GetList(inputList);
                SPDocumentLibrary listOut = (SPDocumentLibrary)webOut.GetList(outputList);
                job.AddLibrary(listIn, listOut);
                job.Start();
            }
        }
    }
}
```


### Synchronous translation using the server object model

You use the **SyncTranslator** class to request instant translation for files and streams. Translation requests that are made by using this class are not routed the same way as requests that are made by using the **TranslationJob** class. They are immediately added to the synchronous queue to be processed. The **TranslationItemInfo** class contains the details for a single item that is translated by the Machine Translation Service. The **SyncTranslator.Translate** method returns an instance of this class in synchronous translation jobs.
  
    
    
The following code shows how to translate a single file synchronously.
  
    
    



```cs

SPServiceContext sc = SPServiceContext.GetContext(new SPSite(site));
SyncTranslator job = new SyncTranslator(sc, CultureInfo.GetCultureInfo(jobCulture));
TranslationItemInfo itemInfo = job.Translate(input, output);

```

The following code shows how to translate a stream synchronously.
  
    
    



```cs

SPServiceContext sc = SPServiceContext.GetContext(new SPSite(site));
SyncTranslator job = new SyncTranslator(sc, CultureInfo.GetCultureInfo(jobCulture));
FileStream inputStream = new FileStream(input, FileMode.Open);
FileStream outputStream = new FileStream(output, FileMode.Create);     
TranslationItemInfo itemInfo = job.Translate(inputStream, outputStream, fileFormat);
inputStream.Close();
outputStream.Flush();
outputStream.Close();

```

The following code shows how to translate a sequence of bytes synchronously.
  
    
    



```cs

SPServiceContext sc = SPServiceContext.GetContext(new SPSite(site));
SyncTranslator job = new SyncTranslator(sc, CultureInfo.GetCultureInfo(jobCulture));
Byte[] inputByte;
Byte[] outputByte;
inputByte = File.ReadAllBytes(input);
outputByte = null;
TranslationItemInfo itemInfo = job.Translate(inputByte, out outputByte, fileFormat);
FileStream outputStream = File.Open(output, FileMode.Create);
MemoryStream memoryStream = new MemoryStream(outputByte);
memoryStream.WriteTo(outputStream);
outputStream.Flush();
outputStream.Close();

```


### Permissions
<a name="TranslationSvc_Permissions"> </a>

If the user who the translation request is running for can access the file to be translated, and that user can access the output location for the file, the user clears the security check and the file is translated.
  
    
    

## Using the Machine Translation Services client object model
<a name="TranslationSvc_UsingCSOM"> </a>

Machine Translation Service also includes a client object model (CSOM) that enables access to the Machine Translation Service API for online, on-premises, and mobile development. Client applications can use the CSOM to access server content and functionality. The CSOM implements most of the translation functionality of the server, but the CSOM and the server-side object model do not have one-to-one parity. Asynchronous translation of individual files, and files in a document library or folder are supported. Synchronous translation of files is supported, but file streams are not supported.
  
    
    
The Machine Translation Service CSOM includes a .NET managed client-side object model and Microsoft Silverlight and JavaScript object models. It is built on the SharePoint 2013 CSOM. Therefore, client code first accesses the SharePoint 2013 CSOM and then accesses the Machine Translation Service CSOM. 
  
    
    
For more information about the SharePoint CSOM, see  [SharePoint 2010 Client Object Model](http://msdn.microsoft.com/library/8c086b11-2b8b-41ec-82ae-cd4fef0aeac6%28Office.15%29.aspx). For more information about the **ClientContext** object, which is the entry point to the CSOM, see [Client Context as Central Object](http://msdn.microsoft.com/library/6299f0df-ab4c-40e6-b709-ec80271c99b3%28Office.15%29.aspx).
  
    
    
Table 1 shows the equivalent objects that the CSOM APIs provide for the Machine Translation Service server objects. 
  
    
    

**Table 1. Server object model APIs and their CSOM equivalents**


|**Server**|**.NET Managed and Silverlight**|**JavaScript**|
|:-----|:-----|:-----|
|Microsoft.Office.TranslationServices.TranslationJob  <br/> |Microsoft.Office.TranslationServices.Client.TranslationJob  <br/> |SP.Translation.TranslationJob  <br/> |
|Microsoft.Office.TranslationServices.TranslationJobInfo  <br/> |Microsoft.Office.TranslationServices.Client.TranslationJobInfo  <br/> |SP.Translation.TranslationJobInfo  <br/> |
|Microsoft.Office.TranslationServices.TranslationItemInfo  <br/> |Microsoft.Office.TranslationServices.Client.TranslationItemInfo  <br/> |SP.Translation.TranslationItemInfo  <br/> |
|Microsoft.Office.TranslationServices.TranslationJobStatus  <br/> |Microsoft.Office.TranslationServices.Client.TranslationJobStatus  <br/> |SP.Translation.TranslationJobStatus  <br/> |
|Microsoft.Office.TranslationServices.SyncTranslator  <br/> |Microsoft.Office.TranslationServices.Client.SyncTranslator  <br/> |SP.Translation.SyncTranslator  <br/> |
   

### Machine Translation Service .NET managed CSOM and Silverlight CSOM
<a name="TranslationSvc_ManagedCSOM"> </a>

For the .NET managed CSOM, get a **ClientContext** instance (located in the **Microsoft.SharePoint.Client** namespace in the Microsoft.SharePoint.Client.dll). Then use the object model in the **Microsoft.Office.TranslationServices.Client** namespace in the Microsoft.Office.TranslationServices.Client.dll.
  
    
    

  
    
    
![Related code snippets and sample apps](../../images/mod_icon_links_samples.png)
  
    
    
For sample code demonstrating how to use the .NET Managed CSOM, see  [SharePoint 2013: Access Machine Translation Service using the client object model](http://code.msdn.microsoft.com/SharePoint-Perform-a-8e53b06a).
  
    
    
For the Silverlight CSOM, get a **ClientContext** instance (located in the **Microsoft.SharePoint.Client** namespace in the Microsoft.SharePoint.Client.Silverlight.dll). Then use the object model in the **Microsoft.Office.TranslationServices.Client** namespace in the Microsoft.Office.TranslationServices.Silverlight.dll.
  
    
    

  
    
    
![Related code snippets and sample apps](../../images/mod_icon_links_samples.png)
  
    
    
For sample code demonstrating how to use the Silverlight CSOM, see  [SharePoint 2013: Access Machine Translation Service from Silverlight application](http://code.msdn.microsoft.com/SharePoint-Access-cdaff6b2).
  
    
    
To translate a single file asynchronously:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
string culture  = "cultureID";
string name = "translationJobName";
string  inputFile =  "http://serverName/path/inputFileName";
string outputFile = "http://serverName/path/outputFileName";
TranslationJob job = new TranslationJob(clientContext , culture);
job.AddFile(inputFile , outputFile);
job.Name = name;
job.Start();
clientContext.Load(job);
clientContext.ExecuteQuery();
//To retrieve the translation job ID.
string jobID = job.JobId;
```

To translate a folder asynchronously:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
string culture = "cultureID";
string name = "translationJobName";
string inputFolder = clientContext.Web.GetFolderByServerRelativeUrl("inFolderPath");
string outputFolder = clientContext.Web.GetFolderByServerRelativeUrl("outFolderPath");  
TranslationJob job = new TranslationJob(clientContext , culture);
job.AddFolder(inputFolder, outputFolder, true);
job.Name = name;
job.Start();            
clientContext.Load(job);
clientContext.ExecuteQuery();
//To retrieve the translation job ID.
string jobID = job.JobId;
```

To translate a library asynchronously:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
string culture = "cultureID";
string name = "translationJobName";
string inputLibrary = clientContext.Web.Lists.GetByTitle("inputLibraryName");
string outputLibrary = clientContext.Web.Lists.GetByTitle("outputLibraryName");
TranslationJob job = new TranslationJob(clientContext , culture);
job.AddFolder(inputLibrary , outputLibrary , true);
job.Name = name;
job.Start();            
clientContext.Load(job);
clientContext.ExecuteQuery();
//To retrieve the translation job ID.
string jobID = job.JobId;
```

To translate a single file synchronously:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
string culture = "cultureID"
string inputFile = "http://serverName/path/inputFileName";
string outputFile = "http://serverName/path/outputFileName";
SyncTranslator job = new SyncTranslator(clientContext , culture);
job.OutputSaveBehavior = SaveBehavior.AlwaysOverwrite;
ClientResult<TranslationItemInfo> cr = job.Translate(inputFile, outputFile );
clientContext.ExecuteQuery(); 
//To retrieve additional information about the translation job.
string errorCode = clientContext.Value.ErrorCode;
string errorMessage = clientContext.Value.ErrorMessage;
string translateID = clientContext.Value.TranslationId;
string succeedResult  = clientContext.Value.Succeeded;
string failResult  = clientContext.Value.Failed;
string cancelStatus = clientContext.Value.Canceled;
string inProgressStatus = clientContext.Value.InProgress;
string notStartedStatus = clientContext.Value.NotStarted;
```

To retrieve all languages that are supported by the Machine Translation Service:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
IEnumerable<string> supportedLanguages = TranslationJob.EnumerateSupportedLanguages(clientContext);
clientContext.ExecuteQuery();
foreach (string item in supportedLanguages)
{
    Console.Write(item + ", ");
}
```

To check whether a specific language is supported:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
clientResult<bool> isSupported;
isSupported = TranslationJob.IsLanguageSupported(clientContext, "language");
clientContext.ExecuteQuery();
```

To retrieve all the file name extensions that are supported by the Machine Translation Service:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
IEnumerable<string> fileExt = TranslationJob.EnumerateSupportedFileExtensions(clientContext);
clientContext.ExecuteQuery();
foreach (string item in fileExt)
{
    Console.Write(item + ", ");
}
```

To check whether a specific file name extension is supported:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
clientResult<bool> isSupported;
isSupported = TranslationJob.IsFileExtensionSupported(clientContext, "fileExtension");
clientContext.ExecuteQuery();

```

To check the file size limit for a specific file name extension:
  
    
    



```cs

ClientContext clientContext = new ClientContext("http://serverName/sites/siteCollectionPath");
clientResult<int> maxSize;
maxSize = TranslationJob.GetMaximumFileSize(clientContext, "fileExtension");
clientContext.ExecuteQuery();
```


### Machine Translation Service JavaScript CSOM
<a name="TranslationSvc_JavaScriptCSOM"> </a>

For the JavaScript CSOM, get an **SP.ClientContext** instance, and then use the object model in the SP.Translation.js file.
  
    
    

  
    
    
![Related code snippets and sample apps](../../images/mod_icon_links_samples.png)
  
    
    
For sample code demonstrating how to use the JavaScript CSOM, see  [SharePoint 2013: Accessing the Machine Translation Service with JavaScript](http://code.msdn.microsoft.com/SharePoint-Accessing-647f6dd9).
  
    
    
To translate a single file asynchronously:
  
    
    



```

var asyncJob;
var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
asyncJob = SP.Translation.TranslationJob.newObject(clientContext, "cultureID");
asyncJob.set_outputSaveBehavior(SP.Translation.SaveBehavior.alwaysOverwrite);
asyncJob.addFile("inputFilePath", "outputFilePath");
asyncJob.set_name("translationJobName");
asyncJob.start();
clientContext.load(asyncJob);
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededASync),Function.createDelegate(this, this.onQueryFailed));
```

To translate a folder asynchronously:
  
    
    



```

var asyncJob;
var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
asyncJob = SP.Translation.TranslationJob.newObject(clientContext, "cultureID");
asyncJob.set_outputSaveBehavior(SP.Translation.SaveBehavior.alwaysOverwrite);
var inputFolder = clientContext.get_web().getFolderByServerRelativeUrl("inputFilePath");
var outputFolder = clientContext.get_web().getFolderByServerRelativeUrl("outputFilePath");
asyncJob.addFolder(inputFolder, outputFolder, true);
asyncJob.set_name("translationJobName");
asyncJob.start();
clientContext.load(asyncJob);
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededASync),Function.createDelegate(this, this.onQueryFailed));
```

To translate a library asynchronously:
  
    
    



```

var asyncJob;
var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
asyncJob = SP.Translation.TranslationJob.newObject(clientContext, "cultureID");
asyncJob.set_outputSaveBehavior(SP.Translation.SaveBehavior.alwaysOverwrite);
var inputLibrary= clientContext.get_web().get_lists().getByTitle("inputFilePath");
var outputLibrary= clientContext.get_web().get_lists().getByTitle("outputFilePath");
asyncJob.addLibrary(inputLibrary, outputLibrary);
asyncJob.set_name("translationJobName");
asyncJob.start();
clientContext.load(asyncJob);
clientContext.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceededASync),Function.createDelegate(this, this.onQueryFailed));
```

To translate a single file synchronously:
  
    
    



```

var result;
var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
var job = SP.Translation.SyncTranslator.newObject(clientContext, "cultureID");
job.set_outputSaveBehavior(SP.Translation.SaveBehavior.alwaysOverwrite);
result = job.translate("inputFilePath", "outputFilePath");
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededSync),
Function.createDelegate(this, this.onQueryFailed));
```

To retrieve all languages that are supported by the Machine Translation Service:
  
    
    



```

var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
var result= SP.Translation.TranslationJob.enumerateSupportedLanguages(clientContext);
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededListAllLang),Function.createDelegate(this, this.onQueryFailed));
```

To check whether a specific language is supported:
  
    
    



```

var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
var result= SP.Translation.TranslationJob.isLanguageSupported(clientContext," language");
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededTestLang),Function.createDelegate(this, this.onQueryFailed));
```

To retrieve all the file name extensions that are supported by the Machine Translation Service:
  
    
    



```

var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
var result= SP.Translation.TranslationJob.enumerateSupportedFileExtensions(clientContext);
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededListAllFileExt),Function.createDelegate(this, this.onQueryFailed));
```

To check whether a specific file name extension is supported:
  
    
    



```

var clientContext = new SP.ClientContext("serverRelativeUrl");
var contextSite = clientContext.get_site();
var result= SP.Translation.TranslationJob.isFileExtensionSupported(clientContext," fileExtension");
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededTestFileExt),Function.createDelegate(this, this.onQueryFailed));
```


## Machine Translation Service REST service
<a name="TranslationSvc_REST"> </a>

SharePoint 2013 includes a Representational State Transfer (REST) service that enables you to remotely interact with the Machine Translation Service application by using any technology that supports REST web requests. For general information about REST in SharePoint 2013, see  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/d4b5c277-ed50-420c-8a9b-860342284b72%28Office.15%29.aspx).
  
    
    

### Ansynchronous Translation REST API

The REST API for performing asynchronous translation is as follows: 
  
    
    
 `http://serverName/_api/TranslationJob('language')`
  
    
    
To translate a single file asynchronously: 
  
    
    
 `http://serverName/_api/TranslationJob('language')/TranslateFile(inputFile='/path/intput file', outputFile='/path/output file')`
  
    
    
To translate a folder asynchronously: 
  
    
    
 `http://serverName/_api/TranslationJob('language')/TranslateFolder(inputFolder='/path/in', outputFolder='/path/out')`
  
    
    
To translate a library asynchronously: 
  
    
    
 `http://serverName/_api/TranslationJob('language')/TranslateLibrary(inputLibrary='/LibraryName', outputLibrary='/LibraryName'')`
  
    
    

### Synchronous Translation REST API

The Machine Translation Service REST service supports only synchronous translation of files. The API for this is as follows: 
  
    
    
 `http://serverName/_api/SyncTranslator('language')/Translate(outputFile='/path/output file', inputFile='/path/input file')`
  
    
    

### Additional Machine Translation Service REST APIs

The Machine Translation Service REST service includes additional APIs that you can use to retrieve information about the Machine Translation Service application capabilities and translation job status.
  
    
    
To retrieve all languages supported by Machine Translation Service: 
  
    
    
 `http://serverName/_api/TranslationJob.EnumerateSupportedLanguages`
  
    
    
To check whether a specific language is supported: 
  
    
    
 `http://serverName/_api/TranslationJob.IsLanguageSupported('language')`
  
    
    
To retrieve all the file name extensions that are supported by Machine Translation Service: 
  
    
    
 `http://serverName/_api/TranslationJob.EnumerateSupportedFileEXtensions`
  
    
    
To check whether a specific file name extension is supported: 
  
    
    
 `http://serverName/_api/TranslationJob.IsFileExtensionSupported('extension')`
  
    
    
To check the file size limit for a specific file name extension: 
  
    
    
 `http://serverName/_api/TranslationJob.GetMaximumFileSize('extension')`
  
    
    
To retrieve a list of all the asynchronous translation jobs: 
  
    
    
 `http://serverName/_api/TranslationJobStatus.GetAllJobs`
  
    
    
To retrieve a list of all the active asynchronous translation jobs: 
  
    
    
 `http://serverName/_api/TranslationJobStatus.GetAllActiveJobs`
  
    
    
To retrieve the document information for a specific asynchronous translation job: 
  
    
    
 `http://serverName/_api/TranslationJobStatus('jobid')/GetAllItems`
  
    
    
To cancel an asynchronous translation job: 
  
    
    
 `http://serverName/_api/TranslationJob.CancelJob('jobid')`
  
    
    

## Requirements for Microsoft Word Documents
<a name="TranslationSvc_REST"> </a>

SharePoint Machine Translation Service uses the paragraph language as the Source Language when it translates Microsoft Word documents. For example, if the paragraph is written in Spanish but the language for the paragraph is set to English, the Translation Service will not translate it to English. This is because it is already set to English.
  
    
    

### To set the paragraph language, follow these steps:


1. Select the paragraph.
    
  
2.  Click the Review Ribbon tab.
    
  
3.  Click Language from the drop-down menu, and choose Set Proofing Language.
    
  

## Additional resources
<a name="TranslationSvc_AR"> </a>


-  [Office 2013 and SharePoint 2013 application services](office-and-sharepoint-application-services.md)
    
  

