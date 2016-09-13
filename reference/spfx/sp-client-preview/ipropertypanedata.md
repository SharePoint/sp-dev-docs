# IPropertyPaneData interface





Web part - PropertyPane data contract.




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`onClose`      | `function` | Event callback for 'Close' click |
|`onConfigurationComplete`      | `function` | Event callback fired when the configuration is completed for the web part |
|`onLostFocus`      | `function` | Event callback fired when the focus is handed back to the web part |
|`onPropertyChange`      | `function` | Notification event fired when the property has already been validated and modified |
|`onRendered`      | `function` | Event callback fired after the PropertyPane is rendered |
|`onSave`      | `function` | Event callback for 'Apply' click |
|`properties`      | `any` | Property bag from the web part |
|`settings`      | [`IPropertyPaneSettings`](../sp-client-preview/ipropertypanesettings.md) | Web part configuration settings |





