---
title: Display modes in SharePoint Copilot components
description: Learn how the inline and fullscreen display modes work in SharePoint Copilot components and what your component must do to switch between them.
ms.date: 07/09/2026
ms.localizationpriority: high
---

# Display modes in SharePoint Copilot components

> Status: preview - based on the in-development SPFx Copilot Component model. APIs may change before general availability.

A Copilot component can render in two layouts inside Microsoft 365 Copilot:

- **`inline`** - a compact layout that sits within the Copilot conversation flow. This is the default.
- **`fullscreen`** - an expanded layout that takes over the full Copilot surface.

This article explains how the current mode is delivered to your component and what you need to do to flip it.

## How the current mode reaches your component

The active mode is a field on the **host context**, `this.hostContext.displayMode`. The host delivers it at initialization and keeps it up to date. Whenever it changes, the base class re-renders your component automatically, so you should read it fresh on every render instead of caching it:

```ts
protected render(): void {
  const displayMode: string = this.hostContext.displayMode || 'unknown';
  const isFullscreen: boolean = this.hostContext.displayMode === 'fullscreen';
  // ...use these values to drive what you render
}
```

## Declare the modes you support

A component only renders in the modes it advertises in its manifest through the `availableDisplayModes` capability:

```json
// HelloCopilotCopilotComponent.manifest.json (excerpt)
"capabilities": {
  "availableDisplayModes": ["inline", "fullscreen"]
}
```

Never request a mode the host has not advertised in `this.hostContext.availableDisplayModes`.

## Flipping the mode

The transition is asymmetric - each direction is owned by a different party:

| You want to...                          | Who does it | How                                                          |
| --------------------------------------- | ----------- | ----------------------------------------------------------- |
| Expand from inline to fullscreen        | Component   | `await this.requestDisplayModeAsync('fullscreen')`          |
| Collapse from fullscreen back to inline | Host only   | You do nothing. The host notifies you when the user does it. |
| React to any mode change                | Framework   | It re-renders automatically; read `this.hostContext.displayMode`. |

### Inline to fullscreen (your job)

Call `requestDisplayModeAsync('fullscreen')`. The method only accepts `'fullscreen'` - it is the single mode you can request:

```ts
private _handleRequestFullscreen = async (): Promise<void> => {
  try {
    const result = await this.requestDisplayModeAsync('fullscreen');
    console.log('[HelloCopilot] requestDisplayModeAsync result:', result);
  } catch (error) {
    console.error('[HelloCopilot] Failed to switch to fullscreen:', error);
  }
};
```

Do not optimistically change any local state after calling it. The host may honor or deny the request. Either way, the next host-context update carries the real mode, the base class re-renders, and your next render sees the truth.

### Fullscreen to inline (the host's job)

There is no API to collapse. The user clicks the host's own collapse control, and your component simply re-renders with `displayMode` back to `'inline'`. Design your UI so that the way out of fullscreen is clearly the host's control, not a close button of your own.

## No native button or icon - you own the control

> [!IMPORTANT]
> The Copilot host does **not** provide a built-in "expand" button or icon inside your component. The developer is fully responsible for rendering whatever affordance triggers the switch to fullscreen and wiring it to `requestDisplayModeAsync('fullscreen')`.
>
> Design guidance and recommended visuals for this control will be provided by the time the feature reaches general availability.

The sample renders its own expand button and only shows it when the component is not already in fullscreen:

```ts
const isFullscreen: boolean = this.hostContext.displayMode === 'fullscreen';

const expandHtml: string = isFullscreen
  ? ''
  : `<button type="button" id="hc-expand" title="Expand to fullscreen" aria-label="Expand to fullscreen">${EXPAND_ICON}</button>`;

// after setting innerHTML, wire up the handler:
const expandButton = this.context.domElement.querySelector('#hc-expand');
if (expandButton) {
  expandButton.addEventListener('click', this._handleRequestFullscreen);
}
```

## Rules to remember

1. **Read the mode from `this.hostContext.displayMode`** on every render. Do not cache it.
2. **Only request `'fullscreen'`.** Collapsing is host-initiated.
3. **Respect `availableDisplayModes`.** Do not offer a transition the host has not advertised.
4. **Render your own trigger.** There is no native button - the developer controls it, with design guidance coming at GA.
