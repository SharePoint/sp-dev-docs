# Set interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`add(value)`](#addvalue)      | [`Set<T>`](../es6-collections/set.md) |  |
|[`clear()`](#clear)      | `void` |  |
|[`delete(value)`](#deletevalue)      | `boolean` |  |
|[`forEach(callbackfn,thisArg)`](#foreachcallbackfnthisarg)      | `void` |  |
|[`has(value)`](#hasvalue)      | `boolean` |  |
|[`entries()`](#entries)      | [`Iterator<[T,T]>`](../es6-collections/iterator.md) |  |
|[`keys()`](#keys)      | [`Iterator<T>`](../es6-collections/iterator.md) |  |
|[`values()`](#values)      | [`Iterator<T>`](../es6-collections/iterator.md) |  |




### add(value)



**Signature:** _add(value: T): [Set](../es6-collections/set.md)<T>_

**Returns**: [`Set<T>`](../es6-collections/set.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### clear()



**Signature:** _clear(): void_

**Returns**: `void`



#### Parameters
None


### delete(value)



**Signature:** _delete(value: T): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### forEach(callbackfn,thisArg)



**Signature:** _forEach(callbackfn: (value: T,index: T,set: [Set](../es6-collections/set.md)<T>) => void,thisArg?: any): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | `(value: T,index: T,set: Set<T>) => void` |  |
| `thisArg`    | `any` | _Optional._ |


### has(value)



**Signature:** _has(value: T): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### entries()



**Signature:** _entries(): [Iterator](../es6-collections/iterator.md)<[T,T]>_

**Returns**: [`Iterator<[T,T]>`](../es6-collections/iterator.md)



#### Parameters
None


### keys()



**Signature:** _keys(): [Iterator](../es6-collections/iterator.md)<T>_

**Returns**: [`Iterator<T>`](../es6-collections/iterator.md)



#### Parameters
None


### values()



**Signature:** _values(): [Iterator](../es6-collections/iterator.md)<T>_

**Returns**: [`Iterator<T>`](../es6-collections/iterator.md)



#### Parameters
None

