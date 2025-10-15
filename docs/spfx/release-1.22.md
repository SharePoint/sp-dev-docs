---
title: SharePoint Framework v1.22 preview release notes
description: Release notes for the SharePoint Framework v1.22 preview release.
ms.date: 10/15/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.22 preview release notes

This release focuses on two main updates around the build toolchain changes and to address known 'npm audit' report issues.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

beta.3 **Released:** October 15, 2025
beta.2 **Released:** October 01, 2025

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

### Addressing npm audit issues

This preview version still has some issues when on `npm audit` report, but we are working on addressing all known issues by the time of the General Availability of the 1.22 version.

This is a challenging topic to keep clean, but we are committed on then potential minor updates to address known issues between the major versions.

## Deprecations

No new updates.

## Updates on the heft toolchain transition since previous beta

Beta 3 is addressing mostly reported issues on the new toolchain side, including specifically at least items:

* Updates the eject webpack step from a script to a Heft plugin
* Adds various hardening & error handling measures to eject webpack plugin based on ecosystem feedback
* Streamlines the SPFx heft rig definition - reduces extraneous config files in generated project
* Fixes 2 issues where, when using pnpm, various dependencies would be missing (phantom dependencies) and cause builds to fail.
* Fixes an issue where various SPFx packages have ESM declarations in their package.json, but do not ship ESM files.
* Fixes an issue where npm run test caused builds to be run twice
* Fixes various SPO strings that mention gulp to also mention heft

## Feedback and issues

We're interested in your feedback about the release. Do let us know any findings or other feedback using the [SPFx issue list](https://github.com/SharePoint/sp-dev-docs/issues).

Happy coding! Sharing is caring! 🧡
