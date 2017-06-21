# IPropertyPaneField <TProperties> interface



_Type parameters: `<TProperties>`_



PropertyPane field.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`properties`      | `TProperties` | Strongly typed properties object. Specific to each field type. Example: Checkbox has ICheckboxProps, TextField has ITextField props. |
|`shouldFocus`      | `boolean` | Whether this control should be focused. default value is false. |
|`targetProperty`      | `string` | Target property from the web part's property bag. |
|`type`      | [`PropertyPaneFieldType`](../../sp-webpart-base/enum/propertypanefieldtype.md) | Type of the PropertyPane field. |






