SharePoint Framework is possible due to the various client-side JavaScript libraries. A lot of work has gone through to make these different tools work together for you to build client-side solutions. Below is a quick summary on various tools and libraries for you to get started with.

## TypeScript
TypeScript is the primary language to build SharePoint client-side web parts. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. SharePoint client-side development tools are built using TypeScript classes, modules and interfaces to help developers build robust client-side web parts. 
Below are some resources to get started with TypeScript:

* [TypeScript Quick Start](https://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Playground](https://www.typescriptlang.org/play/index.html)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [Engage with TypeScript Community](https://stackoverflow.com/questions/tagged/typescript)

## Your Choice of Framework
There are many JavaScript frameworks available to choose but some of the popular frameworks are, but not limited to:
* [React](https://facebook.github.io/react/)
* [AngularJS 1.x](https://docs.angularjs.org/tutorial)
* [AngularJS 2.x](https://angular.io/docs/ts/latest/quickstart.html)
* [Handlebars](http://handlebarsjs.com/)

Client-side web parts should be treated as components that gets dropped in a page. As SharePoint Framework is agnostic of JavaScript framework, you can choose your framework of choice to build your client-side web part. However, it is recommended to choose a JavaScript framework that supports similar component model. Lightweight frameworks such as React, Handlebars and Angular 2 Components all support component model which are well suited to build client-side web parts. That said, it shouldn't limit you from choosing other frameworks though. 

## Node Package Manager (npm)
[npm](https://www.npmjs.com/) is the package manager for JavaScript. It is usually included with Node.js setup. So if you have Node.js installed, chances are you have npm installed as well. SharePoint client-side development tools uses npm as its primary package manager to manage dependencies and other required JavaScript helpers. If you are familiar with [NuGet](https://www.nuget.org/), then you will feel home with npm as they are similar (with respect to package management).
Below are some resources to get familiar with npm:
* [npm documentation](https://docs.npmjs.com/)

## Node.js
Node.js is an open source, cross platform runtime environment for developers to host and serve JavaScript code. As a result, node.js is also used to develop server-side web applications written purely in JavaScript. Node.js ecosystem is tightly coupled with npm package manager and task runners such as gulp (described in the next topic) to provide an efficient environment for building JavaScript based applications. If you are familiar with IIS Express or IIS, then you will find node.js similar but backed by various other tools to simplify client-side development. 

Below are some resources to get familiar with Node.js:
* [Quick Introduction to Node.js](https://nodejs.org/en/about/)
* [Node.js API Reference Documentation](https://nodejs.org/api/)
* [Usage and Example](https://nodejs.org/api/synopsis.html)
* [Node.js at Wikipedia](https://en.wikipedia.org/wiki/Node.js)

## Gulp Task Runner
SharePoint client-side development tools use [gulp](http://gulpjs.com/) as its task runner which handles build process such as:
* Bundle and minify JavaScript and CSS files.
* Run tools to call the bundling and minification tasks before each build.
* Compile LESS or SASS files to CSS.
* Compile TypeScript files to JavaScript.

Below are some resources to get familiar with gulp:
* [Getting started with Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [TypeScript + Gulp](https://www.typescriptlang.org/docs/handbook/gulp.html)
* [Useful articles on Gulp](https://github.com/gulpjs/gulp/blob/master/docs/README.md#articles)

## Webpack
Webpack is a module bundler that takes your web part files, its dependencies and generates one or more JavaScript bundles so you can load different bundles for different scenarios.

The development tool chain uses [CommonJS](https://webpack.github.io/docs/commonjs.html) to bundle which enables you to define modules and require them where you want to use those modules. And finally, the tool chain uses [SystemJS](https://github.com/systemjs/systemjs), a universal module loader to load your modules. This benefits the toolchain and runtime in various ways specifically helping to scope your web parts by making sure each web part is executed in its own namespace.

Below are some resources to get familiar with webpack:
* [Webpack Documentation](http://webpack.github.io/docs/what-is-webpack.html)
* [TypeScript + React + Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

## Yeoman Generators
[Yeoman](http://yeoman.io/) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive.
SharePoint Yeoman generator will be available as part of the framework to kickstart new client-side web part projects. Once the project is generator, you can use your choice of IDEs like [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs) or HTML/JavaScript code editors like [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/).  

Below are some resources to get familiar with Yeoman:
* [Scaffold a web app with Yeoman](http://yeoman.io/codelab/index.html)
* [List of available Yeoman generators](http://yeoman.io/generators/)

Below are some common Yeoman generators that you can try depending on your choice of framework:
* [generator-react-webpack](https://github.com/newtriks/generator-react-webpack)
* [generator-angular](https://www.npmjs.com/package/generator-angular)

## SharePoint APIs
While the SharePoint Framework provides the key integrations with the SharePoint experiences, APIs are key to interacting with the SharePoint and other workloads that shape your web part functionality. As the framework is targeted towards web development, REST APIs are preferred as the standard model to interact with SharePoint and other workloads. 

It is recommended you at least get familiar with the following set of REST APIs:
* [SharePoint List REST APIs](https://msdn.microsoft.com/EN-US/library/office/dn292552.aspx)

## Get familiar with Office Dev PnP / SharePoint PnP
We will be using [Office Dev Patterns and Practices / SharePoint Pattern and Practices (PnP)](http://aka.ms/officedevpnp) as the channel for sharing upcoming samples and patterns with the SharePoint Framework. PnP has provided similar guidance for add-in/app model development during past years and we want to ensure that you have a needed information for transforming your existing solution to SharePoint Framework, if you chose to do so. 

## Next steps
* [Setup your Office 365 Developer Tenant](Setup-SharePoint-Tenant)
* [Setup your Machine](Setup-your-machine)
* [Go build Tutorial 1: HelloWorld WebPart](HelloWorld-WebPart)
* [More Tutorials and Walkthroughs](Tutorials and Walkthroughs)