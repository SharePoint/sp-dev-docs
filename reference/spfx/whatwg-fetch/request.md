# Request class

_Implements: [`Body`](../whatwg-fetch/body.md)_







### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`method`     | `public` | `string` |  |
|`url`     | `public` | `string` |  |
|`headers`     | `public` | [`Headers`](../whatwg-fetch/headers.md) |  |
|`context`     | `public` | `string`,[`RequestContext`](../whatwg-fetch/requestcontext.md) |  |
|`referrer`     | `public` | `string` |  |
|`mode`     | `public` | `string`,[`RequestMode`](../whatwg-fetch/requestmode.md) |  |
|`credentials`     | `public` | `string`,[`RequestCredentials`](../whatwg-fetch/requestcredentials.md) |  |
|`cache`     | `public` | `string`,[`RequestCache`](../whatwg-fetch/requestcache.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`Request`](../whatwg-fetch/request.md) |  |





### constructor



#### Signature
`constructor(input: string|Request,init?:RequestInit)`

#### Returns
[`Request`](../whatwg-fetch/request.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `input`    | `string`,[`Request`](../whatwg-fetch/request.md) |  |
| `init`    | [`RequestInit`](../whatwg-fetch/requestinit.md) | _Optional._ |

