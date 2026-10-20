---
title: Upgrade to React 18 in SharePoint Framework 1.24
description: Upgrade a SharePoint Framework 1.23 project to SPFx 1.24 and React 18.3.1. Update dependencies, rendering, TypeScript definitions, and deployment packages.
ms.date: 10/19/2026
ms.topic: how-to
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Upgrade to React 18 in SharePoint Framework 1.24

SharePoint Framework (SPFx) 1.24 uses React 18.3.1, replacing React 17.0.1 in SPFx 1.23. This article explains how to update an existing React-based solution's dependencies, rendering code, tests, and deployment packages.

SPFx 1.23 and 1.24 both use the Heft-based toolchain, so this upgrade doesn't require a Gulp-to-Heft migration. Existing function components, class components, hooks, and JSX can generally remain in place. Updating the globally installed Yeoman generator alone doesn't update an existing solution.

> [!NOTE]
> The commands target SPFx 1.24 general availability (`1.24.0`). To test a prerelease, replace `1.24.0` with its exact version, such as `1.24.0-rc.0`, for the generator and all SPFx packages. Don't mix prerelease and general availability SPFx packages in the same solution.

## Prerequisites

- An existing SPFx 1.23.x React project that targets SharePoint Online. SPFx 1.24 isn't supported on SharePoint Server.
- A [supported development environment](set-up-your-development-environment.md). You can keep using Node.js 22.14.0 or later in the Node.js 22 line; moving to Node.js 24 or 26 isn't required for this upgrade.
- Access to a development tenant and the hosts that your solution supports, such as SharePoint, Teams, or Microsoft 365 Copilot.

The commands in this article use npm. Run project commands from the directory that contains `package.json`, except when generating the separate comparison project.

If your project still uses Gulp, first follow [Migrate from the Gulp-based to the Heft-based toolchain](toolchain/migrate-gulptoolchain-hefttoolchain.md).

## Version and API changes

| Area | SPFx 1.23 | SPFx 1.24 |
| --- | --- | --- |
| SPFx packages | Your existing 1.23.x version | 1.24.0 |
| `react` and `react-dom` | 17.0.1 | 18.3.1 |
| `@types/react` and `@types/react-dom` | 17.x | Compatible 18.x definitions |
| React rendering | `ReactDom.render(element, container)` | `createRoot(container)`, followed by `root.render(element)` |
| React cleanup | `ReactDom.unmountComponentAtNode(container)` | `root.unmount()` |
| Heft | 1.2.17 in the 1.23.2 template | 1.3.2, including any Heft override |
| TypeScript | ~5.8.0 in the 1.23.2 template | ~5.8.0 in the 1.24 template |
| Node.js | 22 | 22, 24, or 26 |

> [!IMPORTANT]
> Upgrade SPFx and React together. Installing React 18 into an SPFx 1.23 project, or using `react@latest`, isn't a supported substitute for upgrading the framework. Use the exact React version listed in the [SPFx compatibility reference](compatibility.md), not the latest React major version.

## Prepare the solution

1. Save your changes in source control and build the existing solution before changing dependencies. Keep a known-good package so you can compare behavior and roll back if necessary.

   ```console
   npm ci
   npm run build
   ```

   Use `npm install` instead of `npm ci` if the project doesn't yet have a lock file. Run any additional tests documented by your solution.

2. Install the generator for the target SPFx version.

   ```console
   npm install @microsoft/generator-sharepoint@1.24.0 --global
   ```

3. In a new, empty directory outside the existing solution, run the generator. Select the same component type as your solution and the React framework option where available.

   ```console
   yo @microsoft/sharepoint
   ```

   Compare the generated `package.json`, `tsconfig.json`, `eslint.config.js`, and `config` files with your solution. Don't generate over the existing project or replace its solution IDs, component IDs, properties, or custom configuration.

## Update dependencies

Use `npm pkg set` to update `package.json` before installing packages. This lets npm resolve the SPFx, React, and type-definition changes together, rather than trying to install an intermediate combination.

1. Update every SPFx package that your project already references to the same exact `1.24.0` version.

   The following commands cover the SPFx packages in a generated SPFx 1.23.2 React web part. Run only the commands for packages that your project uses, and keep each package in its existing `dependencies` or `devDependencies` section.

   ```console
   npm pkg set "dependencies.@microsoft/sp-core-library=1.24.0"
   npm pkg set "dependencies.@microsoft/sp-component-base=1.24.0"
   npm pkg set "dependencies.@microsoft/sp-property-pane=1.24.0"
   npm pkg set "dependencies.@microsoft/sp-webpart-base=1.24.0"
   npm pkg set "dependencies.@microsoft/sp-lodash-subset=1.24.0"
   npm pkg set "dependencies.@microsoft/sp-office-ui-fabric-core=1.24.0"
   npm pkg set "devDependencies.@microsoft/eslint-plugin-spfx=1.24.0"
   npm pkg set "devDependencies.@microsoft/eslint-config-spfx=1.24.0"
   npm pkg set "devDependencies.@microsoft/spfx-web-build-rig=1.24.0"
   npm pkg set "devDependencies.@microsoft/spfx-heft-plugins=1.24.0"
   npm pkg set "devDependencies.@microsoft/sp-module-interfaces=1.24.0"
   ```

   Also update any component-specific SPFx packages that your project references. Examples include `@microsoft/sp-application-base`, `@microsoft/sp-listview-extensibility`, `@microsoft/sp-dialog`, `@microsoft/sp-adaptive-card-extension-base`, and `@microsoft/sp-copilot-component`. Don't add packages for component types that your solution doesn't use.

2. Pin the React runtime and compatible React 18 type definitions.

   ```console
   npm pkg set "dependencies.react=18.3.1" "dependencies.react-dom=18.3.1"
   npm pkg set "devDependencies.@types/react=18.3.31" "devDependencies.@types/react-dom=18.3.7"
   ```

   Type definitions are versioned independently of the runtime; their patch versions don't have to match `18.3.1`. The example pins above also expose the `React.act` API used by React 18.3 unit tests. A generated project can use other compatible 18.x definitions. Don't install an unqualified latest type package, which might target a different React major version.

3. Align the toolchain dependencies and applicable overrides with the target template. For Heft, update both entries if your project has an override.

   ```console
   npm pkg set "devDependencies.@rushstack/heft=1.3.2" "overrides.@rushstack/heft=1.3.2"
   ```

   Don't assign the SPFx version to unrelated packages such as Fluent UI, TypeScript, or Heft. Compare the remaining development dependencies and overrides with the generated project instead of upgrading every package to its latest version.

4. Update existing `overrides` or Yarn `resolutions` that pin React 17 or its type definitions. For example, update the React type resolution if your project has the template's `resolutions` entry.

   ```console
   npm pkg set "resolutions.@types/react=18.3.31"
   ```

   npm doesn't enforce `resolutions`. Use npm's `overrides` only where needed and after checking the affected library's compatibility. If your solution includes shared React libraries that you maintain, also review their `peerDependencies` and verify React 18 support before changing their supported version ranges.

5. Install the updated dependency set and inspect the result.

   ```console
   npm install
   npm ls react react-dom @types/react @types/react-dom
   ```

Keep the updated lock file with the package changes. Investigate invalid peer dependencies or unexpected React/type-definition versions instead of using `--force` or `--legacy-peer-deps` to hide conflicts. Update or replace incompatible libraries with versions that support React 18; don't upgrade all dependencies indiscriminately.

SPFx packages can have their own transitive React dependencies. Don't force those internal dependencies to a different version just to make every entry in `npm ls` match. Keep your solution's direct React dependencies aligned with the compatibility reference, and let SPFx manage the framework-provided React libraries rather than adding a separate CDN copy.

## Review project configuration

Preserve your project's customizations while comparing these files with the target template:

| File or setting | What to review |
| --- | --- |
| `package.json` and CI configuration | Keep local and CI Node.js versions within the supported range. If you move to Node.js 24 or 26, update the project's `engines.node` restriction to match the target template. |
| `tsconfig.json` | Preserve the SPFx rig configuration and supported TypeScript version. React 18 doesn't require changing the rig's `jsx: "react"` setting to the automatic JSX transform. |
| `eslint.config.js` and `config/*.json` | Compare custom overrides with the updated rig. Include authored test and preview files in the appropriate TypeScript projects, but exclude generated bundles from linting. |
| `.yo-rc.json` | Update `version` under `@microsoft/generator-sharepoint` when the migration is complete. Keep existing solution and component identities; changing this metadata alone doesn't upgrade the project. |

If the solution generates Teams or Copilot packages, merge the target template's watch exclusions into `tsconfig.json`. These prevent regenerated package output from repeatedly triggering incremental builds:

```json
{
  "watchOptions": {
    "excludeDirectories": ["**/teams", "**/temp/copilot"]
  }
}
```

This is a configuration fragment, not a replacement for the existing `tsconfig.json`.

## Migrate React rendering and cleanup

Search the solution for imports from `react-dom`, calls to `render` or `unmountComponentAtNode`, and any wrappers around those calls. Include extensions, custom property pane controls, dialogs, local preview applications, and test helpers, not only the main web part.

React 18 introduces `createRoot` from `react-dom/client`. A root belongs to a particular DOM container. Create it once, reuse it for subsequent renders, and unmount it when that container is disposed.

### Update a React web part

In an SPFx 1.23 web part, the relevant code typically looks like this:

```typescript
import * as ReactDom from 'react-dom';

// In render():
ReactDom.render(element, this.domElement);

// In onDispose():
ReactDom.unmountComponentAtNode(this.domElement);
```

Use the following lifecycle pattern in SPFx 1.24. This minimal example renders a description; retain your existing React component, props, initialization, property pane, and theme handling when applying the pattern.

```typescript
import * as React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart
  extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private _root: Root | undefined;

  public render(): void {
    const element = React.createElement(
      'div',
      undefined,
      this.properties.description
    );

    if (!this._root) {
      this._root = createRoot(this.domElement);
    }

    this._root.render(element);
  }

  protected onDispose(): void {
    this._root?.unmount();
    this._root = undefined;
  }
}
```

Don't call `createRoot` on every `render()` invocation, or unmount before every update. Reusing the root allows React to update props without unnecessarily remounting the component or losing its state. After `root.unmount()`, that root can't render again; create a new root if a new lifecycle requires it.

Leaving `ReactDom.render` in place produces a deprecation warning and keeps that tree in React 17-compatible rendering behavior. A successful build alone doesn't prove that you've adopted React 18 rendering.

### Update other React entry points

Apply the same ownership rule wherever the solution mounts React:

| Component | Root ownership and cleanup |
| --- | --- |
| Form customizer | Keep a root for `this.domElement` and unmount it in `onDispose()`. |
| Field customizer | Keep a separate root for each `event.domElement`, for example in a `WeakMap<HTMLElement, Root>`. Unmount and remove the entry in `onDisposeCell()`. Don't share one root across cells. |
| Application customizer | Keep a root per placeholder container. Unmount it in that placeholder's `onDispose` callback, and create a new root if the placeholder is recreated. |
| Custom property pane control | Keep a root for each control container. Unmount it in the custom field's `onDispose` callback. |
| Custom dialog | Keep a root for the dialog's `this.domElement`. Unmount and clear it in `onAfterClose()` so that reopening the dialog creates a new root. |
| React-based HTML quick view | Keep a root for the quick view's `this.domElement`. Unmount and clear it in [`BaseWebQuickView.dispose()`](/javascript/api/sp-adaptive-card-extension-base/basewebquickview). |
| Copilot UX component | Keep a root for `this.context.domElement` and unmount it in `onTeardown()`. Preserve any existing base-class teardown and other resource cleanup. |

Preserve the existing base-class lifecycle calls and other resource cleanup when applying these changes. Adaptive Card views and components that don't mount React don't need a React root.

For components hosted in another document, continue passing the container's `ownerDocument` to libraries that require a target document, such as Fluent UI and Griffel. Changing the root API doesn't replace host-specific styling or theme integration.

## Update React components and tests

### Declare children explicitly

React 18 type definitions no longer add `children` implicitly to `React.FunctionComponent` props. Declare it when the component accepts child content:

```typescript
interface IPanelProps {
  title: string;
  children?: React.ReactNode;
}
```

Alternatively, use `React.PropsWithChildren<IPanelProps>`. For components that require child content, make `children` required. Fix the props contract rather than suppressing the error with a cast or disabling type checking.

If you encounter incompatible `ReactNode` or JSX component type errors, check for libraries that still depend on React 17 type definitions:

```console
npm explain @types/react
```

Update the incompatible library or its type definitions rather than suppressing the error. Also check that your own components use the updated props contracts.

### Review rendering assumptions

- **Automatic batching:** With `createRoot`, React also batches updates from promises, timers, and native event handlers. Use functional state updates when a new value depends on the previous state.
- **Render timing:** Don't assume the DOM has been updated immediately after `root.render()`. Move work that depends on committed DOM into an appropriate effect or ref callback. The new `root.render()` API doesn't accept the old render callback.
- **Strict Mode:** If your solution uses `React.StrictMode`, development builds run additional effect setup and cleanup checks. Make subscriptions, event listeners, timers, and other effects safe to clean up and recreate. `createRoot` doesn't automatically enable Strict Mode.
- **Third-party components:** Verify React 18 support for UI controls, charts, editors, state libraries, and testing tools. For example, updating React doesn't inherently require migrating from Fluent UI v8 to v9.

You don't need to adopt transitions, Suspense, or other new React features as part of this migration. Avoid adding `flushSync` around every render to preserve old timing assumptions.

### Update unit tests

If the solution has React unit tests, update mount, rerender, and unmount helpers together. Tests still using `ReactDom.render` exercise legacy rendering behavior. Use `act` from `react`, rather than `react-dom/test-utils`, with compatible 18.3 type definitions, and wait for asynchronous work before asserting on the DOM.

For direct React DOM unit tests, enable `IS_REACT_ACT_ENVIRONMENT` in the test setup. In an SPFx Heft project, a `config/jest.config.json` can extend the existing rig configuration:

```json
{
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/jest.config.json",
  "globals": {
    "IS_REACT_ACT_ENVIRONMENT": true
  }
}
```

Merge this with any existing Jest configuration instead of replacing project-specific settings. Don't add this test-only flag to production code or suppress React warnings to make tests pass.

For a direct DOM test, wrap rendering and cleanup in `act`:

```typescript
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const { act } = React;

test('renders with a React 18 root', async () => {
  const container = document.createElement('div');
  const root = createRoot(container);

  try {
    await act(async () => {
      root.render(React.createElement('div', undefined, 'Hello, SharePoint'));
    });

    expect(container.textContent).toBe('Hello, SharePoint');
  } finally {
    await act(async () => {
      root.unmount();
    });
  }
});
```

## Build and validate in the target host

1. Before generating the release package, increment `solution.version` in `config/package-solution.json`. This value has four parts, such as `1.1.0.0`. Keep existing solution and component IDs.

   If the solution includes a Teams or Copilot app, also follow its manifest versioning process. The authored Teams manifest, such as `copilot/manifest.json`, uses a three-part `version`, such as `1.1.0`. Preserve the app ID and regenerate the app package instead of editing a generated ZIP file.

   For Copilot UX components upgraded from an earlier SPFx 1.24 preview, also review the [SPFx 1.24 release notes](release-1.24.0.md) for agent manifest and dynamic MCP tool-discovery changes. Update custom package validators for the target release's generated format instead of restoring older generated plugin content.

2. Verify that the updated lock file supports a clean install, then run the project's production build and tests.

   ```console
   npm ci
   npm run build
   ```

   The standard Heft-based React template's build script runs `heft test --clean --production` followed by `heft package-solution --production`. Preserve any additional checks in your project's build script. A project without tests can still complete that script successfully; add or run the tests appropriate to your solution.

3. Inspect the generated manifests in `dist`. For components that import React and `react-dom/client`, the corresponding entries in `loaderConfig.scriptResources` should reference the SPFx-provided component resources at version `18.3.1`. Don't edit generated manifests to correct a dependency problem; correct the source or package configuration and rebuild.

4. Use `npm start` to debug with your configured SharePoint or Copilot workbench. Validate the packaged solution in every host it supports, including SharePoint pages, Teams, Viva Connections, or Microsoft 365 Copilot as applicable.

Before releasing, check the following:

- Initial rendering, data loading, forms, and user interactions still work.
- Property, theme, size, and display-mode changes update the existing tree without unexpectedly resetting state.
- Multiple instances work independently. Removing and re-adding a component cleans up its React root, subscriptions, and event handlers.
- Dialogs, menus, portals, focus handling, and styles work in the host document.
- The browser console has no legacy-render, duplicate-root, invalid-hook-call, or unhandled-error warnings.

Deploy the versioned `.sppkg` and any associated Teams or Copilot app updates through your normal app catalog process. Complete tenant testing before replacing the production package; local builds and browser previews don't validate host integration.

## See also

- [SPFx 1.24 release notes](release-1.24.0.md)
- [SPFx compatibility reference](compatibility.md)
- [Update SharePoint Framework packages](toolchain/update-latest-packages.md)
- [Heft-based SPFx toolchain](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)
- [React 18 upgrade guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
