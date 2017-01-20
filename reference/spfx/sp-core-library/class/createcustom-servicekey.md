# createCustom(name,defaultCreator)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Constructs a new ServiceKey whose default implementation will be obtained by invoking the specified callback.

**Signature:** _public static createCustom < T >(name: string, defaultCreator: ServiceCreator<T>): [ServiceKey](../sp-core-library/class/servicekey.md)<T>;_

**Returns**: [`ServiceKey`](../sp-core-library/class/servicekey.md)<T>



- the newly created ServiceKey

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | A name such as "MyApplication.IMyService" which should be unique within your application. |
| `defaultCreator`    | `ServiceCreator<T>` | A callback that returns an object that implements the T interface |


