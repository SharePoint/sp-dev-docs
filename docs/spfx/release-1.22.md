---
title: SharePoint Framework v1.22 release notes
description: Release notes for the SharePoint Framework v1.22 release.
ms.date: 12/10/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.22 release notes

This release focused on updating and modernizing the SharePoint Framework (SPFx) build toolchain and to address all known 'npm audit' reported vulnerabilities in the Yeoman package and in the scaffolded projects.

> [!NOTE]
> [SharePoint Framework API Reference](https://learn.microsoft.com/en-us/javascript/api/overview/sharepoint?view=sp-typescript-latest) has been also updated to match the latest 1.21 version.

**Released:** December 10, 2025

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by using the **@latest** tag

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from the SPFx v1.21.1 to v1.22 version

The upgrade steps required to convert a [gulp-based toolchain](toolchain/sharepoint-framework-toolchain.md) SPFx project to the [Heft-based toolchain](toolchain/sharepoint-framework-toolchain-rushstack-heft.md) are detailed in the following article: [Migrate from the Gulp Toolchain to Heft Toolchain](toolchain/migrate-gulptoolchain-hefttoolchain.md).

## New features and capabilities

### Transitioning from Gulp-based toolchain to the Heft-based toolchain

Starting with SPFx v1.22, new projects use Heft as the build task orchestrator instead of a [gulp-based toolchain](./toolchain/sharepoint-framework-toolchain.md) used in SPFx v1.0 - v1.21.1 releases. This change represents a fundamental shift in how SPFx projects are built, configured, and customized, though the underlying bundling technology (webpack) remains the same.

See more details on this upcoming change from the following documentation:

- [Heft-based toolchain (SPFx v1.22.0+)](./toolchain/sharepoint-framework-toolchain-rushstack-heft.md)

### Addressing npm audit issues

When installing the SharePoint Framework Yeoman generator, there are no longer any `npm audit` issues.

All scaffolded projects from the SharePoint Framework Yeoman generator have been cleaned and there are no reported vulnerabilities in them when you run `npm audit` after the scaffolding.

We are also looking into addressing deprecated packages in the following releases of SharePoint Framework.

### Default TypeScript version updated

Scaffolded projects are now using TypeScript v5.8 by default.

## Deprecations

No new updates.

## Feedback and issues

We're interested in your feedback about the release and if you find any issues, please share them using the [sp-dev-docs repository issue list](https://aka.ms/spfx/issues). We are also tracking any other [discussions](https://github.com/SharePoint/sp-dev-docs/discussions) if you simply want to have a discussion with the engineering team on this release. Thank you for your input advance.

Happy coding! Sharing is caring! 🧡
