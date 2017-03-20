# onPropertyPaneFieldChanged(propertyPath,oldValue,newValue)




This API is invoked after updating the new value of the property in the property bag when the PropertyPane is being used in Reactive mode. The base implementation of this API re-renders the web part.

**Signature:** _@virtual protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` | JSON path of the property in the property bag. |
| `oldValue`    | `any` | Old value of the property. |
| `newValue`    | `any` | New value of the property. |


