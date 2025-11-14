---
title: TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
description: In this article, you'll learn TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
ms.date: 11/18/2025
ms.localizationpriority: high
---
# TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO

<!-- TODO: overview -->

## TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO

<!-- TODO: implications -->

> [!WARNING]
> TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
> Dangerous certain consequences of an action

## Eject the Webpack configuration:

```console
heft eject-webpack
```

## Add the Webpack Bundle Analyzer to the ejected configuration

<!-- TODO: locate existing `require()`'s ... search for `LocalizationPlugin` -->

```javascript
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
```

<!-- TODO: locate `getSPFxWebPackConfig() > const plugins=[]... add to end of array -->

```javascript
new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
  generateStatsFile: true,
  reportFilename: `${__dirname}/temp/webpack-stats/.build.stats.html`,
  statsFilename: `${__dirname}/temp/webpack-stats/.build.stats.json`,
  logLevel: 'error'
})
```

## Test

<!--TODO: -->

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Migrate from the Gulp Toolchain to Heft Toolchain](migrate-gulptoolchain-hefttoolchain.md)
<!--TODO: add other customization pages -->
