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
|[`arrayBuffer()`](arraybuffer-httpclientresponse.md)     | `public` | `Promise<ArrayBuffer>` | {@inheritdoc Body.arrayBuffer} |
|[`blob()`](blob-httpclientresponse.md)     | `public` | `Promise<Blob>` | {@inheritdoc Body.blob} |
|[`clone()`](clone-httpclientresponse.md)     | `public` | [`HttpClientResponse`](../sp-http/httpclientresponse.md) |  |
|[`error()`](error-httpclientresponse.md)     | `public, static` | `Response` | {@inheritdoc Response.error} |
|[`formData()`](formdata-httpclientresponse.md)     | `public` | `Promise<FormData>` | {@inheritdoc Body.formData} |
|[`json()`](json-httpclientresponse.md)     | `public` | `Promise<any>` | {@inheritdoc Body.json} |
|[`redirect()`](redirect-httpclientresponse.md)     | `public, static` | `Response` | {@inheritdoc Response.redirect} |
|[`text()`](text-httpclientresponse.md)     | `public` | `Promise<string>` | {@inheritdoc Body.text} |





### Remarks

This is a placeholder. In the future, additional HttpClient-specific functionality may be added to this class.

