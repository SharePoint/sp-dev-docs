# prompt(message,defaultValue)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Prompts the user for a string value with a user-friendly interface. Calling this method sends a request to application to show the dialog.

**Signature:** _public static prompt(message: string, options?: [IPromptOptions](../../sp-dialog.api/interface/ipromptoptions.md)): [Promise](../../web-apis.api/class/promise.md)<string | undefined>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<string ,` undefined>`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `message`    | `string` | The message for prompt dialog |
| `defaultValue`    |  | The default value for the input text field |


### Remarks

There might be a delay until the dialog is approved and shown by the application, for example, if there is another dialog currently being shown. The returned promise resolves when the dialog is successfully shown and closed. The promise rejects if the application rejects the request for any reason.

