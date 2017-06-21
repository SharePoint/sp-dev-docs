# satisfies(compareWith)



Checks if this version satisfies the input parameter, therefore it's backwards compatible. They have to share the same major version, and the input parameter must be an equal or more recent version. Examples: 1.0.0 satisfies 1.0.0 -> true 1.1.0 satisfies 1.0.0 -> true 2.0.0 satisfies 1.0.0 -> false 1.0.0 satisfies 1.1.0 -> false

**Signature:** _public satisfies(compareWith: [Version](../../sp-core-library.api/class/version.md)): boolean;_

**Returns**: `boolean`



A boolean indicating if this version is compatible with the input parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `compareWith`    | [`Version`](../../sp-core-library.api/class/version.md) | The version to compare with |


