# onClose()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

This method is called after the dialog is visually closed and gives an opprotunity for doing clean up. The dialog lifecycle completes after closing and there should be no unmanaged resources left inside the object. Even though the dialog may be revived again for a new lifecycle using show() method, this is considered a whole new lifecycle that should reallocate its own resources. If there are any resources that you would like to keep for multiple lifecycles, consider allocating it outside the dialog object and passing its reference to the dialog constructor.

**Signature:** _@virtual protected onClose(): void;_

**Returns**: `void`





#### Parameters
None


