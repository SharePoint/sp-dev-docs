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
|[`addDigestToCache`](#adddigesttocache)      | `void` | Inserts a specific request digest value into the cache |
|[`clearAllDigests`](#clearalldigests)      | `void` | Clears all values from the cache |
|[`clearDigest`](#cleardigest)      | `boolean` | Clears the cached digest for the specified SPWeb URL |
|[`fetchDigest`](#fetchdigest)      | [`Promise<string>`](promise.md) | Returns a digest string for the specified SPWeb URL |



### addDigestToCache

Inserts a specific request digest value into the cache. Normally this is unnecessary because 
the framework will automatically issue a REST request to fetch the digest when necessary; 
however, in advanced scenarios addDigestToCache() can be used to avoid the overhead of the 
REST call. 


#### Signature
`addDigestToCache(webUrl: string,digestValue: string,expirationTimestamp: number): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb that the API call will be issued to |
| `digestValue`    | `string` | The digest value,which is an opaque that must be generated  by the SharePoint server |
| `expirationTimestamp`    | `number` | A future point in time,as measured by performance |


### clearAllDigests

Clears all values from the cache.

#### Signature
`clearAllDigests(): void`

#### Returns
`void`


#### Parameters
None


### clearDigest

Clears the cached digest for the specified SPWeb URL. This operation is useful 
e.g. if an error indicates that a digest was invalidated prior to its expiration time. 


#### Signature
`clearDigest(webUrl: string): boolean`

#### Returns
`boolean`
Returns true if a cache entry was found and deleted false otherwise.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb whose digest should be cleared |


### fetchDigest

Returns a digest string for the specified SPWeb URL. If the cache already contains a usable value, 
the promise is fulfilled immediately. Otherwise, the promise will be pending and resolve after 
an HTTP request obtains the digest, which will be added to the cache.

#### Signature
`fetchDigest(webUrl: string): Promise<string>`

#### Returns
[`Promise<string>`](promise.md)
A promise that is fulfilled with the digest value.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb that the API call will be issued to |

