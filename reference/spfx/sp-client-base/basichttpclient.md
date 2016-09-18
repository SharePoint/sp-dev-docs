# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.


## Constructor


**Signature:** constructor(serviceScope: [ServiceScope](../sp-client-base/servicescope.md))

**Returns**: [`BasicHttpClient`](../sp-client-base/basichttpclient.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceScope`     | `protected` | [`ServiceScope`](../sp-client-base/servicescope.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`fetch(url,options)`](#fetchurloptions)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | Performs a REST service call. Although the HttpClient subclass adds  additional enhancements, the parameters and semantics for BasicHttpClient.fetch()  are essentially the same as the WHATWG API standard that is documented here:  https://fetch.spec.whatwg.org/ |
|[`fetchCore(request)`](#fetchcorerequest)     | `protected` | [`Promise<Response>`](../es6-promise/promise.md) |  |
|[`get(url,options)`](#geturloptions)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | Calls fetch(),but sets the method to 'GET'. |
|[`post(url,options)`](#posturloptions)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | Calls fetch(),but sets the method to 'POST'. |





### fetch(url,options)

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

**Signature:** _fetch(url: string,options: [IBasicHttpClientOptions](../sp-client-base/ibasichttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |


### fetchCore(request)



**Signature:** _fetchCore(request: [Request](../whatwg-fetch/request.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](../whatwg-fetch/request.md) |  |


### get(url,options)

Calls fetch(),but sets the method to 'GET'.

**Signature:** _get(url: string,options?: [IBasicHttpClientOptions](../sp-client-base/ibasichttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | _Optional._- additional options that affect the request |


### post(url,options)

Calls fetch(),but sets the method to 'POST'.

**Signature:** _post(url: string,options: [IBasicHttpClientOptions](../sp-client-base/ibasichttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |

