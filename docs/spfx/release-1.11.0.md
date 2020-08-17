---
title: SharePoint Framework v1.11 release notes
description: Release notes for the SharePoint Framework v1.11 release
ms.date: 07/17/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.11 release notes

New in this release, support for additional attributes in the solution for enabling SharePoint Framework support in store and new messaging extension support for Microsoft Teams.

* [Announcing SharePoint Framework 1.11: Extend more of Microsoft Teams, and publish to AppSource](https://developer.microsoft.com/en-us/microsoft-365/blogs/announcing-sharepoint-framework-1-11-extend-more-of-microsoft-teams-and-publish-to-appsource/)

**Released:** July 16, 2020

## Upgrading projects from v1.10 to v1.11

1. In the project's **package.json** file, identify all SPFx v1.10 packages. For each SPFx package:
    1. Uninstall the existing v1.10 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.10
        ```

    1. Install the refreshed v1.11 package:

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

- **REMOVED**: Knockout web framework option when creating SharePoint Framework web parts. You can still use Knockout, but there's no default scaffolding for it.
- **REMOVED**: Node.js v8 support. For more information on the most current recommended versions, see [Set up your SharePoint Framework development environment](set-up-your-development-environment.md).
- **REMOVED**: Support for system.js in the local workbench.

> [!IMPORTANT]
> We are planning to remove support of the local workbench within the upcoming releases of SharePoint Framework.

## Known issues and limitations

There are no known issues as such with this release.
