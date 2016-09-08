# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceScope`     | `protected` | [`ServiceScope`](servicescope.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ServiceScope`](servicescope.md) |  |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](promise.md) | Performs a REST service call |
|[`fetchCore`](#fetchcore)     | `protected` | [`Promise<Response>`](promise.md) |  |
|[`get`](#get)     | `public` | [`Promise<Response>`](promise.md) | Calls fetch(),but sets the method to 'GET' |
|[`post`](#post)     | `public` | [`Promise<Response>`](promise.md) | Calls fetch(),but sets the method to 'POST' |




### constructor



#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`ServiceScope`](servicescope.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](servicescope.md) |  |


### fetch

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Signature
`public fetch(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](ibasichttpclientoptions.md) | - additional options that affect the request |


### fetchCore



#### Signature
`protected fetchCore(request: Request): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](request.md) |  |


### get

Calls fetch(),but sets the method to 'GET'.

#### Signature
`public get(url: string,options?: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](ibasichttpclientoptions.md) | _Optional._- additional options that affect the request |


### post

Calls fetch(),but sets the method to 'POST'.

#### Signature
`public post(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](ibasichttpclientoptions.md) | - additional options that affect the request |

