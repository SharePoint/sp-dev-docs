# all<R>(promises)

Make a promise that fulfills when every item in the array fulfills,and rejects if (and when) any item rejects. 
the array passed to all can be a mixture of promise-like objects and other objects. 
The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.

**Signature:** _all<R>(promises: (R | [Thenable](../es6-promise/thenable.md)<R>)[]): [Promise](../es6-promise/promise.md)<R[]>_

**Returns**: [`Promise`](../es6-promise/promise.md)<R[]>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `, [`Thenable`](../es6-promise/thenable.md)<R>)[] |  |

