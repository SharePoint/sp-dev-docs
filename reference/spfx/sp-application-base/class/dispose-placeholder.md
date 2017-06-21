# dispose()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Diposes the attached DOM tree.

**Signature:** _public dispose(): void;_

**Returns**: `void`





#### Parameters
None


### Remarks

This method can be called to immediately dispose the attached DOM element. Otherwise, it will be disposed by the application when the placeholder is disposed. Calling dispose() invokes the IPlaceholderAttachOptions.onDispose() callback, removes the attached DOM element from the DOM, and assigns DOM element to undefined.

