---
title: "Neutral Theme Framework & Design Rules for SharePoint"
description: "Learn about the Neutral Theme principles and how to implement them in your SharePoint Framework web parts."
ms.date: 02/10/2026
ms.localizationpriority: high
---

# SharePoint Theme Framework & Design Rules

To ensure a cohesive and consistent user experience across SharePoint sites, custom controls and web parts should adhere to the **SharePoint Theme Framework**. This framework aims to rationalize theming for transient surfaces like property panes, drawers, and dialogs.

## The Philosophy

The core principle for **Property Pane controls** is simple: **they should not use the custom site theme**. Instead, these controls must always follow the **DOM tree property pane theme**, which is controlled internally by SharePoint.

This approach ensures that property panes remain consistent with the overall application chrome regardless of the specific site's branding.

## Technical Implementation with Fluent UI v9

Developers are strongly encouraged to use **Fluent UI v9** components for all new custom controls. If you are currently using Fluent UI v8 (formerly Office UI Fabric), consider migrating to v9 to take advantage of the latest design tokens and performance improvements.

You can explore the available components and their usage in the [Fluent UI v9 Components Storybook](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs). This resource provides interactive examples and documentation for all v9 controls.

### Using Design Tokens

Hardcoded hex values for colors (e.g. `#0078d4`) are **strictly forbidden**. Similarly, **Legacy v8 color tokens** (such as classes like `ms-color-neutralPrimary` or variables) should no longer be used. You must use Fluent UI v9 Design Tokens to handle theming logic. This ensures your control automatically adapts to the environment it is running in (Light/Dark mode, High Contrast, etc.).

If you have existing controls using v8 color tokens, you should update them to the corresponding v9 tokens. You can find the legacy-to-v9 mapping here: [Fluent UI v8 to v9 Color Token Mapping](https://github.com/microsoft/fluentui/blob/2d6aca289ee6cc4571e4e3dcdf810deb78ac18fa/apps/public-docsite-v9/src/shims/ThemeShim/v9ThemeShim.ts#L14C1-L14C80).

### Code Example: Custom Property Pane Control

Here is an example of how to build a custom React component for the property pane using Fluent UI v9 and Design Tokens.

**1. Install Dependencies**

First, ensure you have the Fluent UI v9 packages installed:

```console
npm install @fluentui/react-components @fluentui/react-icons
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

// Define props for the component
export interface IAsyncDropdownProps {
  label: string;
  loadOptions: () => Promise<Array<{ key: string | number; text: string }>>;
  onChanged: (option: { key: string | number; text: string }) => void;
  selectedKey: string | number;
  disabled: boolean;
}

// Use makeStyles with Design Tokens for theming support
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    backgroundColor: tokens.colorNeutralBackground1, // Use token for background
  },
  label: {
    paddingTop: '5px',
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1, // Use token for text
  },
  spinner: {
    marginTop: '10px',
  },
  error: {
    color: tokens.colorPaletteRedForeground1, // Use token for error text
    marginTop: '5px',
  }
});

const AsyncDropdown: React.FC<IAsyncDropdownProps> = (props) => {
  const styles = useStyles();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<{ key: string | number; text: string }>>([]);
  const [error, setError] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setLoading(true);
    props.loadOptions()
      .then((opts) => {
        setLoading(false);
        setOptions(opts);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.toString());
      });
  }, [props.disabled]);

  const onSelect = (event: SelectionEvents, data: OptionOnSelectData): void => {
    const selectedOption = options.find(o => o.key.toString() === data.optionValue);
    if (selectedOption) {
      props.onChanged(selectedOption);
    }
  };

  const selectedValue = props.selectedKey ? props.selectedKey.toString() : undefined;
  const selectedText = options.find(o => o.key.toString() === selectedValue)?.text;

  return (
    <div className={styles.root}>
      {props.label && <label className={styles.label}>{props.label}</label>}
      <Dropdown
        disabled={props.disabled || loading || !!error}
        onOptionSelect={onSelect}
        value={selectedText || ''}
        selectedOptions={selectedValue ? [selectedValue] : []}
        placeholder="Select an option"
      >
        {options.map((option) => (
          <Option key={option.key} value={option.key.toString()}>
            {option.text}
          </Option>
        ))}
      </Dropdown>
      
      {loading && (
        <div className={styles.spinner}>
            <Spinner size="tiny" label="Loading options..." />
        </div>
      )}
      
      {error && (
        <div className={styles.error}>
            Error: {error}
        </div>
      )}
    </div>
  );
};

export default AsyncDropdown;
```

By following these standards, your custom controls will feel native to SharePoint and align with the internal property pane theming automatically.

## References

- [Fluent UI v8 to v9 Color Token Mapping](https://github.com/microsoft/fluentui/blob/2d6aca289ee6cc4571e4e3dcdf810deb78ac18fa/apps/public-docsite-v9/src/shims/ThemeShim/v9ThemeShim.ts#L14C1-L14C80)
- [Fluent UI v9 Components Storybook](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs)
