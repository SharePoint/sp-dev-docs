# getWebUrlFromRequestUrl(requestUrl)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



This uses a heuristic to guess the SPWeb URL associated with the provided REST URL. This is necessary for operations such as the X-RequestDigest and ODATA batching, which require POSTing to a separate REST endpoint in order to complete a request. For excample, if the requestUrl is "/sites/site/web/_api/service", the returned URL would be "/sites/site/web". Or if the requestUrl is "http://example.com/_layouts/service", the returned URL would be "http://example.com".

**Signature:** _public static getWebUrlFromRequestUrl(requestUrl: string): string;_

**Returns**: `string`



the inferred SPWeb URL

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestUrl`    | `string` | The URL for a SharePoint REST service |


