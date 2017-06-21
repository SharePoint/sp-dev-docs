# HttpClient class







HttpClient implements a basic set of features for performing REST operations. The subclass SPHttpClient extends this basic functionality with SharePoint-specific enhancements.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../../sp-core-library.api/class/servicescope.md));_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`configurations`     | `public` | [`IHttpClientConfigurations`](../../sp-http.api/interface/ihttpclientconfigurations.md) | The standard predefined HttpClientConfiguration objects for use with the HttpClient class. |
|`serviceKey`     | `public` | [`ServiceKey`](../../sp-core-library.api/class/servicekey.md)<[`HttpClient`](../../sp-http.api/class/httpclient.md)> | The service key for HttpClient. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`fetch(url,configuration,options)`](fetch-httpclient.md)     | `public` | [`Promise`](../../web-apis.api/class/promise.md)<[`HttpClientResponse`](../../sp-http.api/class/httpclientresponse.md)> | Performs a REST service call. Although the SPHttpClient subclass adds additional enhancements, the parameters and semantics for HttpClient.fetch() are essentially the same as the WHATWG API standard that is documented here: https://fetch.spec.whatwg.org/ |
|[`get(url,configuration,options)`](get-httpclient.md)     | `public` | [`Promise`](../../web-apis.api/class/promise.md)<[`HttpClientResponse`](../../sp-http.api/class/httpclientresponse.md)> | Calls fetch(), but sets the method to 'GET'. |
|[`post(url,configuration,options)`](post-httpclient.md)     | `public` | [`Promise`](../../web-apis.api/class/promise.md)<[`HttpClientResponse`](../../sp-http.api/class/httpclientresponse.md)> | Calls fetch(), but sets the method to 'POST'. |





