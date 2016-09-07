# resolve<R>

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

#### Signature
`function resolve<R>(value?: R | Thenable<R>): Promise<R>`

#### Returns
[`Promise<R>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `R `,[` Thenable<R>`](Thenable.md) | _Optional._ |

