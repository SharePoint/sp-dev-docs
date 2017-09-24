---
title: Scaffold projects using yeoman SharePoint generator
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Scaffold projects using yeoman SharePoint generator

[Yeoman](http://yeoman.io/) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive. Using the yeoman SharePoint generator, developers are able to scaffold new client-side solution projects to build, package and deploy SharePoint solutions. The generator provides common build tools, boilerplate code, and a common playground web site to host web parts for testing.

## Installing the yeoman SharePoint generator

Yeoman SharePoint generator is available as part of the framework as a [npm package](https://www.npmjs.com/package/@microsoft/generator-sharepoint). You can install the generator by executing the following command in a console:

```
npm install @microsoft/generator-sharepoint -g
```

>**Note:** Yeoman generator for SharePoint is targeted to get deployed globally with the initial General Availability (GA) version. There are some known issues if it's installed locally to the project, which are planned to be addressed post GA.

It is recommended you follow the [set up your development environment](../set-up-your-development-environment.md) to configure your machine with the complete set of developer tools, including yeoman SharePoint generator. 

## Using the yeoman SharePoint generator

Once the generator is installed, you can invoke the generator by just typing the following command in a console:

```
yo
```

The command will list all of the generators available in your machine. Select the `@microsoft/sharepoint` to invoke the SharePoint generator and continue with the prompts to successfully create your client-side solution:

![yeoman SharePoint generator](../../images/yeoman-sp-generator.png)

## Available command line options for the generator

You can use the command line options available with the yeoman SharePoint generator to scaffold projects in one command instead of going through the prompts. Execute the following command to see the list of  command line options available for the SharePoint generator:

```
yo @microsoft/generator-sharepoint --help
```

![yeoman SharePoint generator command line options](../../images/yeoman-sp-cmdline-options.png)

Option | Description 
-----|------
--skip-install|Do no automatically install dependencies.
--solutionName|Client-side solution name, as well as folder name.
--framework|Framework to use for the solution. Choose one from "none", "react", "knockout".
--componentType|Component type. Currently only "webpart" is supported.
--componentName|Name of the component.
--componentDescription|Description of the component.

Below is an example of a command that creates a solution called "hello-world" with a web part "HelloWorld" with "react" framework:

```
yo @microsoft/sharepoint --solutionName "hello-world" --framework "react" --componentType "webpart" --componentName "HelloWorld" --componentDescription "HelloWorld web part"
```

### Notes on --skip-install 

Using the `--skip-install` command will scaffold the project and skip installing dependencies. This means, to successfully build the project, you will need to install the dependencies later once the project is scaffolded. 

If you try to build your project without installing the dependencies, then you will get the following error. This indicates you need to install the dependencies before building the project:

```
Local gulp not found in ~/<project-name>
Try running: npm install gulp
```

You can execute the following command to install the dependencies:

```
npm install
```
