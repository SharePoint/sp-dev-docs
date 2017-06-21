# BaseListViewCommandSet <TProperties> class



_Type parameters: `<TProperties>`_

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

This is the base class that third parties should extend when implementing a client-side extension that provides a command set for a SharePoint list view. In the component manifest, the "extensionType" should be set to "ListViewCommandSet".



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`context`     | `public` | [`ListViewCommandSetContext`](../../sp-listview-extensibility.api/class/listviewcommandsetcontext.md) | Use context object to access common services and state associated with the component. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`onExecute()`](onexecute-baselistviewcommandset.md)     | `public` | `void` | This event occurs when the command is invoked, e.g. because the user clicked on the toolbar button or menu item. |
|[`onRefreshCommand()`](onrefreshcommand-baselistviewcommandset.md)     | `public` | `void` | This event occurs whenever the ListView state changes. It allows the implementor to tailor the appearance of the command. For example, to hide the command, assign event.visible = false. To customize the title, assign event.tile. |





