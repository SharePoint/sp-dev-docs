# Response class









### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`string|ResponseType`     | `type:` | `string`,[`ResponseType`](responsetype.md) |  |
|`string`     | `statusText:` | `string` |  |
|`number`     | `status:` | `number` |  |
|`boolean`     | `ok:` | `boolean` |  |
|`Headers`     | `headers:` | [`Headers`](headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ResponseInit`](responseinit.md) |  |
|[`error`](#error)     | `public` | [`Response`](response.md) |  |
|[`redirect`](#redirect)     | `public` | [`Response`](response.md) |  |
|[`clone`](#clone)     | `public` | [`Response`](response.md) |  |




### constructor



#### Signature
`constructor(body?: BodyInit,init?: ResponseInit)`

#### Returns
[`ResponseInit`](responseinit.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | `BodyInit` | _Optional._ |
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

