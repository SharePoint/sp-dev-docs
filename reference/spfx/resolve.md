# resolve<R>

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

#### Signature
`function resolve<R>(value?: R | Thenable<R>): Promise<R>`

#### Returns
[`Promise<R>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `R `,[` Thenable<R>`](thenable.md) | _Optional._ |

