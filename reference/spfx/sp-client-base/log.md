# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error`](#error)     | `public, static` | `void` | Logs an error |
|[`info`](#info)     | `public, static` | `void` | Logs an informational message |
|[`verbose`](#verbose)     | `public, static` | `void` | Logs a verbose message |
|[`warn`](#warn)     | `public, static` | `void` | Logs a warning |





### error

Logs an error

**Signature:** ``error(source: string,error: Error,scope?: ServiceScope): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the error is logged,e.g.,the class name.  The source provides context information for the logged error.  If the source's length is more than 20, only the first 20 characters are kept. |
| `error`    | `Error` | - the error to be logged |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged error. |


### info

Logs an informational message

**Signature:** ``info(source: string,message: string,scope?: ServiceScope): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e.g.,the class name.  The source provides context information for the logged message.  If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged message. |


### verbose

Logs a verbose message

**Signature:** ``verbose(source: string,message: string,scope?: ServiceScope): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e.g.,the class name.  The source provides context information for the logged message.  If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged message. |


### warn

Logs a warning

**Signature:** ``warn(source: string,message: string,scope?: ServiceScope): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e.g.,the class name.  The source provides context information for the logged message.  If the source's length is more than 20, only the first 20 characters are kept. |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept. |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses. A service scope can provide  more context information (e.g., web part information) to the logged message. |

