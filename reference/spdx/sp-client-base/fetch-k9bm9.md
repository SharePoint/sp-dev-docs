# fetch(url,options)

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

