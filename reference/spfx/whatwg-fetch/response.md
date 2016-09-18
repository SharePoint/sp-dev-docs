# Response class

_Implements: [`Body`](../whatwg-fetch/body.md)_






## Constructor


**Signature:** constructor(body?: BodyInit,init?: [ResponseInit](../whatwg-fetch/responseinit.md))

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | [`BodyInit`](..//whatwg-fetch.md#types) | _Optional._ |
| `init`    | [`ResponseInit`](../whatwg-fetch/responseinit.md) | _Optional._ |


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
|[`error()`](#error)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`redirect(url,status)`](#redirecturlstatus)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`clone()`](#clone)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |





### error()



**Signature:** _error(): [Response](../whatwg-fetch/response.md)_

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters
None


### redirect(url,status)



**Signature:** _redirect(url: string,status: number): [Response](../whatwg-fetch/response.md)_

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `status`    | `number` |  |


### clone()



**Signature:** _clone(): [Response](../whatwg-fetch/response.md)_

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters
None

