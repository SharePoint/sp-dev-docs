# Request class









### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`string`     | `referrer:` | `string` |  |
|`Headers`     | `headers:` | [`Headers`](headers.md) |  |
|`string|RequestContext`     | `context:` | `string`,[`RequestContext`](requestcontext.md) |  |
|`string|RequestMode`     | `mode:` | `string`,[`RequestMode`](requestmode.md) |  |
|`string|RequestCredentials`     | `credentials:` | `string`,[`RequestCredentials`](requestcredentials.md) |  |
|`string|RequestCache`     | `cache:` | `string`,[`RequestCache`](requestcache.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`RequestInit`](requestinit.md) |  |




### constructor



#### Signature
`constructor(input: string|Request,init?:RequestInit)`

#### Returns
[`RequestInit`](requestinit.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `input`    | `string`,[`Request`](request.md) |  |
| `init`    | [`RequestInit`](requestinit.md) | _Optional._ |

