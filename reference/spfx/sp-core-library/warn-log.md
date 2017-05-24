# warn(source,message,scope)




Logs a warning

**Signature:** _public static warn(source: string, message: string, scope?: [ServiceScope](../sp-core-library/servicescope.md)): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | the source from where the message is logged, e.g., the class name. The source provides context information for the logged message. If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | the message to be logged If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-core-library/servicescope.md) | __Optional.__ the service scope that the source uses. A service scope can provide more context information (e.g., web part information) to the logged message. |


