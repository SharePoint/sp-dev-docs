---
title: Focus feature in Adaptive Card Extension
description: The focus feature allows developers to determine focus of elements in the Quick View.
ms.date: 04/04/2023
---
# Focus feature in Adaptive Card Extension

Microsoft added support for the focus feature, unique to Viva Connections, in the [SharePoint Framework (SPFx) v1.17](../../../release-1.17.md) release.

> [!NOTE]
> This tutorial also assumes that you've already built an SPFx Adaptive Card Extension.
>
> To learn how to create your first SPFx Adaptive Card Extension, see [Build your first SharePoint Adaptive Card Extension](../../get-started/build-first-sharepoint-adaptive-card-extension.md).

## Focus Feature

Just like the way that developers can set a template and data via `get data()` and `get template()`, users will be able to hook into a new getter method that will allow them the flexibility to pass in an initial focus element on each render. If implementation isn't provided by developer, then a focus on the first tab-able element will be set.

```typescript
/**
   * An optional focus element to set focus when the view is rendered for accessibility purposes.
   * @remarks If not overriden, the focus element defaulted to the first actionable element of the Quick View.
   *
   * @virtual
   */
  public get focusParameters(): IFocusParameters | undefined {
    return undefined;
  }
```

This new function allows developers to customize what the focus element is by returning `IFocusParameters`. The return values are as follows:

- `focusTarget`: Set to the root element of the Quick View by default.
- `ariaLive` [OPTIONAL]: Determines reading priority from a screen reader standpoint. Set to off by default.

```typescript
{
  /**
   * Sets the default focus on the DOM. Developers pass in the id of a unique element that is to attain focus within a Quick View.
   * If the `focusTarget` is not defined then the root element is selected.
   */
  focusTarget: string | undefined;

  /**
   * Sets the accessibility reading of the contents within the focus target.
   * Polite - Content in the target's subtree is read when the user is idle.
   * Assertive - Disrupts any announcement in favor of the changed contents within the target's subtree.
   * Off - The screen reader will not read contents within the target's subtree.
   */
  ariaLive?: 'polite' | 'assertive' | 'off';
}
```

## Tutorial and Examples

You can take a look at [this tutorial](./FocusFeatureTutorial.md), which goes over a step by step guide on how to create a card with the available media upload action.

1. **Read target information after once user is idle**

    In your `focusParameters` function, return the following object:

    ```javascript
    {
        focusTarget: myFocusTarget,
        ariaLive: 'polite'
    }
    ```

1. **Read target information immediately**

    In your `focusParameters` function, return the following object:

    ```javascript
    {
        focusTarget: myFocusTarget,
        ariaLive: 'assertive'
    }
    ```

1. **Read all contents of the Quick View**

    In your template json file, add the following action:

    In your `focusParameters` function, return the following object:

    ```javascript
    {
        focusTarget: undefined,
        ariaLive: 'assertive'
    }
    ```

## Availability of focus feature

> [!NOTE]
> Currently this feature is not supported in teams mobile.

   Action     | Viva Connection Desktop | Viva Connections Mobile |  Browser
------------- | ----------------------- | ----------------------- | ---------
Focus Feature | Supported               | Not Supported           | Supported
