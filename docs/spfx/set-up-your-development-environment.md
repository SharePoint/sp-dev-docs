---
title: Set up your SharePoint Framework development environment
description: Learn how set up your development environment for the SharePoint Framework Heft-based toolchain.
ms.date: 10/28/2026
ms.localizationpriority: high
ms.custom: scenarios:getting-started
---
# Set up your SharePoint Framework development environment

> [!NOTE]
> This article focuses on the modern Heft-based toolchain that applies to all versions of the SharePoint Framework v1.22+.
>
> If you are working with the SharePoint Framework v1.0 - v1.21.1, including any version for SharePoint Server on-premises deployments, you should refer to the legacy gulp-based toolchain set up guide: [Set up your SharePoint Framework Gulp-Based development environment](set-up-your-development-environment-gulp-toolchain.md).

[!INCLUDE [spfx-gulp-toolchain-legacy](../../includes/snippets/spfx-gulp-toolchain-legacy.md)]

You can use any text editor to build SharePoint Framework (SPFx) solutions. You can use a macOS, Windows, or Linux environment as well.

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your Microsoft 365 tenant](./set-up-your-developer-tenant.md).

> [!IMPORTANT]
> The following steps assume you're building solutions for SharePoint Online using SharePoint Framework 1.24. For other SPFx versions, check the [compatibility reference](compatibility.md) before installing Node.js.

## Install Node.js

Install the latest available **[Node.js](https://nodejs.org) 24 LTS** release. Node.js 24 LTS is the recommended baseline for a new **SPFx 1.24** development environment.

SPFx 1.24 also supports Node.js 22 (22.14.0 or later within the 22.x release line) and Node.js 26. If you're maintaining a solution on an earlier SPFx version, use the Node.js version listed for that release in the [compatibility reference](compatibility.md). Don't apply the Node.js 24 recommendation to older projects without checking their supported versions.

> [!IMPORTANT]
> Node.js is frequently updated and available on multiple platforms including macOS, Windows, and Linux. Because the exact download links change frequently, they aren't linked to from this page. Instead, use the details below to determine which installer to download for your platform.
>
> Node.js lifecycle status and SPFx compatibility are separate. At the SPFx 1.24 release, Node.js 24 is LTS and Node.js 26 is Current. SPFx 1.24 supports both, but Node.js 24 LTS is recommended for getting started. Don't assume a newer Node.js release is supported just because it's available. For Node.js lifecycle details, see [Node.js releases](https://nodejs.org/en/about/previous-releases).

> [!TIP]
> The Node.js website always recommends the latest installer for both the LTS & Current releases. To download specific versions of Node.js versions, use the [Node.js > Downloads](https://nodejs.org/download/) page and select the version you want to install.
>
> - Windows users can select the **\*.msi** installer for their supported processor architecture.
> - macOS users can use the **\*.pkg** installer, usually named **node-v{version-number}.pkg**.

You can check if you already have Node.js installed, including the installed version, by running the following command:

```console
node --version
```

For the recommended SPFx 1.24 setup, the command should report a version starting with `v24.`. If you use a Node.js version manager, select Node.js 24 in the shell where you install the toolchain and run your project. See [Managing multiple development environments](#managing-multiple-development-environments).

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
> npm install @rushstack/heft yo @microsoft/generator-sharepoint@1.24.0 --global
> ```

### Install Heft

[Heft](https://heft.rushstack.io) is a config-driven toolchain that invokes other popular tools like TypeScript, ESLint, Jest, Webpack, and API Extractor to build web applications, Node.js services, command-line tools, and libraries. It's designed for use in monorepos with potentially hundreds of projects, where it's typically launched by package.json commands like **npm run build** or **npm run test**. If you're familiar with build tools like **Vite**, **esbuild**, or task runners like **Gulp** or **Grunt**, Heft plays a similar role but with a focus on large-scale consistency.

Learn more about the Heft-based toolchain in [SharePoint Framework Toolchain: Heft & Webpack](toolchain/sharepoint-framework-toolchain-rushstack-heft.md).

Enter the following command to install the Heft CLI globally:

```console
npm install @rushstack/heft --global
```

> [!NOTE]
> Technically you don't need to install the Heft CLI globally, but it will greatly simplify running Heft commands when it's installed globally which is why it's recommended here.

### Install Yeoman

[Yeoman](https://yeoman.io/) helps you kick-start new projects. The SharePoint Framework generator provides build configuration and starter code. Test web parts on a SharePoint page using the [developer toolbar](debug-toolbar.md); current SPFx projects don't include a local workbench.

Enter the following command to install Yeoman:

```console
npm install yo --global
```

### Install Yeoman SharePoint generator

The Yeoman SharePoint web part generator helps you quickly create a SharePoint client-side solution project with the right toolchain and project structure.

To install the SharePoint Framework Yeoman generator globally, enter the following command:

```console
npm install @microsoft/generator-sharepoint@1.24.0 --global
```

Use `@microsoft/generator-sharepoint@latest` instead to install the latest public release. At SPFx 1.24 GA, the npm `@latest` tag selects `1.24.0`; it advances with subsequent releases. Keep the explicit version when you need a reproducible SPFx 1.24 environment.

For more information about the Yeoman SharePoint generator, see [Yeoman generator for the SharePoint Framework](yeoman-generator-for-spfx-intro.md).

## Install a modern web browser

You should be using a modern web browser like [Microsoft Edge](https://www.microsoft.com/edge), [Google Chrome](https://www.google.com/chrome/), or [Firefox](https://www.mozilla.org/firefox/new/) as the development browser.

## Trusting the self-signed developer certificate

The SharePoint Framework's local web server, used when testing your custom solutions from your development environment, uses HTTPS by default. This is implemented using a development self-signed SSL certificate. Self-signed SSL certificates are not trusted by your developer environment. You must first configure your development environment to trust the certificate.

A utility command is included in every SharePoint Framework project in the form of a Heft command. You can elect to do this now, or wait until you create your first project as covered in the [Build your first SharePoint client-side web part (Hello World part 1)](web-parts/get-started/build-a-hello-world-web-part.md) tutorial.

Once a project has been created with the Yeoman generator for the SharePoint Framework, execute the following command from within the root folder of the project.

```console
heft trust-dev-cert
```

> [!NOTE]
> This assumes you have installed all dependencies with **npm install** after creating the project. This step will install all Heft commands as part of a project.

## Set the SPFX_SERVE_TENANT_DOMAIN environment variable (optional)

Starting with [SPFx v1.17](release-1.17.1.md), serve configuration URLs can use the `{tenantDomain}` placeholder. For a current Heft-based project, set the `initialPage` property in **./config/serve.json** to your development page:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json",
  "port": 4321,
  "https": true,
  "initialPage": "https://{tenantDomain}/sites/dev/SitePages/Test.aspx"
}
```

The SPFx build toolchain will replace this value on the fly with a value defined in an environment variable on your local workstation.

Developers can use the `SPFX_SERVE_TENANT_DOMAIN` OS environment variable to specify the tenant domain (or site URL) for serve configurations across different SPFx solutions. If a URL in the serve configuration (for example, `pageUrl` for Field Customizer) contains the `{tenantDomain}` placeholder, it will be automatically replaced with the variable's value.

Create a modern page in your development site and replace `/sites/dev/SitePages/Test.aspx` with its path. This is an ordinary SharePoint page, not the deprecated Online workbench. If the generated `initialPage` points to `/_layouts/workbench.aspx`, replace it.

For example, set the variable in the shell where you run the development server:

```powershell
$env:SPFX_SERVE_TENANT_DOMAIN = "contoso.sharepoint.com"
```

On macOS or Linux:

```bash
export SPFX_SERVE_TENANT_DOMAIN="contoso.sharepoint.com"
```

Run `heft start` from the project folder. To load your local web parts on the page, use the debug URL parameters in [Debug SharePoint Framework solutions on modern SharePoint pages](debug-modern-pages.md#debug-sharepoint-framework-web-parts-on-modern-sharepoint-pages) and accept **Load debug scripts** only for your trusted development server. The [SharePoint Framework Debug Toolbar](debug-toolbar.md) appears when debugging is enabled.

[!INCLUDE [spfx-online-workbench-deprecation](../../includes/snippets/spfx-online-workbench-deprecation.md)]

> [!NOTE]
> Copilot UX components use the fully supported **Copilot Workbench**, available at **/_layouts/15/copilotworkbench.aspx** in your tenant. Development and testing require the Microsoft 365 Copilot add-on license on top of your normal E3, E5, or E7 license, just as production use does. See [Test with the Copilot Workbench](copilot/overview-copilot-apps.md#test-with-the-copilot-workbench) for its prerequisites and setup.

## Optional tools

While not required for SPFx development, you may also find the following tools useful:

- [Fiddler](https://www.telerik.com/fiddler)
- [Postman](https://www.postman.com/)
- [Windows Terminal](https://github.com/Microsoft/Terminal)
- [Cmder for Windows](https://cmder.app/)
- [Oh My Zsh](http://ohmyz.sh/)
- [Git source control tools](https://git-scm.com/)
- [Microsoft 365 Agents Toolkit VS Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
- [SharePoint Framework Toolkit VS Code extension](https://marketplace.visualstudio.com/items?itemName=m365pnp.viva-connections-toolkit)

## Next steps

You're now ready to [build your first client-side web part](web-parts/get-started/build-a-hello-world-web-part.md)!

## Managing multiple development environments

Depending on your scenario, you may need to maintain different development environments. Developers have used the following approaches to address these challenges:

- virtual machines
- Docker
- Node version managers

> [!TIP]
> For more information on node version managers, see [Better Node.js Install Management with Node Version Manager](https://www.andrewconnell.com/articles/node-js-better-install-management-with-node-version-manager/).
>
> - [Node Version Manager (NVM)](https://github.com/creationix/nvm): for macOS
> - [Fast Node Manager (FNM)](https://github.com/Schniz/fnm): cross-platform (Windows and MacOS)
> - [Node Version Switcher (NVS)](https://github.com/jasongin/nvs): cross-platform (Windows and MacOS)

## Troubleshooting

### Check the version of globally installed packages

To get a list of all globally installed packages, run the following command:

```console
npm list --global
```

### Unable to Trust the Self-signed Development Certificate

If you're having trouble trusting your self-signed certificate when you run **heft trust-dev-cert** & you've verified that the correct versions of all dependencies are installed, one solution we usually see resolve the issue is to uninstall all globally installed packages, uninstall Node.js, reboot & start again.

In some cases, executing the command **heft trust-dev-cert**, doesn't have the wanted effect of trusting the self-signed development certificate on your machine. In rare cases such as these, you may need to delete a hidden folder that's generated in your profile folder.

Locate and delete folder **{{homedir}}/.rushstack** then try to trust the self-signed development certificate again. Otherwise running **heft untrust-dev-cert** will have same effect to remove the certificate files from the profile folder.

In case the certificate is not added to the Trusted Root Certification Authority despite running **heft trust-dev-cert** because of some policies blocking the action, the **rushstack-serve.pem** file from **{{homedir}}/.rushstack** folder can be imported manually into the **Certificate Manager** under **Trusted Root Certification Authority** with a local admin account.

### Unable to Install Packages with npm - Corporate Proxies

If your development environment is behind a corporate proxy, you need to configure npm to use that proxy. Refer to the [npm-config](https://docs.npmjs.com/misc/config) documents on how to configure your development environment behind a corporate proxy... specifically the **proxy** & **http-proxy** settings. More information: [Configure npm for a corporate web proxy](https://www.andrewconnell.com/articles/node-js-npm-fix-proxy-config/)

## See also

- [SharePoint Framework Toolchain: Heft & Webpack](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)
- [SharePoint Framework Legacy Toolchain: Gulp & Webpack](toolchain/sharepoint-framework-toolchain.md)
- [Set up your SharePoint Framework Gulp-Based development environment](set-up-your-development-environment-gulp-toolchain.md)
- [SharePoint Framework development tools and libraries compatibility](compatibility.md)
- [SharePoint Framework development with SharePoint Server 2016 Feature Pack 2](sharepoint-2016-support.md)
- [SharePoint Framework development with SharePoint Server 2019 and Subscription Edition](sharepoint-2019-and-subscription-edition-support.md)
