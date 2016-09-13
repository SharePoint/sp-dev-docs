# Response class

_Implements: [`Body`](body.md)_







### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`type`     | `null` | `string`,[`ResponseType`](responsetype.md) |  |
|`url`     | `null` | `string` |  |
|`status`     | `null` | `number` |  |
|`ok`     | `null` | `boolean` |  |
|`statusText`     | `null` | `string` |  |
|`headers`     | `null` | [`Headers`](headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`Response`](response.md) |  |
|[`error`](#error)     | `public` | [`Response`](response.md) |  |
|[`redirect`](#redirect)     | `public` | [`Response`](response.md) |  |
|[`clone`](#clone)     | `public` | [`Response`](response.md) |  |





### constructor



#### Signature
`constructor(body?: BodyInit,init?: ResponseInit)`

#### Returns
[`Response`](response.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | [`BodyInit`](whatwg-fetch-module.md#types) | _Optional._ |
| `init`    | [`ResponseInit`](responseinit.md) | _Optional._ |


### error



#### Signature
`error(): Response`

#### Returns
[`Response`](response.md)


#### Parameters
None


### redirect



#### Signature
`redirect(url: string,status: number): Response`

#### Returns
[`Response`](response.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `status`    | `number` |  |


### clone



#### Signature
`clone(): Response`

#### Returns
[`Response`](response.md)


#### Parameters
None

