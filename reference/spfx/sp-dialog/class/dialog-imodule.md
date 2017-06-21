# Dialog class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Static Dialog class to provide API for showing static dialogs such as alert and prompt






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`alert(message)`](alert-dialog.md)     | `public, static` | [`Promise`](../../web-apis.api/class/promise.md)<void> | Alerts a message to the user with a user-friendly interface. Calling this method sends a request to application to show the alert dialog. |
|[`prompt(message,defaultValue)`](prompt-dialog.md)     | `public, static` | [`Promise`](../../web-apis.api/class/promise.md)<string ,` undefined>` | Prompts the user for a string value with a user-friendly interface. Calling this method sends a request to application to show the dialog. |





