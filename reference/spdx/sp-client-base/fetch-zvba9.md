# fetch(url,options)

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

**Signature:** _fetch(url: string,options: [IBasicHttpClientOptions](../sp-client-base/ibasichttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request |

