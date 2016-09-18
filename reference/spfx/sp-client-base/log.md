# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error(source,error,scope)`](#errorsourceerrorscope)     | `public, static` | `void` | Logs an error |
|[`info(source,message,scope)`](#infosourcemessagescope)     | `public, static` | `void` | Logs an informational message |
|[`verbose(source,message,scope)`](#verbosesourcemessagescope)     | `public, static` | `void` | Logs a verbose message |
|[`warn(source,message,scope)`](#warnsourcemessagescope)     | `public, static` | `void` | Logs a warning |





### error(source,error,scope)

Logs an error

**Signature:** _error(source: string,error: Error,scope?: [ServiceScope](../sp-client-base/servicescope.md)): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the error is logged,e.g.,the class name.  The source provides context information for the logged error.  If the source's length is more than 20, only the first 20 characters are kept. |
| `error`    | `Error` | - the error to be logged |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged error. |


### info(source,message,scope)

Logs an informational message

**Signature:** _info(source: string,message: string,scope?: [ServiceScope](../sp-client-base/servicescope.md)): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e.g.,the class name.  The source provides context information for the logged message.  If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged message. |


### verbose(source,message,scope)

Logs a verbose message

**Signature:** _verbose(source: string,message: string,scope?: [ServiceScope](../sp-client-base/servicescope.md)): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e.g.,the class name.  The source provides context information for the logged message.  If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged message. |


### warn(source,message,scope)

Logs a warning

**Signature:** _warn(source: string,message: string,scope?: [ServiceScope](../sp-client-base/servicescope.md)): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e.g.,the class name.  The source provides context information for the logged message.  If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged message. |

