---
title: Configure Sass processing during builds
description: In this article, you'll learn how to configure the Sass processing during builds of your SharePoint Framework (SPFx) projects.
ms.date: 10/25/2026
ms.localizationpriority: high
---

# Configure Sass processing during builds

In this article, you'll learn how to configure the Sass processing during builds of your SharePoint Framework (SPFx) projects.

## Updating the toolchain to use a modern Sass processor

SPFx v1.15 changed the processor used to compile Sass/SCSS files to CSS from the npm package [node-sass](https://www.npmjs.com/package/node-sass) to [sass](https://www.npmjs.com/package/sass). The **sass** package is the pure JavaScript distribution of [Dart Sass](https://sass-lang.com/dart-sass/), the primary Sass implementation.

Node Sass used LibSass, which was [deprecated in 2020](https://sass-lang.com/blog/libsass-is-deprecated/). Dart Sass is not deprecated.

## Impacts of the change

However, changes in the CSS Language required developers to rethink of some of the Sass language paradigms to make it clearer for developers, what a CSS definition is, and what needs to processed by Sass.

When the SPFx toolchain was changed to use the new Sass processor, it required some changes to the Sass code in default SPFx projects as the new processor flagged some syntax errors to address some outdated Sass syntax. These changes introduced some deprecation warnings from the new Sass processor.

Other developers had already dealt with these same deprecation warnings in their projects by getting the Sass package maintainers to add capability to suppress warnings caused by dependencies.

In other words, they needed a way to silence warnings caused by dependencies you don’t own or code potentially that’s inside your SPFx web part. This also happens even to partial files in the same SPFx package.

However, because the **sass** package is added as part of the toolchain, it wasn't easy to configure the processor to silence these deprecations.

## How to silence deprecation warnings in the Sass processor

To address this, Microsoft introduced a new file, **./config/sass.json**, in SPFx v1.16.1.

In the legacy gulp-based toolchain, add `"quietDeps": true` to suppress deprecation warnings from dependencies. This doesn't suppress every warning in your own stylesheets; fix deprecated syntax in code you maintain.

```json
{
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

For SPFx 1.24, the Heft Sass configuration uses `ignoreDeprecationsInDependencies` to suppress dependency deprecation warnings and `silenceDeprecations` for specific deprecation IDs. These are Heft plugin settings, not the legacy top-level `quietDeps` setting. Check the inherited rig configuration before overriding it, and fix warnings in code you maintain rather than suppressing them indiscriminately.

Refer to the Heft Sass plugin documentation for more information about configuring the plugin:

- [Heft Sass plugin](https://heft.rushstack.io/pages/plugins/sass/)
- [Heft Sass plugin configuration options](https://heft.rushstack.io/pages/configs/sass_json/)

## See also

- [SharePoint Framework v1.16.1 release notes](../release-1.16.1.md)
- [Heft-based toolchain (SPFx v1.22.0+)](sharepoint-framework-toolchain-rushstack-heft.md)
- [Gulp-based toolchain (legacy)](sharepoint-framework-toolchain.md)
- [Stefan Bauer: What’s new with SASS in SPFx v1.16.0](https://n8d.at/whats-new-with-sass-in-spfx-1-16-0)
- [Andrew Connell: Unboxing the SharePoint Framework (SPFx) v1.16.1 release](https://www.andrewconnell.com/articles/sharepoint-framework-v1-16-1-whats-in-latest-update-of-spfx/)
