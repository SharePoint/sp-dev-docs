# error(source,error,scope)



Logs an error

**Signature:** _public static error(source: string, error: Error, scope?: [ServiceScope](../../sp-core-library.api/class/servicescope.md)): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | the source from where the error is logged, e.g., the class name. The source provides context information for the logged error. If the source's length is more than 20, only the first 20 characters are kept. |
| `error`    | `Error` | the error to be logged |
| `scope`    | [`ServiceScope`](../../sp-core-library.api/class/servicescope.md) | _Optional._ the service scope that the source uses. A service scope can provide more context information (e.g., web part information) to the logged error. |


