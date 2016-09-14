# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error`](#error)     | `public, _static_` | `void` | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |
|[`info`](#info)     | `public, _static_` | `void` | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |
|[`verbose`](#verbose)     | `public, _static_` | `void` | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |
|[`warn`](#warn)     | `public, _static_` | `void` | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |





### error

The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 


#### Signature
`error(source: string,error: Error,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the error is logged,e |
| `error`    | `Error` | - the error to be logged |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses |


### info

The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 


#### Signature
`info(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses |


### verbose

The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 


#### Signature
`verbose(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses |


### warn

The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 


#### Signature
`warn(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e |
| `message`    | `string` | - the message to be logged  If the message's length is more than 100, only the first 100 characters are kept |
| `scope`    | [`ServiceScope`](../sp-client-base/servicescope.md) | _Optional._- the service scope that the source uses |

