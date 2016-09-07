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
|`defaultCreator`     | `public` | `ServiceCreator<T>` | your application |
|`id`     | `public` | `string` | your application |
|`name`     | `public` | `string` | your application |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | `ServiceCreator<T>` | PRIVATE - Do not call this from your own code |
|[`create<T>`](#create<t>)     | `public, _static_` | [`ServiceKey<T>;`](ServiceKey.md) | your application |
|[`createCustom<T>`](#createcustom<t>)     | `public, _static_` | [`ServiceKey<T>`](ServiceKey.md) | your application |




### constructor

PRIVATE - Do not call this from your own code.

#### Signature
`constructor(id: string,name: string,defaultCreator: ServiceCreator<T>)`

#### Returns
`ServiceCreator<T>`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `id`    | `string` |  |
| `name`    | `string` |  |
| `defaultCreator`    | `ServiceCreator<T>` |  |


### create<T>

your application.

#### Signature
`public create<T>(name: string,serviceClass: { new (serviceScope: ServiceScope) }): ServiceKey<T>;`

#### Returns
[`ServiceKey<T>;`](ServiceKey.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` |  |
| `serviceClass`    | `{ new (serviceScope: ServiceScope) }` |  |


### createCustom<T>

your application.

#### Signature
`public createCustom<T>(name: string,defaultCreator: ServiceCreator<T>): ServiceKey<T>`

#### Returns
[`ServiceKey<T>`](ServiceKey.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` |  |
| `defaultCreator`    | `ServiceCreator<T>` |  |

