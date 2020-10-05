---
title: SharePoint Framework development with SharePoint 2019
description: SharePoint 2019 supports SharePoint Framework client-side web parts in classic and modern pages, as well as extensions in modern pages.
ms.date: 10/05/2020
localization_priority: Priority
---

# SharePoint Framework development with SharePoint Server 2019

SharePoint 2019 supports SharePoint Framework client-side web parts in classic and pages, as well as extensions in modern pages.

## Which version of the SharePoint Framework to use

Because SharePoint Online and SharePoint 2019 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint 2019 only supports the version that matches the server-side dependencies of the deployed packages.

SharePoint 2019 supports SharePoint Framework client-side web parts hosted on classic or modern SharePoint pages built by using the SharePoint Framework v1.4.1. SharePoint 2019 also supports SharePoint Framework extensions hosted on modern SharePoint pages built using SharePoint Framework v1.4.1. This means that when you are targeting the SharePoint 2019 platform, you need to use the SharePoint Framework v1.4.1 due to the server-side version dependencies.

Starting from v1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions that use both the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used with SharePoint on-premises based on the v1.1.0 or v1.4.1 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises.

## Development environment considerations

When you are developing SharePoint Framework client-side web parts, you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded by using the SharePoint Framework Yeoman templates.

If Internet access is not available for the development machines, you can set up a local on-premises registry for the required npm packages. However, this requires additional software and a significant amount of work to set up and maintain local package versions with packages in the actual npm gallery.

The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

## Determine which version was used for a solution

If you have existing SharePoint Framework solutions and you'd like to confirm which version of the SharePoint Framework was used for them, you'll need to check the following locations:

- **.yo-rc.json** file in the solution's root folder that stores the SharePoint Framework Yeoman template version used when the solution was created.
- **package.json** file in the solution's root folder that contains references to package versions used in the solution.
- **npm-shrinkwrap.json** file in the solution's root folder that contains information about the exact versions used (if you have used the `npm shrinkwrap` command to lock down the exact versions of the solution).
- **package.json** file in the *node_modules/@microsoft/sp-webpart-base* folder that contains a *version* attribute matching the used SharePoint Framework version, if you have installed packages to your solution.

## See also

- [SharePoint Framework Overview](sharepoint-framework-overview.md)
- [SharePoint Server 2019 development platform](../general-development/sharepoint-2019-development-platform.md)
