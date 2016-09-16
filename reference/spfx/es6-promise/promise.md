# Promise <R> class

_Implements: [`Thenable<R>`](../es6-promise/thenable.md)_

_Type parameters: `<R>`_




## Constructor
If you call resolve in the body of the callback passed to the constructor,
your promise is fulfilled with result object passed to resolve.
If you call reject your promise is rejected with the object passed to resolve.
For consistency and debugging (eg stack traces), obj should be an instanceof Error.
Any errors thrown in the constructor callback will be implicitly passed to reject().

**Signature:** `constructor(callback: (resolve: (value?: R | Thenable<R>) => void,reject: (error?: any) => void) => void)`

**Returns**: [`Promise`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callback`    | `(resolve: (value?: R `,[` Thenable<R>) => void`](../es6-promise/thenable.md) |  |
| `reject`    | `(error?: any) => void) => void` |  |





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`then<U>`](#then<u>)     | `public` | [`Promise<U>`](../es6-promise/promise.md) | onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.  Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.  Both callbacks have a single parameter , the fulfillment value or rejection reason.  "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.  If an error is thrown in the callback, the returned promise rejects with that error.   |
|[`then<U>`](#then<u>)     | `public` | [`Promise<U>`](../es6-promise/promise.md) |  |
|[`catch<U>`](#catch<u>)     | `public` | [`Promise<U>`](../es6-promise/promise.md) | Sugar for promise.then(undefined,onRejected)   |





### then<U>

onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
Both callbacks have a single parameter , the fulfillment value or rejection reason.
"then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
If an error is thrown in the callback, the returned promise rejects with that error.


**Signature:** ``then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => U | Thenable<U>): Promise<U>``

**Returns**: [`Promise<U>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._called when/if "promise" resolves |
| `onRejected`    | `(error: any) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._called when/if "promise" rejects |


### then<U>



**Signature:** ``then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => void): Promise<U>``

**Returns**: [`Promise<U>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._ |
| `onRejected`    | `(error: any) => void` | _Optional._ |


### catch<U>

Sugar for promise.then(undefined,onRejected)


**Signature:** ``catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>``

**Returns**: [`Promise<U>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onRejected`    | `(error: any) => U `,[` Thenable<U>`](../es6-promise/thenable.md) | _Optional._called when/if "promise" rejects |
