# get(url,configuration,options)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Calls fetch(), but sets the method to 'GET'.

**Signature:** _@virtual public get(url: string, configuration: [HttpClientConfiguration](../sp-http/class/httpclientconfiguration.md),
    options?: [IHttpClientOptions](../sp-http/interface/ihttpclientoptions.md)): Promise<[HttpClientResponse](../sp-http/class/httpclientresponse.md)>;_

**Returns**: `Promise<HttpClientResponse>`



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`HttpClientConfiguration`](../sp-http/class/httpclientconfiguration.md) | determines the default behavior of HttpClient; normally this should be the latest version number from HttpClientConfigurations |
| `options`    | [`IHttpClientOptions`](../sp-http/interface/ihttpclientoptions.md) | _Optional._ additional options that affect the request |


