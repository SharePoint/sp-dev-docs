# onOpen()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

This method is called before the render method and can be overridden to make preparations for rendering. The loading indicator is displayed during the lifetime of this method.

**Signature:** _@virtual protected onOpen(): [Promise](../../web-apis.api/class/promise.md)<void>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<void>



A promise that resolves when the operations are done and the dialog is ready to render. If the promise is rejected, the dialog will not be rendered and onClose() will not be called.

#### Parameters
None


### Remarks

All resource allocations in onOpen() should be properly disposed in onClose() to a avoid memory leak.

