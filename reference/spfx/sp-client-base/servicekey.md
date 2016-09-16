# ServiceKey <T> class



_Type parameters: `<T>`_

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).


## Constructor
PRIVATE - Do not call this from your own code.

**Signature:** `constructor(id: string,name: string,defaultCreator: ServiceCreator<T>)`

**Returns**: [`ServiceKey`](../sp-client-base/servicekey.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `id`    | `string` |  |
| `name`    | `string` |  |
| `defaultCreator`    | `ServiceCreator<T>` |  |


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`defaultCreator`     | `public` | `ServiceCreator<T>` |  |
|`id`     | `public` | `string` |  |
|`name`     | `public` | `string` |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`create<T>`](#create<t>)     | `public, static` | [`ServiceKey<T>`](../sp-client-base/servicekey.md) | Constructs a new ServiceKey whose default implementation will be a new instance of  a TypeScript class that accepts the standard constructor parameter. If you want to  specify custom constructor parameters, use createCustom() instead. |
|[`createCustom<T>`](#createcustom<t>)     | `public, static` | [`ServiceKey<T>`](../sp-client-base/servicekey.md) | Constructs a new ServiceKey whose default implementation will be obtained  by invoking the specified callback. |





### create<T>

Constructs a new ServiceKey whose default implementation will be a new instance of 
a TypeScript class that accepts the standard constructor parameter. If you want to 
specify custom constructor parameters, use createCustom() instead.

**Signature:** ``create<T>(name: string,serviceClass: { new (serviceScope: ServiceScope) }): ServiceKey<T>``

**Returns**: [`ServiceKey<T>`](../sp-client-base/servicekey.md)

- the newly created ServiceKey

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | - A name such as "MyApplication.IMyService" which should be unique within  your application. |
| `serviceClass`    | `{ new (serviceScope: ServiceScope) }` | - the TypeScript class that implements the service. |


### createCustom<T>

Constructs a new ServiceKey whose default implementation will be obtained 
by invoking the specified callback.

**Signature:** ``createCustom<T>(name: string,defaultCreator: ServiceCreator<T>): ServiceKey<T>``

**Returns**: [`ServiceKey<T>`](../sp-client-base/servicekey.md)

- the newly created ServiceKey

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | - A name such as "MyApplication.IMyService" which should be unique within  your application. |
| `defaultCreator`    | `ServiceCreator<T>` | - A callback that returns an object that implements the T interface |

