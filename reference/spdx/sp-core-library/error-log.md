# error(source,error,scope)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Logs an error

**Signature:** _public static error(source: string, error: Error, scope?: [ServiceScope](../sp-core-library/servicescope.md)): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | the source from where the error is logged, e.g., the class name. The source provides context information for the logged error. If the source's length is more than 20, only the first 20 characters are kept. |
| `error`    | `Error` | the error to be logged |
| `scope`    | [`ServiceScope`](../sp-core-library/servicescope.md) | Optional.the service scope that the source uses. A service scope can provide more context information (e.g., web part information) to the logged error. |


