# consume(serviceKey)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Components should call this function to "consume" a dependency, i.e. look up the serviceKey and return the registered service instance. If the instance cannot be found, then a default instance will be autocreated and registered with the root ServiceScope.

**Signature:** _public consume < T >(serviceKey: [ServiceKey](../sp-core-library/servicekey.md)<T>): T;_

**Returns**: `T`



- the service instance

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-core-library/servicekey.md)<T> | the key that was used when provide() was called to register the service |


