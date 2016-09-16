# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.


## Constructor


**Signature:** `constructor(serviceScope: ServiceScope)`

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
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | Performs a REST service call. Although the HttpClient subclass adds  additional enhancements, the parameters and semantics for BasicHttpClient.fetch()  are essentially the same as the WHATWG API standard that is documented here:  https://fetch.spec.whatwg.org/ |
|[`fetchCore`](#fetchcore)     | `protected` | [`Promise<Response>`](../es6-promise/promise.md) |  |
|[`get`](#get)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | Calls fetch(),but sets the method to 'GET'. |
|[`post`](#post)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | Calls fetch(),but sets the method to 'POST'. |





### fetch

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

**Signature:** ``fetch(url: string,options: IBasicHttpClientOptions): Promise<Response>``

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |


### fetchCore



**Signature:** ``fetchCore(request: Request): Promise<Response>``

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](../whatwg-fetch/request.md) |  |


### get

Calls fetch(),but sets the method to 'GET'.

**Signature:** ``get(url: string,options?: IBasicHttpClientOptions): Promise<Response>``

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | _Optional._- additional options that affect the request |


### post

Calls fetch(),but sets the method to 'POST'.

**Signature:** ``post(url: string,options: IBasicHttpClientOptions): Promise<Response>``

**Returns**: [`Promise<Response>`](../es6-promise/promise.md)

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |

