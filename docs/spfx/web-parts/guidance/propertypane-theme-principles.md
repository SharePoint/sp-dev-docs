---
title: "Propertypane control theme and design rules"
description: "Learn about the propertypane control theme principles and how to implement them in your SharePoint Framework web parts."
ms.date: 02/10/2026
ms.localizationpriority: high
---

# Propertypane control theme and design rules

To ensure a cohesive and consistent user experience across SharePoint sites, property pane custom controls should adhere to the **SharePoint Theme Framework**. This framework aims to rationalize theming for transient surfaces like property panes, drawers, and dialogs.

## The Philosophy

The core principle for **Property Pane controls** is simple: **they should not use the custom site theme**. Instead, these controls should always follow the **DOM tree property pane theme**, which is controlled internally by SharePoint.

This approach ensures that property panes remain consistent with the overall application chrome regardless of the specific site's branding.

## Technical Implementation with Fluent UI v9

Developers are strongly encouraged to use **Fluent UI v9** components for all new custom controls. Fluent UI v9 components can automatically detect and use the theme from the SharePoint property pane framework, while Fluent UI v8 components rely on React context and cannot access the property pane theme. If you are currently using Fluent UI v8 (formerly Office UI Fabric), consider migrating to v9. Controls built with v8 will use the site theme instead, which can cause visual misalignment with other property pane controls and may lead to accessibility issues.

You can explore the available components and their usage in the [Fluent UI v9 Components Storybook](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs). This resource provides interactive examples and documentation for all v9 controls.

### Using Design Tokens

Hardcoded hex values for colors (e.g. `#0078d4`) should be avoided. Similarly, **Legacy v8 color tokens** (such as classes like `ms-color-neutralPrimary` or variables) should no longer be used. You should use Fluent UI v9 Design Tokens to handle theming logic. This ensures your control follows the theme from the SharePoint property pane framework.

If you have existing controls using v8 color tokens, you should update them to the corresponding v9 tokens. You can find the legacy-to-v9 mapping here: [Fluent UI v8 to v9 Color Token Mapping](https://github.com/microsoft/fluentui/blob/2d6aca289ee6cc4571e4e3dcdf810deb78ac18fa/apps/public-docsite-v9/src/shims/ThemeShim/v9ThemeShim.ts#L14C1-L14C80).

### Code Example: Custom Property Pane Control

Here is an example of how to build a custom asynchronous dropdown React component for the property pane using Fluent UI v9 and Design Tokens. This example is based on the pattern from [Build custom controls for the property pane](./build-custom-property-pane-controls.md), updated to use Fluent UI v9.

**1. Install Dependencies**

First, ensure you have the Fluent UI v9 packages installed:

```console
npm install @fluentui/react-components
```

**2. Create the Component**

This component uses `makeStyles` for styling and directly references the design tokens.

```typescript
import * as React from 'react';
import {
  Dropdown,
  Option,
  Spinner,
  makeStyles,
  tokens,
  SelectionEvents,
  OptionOnSelectData
} from '@fluentui/react-components';
import { IDropdownOption } from '@fluentui/react/lib/Dropdown';

export interface IAsyncDropdownProps {
  label: string;
  loadOptions: () => Promise<IDropdownOption[]>;
  onChanged: (option: IDropdownOption, index?: number) => void;
  selectedKey: string | number;
  disabled: boolean;
  stateKey: string;
}

export interface IAsyncDropdownState {
  loading: boolean;
  options: IDropdownOption[] | undefined;
  error: string | undefined;
}

// Use makeStyles with Design Tokens for theming support
const useStyles = makeStyles({
  label: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  error: {
    color: tokens.colorPaletteRedForeground1,
  }
});

const AsyncDropdown: React.FC<IAsyncDropdownProps> = (props) => {
  const styles = useStyles();
  const [state, setState] = React.useState<IAsyncDropdownState>({
    loading: false,
    options: undefined,
    error: undefined
  });

  const loadOptions = React.useCallback(() => {
    setState({
      loading: true,
      error: undefined,
      options: undefined
    });

    props.loadOptions()
      .then((options: IDropdownOption[]) => {
        setState({
          loading: false,
          error: undefined,
          options: options
        });
      })
      .catch((error: any) => {
        setState({
          loading: false,
          error: error.toString(),
          options: undefined
        });
      });
  }, [props.loadOptions]);

  React.useEffect(() => {
    loadOptions();
  }, [props.disabled, props.stateKey, loadOptions]);

  const onOptionSelect = (event: SelectionEvents, data: OptionOnSelectData): void => {
    const selectedOption = state.options?.find(o => o.key.toString() === data.optionValue);
    if (selectedOption) {
      props.onChanged(selectedOption, state.options?.indexOf(selectedOption));
    }
  };

  const selectedValue = props.selectedKey?.toString();
  const selectedText = state.options?.find(o => o.key.toString() === selectedValue)?.text;

  return (
    <div>
      {props.label && <label className={styles.label}>{props.label}</label>}
      <Dropdown
        disabled={props.disabled || state.loading || !!state.error}
        onOptionSelect={onOptionSelect}
        value={selectedText || ''}
        selectedOptions={selectedValue ? [selectedValue] : []}
        placeholder="Select an option"
      >
        {state.options?.map((option) => (
          <Option key={option.key} value={option.key.toString()}>
            {option.text}
          </Option>
        ))}
      </Dropdown>

      {state.loading && <Spinner size="tiny" label="Loading options..." />}

      {state.error && (
        <div className={styles.error}>
          Error while loading items: {state.error}
        </div>
      )}
    </div>
  );
};

export default AsyncDropdown;
```

This example shows how to use Fluent UI v9 components with design tokens. The component automatically follows the SharePoint property pane framework theme.
