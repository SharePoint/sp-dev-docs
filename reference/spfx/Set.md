# Set `<T>` interface



_Type parameters: `<T>`_






### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`add`](#add)      | [`Set<T>`](Set.md) |  |
|[`clear`](#clear)      | `void` |  |
|[`delete`](#delete)      | `boolean` |  |
|[`forEach`](#foreach)      | `void` |  |
|[`has`](#has)      | `boolean` |  |
|[`entries`](#entries)      | [`Iterator<[T,T]>`](Iterator.md) |  |
|[`keys`](#keys)      | [`Iterator<T>`](Iterator.md) |  |
|[`values`](#values)      | [`Iterator<T>`](Iterator.md) |  |



### add



#### Signature
`add(value: T): Set<T>`

#### Returns
[`Set<T>`](Set.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### clear



#### Signature
`clear(): void`

#### Returns
`void`

#### Parameters
None


### delete



#### Signature
`delete(value: T): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### forEach



#### Signature
`forEach(callbackfn: (value: T,index: T,set: Set<T>) => void,thisArg?: any): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | `(value: T,index: T,set: Set<T>) => void` |  |
| `thisArg`    | `any` | _Optional._ |


### has



#### Signature
`has(value: T): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### entries



#### Signature
`entries(): Iterator<[T,T]>`

#### Returns
[`Iterator<[T,T]>`](Iterator.md)

#### Parameters
None


### keys



#### Signature
`keys(): Iterator<T>`

#### Returns
[`Iterator<T>`](Iterator.md)

#### Parameters
None


### values



#### Signature
`values(): Iterator<T>`

#### Returns
[`Iterator<T>`](Iterator.md)

#### Parameters
None

