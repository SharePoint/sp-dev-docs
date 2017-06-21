# alert(message)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Alerts a message to the user with a user-friendly interface. Calling this method sends a request to application to show the alert dialog.

**Signature:** _public static alert(message: string, options?: [IAlertOptions](../../sp-dialog.api/interface/ialertoptions.md)): [Promise](../../web-apis.api/class/promise.md)<void>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<void>





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `message`    | `string` | The message to alert |


### Remarks

There might be a delay until the dialog is approved and shown by the application, for example, if there is another dialog currently being shown. The returned promise resolves when the dialog is successfully shown and closed. The promise rejects if the application rejects the request for any reason.

