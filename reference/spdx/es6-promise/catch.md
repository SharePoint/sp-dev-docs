# catch<U>(onRejected)

Sugar for promise.then(undefined,onRejected) 


**Signature:** _catch<U>(onRejected?: (error: any) => U | [Thenable](../es6-promise/thenable.md)<U>): [Promise](../es6-promise/promise.md)<U>_

**Returns**: [`Promise`](../es6-promise/promise.md)<U>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onRejected`    | `(error: any) => U `, [`Thenable`](../es6-promise/thenable.md)<U> | _Optional._called when/if "promise" rejects |

