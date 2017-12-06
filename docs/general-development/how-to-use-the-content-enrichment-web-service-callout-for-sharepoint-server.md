---
title: Use the Content Enrichment web service callout for SharePoint Server
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: d4e44498-9a3d-4f2f-b5ba-6ebef9971dcb
---


# Use the Content Enrichment web service callout for SharePoint Server

Learn how to implement the Content Enrichment web service in SharePoint to modify the managed properties of crawled items before they are indexed.

Search in SharePoint enables developers to add a custom step to content processing to modify the managed properties of crawled items before they are indexed. This custom step requires the implementation of an external web service--the Content Enrichment web service--that can enrich managed properties of items being processed; and then configuring the system to call this external web service.

Implementation of the external content enrichment web service relies on interfaces under the  [Microsoft.Office.Server.Search.ContentProcessingEnrichment](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.ContentProcessingEnrichment.aspx) namespace.

## Windows PowerShell Cmdlets to use with the Content Enrichment web service
<a name="SP15_PowerShell_Cmdlets_Content_Enrichment"> </a>

The Content Enrichment functionality is configured and enabled with the following Windows PowerShell cmdlets:

-  [Get-SPEnterpriseSearchContentEnrichmentConfiguration](http://technet.microsoft.com/en-us/library/jj219783%28office.15%29.aspx)
    
  
-  [Set-SPEnterpriseSearchContentEnrichmentConfiguration](http://technet.microsoft.com/en-us/library/jj219659%28office.15%29.aspx)
    
  
-  [Remove-SPEnterpriseSearchContentEnrichmentConfiguration](http://technet.microsoft.com/en-us/library/jj219742%28office.15%29.aspx)
    
  
-  [New-SPEnterpriseSearchContentEnrichmentConfiguration](http://technet.microsoft.com/en-us/library/jj219502%28office.15%29.aspx)
    
  
These Windows PowerShell cmdlets enable an administrator to configure the following:
  
    
    

- A custom set of managed properties to be sent to the external web service.
    
  
- A custom set of managed properties to be returned by the external web service.
    
  
- A trigger condition, that represents a predicate to execute for every item being processed. If a trigger condition is used, the external web service is called only when the trigger evaluates to **true**. If no trigger condition is used, all items are sent to the external web service.
    
  
- A **FailureMode** that enables the web service to either fail items that cannot be processed during the content enrichment step or pass these items through without any modification. If the items are failed, they are not indexed and a warning is written to the ULS log.
    
  
- A **DebugMode**, that enables rapid prototyping of the external web service. When enabled, the external web service receives all available managed properties. In **DebugMode**, the trigger condition is ignored and any managed properties output by the web service are also ignored.
    
  
- A **SendRawData** switch that sends the raw data of an item in binary form. This is useful when more metadata is required than what can be retrieved from the parsed version of the item.
    
  
In addition, there are options for specifying size limits and timeouts. See  [Custom content processing with the Content Enrichment web service callout](custom-content-processing-with-the-content-enrichment-web-service-callout.md) for a full list of configurable properties.
  
    
    

## Prerequisites for using the Content Enrichment web service callout for SharePoint
<a name="SP15ContentEnrich_prereq"> </a>

To complete this how-to, you must have the following installed in your development environment:
  
    
    

- Search in SharePoint
    
  
- Visual Studio 2010 or similar .NET Framework-compatible development tool
    
  
- Administrator privileges on your SharePoint installation
    
  
- A server on which you can host the service with IIS
    
  
You must also know how to create a site in IIS and deploy a service to it
  
    
    

## Set up a content enrichment service project
<a name="SP15ContentEnrich_setup"> </a>

In this step, you will create the service implementation project and then add the required references to the project.
  
    
    

### To create the project for a content enrichment service


1. In Visual Studio, on the menu bar choose **File**, **New**, **Project**.
    
  
2. In **Project types**, under Visual C#, choose **WCF**.
    
  
3. Under **Templates**, choose **WCF Service Application**. In the **Name** field, type **ContentProcessingEnrichmentService**, and then choose the **OK** button.
    
  
4. Delete the automatically generated **Service1** class and **Service1** interface.
    
  

### To add references to the content enrichment service project


1. On the **Project** menu, choose **Add Reference**.
    
  
2. Choose **Browse** and locate the **Microsoft.Office.Server.Search.ContentProcessingEnrichment** assembly in your SharePoint installation folder under _Installation Path_\\Microsoft Office Servers\\15.0\\Search\\Applications\\External. 
    
    > [!NOTE]
    > If SharePoint is installed on a machine other than your development machine, copy the assembly over to your development machine and reference it from there. 

## Create a content enrichment service
<a name="SP15ContentEnrich_createservice"> </a>

Your content processing enrichment service must implement the **IContentProcessingEnrichmentService** interface from the [Microsoft.Office.Server.Search.ContentProcessingEnrichment](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.ContentProcessingEnrichment.aspx) namespace. The code example in this section is a basic implementation of this interface.
  
    
    
The implementation requires two managed properties for each item received via the external web service: **Author** and **Filename**. The **Author** is a list of **String** objects and the **Filename** is a **String** object.
  
    
    
The **IContentProcessingEnrichmentService** implementation writes the raw binary data to a temporary location on disk, with **Filename** as the name of the file. Then, a new name is added to the list of authors and returned to the content processing component.
  
    
    

### To create the class file for the content enrichment service


1. On the **Project** menu, choose **Add New Item**.
    
  
2. Under **Visual C#** in **Installed Templates**, choose **Web**, and then choose **WCF Service**.
    
  
3. Type **ContentProcessingEnrichmentService.svc**, and then choose **Add**.
    
  
4. Delete the **IContentProcessingEnrichmentService.cs** interface that is created.
    
  

### To modify the default code in the ContentProcessingEnrichmentService class


1. Replace the existing **using** directives with the following **using** directives at the beginning of the class.
    
```cs
  
using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.Office.Server.Search.ContentProcessingEnrichment;
using Microsoft.Office.Server.Search.ContentProcessingEnrichment.PropertyTypes;

```

2. Delete the **DoWork** method.
    
  

### To implement the IContentProcessingEnrichmentService interface method


1. Add the following code inside the class to define the required constants and members.
    
```cs
  
// Defines the name of the managed property 'Filename'.
private const string FileNameProperty = "Filename";

// Defines the name of the managed property 'Author'
private const string AuthorProperty = "Author";

// Defines the temporary directory where binary data will be stored.
private const string TempDirectory = @"C:\\Temp";

// Defines the error code for managed properties with an unexpected type.
private const int UnexpectedType = 1;

// Defines the error code for encountering unexpected exceptions.
private const int UnexpectedError = 2;

private readonly ProcessedItem processedItemHolder = new ProcessedItem
{ 
   ItemProperties = new List<AbstractProperty>()
};
```

2. Add the following code for the **ProcessItem** method.
    
```cs
  
public ProcessedItem ProcessItem(Item item)
{
   processedItemHolder.ErrorCode = 0;
   processedItemHolder.ItemProperties.Clear();
   try
   {
      // Iterate over each property received and locate the two properties we
      // configured the system to send.
      foreach (var property in item.ItemProperties)
      {
         // Check if this is the author property.
         if (property.Name.Equals(AuthorProperty, StringComparison.Ordinal))
         {
            var author = property as Property<List<string>>;
            if (author == null)
            {
               // The author property was not of the expected type.
               // Update the error code and return. 
                  processedItemHolder.ErrorCode = UnexpectedType;
                  return processedItemHolder;
            }
               // Adding a new author to the list so it will become searchable.      
                  author.Value.Add("ExampleService");
                  processedItemHolder.ItemProperties.Add(author);
         }
         else if (property.Name.Equals(FileNameProperty, StringComparison.Ordinal))
         {
            var filename = property as Property<string>;
            if (filename == null)
            {
               // The file name property was not of the expected type.
               // Update error code and return.
                  processedItemHolder.ErrorCode = UnexpectedType;
                  return processedItemHolder;
            }
            if (!string.IsNullOrEmpty(filename.Value))
            {
               var fullFilePath = string.Join(char.ToString(Path.DirectorySeparatorChar), TempDirectory, filename.Value);
               if (item.RawData != null)
               {   
                  var outputFile = File.Create(fullFilePath);
                  using (var writer = new BinaryWriter(outputFile))
                  {
                     writer.Write(item.RawData);
                  }
               }
            }
         }
      }
   }
   catch (Exception)
   { 
      processedItemHolder.ErrorCode = UnexpectedError;
   } return processedItemHolder;
}
```

3. Modify **web.config** to accept messages up to 8 MB, and configure **readerQuotas** to be a sufficiently large value.
    
  
4. Add the following inside **<system.serviceModel>**.
    
```XML
  
<bindings>
   <basicHttpBinding>
   <!-- The service will accept a maximum blob of 8 MB. -->
      <binding maxReceivedMessageSize = "8388608">
         <readerQuotas maxDepth="32"
          maxStringContentLength="2147483647"
          maxArrayLength="2147483647"   
          maxBytesPerRead="2147483647"   
          maxNameTableCharCount="2147483647" />  
             <security mode="None" />
      </binding>
   </basicHttpBinding>
</bindings>
```

Build the project and deploy it to your IIS site.
  
    
    

## Configure SharePoint
<a name="SP15ContentEnrich_configure"> </a>

Open the SharePoint Management Shell, and enter the following sequence of Windows PowerShell cmdlets.
  
    
    

```

$ssa = Get-SPEnterpriseSearchServiceApplication
$config = New-SPEnterpriseSearchContentEnrichmentConfiguration
$config.Endpoint = http://Site_URL/ContentEnrichmentService.svc
$config.InputProperties = "Author", "Filename"
$config.OutputProperties = "Author"
$config.SendRawData = $True
$config.MaxRawDataSize = 8192
Set-SPEnterpriseSearchContentEnrichmentConfiguration -SearchApplication
$ssa -ContentEnrichmentConfiguration $config
```

The sequence of Windows PowerShell cmdlets help you to first create a configuration object by using the  [New-SPEnterpriseSearchContentEnrichmentConfiguration](http://technet.microsoft.com/en-us/library/jj219502%28office.15%29.aspx) cmdlet. The configuration object is then pointed toward your service implementation; as a best practice, use `http://localhost:808` for _Site_URL_.
  
    
    
The managed properties **Author** and **Filename** are sent to your service for every item that is being processed. In addition, you have informed the web service client that the service will output a single managed property, **Author**. In additional to managed properties, the web service client is configured to send the raw data of the item with a limitation on the size of the data. Finally, the  [Set-SPEnterpriseSearchContentEnrichmentConfiguration](http://technet.microsoft.com/en-us/library/jj219659%28office.15%29.aspx)cmdlet is used to store the entire configuration. After this cmdlet returns, the configuration is active and the crawl component uses this configuration for its next crawl process.
  
    
    
After this is finished, you can start a full crawl of your site. If the service is working correctly, you should be able to monitor the temporary folder on the server hosting your site for the documents written to disk.
  
    
    
You can remove the configuration later by using the following Windows PowerShell cmdlet.
  
    
    



```

Remove-SPEnterpriseSearchContentEnrichmentConfiguration -SearchApplication $ssa
```


## See also
<a name="SP15ContentEnrich_addresources"> </a>


-  [Start, pause, resume, or stop a crawl](http://technet.microsoft.com/en-us/library/jj219814%28office.15%29.aspx)
    
  
-  [Configure search in SharePoint](configure-search-in-sharepoint.md)
    
  
-  [Custom content processing with the Content Enrichment web service callout](custom-content-processing-with-the-content-enrichment-web-service-callout.md)
    
  

