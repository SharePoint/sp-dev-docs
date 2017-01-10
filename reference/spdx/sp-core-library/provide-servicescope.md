# provide(serviceKey,service)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



ServiceScope.provide() is used to register an implemententation of the given serviceKey for the current scope. It may only be used when the ServiceScope is in an "unfinished" state, i.e. before finish() has been called.

**Signature:** _public provide < T >(serviceKey: [ServiceKey](../sp-core-library/servicekey.md)<T>, service: T): T;_

**Returns**: `T`



- the same object that was passed as the "service" parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-core-library/servicekey.md)<T> | the key that will later be used to consume the service |
| `service`    | `T` | the service instance that is being registered |


