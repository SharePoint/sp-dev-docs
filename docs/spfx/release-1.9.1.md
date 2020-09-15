---
title: SharePoint Framework v1.9.1 release notes
description: Release notes for the SharePoint Framework v1.9.1 release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.9.1 release notes

This is a minor release that includes **Library component moving to general availability** and the tooling move from WebPack 3 to **WebPack 4**. There are some minor changes in support for the **Teams SDK** as well.

**Released:** August 14, 2019

## Upgrading projects from v1.8.2 to v1.9.1

1. In the project's **package.json** file, identify all SPFx v1.8.2 packages. For each SPFx package:
    1. Uninstall the existing v1.8.2 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.8.2
        ```

    1. Install the refreshed v1.9.1 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.9.1.0 --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## New features and capabilities

- **Library Components (GA)**
  - [Docs: Using library component type in SharePoint Framework](library-component-overview.md)
  - [Tutorial: Build solutions with the library component type in SharePoint Framework](library-component-tutorial.md)

## Changes in this release

- Upgraded SPFx tooling from Webpack to **Webpack 4**. You won't notice an impact with this change in how you use the tooling, and many webpack plugins should work. However, if you modified the webpack step, you may need to update your changes to webpack 4.
- **Microsoft Teams SDK updated to v1.4.2**. This version has support for Vanity URLs.
- We've added an `sdks` property on the web part `context` API where we'll start to host specific application SDKs. Microsoft Teams is the first one to use this new API.

    We've marked the previous `context.microsoftTeams` API as deprecated (but it will continue to work).
- We continue to improve the admin experience around approving API requests in the service.

## Deprecations and removed items in this release

- Removed the previously deprecated `GraphHttpClient` API from the SPFx API. Code using it will still work for the short term, but you should migrate your code to the `MSGraphClient` API.
- The `microsoftTeams` API on a component's `context` object has been deprecated in favor of the new `context.sdk.microsoftTeams` API as mentioned above.

> [!NOTE]
> **What happened to the SPFx v1.9.0 release?**
>
> There was an issue with the local workbench in the v1.9.0 release, so it was pulled and now replaced with 1.9.1 release. Issue was not critical, but as it caused confusion, we wanted to ensure that usage is smooth without any additional hacks or other adjustments.
