# get(url,configuration,options)



Calls fetch(), but sets the method to 'GET'.

**Signature:** _public get(url: string, configuration: [HttpClientConfiguration](../../sp-http/class/httpclientconfiguration.md),
    options?: [IHttpClientOptions](../../sp-http/interface/ihttpclientoptions.md)): [Promise](../../web-apis/class/promise.md)<[HttpClientResponse](../../sp-http/class/httpclientresponse.md)>;_

**Returns**: [`Promise`](../../web-apis/class/promise.md)<[`HttpClientResponse`](../../sp-http/class/httpclientresponse.md)>



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`HttpClientConfiguration`](../../sp-http/class/httpclientconfiguration.md) | determines the default behavior of HttpClient; normally this should be the latest version number from HttpClientConfigurations |
| `options`    | [`IHttpClientOptions`](../../sp-http/interface/ihttpclientoptions.md) | _Optional._ additional options that affect the request |


