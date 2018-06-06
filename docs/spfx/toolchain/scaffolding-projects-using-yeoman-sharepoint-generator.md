---
title: Scaffold projects by using Yeoman SharePoint generator
description: Use the Yeoman SharePoint generator to scaffold new client-side solution projects to build, package, and deploy SharePoint solutions.
ms.date: 06/05/2018
ms.prod: sharepoint
---

# Scaffold projects by using Yeoman SharePoint generator

[Yeoman](http://yeoman.io/) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive. Using the Yeoman SharePoint generator, developers are able to scaffold new client-side solution projects to build, package, and deploy SharePoint solutions. The generator provides common build tools, boilerplate code, and a common playground website to host web parts for testing.

## Install the Yeoman SharePoint generator

Yeoman SharePoint generator is available as part of the framework as an [npm package](https://www.npmjs.com/package/@microsoft/generator-sharepoint). You can install the generator by executing the following command in a console:

```
npm install @microsoft/generator-sharepoint -g
```

> [!NOTE] 
> The Yeoman SharePoint generator is targeted to get deployed globally with the initial General Availability (GA) version. There are some known issues if it's installed locally to the project, which are planned to be addressed post-GA.

We recommend that you follow the [set up your development environment](../set-up-your-development-environment.md) instructions to configure your machine with the complete set of developer tools, including Yeoman SharePoint generator. 

## Use the Yeoman SharePoint generator

After the generator is installed, you can invoke the generator by just typing the following command in a console:

```
yo
```

The command lists all the generators available on your machine. Select `@microsoft/sharepoint` to invoke the SharePoint generator and continue with the prompts to successfully create your client-side solution:

![Yeoman SharePoint generator](../../images/yeoman-sp-generator.png)


## Use available command-line options for the generator

You can use the command-line options available with the Yeoman SharePoint generator to scaffold projects in one command instead of going through the prompts. Execute the following command to see the list of command-line options available for the SharePoint generator:

```
yo @microsoft/generator-sharepoint --help
```

<br/>

![Yeoman SharePoint generator command line options](../../images/yeoman-sp-cmdline-options.png)

<br/>

**Command-line options**

Option | Description 
-----|------
--help|Print the generator's options and usage.
--skip-cache|Do not remember prompt answers. Default: *false*.
--skip-install|Do not automatically install dependencies. Default: *false*.
--component-type|The type of component. Currently "webpart" or "extension" is supported.
--component-description|Description of the component.
--component-name|Name of the component.
--framework|Framework to use for the solution. Choose one from "none", "react", "knockout".
--plusbeta| Use the beta packages. Scaffolding should be done with @plusbeta
--extension-type|The type of extension: Currently ApplicationCustomizer, FieldCustomizer, ListViewCommandSet.
--solution-name|Client-side solution name, as well as folder name.
--environment|The target environment for the solution. Either "onprem" or "spo".
--package-manager|The package manager for the solution. Options are: "npm", "pnpm", or "yarn". Default: *npm*
--skip-feature-deployment|If specified, allow the tenant admin the choice of being able to deploy the components to all sites immediately without running any feature deployment or adding apps in sites. Default: *false*.

<br/>


> [!WARNING]
> *skip-feature-deployment* command line support was introduced with the SharePoint Framework v1.5. This option was previously a command line argument called *skipFeatureDeployment*. Also *solution-name*, *extension-type*, *component-type*, *component-description* and *component-name* have been renamed.

Following is an example of a command that creates a solution called "hello-world" with:
- A web part "HelloWorld" 
- The "react" framework targeted only to SharePoint Online 
- Tenant-scoped deployment optional enabled

Notice that some of the options have dependencies between each other. You cannot, for example, create an extension with an on-premises option.

```
yo @microsoft/sharepoint 
--solution-name "hello-world" 
--framework "react" 
--component-type "webpart" 
--component-name "HelloWorld" 
--component-description "HelloWorld web part" 
--skip-install 
--environment "spo" 
--skip-feature-deployment true
```

<br/>

> [!NOTE]
> Using the `--skip-install` command scaffolds the project and skips installing dependencies. This means that to successfully build the project, you need to install the dependencies later after the project is scaffolded. 

> If you try to build your project without installing the dependencies, you get the following error. This indicates that you need to install the dependencies before building the project:

> ```
> Local gulp not found in ~/<project-name>
> Try running: npm install gulp
> ```

> You can execute the following command to install the dependencies:

> ```
> npm install
> ```


## See also

- [SharePoint Framework toolchain](sharepoint-framework-toolchain.md)
- [SharePoint Framework development tools and libraries](../tools-and-libraries.md)
- [Set up your SharePoint Framework development environment](../set-up-your-development-environment.md)
- [SharePoint Framework Overview](../sharepoint-framework-overview.md)
