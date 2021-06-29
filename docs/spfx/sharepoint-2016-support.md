---
title: SharePoint Framework development with SharePoint 2016 Feature Pack 2
description: SharePoint Server 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted in classic SharePoint pages.
ms.date: 06/22/2021
localization_priority: Priority
---
# SharePoint Framework development with SharePoint Server 2016 Feature Pack 2

SharePoint Server 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted in classic SharePoint pages.

An introduction to SharePoint Framework development in SharePoint Server 2016 using Feature Pack 2 is also covered in the following video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=LGLMxnmHk6U&list=PLR9nK3mnD-OXZbEvTEPxzIOMGXj_aZKJG).

> [!VIDEO https://www.youtube.com/embed/LGLMxnmHk6U?list=PLR9nK3mnD-OXZbEvTEPxzIOMGXj_aZKJG]

## Which version of the SharePoint Framework to use

Because SharePoint Online and SharePoint Server 2016 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint Server 2016 only supports the version that matches the server-side dependencies of the deployed packages.

**SharePoint Server 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted on classic SharePoint pages built by using the SharePoint Framework v1.1.0.** This means that when you're targeting the SharePoint Server 2016 platform, you need to use the SharePoint Framework v1.1.0 due to the server-side version dependencies.

If you're planning to use the same client-side web parts in both SharePoint Server 2016 and in SharePoint Online, you need to use the SharePoint Framework v1.1.0 as your baseline version to ensure that the web part works in both environments.

Starting from version 1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions that use both the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used with SharePoint on-premises based on the v1.1.0 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises.

> [!IMPORTANT]
> Starting from version 1.4, the SharePoint Framework Yeoman generator supports a new attribute of `includeClientSideAssets`, which can be used to indicate that assets should be included in the **sppkg** package. This capability is, however, isn't supported by SharePoint Server 2016. When a solution is targeted to SharePoint Server 2016, this attribute in **./config/package-solution.json** should be updated as `false`.

## Hosting your solution for on-premises deployment

Getting SharePoint Framework client-side web parts deployed to on-premises requires two distinct actions:

- Deployment of the solution package to the SharePoint app catalog
- Hosting the JavaScript files in a centralized location

You can host the JavaScript files in the location that best fits your environment. For example, these files can be hosted in any of the following locations:

- **Azure CDN**: Similar setup as with SharePoint Online. Requires end users to have Internet connectivity.
- **Local server in your network**: A server hosting the JavaScript files for your corporate network. This can be using whatever technology is wanted as long as the files are accessible through HTTP requests.
- **SharePoint Server 2016**: You can also host your files in the local SharePoint farm itself. You can, for example, define a standardized site in your farm where all the SharePoint Framework assets are being hosted. Take note, however, that by default, .json files are not allowed to be uploaded to SharePoint Server 2016 libraries, so farm level settings must be adjusted for this option.

For more information about blocked file types in SharePoint Server 2016, see the following support article: [Types of files that cannot be added to a list or library](https://support.office.com/article/Types-of-files-that-cannot-be-added-to-a-list-or-library-30be234d-e551-4c2a-8de8-f8546ffbf5b3#ID0EAADAAA=2016).

## Development environment considerations

When you're developing SharePoint Framework client-side web parts, you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded by using the SharePoint Framework Yeoman templates.

If Internet access isn't available for the development machines, you can set up a local on-premises registry for the required npm packages. However, this requires additional software and a significant amount of work to set up and maintain local package versions with packages in the actual npm gallery.

The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

### Node.js, Gulp & Yeoman versions

The dependencies for SPFx v1.1 frameworks, tools, and the associated versions don't match the same dependency matrix for the latest versions of SPFx. In these cases, you may need to install specific versions of the tools.

For example, Gulp v3.* is only supported up to Node.js v10, while Gulp v4.* is supported from Node.js v12 and higher. Because SPFx v1.1 is only supported on Node.js v6 and Node.js v8, you need to ensure you have an older version of Node.js installed as well as an older version of Gulp & Yeoman.

If you're building SPFx v1.1 solutions, install the following specific versions of Gulp & Yeoman:

```console
npm install --global gulp@3.9.1
npm install --global yo@3.1.1
```

For more information, see [SharePoint Framework development tools and libraries compatibility](compatibility.md).

## Determine which version was used for a solution

If you have existing SharePoint Framework solutions and you'd like to confirm which version of the SharePoint Framework was used for them, you'll need to check the following locations:

- **.yo-rc.json**: File in the solution's root folder that stores the SharePoint Framework Yeoman template version used when the solution was created.
- **package.json**: File in the solution's root folder that contains references to package versions used in the solution.
- **npm-shrinkwrap.json**: File in the solution's root folder that contains information about the exact versions used (if you used the `npm shrinkwrap` command to lock down the exact versions of the solution).
- **package.json**: File in the **node_modules/@microsoft/sp-webpart-base** folder that contains a `version` attribute matching the used SharePoint Framework version, if you have installed packages to your solution.

## Troubleshooting

### Impact of Node.js v6, Node.js v8, HTTP1, & HTTP2

Around this the time of the v1.1 release, Node.js was transitioning from Node.js v6.x to v8.x. In this update, Node.js introduced a change where the default HTTP protocol switched from HTTP1 to HTTP2. SPFx v1.1 was written for HTTP1, not HTTP2, so this change affected the local web server for SPFx v1.1 projects.

In Node.js v8.x, you can force HTTP1 by setting the following environment variable to instruct Node.js to use HTTP1 instead of the default HTTP2: `NODE_NO_HTTP2=1`. This environment variable only exists in Node.js v8.x. That's why if you're building SPFx solutions for SharePoint Server 2016, you should use Node.js v8.x.

This issue doesn't impact later versions of SPFx because they've been updated to support HTTPs.

For more information, see [issue #1002](https://github.com/SharePoint/sp-dev-docs/issues/1002).

## See also

- [SharePoint Framework Overview](sharepoint-framework-overview.md)
- [SharePoint Framework development tools and libraries compatibility](compatibility.md)
