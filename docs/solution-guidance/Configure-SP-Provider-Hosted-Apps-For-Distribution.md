---
title: Configure SharePoint provider-hosted add-ins for distribution
description: Issues that may arise when sharing a SharePoint provider-hosted add-in with other developers or when obtaining a copy from a source control system such as Team Foundation Server, Git, or Visual Studio Team Services.
ms.date: 5/8/2018
---

#  Configure SharePoint provider-hosted add-ins for distribution

This page explains issues that may arise when sharing a SharePoint provider-hosted add-in with other developers or when obtaining a copy from a source control system such as Team Foundation Server, Git, or [Visual Studio Team Services](https://www.visualstudio.com/vso/).

All SharePoint provider-hosted add-ins created by using Visual Studio include a NuGet package that adds SharePoint-specific code and references to the web application that serves as the RemoteWeb for the SharePoint add-in. 

The NuGet package added to the web application project by the Office Developer Tools in Visual Studio is not present in the NuGet package registry, and therefore, attempts to perform a NuGet package restore fail because it cannot find a matching package.

## Understand the problem

The Office Developer Tools for Visual Studio, version 12.0.31105, adds a NuGet package to web applications created as the RemoteWeb for SharePoint provider-hosted add-ins. This package, the App for SharePoint Web Toolkit, adds the following items to the web project:

- Assemblies and references to the SharePoint client-side object model (CSOM) assemblies.
- The code file TokenHelper.cs that assists in the authentication process for add-ins.
- The code file SharePointContext.cs that helps in creating and maintaining a SharePoint context within the web application.

The way Visual Studio works is that it, or add-ins, typically contain a local copy of the NuGet package so that developers do not always have to be connected to the Internet to download the NuGet packages. The package that the tools include has an ID of **AppForSharePoint16WebToolkit**.

When projects are committed to source control, typically the packages are not included as part of the commit because they can add a lot of extra storage space demands and unnecessarily increase the size of a package when sharing it with other developers. Therefore, one of the first tasks developers do after getting a copy of the project from source control is to run [NuGet package restore](https://docs.microsoft.com/en-us/nuget/consume-packages/package-restore).

The challenge is that a package with the same ID does not exist in the NuGet package registry; there is no package with an ID of **AppForSharePoint16WebToolkit**. Instead, the exact same package was added to the NuGet package registry as [AppForSharePointWebToolkit](http://www.nuget.org/packages/AppForSharePointWebToolkit) (note the lack of the `16` in the ID).

## Prepare a provider-hosted add-in project for source control and distribution

Until the Office Developer Tools for Visual Studio are updated to fix this issue, we recommend that you alter the project prior to committing to your source control system, regardless if you are using Team Foundation Server, Visual Studio Team Services, Git, or any other solution.

After creating the project, look within the project's packages.config file and search for a package with an ID of **AppForSharePoint16WebToolkit**. The safest way to update the project is to uninstall and then reinstall the package.

Open the **Package Manager Console** in Visual Studio and enter the following to uninstall the package:

```powershell
  PM> Uninstall-Package -Id AppForSharePoint16WebToolkit
```

> [!NOTE] 
> If the uninstall throws an error about not finding the package, simply remove the package reference from the packages.config file manually and save your changes.

Now, install the public version of the same NuGet package from the public registry:

```powershell
  PM> Install-Package -Id AppForSharePointWebToolkit
```


## See also

- [Deploying your SharePoint Add-ins](deploying-your-sharepoint-add-ins.md)