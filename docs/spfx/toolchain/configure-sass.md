---
title: Configure Sass processing during builds
description: In this article, you'll learn how to configure the Sass processing during builds of your SharePoint Framework (SPFx) projects.
ms.date: 01/27/2023
ms.localizationpriority: high
---

# Configure Sass processing during builds

In this article, you'll learn how to configure the Sass processing during builds of your SharePoint Framework (SPFx) projects.

## Updating the toolchain to use a modern Sass processor

The SPFx v1.15 changed the Sass processor the build toolchain used to transpile CSS files from the NPM package [node-sass](https://www.npmjs.com/package/node-sass) to [sass](https://www.npmjs.com/package/sass). The **sass** package is a pure JavaScript implementation of the now-deprecated **dart-sass** package.

This change was primarily made because the [**node-sass** package was deprecated back in 2018](https://sass-lang.com/blog/libsass-is-deprecated), but the **sass** package is also much faster than the **node-sass** package it replaced.

## Impacts of the change

However, changes in the CSS Language required developers to rethink of some of the Sass language paradigms to make it clearer for developers, what a CSS definition is, and what needs to processed by Sass.

When the SPFx toolchain was changed to use the new Sass processor, it required some changes to the Sass code in default SPFx projects as the new processor flagged some syntax errors to address some outdated Sass syntax. These changes introduced some deprecation warnings from the new Sass processor.

Other developers had already dealt with these same deprecation warnings in their projects by getting the Sass package maintainers to add capability to suppress warnings caused by dependencies.

In other words, they needed a way to silence warnings caused by dependencies you don’t own or code potentially that’s inside your SPFx web part. This also happens even to partial files in the same SPFx package.

However, because the **sass** package is added as part of the toolchain, it wasn't easy to configure the processor to silence these deprecations.

## How to silence deprecation warnings in the Sass processor

To address this, all SPFx projects starting with v1.16.1 now include a new file: **./config/sass.json**.

If you have deprecation warnings coming from Sass files you don't maintain in your project, and thus, you have no control over, you can add `"quietDeps": true` to this file to configure the **sass** processor to suppress all deprecation warnings.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/sass.schema.json",
  "quietDeps": true
}
```

## See also

- [SharePoint Framework v1.16.1 release notes](../release-1.16.1.md)
- [Stefan Bauer: What’s new with SASS in SPFx 1.16.0](https://n8d.at/whats-new-with-sass-in-spfx-1-16-0)\
- [Andrew Connell: Unboxing the SharePoint Framework (SPFx) v1.16.1 release](https://www.voitanos.io/blog/sharepoint-framework-v1-16-1-whats-in-latest-update-of-spfx/)
