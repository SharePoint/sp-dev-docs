# createDefaultAndProvide<T>(serviceKey)

This is a shorthand function that constructs the default implementation of the specified 
serviceKey, and then registers it by calling ServiceScope.provide().

**Signature:** _createDefaultAndProvide<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>): T_

**Returns**: `T`

- a service instance that was constructed using ServiceKey.defaultCreator

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-client-base/servicekey.md)<T> | - the key that can be used later to consume the service |

