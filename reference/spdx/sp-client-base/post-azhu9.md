# post(url,options)

Calls fetch(),but sets the method to 'POST'.

**Signature:** _post(url: string,options: [IHttpClientOptions](../sp-client-base/ihttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IHttpClientOptions`](../sp-client-base/ihttpclientoptions.md) | - additional options that affect the request |

