# IListViewCommandSetExecuteEventParameters interface





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._






## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`commandId`      | `string` | The unique identifier for the command. This is specified as ICommandDefinition.commandId in the component manifest. |
|`selectedRows`      | `ReadonlyArray<RowAccessor>` | The currently selected ListView rows, at the time when the event occurred. |






