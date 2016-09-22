# ODataBatch class





The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 



## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../sp-client-base/servicescope.md),batchOptions?: [IODataBatchOptions](../sp-client-base/iodatabatchoptions.md))_

**Returns**: [`ODataBatch`](../sp-client-base/odatabatch.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |
| `batchOptions`    | [`IODataBatchOptions`](../sp-client-base/iodatabatchoptions.md) | _Optional._ |





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`execute()`](#execute)     | `public` | [`Promise`](../es6-promise/promise.md)<[`ODataBatch`](../sp-client-base/odatabatch.md)> | Executes the batched queries that were queued using ODataBatch.fetch(). |
|[`fetch(url,options)`](#fetchurloptions)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Queues a new request,and returns a promise that can be used to access  the server response (after execute() has completed). The parameters for  this function are basically the same as the WHATWG API standard documented here:  https://fetch.spec.whatwg.org/    However, be aware that certain REST headers are ignored or not allowed inside  a batch. See the ODATA documentation for details.    When execute() is called, it will POST to a URL such as  "http://example.com/sites/sample/_api/$batch". Typically ODataBatch can successfully  guess the appropriate SPWeb URL by looking for a reserved URL segment such as "_api"  in the first URL passed to fetch(). If not, use IODataBatchOptions.webUrl to specify it  explicitly.   |
|[`get(url,options)`](#geturloptions)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Calls fetch(),but sets the method to 'GET'. |
|[`post(url,options)`](#posturloptions)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Calls fetch(),but sets the method to 'POST'. |





### execute()

Executes the batched queries that were queued using ODataBatch.fetch().

**Signature:** _execute(): [Promise](../es6-promise/promise.md)<[ODataBatch](../sp-client-base/odatabatch.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`ODataBatch`](../sp-client-base/odatabatch.md)>



#### Parameters
None


### fetch(url,options)

Queues a new request,and returns a promise that can be used to access 
the server response (after execute() has completed). The parameters for 
this function are basically the same as the WHATWG API standard documented here: 
https://fetch.spec.whatwg.org/ 
 
However, be aware that certain REST headers are ignored or not allowed inside 
a batch. See the ODATA documentation for details. 
 
When execute() is called, it will POST to a URL such as 
"http://example.com/sites/sample/_api/$batch". Typically ODataBatch can successfully 
guess the appropriate SPWeb URL by looking for a reserved URL segment such as "_api" 
in the first URL passed to fetch(). If not, use IODataBatchOptions.webUrl to specify it 
explicitly. 


**Signature:** _fetch(url: string,options?: IODataBatchRequestOptions): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch,or an already initialized Request object |
| `options`    | `IODataBatchRequestOptions` | _Optional._- additional options that affect the request |


### get(url,options)

Calls fetch(),but sets the method to 'GET'.

**Signature:** _get(url: string,options?: IODataBatchRequestOptions): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | `IODataBatchRequestOptions` | _Optional._- additional options that affect the request |


### post(url,options)

Calls fetch(),but sets the method to 'POST'.

**Signature:** _post(url: string,options: IODataBatchRequestOptions): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | `IODataBatchRequestOptions` | - additional options that affect the request |

