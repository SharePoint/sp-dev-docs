# IPropertyPaneButtonProps interface







PropertyPane button props.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`ariaDescription`      | `string` | Detailed description of the button for the benefit of screen readers. Besides the compound button, other button types will need more information provided to screen reader. |
|`ariaLabel`      | `string` | The aria label of the button for the benefit of screen readers. |
|`buttonType`      | [`PropertyPaneButtonType`](../../sp-webpart-base.api/enum/propertypanebuttontype.md) | The type of button to render. Default value is ButtonType.normal. |
|`description`      | `string` | Description of the action this button takes. Only used for compound buttons. |
|`disabled`      | `boolean` | Whether the button is disabled. |
|`icon`      | `string` | The button icon shown in command or hero type. |
|`onClick`      | `(value: any) => any` | A callback which is invoked on the button click, which takes in the existing value for the bound property and returns the new value and which is then used to update the properties bag. This update will result in the re-render of the PropertyPane with the new props. |
|`text`      | `string` | Display text of the element. |






