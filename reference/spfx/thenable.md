# Thenable `<R>` interface



_Type parameters: `<R>`_









## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`then<U>`](#then<u>)      | [`Thenable<U>`](thenable.md) |  |



### then<U>



#### Signature
`then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => void): Thenable<U>`

#### Returns
[`Thenable<U>`](thenable.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => void` | _Optional._ |

