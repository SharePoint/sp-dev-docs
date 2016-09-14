# HttpClient class

_Implements: [`BasicHttpClient`](../sp-client-base/basichttpclient.md)_



HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`HttpClient`](../sp-client-base/httpclient.md) | HttpClient is used to perform REST calls against SharePoint |
|[`beginBatch`](#beginbatch)     | `public` | [`ODataBatch`](../sp-client-base/odatabatch.md) | HttpClient is used to perform REST calls against SharePoint |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | HttpClient is used to perform REST calls against SharePoint |
|[`get`](#get)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | HttpClient is used to perform REST calls against SharePoint |
|[`getWebUrlFromRequestUrl`](#getweburlfromrequesturl)     | `public, _static_` | `string` | HttpClient is used to perform REST calls against SharePoint |
|[`post`](#post)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | HttpClient is used to perform REST calls against SharePoint |





### constructor

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.

#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`HttpClient`](../sp-client-base/httpclient.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |


### beginBatch

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.

#### Signature
`beginBatch(batchOptions?: IODataBatchOptions): ODataBatch`

#### Returns
[`ODataBatch`](../sp-client-base/odatabatch.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `batchOptions`    | [`IODataBatchOptions`](../sp-client-base/iodatabatchoptions.md) | _Optional._ |


### fetch

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.

#### Signature
`fetch(url: string,options: IHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IHttpClientOptions`](../sp-client-base/ihttpclientoptions.md) | - additional options that affect the request |


### get

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.

#### Signature
`get(url: string,options?: IHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IHttpClientOptions`](../sp-client-base/ihttpclientoptions.md) | _Optional._- additional options that affect the request |


### getWebUrlFromRequestUrl

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.

#### Signature
`getWebUrlFromRequestUrl(requestUrl: string): string`

#### Returns
`string`
the inferred SPWeb URL

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestUrl`    | `string` | The URL for a SharePoint REST service |


### post

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.

#### Signature
`post(url: string,options: IHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IHttpClientOptions`](../sp-client-base/ihttpclientoptions.md) | - additional options that affect the request |

