# IPlaceholderProps interface







Used to display a placeholder in case of no or temporary content. Button is optional.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`buttonLabel`      | `string` | Text label to be displayed on button below the description. Optional: As the button is optional. |
|`contentClassName`      | `string` | This className is applied to the root element of content. Use this to apply custom styles to the placeholder. |
|`description`      | `string` | Text description for the placeholder. Appears bellow the Icon and IconText. |
|`icon`      | `string` | Icon className from the MDL2 set. Example: 'ms-Icon--Add'. |
|`iconText`      | `string` | Heading displayed against the Icon. |
|`onAdd`      | `() => void` | onClick handler for the button. Optional: As the button is optional. |






