# onPropertyPaneFieldChanged(propertyPath,oldValue,newValue)



This API is invoked after updating the new value of the property in the property bag when the PropertyPane is being used in Reactive mode.

**Signature:** _@virtual protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` | JSON path of the property in the property bag. In the case of custom field, if no target property is provided then a custom value is assigned, which will be in the form of '__CustomField_<key provided when the custom field is created>'. |
| `oldValue`    | `any` | Old value of the property. This value could be undefined/empty in the case of custom field. |
| `newValue`    | `any` | New value of the property. This value could be undefined/empty in the case of custom field. |


