# Iterator interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`next`](#next)      | [`IteratorResult<T>`](iteratorresult.md) |  |
|[`return`](#return)      | [`IteratorResult<T>`](iteratorresult.md) |  |
|[`throw`](#throw)      | [`IteratorResult<T>`](iteratorresult.md) |  |




### next



#### Signature
`next(value?: any): IteratorResult<T>`

#### Returns
[`IteratorResult<T>`](iteratorresult.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `any` | _Optional._ |


### return



#### Signature
`return?(value?: any): IteratorResult<T>`

#### Returns
[`IteratorResult<T>`](iteratorresult.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `any` | _Optional._ |


### throw



#### Signature
`throw?(e?: any): IteratorResult<T>`

#### Returns
[`IteratorResult<T>`](iteratorresult.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `e`    | `any` | _Optional._ |

