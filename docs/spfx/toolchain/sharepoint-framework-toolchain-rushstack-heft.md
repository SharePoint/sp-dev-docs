---
title: "SharePoint Framework Toolchain: Heft-based"
description: The toolchain is the set of build tools, framework packages, and other items that manage building and deploying your SharePoint Framework client-side projects. This article covers the Heft-based toolchain introduced in SPFx v1.22.
ms.date: 12/10/2025
ms.localizationpriority: high
---
# SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack

The SharePoint Framework (SPFx) v1.22 introduced a significant change to the build toolchain used to develop and package SPFx solutions. This article explains the changes, the reasons behind them, and how they affect both new and existing projects.

> [!NOTE]
> Prior to SPFx v1.22, Microsoft used a gulp and webpack based toolchain. Learn more: [SPFx Toolchain: Gulp & Webpack](sharepoint-framework-toolchain.md).

## Overview

Starting with SPFx v1.22, new projects use **Heft** as the build task orchestrator instead of the [gulp-based toolchain](sharepoint-framework-toolchain.md) that was used in SPFx v1.0 - v1.21.1 releases. This change represents a fundamental shift in how SPFx projects are built, configured, and customized, though the underlying bundling technology (webpack) remains the same.

## Why the toolchain is changing

The decision to transition from gulp-based toolchain to the Heft-based toolchain addresses several long-standing challenges in the SPFx development experience:

### Technical debt and maintenance

The current gulp-based toolchain is a custom solution built specifically for SPFx. Over time, this has created several issues.

The current toolchain has received minimal maintenance over the years, resulting in significant technical debt. This has led to numerous npm audit warnings due to outdated dependencies in the unmaintained gulp-core-build stack. Additionally, Microsoft internally moved away from this toolchain several years ago, which created a problematic split between internal and external development ecosystems.

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

The transition to Heft fundamentally changes how developers customize their build process. In the new toolchain, existing **gulpfile.js** customizations are no longer compatible and will need to be migrated. For webpack configuration modifications, developers must now use either Heft plugins or eject to gain direct access to the webpack configuration. Additionally, the **config.json** file has been eliminated, with external library configurations now handled through webpack-native configuration patterns instead.

## When - support timeline and migration path

Microsoft has established a phased transition timeline to minimize disruption:

### SPFx version v1.22 (Initial Release)

Starting with SPFx v1.22, all new projects generated with the SharePoint Framework Yeoman generator will default to using Heft as the build tool. However, for developers who need to continue using the previous system, the generator provides a command-line option to use the legacy gulp toolchain instead. Importantly, existing projects that upgrade to SPFx v1.22 can continue using their current gulp-based builds without modification. During this transitional period, Microsoft will support both toolchains, though it's worth noting that only critical breaking fixes will be applied to the gulp toolchain as development resources shift toward improving the new Heft-based system.

### SPFx version v1.23

Starting with SPFx v1.23, new projects will exclusively support Heft, contingent on the readiness of the SPFx CLI. If the SPFx CLI isn't fully prepared by this release, the generator from v1.22 will continue with its existing support model. Developers with existing projects will still be able to use gulp-based builds in v1.23. During this transition period, both toolchains will continue to receive support, though it's important to note that only critical breaking fixes will be applied to the gulp toolchain as development resources shift toward the Heft-based system.

### SPFx version v1.24 (and Beyond)

Starting with SPFx v1.24, while existing projects may still technically continue using gulp-based builds, the gulp toolchain will become officially unsupported. At this point, all new development efforts and fixes will focus exclusively on the Heft toolchain, as Microsoft fully transitions to the new build system.

> [!IMPORTANT]
> Projects that upgrade their **package.json** to reference SPFx v1.22 or later can continue using gulp and existing customizations without breaking changes. The new toolchain only affects newly generated projects and those that choose to migrate their projects to SPFx v1.22 or later.

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

The **config.json** file previously controlled both webpack externals and the SPFx runtime manifest. In the new toolchain, external libraries are now configured directly in the webpack configuration, providing more native control over external dependencies. Additionally, the manifest generation process has been restructured and is now handled by dedicated SPFx webpack plugins, maintaining compatibility while aligning with the new architecture.

### Custom build tasks

Custom gulp tasks can be migrated to Heft plugins. Heft offers a structured plugin system with clearly defined lifecycle hooks that developers can leverage when creating custom build logic. This architecture provides access to the same build information that was previously available in gulp, ensuring that existing functionality can be maintained while transitioning to the new toolchain.

Learn more how to run arbitrary script in your build toolchain in [Customize the build with the Heft Run script plugin](customize-heft-toolchain-heft-script-plugin.md).

### Migration principles

Microsoft has committed to ensuring a smooth migration process with specific principles in place. The company emphasizes that existing customizations should only require configuration changes and code relocation between files, rather than comprehensive rewrites. Microsoft has explicitly stated that requiring complete rewrites of functionality is unacceptable within their migration framework. Furthermore, they encourage developers to report any scenarios that might necessitate complete rewrites as issues so that Microsoft can address them appropriately.

## Getting started with the new toolchain

### For new projects

When creating a new SPFx v1.22 project, you'll continue using the SharePoint Framework Yeoman generator just as you have with previous SPFx versions. Your newly created project will automatically use Heft as the default build toolchain. After project creation, take some time to examine the new configuration files to gain a better understanding of how the build process works in this updated architecture. For detailed guidance on customizing your project within the new toolchain, refer to the [Heft documentation](https://heft.rushstack.io/) which provides comprehensive information on configuration options and extension points.

### For existing projects

When upgrading an existing project to SPFx v1.22:

1. Update your **package.json** dependencies to SPFx v1.22
1. Continue using your existing gulp-based build process
1. Evaluate the need to migrate to Heft based on the support timeline
1. Plan migration during a maintenance window to minimize disruption

## Additional resources

- [Migrate from the Gulp-based to the Heft-based toolchain](migrate-gulptoolchain-hefttoolchain.md)
- [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md)
- [Heft documentation](https://heft.rushstack.io/)
