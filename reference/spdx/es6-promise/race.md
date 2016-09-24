# race<R>(promises)

Make a Promise that fulfills when any item fulfills,and rejects if any item rejects.

**Signature:** _race<R>(promises: (R | [Thenable](../es6-promise/thenable.md)<R>)[]): [Promise](../es6-promise/promise.md)<R>_

**Returns**: [`Promise`](../es6-promise/promise.md)<R>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `, [`Thenable`](../es6-promise/thenable.md)<R>)[] |  |

