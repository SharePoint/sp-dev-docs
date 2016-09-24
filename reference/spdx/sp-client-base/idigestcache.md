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
|[`addDigestToCache(webUrl,digestValue,expirationTimestamp)`](adddigesttocache-dlbs9.md)      | `void` | Inserts a specific request digest value into the cache. Normally this is unnecessary because  the framework will automatically issue a REST request to fetch the digest when necessary;  however, in advanced scenarios addDigestToCache() can be used to avoid the overhead of the  REST call.   |
|[`clearAllDigests()`](clearalldigests-ovnk9.md)      | `void` | Clears all values from the cache. |
|[`clearDigest(webUrl)`](cleardigest-hdfi9.md)      | `boolean` | Clears the cached digest for the specified SPWeb URL. This operation is useful  e.g. if an error indicates that a digest was invalidated prior to its expiration time.   |
|[`fetchDigest(webUrl)`](fetchdigest-dbvu9.md)      | [`Promise`](../es6-promise/promise.md)<string> | Returns a digest string for the specified SPWeb URL. If the cache already contains a usable value,  the promise is fulfilled immediately. Otherwise, the promise will be pending and resolve after  an HTTP request obtains the digest, which will be added to the cache. |



