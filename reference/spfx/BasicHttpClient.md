# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceScope`     | `protected` | [`ServiceScope`](ServiceScope.md) | Calls fetch(),but sets the method to 'POST' |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ServiceScope`](ServiceScope.md) |  |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](Promise.md) | Performs a REST service call |
|[`fetchCore`](#fetchcore)     | `protected` | [`Promise<Response>`](Promise.md) | Performs a REST service call |
|[`get`](#get)     | `public` | [`Promise<Response>`](Promise.md) | Calls fetch(),but sets the method to 'GET' |
|[`post`](#post)     | `public` | [`Promise<Response>`](Promise.md) | Calls fetch(),but sets the method to 'POST' |




### constructor



#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`ServiceScope`](ServiceScope.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](ServiceScope.md) |  |


### fetch

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https:

#### Signature
`public fetch(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `options`    | [`IBasicHttpClientOptions`](IBasicHttpClientOptions.md) |  |


### fetchCore

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https:

#### Signature
`protected fetchCore(request: Request): Promise<Response>`

#### Returns
[`Promise<Response>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](Request.md) |  |


### get

Calls fetch(),but sets the method to 'GET'.

#### Signature
`public get(url: string,options?: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `options`    | [`IBasicHttpClientOptions`](IBasicHttpClientOptions.md) | _Optional._ |


### post

Calls fetch(),but sets the method to 'POST'.

#### Signature
`public post(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `options`    | [`IBasicHttpClientOptions`](IBasicHttpClientOptions.md) |  |

