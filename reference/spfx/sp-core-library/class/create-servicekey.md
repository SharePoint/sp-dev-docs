# create(name,serviceClass)



Constructs a new ServiceKey whose default implementation will be a new instance of a TypeScript class that accepts the standard constructor parameter. If you want to specify custom constructor parameters, use createCustom() instead.

**Signature:** _public static create < T >(name: string,
    serviceClass: { new (serviceScope: [ServiceScope](../../sp-core-library.api/class/servicescope.md)); }): [ServiceKey](../../sp-core-library.api/class/servicekey.md)<T>;_

**Returns**: [`ServiceKey`](../../sp-core-library.api/class/servicekey.md)<T>



- the newly created ServiceKey

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | A name such as "MyApplication.IMyService" which should be unique within your application. |
| `serviceClass`    | `{ new (serviceScope: ServiceScope); }` | the TypeScript class that implements the service. |


