# close()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Close the dialog. This will void the permission to show for this dialog. Every dialog should have a mechanism to eventually close to avoid blocking the user interface. If called on an inactive dialog it will abort the request to show.

**Signature:** _public close(): [Promise](../../web-apis/class/promise.md)<void>;_

**Returns**: [`Promise`](../../web-apis/class/promise.md)<void>



A promise that resolves when the dialog is visually closed, or if it was already closed

#### Parameters
None


