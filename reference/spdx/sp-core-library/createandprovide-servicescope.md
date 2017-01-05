# createAndProvide(serviceKey,simpleServiceClass)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



This is a shorthand function that its equivalent to constructing a new instance of the simpleServiceClass, then registering it by calling ServiceScope.provide().

**Signature:** _public createAndProvide < T >(serviceKey: [ServiceKey](../sp-core-library/servicekey.md)<T>,
    simpleServiceClass: { new (serviceScope: [ServiceScope](../sp-core-library/servicescope.md)); }): T;_

**Returns**: `T`



- a newly constructed instance of simpleServiceClass

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey`](../sp-core-library/servicekey.md)<T> | the key that can be used later to consume the service |
| `simpleServiceClass`    | `{ new (serviceScope: ServiceScope); }` | the TypeScript class to be constructed |


