---
title: Migrate from the Gulp Toolchain to Heft Toolchain
description: In this article, you'll learn how to migrate an existing SharePoint Framework v1.21.1 project based on the legacy Gulp-based build toolchain to the Heft-based build toolchain introduced in SPFx v1.22.
ms.date: 11/18/2025
ms.localizationpriority: high
---
# Migrate from the Gulp Toolchain to Heft Toolchain

<!--TODO: assumes spfx v1.21.1 web part react project -->

## Overview

<!--TODO: -->

> [!TIP]
> The steps in this page involve making numerous and significant changes to to your project. Before proceeding, strongly consider making a copy of your project or, if it's in source control, to start with a clean state (ie: no unstaged files).

## Uninstall Gulp toolchain dependencies

```console
npm uninstall @microsoft/sp-build-web ajv gulp
```

<!--TODO: unintall whatever version you have installed, in SPFx v1.21.1, it's `5.3` -->

```console
npm uninstall @microsoft/rush-stack-compiler-5.3
```

## Install Heft toolchain dependencies

```console
npm install @microsoft/spfx-web-build-rig@1.22.0-beta.5
            @microsoft/spfx-heft-plugins@1.22.0-beta.5
            @microsoft/eslint-config-spfx@1.22.0-beta.5
            @microsoft/eslint-plugin-spfx@1.22.0-beta.5
            @microsoft/sp-module-interfaces@1.22.0-beta.5
            @rushstack/eslint-config@4.5.2
            @rushstack/heft@1.1.2
            @types/heft-jest@1.0.2
            @types/heft-jest@1.0.2
            @typescript-eslint/parser
            css-loader@~7.1.2
            --force
```

### Override version of Heft in all dependencies

https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides

In **package.json**, add the following top-level `overrides` property to force all dependencies and peer dependencies to use a specific version of Heft:

```json
{
  ..
  "dependencies": {},
  "devDependencies": {},
  ..
  "overrides": { "@rushstack/heft": "1.1.2"}
}
```

## Optionally upgrade TypeScript

The Heft-based SPFx toolchain supports any version of TypeScript supported by the [Heft TypeScript Plugin](https://heft.rushstack.io/pages/plugins/typescript/) that toolchain is using.

> [!TIP]
> The **[loadTypeScriptTool.ts](https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-typescript-plugin/src/loadTypeScriptTool.ts)** file defines the TypeScript supported versions by the plugin. Ensure you are looking at the correct version of the plugin when considering the version of TypeScript to install.

```console
npm install typescript@~5.8.0 -DE
```

> [!WARNING]
> Prior to the SPFx v1.22.0 GA release, some have experienced issues installing TypeScript v5.8 when migrating existing projects to SPFx v1.22.

## Update NPM scripts in package.json

Replace the existing `build`, `test`, and `clean` scripts in the **package.json** file with the following to use Heft instead of Gulp.

```json
{
  ..
  "scripts": {
    "build": "heft build --clean",
    "clean": "heft clean",
    "test": "heft test"
  }
  ..
}
```

### Optionally add additional scripts to package.json

The project templates created for SPFx v1.22 include additional scripts to the **package.json** file. While these are optional, you can add them to your project's **package.json** to match the default projects:

```json
{
  ..
  "scripts": {
    ..
    "test-only": "heft run --only test --",
    "deploy": "heft dev-deploy",
    "start": "heft start --clean",
    "build-watch": "heft build --lite",
    "package-solution": "heft package-solution",
    "deploy-azure-storage": "heft deploy-azure-storage",
    "eject-webpack": "heft eject-webpack",
    "trust-dev-cert": "heft trust-dev-cert",
    "untrust-dev-cert": "heft untrust-dev-cert"
  }
  ..
}
```

## Add the SPFx Heft rig to the project

<!--TODO explain + add link to where this is explained -->

Add a new file, **./config/rig.json**, to your project with the following contents:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",
  "rigPackageName": "@microsoft/spfx-web-build-rig"
}
```

## Replace the Sass configuration file

Replace the entire contents of the existing **./config/sass.json** file with the following to use the Heft Sass configuration in the SPFx Heft rig. This is where you can can modify the default settings on the [Heft Sass Plugin](https://heft.rushstack.io/pages/plugins/sass/):

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft-sass-plugin.schema.json",
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/sass.json"
}
```

## Add the Heft TypeScript Plugin configuration

Add a new file, **./config/typescript.json**, to your project with the following code. This configures the [Heft TypeScript Plugin](https://heft.rushstack.io/pages/plugins/typescript/) used in the SPFx Heft rig:

```json
{
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/typescript.json",
  "staticAssetsToCopy": {
    "fileExtensions": [".resx", ".jpg", ".png", ".woff", ".eot", ".ttf", ".svg", ".gif"],
    "includeGlobs": ["webparts/*/loc/*.js"]
  }
}
```

## Replace the TypeScript compiler configuration

Replace the contents of the existing **./tsconfig.json** file with the following code. This assumes the same TypeScript configuration as the SPFx Heft rig's TypeScript configuration.

```json
{
  "extends": "./node_modules/@microsoft/spfx-web-build-rig/profiles/default/tsconfig-base.json"
}
```

## Delete gulpfile.js

Delete the **./gulpfile.js** file from your project as it is no longer used.

> [!TIP]
> If you've made changes to your **gulpfile.js**, you may want to keep it until you've migrated those changes to the equivalent Heft extensibility options. Learn more [TODO](todo.md)

## Upgrade production dependencies

Finally, upgrade the production dependencies in the project to SPFx v1.22 beta 5:

```console
npm install @microsoft/sp-component-base@1.22.0-beta.5 \
            @microsoft/sp-core-library@1.22.0-beta.5 \
            @microsoft/sp-lodash-subset@1.22.0-beta.5 \
            @microsoft/sp-office-ui-fabric-core@1.22.0-beta.5 \
            @microsoft/sp-property-pane@1.22.0-beta.5 \
            @microsoft/sp-webpart-base@1.22.0-beta.5 \
            -SE
```

> [!TIP]
> After making so many changes to the packages, consider deleting the **node_modules** and **./package-lock.json** (*or the equivalent lock file for the package manager you use*) and then re-running `npm install`. This ensures you will have a clean dependency tree.

## Test

<!--TODO: -->

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, and Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Customize the Heft-based SPFx Toolchain](./customize-heft-toolchain-overview.md)
