# isValid(guid)



Indicates whether a guid is valid, i.e. whether it would be successfully parsed by Guid.tryParse(). This function is cheaper than Guid.tryParse() because it does not construct a Guid object.

**Signature:** _public static isValid(guid: string | undefined | null): boolean;_

**Returns**: `boolean`



true, if the Guid is valid.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string `,` undefined `,` null` | The input string. |


