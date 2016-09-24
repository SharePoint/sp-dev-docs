# onPropertyChange(propertyPath,newValue)

This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode. 
The base implementation of this API updates the web part property bag and re-render the web part. This API also 
invokes the web part host's setDirty API. 


**Signature:** _onPropertyChange(propertyPath: string,newValue: any): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` | - JSON path of the property in the property bag. |
| `newValue`    | `any` | - New value of the property. |

