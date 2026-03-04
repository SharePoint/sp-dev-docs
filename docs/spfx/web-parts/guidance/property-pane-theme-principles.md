---
title: "Property pane control theming implementation"
description: "Learn how to implement property pane controls that follow SharePoint's theme framework and design principles."
ms.date: 02/10/2026
ms.localizationpriority: high
---

# Property pane control theming implementation

To ensure a cohesive and consistent user experience across SharePoint sites, property pane custom controls should adhere to the **SharePoint Theme Framework**. This framework aims to rationalize theming for transient surfaces like property panes, drawers, and dialogs.

## The Philosophy

The core principle for **Property Pane controls** is simple: **they should not use the custom site theme**. Instead, these controls should always follow the **DOM tree property pane theme**, which is controlled internally by SharePoint.

This approach ensures that property panes remain consistent with the overall application chrome regardless of the specific site's branding.

## Technical Implementation Requirements

Developers are strongly encouraged to use **Fluent UI v9** for all new custom controls. Fluent UI v9 can automatically detect and use the theme from the SharePoint property pane framework.

> [!NOTE]
> Both Fluent UI v8 components and legacy v8 color tokens will use the site theme instead of the property pane theme, which can cause visual misalignment with other property pane controls and may lead to accessibility issues.

### Fluent UI v9 Components

Fluent UI v9 components can automatically detect and use the theme from the SharePoint property pane framework, while Fluent UI v8 components cannot.

You can explore the available components and their usage in the [Fluent UI v9 Components Storybook](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs). This resource provides interactive examples and documentation for all v9 controls.

### Fluent UI v9 Design Tokens

Hardcoded hex values for colors (e.g. `#0078d4`) should be avoided. Similarly, **Legacy v8 color tokens** (such as classes like `ms-color-neutralPrimary` or variables) should no longer be used, as they reflect the site theme and may cause accessibility issues. You should use Fluent UI v9 Design Tokens to handle theming logic. This ensures your control follows the theme from the SharePoint property pane framework.

If you have existing controls using v8 color tokens, you should update them to the corresponding v9 tokens. You can find the legacy-to-v9 mapping here: [Fluent UI v8 to v9 Color Token Mapping](https://github.com/microsoft/fluentui/blob/2d6aca289ee6cc4571e4e3dcdf810deb78ac18fa/apps/public-docsite-v9/src/shims/ThemeShim/v9ThemeShim.ts#L14C1-L14C80).
