# HttpClient class





HttpClient implements a basic set of features for performing REST operations. The subclass SPHttpClient extends this basic functionality with SharePoint-specific enhancements.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../sp-core-library/servicescope.md));_

**Returns**: 



#### Parameters
None

| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceKey`     | `public` | [`ServiceKey`](../sp-core-library/servicekey.md)<[`HttpClient`](../sp-http/httpclient.md)> | The service key for HttpClient. |
|`serviceScope`     | `public` | [`ServiceScope`](../sp-core-library/servicescope.md) | _Read-only._ The ServiceScope that as passed to the constructor. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`fetch(url,configuration,options)`](fetch-ekuc9.md)     | `public` | `Promise<HttpClientResponse>` | Performs a REST service call. Although the SPHttpClient subclass adds additional enhancements, the parameters and semantics for HttpClient.fetch() are essentially the same as the WHATWG API standard that is documented here: https://fetch.spec.whatwg.org/ |
|[`fetchCore()`](fetchcore-p9z89.md)     | `protected` | `Promise<Response>` | All network requests are routed through this method, which calls the underlying IFetchProvider.fetch(). |
|[`get(url,configuration,options)`](get-xkvg9.md)     | `public` | `Promise<HttpClientResponse>` | Calls fetch(), but sets the method to 'GET'. |
|[`post(url,configuration,options)`](post-1dus9.md)     | `public` | `Promise<HttpClientResponse>` | Calls fetch(), but sets the method to 'POST'. |




