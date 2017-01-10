# ServiceKey <T> class



_Type parameters: `<T>`_



The ServiceKey is a lookup key that is used when calling ServiceScope.consume() to fetch a dependency. The key also defines a default implementation of the dependency, which will be autocreated by the root scope if the dependency is not found. Providing a default implementation ensures that new dependencies can be safely introduced without inadvertently breaking components that are loaded by an older host (that does not provide the new dependency).


## Constructor
PRIVATE - Do not call this from your own code.

**Signature:** _constructor(id: string, name: string, defaultCreator: ServiceCreator<T>);_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`defaultCreator`     | `public` | `ServiceCreator<T>` |  |
|`id`     | `public` | `string` |  |
|`name`     | `public` | `string` |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`create(name,serviceClass)`](create-servicekey.md)     | `public, static` | [`ServiceKey`](../sp-core-library/servicekey.md)<T> | Constructs a new ServiceKey whose default implementation will be a new instance of a TypeScript class that accepts the standard constructor parameter. If you want to specify custom constructor parameters, use createCustom() instead. |
|[`createCustom(name,defaultCreator)`](createcustom-servicekey.md)     | `public, static` | [`ServiceKey`](../sp-core-library/servicekey.md)<T> | Constructs a new ServiceKey whose default implementation will be obtained by invoking the specified callback. |





