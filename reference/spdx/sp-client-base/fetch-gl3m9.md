# fetch(url,options)

Generally,the parameters and semantics for HttpClient.fetch() are essentially 
the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/ 
 
The HttpClient subclass adds some additional behaviors that are convenient when 
working with SharePoint ODATA API's (which can be avoided by using 
BasicHttpClient instead): 
- Default "Accept" and "Content-Type" headers are added if not explicitly specified. 
- For write operations, an "X-RequestDigest" header is automatically added 
- The request digest token is automatically fetched and stored in a cache, with 
support for preloading 
 
For a write operation, HttpClient will automatically add the "X-RequestDigest" 
header, which may need to be obtained by issuing a seperate request such as 
"https://example.com/sites/sample/_api/contextinfo". Typically the appropriate 
SPWeb URL can be guessed by looking for a reserved URL segment such as "_api" 
in the original URL passed to fetch(); if not, use IHttpClientOptions.webUrl 
to specify it explicitly. 


**Signature:** _fetch(url: string,options: [IHttpClientOptions](../sp-client-base/ihttpclientoptions.md)): [Promise](../es6-promise/promise.md)<[Response](../whatwg-fetch/response.md)>_

**Returns**: [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)>

a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch |
| `options`    | [`IHttpClientOptions`](../sp-client-base/ihttpclientoptions.md) | - additional options that affect the request |

