---
title: Configure Sass processing during builds
description: In this article, you'll learn how to configure the Sass processing during builds of your SharePoint Framework (SPFx) projects.
ms.date: 11/18/2025
ms.localizationpriority: high
---

# Configure Sass processing during builds

In this article, you'll learn how to configure the Sass processing during builds of your SharePoint Framework (SPFx) projects.

## Updating the toolchain to use a modern Sass processor

The SPFx v1.15 changed the Sass processor the build toolchain used to transpile CSS files from the NPM package [node-sass](https://www.npmjs.com/package/node-sass) to [sass](https://www.npmjs.com/package/sass). The **sass** package is a pure JavaScript implementation of the now-deprecated **dart-sass** package.

This change was primarily made because the [node-sass package was deprecated in 2018](https://sass-lang.com/blog/libsass-is-deprecated), but the **sass** package is also much faster than the **node-sass** package it replaced.

## Impacts of the change

However, changes in the CSS Language required developers to rethink of some of the Sass language paradigms to make it clearer for developers, what a CSS definition is, and what needs to processed by Sass.

When the SPFx toolchain was changed to use the new Sass processor, it required some changes to the Sass code in default SPFx projects as the new processor flagged some syntax errors to address some outdated Sass syntax. These changes introduced some deprecation warnings from the new Sass processor.

Other developers had already dealt with these same deprecation warnings in their projects by getting the Sass package maintainers to add capability to suppress warnings caused by dependencies.

In other words, they needed a way to silence warnings caused by dependencies you don’t own or code potentially that’s inside your SPFx web part. This also happens even to partial files in the same SPFx package.

However, because the **sass** package is added as part of the toolchain, it wasn't easy to configure the processor to silence these deprecations.

## How to silence deprecation warnings in the Sass processor

To address this, Microsoft introduced a new file, **./config/sass.json**, in SPFx v1.16.1.

If you have deprecation warnings coming from Sass files you don't maintain in your project, and thus, you have no control over, you can add `"quietDeps": true` to this file to configure the **sass** processor to suppress all deprecation warnings.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/sass.schema.json",
  "quietDeps": true
}
```

> [!IMPORTANT]
> The configuration setting `quietDeps` only applies to the legacy SPFx gulp-based toolchain.

## Configure the Sass processor in the Heft-based toolchain

Microsoft transitioned SPFx in v1.22 from the [gulp-based toolchain](sharepoint-framework-toolchain.md) to a [Heft-based toolchain](sharepoint-framework-toolchain-rushstack-heft.md). The Heft-based toolchain uses the [Heft Sass plugin](https://heft.rushstack.io/pages/plugins/sass/). The configuration of this plugin is defined in the **./config/sass.json** file within your project.

By default, the configuration inherits the default Sass configuration defined in the core SPFx Heft rig. Developers can customize the Heft Sass plugin configuration using the **./config/sass.json** file.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft-sass-plugin.schema.json",
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/sass.json"
}
```

Refer to the Heft Sass plugin documentation for more information how to configure the plugin:

- [Heft Sass plugin](https://heft.rushstack.io/pages/plugins/sass/)
- [Heft Sass plugin configuration options](https://heft.rushstack.io/pages/configs/sass_json/)

## See also

- [SharePoint Framework v1.16.1 release notes](../release-1.16.1.md)
- [Heft-based toolchain (SPFx v1.22.0+)](sharepoint-framework-toolchain-rushstack-heft.md)
- [Gulp-based toolchain (legacy)](sharepoint-framework-toolchain.md)
- [Stefan Bauer: What’s new with SASS in SPFx v1.16.0](https://n8d.at/whats-new-with-sass-in-spfx-1-16-0)\
- [Andrew Connell: Unboxing the SharePoint Framework (SPFx) v1.16.1 release](https://www.voitanos.io/blog/sharepoint-framework-v1-16-1-whats-in-latest-update-of-spfx/)
