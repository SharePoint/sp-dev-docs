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
> This article targets the Gulp-to-Heft transition to SPFx 1.22.2, not a direct upgrade to SPFx 1.24. Save a known-good version first. Review changes to dependencies, configuration, lint rules, and scripts against a project generated for the target version. A separate [manual migration walkthrough](migrate-gulptoolchain-hefttoolchain-manual.md) targets SPFx 1.22.1.

> [!TIP]
> The [CLI for Microsoft 365 spfx project upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) command generates an upgrade report; it doesn't change project files. Check that your installed CLI supports the requested target version. Review and apply the reported changes, including project-specific configuration that automation can't assess. See the [SPFx 1.22.2 release notes](../release-1.22.2.md).

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
npx -p @pnp/cli-microsoft365@latest m365 spfx project upgrade --toVersion 1.22.2 --output md
```

Review the report and apply the relevant changes in a working copy of your project. Don't assume it supplies or executes a complete migration script. Preserve solution identities, custom tasks, deployment settings, and the lock file while resolving the updated dependencies.

## Verify the migration

After applying the changes, verify the migration by running the build command:

```console
npm run build
```

## See also

- [Upgrade to React 18 in SPFx 1.24](../react-18-upgrade.md) — a separate step from this 1.22 toolchain migration.

- [SharePoint Framework Toolchain: Rush Stack, Heft, and Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Customize the Heft-based SPFx Toolchain](./customize-heft-toolchain-overview.md)
- [Migrate from the Gulp-based to the Heft-based Toolchain Manually](migrate-gulptoolchain-hefttoolchain-manual.md)
