# race<R>

Make a Promise that fulfills when any item fulfills,and rejects if any item rejects.

#### Signature
`function race<R>(promises: (R | Thenable<R>)[]): Promise<R>`

#### Returns
[`Promise<R>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `,[` Thenable<R>)[]`](thenable.md) |  |

