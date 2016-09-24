# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../sp-client-base/servicescope.md))_

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
|[`fetch(url,options)`](fetch-zvba9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Performs a REST service call. Although the HttpClient subclass adds  additional enhancements, the parameters and semantics for BasicHttpClient.fetch()  are essentially the same as the WHATWG API standard that is documented here:  https://fetch.spec.whatwg.org/ |
|[`fetchCore(request)`](fetchcore-kyzk9.md)     | `protected` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> |  |
|[`get(url,options)`](get-wqvw9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Calls fetch(),but sets the method to 'GET'. |
|[`post(url,options)`](post-qzwc9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Calls fetch(),but sets the method to 'POST'. |




