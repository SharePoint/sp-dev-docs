---
title: SharePoint Framework development with SharePoint Server 2019 & SharePoint Server SE
description: SharePoint Server 2019 supports SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.
ms.date: 12/28/2021
ms.localizationpriority: high
---
# SharePoint Framework development with SharePoint Server 2019 & SharePoint Server SE

SharePoint Server 2019 supports SharePoint Framework client-side web parts in classic and pages, and extensions in modern pages.

> [!IMPORTANT]
> SharePoint Server Subscription Edition (SE) has all the same dependencies and requirements for the SharePoint Framework as SharePoint Server 2019.

## Which version of the SharePoint Framework to use

Because SharePoint Online and SharePoint Server 2019 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint Server 2019 only supports the version that matches the server-side dependencies of the deployed packages.

**SharePoint Server 2019 supports SharePoint Framework client-side web parts hosted on classic or modern SharePoint pages built by using the SharePoint Framework v1.4.1.** SharePoint Server 2019 also supports SharePoint Framework extensions hosted on modern SharePoint pages built using SharePoint Framework v1.4.1. This means that when you're targeting the SharePoint Server 2019 platform, you need to use the SharePoint Framework v1.4.1 because of the server-side version dependencies.

Starting from v1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions that use both the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used with SharePoint on-premises based on the v1.1.0 or v1.4.1 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises.

## Development environment considerations

When you're developing SharePoint Framework client-side web parts, you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded by using the SharePoint Framework Yeoman templates.

If Internet access isn't available for the development machines, you can set up a local on-premises registry for the required npm packages. However, this requires additional software and a significant amount of work to set up and maintain local package versions with packages in the actual npm gallery.

The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

### Node.js, Gulp, & Yeoman versions

The dependencies for SPFx v1.4.1 frameworks, tools, and the associated versions don't match the same dependency matrix for the latest versions of SPFx. In these cases, you may need to install specific versions of the tools.

For example, Gulp v3.* is only supported up to Node.js v10, while Gulp v4.* is supported from Node.js v12 and higher. Because SPFx v1.4.1 is only supported on Node.js v6 and Node.js v8, you need to ensure you have an older version of Node.js installed as well as an older version of Gulp & Yeoman.

> [!NOTE]
> The Gulp team introduced a separate package, [gulp-cli](https://www.npmjs.com/package/gulp-cli), that should be installed globally. It can be used by projects that use either Gulp v3 & Gulp v4.
>
> Learn more about the gulp-cli here: [gulpjs/gulp/#2324](https://github.com/gulpjs/gulp/issues/2324).

Microsoft recommends using the most recent version of the Yeoman generator for the SharePoint Framework ([@microsoft/generator-sharepoint](https://www.npmjs.com/package/@microsoft/generator-sharepoint)) that supports creating on-premises projects: SPFx v1.10.1.

> [!IMPORTANT]
> The Yeoman generator for the SharePoint Framework, starting with v1.13.0, only supports projects for SharePoint Online. Learn more about this change in the [SharePoint Framework v1.13 release notes](release-1.13.md). However, SPFx 1.4.1 only supports up to Node.js v10. Therefore, you need to get the latest version of the Yeoman generator for the SharePoint Framework (v1.10.0) that works on the same version of Node.js (v10) that SPFx v1.4.1 is supported on.

1. Install [Node.js v10.24.1](https://nodejs.org/download/release/v10.24.1/)
1. Install global dependencies

    ```console
    npm install gulp-cli@2.3.0 --global
    npm install yo@2.0.6 --global
    npm install @microsoft/generator-sharepoint@1.4.1 --global
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
- [SharePoint Server 2019 development platform](../general-development/sharepoint-2019-development-platform.md)
