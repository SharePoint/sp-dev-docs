# IPropertyPaneTextFieldProps interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`ariaLabel`      | `string` | Aria Label for textfield,if any. |
|`deferredValidationTime`      | `number` | Text field will start to validate after users stop typing for `deferredValidationTime` milliseconds. |
|`description`      | `string` | The textfield input description. |
|`errorMessage`      | `string` | Default value of the textfield,if any. |
|`label`      | `string` | Label for the textfield. |
|`multiline`      | `boolean` | Whether or not the textfield is a multiline textfield. |
|`onGetErrorMessage`      | `function` | The method is used to get the validation error message and determine whether the input value is valid or not.    When it returns string:  - If valid, it returns empty string.  - If invalid, it returns the error message string and the text field will  show a red border and show an error message below the text field.    When it returns Promise<string>:  - The resolved value is display as error message.  - The rejected, the value is thrown away.   |
|`placeholder`      | `string` | placeholder text to be displayed in the Textfield. |
|`resizable`      | `boolean` | Whether or not the multiline textfield is resizable. |
|`underlined`      | `boolean` | Whether or not the textfield is underlined. |
|`value`      | `string` | Current value of the textfield. Only provide this if the textfield is a controlled component where you  are maintaining its current state. |





