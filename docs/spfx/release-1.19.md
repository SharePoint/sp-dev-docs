---
title: SharePoint Framework v1.19 developer preview release notes
description: Release notes for the SharePoint Framework v1.19 developer preview release.
ms.date: 03/27/2024
ms.localizationpriority: high
---
# SharePoint Framework v1.19 developer preview release notes

This release focuses on new features within the Viva Connections side and evolving existing capabilities within the other areas on building Microsoft 365 solutions with SharePoint Framework.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- beta.0 **Released**: March 27, 2024

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the preview latest version

Install the latest preview release of the SharePoint Framework (SPFx) by using the **@next** tag.

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.18 to v1.19

In the project's **package.json** file, identify all SPFx v1.18.x packages. For each SPFx package:

1. Uninstall the existing v1.18.x package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.18.x
    ```

1. Install the new v1.19 package:

    ```console
    npm install @microsoft/{spfx-package-name}@next --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

Related updated documentation for the 1.19 preview release:

* *Introduction to Chart Card ACE* - coming soon
* *Tutorial - Create your first Chart Card ACE* - coming soon - see the referenced video on current guidance

New samples showcasing the new Viva Connections features:

* [Chart Card - Three Series sample](https://github.com/pnp/sp-dev-fx-aces/tree/main/samples/ChartCard-ThreeSeries)

Video in YouTube showcasing the new template options for Viva Connections

* [Introducing new Viva Connections chart card layout option](https://www.youtube.com/watch?v=JOIb4KhiWAI)

### New Data Visualization Card Template for Adaptive Card Extensions

We introduce a new data visualization card view for Adaptive Card Extensions that is intended to be used for charting scenarios. Use new Data Visualization Card Template in the generator to get started.

![Preview of chart chard](../images/119-release-notes/chart-card-viva-connections.png)

### Webpack 5 support

The tooling was upgraded from Webpack 4 to Webpack 5.

> [!NOTE]
> If you have webpack configuration customizations in your project - reference the [official Webpack documentation](https://webpack.js.org/migrate/5/) for the migration details.

### Build time packages release is decoupled from the SPFx release

Starting from this release, the build time packages are decoupled from the SPFx release. This means that the build time packages are released independently from the SPFx release. This change allows us to release new features and fixes to the build time packages without waiting for the next SPFx release.

### Optional footer for the Search Adaptive Card Extension

You can now skip `footer` for the Search adaptive card extension.

### `ariaLabel` property for the Property Pane's Checkbox control

`PropertyPaneCheckbox` now supports `ariaLabel` property.

### `imageAlt` property for the Property Pane's ChoiceGroup option

You can now specify `imageAlt` property for the Property Pane's choice group option.

### `ariaDescription` property for the Property Pane's Dropdown control

`PropertyPaneDropdown` now supports `ariaDescription` property.

### `disabled` property for the Property Pane's Icon Picker and Thumbnail Picker controls

`PropertyPaneIconPicker` and `PropertyPaneThumbnailPicker` now support `disabled` property.

### `inlineLabel` property for the Property Pane's Toggle control

`PropertyPaneToggle` now supports `inlineLabel` property that specifies whether the label (not the onText/offText) should be positioned inline with the toggle control. Left (right in RTL) side when on/off text provided VS right (left in RTL) side when no on/off text.

> [!NOTE]
> When not providing on/off text user may get confused in differentiating the on/off states of the toggle.

## Deprecations

- Node.js 16 isn't supported with the SPFx 1.19

## Fixed Issues

TBD

## Feedback and issues

We're interested on your feedback around the release. Do let us know any findings or other feedback using the [SPFx issue list](https://github.com/SharePoint/sp-dev-docs/issues).

Happy coding! Sharing is caring! 🧡
