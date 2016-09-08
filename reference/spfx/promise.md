# Promise `<R>` class

_Implements: [`Thenable<R>`](thenable.md)_

_Type parameters: `<R>`_








## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | `any => void) => void)` | If you call resolve in the body of the callback passed to the constructor,  your promise is fulfilled with result object passed to resolve |
|[`then<U>`](#then<u>)     | `public` | [`Promise<U>`](promise.md) |  |
|[`catch<U>`](#catch<u>)     | `public` | [`Promise<U>`](promise.md) | Sugar for promise |




### constructor

If you call resolve in the body of the callback passed to the constructor, 
your promise is fulfilled with result object passed to resolve. 
If you call reject your promise is rejected with the object passed to resolve. 
For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
Any errors thrown in the constructor callback will be implicitly passed to reject().

#### Signature
`constructor(callback: (resolve: (value?: R | Thenable<R>) => void,reject: (error?: any) => void) => void)`

#### Returns
`any => void) => void)`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callback`    | `(resolve: (value?: R `,[` Thenable<R>) => void`](thenable.md) |  |
| `reject`    | `(error?: any) => void) => void` |  |


### then<U>



#### Signature
`then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => void): Promise<U>`

#### Returns
[`Promise<U>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => void` | _Optional._ |


### catch<U>

Sugar for promise.then(undefined,onRejected) 


#### Signature
`catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>`

#### Returns
[`Promise<U>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onRejected`    | `(error: any) => U `,[` Thenable<U>`](thenable.md) | _Optional._called when/if "promise" rejects |

