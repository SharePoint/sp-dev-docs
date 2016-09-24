# tryParse(guid)

Trys to construct a new Guid instance using guid string. The guid argument 
is normalized and validated. If the argument is not a valid "version 4" UUID from 
RFC 4122, tryParse will return undefined. 


**Signature:** _tryParse(guid: string): [Guid](../sp-client-base/guid.md)_

**Returns**: [`Guid`](../sp-client-base/guid.md)

If the guid argument was valid,a new Guid instance. Otherwise,undefined.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - A guid string |

