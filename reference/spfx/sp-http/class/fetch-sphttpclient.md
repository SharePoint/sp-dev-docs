# fetch(url,configuration,options)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Generally, the parameters and semantics for SPHttpClient.fetch() are essentially the same as the WHATWG API standard that is documented here: https://fetch.spec.whatwg.org/ The SPHttpClient subclass adds some additional behaviors that are convenient when working with SharePoint ODATA API's (which can be avoided by using HttpClient instead): - Default "Accept" and "Content-Type" headers are added if not explicitly specified. - For write operations, an "X-RequestDigest" header is automatically added - The request digest token is automatically fetched and stored in a cache, with support for preloading For a write operation, SPHttpClient will automatically add the "X-RequestDigest" header, which may need to be obtained by issuing a seperate request such as "https://example.com/sites/sample/_api/contextinfo". Typically the appropriate SPWeb URL can be guessed by looking for a reserved URL segment such as "_api" in the original URL passed to fetch(); if not, use ISPHttpClientOptions.webUrl to specify it explicitly.

**Signature:** _@override public fetch(url: string, configuration: [SPHttpClientConfiguration](../sp-http/class/sphttpclientconfiguration.md),
    options: [ISPHttpClientOptions](../sp-http/interface/isphttpclientoptions.md)): Promise<[SPHttpClientResponse](../sp-http/class/sphttpclientresponse.md)>;_

**Returns**: `Promise<SPHttpClientResponse>`



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`SPHttpClientConfiguration`](../sp-http/class/sphttpclientconfiguration.md) | determines the default behavior of SPHttpClient; normally this should be the latest version number from SPHttpClientConfigurations |
| `options`    | [`ISPHttpClientOptions`](../sp-http/interface/isphttpclientoptions.md) | additional options that affect the request |


