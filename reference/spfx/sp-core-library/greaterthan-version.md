# greaterThan(compareWith)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Checks if this version is greater (i.e. newer) than the input parameter. Missing patch number is treated as zero Examples: 1.0.0 greaterThan 0.0.9 -> true 2.0 greaterThan 2.0.0 -> false 3.0.1 greaterThan 3.0 -> true

**Signature:** _public greaterThan(compareWith: [Version](../sp-core-library/version.md)): boolean;_

**Returns**: `boolean`



A boolean indicating if this version is greater than the input parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `compareWith`    | [`Version`](../sp-core-library/version.md) | The version to compare with |


