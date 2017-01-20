# create(name,serviceClass)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Constructs a new ServiceKey whose default implementation will be a new instance of a TypeScript class that accepts the standard constructor parameter. If you want to specify custom constructor parameters, use createCustom() instead.

**Signature:** _public static create < T >(name: string,
    serviceClass: { new (serviceScope: [ServiceScope](../sp-core-library/class/servicescope.md)); }): [ServiceKey](../sp-core-library/class/servicekey.md)<T>;_

**Returns**: [`ServiceKey`](../sp-core-library/class/servicekey.md)<T>



- the newly created ServiceKey

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | A name such as "MyApplication.IMyService" which should be unique within your application. |
| `serviceClass`    | `{ new (serviceScope: ServiceScope); }` | the TypeScript class that implements the service. |


