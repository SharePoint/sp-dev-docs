# IPropertyPaneTextFieldProps interface







PropertyPaneTextField component props.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`ariaLabel`      | `string` | Aria Label for textfield, if any. |
|`deferredValidationTime`      | `number` | Text field will start to validate after users stop typing for `deferredValidationTime` milliseconds. Default value is 200. |
|`description`      | `string` | The textfield input description. |
|`disabled`      | `boolean` | Whether the property pane textfield is enabled or not. |
|`errorMessage`      | `string` | Default value of the textfield, if any. |
|`label`      | `string` | Label for the textfield. |
|`multiline`      | `boolean` | Whether or not the textfield is a multiline textfield. Default value is false. |
|`onGetErrorMessage`      | `(value: string) => string `,` Promise<string>` | The method is used to get the validation error message and determine whether the input value is valid or not. When it returns string: - If valid, it returns empty string. - If invalid, it returns the error message string and the text field will show a red border and show an error message below the text field. When it returns Promise<string>: - The resolved value is display as error message. - The rejected, the value is thrown away. |
|`placeholder`      | `string` | placeholder text to be displayed in the Textfield. |
|`resizable`      | `boolean` | Whether or not the multiline textfield is resizable. Default value is true. |
|`underlined`      | `boolean` | Whether or not the textfield is underlined. Default value is false. |
|`value`      | `string` | Current value of the textfield. Only provide this if the textfield is a controlled component where you are maintaining its current state. |






