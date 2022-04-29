---
title: SharePoint Framework v1.11 release notes
description: Release notes for the SharePoint Framework v1.11 release
ms.date: 09/08/2021
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---
# SharePoint Framework v1.11 release notes

New in this release, support for additional attributes in the solution for enabling SharePoint Framework support in store and new messaging extension support for Microsoft Teams.

- [Announcing SharePoint Framework 1.11: Extend more of Microsoft Teams, and publish to AppSource](https://developer.microsoft.com/microsoft-365/blogs/announcing-sharepoint-framework-1-11-extend-more-of-microsoft-teams-and-publish-to-appsource/)

**Released:** July 16, 2020

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

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

> [!IMPORTANT]
> Be sure you update the **package-solution.json** with the new developers information as described in the article [Docs: SharePoint Framework toolchain - Update developer information](toolchain/sharepoint-framework-toolchain.md). Not providing such information will generate an error during gulp package-solution process.

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

- Supporting SharePoint Framework solutions in AppSource and in Marketplace
  - [Docs: Publish SharePoint Framework applications to the Marketplace](publish-to-marketplace-overview.md)
  - [Docs: Prepare your SharePoint Framework application for publishing to the Marketplace](publish-to-marketplace-checklist.md)
  - [Docs: Maintain and support your published app](publish-to-marketplace-after-publishing.md)
  - [Docs: Publish SharePoint Framework applications to the Marketplace - FAQ](publish-to-marketplace-faq.yml)
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
