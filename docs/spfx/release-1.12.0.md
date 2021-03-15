---
title: SharePoint Framework v1.12 release notes
description: Release notes for the SharePoint Framework v1.12 release
ms.date: 03/15/2021
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.12 release notes

This release introduces a new property & event in the Web Part API to detect the rendering width (and changes), improved support for Microsoft Teams solutions, and updates supported versions of Node.js.

**Released:** March 15, 2021

## Upgrading projects from v1.11 to v1.12

1. In the project's **package.json** file, identify all SPFx v1.11 packages. For each SPFx package:
    1. Uninstall the existing v1.11 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.11
        ```

    1. Install the refreshed v1.12 {version-release} package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.12 --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## New features and capabilities

- The **Sync to Teams** button in the Tenant App Catalog will use the Teams app manifest defined in the solution if present to create and publish a Teams app package to Microsoft Teams. If an app manifest file is not present, SharePoint will dynamically generate one.
  - *See [Deployment options for SharePoint Framework solutions for Microsoft Teams](deployment-spfx-teams-solutions.md) for more details.*
- A new API has been added to the SPFx web part class to determine the rendered width of a web part and optionally handle an event when it changes.
  - *See [Determine the rendered web part size](web-parts/basics/determine-web-part-width.md) for more details.*

## Changes in this release

- Add support for **Node.js v12**
  - *See [Set up your SharePoint Framework development environment](set-up-your-development-environment.md) for details.*
  - **Gulp v4** (installed globally) is required (*see [Regarding Gulp versions & Node.js v12+](#gulp-versions--nodejs-v12) for details*)
- For app projects:
  - Update the default version of TypeScript to **v3.7** (*via **@microsoft/rush-stack-compiler-3.7** v0.2.3*)
  - Update the **Gulp** version used to **v4.0.2**
- For projects that use React:
  - Update the React NPM packages (**react** & **react-dom**) to **v16.9.0**.
  - Update the Office UI Fabric React NPM package (**office-ui-fabric-react**) to **v7.156.0**.

## Deprecations and removed items in this release

- **Gulp v3** is not supported (*neither globally nor locally installed*) when using Node.js v12+.

### Gulp versions & Node.js v12+

Gulp v3 isn't supported with Node.js v12+ (*ref [gulpjs/gulp/#2324](https://github.com/gulpjs/gulp/issues/2324)*).

This is not a change with SPFx. Its mentioned here to bring attention to it as this SPFx release adds support for Node.js v12.
