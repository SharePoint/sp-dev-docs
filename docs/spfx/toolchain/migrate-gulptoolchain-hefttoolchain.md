---
title: Migrate from the Gulp-based to the Heft-based Toolchain
description: In this article, you'll learn how to migrate an existing SharePoint Framework v1.21.1 project based on the legacy Gulp-based build toolchain to the Heft-based build toolchain introduced in SPFx v1.22.\*.
ms.date: 12/30/2025
ms.localizationpriority: high
---
# Migrate from the Gulp-based to the Heft-based Toolchain

The migration steps in moving from a Gulp-based toolchain SharePoint Framework (SPFx) project to a Heft-based toolchain are more involved than a typical SPFx project upgrade from one version to another version.

In this article, you'll walk through in detail all of the steps required for removing the Gulp toolchain from a SPFx version v1.21.1 project and adding the Heft-based toolchain as part of the upgrade to an SPFx v1.22.\* project.

> [!IMPORTANT]
> **This article assumes that you are upgrading an existing SPFx v1.21.1 React web part project.**
>
> The steps for upgrading other types of projects, such as those not using React, using SPFx extensions, or SPFx Adaptive Card Extensions instead of web parts are similar to the steps in this article.

> [!TIP]
> The steps in this page involve making numerous and significant changes to to your project. Before proceeding, strongly consider making a copy of your project or, if it's in source control, to start with a clean state (ie: no unstaged files).

## Uninstall Gulp toolchain dependencies

Start by first uninstalling the gulp-based toolchain packages from your project.

```console
npm uninstall @microsoft/sp-build-web ajv gulp
```

Next, uninstall the **@microsoft/rush-stack-compiler-\*** which maps to the current version of TypeScript that your project currently uses.

For instance, the default SPFx v1.21.1 project uses TypeScript v5.3, so you would uninstall the **@microsoft/rush-stack-compiler-5.3** package:

```console
npm uninstall @microsoft/rush-stack-compiler-5.3
```

If you're using a different version of TypeScript, make sure that you uninstall the **@microsoft/rush-stack-compiler-\*** package with the TypeScript version in the name of the **@microsoft/rush-stack-compiler-\*** package.

## Install Heft toolchain dependencies

The next step is to install all of the dependencies the Heft-based toolchain requires:

```console
npm install @microsoft/spfx-web-build-rig@1.22.1 \
            @microsoft/spfx-heft-plugins@1.22.1 \
            @microsoft/eslint-config-spfx@1.22.1 \
            @microsoft/eslint-plugin-spfx@1.22.1 \
            @microsoft/sp-module-interfaces@1.22.1 \
            @rushstack/eslint-config@4.5.2 \
            @rushstack/heft@1.1.2 \
            @types/heft-jest@1.0.2 \
            @typescript-eslint/parser@8.46.2 \
            --save-dev --save-exact --force
```

## Optionally upgrade TypeScript

The Heft-based SPFx toolchain supports any version of TypeScript supported by the [Heft TypeScript Plugin](https://heft.rushstack.io/pages/plugins/typescript/) that toolchain is using.

> [!TIP]
> The **[loadTypeScriptTool.ts](https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-typescript-plugin/src/loadTypeScriptTool.ts)** file defines the TypeScript supported versions by the plugin. Ensure you are looking at the correct version of the plugin when considering the version of TypeScript to install.

```console
npm install typescript@~5.8.0 --save-dev
```

## Update the ESLint configuration

Next, modify the default ESLint configuration for your project.

Open the **./eslintrc.js** file and locate the following line:

```javascript
'@rushstack/hoist-jest-mock': 1,
```

Add the following immediately after that line:

```javascript
// Require chunk names for dynamic imports in SPFx projects. https://www.npmjs.com/package/@rushstack/eslint-plugin
'@rushstack/import-requires-chunk-name': 1,
// Ensure that React components rendered with ReactDOM.render() are unmounted with ReactDOM.unmountComponentAtNode(). https://www.npmjs.com/package/@rushstack/eslint-plugin
'@rushstack/pair-react-dom-render-unmount': 1,
```

Then locate the following two rules and delete them:

```javascript
'@microsoft/spfx/import-requires-chunk-name': 1,

'@microsoft/spfx/pair-react-dom-render-unmount': 1
```

## Update npm scripts in package.json

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

> [!TIP]
> While not required, consider installing the Heft CLI globally:
>
> ```console
> npm install @rushstack/heft --global
> ```
>
> Once the Heft CLI is installed globally, you can run Heft commands without using the npm scripts.

## Add the SPFx Heft rig to the project

With the Heft toolchain now installed after removing the Gulp toolchain, the next step is to add a reference to the SPFx build rig. This is done by adding a new file to your project's configuration folder. That will reference the rig that the project will use.

Add a new file, **./config/rig.json**, to your project with the following contents:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",
  "rigPackageName": "@microsoft/spfx-web-build-rig"
}
```

## Replace the Sass configuration file

Replace the entire contents of the existing **./config/sass.json** file with the following to use the Heft Sass configuration in the SPFx Heft rig. This is where you can modify the default settings on the [Heft Sass Plugin](https://heft.rushstack.io/pages/plugins/sass/):

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
> If you've made changes to your **gulpfile.js**, you may want to keep it until you've migrated those changes to the equivalent Heft extensibility options. Learn more about customizing the Heft-based toolchain: [Customizing the Heft-based build toolchain](customize-heft-toolchain-overview.md#customizing-the-heft-based-build-toolchain).

## Upgrade production dependencies

Finally, upgrade the production dependencies in the project to SPFx v1.22:

```console
npm install @microsoft/sp-component-base@1.22.1 \
            @microsoft/sp-core-library@1.22.1 \
            @microsoft/sp-lodash-subset@1.22.1 \
            @microsoft/sp-office-ui-fabric-core@1.22.1 \
            @microsoft/sp-property-pane@1.22.1 \
            @microsoft/sp-webpart-base@1.22.1 \
            --save-exact
```

> [!TIP]
> After making so many changes to the packages, consider deleting the **node_modules** and **./package-lock.json** (*or the equivalent lock file for the package manager you use*) and then re-running `npm install`. This ensures you will have a clean dependency tree.

## Test the project migration to the Heft-based toolchain

Test your changes by running the **build** command in the console from the root of your project.

```console
# if you have heft installed globally...
heft build --production

# ... or you can run the npm helper script
npm run build
```

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, and Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Customize the Heft-based SPFx Toolchain](./customize-heft-toolchain-overview.md)
