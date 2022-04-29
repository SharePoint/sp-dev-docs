---
title: SharePoint Framework v1.4.1 release notes
description: Release notes for the SharePoint Framework v1.4.1 release
ms.date: 09/08/2021
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---
# SharePoint Framework v1.4.1 release notes

**Released:** February 15, 2018

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.4 to v1.4.1

1. In the project's **package.json** file, identify all SPFx v1.4 packages. For each SPFx package:
    1. Uninstall the existing v1.4 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.4
        ```

    1. Install the refreshed v1.4.1 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.4.1.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Node v8 (LTS) and NPM v5 Support

Support of Node.js v8 (LTS) and NPM v5 is now available in SPFx.

Issue reported here: https://github.com/SharePoint/sp-dev-docs/issues/1002

We've also updated the [Set up your SharePoint Framework development environment](set-up-your-development-environment.md) article.

### New APIs (developer preview)

Following are new APIs available for preview usage within SharePoint Online. These are **not** meant to be used in production yet.

#### @microsoft/sp-http

- Initial beta release of AadHttpClient class
- Initial beta release of AadTokenProvider class

#### @microsoft/sp-client-preview

- Initial beta release of MSGraphClient class

You can find a tutorial for these new APIs from the Office SharePoint Development documentation.

- [Tutorial: Consume the Microsoft Graph in the SharePoint Framework](use-aad-tutorial.md)

### AadHttpClient (developer preview)

**AadHttpClient** is used to do REST calls against an Azure AD Application, for example third-party WebAPI hosted in Azure.

- For communicating with SharePoint, use the `SPHttpClient` class instead.
- For communicating with Microsoft Graph, use the `MSGraphClient` class.

You can find more information on this new API from the Office SharePoint Development documentation:

- [Connect to Azure AD-secured APIs in SharePoint Framework solutions](use-aadhttpclient.md)

### MSGraphClient (developer preview)

`MSGraphClient` is used to do REST calls against Microsoft Graph. The Microsoft Graph JavaScript client library is a lightweight wrapper around the Microsoft Graph API. This class allows developers to start making REST calls to MSGraph without needing to initialize the MSGraph client library.

If a custom configuration is wanted, the `MSGraphClient` API function needs to be provided with that custom configuration for every request.

- [Use the MSGraphClient to connect to Microsoft Graph](use-msgraph.md)

> [!IMPORTANT]
> Notice that this API is replacing the previously released `GraphHttpClient`, which is now considered to be deprecated.

### AadTokenProvider

This class is an internal class used by AadHttpClient and MSGraphClient to obtain OAuth2 tokens from Azure AD. Although the class is currently marked as public, we're planning to change it as internal. For that reasons solutions should only rely on `AadHttpClient` and `MSGraphClient` classes.

## Changes in this release

- Fixed an issue in the generator that prevented activation of new versions of SPFx packages.
- **Symptoms** - You deploy a new version of SharePoint Framework packages and you no longer see your web parts in web part picker.
  - [#775](https://github.com/SharePoint/sp-dev-docs/issues/775)
  - **Fix**: To fully successfully fix this issue, you'll need to do following steps in your SharePoint Online tenants.
      1. Remove all instances of existing SharePoint Framework solutions from site level
      1. Remove SharePoint Framework solution from app catalog
      1. Upload new SharePoint Framework solution built with 1.4.1 version to your app catalog
      1. Install SharePoint Framework solutions back to sites.

    > [!NOTE]
    > This issue is **not** happening for tenant-scoped SharePoint Framework solutions and it's not happening for SharePoint add-ins.

    > [!TIP]
    > You might potentially take advantage of the [Application Lifecycle Management (ALM) APIs](../apis/alm-api-for-spfx-add-ins.md) to automate this needed process.

## Deprecations and removed items in this release

- The `GraphHttpClient` API has been deprecated in favor of the new `MSGraphClient` introduced in this release. The `GraphHttpClient` will be removed in a future release.
