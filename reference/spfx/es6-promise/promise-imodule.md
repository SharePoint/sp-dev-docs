# Promise module













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`resolve<R>(value)`](#resolve<r>value)      | [`Promise`](../es6-promise/promise.md)<R> | Make a new promise from the thenable.  A thenable is promise-like in as far as it has a "then" method. |
|[`reject(error)`](#rejecterror)      | [`Promise`](../es6-promise/promise.md)<any> | Make a promise that rejects to obj. For consistency and debugging (eg stack traces),obj should be an instanceof Error |
|[`all<R>(promises)`](#all<r>promises)      | [`Promise`](../es6-promise/promise.md)<R[]> | Make a promise that fulfills when every item in the array fulfills,and rejects if (and when) any item rejects.  the array passed to all can be a mixture of promise-like objects and other objects.  The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value. |
|[`race<R>(promises)`](#race<r>promises)      | [`Promise`](../es6-promise/promise.md)<R> | Make a Promise that fulfills when any item fulfills,and rejects if any item rejects. |




### resolve<R>(value)

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

**Signature:** _resolve<R>(value?: R | [Thenable](../es6-promise/thenable.md)<R>): [Promise](../es6-promise/promise.md)<R>_

**Returns**: [`Promise`](../es6-promise/promise.md)<R>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `R `, [`Thenable`](../es6-promise/thenable.md)<R> | _Optional._ |


### reject(error)

Make a promise that rejects to obj. For consistency and debugging (eg stack traces),obj should be an instanceof Error

**Signature:** _reject(error: any): [Promise](../es6-promise/promise.md)<any>_

**Returns**: [`Promise`](../es6-promise/promise.md)<any>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `any` |  |


### all<R>(promises)

Make a promise that fulfills when every item in the array fulfills,and rejects if (and when) any item rejects. 
the array passed to all can be a mixture of promise-like objects and other objects. 
The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.

**Signature:** _all<R>(promises: (R | [Thenable](../es6-promise/thenable.md)<R>)[]): [Promise](../es6-promise/promise.md)<R[]>_

**Returns**: [`Promise`](../es6-promise/promise.md)<R[]>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `, [`Thenable`](../es6-promise/thenable.md)<R>)[] |  |


### race<R>(promises)

Make a Promise that fulfills when any item fulfills,and rejects if any item rejects.

**Signature:** _race<R>(promises: (R | [Thenable](../es6-promise/thenable.md)<R>)[]): [Promise](../es6-promise/promise.md)<R>_

**Returns**: [`Promise`](../es6-promise/promise.md)<R>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `, [`Thenable`](../es6-promise/thenable.md)<R>)[] |  |

