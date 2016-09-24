# addDigestToCache(webUrl,digestValue,expirationTimestamp)

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

