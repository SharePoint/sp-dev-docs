---
title: TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
description: In this article, you'll learn TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
ms.date: 11/18/2025
ms.localizationpriority: high
---
# TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO

<!-- TODO: overview -->

## Install Webpack Bundle Analyzer

```console
npm install webpack-bundle-analyzer -DE
```

## Customize the SPFx Heft rig

<!--TODO: brief summary how heft.json = build config containing phases, tasks, & task config -->
<!--TODO: ... refer to overview how it works -->
<!--TODO: ... look at existing spfx rig -->
<!--TODO: ... reference OOTB plugins -->

### Add Webpack patch file

<!--TODO: ./.build/webpack-patch/webpack-bundle-analyzer.js -->

```javascript
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/**
 * Add WebPack Bundle Analyzer
 *
 * @param {import('webpack').Configuration} webpackConfig
 * @returns {import('webpack').Configuration}
 */
module.exports = function(webpackConfig) {
  // location of plugin output
  const lastDirName = path.basename(__dirname);
  const dropPath = path.join(__dirname, './temp', 'stats');

  // ensure plugins collection present
  if (!webpackConfig.plugins) { webpackConfig.plugins = []; }

  // add plugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    generateStatsFile: true,
    logLevel: 'error',
    openAnalyzer: false,
    reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
    statsFilename: path.join(dropPath, `${lastDirName}.stats.json`)
  }));

  // return mutated webpack config to build toolchain
  return webpackConfig;
};
```

### Add Webpack Patch Plugin configuration

<!--TODO: ./config/webpack-patch.json -->

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/spfx-build/webpack-patch.schema.json",
  "patchFiles": [
    "./.build/webpack-patch/webpack-bundle-analyzer.js"
  ]
}
```

## Test

<!--TODO: -->

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Migrate from the Gulp Toolchain to Heft Toolchain](migrate-gulptoolchain-hefttoolchain.md)
<!--TODO: add other customization pages -->
