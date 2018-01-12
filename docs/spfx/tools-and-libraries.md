---
title: SharePoint Framework development tools and libraries
description: Use client-side JavaScript libraries to build your solutions and develop client-side web parts.
ms.date: 01/12/2018
ms.prod: sharepoint
---


# SharePoint Framework development tools and libraries

The SharePoint Framework includes several client-side JavaScript libraries that you can use to build your solutions. This article provides an overview of the tools and libraries that you can use to develop client-side web parts.

## TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. SharePoint client-side development tools are built using TypeScript classes, modules, and interfaces. You can use these to build robust client-side web parts. 

To get started with TypeScript, see the following resources:

* [TypeScript Quick Start](https://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Playground](https://www.typescriptlang.org/play/index.html)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [TypeScript community on Stack Overflow](https://stackoverflow.com/questions/tagged/typescript)

## JavaScript frameworks
You can choose any one of a number of JavaScript frameworks to develop client-side web parts. The following are some of the most popular:

* [React](https://facebook.github.io/react/)
* [AngularJS 1.x](https://docs.angularjs.org/tutorial)
* [Angular 2 for TypeScript 2.x](https://angular.io/guide/quickstart)
* [Handlebars](http://handlebarsjs.com/)

Because client-side web parts are components that are dropped into a SharePoint page, we recommend that you choose a JavaScript framework that supports a similar component model. Lightweight frameworks such as React, Handlebars, and Angular 2 all support a component model and are well suited to building client-side web parts. 

We also recommend that you look at the [SharePoint PnP JavaScript Core library](https://github.com/SharePoint/PnP-JS-Core), which is a community driven effort targeted for providing easy access on SharePoint REST APIs. 

## Node Package Manager (npm)

SharePoint client-side development tools use the [npm](https://www.npmjs.com/) package manager, which is similar to [NuGet](https://www.nuget.org/), to manage dependencies and other required JavaScript helpers. npm is typically included as part of Node.js setup.

For more information about npm, see the [npm documentation](https://docs.npmjs.com/).

## Node.js

Node.js is an open source, cross-platform runtime environment for hosting and serving JavaScript code. You can use Node.js to develop server-side web applications written in JavaScript. The Node.js ecosystem is tightly coupled with npm and task runners such as gulp to provide an efficient environment for building JavaScript-based applications. Node.js is similar to IIS Express or IIS, but includes tools to simplify client-side development. 

For more information about Node.js, see the following:

* [About Node.js](https://nodejs.org/en/about/)
* [Node.js API reference documentation](https://nodejs.org/api/)
* [Node.js Usage and Example](https://nodejs.org/api/synopsis.html)

## Gulp task runner
SharePoint client-side development tools use [gulp](http://gulpjs.com/) as the build process task runner to:

* Bundle and minify JavaScript and CSS files.
* Run tools to call the bundling and minification tasks before each build.
* Compile LESS or Sass files to CSS.
* Compile TypeScript files to JavaScript.

For more information about gulp, see the following:

* [Getting started with Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [TypeScript and Gulp](https://www.typescriptlang.org/docs/handbook/gulp.html)
* [Articles about Gulp](https://github.com/gulpjs/gulp/blob/master/docs/README.md#articles)

## Webpack

Webpack is a module bundler that takes your web part files and dependencies and generates one or more JavaScript bundles so that you can load different bundles for different scenarios.

The development tool chain uses [CommonJS](https://webpack.js.org/) for bundling. This enables you to define modules and where you want to use them. The tool chain also uses [SystemJS](https://github.com/systemjs/systemjs), a universal module loader, to load your modules. This helps you to scope your web parts by making sure that each web part is executed in its own namespace.

For more information about webpack, see the following:

* [Webpack documentation](https://webpack.js.org/)
* [TypeScript, React, and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

## Yeoman generators

[Yeoman](http://yeoman.io/) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive. The Yeoman SharePoint generator is available as part of the framework to kickstart new client-side web part projects. 

For more information about Yeoman, see the following:

* [Scaffold a web app with Yeoman](http://yeoman.io/codelab/index.html)
* [List of available Yeoman generators](http://yeoman.io/generators/)
* [Scaffold projects by using Yeoman SharePoint generator](toolchain/scaffolding-projects-using-yeoman-sharepoint-generator.md)

The following are some common Yeoman generators that you can try, depending on your choice of framework:

* [generator-react-webpack](https://github.com/react-webpack-generators/generator-react-webpack)
* [generator-angular](https://www.npmjs.com/package/generator-angular)

## Source code editors

SharePoint Framework is client-side driven and thus you can use your choice of HTML/JavaScript code editors, such as:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io)
* [Webstorm](https://www.jetbrains.com/webstorm)

SharePoint Framework documentation uses Visual Studio Code in the docs and examples. Visual Studio Code is a lightweight but powerful source code editor from Microsoft that runs on your desktop and is available for Windows, Mac, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js, and has a rich ecosystem of extensions for other languages (such as C++, C#, Python, PHP) and runtimes.

## SharePoint REST APIs

The SharePoint Framework provides key integrations with SharePoint experiences and targets web development. The SharePoint REST APIs enable you to interact with  SharePoint and other workloads that shape your web part functionality. 

We recommend that you become familiar with the following set of REST APIs:

* [SharePoint List REST APIs](../sp-add-ins/working-with-lists-and-list-items-with-rest.md)

## Patterns and Practices

The [Office Dev Patterns and Practices / SharePoint Pattern and Practices (PnP)](http://aka.ms/officedevpnp) initiative provides code samples, patterns, and other resources to help you transform your existing solution to the SharePoint Framework. Be sure to become familiar with the code samples and guidance that is available through the PnP effort.

## See also

* [SharePoint Framework Overview](sharepoint-framework-overview.md)
* [Build a Hello World client-side web part](web-parts/get-started/build-a-hello-world-web-part.md)
