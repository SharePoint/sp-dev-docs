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
|[`addDigestToCache`](#adddigesttocache)      | `void` | the digest value will no longer be valid |
|[`clearAllDigests`](#clearalldigests)      | `void` | Clears all values from the cache |
|[`clearDigest`](#cleardigest)      | `boolean` | This may be a server-relative or absolute URL |
|[`fetchDigest`](#fetchdigest)      | [`Promise<string>`](Promise.md) | This may be a server-relative or absolute URL |



### addDigestToCache

the digest value will no longer be valid. 
NOTE: The expirationTime is a DOMHighResTimeStamp value whose units are 
fractional milliseconds; for example, to specify an expiration 
"5 seconds from right now", use performance.now()+5000.

#### Signature
`addDigestToCache(webUrl: string,digestValue: string,expirationTimestamp: number): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` |  |
| `digestValue`    | `string` |  |
| `expirationTimestamp`    | `number` |  |


### clearAllDigests

Clears all values from the cache.

#### Signature
`clearAllDigests(): void`

#### Returns
`void`

#### Parameters
None


### clearDigest

This may be a server-relative or absolute URL.

#### Signature
`clearDigest(webUrl: string): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` |  |


### fetchDigest

This may be a server-relative or absolute URL.

#### Signature
`fetchDigest(webUrl: string): Promise<string>`

#### Returns
[`Promise<string>`](Promise.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` |  |

