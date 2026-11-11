---
title: SharePoint Framework v1.24.1 release notes
description: Release notes for SharePoint Framework v1.24.1, released November 2, 2026, with corrected default project scaffolding and dependency updates.
ms.date: 11/11/2026
ms.localizationpriority: high
---
# SharePoint Framework v1.24.1 release notes

SharePoint Framework (SPFx) 1.24.1 is a minor maintenance update to [SPFx 1.24.0](release-1.24.0.md). It fixes the default project scaffolding to reference stable SPFx packages instead of release-candidate packages and includes dependency updates.

**Released:** November 2, 2026

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install SPFx 1.24.1

Install the SPFx 1.24.1 generator:

```console
npm install @microsoft/generator-sharepoint@1.24.1 --global
```

Alternatively, install the latest public release:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

As of November 2, 2026, the npm `@latest` tag selects `1.24.1`. The tag advances with subsequent releases; use the explicit version for a reproducible setup.

SPFx 1.24.1 retains the SPFx 1.24 platform requirements, including React **18.3.1** and support for Node.js **22, 24, and 26**. Node.js **26 LTS** is recommended for a new development environment. See the [compatibility reference](compatibility.md) for supported versions.

## Changes in this release

### Corrected default project scaffolding

The SPFx 1.24.0 generator could create projects with SPFx `1.24.0-rc.0` package references. The 1.24.1 generator now scaffolds projects with stable `1.24.1` SPFx runtime and toolchain dependencies.

Use the 1.24.1 generator for new projects. Updating the globally installed generator doesn't change projects you've already created; update their dependencies as described below.

### Dependency maintenance

This release also addresses some of the npm dependency vulnerabilities reported with SPFx 1.24.0. Dependency maintenance is ongoing, and this release doesn't guarantee an empty `npm audit` report.

Review findings against the affected dependency and its use in your project. See [Understanding npm audit vulnerabilities in SPFx projects](npm-vulnerabilities.md) for guidance.

## Upgrading projects from v1.24.0 to v1.24.1

For upgrades from an earlier minor version:

[!INCLUDE [spfx-release-upgrade-warning](../../includes/snippets/spfx-release-upgrade-warning.md)]

> [!TIP]
> To generate an upgrade report for this project, run the following command from the project root:
>
> ```console
> npx -p @pnp/cli-microsoft365@latest m365 spfx project upgrade --toVersion 1.24.1 --output md
> ```
>
> This command generates an upgrade report; it doesn't modify project files. Review and apply the reported changes, preserving your solution's custom code and configuration.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

1. Install the 1.24.1 generator using the command above.
2. In your project's **package.json**, update existing Microsoft SPFx runtime, build-rig, plugin, and lint package references to the exact version `1.24.1`. Include any `1.24.0-rc.0` references left by the 1.24.0 generator. Keep each package in its existing `dependencies` or `devDependencies` section, and don't assign the SPFx version to unrelated packages.
3. Compare your dependencies and configuration with a separate project created using the 1.24.1 generator, including dependency overrides. Preserve your solution's custom code and configuration.
4. Update the dependency lockfile and validate the production build:

   ```console
   npm install
   npm run build
   ```

Review and commit both **package.json** and **package-lock.json**, and test the solution in its intended hosts. For additional guidance, see [Update SharePoint Framework packages](toolchain/update-latest-packages.md).

If you're upgrading an older React solution, follow [Upgrade to React 18 in SharePoint Framework 1.24](react-18-upgrade.md), which targets 1.24.1.

## Fixed issues

- [#11078](https://github.com/SharePoint/sp-dev-docs/issues/11078) - The SPFx 1.24.0 generator scaffolded projects with `1.24.0-rc.0` package references. The scaffolding issue is fixed in 1.24.1; work on dependency-audit findings continues.

## Feedback and issues

If you find any issues, share them using the [sp-dev-docs repository issue list](https://aka.ms/spfx/issues). You can also use [GitHub Discussions](https://github.com/SharePoint/sp-dev-docs/discussions) to start a conversation with the engineering team about this release.
