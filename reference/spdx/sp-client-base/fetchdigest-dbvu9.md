# fetchDigest(webUrl)

Returns a digest string for the specified SPWeb URL. If the cache already contains a usable value, 
the promise is fulfilled immediately. Otherwise, the promise will be pending and resolve after 
an HTTP request obtains the digest, which will be added to the cache.

**Signature:** _fetchDigest(webUrl: string): [Promise](../es6-promise/promise.md)<string>_

**Returns**: [`Promise`](../es6-promise/promise.md)<string>

A promise that is fulfilled with the digest value.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb that the API call will be issued to.  This may be a server-relative or absolute URL. |

