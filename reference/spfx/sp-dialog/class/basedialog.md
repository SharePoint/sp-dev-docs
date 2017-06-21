# BaseDialog class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The base class for implementing dialogs in SharePoint Framework. This provides a supported way for showing dialogs to the user inside SharePoint Framework components.


## Constructor
Constructor for the BaseDialog class. It is important to keep the constructor lightweight. Use onOpen() for doing heavy-weight initializations that are needed for rendering the dialog such as resource allocations and asynchronous calls to fetch data. You can use the constructor to set initial parameters of your dialog such as references to resources in your application. The reason for this is that dialogs are usually constructed upon a UI event e.g. a button click, but the dialog may not always be shown right after construction. Keeping the constructor lightweight ensures smooth user experience and avoids doing throw-away work in case the dialog is not shown later e.g. if the framework rejects it. Another benefit of doing this is avoiding memory leaks by doing all the allocations and disposals in symmetric onOpen() and onClose() events. If you allocate unmanaged resources in the constructor, you have a memory leak because there is no guarantee onClose() will get called, and onClose() is your only opportunity to dispose. Example: constructor(cacheReference: any) { super(); this._cache = cacheReference; // This is okay. Keeping a reference to my internal cache. this._cache.refresh(); // This is bad practice. // If you need to refresh the cache (or fetch data) for rendering, do it in onOpen() }

**Signature:** _constructor();_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`domElement`     | `public` | `HTMLElement` | _Read-only._ Use this property to access the container element provided by the framework for rendering. |
|`isHidden`     | `public` | `boolean` | _Read-only._ If the dialog is visually hidden. This happens when the dialog goes behind a secondary dialog. Note that this is different from closed, because the dialog still has the permission to show and will eventually unhide. This returns false if the dialog is closed. |
|`isOpen`     | `public` | `boolean` | _Read-only._ If the dialog is visually open. This returns true during onOpen() because there is a visual component. It returns false when the dialog is hidden. |
|`isSecondary`     | `public` | `boolean` | _Read-only._ If the dialog is a secondary dialog. This means that there is another dialog hidden behind this dialog. |
|`secondaryDialog`     | `public` | [`SecondaryDialog `](../../sp-dialog/class/secondarydialog.md),` undefined` | _Read-only._ An active dialog is permitted to show a secondary dialog on top of itself. By design, only two layers of dialogs are permitted. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`close()`](close-basedialog.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<void> | Close the dialog. This will void the permission to show for this dialog. Every dialog should have a mechanism to eventually close to avoid blocking the user interface. If called on an inactive dialog it will abort the request to show. |
|[`getConfig()`](getconfig-basedialog.md)     | `public` | [`IDialogConfiguration`](../../sp-dialog/interface/idialogconfiguration.md) | Optionally, subclasses can override the getConfig() method to customize various configuration settings that affect how a dialog is displayed. |
|[`onClose()`](onclose-basedialog.md)     | `protected` | `void` | This method is called after the dialog is visually closed and gives an opprotunity for doing clean up. The dialog lifecycle completes after closing and there should be no unmanaged resources left inside the object. Even though the dialog may be revived again for a new lifecycle using show() method, this is considered a whole new lifecycle that should reallocate its own resources. If there are any resources that you would like to keep for multiple lifecycles, consider allocating it outside the dialog object and passing its reference to the dialog constructor. |
|[`onOpen()`](onopen-basedialog.md)     | `protected` | [`Promise`](../../web-apis/class/promise.md)<void> | This method is called before the render method and can be overridden to make preparations for rendering. The loading indicator is displayed during the lifetime of this method. |
|[`render()`](render-basedialog.md)     | `protected` | `void` | The render method must be implemented to render the content of the dialog in the conrainer element provided by the framework. Use this.domElement to access this container. The container is inside a modal rendered in the center of the page on top of a dark overlay. |
|[`show(options)`](show-basedialog.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<void> | Request the framework to show this dialog. |





### Remarks

Extend this class to create dialogs for SharePoint Framework. By following the guidelines in implementation, the framework can ensure that the dialogs are shown in a user-friendly manner. While the content of the dialog is controlled by this class by implementing the render method, the framework can decide when to show the dialog and how to render the overlay and modal. The application on the page can also have control on allowing dialogs to show. Refer to the documentation of the individual methods and properties to learn more about how to extend and use this class.

