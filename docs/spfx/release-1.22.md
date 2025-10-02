---
title: SharePoint Framework v1.22 preview release notes
description: Release notes for the SharePoint Framework v1.22 preview release.
ms.date: 10/02/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.21 preview release notes

This release has updates on the Nodejs version and on other technical dependencies. It also contains updates for web parts in the context of flexible layouts in SharePoint and personalization option for cards.

> [!NOTE]
> [SharePoint Framework API Reference](https://learn.microsoft.com/en-us/javascript/api/overview/sharepoint?view=sp-typescript-latest) has been also updated to match the latest 1.21 version.

[!INCLUDE spfx-release-beta]

beta.2 **Released:** October 01, 2025

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest preview version

Install the latest preview release of the SharePoint Framework (SPFx) by using the **@next** tag

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from the SPFx v1.21 to v1.22 version

In the project's **package.json** file, identify all SPFx v1.20 packages. For each SPFx package:

1. Uninstall the existing v1.20 package:

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

## Deprecations

No new updates.

## Fixed Issues

No new updates.

## Feedback and issues

We're interested in your feedback about the release. Do let us know any findings or other feedback using the [SPFx issue list](https://github.com/SharePoint/sp-dev-docs/issues).

We will be doing some cleaning in the issue list after the 1.21 release to better focus on the latest issues and are more focused on helping you with any of your findings.

Happy coding! Sharing is caring! 🧡
