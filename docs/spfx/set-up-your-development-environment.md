---
title: Set up your SharePoint Framework development environment
description: Use any text editor to build SharePoint Framework solutions. You can use macOS, Windows, or Linux.
ms.date: 10/01/2024
ms.localizationpriority: high
ms.custom: scenarios:getting-started
---
# Set up your SharePoint Framework development environment

You can use any text editor to build SharePoint Framework (SPFx) solutions. You can use a macOS, Windows, or Linux environment as well.

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your Microsoft 365 tenant](./set-up-your-developer-tenant.md).

You can also follow these steps by watching this video on the Microsoft 365 Platform Community (PnP) YouTube Channel:

> [!Video https://www.youtube.com/embed/Cxx9MdjEiEw]

> [!IMPORTANT]
> The following steps assume you're building solutions for SharePoint Online using the latest version of the SharePoint Framework. If you're building solutions for SharePoint Server 2019 or SharePoint Server 2016, refer to the additional documentation referenced in the [See also](#see-also) section below.

## Install Node.js

Install the most recent LTS version of **[Node.js](https://www.nodejs.org) v18**.

This version is the currently recommended version of Node.js to use with the SharePoint Framework (*unless otherwise specified below*).

> [!IMPORTANT]
> Node.js is frequently updated and available on multiple platforms including macOS, Windows, and Linux. Because the exact download links change frequently, they aren't linked to from this page. Instead, use the details below to determine which installer to download for your platform.
>
> Be aware that Node.js maintains two different releases at all times: LTS & Current version. The SharePoint Framework is only supported on LTS versions. For more information about Node.js's Long Term Support (LTS) releases, see: [Node.js > Releases](https://nodejs.org/en/download/releases).

> [!TIP]
> The Node.js website always recommends the latest installer for both the LTS & Current releases. To download specific versions of Node.js versions, use the [Node.js > Downloads > Previous Releases](https://nodejs.org/en/download/releases/) page.
>
> - Windows users can use the **\*.msi** installers for x86 or x64 depending on your Windows installation. There are usually only two **\*.msi** files with names similar to **node-v{version-number}-x[86|64].msi**.
> - macOS users can use the **\*.pkg** installer that's usually is named **node-v{version-number}.pkg**.

You can check if you already have Node.js installed, including the installed version, by running the following command:

```console
node --version
```

SharePoint Framework v1.20.* is supported on Node.js v18 LTS (*aka Hydrogen*).

> [!CAUTION]
> If you're building SharePoint Framework components for SharePoint on-prem deployments, refer to the additional pages listed in the [See also](#see-also) section for more information.

## Install a code editor

You can use any code editor or IDE that supports client-side development to build your web part, such as:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Webstorm](https://www.jetbrains.com/webstorm)

The steps and examples in this documentation use [Visual Studio Code](https://code.visualstudio.com/), but you can use any editor of your choice.

## Install development toolchain prerequisites

The SharePoint Framework development and build toolchain leverages various popular open-source tools. While most dependencies are included in each project, you need to install a few dependencies globally on your workstation.

> [!TIP]
> You can install all three of the following tools in a single line:
>
> ```console
> npm install gulp-cli yo @microsoft/generator-sharepoint --global
> ```

### Install Gulp

[Gulp](https://gulpjs.com) is a JavaScript-based task runner used to automate repetitive tasks. The SharePoint Framework build toolchain uses Gulp tasks to build projects, create JavaScript bundles, and the resulting packages used to deploy solutions.

Enter the following command to install the Gulp CLI:

```console
npm install gulp-cli --global
```

### Install Yeoman

[Yeoman](https://yeoman.io/) helps you kick-start new projects, and prescribes best practices and tools to help you stay productive. SharePoint client-side development tools include a Yeoman generator for creating new web parts. The generator provides common build tools, common boilerplate code, and a common playground website to host web parts for testing.

Enter the following command to install Yeoman:

```console
npm install yo --global
```
> [!IMPORTANT]
> SharePoint Framework [v1.18.2 release](./release-1.18.2.md) included the support for Yeoman v5. If you use a previous SPFx version, you might need to install an older version. Yeoman v4.x is required by the SPFx v1.13 until v1.18.1. You can install the latest Yeoman v4 version with the following command:
>
> ```console
> npm install yo@4.3.1 --global
> ```

### Install Yeoman SharePoint generator

The Yeoman SharePoint web part generator helps you quickly create a SharePoint client-side solution project with the right toolchain and project structure.

To install the SharePoint Framework Yeoman generator globally, enter the following command:

```console
npm install @microsoft/generator-sharepoint --global
```

For more information about the Yeoman SharePoint generator, see [Yeoman generator for the SharePoint Framework](yeoman-generator-for-spfx-intro.md).

## Install a modern web browser

You should be using a modern web browser like [Microsoft Edge](https://www.microsoft.com/edge), [Google Chrome](https://www.google.com/chrome/), or [Firefox](https://www.mozilla.org/firefox/new/) as the development browser.

## Trusting the self-signed developer certificate

The SharePoint Framework's local web server, used when testing your custom solutions from your development environment, uses HTTPS by default. This is implemented using a development self-signed SSL certificate. Self-signed SSL certificates are not trusted by your developer environment. You must first configure your development environment to trust the certificate.

A utility task is included in every SharePoint Framework project in the form of a gulp task. You can elect to do this now, or wait until you create your first project as covered in the [Build your first SharePoint client-side web part (Hello World part 1)](web-parts/get-started/build-a-hello-world-web-part.md) tutorial.

Once a project has been created with the Yeoman generator for the SharePoint Framework, execute the following command from within the root folder of the project.

```console
gulp trust-dev-cert
```

> [!NOTE]
> This assumes you have installed all dependencies with `npm install` after creating the project. This step will install all gulp tasks as part of a project.

## Set the SPFX_SERVE_TENANT_DOMAIN environment variable (optional)

Starting with [SPFx v1.17](release-1.17.1.md), Microsoft replaced the hosted workbench URL launched when you execute gulp serve with a dynamic value. This is defined in the project's **./config/serve.json** file in the `initialPage` property:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json",
  "port": 4321,
  "https": true,
  "initialPage": "https://{tenantDomain}/_layouts/workbench.aspx"
}
```

The SPFx build toolchain will replace this value on the fly with a value defined in an environment variable on your local workstation.

Developers can use the `SPFX_SERVE_TENANT_DOMAIN` OS environment variable to specify the tenant domain (or site URL) for serve configurations across different SPFx solutions. If a URL in the serve configuration (for example, `pageUrl` for Field Customizer) contains the `{tenantDomain}` placeholder, it will be automatically replaced with the variable's value.

For more information on how to set the environment variable on your developer environment, including Windows or macOS, see [Setting the SharePoint Framework Hosted Workbench Test Site](https://www.voitanos.io/blog/set-spfx-hosted-workbench-test-site/).

## Optional tools

While not required for SPFx development, you may also find the following tools useful:

- [Fiddler](https://www.telerik.com/fiddler)
- [Postman](https://www.postman.com/)
- [Windows Terminal](https://github.com/Microsoft/Terminal)
- [Cmder for Windows](https://cmder.app/)
- [Oh My Zsh](http://ohmyz.sh/)
- [Git source control tools](https://git-scm.com/)
- [Teams Toolkit VS Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
- [SharePoint Framework Toolkit VS Code extension](https://marketplace.visualstudio.com/items?itemName=m365pnp.viva-connections-toolkit)

## Next steps

You're now ready to [build your first client-side web part](web-parts/get-started/build-a-hello-world-web-part.md)!

## SPFx & SharePoint Server (on-prem)

The SPFx is available on SharePoint Online (SPO), SharePoint Server Subscription Edition (SE), SharePoint Server 2019, & SharePoint Server 2016. The configuration instructions on this page assume you're creating solutions using the latest version of the SPFx for SharePoint Online.

SharePoint Online contains all versions of the SPFx, including all previous and the latest version. Each SPFx solution contains information to tell SPO which SPFx runtime it depends on.

If you're building solutions for a SharePoint Server on-prem deployment, review to the [See also](#see-also) section for details on specific SharePoint versions. Each SharePoint on-prem only supports a specific version of SPFx. This can introduce complicated development environment configurations if you're creating different solutions for different SharePoint deployments.

- **SharePoint Server 2016 uses the SharePoint Framework (SPFx) v1.1.0.** *For more information, see [SharePoint Framework development with SharePoint Server 2016 Feature Pack 2](sharepoint-2016-support.md).*
- **SharePoint Server 2019 uses the SharePoint Framework (SPFx) v1.4.1.** *For more information, see [SharePoint Framework development with SharePoint Server 2019 and Subscription Edition](sharepoint-2019-and-subscription-edition-support.md).*
- **SharePoint Server Subscription Edition uses the SharePoint Framework (SPFx) v1.5.1.** *For more information, see [SharePoint Framework development with SharePoint Server 2019 and Subscription Edition](sharepoint-2019-and-subscription-edition-support.md).*

Depending on your scenario, you may need to maintain different development environments. Developers have used the following approaches to address these challenges:

- virtual machines
- Docker
- Node Version Manager (NVM)

> [!TIP]
> For more information on NVM, see [Better Node.js Install Management with Node Version Manager](https://www.voitanos.io/blog/better-node-js-install-management-with-node-version-manager/).
>
> - [NVM](https://github.com/creationix/nvm) for macOS
> - [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows

## Troubleshooting

### Check the version of globally installed packages

To get a list of all globally installed packages, run the following command:

```console
npm list --global --depth=0️
```

### Unable to Trust the Self-signed Development Certificate

If you're having trouble trusting your self-signed certificate when you run **gulp trust-dev-cert** & you've verified that the correct versions of all dependencies are installed, one solution we usually see resolve the issue is to uninstall all globally installed packages, uninstall Node.js, reboot & start again.

In some cases, executing the command **gulp trust-dev-cert**, doesn't have the wanted effect of trusting the self-signed development certificate on your machine. In rare cases such as these, you may need to delete a hidden folder that's generated in your profile folder.

Locate & delete the folder **{{homedir}}/.gcb-serve-data** for SPFx version earlier than v1.12.1. For later versions delete folder **{{homedir}}/.rushstack** then try to trust the self-signed development certificate again. Otherwise running **gulp untrust-dev-cert** will have same effect to remove the certificate files from the profile folder.

In case the certificate is not added to the Trusted Root Certification Authority despite running **gulp trust-dev-cert** because of some policies blocking the action, the **rushstack-serve.pem** file from **{{homedir}}/.rushstack** folder can be imported manually into the Certificate Manager under Trusted Root Certification Authority with a local admin account.

### Unable to Install Packages with NPM - Corporate Proxies

If your development environment is behind a corporate proxy, you need to configure NPM to use that proxy. Refer to the [npm-config](https://docs.npmjs.com/misc/config) documents on how to configure your development environment behind a corporate proxy... specifically the **proxy** & **http-proxy** settings. More information: [Configure NPM for a corporate web proxy](https://www.voitanos.io/blog/node-npm-fix-proxy-config/)

## See also

- [SharePoint Framework development tools and libraries compatibility](compatibility.md)
- [SharePoint Framework development with SharePoint Server 2016 Feature Pack 2](sharepoint-2016-support.md)
- [SharePoint Framework development with SharePoint Server 2019 and Subscription Edition](sharepoint-2019-and-subscription-edition-support.md)
