---
title: SharePoint Framework v1.18.1 release notes
description: Release notes for the SharePoint Framework v1.18.1 release
ms.date: 11/07/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.18.1 release notes

This is a _minor release_ that introduces a new property targeting Adaptive Card Extensions for a better mobile experience with the Microsoft Viva Connections.

**Released:** November 7, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.18 to v1.18.1

In the project's **package.json** file, identify all SPFx packages. For each SPFx package:

1. Uninstall the existing packages:

    ```console
    npm uninstall @microsoft/{spfx-package-name}
    ```

1. Install the new v1.18.1 package:

    ```console
    npm install @microsoft/{spfx-package-name}@1.18.1 --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Partial Support for Teams JS SDK in Adaptive Card Extensions (Mobile only)

Developers can access **partial** Teams JS SDK in Adaptive Card Extensions via ACE's context (in the same way as in web parts). This enables the Adaptive Card Extensions to reflect the user interface based on the Microsoft Teams mobile theme setting.

```typescript
class AdaptiveCardExtensionContext {
  // ...
  public sdks: IPartialSDKs | undefined;
}

// Accessing the theme details using context
this.setState({
    theme: context.app.appInfo.theme
});
//...
```

> [!NOTE]
> Currently availability of this SDK is limited to Viva Connections Mobile only. We are working on introducing the support for this feature for the desktop and web clients in future releases.

> [!NOTE]
> Currently we only provide access to the `theme` property of the `appInfo` object of the Teams' context for Adaptive Card Extensions.

See more details on the use cases with code samples from the following updated documentation

* [Making Quick View compatible with dark mode in mobile devices](./viva/get-started/making-quickview-compatable-darkmode-mobile.md)
* [Quick View design guidance](./viva/design/designing-quick-view.md)

## Summary

Version 1.18.1 is a small release with a limited new capabilities. If you find any issues or have other feedback on the provided capabilities, report them at the [SPFx issue list](https://aka.ms/spfx/issues). Thank you for your input advance.
