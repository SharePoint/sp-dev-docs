# createDefaultAndProvide(serviceKey)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



This is a shorthand function that constructs the default implementation of the specified serviceKey, and then registers it by calling ServiceScope.provide().

**Signature:** _public createDefaultAndProvide < T >(serviceKey: [ServiceKey](../sp-core-library/class/servicekey.md)<T>): T;_

**Returns**: `T`



- a service instance that was constructed using ServiceKey.defaultCreator

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-core-library/class/servicekey.md)<T> | the key that can be used later to consume the service |


