---
title: Display modes in Copilot UX components
description: Learn how the inline and fullscreen display modes work in Copilot UX components and what your component must do to switch between them.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Display modes in Copilot UX components

A Copilot component can render in two layouts inside Microsoft 365 Copilot:

- **`inline`** - a compact layout that sits within the Copilot conversation flow. This is the fallback when no supported fullscreen startup preference is granted.
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

### Choose the initial mode

Set `capabilities.defaultDisplayMode` in the component manifest to `inline` or `fullscreen`. The value must also appear in `availableDisplayModes`; otherwise it is ignored.

For a supported fullscreen preference, SPFx requests fullscreen once for the logical invocation and uses the mode the host grants. Don't assume a requested mode was granted. After initialization, the host's mode updates are authoritative.

When the user closes the fullscreen view, don't automatically request fullscreen again during rendering. Leave the conversation inline until the user explicitly chooses to reopen the component. The default is a startup preference, not a rule to enforce on every render.

## Flipping the mode

The transition is asymmetric - each direction is owned by a different party:

| You want to...                          | Who does it | How                                                          |
| --------------------------------------- | ----------- | ----------------------------------------------------------- |
| Expand from inline to fullscreen        | Component   | `await this.requestDisplayModeAsync('fullscreen')`          |
| Collapse from fullscreen back to inline | Host only   | You do nothing. The host notifies you when the user does it. |
| React to any mode change                | Framework   | It re-renders automatically; read `this.hostContext.displayMode`. |

### Inline to fullscreen (your job)

Call `requestDisplayModeAsync('fullscreen')` for the supported expansion workflow shown here. Treat the host's returned mode as authoritative:

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

Let the user use the host's own collapse control. Your component re-renders with `displayMode` back to `'inline'`. Don't rely on an SDK type accepting a value as proof that every host supports that transition. Design the way out of fullscreen around the host's control.

## No native button or icon - you own the control

> [!IMPORTANT]
> The Copilot host does **not** provide a built-in "expand" button or icon inside your component. The developer is fully responsible for rendering whatever affordance triggers the switch to fullscreen and wiring it to `requestDisplayModeAsync('fullscreen')`.
>
> Use a labeled, keyboard-accessible control and show it only when fullscreen is available. Follow [Theme and design for the Copilot canvas](theme-and-design.md).

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
4. **Render your own trigger.** Use the [theme and design guidance](theme-and-design.md) for an accessible expand control.
