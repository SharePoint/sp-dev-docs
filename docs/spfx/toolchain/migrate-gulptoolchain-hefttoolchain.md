---
title: Migrate from the Gulp-based to the Heft-based Toolchain
description: Learn what changes when migrating a SharePoint Framework project from the Gulp-based build toolchain to the Heft-based build toolchain introduced in SPFx v1.22, and how to perform the migration using CLI for Microsoft 365.
ms.date: 12/30/2025
ms.localizationpriority: high
ai-usage: ai-assisted
---
# Migrate from the Gulp-based to the Heft-based Toolchain

SPFx v1.22 introduced a new Heft-based build toolchain, replacing the Gulp-based toolchain used in SPFx v1.0–v1.21.1. This article explains what changes during the migration and how to perform it.

> [!IMPORTANT]
> This migration involves changes across more than 12 files including package removals, new package installations, configuration file replacements, new file creation, ESLint rule changes, and build script rewrites. Don't attempt to perform these changes manually — use the CLI for Microsoft 365 to generate the complete set of changes for your project.

> [!TIP]
> Use the [CLI for Microsoft 365 spfx project upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) command to perform this migration automatically. It handles upgrades across any version gap — not just from v1.21.1 — by detecting your current version and generating the precise changes needed for your project. The report includes a single script to apply all changes in one go. See the [release notes](../release-1.22.2.md) for your target version for the specific command to run.

[!INCLUDE [pnp-o365cli](../../../includes/snippets/open-source/pnp-o365cli.md)]

## What changes in this migration

The following areas of your project are affected when migrating from the Gulp-based toolchain to the Heft-based toolchain:

### Build toolchain packages

The Gulp-based packages (`@microsoft/sp-build-web`, `ajv`, `gulp`, and `@microsoft/rush-stack-compiler-*`) are removed and replaced with Heft-based equivalents (`@microsoft/spfx-web-build-rig`, `@microsoft/spfx-heft-plugins`, `@rushstack/heft`, `@typescript-eslint/parser`, and `@types/heft-jest`).

### TypeScript configuration

The existing `tsconfig.json` with its full `compilerOptions` block is replaced with a minimal file that extends the SPFx build rig's base TypeScript configuration. A new `config/typescript.json` file is added to configure static asset copying for the Heft TypeScript plugin.

### Build scripts

The `scripts` change from Gulp commands (`gulp bundle`, `gulp clean`, `gulp test`) to Heft commands (`heft build`, `heft clean`, `heft start`).

### ESLint rules

Two ESLint rules move from the `@microsoft/spfx/` namespace to the `@rushstack/` namespace: `import-requires-chunk-name` and `pair-react-dom-render-unmount`.

### Configuration files

A new `config/rig.json` file is added to point the project at the `@microsoft/spfx-web-build-rig` shared configuration package. The existing `config/sass.json` is updated to use the Heft SASS plugin schema and extend the rig's default SASS configuration.

### Removed files

The `gulpfile.js` and `src/index.ts` files are removed as they're no longer needed by the Heft-based build system.

### Production dependencies

All `@microsoft/sp-*` packages in `dependencies` are updated to the target SPFx version.

## How to do the migration

Run the following command from the root of your project to generate a complete upgrade report:

```console
npx -p @pnp/cli-microsoft365 m365 spfx project upgrade --toVersion 1.22.2 --output md
```

The report lists every required change and includes a combined script at the end that applies all changes in a single execution. Review the report, then run the script to complete the migration.

## Verify the migration

After applying the changes, verify the migration by running the build command:

```console
npm run build
```

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, and Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Customize the Heft-based SPFx Toolchain](./customize-heft-toolchain-overview.md)
- [Migrate from the Gulp-based to the Heft-based Toolchain Manually](migrate-gulptoolchain-hefttoolchain-manual.md)
