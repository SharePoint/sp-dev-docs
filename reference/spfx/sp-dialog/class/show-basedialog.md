# show(options)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Request the framework to show this dialog.

**Signature:** _public show(options?: [IDialogShowingOptions](../../sp-dialog.api/interface/idialogshowingoptions.md)): [Promise](../../web-apis.api/class/promise.md)<void>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<void>



A promise that resolves once the dialog is successfully closed (after being shown). The promise rejects if the request is rejected or aborted.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `options`    | [`IDialogShowingOptions`](../../sp-dialog.api/interface/idialogshowingoptions.md) | _Optional._ Dialog showing options |


