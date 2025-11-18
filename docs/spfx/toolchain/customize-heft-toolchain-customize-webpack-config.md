---
title: Customize webpack with the Heft Webpack Patch plugin
description: Learn how to customize the webpack configuration in SharePoint Framework projects using the Heft Webpack Patch Plugin, and explore a practical example of adding the Webpack Bundle Analyzer plugin to your SPFx project.
ms.date: 11/18/2025
ms.localizationpriority: high
---
# Customize webpack with the Heft Webpack Patch plugin

[!INCLUDE [spfx-prerelease-related](../../../includes/snippets/spfx-prerelease-related.md)]

Developers commonly need to customize the build toolchain by modifying the webpack configuration in SharePoint Framework (SPFx) projects. This typically involves adjusting existing webpack plugins used in the configuration, such as the [Define Plugin](https://webpack.js.org/plugins/define-plugin/), or adding new plugins for various purposes.

The SPFx team has simplified this process in the Heft-based toolchain by including the Webpack Patch Plugin in the build phase.

In this article, you'll learn how to use the Webpack Patch Plugin to add a popular webpack plugin to your SPFx project: the Webpack Bundle Analyzer.

> [!IMPORTANT]
> This article assumes you understand how Heft and the build toolchain work, basic architectural concepts, and a high-level understanding of the toolchain customization options.
>
> Learn more in this overview: [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md).

## Install Webpack Bundle Analyzer

Start by installing the [Webpack Bundle Analyzer Plugin](https://www.npmjs.com/package/webpack-bundle-analyzer) as a dev dependency in your project:

```console
npm install webpack-bundle-analyzer --save-dev
```

## Customize the SPFx Heft rig

To customize the webpack configuration, you'll use the Webpack Patch Plugin that the SPFx team created for this common scenario. This plugin takes the webpack configuration created by the toolchain, passes it to your custom script where you can modify it, and then returns the updated configuration back to the toolchain.

> [!NOTE]
> This process works nearly identically to the webpack configuration modification approach used in the legacy Gulp-based toolchain: [Extending Webpack in the Gulp-based toolchain](extending-webpack-in-build-pipeline.md).

This process involves creating two files:

1. The script to modify the webpack configuration
1. A file to register the webpack patch scripts that the Webpack Patch Plugin will look for

### Add Webpack patch file

Create a new JavaScript file in your project, **./config/webpack-patch/webpack-bundle-analyzer.js** for the webpack patch script and add the following code:

This code does the following:

1. Exports a function that accepts the webpack configuration object
1. Locates the `plugins` collection within the configuration
1. Adds the Webpack Bundle Analyzer plugin with the desired settings
1. Returns the modified webpack configuration

```javascript
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function(webpackConfig) {
  const lastDirName = path.basename(__dirname);
  const projectPath = path.join(__dirname, './../..');
  const webpackStats = path.join(projectPath, 'temp', 'webpack');

  if (!webpackConfig.plugins) { webpackConfig.plugins = []; }

  // add plugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    generateStatsFile: true,
    reportFilename: path.join(webpackStats, 'build.stats.html'),
    statsFilename: path.join(webpackStats, 'build.stats.json'),
    logLevel: 'error'
    }));

  return webpackConfig;
};
```

### Add Webpack Patch Plugin configuration

To enable the Webpack Patch Plugin to execute your script, register it in a configuration file that the plugin recognizes.

Create a new file **./config/webpack-patch.json** and add the path to your webpack patch script created above to the `patchFiles` array. The Webpack Patch Plugin will execute each file listed in this array sequentially, calling the exported function from each to modify the webpack configuration.

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/spfx-build/webpack-patch.schema.json",
  "patchFiles": [
    "./config/webpack-patch/webpack-bundle-analyzer.js"
  ]
}
```

## Test your customizations

Once you've made all changes, the next time you run a production build, you should see the generated report and stats files in the **./temp/webpack** folder.

```console
heft build --production
```

![Webpack Bundle Analyzer report and stats files](../../images/spfx-webpack-bundle-analyzer.png)

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Migrate from the Gulp Toolchain to Heft Toolchain](migrate-gulptoolchain-hefttoolchain.md)
- [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md)
- [Customize the build toolchain with Heft plugins](customize-heft-toolchain-heft-ootb-plugins.md)
- [Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md)
- [Ejecting the webpack configuration](customize-heft-toolchain-eject-webpack.md)
