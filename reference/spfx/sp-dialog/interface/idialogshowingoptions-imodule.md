# IDialogShowingOptions interface





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Options for showing a dialog




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`shouldAbort`      | `() => boolean` | Provide this callback if there is a case when you want to abort showing the dialog before it's approved by the framework. For example, you can check if a long time has passed since the request was made or the the component requesting the dialog is disposed and you don't want to show the dialog anymore. It is important to keep this callback lightweight so the framework can resolve it quickly and the user interface does not have to wait a long time for it. |






