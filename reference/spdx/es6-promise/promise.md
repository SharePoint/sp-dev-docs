# Promise <R> class

_Implements: [`Thenable`](../es6-promise/thenable.md)<R>_

_Type parameters: `<R>`_




## Constructor
If you call resolve in the body of the callback passed to the constructor, 
your promise is fulfilled with result object passed to resolve. 
If you call reject your promise is rejected with the object passed to resolve. 
For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
Any errors thrown in the constructor callback will be implicitly passed to reject().

**Signature:** _constructor(callback: (resolve: (value?: R | [Thenable](../es6-promise/thenable.md)<R>) => void,reject: (error?: any) => void) => void)_

**Returns**: [`Promise`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callback`    | `(resolve: (value?: R `, [`Thenable`](../es6-promise/thenable.md)<R>) => void |  |
| `reject`    | `(error?: any) => void) => void` |  |





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`then<U>(onFulfilled,onRejected)`](then<u>-6uyu9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<U> | onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.  Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.  Both callbacks have a single parameter , the fulfillment value or rejection reason.  "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.  If an error is thrown in the callback, the returned promise rejects with that error.   |
|[`then<U>(onFulfilled,onRejected)`](then<u>-shnk9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<U> |  |
|[`catch<U>(onRejected)`](catch<u>-cins9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<U> | Sugar for promise.then(undefined,onRejected)   |




