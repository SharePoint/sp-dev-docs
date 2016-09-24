# clearDigest(webUrl)

Clears the cached digest for the specified SPWeb URL. This operation is useful 
e.g. if an error indicates that a digest was invalidated prior to its expiration time. 


**Signature:** _clearDigest(webUrl: string): boolean_

**Returns**: `boolean`

Returns true if a cache entry was found and deleted false otherwise.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl`    | `string` | The URL of the SPWeb whose digest should be cleared.  This may be a server-relative or absolute URL. |

