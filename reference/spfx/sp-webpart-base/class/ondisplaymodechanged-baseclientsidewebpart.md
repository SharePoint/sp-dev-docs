# onDisplayModeChanged(oldDisplayMode)



This API is called when the display mode of a web part is changed. The default implementation of this API calls the web part render method to re-render the web part with the new display mode. If a web part developer does not want a full re-render to happen on display mode change, they can override this API and perform specific updates to the web part DOM to switch its display mode.

**Signature:** _@virtual protected on[DisplayMode](../../sp-core-library/enum/displaymode.md)Changed(oldDisplayMode: DisplayMode): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `oldDisplayMode`    | [`DisplayMode`](../../sp-core-library/enum/displaymode.md) | The old display mode. |


