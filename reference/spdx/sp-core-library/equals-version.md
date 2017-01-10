# equals(compareWith)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Checks if this version is equal to the input parameter. Missing patch number is treated as zero. Examples: 1.0.0 equals 1.0.0 -> true 2.0.1 equals 2.0.0 -> false 3.0 equals 3.0.0 -> true 04.01 equals 4.1 -> true

**Signature:** _public equals(compareWith: [Version](../sp-core-library/version.md)): boolean;_

**Returns**: `boolean`



A boolean indicating if this version is equal to the input parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `compareWith`    | [`Version`](../sp-core-library/version.md) | The version to compare with |


