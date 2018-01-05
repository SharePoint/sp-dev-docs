---
title: SharePoint Framework development with SharePoint 2016 Feature Pack 2
ms.date: 1/2/2018
---

# SharePoint Framework development with SharePoint 2016 Feature Pack 2

SharePoint 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted in classic SharePoint pages.

An introduction to SharePoint Framework development in SharePoint 2016 using Feature Pack 2 is also covered in the following video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=LGLMxnmHk6U&list=PLR9nK3mnD-OXZbEvTEPxzIOMGXj_aZKJG).

> [!VIDEO https://www.youtube.com/embed/LGLMxnmHk6U?list=PLR9nK3mnD-OXZbEvTEPxzIOMGXj_aZKJG]

## Which version of the SharePoint Framework to use

Since SharePoint Online and SharePoint 2016 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint 2016 only supports the version which matches the server-side dependencies of the deployed packages.

SharePoint 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted in classic SharePoint pages built using the SharePoint Framework v1.1.0. This means that when you are targeting the SharePoint 2016 platform, you'll need to use the SharePoint Framework v1.1.0 due to the server-side version dependencies.

If you are planning to use the same client-side web parts in both SharePoint 2016 and in SharePoint Online, you will need to use the SharePoint Framework v1.1.0 as your baseline version to ensure that the web part works in both environments.

Starting from version 1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions both that use the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used also with SharePoint on-premises based on the v1.1.0 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises.

> [!IMPORTANT]
> Starting from version 1.4, the SharePoint Framework Yeoman generator supports new attribute of `includeClientSideAssets`, which can be used to indicate that assets should be included in the *sppkg* package. This capability is however only currently supported in SharePoint Online. When solution is targeted to  on-premises, this attribute in `package-solution.json` should be updated as `false`.

## Hosting your SharePoint Framework solution for on-premises deployment

Getting SharePoint Framework client-side web parts deployed to on-premises requires two distinct actions:

- Deployment of the solution package to the SharePoint app catalog
- Hosting the JavaScript files in a centralized location

You can host the JavaScript files in the location that best fits your environment. For example, these files can be hosted in any of the following locations:

- **Azure CDN** - Similar setup as with SharePoint Online. Requires end users to have Internet connectivity.
- **Local server in your network** - A server hosting the JavaScript files for your corporate network. This can be using whatever technology desired as long as the files are accessible through http requests.
- **SharePoint 2016** - You can also host your files in the local SharePoint farm itself. You can, for example, define a standardized site in your farm where all the SharePoint Framework assets are being hosted. Take note, however, that by default .json files are not allowed to be uploaded to SharePoint 2016 libraries. So farm level settings will need to be adjusted for this option.

> You can find more details on blocked file types in SharePoint 2016 from the following support article: [Types of files that cannot be added to a list or library](https://support.office.com/en-us/article/Types-of-files-that-cannot-be-added-to-a-list-or-library-30be234d-e551-4c2a-8de8-f8546ffbf5b3#ID0EAADAAA=2016)

## Development environment considerations

When you are developing SharePoint Framework client-side web parts you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded using the SharePoint Framework Yeoman templates.

If Internet access is not available for the development machines, you can setup a local on-premises registry for the required npm packages. However, this requires additional software and a significant amount of work to setup and maintain local package versions with packages in the actual npm gallery.

> The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

## How to determine which SharePoint Framework version was used for a solution

If you have existing SharePoint Framework solutions and you'd like to confirm which version of the SharePoint Framework was used for them, you'll need to check the following locations:

- **.yo-rc.json** - file in the solution's root folder that stores the SharePoint Framework Yeoman template version used when the solution was created.
- **package.json** - file in the solution's root folder that contains references to package versions used in the solution.
- **npm-shrinkwrap.json** - file in the solution's root folder that contains information about the exact versions used (if you used the `npm shrinkwrap` command to lock-down the exact versions of the solution).
- **package.json** - file in the *node_modules/@microsoft/sp-webpart-base* folder that contains a *version* attribute matching the used SharePoint Framework version, if you have installed packages to your solution.
