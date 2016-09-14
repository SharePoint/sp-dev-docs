# Response class

_Implements: [`Body`](../whatwg-fetch/body.md)_





## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`type`     | `public` | `string`,[`ResponseType`](../whatwg-fetch/responsetype.md) |  |
|`url`     | `public` | `string` |  |
|`status`     | `public` | `number` |  |
|`ok`     | `public` | `boolean` |  |
|`statusText`     | `public` | `string` |  |
|`headers`     | `public` | [`Headers`](../whatwg-fetch/headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`error`](#error)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`redirect`](#redirect)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`clone`](#clone)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |





### constructor



#### Signature
`constructor(body?: BodyInit,init?: ResponseInit)`

#### Returns
[`Response`](../whatwg-fetch/response.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | [`BodyInit`](../whatwg-fetch/whatwg-fetch-module.md#types) | _Optional._ |
| `init`    | [`ResponseInit`](../whatwg-fetch/responseinit.md) | _Optional._ |


### error



#### Signature
`error(): Response`

#### Returns
[`Response`](../whatwg-fetch/response.md)


#### Parameters
None


### redirect



#### Signature
`redirect(url: string,status: number): Response`

#### Returns
[`Response`](../whatwg-fetch/response.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `status`    | `number` |  |


### clone



#### Signature
`clone(): Response`

#### Returns
[`Response`](../whatwg-fetch/response.md)


#### Parameters
None

