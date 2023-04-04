---
title: Adding support for web part Top Actions
description: Top Actions is a SharePoint Framework feature that allows web part developers to add commands to a web part's toolbar
ms.date: 04/04/2023
ms.localizationpriority: high
---

# Adding support for web part Top Actions

Top actions provide an alternative and more end user friendlier way to expose the different options and configuration capabilities for web parts in edit mode. You can use top actions to surface most common configurations from the web part property panel directly in web part toolbar, which is exposed when the page is edited.

![Top Actions Example](../../../images/webpart-top-actions.png)

## Getting started

> [!TIP]
> These instructions assume you know [how to create a hello world web part](../get-started/build-a-hello-world-web-part.md).

### Define your Top Action configurations

The example below defines the callback function that will be used to pull the configurations for our Top Action commands.

> [!NOTE]
> `getTopActionsConfiguration` must be defined as public on your web part's class.

```typescript
import { ITopActions } from '@microsoft/sp-top-actions';

public getTopActionsConfiguration(): ITopActions | undefined {
  return {
    topActions: [],
    onExecute: (actionName: string, newValue: any) => {}
  };
}
```

### Define your toolbar's user interface

The `topActions` array is an ordered list of controls to render in the web part toolbar. The example below defines one top action as a button interface.

```typescript
import { ITopActions, TopActionsFieldType } from '@microsoft/sp-top-actions';

return {
  topActions: [
    {
      targetProperty: 'reset',
      properties: {
        icon: 'Reset'
      },
      type: TopActionsFieldType.Button
    }
  ]
  ...
}
```

### Execute the command when the user interacts

The previous step demonstrated how to get a button to display in the web part's toolbar. This step shows how to perform an action when the user selects the button. `actionName` was defined as `targetProperty` in the last step and since this is a button that can ignore the `newValue` that comes in.

```typescript
return {
  ...
  onExecute: (actionName: string, newValue: any) => {
    if (actionName === 'reset') {
      // user defined logic to reset the web part
      this.reset();
    }
  }
}
```

> [!TIP]
> Common pitfall when implementing the `onExecute` command, is not syncing the new state with the web part properties and/or not refreshing or re-rendering the web part.

## Code Snippets

### Button command

The type interface for a button is similar to the property panel's button (`IPropertyPaneButtonProps`).

```typescript
import { ITopActions, TopActionsFieldType } from '@microsoft/sp-top-actions';
...
public getTopActionsConfiguration(): ITopActions | undefined {
  return {
    topActions: [
      {
        targetProperty: 'reset',
        type: TopActionsFieldType.Button,
        properties: {
          text: 'Reset',
          icon: 'Reset'
        }
      }
    ],
    onExecute: (actionName: string, newValue: any) => {
      if (actionName === 'reset') {
        // user defined logic to reset the web part
        this.reset();
      }
    }
  };
}
```

### Drop-down command

The type interface for a drop-down is similar to the property panel's choice group (`IPropertyPaneChoiceGroupOption`).

```typescript
import { ITopActions, TopActionsFieldType } from '@microsoft/sp-top-actions';
...
public getTopActionsConfiguration(): ITopActions | undefined {
  return {
    topActions: [{
      targetProperty: 'layout',
      type: TopActionsFieldType.ChoiceGroup,
      properties: {
        options: [
          {
            // key maps to newValue in onExecute
            key: 'card',
            text: 'Card Layout',
            imageSize: { width: 32, height: 32 },
            iconProps: { officeFabricIconFontName: 'ArticlesIcon' },
            checked: this.state.layout === 'card'
          },
          {
            key: 'list',
            text: 'List Layout',
            imageSize: { width: 32, height: 32 },
            // you can use iconProps, icon to define icons
            icon: 'List',
            checked: this.state.alignment === 'list'
          }
        ]
      }
    }],
    // for ChoiceGroup drop-down, the newValue tells us which option's key was selected
    onExecute: (actionName: string, newValue: any) => {
      if (actionName === 'layout') {
        this.setLayout(newValue);
        this.render();
      }
    }
  };
}
```

## Advanced configurations

For advanced configurations of your top action commands, see the type definitions from `@microsoft/sp-top-actions`.


```typescript
import { ITopActions, ITopActionsButtonProps, ITopActionsDropdownProps } from '@microsoft/sp-top-actions';
```

### See more

[Top Actions API](/javascript/api/sp-top-actions)
