---
title: "SharePoint Framework Toolchain: Heft-based"
description: The toolchain is the set of build tools, framework packages, and other items that manage building and deploying your SharePoint Framework client-side projects. This article covers the Heft-based toolchain introduced in SPFx v1.22.
ms.date: 10/25/2026
ms.localizationpriority: high
---
# SharePoint Framework Toolchain: Heft & Webpack

The SharePoint Framework (SPFx) v1.22 introduced a significant change to the build toolchain used to develop and package SPFx solutions. This article explains the changes, the reasons behind them, and how they affect both new and existing projects.

For new SPFx 1.24 projects, follow the [development environment setup](../set-up-your-development-environment.md) using Node.js 24 LTS. Heft is the supported toolchain for SPFx 1.24.

> [!NOTE]
> Prior to SPFx v1.22, Microsoft used a gulp and webpack based toolchain. Learn more: [SPFx Toolchain: Gulp & Webpack](sharepoint-framework-toolchain.md).

## Overview

Starting with SPFx v1.22, new projects use **Heft** as the build task orchestrator instead of the [gulp-based toolchain](sharepoint-framework-toolchain.md) that was used in SPFx v1.0 - v1.21.1 releases. This change represents a fundamental shift in how SPFx projects are built, configured, and customized, though the underlying bundling technology (webpack) remains the same.

## Why the toolchain is changing

The decision to transition from gulp-based toolchain to the Heft-based toolchain addresses several long-standing challenges in the SPFx development experience:

### Technical debt and maintenance

The legacy gulp-based toolchain is a custom solution built specifically for SPFx. Over time, this created several issues.

The legacy toolchain accumulated technical debt and outdated dependencies, contributing to npm audit warnings. Assess individual advisories as described in [Understanding npm audit vulnerabilities](../npm-vulnerabilities.md); the choice of toolchain alone doesn't establish that a project is safe.

### Community feedback

Since 2020, the SPFx community has consistently requested more access and flexibility for customizations. The current toolchain suffers from several limitations that hinder developer productivity. Many steps in the build process are obfuscated, creating a "black box" that developers struggle to understand and extend. Furthermore, the system lacks a true plugin architecture that would support future changes and extensions in a clean, maintainable way. As a result, developers who want to customize their builds must resort to complex workarounds, implementing modifications through gulp tasks and making changes to the generated webpack configuration—approaches that are neither elegant nor sustainable for long-term project maintenance.

### Alignment and support

Moving to Heft provides several significant benefits to the SPFx ecosystem. By adopting this toolchain, Microsoft re-aligns its internal development practices with those of external developers. This means that both Microsoft's first-party teams and third-party developers (including ISVs, independent developers, and customers) will now use the same build system, creating a more unified development experience. This alignment enables faster feature delivery, as improvements and updates will simultaneously benefit Microsoft and the broader SPFx community without requiring separate implementation paths. Additionally, the Heft toolchain represents a more sustainable long-term investment, as it is actively maintained by Microsoft and kept up to date with current development standards and security practices.

## What is changing

### Core toolchain replacement

The build process undergoes several fundamental changes in SPFx v1.22. First, the gulp-based toolchain (aka: **gulp-core-build**) has been replaced with **[Heft](https://heft.rushstack.io/)** as the primary task orchestrator for building SPFx projects. Despite this significant change, **webpack** continues to serve as the underlying bundling technology, though it's now orchestrated through Heft rather than gulp. Additionally, the **npm scripts** in your **package.json** file have been updated to call Heft commands instead of gulp tasks, reflecting the new toolchain architecture.

> [!NOTE]
> **What is Heft?**
>
> Heft is a config-driven toolchain that invokes other popular tools like TypeScript, ESLint, Jest, Webpack, and API Extractor to build web applications, Node.js services, command-line tools, and libraries. It's designed for use in monorepos with potentially hundreds of projects, where it's typically launched by package.json commands like **npm run build** or **npm run test**. If you're familiar with build tools like **Vite**, **esbuild**, or task runners like **Gulp** or **Grunt**, Heft plays a similar role but with a focus on large-scale consistency.
>
> The key philosophy is replacing special-purpose scripts with a reusable, config-driven engine that minimizes duplication across projects. Heft encourages defining a small set of stereotypical project types called *rigs* that projects can inherit from, ensuring consistency so any developer can easily contribute to any project. Think of it like having standardized build configurations that all your projects share, rather than each project maintaining its own custom build setup.
>
> What makes Heft unique is its focus on optimization and completeness—it tracks fine-grained performance metrics, implements sophisticated optimizations like incremental compilation and filesystem caching, and provides a unified compiler pass for Jest, Webpack, and ESLint. Rather than being unopinionated like gulp or Grunt, Heft takes an opinionated approach to establish a fully worked-out solution for building TypeScript projects, investing heavily in making that specific approach as polished as possible.

Learn more how Heft works and is used to implement the SPFx build toolchain in the following articles:

- [Understanding the Heft-based SPFx toolchain (how it works)](customize-heft-toolchain-overview.md)
- Heft documentation from the [Heft site](https://heft.rushstack.io/).

### New configuration files

Projects built with the new toolchain incorporate several configuration files from the Rush Stack ecosystem. The primary file, **heft.json**, specifies the build tasks and their configurations. To minimize configuration duplication across projects, a **rig.json** file references a shared configuration package. TypeScript compilation settings are managed through **typescript.json**, while various task-specific configuration files handle additional functionality like linting, testing, and other build steps.

> [!NOTE]
> Documentation for these configuration files is available on the Heft website, which provides comprehensive guidance on customization options.

### Project generation changes

When creating new SPFx projects with the SharePoint Framework Yeoman Generator v1.22, several key changes are evident. By default, all new projects utilize the Heft-based toolchain instead of the previous gulp-based system. For developers who need to continue using the legacy toolchain during the transition period, the generator provides a `--use-gulp` command-line option. Additionally, you'll notice that new projects include the previously mentioned configuration files that support the Heft architecture.

### Developer workflow changes

The transition to Heft changes how developers customize their build process. Existing **gulpfile.js** customizations must be migrated to Heft configuration or plugins. For webpack modifications, use the [Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md) where possible.

Standard SPFx 1.24 projects still contain **config/config.json**, with `bundles`, `externals`, and `localizedResources` configuration. The SPFx rig and plugins use this configuration to generate the webpack configuration and manifests. It is not removed by adopting Heft. [Ejecting webpack](customize-heft-toolchain-eject-webpack.md) is a separate, unsupported customization path that transfers configuration ownership to your project.

## When - support timeline and migration path

Microsoft has established a phased transition timeline to minimize disruption:

### SPFx version v1.22 (Initial Release)

SPFx v1.22 introduced Heft as the default for new projects. That release also provided a transitional `--use-gulp` generator option for developers maintaining the previous toolchain. This historical option isn't the supported setup for SPFx 1.24.

### SPFx version v1.23

SPFx v1.23 continued the transition to Heft, with transitional support for existing gulp-based projects. Use the [SPFx 1.23 release notes](../release-1.23.0.md) when maintaining that version rather than applying the SPFx 1.24 setup to it.

### SPFx version v1.24 (and Beyond)

Starting with SPFx v1.24, the gulp-based toolchain is unsupported. Migrate projects to Heft when upgrading to SPFx 1.24, including their build customizations and CI commands.

> [!IMPORTANT]
> The transitional gulp option described for SPFx 1.22 and 1.23 does not establish support for gulp in SPFx 1.24. Updating package versions alone does not migrate a project's toolchain.

## How the new toolchain works

### Heft as task orchestrator

Heft serves as the build task orchestrator, similar to how gulp functions in the current toolchain. Unlike gulp's JavaScript-based approach, Heft employs a configuration-driven model where tasks are defined through JSON configuration files. This creates a more structured and declarative way to manage the build process. The system implements a robust plugin architecture, allowing developers to create custom build logic through Heft plugins rather than directly modifying a **gulpfile.js**. One of Heft's core strengths is its structured extensibility, providing well-defined extension points that make customizations more maintainable and less prone to breaking with future updates.

### Webpack integration

Webpack continues to handle the bundling process in the new toolchain, though its integration has been restructured. Instead of being orchestrated through gulp tasks, webpack bundling now occurs through Heft plugins. This architectural change maintains consistency in the underlying technology while aligning with the new task orchestration system. Importantly, all core SPFx functionality—including manifest generation, localization support, and other essential features—remains implemented as webpack plugins, ensuring compatibility with existing projects. For developers who need to customize the bundling process, Heft provides a comprehensive set of hooks and APIs that enable programmatic modification of the webpack configuration, offering flexibility similar to what was available in the previous toolchain.

### Default configuration with the SPFx rig

The new toolchain implements a *[rig](https://heft.rushstack.io/pages/intro/rig_packages/)* concept to provide default configurations. The SPFx rig package contains shared configuration for all SPFx projects, allowing individual projects to reference this common rig to significantly reduce configuration duplication across projects. This approach provides a consistent baseline while maintaining flexibility, as projects can still override or extend the rig configuration as needed to accommodate unique requirements.

## Customization options

The new toolchain provides three levels of customization:

### Standard customization

For most scenarios, developers can make standard customizations by modifying Heft configuration files to adjust build behavior, creating custom Heft plugins for project-specific build tasks, and extending or overriding the default SPFx rig configuration as needed. These options provide flexibility while maintaining the structured approach of the new toolchain.

### Advanced customization

For scenarios requiring webpack modifications, developers can use Heft's plugin API to programmatically access and modify webpack configurations. This approach allows for creating custom plugins that hook directly into the webpack build process while maintaining compatibility with the broader webpack plugin ecosystem that SPFx developers are already familiar with. This flexibility ensures that advanced customization scenarios remain possible within the new toolchain architecture.

Learn more about the different customization options with the Heft-based toolchain, [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md).

### Full control through ejection

For developers requiring complete control, the new toolchain offers an "eject" option that provides a standalone **webpack.config.js** file. This allows direct modification of the webpack configuration using standard webpack patterns while still leveraging Heft for task orchestration. Developers gain full webpack control while maintaining compatibility with the SPFx ecosystem.

Learn more about ejecting webpack from the Heft-based toolchain in [Ejecting the webpack configuration](customize-heft-toolchain-eject-webpack.md).

## Who will this impact & impact on existing customizations

### Common customization scenarios

Many developers have customized their SPFx builds using **gulpfile.js**. The new toolchain provides equivalent functionality:

### Webpack configuration modifications

The most common customization involves modifying the webpack configuration to add plugins or adjust settings. In the new toolchain, developers can achieve this in two ways. First, they can use Heft plugins that programmatically modify the webpack configuration, allowing for controlled adjustments while maintaining compatibility with the rest of the toolchain. Alternatively, for those requiring complete control, ejecting provides direct access to the webpack configuration file, enabling more extensive customizations though with less future compatibility guarantees.

Learn more how to extend the webpack configuration in the Heft-based toolchain in [Customize webpack with the Heft Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md).

### External library configuration

In a standard SPFx 1.24 project, **config/config.json** continues to define SPFx bundles, external libraries, and localized resources. The Heft rig invokes SPFx plugins that generate the webpack configuration and runtime manifests. Use the [Webpack Patch plugin](customize-heft-toolchain-customize-webpack-config.md) for additional webpack customization rather than removing the generated SPFx configuration files.

### Custom build tasks

Custom gulp tasks can be migrated to Heft plugins. Heft offers a structured plugin system with clearly defined lifecycle hooks that developers can leverage when creating custom build logic. This architecture provides access to the same build information that was previously available in gulp, ensuring that existing functionality can be maintained while transitioning to the new toolchain.

Learn more how to run arbitrary script in your build toolchain in [Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md).

### Migration principles

Microsoft has committed to ensuring a smooth migration process with specific principles in place. The company emphasizes that existing customizations should only require configuration changes and code relocation between files, rather than comprehensive rewrites. Microsoft has explicitly stated that requiring complete rewrites of functionality is unacceptable within their migration framework. Furthermore, they encourage developers to report any scenarios that might necessitate complete rewrites as issues so that Microsoft can address them appropriately.

## Getting started with the new toolchain

### For new projects

Create new SPFx 1.24 projects with the [Yeoman generator](../yeoman-generator-for-spfx-intro.md). The generated **package.json** scripts use the project-local Heft installation:

```console
npm run start
npm run build
```

The SPFx 1.24 `start` script runs `heft start --clean`. The `build` script runs `heft test --clean --production && heft package-solution --production`, producing the production solution package. Verify the scripts in your own project rather than assuming earlier releases use the same commands.

### For existing projects

The following transitional steps apply to upgrading to SPFx 1.22, not SPFx 1.24:

1. Update your **package.json** dependencies to SPFx v1.22
1. Continue using your existing gulp-based build process
1. Evaluate the need to migrate to Heft based on the support timeline
1. Plan migration during a maintenance window to minimize disruption

## Additional resources

- [Migrate from the Gulp-based to the Heft-based toolchain](migrate-gulptoolchain-hefttoolchain.md)
- [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md)
- [Heft documentation](https://heft.rushstack.io/)
