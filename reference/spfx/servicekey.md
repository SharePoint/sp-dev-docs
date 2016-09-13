# ServiceKey `<T>` class



_Type parameters: `<T>`_

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`public`     | `null` | `string` | The ServiceKey is a lookup key that is used when calling ServiceScope |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ServiceKey`](servicekey.md) | The ServiceKey is a lookup key that is used when calling ServiceScope |
|[`create<T>`](#create<t>)     | `public, _static_` | [`ServiceKey<T>;`](servicekey.md) | The ServiceKey is a lookup key that is used when calling ServiceScope |
|[`createCustom<T>`](#createcustom<t>)     | `public, _static_` | [`ServiceKey<T>`](servicekey.md) | The ServiceKey is a lookup key that is used when calling ServiceScope |





### constructor

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).

#### Signature
`constructor(id: string,name: string,defaultCreator: ServiceCreator<T>)`

#### Returns
[`ServiceKey`](servicekey.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `id`    | `string` |  |
| `name`    | `string` |  |
| `defaultCreator`    | `ServiceCreator<T>` |  |


### create<T>

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).

#### Signature
`create<T>(name: string,serviceClass: { new (serviceScope: ServiceScope) }): ServiceKey<T>;`

#### Returns
[`ServiceKey<T>;`](servicekey.md)
- the newly created ServiceKey 
Constructs a new ServiceKey whose default implementation will be a new instance of 
a TypeScript class that accepts the standard constructor parameter. If you want to 
specify custom constructor parameters, use createCustom() instead.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | - A name such as "MyApplication |
| `serviceClass`    | `{ new (serviceScope: ServiceScope) }` | - the TypeScript class that implements the service |


### createCustom<T>

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).

#### Signature
`createCustom<T>(name: string,defaultCreator: ServiceCreator<T>): ServiceKey<T>`

#### Returns
[`ServiceKey<T>`](servicekey.md)
- the newly created ServiceKey 
Constructs a new ServiceKey whose default implementation will be obtained 
by invoking the specified callback.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` | - A name such as "MyApplication |
| `defaultCreator`    | `ServiceCreator<T>` | - A callback that returns an object that implements the T interface  Constructs a new ServiceKey whose default implementation will be obtained  by invoking the specified callback |

