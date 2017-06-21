# render()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The render method must be implemented to render the content of the dialog in the conrainer element provided by the framework. Use this.domElement to access this container. The container is inside a modal rendered in the center of the page on top of a dark overlay.

**Signature:** _protected abstract render(): void;_

**Returns**: `void`





#### Parameters
None


### Remarks

The render method is called once after the modal element is created and opened. It is recommended to use onOpen() for doing non-UI preperations for your rendering that might take a long time. This will ensure that the framework can show a friendly UI such as a spinner to let the user know that the dialog is being prepared. If you choose to do your initialization or other costly operations inside render method, make sure to have a friendly UI so the user is informed about the state of your dialog. Otherwise, an empty element is shown to the user which is a bad user experience practice.

