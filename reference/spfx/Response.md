# Response class









### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`string|ResponseType`     | `type:` | `string`,[`ResponseType`](ResponseType.md) |  |
|`string`     | `statusText:` | `string` |  |
|`number`     | `status:` | `number` |  |
|`boolean`     | `ok:` | `boolean` |  |
|`Headers`     | `headers:` | [`Headers`](Headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ResponseInit`](ResponseInit.md) |  |
|[`error`](#error)     | `public` | [`Response`](Response.md) |  |
|[`redirect`](#redirect)     | `public` | [`Response`](Response.md) |  |
|[`clone`](#clone)     | `public` | [`Response`](Response.md) |  |




### constructor



#### Signature
`constructor(body?: BodyInit,init?: ResponseInit)`

#### Returns
[`ResponseInit`](ResponseInit.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | `BodyInit` | _Optional._ |
| `init`    | [`ResponseInit`](ResponseInit.md) | _Optional._ |


### error



#### Signature
`error(): Response`

#### Returns
[`Response`](Response.md)

#### Parameters
None


### redirect



#### Signature
`redirect(url: string,status: number): Response`

#### Returns
[`Response`](Response.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `status`    | `number` |  |


### clone



#### Signature
`clone(): Response`

#### Returns
[`Response`](Response.md)

#### Parameters
None

