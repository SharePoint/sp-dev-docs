# GraphHttpClient class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

GraphHttpClient is used to perform REST calls against Microsoft Graph. It adds default headers and collects telemetry that helps the service to monitor the performance of an application. https://developer.microsoft.com/en-us/graph/ For communicating with non-Graph services, use the HttpClient or SPHttpClient class instead.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../../sp-core-library/class/servicescope.md));_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`configurations`     | `public` | [`IGraphHttpClientConfigurations`](../../sp-http/interface/igraphhttpclientconfigurations.md) | The standard predefined GraphHttpClientConfiguration objects for use with the GraphHttpClient class. |
|`serviceKey`     | `public` | [`ServiceKey`](../../sp-core-library/class/servicekey.md)<[`GraphHttpClient`](../../sp-http/class/graphhttpclient.md)> | The service key for GraphHttpClient. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`fetch(url,configuration,options)`](fetch-graphhttpclient.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<GraphHttpClientResponse> | Generally, the parameters and semantics for HttpClient.fetch() are essentially the same as the WHATWG API standard that is documented here: https://fetch.spec.whatwg.org/ The GraphHttpClient subclass adds some additional behaviors that are convenient when working with SharePoint ODATA API's (which can be avoided by using HttpClient instead): - Default "Accept" and "Content-Type" headers are added if not explicitly specified. |
|[`get(url,configuration,options)`](get-graphhttpclient.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<GraphHttpClientResponse> | Calls fetch(), but sets the method to 'GET'. |
|[`post(url,configuration,options)`](post-graphhttpclient.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<GraphHttpClientResponse> | Calls fetch(), but sets the method to 'POST'. |





