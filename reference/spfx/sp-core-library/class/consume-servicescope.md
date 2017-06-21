# consume(serviceKey)



Components should call this function to "consume" a dependency, i.e. look up the serviceKey and return the registered service instance. If the instance cannot be found, then a default instance will be autocreated and registered with the root ServiceScope.

**Signature:** _public consume < T >(serviceKey: [ServiceKey](../../sp-core-library.api/class/servicekey.md)<T>): T;_

**Returns**: `T`



- the service instance

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../../sp-core-library.api/class/servicekey.md)<T> | the key that was used when provide() was called to register the service |


