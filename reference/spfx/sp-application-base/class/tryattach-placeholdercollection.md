# tryAttach(name,options)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Searches for a content placeholder with the specified name. If none is found, then the function returns undefined. If one is found, we try to attach to it. If the caller tries to re-attached a placeholder, an exception will be thrown. A dispose has to happen before re-attach can happen.

**Signature:** _public tryAttach(name: string,
    options?: [I[Placeholder](../../sp-application-base.api/class/placeholder.md)AttachOptions](../../sp-application-base.api/interface/iplaceholderattachoptions.md)): Placeholder | undefined;_

**Returns**: [`Placeholder `](../../sp-application-base.api/class/placeholder.md),` undefined`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | logical name of the placeholder. This name should not be confused with the DOM id or the attribute value of the placeholder. |
| `options`    | [`IPlaceholderAttachOptions`](../../sp-application-base.api/interface/iplaceholderattachoptions.md) | _Optional._ placeholder options. |


### Remarks

The host application makes no guarantees about the availability of a given placeholder. In situations where an expected placeholder is not available, the third party extension must handle it gracefully, e.g. by not rendering anything, or by choosing an alternative placeholder.

