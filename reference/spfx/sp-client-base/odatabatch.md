# ODataBatch class





The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ODataBatch`](../sp-client-base/odatabatch.md) | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
|[`execute`](#execute)     | `public` | [`Promise<ODataBatch>`](../es6-promise/promise.md) | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
|[`get`](#get)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
|[`post`](#post)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |





### constructor

The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 


#### Signature
`constructor(serviceScope: ServiceScope,batchOptions?: IODataBatchOptions)`

#### Returns
[`ODataBatch`](../sp-client-base/odatabatch.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |
| `batchOptions`    | [`IODataBatchOptions`](../sp-client-base/iodatabatchoptions.md) | _Optional._ |


### execute

The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 


#### Signature
`execute(): Promise<ODataBatch>`

#### Returns
[`Promise<ODataBatch>`](../es6-promise/promise.md)


#### Parameters
None


### fetch

The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 


#### Signature
`fetch(url: string,options?: IODataBatchRequestOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch,or an already initialized Request object |
| `options`    | `IODataBatchRequestOptions` | _Optional._- additional options that affect the request |


### get

The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 


#### Signature
`get(url: string,options?: IODataBatchRequestOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | `IODataBatchRequestOptions` | _Optional._- additional options that affect the request |


### post

The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 


#### Signature
`post(url: string,options: IODataBatchRequestOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | `IODataBatchRequestOptions` | - additional options that affect the request |

