# get(url,options)

Calls fetch(),but sets the method to 'GET'.

**Signature:** _get(url: string,options?: [IBasicHttpClientOptions](../sp-client-base/ibasichttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | _Optional._- additional options that affect the request |

