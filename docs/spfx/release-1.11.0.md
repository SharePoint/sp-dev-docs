---
title: SharePoint Framework v1.11 release notes
description: Release notes for the SharePoint Framework v1.11 release
ms.date: 07/16/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.11 release notes

New in this release, support for additional attributes in the solution for enabling SharePoint Framework support in store and new messaging extension support for Microsoft Teams.

**Released:** July 16, 2020

## Upgrading projects from v1.9.1 to v1.10

1. In the project's **package.json** file, identify all SPFx v1.9.1 packages. For each SPFx package:
    1. Uninstall the existing v1.10 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.10
        ```

    1. Install the refreshed v1.10 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.11 --save --save-exact
        ```

> [!TIP]
> The [Office 365 CLI](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/office365-cli/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## New features and capabilities

- Supporting SharePoint Framework solutions in AppSource and in Marketplace
  - [Docs: Publish SharePoint Framework applications to the Marketplace](publish-to-marketplace-overview.md)
  - [Docs: Prepare your SharePoint Framework application for publishing to the Marketplace](publish-to-marketplace-checklist.md)
  - [Docs: Maintain and support your published app](publish-to-marketplace-after-publishing.md)
  - [Docs: Publish SharePoint Framework applications to the Marketplace - FAQ](publish-to-marketplace-faq.md)
- Support Microsoft Teams task modules added
  - [Docs: Expose web part as Microsoft Teams messaging extension](build-for-teams-expose-webparts-teams.md#expose-web-part-as-microsoft-teams-messaging-extension)
- Additional metadata for the SharePoint Framework solutions
  - [Docs: SharePoint Framework toolchain - Update developer information](toolchain/sharepoint-framework-toolchain.md)
- Support defining specific image for app pages
  - [Docs: Set the single part app page preview image](web-parts/basics/configure-web-part-icon.md#set-the-single-part-app-page-preview-image)

> [!NOTE]
> Office add-ins build with SharePoint Framework is still in preview.

## Changes and deprecations in this release

- Knockout option for the SharePoint Framework web parts scaffolding has been removed. You can still use knockout if you prefer to do so, but there's no default scaffolding for it.
- We have removed Node version 8 support in this release - use version 10 for now. Node v12 is not yet supported with SharePoint Framework development.
- We have removed support for system.js in the local workbench

> [!IMPORTANT]
> We are planning to remove support of the local workbench within the upcoming releases of SharePoint Framework.

## Known issues and limitations

There are no known issues as such with this release. If you find any issues around the provided version, report them to our centralized SharePoint dev issues list at https://aka.ms/spfx-issues.