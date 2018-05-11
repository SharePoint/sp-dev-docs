---
title: PnP provisioning engine and the Core library
description: Take a high-level look at the remote provisioning process, including a closer look at the OfficeDevPnP.Core library.
ms.date: 5/9/2018
---

# PnP provisioning engine and the Core library

The PnP provisioning engine is the heart of the provisioning framework, and at its foundation is the OfficeDevPnP.Core library. The provisioning engine is part of the Core library and it leverages the Core library extensions in the implementation of provisioning tasks. 

Comprised of extension methods on the SharePoint CSOM/REST object model, the Core library enables provisioning tasks such as enumerating and getting provisioning templates as well as storing and then applying templates to new and existing sites. It also allows you to automate provisioning tasks and to introduce coded logic into your provisioning routines.

> [!NOTE] 
> To see a video walkthrough of creating, persisting, and applying a provisioning template, go to [Getting Started with PnP provisioning engine](https://channel9.msdn.com/blogs/OfficeDevPnP/Getting-Started-with-PnP-Provisioning-Engine).

## PnP provisioning engine

The PnP provisioning engine is the structured implementation of classes in the Core library for performing and automating remote provisioning tasks. In the new Microsoft landscape that features the SharePoint Add-in model, provisioning solutions for SharePoint Online, SharePoint, and Office 365 now use the client-side object model (CSOM) and the provisioning framework to provision site artifacts.

The PnP provisioning engine allows you to model the design of site columns, content types, list definitions, composed looks, and pages. You can design those features and much more by pointing to existing site design features, by crafting the design my hand, or by using a mix of both approaches. You can then, optionally, persist the design as a provisioning template that you can save and reuse.

You can use one of two approaches for extracting your site design as a provisioning template. Use Windows PowerShell scripts (SharePointPnP.PowerShell), or use CSOM/REST code that implements extension methods provided by the Core library (OfficeDevPnP.Core).

### Using Windows PowerShell scripting to extract a provisioning template

To use Windows PowerShell scripts with the provisioning engine, you first must download and install the PnP PowerShell cmdlets. Everything you need to run Windows PowerShell, including download and installation instructions as well as the Windows PowerShell command documentation, is available in the [SharePointPnP.PowerShell Commands](https://github.com/SharePoint/PnP-PowerShell) repository on GitHub.

> [!NOTE] 
> The SharePointPnP.PowerShell Commands repository contains three versions of the Windows PowerShell commands MSI. Two are for on-premises use (one for SharePoint 2013 and one for SharePoint 2016), and the third one is for SharePoint Online.

The SharePointPnP.PowerShell Commands repository contains contents that enable you to build a library of Windows PowerShell commands that target SharePoint Online. The commands use CSOM and can work against both SharePoint Online and SharePoint on-premises, depending on which MSI package you install.

Additionally, there is a short Channel 9 video, [Introduction to PnP PowerShell Cmdlets](https://channel9.msdn.com/blogs/OfficeDevPnP/Introduction-to-PnP-PowerShell-Cmdlets), that discusses installing the Windows PowerShell package and connecting to your Office 365 site. In addition to installation and connection activities, the video covers other valuable information about using Windows PowerShell for remote provisioning.

### Using CSOM code to extract a provisioning template

To employ CSOM/REST code to extract a provisioning template, you simply create a development project by using Visual Studio or another development environment. Create any type of project&mdash;for example, a console or Windows application, or a SharePoint Add-in. After you create a development project, you must then install the Core library, which is available as a NuGet package.

> [!NOTE] 
> Instructions for locating and installing the Core library NuGet package, and a walkthrough for a remote provisioning sample console application, are available in [Provisioning console application sample](provisioning-console-application-sample.md). Note that the Core library comes in two versions: one targets SharePoint Online, SharePoint, and Office 365; and one targets SharePoint on-premises.

While detailed instructions for using CSOM are in the provisioning console application sample, the general overview is like this:

1. Create a connection to Office 365.
    
2. Create a **ClientContext** instance and retrieve a reference to a **Web** object.
    
3. Use the Core library's extension method, **GetProvisioningTemplate**, to extract a **ProvisioningTemplate** object.
    
4. Save the provisioning template instance to a file location of your choice by using a template provider and serialization formatter.
    
	> [!NOTE] 
  > Because the template provider and the serialization formatter objects can be customized, you can implement whatever persistence storage and serialization format you like. Out-of-the-box, the PnP provisioning engine provides support for file system, SharePoint, and Azure Blob storage template providers. It also supports XML and JSON serialization formatters.

You can see an example of the XML serialization output and learn more about the XML serialization schema in the [PnP provisioning schema](pnp-provisioning-schema.md) article. You also can get the schema and its documentation on GitHub: [SharePoint/PnP-Provisioning-Schema](https://github.com/SharePoint/PnP-Provisioning-Schema/). The Channel 9 video [Deep dive into PnP provisioning engine schema](https://channel9.msdn.com/blogs/OfficeDevPnP/Deep-dive-to-PnP-provisioning-engine-schema) introduces and discusses the schema.

It is important to note, however, that the provisioning engine supports a serialization-format-independent domain model. In fact, the provisioning engine is completely decoupled from any serialization format. It is up to you to manually define the **ProvisioningTemplate** instance. 

Either point to a model site or compose an XML document that validates against the PnP provisioning schema, or write .NET code and construct the hierarchy of objects. You can even mix these approaches. You also can design the provisioning template by using a model site, and then save it into an XML file and do some in-memory customizations while handling the **ProvisioningTemplate** instance in your code.

#### Example code to extract a template using GetProvisioningTemplate

The [Provisioning console application sample](provisioning-console-application-sample.md) illustrates using the **GetProvisioningTemplate** method. In the sample, the process of exporting the provisioning template takes place in the following code block.

```csharp
ProvisioningTemplateCreationInformation ptci = new ProvisioningTemplateCreationInformation(ctx.Web);

// Create FileSystemConnector, so that we can store composed files somewhere temporarily 
ptci.FileConnector = new FileSystemConnector(@"c:\temp\pnpprovisioningdemo", "");
ptci.PersistComposedLookFiles = true;
ptci.ProgressDelegate = delegate (String message, Int32 progress, Int32 total)
{

// Use this to simply output progress to the console application UI
Console.WriteLine("{0:00}/{1:00} - {2}", progress, total, message);
};

// Execute actual extraction of the tepmplate
ProvisioningTemplate template = ctx.Web.GetProvisioningTemplate(ptci);
```

### Apply the provisioning template

As with extracting the provisioning template, you can apply your customized **ProvisioningTemplate** object instance by using either CSOM/REST code or Windows PowerShell commands. You can download the [SharePointPnP.PowerShell Commands](https://github.com/SharePoint/PnP-PowerShell) from the repository on GitHub.

If applying the provisioning template by using extension methods of the Core library, you have a code block similar to the example here. In the example, the template is applied to the target site by using the **ApplyProvisioningTemplate** extension method of the **Web** type.

```csharp
using (var context = new ClientContext(destinationUrl))
{
  context.Credentials = new SharePointOnlineCredentials(userName, password);
  Web web = context.Web;
  context.Load(web, w => w.Title);
  context.ExecuteQueryRetry();

  // Configure the XML file system provider
  XMLTemplateProvider provider =
  new XMLFileSystemTemplateProvider(
    String.Format(@"{0}\..\..\",
    AppDomain.CurrentDomain.BaseDirectory),
    "");

  // Load the template from the XML stored copy
  ProvisioningTemplate template = provider.GetTemplate(
    "<template name>.xml");

  // Apply the template to another site
  Console.WriteLine("Start: {0:hh.mm.ss}", DateTime.Now);

  // We can also use Apply-PnPProvisioningTemplate
  web.ApplyProvisioningTemplate(template);

  Console.WriteLine("End: {0:hh.mm.ss}", DateTime.Now);
}
```

<br/>

After you have created a connection to SharePoint Online by using the Windows PowerShell commands, employ the **Apply-PnPProvisioningTemplate** cmdlet as shown here.

```powershell
Apply-PnPProvisioningTemplate -Path "PnP-Provisioning-File.xml"
```

Note that the `-Path` argument refers to the file path to the provisioning template file that you persisted to the file system. In the code block above, the persisted file is an XML file, but these template files can be persisted in any serialized format that you wish.

## PnP Core library

The Core library (OfficeDevPnP.Core) is a CSOM/REST object model that supports the PnP provisioning framework and enables the PnP provisioning engine. It consists of several namespaces, including a set of [extension methods](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods). These methods extend the SharePoint object model to support remote provisioning as well as objects for handling entities, timer jobs, provisioning templates, and the entirety of the provisioning framework. Table 1 lists namespaces in the Core library.

<br/>

**Table 1. Namespaces in the OfficeDevPnP.Core library**

|Namespace|Description|
|:-----|:-----|
|OfficeDevPnP.Core||
|OfficeDevPnP.Core.AppModelExtensions|.NET classes that extend an existing type with additional methods.|
|OfficeDevPnP.Core.Entities|Classes that are used to provide and retrieve more complex objects from the extensions methods in AppModelExtensions.|
|OfficeDevPnP.Core.Enums|A set of enumerations that support provisioning operations.|
|OfficeDevPnP.Core.Extensions|Extension methods that are not SharePoint related, such as methods to help with string manipulations.|
|OfficeDevPnP.Core.Framework.ObjectHandlers.TokenDefinitions|Tokens used to replace site-specific content in the template object.|
|OfficeDevPnP.Core.Framework.Provisioning.Connectors|Connectors are used to connect different data sources where templates and assets are stored.|
|OfficeDevPnP.Core.Framework.Provisioning.Extensibility|Extensibility provider code. Extensibility providers can be used to add functionality that is not natively supported by the engine.|
|OfficeDevPnP.Core.Framework.Provisioning.Model|Template data model objects. Templates are either extracted or de-serialized to actual C# code. This namespace contains classes for this structure.|
|OfficeDevPnP.Core.Framework.Provisioning.ObjectHandlers|Handlers for different SharePoint elements supporting both template extraction and creation.|
|OfficeDevPnP.Core.Framework.Provisioning.Providers|Namespace for template provider base. Template providers are used to serialize or de-serialize code-based models to a specific format.|
|OfficeDevPnP.Core.Framework.Provisioning.Providers.Json|JSON template provider for serializing or de-serializing code-based templates to or from JSON format.|
|OfficeDevPnP.Core.Framework.Provisioning.Providers.Xml|XML template provider for serializing or de-serializing code-based templates to or from XML format.|
|OfficeDevPnP.Core.Framework.Provisioning.Providers.Xml.V201503|Auto-generated schema files for v201503 version of the schema.|
|OfficeDevPnP.Core.Framework.Provisioning.Providers.Xml.V201505|Auto-generated schema files for v201505 version of the schema.|
|OfficeDevPnP.Core.Framework.Provisioning.Providers.Xml.V201508|Auto-generated schema files for v201508 version of the schema.|

## See also

- [PnP remote provisioning](pnp-remote-provisioning.md)