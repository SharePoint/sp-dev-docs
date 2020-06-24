---
title: Set up your SharePoint Framework development environment
description: Use Visual Studio or your own custom development environment to build SharePoint Framework solutions. You can use a Mac, PC, or Linux.
ms.date: 06/24/2020
ms.prod: sharepoint
localization_priority: Priority
ms.custom: scenarios:getting-started
---
# Set up your SharePoint Framework development environment

You can use Visual Studio or your own custom development environment to build SharePoint Framework solutions. You can use a Mac, PC, or Linux environment as well.

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your Microsoft 365 tenant](./set-up-your-developer-tenant.md).

You can also follow these steps by watching this video on the SharePoint PnP YouTube Channel:

> [!Video https://www.youtube.com/embed/-2-jWsEa2Yw]

## Install Node.js

Install [Node.js LTS version 10](https://nodejs.org/download/release/v10.20.1/).

- If you're in Windows, you can use the msi installers ([x86](https://nodejs.org/download/release/v10.20.1/node-v10.20.1-x86.msi) or [x64](https://nodejs.org/download/release/v10.20.1/node-v10.20.1-x64.msi)) in this link for the easiest way to set up Node.js (notice that these direct links evolve over time, so check the latest v10 from the above directory).
- If you have Node.js already installed, check that you have the correct version by using `node -v`. It should return version 10.20.1.

> [!IMPORTANT]
> The current supported LTS version of Node.js for the SharePoint Framework is  **Node.js v8.x** and **Node.js v10.x**. Node versions 9.x, 11.x, and 12.x are **not** currently supported with SharePoint Framework development.

> [!NOTE]
> If you're building SharePoint Framework components for SharePoint Server 2016, see **[SPFx & SharePoint Server 2016](#spfx--sharepoint-server-2016)** section for additional details on which version of Node.js you should install.

## Install a code editor

You can use any code editor or IDE that supports client-side development to build your web part, such as:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io)
- [Webstorm](https://www.jetbrains.com/webstorm)

The steps and examples in this documentation use [Visual Studio Code](https://code.visualstudio.com/), but you can use any editor of your choice.

## Install development toolchain prerequisites

The SharePoint Framework development and build toolchain leverages various popular open-source tools. While most dependencies are included in each project, you need to install a few dependencies globally on your workstation.

> [!TIP]
> You can install all three of the following tools in a single line:
>
> ```console
> npm install gulp yo @microsoft/generator-sharepoint --global
> ```

### Install Gulp

[Gulp](https://gulpjs.com) if a JavaScript-based task runner used to automate repetitive tasks. The SharePoint Framework build toolchain uses Gulp tasks to build projects, create JavaScript bundles, and the resulting packages used to deploy solutions.

Enter the following command to install Gulp:

```console
npm install gulp --global
```

### Install Yeoman

[Yeoman](https://yeoman.io/) helps you kick-start new projects, and prescribes best practices and tools to help you stay productive. SharePoint client-side development tools include a Yeoman generator for creating new web parts. The generator provides common build tools, common boilerplate code, and a common playground website to host web parts for testing.

Enter the following command to install Yeoman:

```console
npm install yo --global
```

### Install Yeoman SharePoint generator

The Yeoman SharePoint web part generator helps you quickly create a SharePoint client-side solution project with the right toolchain and project structure.

To install the SharePoint Framework Yeoman generator globally, enter the following command:

```console
npm install @microsoft/generator-sharepoint --global
```

For more information about the Yeoman SharePoint generator, see [Scaffold projects by using Yeoman SharePoint generator](toolchain/scaffolding-projects-using-yeoman-sharepoint-generator.md).

## Install a modern web browser

You should be using a modern web browser like [Microsoft Edge](https://www.microsoft.com/edge), [Google Chrome](https://www.google.com/chrome/), or [Firefox](https://www.mozilla.org/firefox/new/) as the development browser. Local workbench doesn't support usage of Internet Explorer 11.

## Trusting the self-signed developer certificate

The SharePoint Framework's local webserver, used when testing your custom solutions from your development environment, uses HTTPS by default. This is implemented using a development self-signed SSL certificate. Self-signed SSL certificates are not trusted by your developer environment. You must first configure your development environment to trust the certificate.

A utility task is included in every SharePoint Framework project in the form of a gulp task. You can elect to do this now, or wait until you create your first project as covered in the [Build your first SharePoint client-side web part (Hello World part 1): Preview the web part]([Build your first SharePoint client-side web part (Hello World part 1)](web-parts/get-started/build-a-hello-world-web-part.md)) tutorial.

Once a project has been created with the Yeoman generator for the SharePoint Framework, execute the following command from within the root folder of the project.

```console
gulp trust-dev-cert
```

> [!NOTE]
> This assumes you have installed all dependencies with `npm install` after creating the project. This step will install all gulp tasks as part of a project.

## Optional tools

Following are some tools that might come in handy as well:

- [Fiddler](https://www.telerik.com/fiddler)
- [Postman](https://www.getpostman.com/docs/postman/launching_postman/navigating_postman)
- [Windows Terminal](https://github.com/Microsoft/Terminal)
- [Cmder for Windows](http://cmder.net/)
- [Oh My Zsh for Mac](http://ohmyz.sh/)
- [Git source control tools](https://git-scm.com/)

## SPFx & SharePoint Server 2016

SharePoint Server 2016 uses the SharePoint Framework (SPFx) v1.1. Around this the time of the v1.1 release, Node.js was transitioning from Node.js v6.x to v8.x. In this update, Node.js introduced a change where the default HTTP protocol switched from HTTP1 to HTTP2. SPFx v1.1 was written for HTTP1, not HTTP2, so this change affected the local web server for SPFx v1.1 projects.

In Node.js v8.x, you can force HTTP1 by setting the following environment variable to instruct Node.js to use HTTP1 instead of the default HTTP2: `NODE_NO_HTTP2=1`. This environment variable only exists in Node.js v8.x. That's why if you're building SPFx solutions for SharePoint Server 2016, you should use Node.js v8.x.

This issue doesn't impact later versions of SPFx because they've been updated to support HTTPs.

For more information, see [issue #1002](https://github.com/SharePoint/sp-dev-docs/issues/1002).

## Next steps

You're now ready to [build your first client-side web part](web-parts/get-started/build-a-hello-world-web-part.md)!

## Troubleshooting

### Unable to Trust the Self-signed Development Certificate

If you're working with SharePoint Server 2016 / SPFx v1.1, first check the **[SPFx & SharePoint Server 2016](#spfx--sharepoint-server-2016)** section to ensure you're running a supported version of Node.js.

In some cases, executing the command `gulp trust-dev-cert`, doesn't have the wanted effect of trusting the self-signed development certificate on your machine. In rare cases such as these, you may need to delete a hidden folder that's generated in your profile folder. Locate & delete the folder `<homedir>/.gcb-serve-data` and then try to trust the self-signed development certificate again.

### Unable to Install Packages with NPM - Corporate Proxies

If your development environment is behind a corporate proxy, you need to configure NPM to use that proxy. Refer to the [npm-config](https://docs.npmjs.com/misc/config) documents on how to configure your development environment behind a corporate proxy... specifically the **proxy** & **http-proxy** settings. More information: [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy/)
