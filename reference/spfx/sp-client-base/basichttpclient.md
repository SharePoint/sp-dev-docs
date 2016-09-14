# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceScope`     | `protected` | [`ServiceScope`](../sp-client-base/servicescope.md) | BasicHttpClient implements a basic set of features for performing REST operations |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`BasicHttpClient`](../sp-client-base/basichttpclient.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`fetchCore`](#fetchcore)     | `protected` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`get`](#get)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`post`](#post)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |





### constructor

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`BasicHttpClient`](../sp-client-base/basichttpclient.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |


### fetch

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`fetch(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |


### fetchCore

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`fetchCore(request: Request): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](../whatwg-fetch/request.md) |  |


### get

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`get(url: string,options?: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | _Optional._- additional options that affect the request |


### post

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`post(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |

