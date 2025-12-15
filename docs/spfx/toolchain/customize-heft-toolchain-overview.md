---
title: Understanding the Heft-based toolchain (how it works)
description: Understand how the SharePoint Framework uses Heft as a pluggable build system, learn about key Heft architectural concepts like actions, phases, tasks, and rig packages, and explore common customization scenarios for the SPFx toolchain.
ms.date: 12/10/2025
ms.localizationpriority: high
---
# Understanding the Heft-based toolchain (how it works)

> *"Heft is a config-driven toolchain that invokes other popular tools such as TypeScript, ESLint, Jest, Webpack, and API Extractor. You can use it to build web applications, Node.js services, command-line tools, libraries, and more."*
>
> - [heft.rushstack.io](https://heft.rushstack.io/)

Microsoft has chosen to use Heft as the pluggable build system for developing for the SharePoint Framework (SPFx). This article explains some high-level Heft concepts as well as different customization scenarios that SPFx developers commonly do with projects.

> [!TIP]
> For an in-depth explanation on Heft and different customization options, refer to the Heft official documentation at [heft.rushstack.io](https://heft.rushstack.io/).

## Heft architectural concepts

When you run Heft, you run an *action*, which is a command-line verb similar to the Gulp task orchestrator where you ran *tasks*. Usually, these actions map to a Heft *phase* which contains *tasks* and the configuration of these tasks. All of the phases and tasks are defined in a **./config/heft.json** file in your project.

For example, the SPFx Heft implementation uses tasks related to compiling TypeScript, compiling Sass files, running tests, and packaging solutions (creating the **\*.SPPKG** deployment file).

To see a list of all available actions, or phases, run the following command:

```console
# if installed globally...
heft --help

# ... or run using npx without installing
npx @rushstack/heft --help
```

> [!TIP]
> Similar to Gulp, Heft is installed locally within your project. However, [unlike Gulp that requires installing the Gulp CLI globally](https://www.voitanos.io/blog/mea-culpa-always-install-gulp-cli-globally-not-gulp/), you can install the same Heft npm package globally to simplify running Heft commands.
>
> ```console
> npm install @rushstack/heft --global
> ```

> [!TIP]
> Learn more about the Heft CLI from the Heft documentation: [Heft command line](https://heft.rushstack.io/pages/intro/cli/).

The SPFx implementation includes phases such as **build**, **test**, and **package-solution** among others.

Another concept that Heft introduced is a *rig profile* or more commonly referred to as a *rig*. A rig is tailored for specific scenarios and it allows you to define phases and associated tasks, which means you're defining tasks and tasks configuration under a named configuration. These rigs can be packaged up into a *rig package*, which is just a npm package. The rig and rig package allows us to remove a lot of the clutter in a project's **package.json** file and instead reference the standardized configuration for the SPFx build toolchain.

For example, the SPFx rig package, **@microsoft/spfx-web-build-rig**, includes a single default profile that we reference from our projects in the **./config/rig.json** file. This means a new SPFx project won't have a **./config/heft.json** to define all the phases, tasks, and their configuration because it's defined in the SPFx rig.

Heft is very configurable and has many reusable components through its plugin implementation. A Heft plugin is where a task is defined. The task plugin contains the task logic and the configuration schema for the task. These are the same tasks referenced in the **heft.json** file explained above.

## Heft and the SharePoint Framework

Let's take a look at how the SharePoint Framework build toolchain works in the context of Heft. In a brand new SPFx v1.22 project, you'll find the file **./config/rig.json** that contains a single property `rigPackageName`. This property references an npm package, **@microsoft/spfx-web-build-rig**, that contains the SPFx build toolchain definition... the *SPFx rig*.

This package only contains a single default rig profile, we don't have to specify the profile name, although we could using the `rigProfile` property. That default rig profile contains the **heft.json** file that contains a list of all the phases like **build**, **test**, and **package-solution**. Each of the phases contain one or more tasks with the task's configuration.

The configuration of the task can exist either within the **heft.json** file, or in its own JSON configuration file in the profile. When configurations are defined in separate files, you can create your own configuration of the task in your project that inherits from the default configuration but can be extended to make additional changes.

When you run the **heft** CLI, it first looks for the **heft.json** file in your project. If not found, it then looks for a **rig** which will contain the **heft.json** file.

Most SPFx projects work perfectly with the default build toolchain without requiring any customizations. Unlike legacy gulp-based toolchains that required manual configuration, the new Heft-based toolchain comes pre-configured in your SPFx project. You can start building immediately without needing to understand how Heft works internally.

However, Heft is customizable as covered below in this article.

## Heft actions and legacy Gulp tasks

As stated above, Heft actions, or phases, are similar to Gulp tasks in the legacy [gulp-based toolchain](sharepoint-framework-toolchain.md) that the Heft-based toolchain replaces.

The following table shows the equivalent Gulp tasks and Heft commands:

|      Gulp task       |         Heft command         |
| -------------------- | ---------------------------- |
| build                | build                        |
| bundle<sup>1</sup>   |                              |
| clean                | clean                        |
| test                 | test                         |
| serve                | start                        |
|                      | dev-deploy<sup>2</sup>       |
| package-solution     | package-solution<sup>3</sup> |
| deploy-azure-storage | deploy-azure-storage         |
| trust-dev-cert       | trust-dev-cert               |
| untrust-dev-cert     | untrust-dev-cert             |

- <sup>1</sup> Heft doesn't include a separate command for **build** and **bundle** like the Gulp toolchain did. These two processes are included in the single **build** Heft command.
- <sup>2</sup> The **dev-deploy** command is new to the Heft toolchain. It helps you test your SPFx component in a real SPFx site during development without a full production deployment. This action will deploy your built assets to a testing CDN to validate how they work when loaded from an external source rather than locally.
- <sup>3</sup> The argument `--ship` used to create a production deployment in the Gulp toolchain has been replaced with `--production` in the Heft toolchain

## Customizing the Heft-based build toolchain

The Heft toolchain is very customizable and configurable through a plugin architecture it leverages. But to understand what we can do, consider some common customization scenarios in the legacy Gulp-based toolchain. These can be grouped into two types of customizations:

1. The first type of customization involved executing code to copy or delete files, version management, or other similar tasks. These were implemented in the toolchain using custom gulp tasks, as outlined in the article [Integrate gulp tasks in SharePoint Framework toolchain](integrate-gulp-tasks-in-build-pipeline.md).
1. The other type of toolchain modification involved customizing the Webpack configuration, such as adding or editing plugins as outlined in the article [Extending Webpack in the Gulp-based toolchain](extending-webpack-in-build-pipeline.md).

Both those scenarios, and others, can be achieved in the Heft-based toolchain through the use of Heft plugins, tasks, and/or task configurations.

### Modifying a task configuration

Let's first look at modifying an existing task's configuration.

The [Heft Sass Plugin](https://heft.rushstack.io/pages/plugins/sass/), used in the **build** phase of the SPFx rig, is configured using a specific file found in the SPFx rig plugin. In a new SPFx project that uses the Heft-based toolchain, you'll find the file **./config/sass.json**. By default, this file simply extends the existing configuration in the SPFx rig:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft-sass-plugin.schema.json",
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/sass.json",
}
```

The possible configuration options for this plugin are defined in the schema referenced in the `$schema` property.

To view the default configuration, find the file listed in the `extends` property. This maps to the installed npm package in your project.

To modify the plugin's configuration, you can modify the default **./config/sass.json** file in your project that inherits from the default configuration in the SPFx rig and add your own properties.

For example, by default the Sass plugin processes files with the **\*.sass**, **\*.scss**, and **\*.css** extension. If you wanted to force the use of **\*.sass** and not support **\*.scss** in your project, you could override the `fileExtensions` property in your own project's **./config/sass.json** file and remove that file extension:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft-sass-plugin.schema.json",
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/sass.json",
  "fileExtensions": [".sass", ".css"],
}
```

### Modify an existing phase with Heft plugins

Another option is to modify an existing phase defined in the rig. In this scenario you can add tasks to the phase through task plugins as explained above.

You can use any of the included Heft plugins which are listed in the Heft documentation: [Heft Plugin Package Index](https://heft.rushstack.io/pages/plugins/package_index/). These include the following plugins used by the SPFx rig:

- Jest Plugin
- Lint Plugin
- Development Certificate Plugins
- Sass Plugin
- TypeScript Plugin
- Webpack Plugins

In addition, you can find other Heft plugins by searching the [npm registry](https://www.npmjs.com/search?q=heft-) for packages that have the naming convention `heft-{name}-plugin[s]`.

Learn more about customizing Heft through some of the out-of-the-box plugins: **[Customize the build toolchain with Heft plugins](customize-heft-toolchain-heft-included-plugins.md)**.

**What if a plugin doesn't exist for your scenario?**

For example, a common customization SPFx developers implemented in the Gulp toolchain was to add the [gulp-stylelint](https://www.npmjs.com/package/gulp-stylelint) Gulp plugin to run the popular [stylelint](https://stylelint.io/) utility on their SPFx project.

One way you can do this in the Heft-toolchain is to use the [Heft Run Script Plugin](https://heft.rushstack.io/pages/plugins/run-script/). This plugin allows you to execute an arbitrary JavaScript file which can perform similar actions as a Heft plugin.

Learn more how to add stylelint during the **build** phase of your SPFx project: **[Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md)**.

### Customize the Webpack configuration

One of the most common customizations SPFx developers implemented in their Gulp-based toolchains was to modify the webpack configuration. This was done by mutating the webpack configuration object after the toolchain created it but before webpack was executed using the configuration.

This is also possible in the Heft-based toolchain. The SPFx team created the Heft Webpack Patch Plugin and added it to the **build** phase. The process is almost identical as the legacy toolchain in that you will take the generated configuration, mutate it, and return it back to the toolchain for use when webpack is executed.

Learn more how to customize the webpack configuration: **[Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md)**.

### Eject the webpack configuration

When none of the other options will work for your requirements, you can elect to fully eject the webpack configuration from the toolchain. This is an extreme scenario that should be considered the last resort as there are significant downsides to this option. The most important of which is that ejecting is a one-way operation and once it's done, your build toolchain is no longer supported by Microsoft.

Learn more about ejecting: **[Ejecting the webpack configuration](customize-heft-toolchain-eject-webpack.md)**.

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md)
- [Customize the build toolchain with Heft plugins](customize-heft-toolchain-heft-included-plugins.md)
- [Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md)
- [Ejecting the webpack configuration](customize-heft-toolchain-eject-webpack.md)
- [Migrate from the Gulp Toolchain to Heft Toolchain](migrate-gulptoolchain-hefttoolchain.md)
- [Heft documentation](https://heft.rushstack.io/)
