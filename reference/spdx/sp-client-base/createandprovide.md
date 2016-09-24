# createAndProvide<T>(serviceKey,simpleServiceClass)

This is a shorthand function that its equivalent to constructing a new instance of the 
simpleServiceClass, then registering it by calling ServiceScope.provide().

**Signature:** _createAndProvide<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>,simpleServiceClass: { new (serviceScope: [ServiceScope](../sp-client-base/servicescope.md)) }): T_

**Returns**: `T`

- a newly constructed instance of simpleServiceClass

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-client-base/servicekey.md)<T> | - the key that can be used later to consume the service |
| `simpleServiceClass`    | `{ new (serviceScope: ServiceScope) }` | - the TypeScript class to be constructed |

