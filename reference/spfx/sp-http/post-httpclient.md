# post(url,configuration,options)




Calls fetch(), but sets the method to 'POST'.

**Signature:** _@virtual public post(url: string, configuration: [HttpClientConfiguration](../sp-http/httpclientconfiguration.md),
    options: [IHttpClientOptions](../sp-http/ihttpclientoptions.md)): Promise<[HttpClientResponse](../sp-http/httpclientresponse.md)>;_

**Returns**: `Promise<HttpClientResponse>`



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`HttpClientConfiguration`](../sp-http/httpclientconfiguration.md) | determines the default behavior of HttpClient; normally this should be the latest version number from HttpClientConfigurations |
| `options`    | [`IHttpClientOptions`](../sp-http/ihttpclientoptions.md) | additional options that affect the request |


