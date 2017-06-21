# SecondaryDialog class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

This class handles calls to show a secondary dialog. It's only available by calling this.secondaryManager inside a dialog.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`alert(options)`](alert-secondarydialog.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<void> | Similar to |
|[`prompt(options)`](prompt-secondarydialog.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<string> | Similar to |
|[`show(options)`](show-secondarydialog.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<void> | Similar to |





### Remarks

Secondary dialogs do not need to request permission from dialog manager, because the primary dialog already has permission. Therefore, the secondary dialog will be immediately shown. This causes the primary dialog to hide until the secondary dialog is closed. There can be only one secondary dialog at a time. Additional requests to show more secondary dialogs are rejected.

