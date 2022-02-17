---
title: Yeoman generator for the SharePoint Framework
description: On this page, learn how to use the Yeoman generator for the SharePoint Framework to create SPFx projects.
ms.date: 02/10/2022
ms.prod: sharepoint
ms.localizationpriority: high
---
# Yeoman generator for the SharePoint Framework

The **SharePoint Online SPFx Yeoman Generator** helps you quickly create a SharePoint client-side solution project with the right toolchain and project structure. It's used along with Yeoman to prompt you with questions to create the project scaffolding (the folders & files).

> [!IMPORTANT]
> This page assumes you've already installed all the necessary prerequisites for developing SharePoint Framework solutions. Verify the updated instructions outlined in the page [Set up your SharePoint Framework development environment](set-up-your-development-environment.md).

The SharePoint Online SPFx Yeoman Generator (*the "SPFx generator"*), uses the responses to the questions the developer is prompted with to create a new SharePoint Framework (SPFx) project. Depending on some prompt responses, other questions are presented.

For example, if you select the **WebPart** component type, you'll only see questions for the web part name and template type. However, if you select the **Extension** component type, you'll also be prompted for the type of extension such as application customizer, field customizer, or ListView command set.

The following demonstrates the creation of a new solution named **sfpxplay-01** in the current folder with a web part named **HelloWorld** that uses the **Minimal** project template:

```console
yo @microsoft/sharepoint --skip-install

     _-----_     ╭──────────────────────────╮
    |       |    │      Welcome to the      │
    |--(o)--|    │  SharePoint Online SPFx  │
   `---------´   │          Yeoman          │
    ( _´U`_ )    │     Generator@1.14.0     │
    /___A___\   /╰──────────────────────────╯
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

Let's create a new SharePoint solution.
? What is your solution name? spfxplay-01
? Which type of client-side component to create? WebPart
Add new Web part to solution spfxplay-01.
? What is your Web part name? HelloWorld
? Which template would you like to use? Minimal

   create package.json
    force .yo-rc.json
   create config/package-solution.json
   create config/config.json
   create config/serve.json
   create tsconfig.json
   create .vscode/launch.json
   create .vscode/settings.json
   create config/deploy-azure-storage.json
   create config/write-manifests.json
   create src/index.ts
   create README.md
   create .gitignore
   create .npmignore
   create gulpfile.js
   create tslint.json
   create src/webparts/helloWorld/loc/en-us.js
   create src/webparts/helloWorld/loc/mystrings.d.ts
   create src/webparts/helloWorld/HelloWorldWebPart.module.scss
   create src/webparts/helloWorld/HelloWorldWebPart.ts
   create src/webparts/helloWorld/HelloWorldWebPart.manifest.json
   create teams/55564fc2-179d-4bc1-bd63-9ede8183dadc_outline.png
   create teams/55564fc2-179d-4bc1-bd63-9ede8183dadc_color.png

Changes to package.json were detected.
Skipping package manager install.

      _=+#####!
   ###########|       .------------------------------------.
   ###/    (##|(@)    |          Congratulations!          |
   ###  ######|   \   |  Solution spfxplay-01 is created.  |
   ###/   /###|   (@) |   Run gulp serve to play with it!  |
   #######  ##|   /   '------------------------------------'
   ###     /##|(@)
   ###########|
      **=+####!
```

> [!TIP]
> The different component types and options are addressed throughout the documentation in this site. Every option isn't covered on this page. For more information about the details on each component type, see the relevant topics throughout the documentation.

## Install the SharePoint Online SPFx Yeoman Generator

The SPFx generator is available as an [npm package](https://www.npmjs.com/package/@microsoft/generator-sharepoint). Install latest version of the the SPFx generator by executing the following command in a console:

```console
npm install @microsoft/generator-sharepoint -g
```

You can also install a specific version of the generator by specifying the version number in the package name, seperated with an `@1`. For example, to install the SPFx generator v1.10, execute the following command:

```console
npm install @microsoft/generator-sharepoint@1.10 -g
```

## Project template options

Prior to SPFx v1.14, the generator provided developers with two project templates:

- **No JavaScript Framework**:
- **React**

> [!NOTE]
> A third option, **Knockout**, was available in all SPFx releases through SPFx v1.10. Knockout was retired as an option in SPFx v1.11.

These templates included the minimal code a project needed to get started creating solutions. The **No JavaScript Framework** template used HTML and CSS to style a basic component while the **React** template used HTML, React, and CSS to do the same thing.

### Project templates updated in SPFx v1.14 with theme-support

In the SPFx v1.14 release, the SPFx generator introduced new & updated project templates. The goal of these templates is to include the code necessary to support the theme in the current environment where the component is running (SharePoint or Microsoft Teams).

The code included in these templates simplifies the initial work developers must do in order to add support for themes to their components. For example, using these templates, all the code necessary to determine the colors and font used in the current SharePoint site are available within the web part and the web part will be notified when the theme changes to pick up the new theme settings.

For SPFx components used in the context of Microsoft Teams, they'll receive the theme details for the current Microsoft Teams client such as default (light), dark, and high contrast.

Furthermore, these templates include the code to determine if the component is currently running in a SharePoint context, or a Microsoft Teams context.

For example, the following methods are included in both templates. The `_getEnvironmentMessage()` method returns a string indicating if the component is currently running in SharePoint or Microsoft Teams and if it's deployed to production or in development (served from localhost). The `onThemeChanged()` determines if the current theme is in dark mode and applies some changes to properties based on the current theme colors:

```typescript
private _getEnvironmentMessage(): string {
  if (!!this.context.sdks.microsoftTeams) { // running in Teams
    return this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentTeams
        : strings.AppTeamsTabEnvironment;
  }

  return this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentSharePoint
        : strings.AppSharePointEnvironment;
}

protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
  if (!currentTheme) {
    return;
  }

  this._isDarkTheme = !!currentTheme.isInverted;
  const {
    semanticColors
  } = currentTheme;
  this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
  this.domElement.style.setProperty('--link', semanticColors.link);
  this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

}
```

### Minimal project template

A new project template option, **Minimal**, was added to the SPFx generator in SPFx v1.14. This project template option includes no theme or host environment code in new projects.

For example, a new web part project starts with the following code, representing the minimal code necessary to run the web part:

```typescript
export default class HelloWorldMinimalWebPart
          extends BaseClientSideWebPart<IHelloWorldMinimalWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.helloWorldMinimal }"></div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
```

## Retired generator prompts

With each release of the SharePoint Framework, prompts may be added or removed in the Yeoman generator. Prompts were removed to simplify the project creation experience.

In the following section, you'll find the retired prompts with applicable guidance.

### Target different SharePoint Environments

In the [SPFx v1.13 release](release-1.13.md), the following prompt was retired:

> Which baseline packages do you want to target for your component(s)?

This prompt presented the developer with the option to create a project that targeted specific SharePoint deployments, including:

- **SharePoint Online only (latest)**
- **SharePoint 2016 onwards, including 2019 and SharePoint Online**
- **SharePoint 2019 onwards, including SharePoint Online**

Starting with SPFx v1.13, the generator can only create projects for SharePoint Online.

### Skip feature deployment - `skipFeatureDeployment`

In the [SPFx v1.14 release](release-1.14.md), the following prompt was retired:

> Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites?

This question is asking if the solution should be automatically installed for all sites in the tenant, or should it be manually installed in each site? The default option was **\[N\]o**.

> [!NOTE]
> Learn more about this prompt: [Tenant-scoped solution deployment for SharePoint Framework solutions](tenant-scoped-deployment.md).

The outcome of this question was set on the `skipFeatureDeployment` property in the project's **./config/package-solution.json** file.

Starting with SPFx v1.14, the `skipFeatureDeployment` property defaults to `true`. You can change the value of this property after creating the project, if necessary.

### Domain isolated web parts - `isDomainIsolated`

In the [SPFx v1.14 release](release-1.14.md), the following prompt was retired:

> Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant?

This question is asking if the web parts within the solution should be rendered within an IFRAME in a unique domain, or in a DIV as the current page. The default option was **\[N\]o**.

> [!NOTE]
> Learn more about this prompt: [Isolated web parts](web-parts/isolated-web-parts.md)

The outcome of this question was set on the `isDomainIsolated` property in the project's **./config/package-solution.json** file.

Starting with SPFx v1.14, the `isDomainIsolated` property defaults to `false`. You can change the value of this property after creating the project, if necessary.

### Which framework would you like to use?

In the [SPFx v1.14 release](release-1.14.md), the following prompt was changed:

> Which framework would you like to use?

This prompt was displayed for specific project types, such as web parts & types of SPFx extensions. It enabled developers to select from different project templates: **No JavaScript framework** or **React**.

The default project scaffolding created by the Yeoman generator was determined using the option selected.

In SPFx v1.14, this prompt was changed to the following and presented the user with three choices: **Minimal**, **No framework**, or **React**:

> Which template would you like to use?

### Component descriptions

In the [SPFx v1.14 release](release-1.14.md), the following prompts were retired:

> What is your Web part description?
>
> What is your Application Customizer description?
>
> What is your Field Customizer description?
>
> What is your ListView Command Set description?
>
> What is your Library description?
>
> What is your Adaptive Card Extension description?

The values of these prompts were set on the `preConfiguredEntries[0].description.default` & `preConfiguredEntries[0].properties.description` properties in the component's **\*.manifest.json** file.

Starting with SPFx v1.14, these properties are set to empty strings. You can change the value of these properties after creating the project, if necessary.

## SPFx generator command line options

You can use the SPFx generator's command-line options to create projects in one command instead of going through the prompts. Execute the following command to see the list of command-line options available for the SharePoint generator:

```console
yo @microsoft/sharepoint --help
```
