# SharePoint Framework Toolchain

## Overview
The SharePoint Framework toolchain is responsible to setup your client-side solution with the set of build tools, framework packages and more. With the help of this toolchain, you are able to not only build client-side components like web parts, but also test them in your local dev environment with tools such as SharePoint Workbench, package and deploy to SharePoint. The toolchain also provides you with a set of build commands that help you to complete key build tasks such as code compilation, package the client-side solution into a SharePoint app package etc.,

## npm
Before diving into the various toolchain components, it is important to understand about [npm](https://www.npmjs.com/), the package manager that SharePoint Framework uses to manage different modules in the project. npm is one of the preferred open source package managers for JavaScript. 

Typically a npm package consists of one or more reusable JavaScript code called module(s) along with a list of dependency packages that it depends on. When you install the package, it also installs those dependencies. [npm registry](https://www.npmjs.com/) consists of hundreds of packages that you can download and build your application. You can also [publish your own packages](https://docs.npmjs.com/getting-started/what-is-npm) to npm and share it with other developers. SharePoint Framework, not only uses some of the npm packages in the toolchain but also publishes its [own packages to npm registry](https://www.npmjs.com/search?q=%40microsoft%2Fsp-). 

### SharePoint Framework packages
SharePoint Framework consists of several npm packages that work together to help developers build client-side experiences in SharePoint. 

Below is the list of SharePoint Framework packages in SharePoint Framework preview:

>The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback. The packages listed below may change during preview. 

* [@microsoft/generator-sharepoint](https://www.npmjs.com/package/@microsoft/generator-sharepoint) - This is a [Yeoman](http://yeoman.io/) plugin for use with the SharePoint Framework. Using this generator, developers can quickly set up a new client-side web part project with sensible defaults and best practices.

* [@microsoft/sp-client-base](https://www.npmjs.com/package/@microsoft/sp-client-base) - This package defines the core libraries for client-side applications built using the SharePoint Framework.

* [@microsoft/sp-client-preview](https://www.npmjs.com/package/@microsoft/sp-client-preview) - This package contains SharePoint Framework libraries that are still under development. Once they are finalized, they will be refactored into separate NPM packages.

* [@microsoft/sp-webpart-workbench](https://www.npmjs.com/package/@microsoft/sp-webpart-workbench) - SharePoint Workbench is a standalone environment for testing and debugging client-side web parts.

* [@microsoft/sp-module-loader](https://www.npmjs.com/package/@microsoft/sp-module-loader) - Built on familiar standards such as SystemJS and WebPack, the module loader is the first part of the SharePoint Framework to load on a page. It manages versioning and loading of client-side components, web parts, and other assets. It also provides basic diagnostic services.

* [@microsoft/sp-module-interfaces](https://www.npmjs.com/package/@microsoft/sp-module-interfaces) - This project defines some module interfaces that are shared by the SharePoint Framework module loader and also the build system.

* [@microsoft/sp-lodash-subset](https://www.npmjs.com/package/@microsoft/sp-lodash-subset) - This package provides a custom bundle of lodash for use with the SharePoint Framework's module loader. To improve runtime performance, it only includes a subset of the most essential lodash functions.

* [@microsoft/sp-tslint-rules](https://www.npmjs.com/package/@microsoft/sp-tslint-rules) - This package defines custom tslint rules for usage with SharePoint client-side projects.

* [@microsoft/office-ui-react-bundle](https://www.npmjs.com/package/@microsoft/office-ui-fabric-react-bundle) - This package provides a custom bundle of [office-ui-fabric-react](https://www.npmjs.com/package/office-ui-fabric-react) that is optimized for use with the SharePoint Framework's module loader.

### Common build tools packages
Along with the framework packages described above, a common set of build tools are also used to perform build tasks such as compiling typescript code to JavaScript, SCSS to CSS etc., 

Below is the list of common build tools packages in SharePoint Framework preview:

>The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback. The packages listed below may change during preview.

* [@microsoft/sp-build-core-tasks](https://www.npmjs.com/package/@microsoft/sp-build-core-tasks) - A collection of tasks for the SharePoint Framework build system, which is based on gulp. The sp-build-core-tasks package implements various SharePoint-specific operations such as packaging solutions, writing manifests, etc.

* [@microsoft/sp-build-web](https://www.npmjs.com/package/@microsoft/sp-build-web) - This package is intended to be imported directly by a gulp file that uses the SharePoint Framework build system. It imports and configures a set of build tasks that are appropriate for a build target that will run in a web browser (e.g. versus a NodeJS environment).

* [@microsoft/gulp-core-build](https://www.npmjs.com/package/@microsoft/gulp-core-build) - Core gulp build tasks for building typescript, html, less, etc. This package depends on several other npm packages that contain these tasks:
	- [@microsoft/gulp-core-build-typescript](https://www.npmjs.com/package/@microsoft/gulp-core-build-typescript)
	- [@microsoft/gulp-core-build-sass](https://www.npmjs.com/package/@microsoft/gulp-core-build-sass)
	- [@microsoft/gulp-core-build-webpack](https://www.npmjs.com/package/@microsoft/gulp-core-build-webpack)
	- [@microsoft/gulp-core-build-serve](https://www.npmjs.com/package/@microsoft/gulp-core-build-serve)
	- [@microsoft/gulp-core-build-karma](https://www.npmjs.com/package/@microsoft/gulp-core-build-karma)
	- [@microsoft/gulp-core-build-mocha](https://www.npmjs.com/package/@microsoft/gulp-core-build-mocha)

* [@microsoft/loader-cased-file](https://www.npmjs.com/package/@microsoft/loader-cased-file) - This is a wrapper for webpack's [file-loader](https://www.npmjs.com/package/file-loader) that can be used to modify the casing of the resulting filename. This is useful e.g. when using a content delivery network (CDN) that only allows lowercase filenames.

* [@microsoft/loader-load-themed-styles](https://www.npmjs.com/package/@microsoft/loader-load-themed-styles) - This simple loader wraps the loading of CSS in script equivalent to <code>require('load-themed-styles').loadStyles( /* css text */ )</code>. It is designed to be a replacement for style-loader.

* [@microsoft/loader-raw-script](https://www.npmjs.com/package/@microsoft/loader-raw-script) - This simple loader loads a script file's contents directly in a webpack bundle using an `eval(…)`.

* [@microsoft/loader-set-webpack-public-path](https://www.npmjs.com/package/@microsoft/loader-set-webpack-public-path) - This simple loader sets the __webpack_public_path__ variable to a value specified in the arguments, optionally appended to the SystemJs baseURL property.

## Scaffolding a new client-side project
The SharePoint generator helps developers to scaffold a client-side solution project with a web part. Along with scaffolding the project, the generator also brings down and configures the required toolchain components for that specific client-side solution project. 

### Packages installation
The generator basically installs a bunch of npm packages locally in the project folder. npm allows you to install a package either locally to your project or globally. There are benefits to both, but the [general guidance](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/) is to install the npm packages locally if your code depends on that package module. In the case of a web part project, your web part code depends on the various SharePoint and common build packages, and thus requires these packages be installed locally for that specific web part project. 

As these packages gets installed locally, npm also installs the dependencies associated with each of the packages. You can find the packages installed under the `node_modules` folder in your project folder. This folder contains the packages along with all of its dependencies. It is ideal that this folder contains dozens to hundreds of folders as npm packages are always broken down to smaller modules and thus resulting in dozens to hundreds of packages being installed. The key framework packages are located under the `node_modules\@microsoft` folder. The `@microsoft` represents the npm scope that collectively represents [packages published by Microsoft](https://www.npmjs.com/~microsoft). In this instance, the packages within the `@microsoft` folder include only the framework packages. 

For every client-side project, in other words, when you create a new project using the generator, the generator installs the framework packages along with its dependencies for that specific project locally. This way, npm makes it easier to manage your web part projects without affecting other projects that you are working in the local dev environment. 

### package.json
The `package.json` file in the client-side solution project specifies the list of dependencies the project depends on. It is this list that defines what dependencies to install. As described earlier, each dependency could contain several more. npm allows to define both runtime and build dependencies for your package using the `dependencies` and `devDependencies` properties. The latter is used when you want to use that module in your code as in the case of building web parts. 

Below is the `package.json` of the [helloworld-webpart](./HelloWorld-WebPart):

```json 
{
  "name": "helloword-webpart",
  "version": "0.0.1",
  "private": true,
  "engines": {
    "node": ">=0.10.0"
  },
  "dependencies": {
    "@microsoft/sp-client-base": "~0.1.12",
    "@microsoft/sp-client-preview": "~0.1.12"
  },
  "devDependencies": {
    "@microsoft/sp-build-web": "~0.4.32",
    "@microsoft/sp-module-interfaces": "~0.1.8",
    "@microsoft/sp-webpart-workbench": "~0.1.12",
    "gulp": "~3.9.1"
  },
  "scripts": {
    "build": "gulp bundle",
    "clean": "gulp nuke",
    "test": "gulp test"
  }
}
```

While there are lot of packages installed for the project, these are required only for building the web part in the dev environment. It is with the help of these packages, you are able to depend on the modules, and build, compile, bundle & package your web part for deployment. The final minified bundled version of the web part that you deploy to a CDN server or SharePoint does not include any of these packages. That said, you can also configure to include certain modules depending on your requirements. This is explained in detail [here](./Add-an-external-library-to-a-web-part). 

### Working with source control systems
As project dependencies increase, the number of packages to install also increase. Hence, it is not ideal to check-in the `node_modules` folder, which contains all of the dependencies, into your source control system. You should exclude the `node_modules` from the list of files to ignore during check-ins. 

If you are using `git` as your source control system, the yeoman scaffolded web part project includes a `.gitignore` file with the set of things to ignore. 

When you check-out the web part project from your source control the first time, you simply run the command to initialize and install all the project dependencies locally:

```
npm i
```

This will scan the `package.json` file and install the required dependencies. 

## Build tasks
SharePoint Framework uses [gulp](http://gulpjs.com/) as its task runner which handles build processes such as:
- Bundle and minify JavaScript and CSS files.
- Run tools to call the bundling and minification tasks before each build.
- Compile LESS or SASS files to CSS.
- Compile TypeScript files to JavaScript.

The toolchain comprises of the following gulp tasks defined in the [@microsoft/sp-build-core-tasks](https://www.npmjs.com/package/@microsoft/sp-build-core-tasks):
- build
- bundle
- serve
- nuke
- test
- package-solution
- deploy-azure-storage

To initiate different tasks, you simply append the task name with the `gulp` command. For example, the command to compile and preview your web part in the SharePoint Workbench, you execute the following command:

>However, note that you cannot execute multiple tasks at the same time.

```
gulp serve
```

The command starts executing the different tasks and finally launches SharePoint Workbench.

![gulp serve task](./images/gulp-serve-task.png)

### Build targets
As you can see the task also indicates your build target:

```
Build target: DEBUG
```

The commands also accept the following parameter that help target BUILD and SHIP modes: 
- No parameter, the default, targets BUILD, and, 
- ship, targets SHIP

Usually, when your web part project is ready to ship or deploy in a production server, you will target SHIP and the default otherwise. SHIP target also ensures it builds the minified version of the web part bundle. 

To target SHIP mode, you just append the task with `--ship`:

```
gulp --ship
```

In DEBUG mode, the build tasks copy all of the web part assets, including the web part bundle into the `dist` folder.

In SHIP mode, the build tasks copy all of the web part assets, including the web part bundle into the `temp\deploy` folder.


