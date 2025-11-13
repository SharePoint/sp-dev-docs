---
title: SharePoint Framework v1.22 preview release notes
description: Release notes for the SharePoint Framework v1.22 preview release.
ms.date: 11/13/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.22 preview release notes

This release focuses updating and modernizing the build toolchain and to address all known 'npm audit' reported vulnerabilities in the Yeoman package and in the scaffolded projects.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

* beta.5 **Released:** November 13, 2025
* beta.4 **Released:** October 23, 2025
* beta.3 **Released:** October 15, 2025
* beta.2 **Released:** October 01, 2025

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest preview version

Install the latest preview release of the SharePoint Framework (SPFx) by using the **@next** tag

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from the SPFx v1.21 to v1.22 version

In the project's **package.json** file, identify all SPFx v1.21 packages. For each SPFx package:

1. Uninstall the existing v1.21 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.21
    ```

1. Install the new v1.22 package:

    ```console
    npm install @microsoft/{spfx-package-name}@next --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Transitioning from Gulp to an open webpack based toolchain orchestrated by Heft

Starting with SPFx v1.22, new projects use Heft as the build task orchestrator instead of the custom [gulp-core-build](./toolchain/sharepoint-framework-toolchain.md) toolchain that used in SPFx v1.21.1 & prior SPFx versions. This change represents a fundamental shift in how SPFx projects are built, configured, and customized, though the underlying bundling technology (webpack) remains the same.

See more details on this upcoming change from the following documentation:

* [SPFx Toolchain: Rush Stack, Heft, & Webpack](./toolchain/sharepoint-framework-toolchain-rushstack-heft.md)

We are working on updated documentation which is planned to get published together with the upcoming Release Candidate (RC).

### Addressing npm audit issues

When you are installing SharePoint Framework Yeoman generator, there are no more any `npm audit` issues.

All scaffolded projects from the SharePoint Framework Yeomand generator have been now also cleaned and there are not reported vulnarabilities in them when you run `npm audit` after the scaffolding.

This is a challenging topic to keep up to date, but we are committed to keep the known issues addressed and will be releasing potentially new minor versions as needed to address these.

### Default TypeScript version updated

Scaffolded projects are now using TypeScript v5.8 by default. Previously, for example SPFx 1.21 was by default using TypeScript v5.3.3.

## Deprecations

No new updates.

## Updates on the heft toolchain transition since previous beta

Beta 5 has quite significant updates on the toolchain to finetune the experience since previous beta version. We are not looking to make any other significant changes there before upcoming Release Candidate (RC) release, unless there are new findings or feedback which should be addressed.

## Feedback and issues

We're interested in your feedback about the release. Do let us know any findings or other feedback using the [SPFx issue list](https://github.com/SharePoint/sp-dev-docs/issues).

Happy coding! Sharing is caring! 🧡