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
|[`addDigestToCache`](#adddigesttocache)      | `void` | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL |
|[`clearAllDigests`](#clearalldigests)      | `void` | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL |
|[`clearDigest`](#cleardigest)      | `boolean` | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL |
|[`fetchDigest`](#fetchdigest)      | [`Promise<string>`](../es6-promise/promise.md) | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL |




### addDigestToCache

IDigestCache is an internal service used by HttpClient to maintain a cache of request digests 
for each SPWeb URL. A request digest is a security token that the SharePoint server requires for 
for any REST write operation, specified via the "X-RequestDigest" HTTP header. It is obtained 
by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount 
of time. For more information, see the MSDN article 
"Complete basic operations using SharePoint 2013 REST endpoints".

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

IDigestCache is an internal service used by HttpClient to maintain a cache of request digests 
for each SPWeb URL. A request digest is a security token that the SharePoint server requires for 
for any REST write operation, specified via the "X-RequestDigest" HTTP header. It is obtained 
by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount 
of time. For more information, see the MSDN article 
"Complete basic operations using SharePoint 2013 REST endpoints".

#### Signature
`clearAllDigests(): void`

#### Returns
`void`


#### Parameters
None


### clearDigest

IDigestCache is an internal service used by HttpClient to maintain a cache of request digests 
for each SPWeb URL. A request digest is a security token that the SharePoint server requires for 
for any REST write operation, specified via the "X-RequestDigest" HTTP header. It is obtained 
by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount 
of time. For more information, see the MSDN article 
"Complete basic operations using SharePoint 2013 REST endpoints".

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

IDigestCache is an internal service used by HttpClient to maintain a cache of request digests 
for each SPWeb URL. A request digest is a security token that the SharePoint server requires for 
for any REST write operation, specified via the "X-RequestDigest" HTTP header. It is obtained 
by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount 
of time. For more information, see the MSDN article 
"Complete basic operations using SharePoint 2013 REST endpoints".

#### Signature
`fetchDigest(webUrl: string): Promise<string>`

#### Returns
[`Promise<string>`](../es6-promise/promise.md)
A promise that is fulfilled with the digest value.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb that the API call will be issued to |

