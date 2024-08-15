---
title: Upgrading your code from SharePoint Client Side Object Model (CSOM) to the PnP Libraries
description: Upgrading your code from SharePoint Client Side Object Model (CSOM) to the PnP Libraries.
ms.date: 08/28/2023
ms.localizationpriority: high
ms.service: sharepoint
---

# Upgrading your code from SharePoint Client Side Object Model (CSOM) to the PnP Libraries

In SharePoint classic solution, most likely you have been using the Client Side Object Model (CSOM) for .NET Framework as the primary client library for consuming SharePoint data. CSOM has been available for many years with different flavors targeting different versions of SharePoint on-premises and SharePoint Online. Since 2021, Microsoft released a new version of CSOM for SharePoint Online that targets .NET Standard 2.0 and as such can be referenced in .NET Framework 4.5+, .NET Core 2.0+, and .NET 5.0/6.0/7.0/8.0.

> [!IMPORTANT]
> This article refers to so called PnP components, samples and/or tooling which are open-source assets backed by an active community providing support for them. There is no SLA for open-source tool support from official Microsoft support channels. These components or samples are however using Microsoft supported out of the box APIs and features which are supported by Microsoft.

If you prefer, you can watch the following video, instead of reading the whole article, which you can still consider as a much more detailed reference.

[![Using PnP Libraries to simplify SharePoint solution design and implementation](https://img.youtube.com/vi/MLHMjJNHehE/0.jpg)](https://youtu.be/MLHMjJNHehE)

In order to use CSOM, you simply need to reference the *Microsoft.SharePointOnline.CSOM* NuGet package, create a *ClientContext* object, configure authentication, and start consuming the SharePoint Online data. For authentication, in CSOM there used to be support for *SharePointOnlineCredentials* type in order to leverage username and password authentication with SharePoint Online. However, since when Microsoft switched to modern authentication the username and password authentication is not anymore supported, and you should rely on OAuth and modern authentication. In the following code excerpt you can see an example of using plain CSOM with modern authentication via Microsoft Authentication Library (MSAL).

```CSharp
using Microsoft.SharePoint.Client;
using Microsoft.Identity.Client;

var clientId = "<client-Id>";
var tenantId = "<tenant-Id>";
var authority = $"https://login.microsoftonline.com/{tenantId}/";
var redirectUri = "http://localhost";

var siteUrl = new Uri("https://contoso.sharepoint.com/sites/TargetSite");

var accessToken = await AcquireTokenAsync(siteUrl);

using (var context = new ClientContext(siteUrl))
{
    context.ExecutingWebRequest += async (sender, e) =>
    {
        // Insert the access token in the request
        e.WebRequestExecutor.RequestHeaders["Authorization"] = "Bearer " + accessToken;
    };

    // Read web properties
    var web = context.Web;
    context.Load(web, w => w.Id, w => w.Title);
    await context.ExecuteQueryAsync();

    Console.WriteLine($"{web.Id} - {web.Title}");

    // Retrieve a list by title together with selected properties
    var documents = web.Lists.GetByTitle("Documents");
    context.Load(documents, d => d.Id, d => d.Title);
    await context.ExecuteQueryAsync();

    Console.WriteLine($"{documents.Id} - {documents.Title}");

    // Retrieve the top 10 items from the list
    var query = CamlQuery.CreateAllItemsQuery(10);
    var items = documents.GetItems(query);
    context.Load(items);
    await context.ExecuteQueryAsync();

    // Browse through all the items
    foreach (var i in items)
    {
        Console.WriteLine($"{i.Id} - {i["Title"]}");
    }     
}
```

The *AcquireTokenAsync* method relies on MSAL to retrieve an access token throuhg interactive authentication. The implementation of the method is not fundamental in this context, but you will find it in the [sample about CSOM associated with this article](https://github.com/pnp/addin-transformation-guidance/tree/main/samples/From-CSOM-to-PnP-Libraries).

In the upcoming sections, you will see how to improve the quality, readability, and maintainability of your code using some modern .NET libraries like PnP Framework and PnP Core SDK.

## Introducing the PnP Framework library

The PnP Framework library (released as v. 1.0 on January 2021) is the evolution of CSOM and of an old library called PnP Sites Core (now retired and archived). The PnP Framework library targets .NET Standard 2.0 and .NET 5.0/6.0/7.0, so you can use it on any platform (Windows, Linux, MacOS) and in any cloud-based service like Azure App Services, Azure Functions, Containers, etc.

By design, this library supports SharePoint Online (SPO) only. If you are developing a modern solution for SharePoint Online using .NET and you would like to have a CSOM-like coding style, you should definitely install the *PnP.Framework* NuGet package and use it.

From a functional point of view, the PnP Framework is a set of extensions built on top of CSOM, it is cross-platform, and it uses the new Client Side Object Model (CSOM) of SPO for .NET Standard. It mainly targets modern authentication with OAuth 2.0, but there is still support for app-only mode in ACS for "already existing" apps. 

By default, PnP Framework library uses a multi-tenant Azure Active Directory application called *PnP Management Shell*, which you should register in your tenant using the following PnP PowerShell syntax.

```PowerShell
Register-PnPManagementShellAccess
```

This will launch a login flow that will ask you to consent to the application. Notice that is only required -once- per tenant. You will need to have appropriate access rights to be able to consent applications in your Azure AD.

However, in this article you will rely on modern authentication with a custom AAD application that you have to register and configure for desktop authentication with http://localhost as a supported redirect URI.

> [!IMPORTANT]
> To learn more about using modern authentication and AAD instead of ACS you can read the article [Upgrading SharePoint applications from Azure Access Control Service to Azure Active Directory](./From-ACS-to-AAD-apps.md).

Now, let's create a .NET console application to consume some SharePoint Online data using the PnP Framework library. First of all, you will need to add a reference to the *PnP.Framework* nuget package. In Visual Studio you can simply add a package reference using the UI. In Visual Studio Code you will need to execute the following command.

```PowerShell
dotnet add package PnP.Framework
```

Once you have done that, your project will reference not only the PnP Framework library, but also the CSOM library, which is internally used by PnP Framework. In the following code sample, you can see how to use the PnP Framework to connect to SPO and consume some data, using an instance of the *AuthenticationManager* class and the modern authentication with OAuth 2.0. 

```CSharp
using Microsoft.SharePoint.Client;
using PnP.Framework;

var clientId = "<client-Id>";
var tenantId = "<tenant-Id>";
var redirectUrl = "<redirect-Url>";
var siteUrl = "<target-Site-Url>";

// Create an instance of the AuthenticationManager type
var authManager = AuthenticationManager.CreateWithInteractiveLogin(clientId, redirectUrl, tenantId);

// Get a reference to the ClientContext of CSOM
using (var context = await authManager.GetContextAsync(siteUrl))
{
    // Read web properties
    var web = context.Web;
    context.Load(web, w => w.Id, w => w.Title);
    await context.ExecuteQueryRetryAsync();

    Console.WriteLine($"{web.Id} - {web.Title}");

    // Retrieve a list by title together with selected properties
    var documents = web.GetListByTitle("Documents", l => l.Id, l => l.Title);

    Console.WriteLine($"{documents.Id} - {documents.Title}");

    // Retrieve the top 10 items from the list
    var query = CamlQuery.CreateAllItemsQuery(10);
    var items = documents.GetItems(query);
    context.Load(items);
    await context.ExecuteQueryRetryAsync();

    // Browse through all the items
    foreach (var i in items)
    {
        Console.WriteLine($"{i.Id} - {i["Title"]}");
    }     
}
```

The above code relies on interactive and web based login to access a target SharePoint Online site. The authentication is managed by the *AuthenticationManager* class of PnP Framework, which gives you an easy and simplified technique to authenticate against SharePoint Online using any of the following options:

- Interactive user authentication
- Username and password (where password has to be stored in a *SecureString*)
- Device code with an application registered in Azure Active Directory
- Authorization Code flow
- Client ID and Client Secret for app-only authentication
- X.509 Certificate for app-only authentication
- On-behalf-of flow
- Azure ACS for app-only authentication

The code sampleretrieves *Id* and *Title* of a library with title "Documents" and it retrieves the top 10 items in the library, in order to show *Id* and *Title* of those items. Syntax is really close to what you are used to using in CSOM. In fact, you get a *context* object, which is of type *Microsoft.SharePoint.Client.ClientContext* from CSOM, and you use it. However, for example you use the *ExecuteQueryRetryAsync* method, which is actually a .NET extension method provided by PnP Framework, or you use the *GetListByTitle* method, which is yet another extension method provided by PnP Framework. Moreover, in PnP Framework there are plenty of asynchronous methods that allow you to write modern asynchronous code.

In the PnP Framework library there are thousands of extensions methods for the CSOM types to improve code quality, readability, and efficiency. Furhtermore, in the PnP Framework there is also the implementation of the [PnP Provisioning Engine](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/introducing-the-pnp-provisioning-engine), which is the engine used by many business and by Microsoft itself to automate the provisioning of sites and artifacts.

Last but not least, the PnP Framework is in the back-end of most of the cmdlets provided by the [PnP PowerShell](https://pnp.github.io/powershell/index.html) module, and provides the basic infrastructure for the [PnP Page Transformation](https://pnp.github.io/pnpcore/using-the-sdk/transformation-getting-started.html) engine of the PnP Modernization Framework.

Generally speaking, the PnP Framework is the "de facto" library that every SharePoint developer should use to create modern solutions for SPO in Microsoft .NET.

## Introducing the PnP Core SDK library

The PnP Core SDK is a fresh new library introduced by the Microsoft 365 PnP community for modern cloud development. It went live on early February 2021 and it targets .NET Standard 2.0 and .NET 5.0/6.0/7.0. As such, you can use it on any platform (Windows, Linux, MacOS) and in any cloud-based service, and is available as a NuGet package with name PnP.Core.

The PnP Core SDK library has been designed with modern development in mind. In fact, it natively supports Dependency Injection (DI), a service oriented architecture, a fluent syntax including support for Language Integrated Query (LINQ), and an asynchronous development model. It also natively supports requests batching at REST level and automatic retry logic in case of requests throttling.

You might be wondering what the difference is between PnP Framework and PnP Core SDK. Actually, the PnP Core SDK is used by the PnP Framework and it's been implemented with a mindset that is independent from CSOM of SharePoint. In fact, more and more new functionalities introduced in SPO are not necessarily available through CSOM. That's the reason why PnP Core SDK was introduced and it is under the cover of both PnP Framework and PnP PowerShell, for some functionalities.

The PnP Core SDK is often called the PnP Graph First library, because the goal of this library is to help modern .NET developers consuming SPO and Microsoft Teams (Teams) via Microsoft Graph. In fact, Microsoft Graph is THE standard API for consuming any of the Microsoft 365 workloads, including SPO and Teams. However, at the time of this writing there are some functionalities that are not yet available or not yet completely available through Microsoft Graph, like for example full support for modern pages, or that require improvements in order to be fully comparable with what is offered by the REST API of SPO.

With PnP Core SDK you have an abstraction layer on top of the back-end APIs, so that you can focus on your business goal: creating modern solutions on top of SPO and Teams. Under the cover, the PnP Core SDK targets Microsoft Graph if the functionality that you are looking for is available through Graph, or it falls back to the REST API of SPO when it is needed. 

The Microsoft Graph is rapidly growing and evolving, and using this technique developers don't need to continuously update their code. They can simply rely on PnP Core SDK, which will make the right choice for them. If a functionality is missing today in Microsoft Graph, when it will be added, developers will simply need to update the PnP Core SDK NuGet package, without the need to change any line of their code.

The PnP Core SDK targets cloud workloads only (SPO and Teams), and from an authentication point of view it relies on an open model based on OAuth 2.0. Basically, you can implement the authentication layer with whatever technique you like, as long as you provide a valid Access Token. In case you would like to use the Microsoft Authentication Library (MSAL), there is a dedicated package, called *PnP.Core.Auth*, that you can plug-in and use to authenticate access to the target cloud services through MSAL.

In order to use the new PnP Core SDK you simply need to create a .NET project, add a reference to the NuGet package with name *PnP.Core.Auth*, which includes a dependency on the main *PnP.Core* package, and you can start using it. 

Just for the sake of building an example, let's create a .NET console application, which relies on Dependency Injection through the *Microsoft.Extensions.Hosting* NuGet package, to consume some SharePoint Online data using the PnP Core SDK library. To add a reference to the *PnP.Core.Auth*, in Visual Studio you can simply add the package reference using the UI. In Visual Studio Code you will need to execute the following command.

```PowerShell
dotnet add package PnP.Core.Auth
dotnet add package Microsoft.Extensions.Hosting
```

Now you are ready to define the service host and to build the chain of services, including those provided by the PnP Core SDK.

```CSharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PnP.Core.Auth.Services.Builder.Configuration;
using PnP.Core.Services.Builder.Configuration;
using PnP.Core.Services;
using PnP.Core.QueryModel;

var host = Host.CreateDefaultBuilder()
// Configure services with Dependency Injection
.ConfigureServices((hostingContext, services) =>
{
    // Add the PnP Core SDK library services
    services.AddPnPCore();
    // Add the PnP Core SDK library services configuration from the appsettings.json file
    services.Configure<PnPCoreOptions>(hostingContext
        .Configuration.GetSection("PnPCore"));
    // Add the PnP Core SDK Authentication Providers
    services.AddPnPCoreAuthentication();
    // Add the PnP Core SDK Authentication Providers 
    // configuration from the appsettings.json file
    services.Configure<PnPCoreAuthenticationOptions>(hostingContext
        .Configuration.GetSection("PnPCore"));
})
// Let the builder know we're running in a console
.UseConsoleLifetime()
// Add services to the container
.Build();

// Start console host
await host.StartAsync();

// Optionally create a DI scope
using (var scope = host.Services.CreateScope())
{
    // Obtain a PnP Context factory
    var pnpContextFactory = scope.ServiceProvider
        .GetRequiredService<IPnPContextFactory>();
    // Use the PnP Context factory to get a PnPContext for the given configuration
    using (var context = await pnpContextFactory.CreateAsync("SiteToWorkWith"))
    {
        // Retrieving web with lists and masterpageurl loaded ==> SharePoint REST query
        var web = await context.Web.GetAsync(p => p.Title, p => p.Lists,
        p => p.MasterUrl);

        // Output some information about the web
        Console.WriteLine($"{web.Id} - {web.Title}");

        // Browse through the requested lists
        foreach (var l in web.Lists.AsRequested())
        {
            Console.WriteLine($"{l.Id} - {l.Title}");
        }
    }
}

// Cleanup console host
host.Dispose();
```

In the code excerpt, you can notice that the PnP Core SDK provides a context object of its own, called *PnPContext*, that you can use to access SPO or Teams using a dedicated Domain Model of types, which is fully independent from CSOM or Microsoft Graph, and which provides the abstraction layer needed to decouple the PnP Core SDK from the back-end REST services. You can also notice the fluent syntax, where you can access the *Web* property of the *PnPContext* instance and invoke methods on it, without the need to load the web object instance first.

In order to being able to execute a sample like the one you just saw, you need to provide a configuration file (*appsettings.json*) like the one you see in the following code excerpt.

```JSON
{
    "PnPCore": {
        "Credentials": {
        "DefaultConfiguration": "interactive",
        "Configurations": {
            "interactive": {
                "Interactive": {
                    "RedirectUri": "http://localhost"
                }
            }
        }
        },
        "Sites": {
            "SiteToWorkWith": {
                "SiteUrl": "https://consoto.sharepoint.com/sites/targetSite"
            }
        }
    }
}
```

If you like, you can also provide the configuration settings simply using code, without relying on a .json configuration file.

> [!IMPORTANT]
> You can find further details about how to use the new PnP Core SDK in the official documentation reading the document [PnP Core SDK](https://pnp.github.io/pnpcore/index.html).

Regardless the technique that you will use to create a configured instance of the *PnPContext* type, once you have it, you can easily access the SPO site related to the context. In case the site is a modern Team Site, you can also access the Team in Microsoft Teams that is connected to the Team Site, like in the following code excerpt.

```CSharp
// Get a reference to the team connected to the current site, including the FunSettings
var team = await context.Team.GetAsync(t => t.FunSettings);

// Show one of the settings in the FunSettings property
Console.WriteLine($"Are Giphy allowed? {team.FunSettings.AllowGiphy}");
```

Another interesting feature of the PnP Core SDK is the support for LINQ (Language Integrated Query) queries, so that you can query the object model of PnP Core SDK using LINQ. For example, in the following code excerpt, you can see how to query the lists of the current web object filtered by *TemplateType*, so that we can retrieve only the document libraries.

```CSharp
// Define a LINQ query to retrieve only the document libraries of the current web
var lists = (from l in context.Web.Lists
            where l.TemplateType == PnP.Core.Model.SharePoint.ListTemplateType.DocumentLibrary
            select l);

Console.WriteLine("=> Here are all the document libraries:");

// Browse the lists resulting from the LINQ query
foreach (var l in lists)
{
    Console.WriteLine($"{l.Id} - {l.Title} - {l.TemplateType}");
}
```

## Mixing usage of PnP Framework and PnP Core SDK

After reading this article, you might be wondering what you should use and when.

If you are a SharePoint developer, used to working with CSOM, or if you have an already existing project built on top of PnP Sites Core and CSOM, you should rely on PnP Framework and start building modern solutions leveraging the rich set of extensions and utilities provided by the new PnP Framework library.

If you are a .NET developer, willing to create a new modern solution for SPO, start working with PnP Core SDK and enjoy consuming the Microsoft Graph and the SPO REST APIs with an high level abstraction layer.

If you like, you can even use both of the libraries, depending on what you need to do. For example, if you need to do automated provisioning of sites using the PnP Provisioning Engine, you necessarily need to rely on PnP Framework. If you need to query SharePoint objects using LINQ, you necessarily need to rely on PnP Core SDK. And you can use both and switch context from one to the other. For example, in the following code excerpt, you can see how to switch from PnP Framework to PnP Core SDK, sharing the same context.

```CSharp
// Create an instance of the AuthenticationManager type
var authManager = AuthenticationManager.CreateWithInteractiveLogin(clientId, redirectUrl, tenantId);

// Get a reference to the ClientContext of CSOM
using (var csomContext = await authManager.GetContextAsync(siteUrl))
{
    // Use CSOM to load the web title
    csomContext.Load(csomContext.Web, p => p.Title);
    csomContext.ExecuteQueryRetry();
    Console.WriteLine($"Title from PnP Framework: {csomContext.Web.Title}");

    using (PnPContext pnpCoreContext = PnPCoreSdk.Instance.GetPnPContext(csomContext))
    {
        // Use PnP Core SDK (Microsoft Graph / SPO Rest) to load the web title
        var web = await pnpCoreContext.Web.GetAsync(p => p.Title);

        Console.WriteLine($"Title from PnP Core SDK: {web.Title}");
    }
}
```

While, in the following code excerpt you can see how to switch from PnP Core SDK to PnP Framework, sharing the same context.

```CSharp
using (var scope = host.Services.CreateScope())
{
    // Obtain a PnP Context factory
    var pnpContextFactory = scope.ServiceProvider
        .GetRequiredService<IPnPContextFactory>();
    // Use the PnP Context factory to get a PnPContext for the given configuration
    using (var pnpCoreContext = await pnpContextFactory.CreateAsync("SiteToWorkWith"))
    {
        // Use PnP Core SDK (Microsoft Graph / SPO Rest) to load the web title
        var web = await pnpCoreContext.Web.GetAsync(p => p.Title);
        Console.WriteLine($"Title from PnP Core SDK: {web.Title}");

        using (ClientContext csomContext = PnPCoreSdk.Instance.GetClientContext(pnpCoreContext))
        {
            // Use CSOM to load the web title
            csomContext.Load(csomContext.Web, p => p.Title);
            csomContext.ExecuteQueryRetry();

            Console.WriteLine($"Title from PnP Framework: {csomContext.Web.Title}");
        }   
    }
}
```

As such, you can freely move through the two libraries and enjoy the new coding experience.

## Recommended content 

You can find additional information about this topic reading the following documents:

* [Using CSOM for .NET Standard instead of CSOM for .NET Framework](../sp-add-ins/using-csom-for-dotnet-standard)
* [PnP Framework](https://github.com/pnp/pnpframework)
* [PnP Core SDK](https://pnp.github.io/pnpcore/index.html)
* [Requesting data from Microsoft 365](https://pnp.github.io/pnpcore/using-the-sdk/basics-getdata.html)
* [Using paging](https://pnp.github.io/pnpcore/using-the-sdk/basics-getdata-paging.html)
* [Interop with PnP Framework](https://pnp.github.io/pnpcore/using-the-sdk/basics-pnpframework.html)
* [PnP PowerShell](https://pnp.github.io/powershell/index.html)
* [PnP Provisioning Engine](../solution-guidance/introducing-the-pnp-provisioning-engine)
* [PnP Page Transformation](https://pnp.github.io/pnpcore/using-the-sdk/transformation-getting-started.html)