# HttpClientResponse class

_Implements: `Response`_



The Response subclass returned by methods such as HttpClient.fetch().



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`bodyUsed`     | `public` | `boolean` | _Read-only._ {@inheritdoc Body.bodyUsed} |
|`headers`     | `public` | `Headers` | _Read-only._ {@inheritdoc Response.headers} |
|`nativeResponse`     | `public` | `Response` |  |
|`ok`     | `public` | `boolean` | _Read-only._ {@inheritdoc Response.ok} |
|`status`     | `public` | `number` | _Read-only._ {@inheritdoc Response.status} |
|`statusText`     | `public` | `string` | _Read-only._ {@inheritdoc Response.statusText} |
|`type`     | `public` | `ResponseType` | _Read-only._ {@inheritdoc Response.type} |
|`url`     | `public` | `string` | _Read-only._ {@inheritdoc Response.url} |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`arrayBuffer()`](arraybuffer-3xbq9.md)     | `public` | `Promise<ArrayBuffer>` | {@inheritdoc Body.arrayBuffer} |
|[`blob()`](blob-gulg9.md)     | `public` | `Promise<Blob>` | {@inheritdoc Body.blob} |
|[`clone()`](clone-mtkw9.md)     | `public` | [`HttpClientResponse`](../sp-http/httpclientresponse.md) |  |
|[`error()`](error-o8xg9.md)     | `public, static` | `Response` | {@inheritdoc Response.error} |
|[`formData()`](formdata-zxna9.md)     | `public` | `Promise<FormData>` | {@inheritdoc Body.formData} |
|[`json()`](json-kjno9.md)     | `public` | `Promise<any>` | {@inheritdoc Body.json} |
|[`redirect()`](redirect-ikt49.md)     | `public, static` | `Response` | {@inheritdoc Response.redirect} |
|[`text()`](text-yyde9.md)     | `public` | `Promise<string>` | {@inheritdoc Body.text} |




