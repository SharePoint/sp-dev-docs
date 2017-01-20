# isValid(guid)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Indicates whether a guid is valid, i.e. whether it would be successfully parsed by Guid.tryParse(). This function is cheaper than Guid.tryParse() because it does not construct a Guid object.

**Signature:** _public static isValid(guid: string): boolean;_

**Returns**: `boolean`



true, if the Guid is valid.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | The input string. |


