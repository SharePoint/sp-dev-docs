---
title: SharePoint Framework v1.22 preview release notes
description: Release notes for the SharePoint Framework v1.22 preview release.
ms.date: 11/19/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.22 preview release notes

This release focuses updating and modernizing the SharePoint Framework (SPFx) build toolchain and to address all known 'npm audit' reported vulnerabilities in the Yeoman package and in the scaffolded projects.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

* rc.0 **Released:** November 19, 2025
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

## Upgrading projects from the SPFx v1.21.1 to v1.22 version

The upgrade steps required to convert a [gulp-based toolchain](toolchain/sharepoint-framework-toolchain.md) SPFx project to the [Heft-based toolchain](toolchain/sharepoint-framework-toolchain-rushstack-heft.md) are detailed in the following article: [Migrate from the Gulp Toolchain to Heft Toolchain](toolchain/migrate-gulptoolchain-hefttoolchain.md).

## New features and capabilities

### Transitioning from Gulp-based toolchain to the Heft-based toolchain

Starting with SPFx v1.22, new projects use Heft as the build task orchestrator instead of a [gulp-based toolchain](./toolchain/sharepoint-framework-toolchain.md) used in SPFx v1.0 - v1.21.1 releases. This change represents a fundamental shift in how SPFx projects are built, configured, and customized, though the underlying bundling technology (webpack) remains the same.

See more details on this upcoming change from the following documentation:

- [Heft-based toolchain (SPFx v1.22.0+)](./toolchain/sharepoint-framework-toolchain-rushstack-heft.md)

### Addressing npm audit issues

When you are installing SharePoint Framework Yeoman generator, there are no more any `npm audit` issues.

All scaffolded projects from the SharePoint Framework Yeoman generator have been cleaned and there are not reported vulnerabilities in them when you run `npm audit` after the scaffolding.

We are also looking into addressing deprecated packages in the following releases of SharePoint Framework.

### Default TypeScript version updated

Scaffolded projects are now using TypeScript v5.8 by default.

## Deprecations

No new updates.

## Updates on the heft toolchain transition since previous beta

Release Candidate release has relatively small updates compared to the beta 5 release. We are not planning to introduce any further changes before General Availability (GA), unless there are new findings or feedback which should be addressed.

## Feedback and issues

We're interested in your feedback about the release. Do let us know any findings or other feedback using the [SPFx 1.22.0-rc.0 - Community Feedback discussion](https://github.com/SharePoint/sp-dev-docs/discussions/10490). Thank you for your input advance.

Happy coding! Sharing is caring! 🧡
