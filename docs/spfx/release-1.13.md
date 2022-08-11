---
title: SharePoint Framework v1.13 release notes
description: Release notes for the SharePoint Framework v1.13 release
ms.date: 10/25/2021
ms.localizationpriority: high
---
# SharePoint Framework v1.13 release notes

This release introduces a new component type, Adaptive Card Extensions (ACE), that can be used to extend Viva Connections.

**Released:** October 21, 2021

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.12.1 to v1.13

1. In the project's **package.json** file, identify all SPFx v1.12.1 packages. For each SPFx package:
    1. Uninstall the existing v1.12.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.12.1
        ```

    1. Install the refreshed v1.13 {version-release} package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.13.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

- The new feature of this release is the extensibility model for the upcoming Viva Connections feature. The beta will allow you to create Adaptive Card Extensions (ACEs) and test them in the hosted workbench.
  - *See [Overview of Viva Connections Extensibility](viva/overview-viva-connections.md) for more details.*
- Update the Microsoft Teams SDK to v1.10.
- Update React to v16.13.1.
- Update TypeScript to v3.9.
- Numerous additional fixes and improvements based on issues reported by the community at https://aka.ms/spfx-issues

> [!NOTE]
> The extensibility model for the upcoming Viva Connections feature is currently rolling out in production and might not be available across all tenants yet. If you want to immediately start working with ACEs you can do that by creating a link to the workbench (for example `https://contoso.sharepoint.com/_layouts/15/workbench.aspx`) in a navigation node in a modern page. Then use that node to access the workbench.

## Changes in this release

- **Yeoman v4** and above (installed globally) is required.

## Deprecations and removed items in this release

- **Node v10** is no longer supported. Supported node versions are v12 and v14.
- **Local workbench removed**: This release removes of the local workbench, as well as the removal of the on-prem questions in the Yeoman generator. On-prem is still supported, and the SPFx v1.12.1 Yeoman generator, as well as previous versions, continue to generate on-prem solutions. The hosted workbench is now the way to test your code.

    To configure the browser launch correctly, update the `initialPage` property within the **./config/serve.json** to point to your SharePoint Online tenant. For example: `https://contoso.sharepoint.com/_layouts/15/workbench.aspx`.

    Not performing this configuration task will result in an error the first time `gulp serve` runs.
