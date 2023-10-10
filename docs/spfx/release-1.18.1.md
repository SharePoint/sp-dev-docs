---
title: SharePoint Framework v1.18.1 preview release notes
description: Release notes for the SharePoint Framework v1.18.1 preview release
ms.date: 10/10/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.18.1 preview release notes

This is a _minor release_ that introduces new properly targeting Adaptive Card Extensions for better mobile experience.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- beta.0 **Released**: October 10, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.18 to v1.18.1

In the project's **package.json** file, identify all SPFx packages. For each SPFx package:

1. Uninstall the existing packages:

    ```console
    npm uninstall @microsoft/{spfx-package-name}
    ```

2. Install the new v1.18.1 package:

    ```console
    npm install @microsoft/{spfx-package-name}@next --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Partial Support for Teams JS SDK in Adaptive Card Extensions (Mobile only)

Developers can access **partial** Teams JS SDK in Adaptive Card Extensions via ACE's context (in the same way as in web parts).

```typescript
class AdaptiveCardExtensionContext {
  // ...
  public sdks: IPartialSDKs | undefined;cx
}

// Accessing the theme details using context
this.setState({
    theme: context.app.appInfo.theme
});
//...
```

> [!NOTE]
> Currently availability of this SDK is limited to Viva Connections Mobile only. We are working on introducing the support for this feature also for deskot and web site in future releases.

> [!NOTE]
> Currently we only provide access to the `theme` property of the `appInfo` object of the Teams' context for Adaptive Card Extensions.

See more details on the use cases with code samples from the following updated documentation

* [Making Quick View compatible with dark mode in mobile devices](./viva/get-started/making-quickview-compatable-darkmode-mobile.md)
* [Quick view design guidance](./viva/design/designing-quick-view.md)

## Summary

Version 1.18.1 is expected to be a small release with the limited new capabilities. If you find any issues or have other feedback on the provided capabilities, report them at the [SPFx issue list](https://aka.ms/spfx/issues). Thank you for your input advance.