# lessThan(compareWith)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Checks if this version is less (i.e. older) than the input parameter. Missing patch number is treated as zero Examples: 0.9.9 lessThan 1.0.0 -> true 2.0 lessThan 2.0.0 -> false 3.0 lessThan 3.0.1 -> true 04.01 lessThan 4.1 -> false

**Signature:** _public lessThan(compareWith: [Version](../sp-core-library/version.md)): boolean;_

**Returns**: `boolean`



A boolean indicating if this version is less than the input parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `compareWith`    | [`Version`](../sp-core-library/version.md) | The version to compare with |


