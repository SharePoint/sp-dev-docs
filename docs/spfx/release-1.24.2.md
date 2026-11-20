---
title: "SharePoint Framework v1.24.2 release notes: React 18 fixes"
description: SharePoint Framework v1.24.2, released November 20, 2026, fixes React 18 dependency conflicts that affected package installation and pnpm builds.
ms.date: 11/20/2026
ms.topic: overview
ms.localizationpriority: high
ai-usage: ai-generated
---
# SharePoint Framework v1.24.2 release notes

SharePoint Framework (SPFx) 1.24.2 is a maintenance update to [SPFx 1.24.1](release-1.24.1.md). It fixes React 18 dependency compatibility issues that could block package installation or cause TypeScript build failures with pnpm.

**Released:** November 20, 2026

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install SPFx 1.24.2

Install the latest public SPFx generator:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

As of November 20, 2026, the npm `@latest` tag selects `1.24.2`. The tag advances with subsequent releases; use `@microsoft/generator-sharepoint@1.24.2` for a reproducible setup.

Updating the globally installed generator doesn't change projects you've already created; update their dependencies as described below.

SPFx 1.24.2 retains the SPFx 1.24 platform requirements, including React **18.3.1**. See the [compatibility reference](compatibility.md) for supported platform and dependency versions.

## Changes in this release

### React 18 compatibility for the image helper

In SPFx 1.24.0 and 1.24.1, `@microsoft/sp-image-helper` declared React and React DOM peer dependencies that excluded React 18. This could cause npm installation to fail with an `ERESOLVE` dependency conflict in React 18 solutions, including projects that used the image helper through `@microsoft/sp-property-pane`.

SPFx 1.24.2 updates the image helper's peer dependency declarations to accept React 18 and React DOM 18, resolving the reported installation conflict.

### React 18 dependencies for runtime components

In SPFx 1.24.1, the following packages still depended on React 17.0.1 even though React-based SPFx solutions used React 18.3.1:

- `@microsoft/sp-dialog`
- `@microsoft/sp-loader`
- `@microsoft/sp-property-pane`
- `@microsoft/sp-webpart-base`

This mismatch could cause TypeScript build failures when using pnpm. In SPFx 1.24.2, these components also use React 18, aligning their dependencies with the supported React runtime and fixing the reported pnpm build failure.

## Upgrading projects from v1.24.1 to v1.24.2

For upgrades from an earlier minor version:

[!INCLUDE [spfx-release-upgrade-warning](../../includes/snippets/spfx-release-upgrade-warning.md)]

> [!TIP]
> As of November 20, 2026, CLI for Microsoft 365 `12.0.0` doesn't yet support SPFx 1.24.2. After support is available, run the following command from the project root to generate an upgrade report:
>
> ```console
> npx -p @pnp/cli-microsoft365@latest m365 spfx project upgrade --toVersion 1.24.2 --output md
> ```
>
> This command generates an upgrade report; it doesn't modify project files. Review and apply the reported changes, preserving your solution's custom code and configuration.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

1. Install the 1.24.2 generator using the command above.
2. In your project's **package.json**, update existing Microsoft SPFx runtime, build-rig, plugin, and lint package references to the exact version `1.24.2`. Keep each package in its existing `dependencies` or `devDependencies` section, and don't assign the SPFx version to unrelated packages. For React-based solutions, keep existing React and React DOM dependencies at `18.3.1`.
3. Update the dependency lockfile and validate the production build:

   ```console
   npm install
   npm run build
   ```

Review and commit both **package.json** and **package-lock.json**, and test the solution in its intended hosts. For additional guidance, see [Update SharePoint Framework packages](toolchain/update-latest-packages.md).

## Fixed issues

- [#11087](https://github.com/SharePoint/sp-dev-docs/issues/11087) - The image helper's React and React DOM peer dependency ranges excluded React 18, causing package installation conflicts. Fixed in 1.24.2.
- [#11097](https://github.com/SharePoint/sp-dev-docs/issues/11097) - React 17 dependencies in SPFx runtime components caused TypeScript build failures with pnpm in React 18 solutions. These components now use React 18 in 1.24.2.

## Feedback and issues

If you find any issues, share them using the [sp-dev-docs repository issue list](https://aka.ms/spfx/issues). You can also use [GitHub Discussions](https://github.com/SharePoint/sp-dev-docs/discussions) to start a conversation with the engineering team about this release.
