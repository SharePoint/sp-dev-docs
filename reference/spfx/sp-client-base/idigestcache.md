# IDigestCache interface





IDigestCache is an internal service used by HttpClient to maintain a cache of request digests 
for each SPWeb URL. A request digest is a security token that the SharePoint server requires for 
for any REST write operation, specified via the "X-RequestDigest" HTTP header. It is obtained 
by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount 
of time. For more information, see the MSDN article 
"Complete basic operations using SharePoint 2013 REST endpoints".







## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`addDigestToCache(webUrl,digestValue,expirationTimestamp)`](#adddigesttocacheweburldigestvalueexpirationtimestamp)      | `void` | Inserts a specific request digest value into the cache. Normally this is unnecessary because  the framework will automatically issue a REST request to fetch the digest when necessary;  however, in advanced scenarios addDigestToCache() can be used to avoid the overhead of the  REST call.   |
|[`clearAllDigests()`](#clearalldigests)      | `void` | Clears all values from the cache. |
|[`clearDigest(webUrl)`](#cleardigestweburl)      | `boolean` | Clears the cached digest for the specified SPWeb URL. This operation is useful  e.g. if an error indicates that a digest was invalidated prior to its expiration time.   |
|[`fetchDigest(webUrl)`](#fetchdigestweburl)      | [`Promise<string>`](../es6-promise/promise.md) | Returns a digest string for the specified SPWeb URL. If the cache already contains a usable value,  the promise is fulfilled immediately. Otherwise, the promise will be pending and resolve after  an HTTP request obtains the digest, which will be added to the cache. |




### addDigestToCache(webUrl,digestValue,expirationTimestamp)

Inserts a specific request digest value into the cache. Normally this is unnecessary because 
the framework will automatically issue a REST request to fetch the digest when necessary; 
however, in advanced scenarios addDigestToCache() can be used to avoid the overhead of the 
REST call. 


**Signature:** _addDigestToCache(webUrl: string,digestValue: string,expirationTimestamp: number): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb that the API call will be issued to.  This may be a server-relative or absolute URL. |
| `digestValue`    | `string` | The digest value,which is an opaque that must be generated  by the SharePoint server. The syntax will look something like  this: "0x0B85...2EAC,29 Jan 2016 01:23:45 -0000" |
| `expirationTimestamp`    | `number` | A future point in time,as measured by performance.now(),after which  the digest value will no longer be valid.  NOTE: The expirationTime is a DOMHighResTimeStamp value whose units are  fractional milliseconds; for example, to specify an expiration  "5 seconds from right now", use performance.now()+5000. |


### clearAllDigests()

Clears all values from the cache.

**Signature:** _clearAllDigests(): void_

**Returns**: `void`



#### Parameters
None


### clearDigest(webUrl)

Clears the cached digest for the specified SPWeb URL. This operation is useful 
e.g. if an error indicates that a digest was invalidated prior to its expiration time. 


**Signature:** _clearDigest(webUrl: string): boolean_

**Returns**: `boolean`

Returns true if a cache entry was found and deleted false otherwise.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb whose digest should be cleared.  This may be a server-relative or absolute URL. |


### fetchDigest(webUrl)

Returns a digest string for the specified SPWeb URL. If the cache already contains a usable value, 
the promise is fulfilled immediately. Otherwise, the promise will be pending and resolve after 
an HTTP request obtains the digest, which will be added to the cache.

**Signature:** _fetchDigest(webUrl: string): [Promise](../es6-promise/promise.md)<string>_

**Returns**: [`Promise<string>`](../es6-promise/promise.md)

A promise that is fulfilled with the digest value.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb that the API call will be issued to.  This may be a server-relative or absolute URL. |

