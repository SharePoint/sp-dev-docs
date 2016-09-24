# provide<T>(serviceKey,service)

ServiceScope.provide() is used to register an implemententation of the given serviceKey 
for the current scope. It may only be used when the ServiceScope is in an "unfinished" 
state, i.e. before finish() has been called.

**Signature:** _provide<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>,service: T): T_

**Returns**: `T`

- the same object that was passed as the "service" parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-client-base/servicekey.md)<T> | - the key that will later be used to consume the service |
| `service`    | `T` | - the service instance that is being registered |

