---
title: SharePoint Framework development tools and libraries
description: Use client-side JavaScript libraries to build your solutions and develop client-side web parts.
ms.date: 10/25/2026
ms.localizationpriority: high
---
# SharePoint Framework development tools and libraries

The SharePoint Framework (SPFx) includes several client-side JavaScript libraries that you can use to build your solutions. This article provides an overview of the tools and libraries that you can use to develop client-side web parts.

## TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. SharePoint client-side development tools are built using TypeScript classes, modules, and interfaces. You can use these to build robust client-side web parts.

To get started with TypeScript, see the following resources:

- [TypeScript Get Started](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript community on Stack Overflow](https://stackoverflow.com/questions/tagged/typescript)

## Web frameworks

You can choose among different web frameworks to develop client-side web parts:

- [React](https://react.dev)
- [Angular](https://angular.dev)
- [Vue.js](https://vuejs.org)
- [Handlebars](https://handlebarsjs.com)

Because client-side web parts are components that are placed on a SharePoint page, choose a framework that supports component-based development and check its dependencies against your SPFx version.

> [!IMPORTANT]
> While the SPFx is unopinionated in the web framework you use, Microsoft recommends using React in SPFx solutions. In addition, most tools and packages from both Microsoft and the community use React, such as:
>
> - [Fluent UI React](https://developer.microsoft.com/fluentui#/get-started/web)
> - [PnP React Reusable Controls](https://pnp.github.io/sp-dev-fx-controls-react/)
> - [PnP React Reusable Property Pane Controls](https://pnp.github.io/sp-dev-fx-property-controls/)

SPFx 1.24 uses **React 18.3.1** and scaffolds projects with **TypeScript 5.8**. Use the [compatibility reference](compatibility.md) for the supported versions for each SPFx release rather than independently upgrading framework dependencies.

## Node Package Manager (npm)

SharePoint client-side development tools use the [npm](https://www.npmjs.com/) package manager, which is similar to [NuGet](https://www.nuget.org/), to manage dependencies and other required JavaScript helpers. npm is typically included as part of Node.js setup.

For more information about npm, see the [npm documentation](https://docs.npmjs.com/).

## Node.js

Node.js is an open-source, cross-platform JavaScript runtime. SPFx uses Node.js to run development tools, including npm and Heft, on the developer workstation and build agent; the deployed client-side components run in the user's browser.

For new SPFx 1.24 projects, use **Node.js 24 LTS**. Node.js 22 (22.14.0 or later in 22.x) and Node.js 26 are also supported. For earlier releases, follow their own [compatibility requirements](compatibility.md). See [Set up your development environment](set-up-your-development-environment.md).

For more information about Node.js, see the following:

- [About Node.js](https://nodejs.org/about/)
- [Node.js API reference documentation](https://nodejs.org/api/)

## Build toolchain

The SPFx used a gulp-based build toolchain from the original release through the SPFx v1.21.1 release. Microsoft transitioned to a more modern toolchain based on the Heft configuration-driven toolchain in SPFx v1.22. Learn more about the two toolchains in the following articles:

- [Heft-based toolchain (SPFx v1.22.0+)](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)
- [Gulp-based toolchain (legacy)](toolchain/sharepoint-framework-toolchain.md)

## Webpack

Webpack is a module bundler that takes your web part files and dependencies and generates one or more JavaScript bundles so that you can load different bundles for different scenarios.

The development tool chain uses [webpack](https://webpack.js.org/) for bundling. This enables you to define modules and where you want to use them. The tool chain also uses [SystemJS](https://github.com/systemjs/systemjs), a universal module loader, to load your modules. This helps you to scope your SPFx components by making sure that each web part is executed in its own namespace.

For more information about webpack, see the following:

- [Webpack documentation](https://webpack.js.org/)
- [TypeScript JSX support](https://www.typescriptlang.org/docs/handbook/jsx.html)

## Create new project with Yeoman

[Yeoman](http://yeoman.io/) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive. The Yeoman SharePoint generator is available as part of the framework to kickstart new client-side web part projects.

For more information about Yeoman, see the following:

- [Scaffold a web app with Yeoman](http://yeoman.io/codelab/index.html)
- [Yeoman generator for the SPFx](yeoman-generator-for-spfx-intro.md)

## Source code editors

The SPFx is client-side driven and thus you can use your choice of HTML/JavaScript code editors, such as:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Webstorm](https://www.jetbrains.com/webstorm)

The SPFx documentation uses Visual Studio Code in the docs and examples. Visual Studio Code is a lightweight but powerful source code editor from Microsoft that runs on your desktop and is available for Windows, Mac, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js, and has a rich ecosystem of extensions for other languages (such as C++, C#, Python, PHP) and runtimes.

## SharePoint REST APIs

The SPFx provides key integrations with SharePoint experiences and targets web development. The SharePoint REST APIs enable you to interact with  SharePoint and other workloads that shape your web part functionality.

We recommend that you become familiar with the following set of REST APIs:

- [SharePoint List REST APIs](../sp-add-ins/working-with-lists-and-list-items-with-rest.md)

> [!TIP]
> In addition to the SharePoint REST APIs, the [SharePoint PnP JavaScript Core library (PnPjs)](https://github.com/pnp/pnpjs) is a popular community-driven effort targeted for providing easy access on SharePoint and Microsoft Graph REST APIs.

## Patterns and Practices

The [Office Dev Patterns and Practices / SharePoint Patterns and Practices (PnP)](https://aka.ms/sppnp) initiative provides code samples, patterns, and other resources to help you transform your existing solution to the SPFx. Be sure to become familiar with the code samples and guidance that is available through the PnP effort.

## See also

- [SPFx Overview](sharepoint-framework-overview.md)
- [Heft-based toolchain (SPFx v1.22.0+)](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)
- [Gulp-based toolchain (legacy)](toolchain/sharepoint-framework-toolchain.md)
- [Build a Hello World client-side web part](web-parts/get-started/build-a-hello-world-web-part.md)
