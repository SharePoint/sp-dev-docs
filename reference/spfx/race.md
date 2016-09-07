# race<R>

Make a Promise that fulfills when any item fulfills,and rejects if any item rejects.

#### Signature
`function race<R>(promises: (R | Thenable<R>)[]): Promise<R>`

#### Returns
[`Promise<R>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `,[` Thenable<R>)[]`](Thenable.md) |  |

