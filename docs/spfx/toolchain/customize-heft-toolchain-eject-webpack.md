---
title: Ejecting the webpack configuration
description: Learn how to eject the webpack configuration from the SharePoint Framework build toolchain for complete control over webpack settings, understand the implications of this irreversible process, and explore a practical example of customizing the ejected configuration.
ms.date: 11/18/2025
ms.localizationpriority: high
---
# Ejecting the webpack configuration

[!INCLUDE [spfx-prerelease-related](../../../includes/snippets/spfx-prerelease-related.md)]

The SharePoint Framework (SPFx) uses Heft as the task orchestrator to implement the build toolchain. These tasks, their configurations, and their dependencies, are managed by Microsoft to simplify the various Heft commands and actions developers need to perform.

Some tasks involved in the toolchain, such as the process of creating the configuration for webpack prior to creating the component bundles and manifest files, have customization points enabling developers to control parts of the build toolchain. For example, the SPFx Heft Webpack Patch Plugin enables developers to provide a script file that can mutate the configuration before it's executed by webpack.

In specific scenarios, you may wish to eject the webpack configuration from the build toolchain for more granular control. Developers can eject the webpack configuration from the toolchain for more control. This process copies all the hidden configuration files and dependencies into your project giving you full control over this part of the build toolchain.

This article will explain how to eject the webpack configuration from the toolchain, what is added and updated to a project, the implications of ejecting, and cover a simple scenario.

> [!IMPORTANT]
> This article assumes you understand how Heft and the build toolchain work, basic architectural concepts, and a high-level understanding of the toolchain customization options.
>
> Learn more in this overview: [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md).

> [!CAUTION]
> **Ejecting the webpack configuration from the toolchain is not recommended by Microsoft.** Ensure you are familiar with the implications of ejecting the webpack configuration, covered in this article, before doing so. Many modern tools, including Heft, support a plugin model and configuration files or other override mechanisms that let you customize the toolchain without taking full responsibility of the toolchain. Most toolchain customizations can be achieved using existing or custom Heft plugins such as the **Webpack Patch Plugin** or the **Run Script Plugin**.
>
> Due to the implications of ejecting, we **strongly recommend** to consider all other options before ejecting. Refer to these articles for some of your other options:
>
> - [Customize the build toolchain with Heft plugins](customize-heft-toolchain-heft-ootb-plugins.md)
> - [Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md)
> - [Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md)

## Implications of Ejecting the Webpack configuration

When you eject the webpack configuration from the toolchain, you are moving all tasks and their configurations, as well as their dependencies from the toolchain into your project. **This is a one-way operation that is not reversible** without restoring a previous version of your project, either manually or through source control.

It's called *"ejecting"* because you're essentially ejecting yourself from the pre-configured and Microsoft-managed abstracted environment into full control and thus full responsibility. You'd typically only eject when the abstraction is too limiting for your needs and you need to implement specific customizations that aren't supported through the other extensibility options.

After ejecting, you have complete control over the webpack configuration, but you are now responsible for maintaining that configuration yourself.

> [!WARNING]
> Microsoft does not support the build toolchain on projects that have ejected the webpack configuration.

## Eject the build toolchain from a centralized configuration to your project

To eject the SPFx build toolchain from the referenced configuration to your project, execute the following in the console from the root directory of your project:

```console
heft eject-webpack
```

The ejection process will

1. Move dependencies to your project
1. Delete Heft plugin configurations from your project
1. Add the Heft task configuration (and all task options) into your project
1. Create webpack configuration files for production and development

Let's look at the changes applied to a default SPFx v1.22 React web part project after ejecting the webpack configuration.

### Project dev dependencies

The ejection process involves moving all the dependencies from the toolchain into your project. The following packages are added to your **package.json** file's `devDependencies` object as part of the eject process:

|                Package                |                Purpose                 |
| ------------------------------------- | -------------------------------------- |
| **@rushstack/heft-jest-plugin**       | Jest testing integration               |
| **@rushstack/heft-lint-plugin**       | ESLint integration                     |
| **@rushstack/heft-sass-plugin**       | SASS compilation                       |
| **@rushstack/heft-typescript-plugin** | TypeScript compilation                 |
| **@rushstack/heft-dev-cert-plugin**   | HTTPS dev certificates                 |
| **@rushstack/heft-webpack5-plugin**   | Webpack 5 integration                  |
| **cors**                              | CORS middleware for dev server         |
| **express**                           | Node.js web server used in development |
| **glob**                              | File pattern matching                  |
| **sass**                              | SASS compiler                          |
| **sass-loader**                       | Webpack SASS loader                    |
| **style-loader**                      | CSS injection for dev                  |
| **ts-loader**                         | TypeScript webpack loader              |

### Configuration files

The pre-ejected project referenced the default profile in the **@microsoft/spfx-web-build-rig** rig package. This provided a centralized configuration with shared configuration files. As explained above, the eject process moves the toolchain into your project instead of a centralized configuration. In other words, the default SPFx build toolchain configuration, defined in the default SPFx rig package, is moved into your project for you to manage.

This is done by replacing multiple configuration files with a single file:

The eject process removes the following files...

|               File                |             Purpose              |
| --------------------------------- | -------------------------------- |
| **./config/rig.json**             | Rig package reference            |
| **./config/config.json**          | SPFx bundling configuration      |
| **./config/sass.json**            | SASS compilation settings        |
| **./config/serve.json**           | Development server configuration |
| **./config/typescript.json**      | TypeScript compiler settings     |
| **./config/write-manifests.json** | Manifest generation settings     |

... and replaces them with a new file: **./config/heft.json**. This file includes the complete Heft task runner configuration that defines the build, test, packaging, and other phases. This file also includes Heft plugin configuration for:

- TypeScript compilation
- SASS processing
- Jest testing
- Webpack bundling
- ESLint linting
- Dev certificate management
- Localization handling

### Webpack configurations

The build toolchain creates the webpack configuration object dynamically using SPFx-specific plugins, including the Heft webpack Patch Plugin that's covered in the article [Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md).

The eject process creates two webpack configuration files, added to the root of your project, that are used by webpack to create the bundles, component manifest files, and more:

- **./webpack.config.js**: Production webpack configuration with comprehensive SPFx-specific features including:
  - AMD module support (*required by SharePoint's module loader*)
  - localization support
  - SPFx component manifest generation
  - TypeScript, SCSS, and CSS processing
  - Asset handling
  - External dependency handling
  - Content hashing
- **./webpack.dev.config.js**: Development-specific webpack configuration that includes:
  - Development web server using the popular Node.js Express configured for CORS
  - Hot module replacement support
  - Source map configuration
  - Optimized build speed over minimizing the generated bundle sizes

## Customizing the ejected build toolchain

Once you've ejected the build toolchain configuration into your project, you can then make changes to it according to your requirements. For example, let's take the same scenario covered in [Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md) that added the popular [Webpack Bundle Analyzer Plugin](https://www.npmjs.com/package/webpack-bundle-analyzer) to an SPFx project.

Start by installing the Webpack Bundle Analyzer into your project:

```console
npm install webpack-bundle-analyzer --save-dev
```

Next, make the same changes to the new **./webpack.config.js** configuration file created during the ejection process.

> [!NOTE]
> In this scenario, we don't need to edit the development configuration file, **webpack.dev.config.js**, because you only care about the size of the bundle in production builds, not development builds. However, the process is similar if you do want to edit the webpack development configuration.

### Add the Webpack Bundle Analyzer

Within the webpack configuration file, locate where it imports other NPM packages. The easiest way to find this is to find the string `require('@microsoft/spfx-heft-plugins')` as that will import SPFx-specific Heft plugins used in both production and development.

Add the following line after the existing `require()` statements that import NPM packages to import the Webpack Bundle Analyzer:

```javascript
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
```

Next, add the Webpack Bundle Analyzer Plugin to the list of existing plugins. Start by locating where the webpack plugin array is created by searching for the string `const plugins = [`. This is in the `getSPFxWebpackConfig()` function.

Add the following plugin to the end of the `plugin` array, either by adding it when the `plugin` constant is created, or by pushing it onto the array after it's created:

```javascript
new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
  generateStatsFile: true,
  reportFilename: `${__dirname}/temp/webpack/build.stats.html`,
  statsFilename: `${__dirname}/temp/webpack/build.stats.json`,
  logLevel: 'error'
})
```

## Test your customizations

Once you've made all changes, the next time you run a production build, you should see the generated report and stats files in the **./temp/webpack** folder.

```console
heft build --production
```

![Webpack Bundle Analyzer report and stats files](../../images/spfx-webpack-bundle-analyzer.png)

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md)
- [Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md)
- [Customize the build toolchain with Heft plugins](customize-heft-toolchain-heft-ootb-plugins.md)
- [Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md)
