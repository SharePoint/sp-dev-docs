# HttpClientResponse class

_Implements: [`Response`](../../web-apis/class/response.md)_





The Response subclass returned by methods such as HttpClient.fetch().



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`bodyUsed`     | `public` | `boolean` | _Read-only._ See documentation for whatwg-fetch:Body.bodyUsed |
|`headers`     | `public` | [`Headers`](../../web-apis/class/headers.md) | _Read-only._ See documentation for whatwg-fetch:Response.headers |
|`nativeResponse`     | `public` | [`Response`](../../web-apis/class/response.md) |  |
|`ok`     | `public` | `boolean` | _Read-only._ See documentation for whatwg-fetch:Response.ok |
|`status`     | `public` | `number` | _Read-only._ See documentation for whatwg-fetch:Response.status |
|`statusText`     | `public` | `string` | _Read-only._ See documentation for whatwg-fetch:Response.statusText |
|`type`     | `public` | `string` | _Read-only._ See documentation for whatwg-fetch:Response.type |
|`url`     | `public` | `string` | _Read-only._ See documentation for whatwg-fetch:Response.url |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`arrayBuffer()`](arraybuffer-httpclientresponse.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<ArrayBuffer> | See documentation for whatwg-fetch:Body.arrayBuffer |
|[`blob()`](blob-httpclientresponse.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<Blob> | See documentation for whatwg-fetch:Body.blob |
|[`clone()`](clone-httpclientresponse.md)     | `public` | [`HttpClientResponse`](../../sp-http/class/httpclientresponse.md) |  |
|[`formData()`](formdata-httpclientresponse.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<FormData> | See documentation for whatwg-fetch:Body.formData |
|[`json()`](json-httpclientresponse.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<any> | See documentation for whatwg-fetch:Body.json |
|[`text()`](text-httpclientresponse.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<string> | See documentation for whatwg-fetch:Body.text |





### Remarks

This is a placeholder. In the future, additional HttpClient-specific functionality may be added to this class.

