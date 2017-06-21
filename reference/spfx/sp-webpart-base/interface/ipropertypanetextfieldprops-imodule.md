# IPropertyPaneTextFieldProps interface







PropertyPaneTextField component props.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`ariaLabel`      | `string` | Aria Label for textfield, if any. |
|`deferredValidationTime`      | `number` | Text field will start to validate after users stop typing for `deferredValidationTime` milliseconds. Default value is 200. |
|`description`      | `string` | The textfield input description. |
|`disabled`      | `boolean` | Whether the property pane textfield is enabled or not. |
|`errorMessage`      | `string` | If set, this will be displayed as an error message. When onGetErrorMessage returns empty string, if this property has a value set then this will be displayed as the error message. So, make sure to set this only if you want to see an error message dispalyed for the text field. |
|`label`      | `string` | Label for the textfield. |
|`maxLength`      | `number` | Maximum number of characters that the PropertyPaneTextField can have. (If the value is set to a negative number, an exception will be thrown.) |
|`multiline`      | `boolean` | Whether or not the textfield is a multiline textfield. Default value is false. |
|`onGetErrorMessage`      | `(value: string) => string `, [`Promise`](../../web-apis.api/class/promise.md)<string> | The method is used to get the validation error message and determine whether the input value is valid or not. When it returns string: - If valid, it returns empty string. - If invalid, it returns the error message string and an error message is displayed below the text field. When it returns Promise<string>: - The resolved value is display as error message. - The rejected, the value is thrown away. |
|`placeholder`      | `string` | placeholder text to be displayed in the Textfield. |
|`resizable`      | `boolean` | Whether or not the multiline textfield is resizable. Default value is true. |
|`rows`      | `number` | Specifies the visible height of a text area(multiline text TextField), in lines. This prop is used only when the multiline prop is set to true. |
|`underlined`      | `boolean` | Whether or not the textfield is underlined. Default value is false. |
|`validateOnFocusIn`      | `boolean` | Run validation when the PropertyPaneTextField is focused. default value is false |
|`validateOnFocusOut`      | `boolean` | Run validation when the PropertyPaneTextField is out of focus or on blur. default value is false |
|`value`      | `string` | Value to be displayed in the textfield when the value of the targetProperty in the manifest's property bag is empty or contains null value. |






