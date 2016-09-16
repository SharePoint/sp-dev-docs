# Thenable interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`then<U>`](#then<u>)      | [`Thenable<U>`](../es6-promise/thenable.md) |  |
|[`then<U>`](#then<u>)      | [`Thenable<U>`](../es6-promise/thenable.md) |  |




### then<U>



**Signature:** ``then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => U | Thenable<U>): Thenable<U>``

**Returns**: [`Thenable<U>`](../es6-promise/thenable.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |


### then<U>



**Signature:** ``then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => void): Thenable<U>``

**Returns**: [`Thenable<U>`](../es6-promise/thenable.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => void` | _Optional._ |

