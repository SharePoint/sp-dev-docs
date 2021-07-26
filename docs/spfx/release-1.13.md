---
title: SharePoint Framework v1.13 release notes
description: Release notes for the SharePoint Framework v1.13 release
ms.date: 07/26/2021
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.13 release notes

This marks first release with our new release flow, where we'll release multiple beta builds using the **next** tag in the [NPMJS.org](https://www.npmjs.org) registry before final release candidates and a final public release.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

**Released:** July 22, 2021

## Install the latest beta release

Install the latest beta release of the SharePoint Framework (SPFx) by including the **@next** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.12.1 to v1.13

1. In the project's **package.json** file, identify all SPFx v1.13.0 packages. For each SPFx package:
    1. Uninstall the existing v1.12.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.12.1
        ```

    1. Install the refreshed v1.13 {version-release} package:

        ```console
        npm install @microsoft/{spfx-package-name}@next --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

## New features and capabilities

- The biggest new part of this release is the extensibility model for the upcoming Viva Connections feature. The beta will allow you to create Adaptive Card Extensions (ACEs) and test them in the hosted workbench.
  - *See [Overview of Viva Connections Extensibility](viva/overview-viva-connections.md) for more details.*
- Update the Microsoft Teams SDK to v1.10.

> [!NOTE]
> The extensibility model for the upcoming Viva Connection feature is currently rolling in production and might not be available across all tenants yet. If you want to immediately start working with ACEs you can do that by creating a link to the workbench (for example `https://contoso.sharepoint.com/_layouts/15/workbench.aspx`) in a navigation node in a modern page. Then use that node to accessing the workbench.


## Deprecations and removed items in this release

- **Local workbench removed**: This release will also mark the removal of the local workbench, as well as the removal of the on-prem questions in the Yeoman generator. On-prem is still supported, and the SPFx v1.12.1 Yeoman generator, as well as previous versions, continue to generate on-prem solutions. The hosted workbench is now the way to test your code.

    To configure the browser launch correctly, update the `initialPage` property within the **./config/serve.json** to point to your SharePoint Online tenant. For example: `https://contoso.sharepoint.com/_layouts/15/workbench.aspx`
    Not performing that configuration task, will result in an error the firt time `gulp serve` runs.
