# Thenable interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`then<U>(onFulfilled,onRejected)`](#then<u>onfulfilledonrejected)      | [`Thenable<U>`](../es6-promise/thenable.md) |  |
|[`then<U>(onFulfilled,onRejected)`](#then<u>onfulfilledonrejected)      | [`Thenable<U>`](../es6-promise/thenable.md) |  |




### then<U>(onFulfilled,onRejected)



**Signature:** _then<U>(onFulfilled?: (value: R) => U | [Thenable](../es6-promise/thenable.md)<U>,onRejected?: (error: any) => U | Thenable<U>): Thenable<U>_

**Returns**: [`Thenable<U>`](../es6-promise/thenable.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |


### then<U>(onFulfilled,onRejected)



**Signature:** _then<U>(onFulfilled?: (value: R) => U | [Thenable](../es6-promise/thenable.md)<U>,onRejected?: (error: any) => void): Thenable<U>_

**Returns**: [`Thenable<U>`](../es6-promise/thenable.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => void` | _Optional._ |

