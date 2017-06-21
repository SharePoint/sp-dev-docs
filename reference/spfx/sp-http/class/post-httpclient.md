# post(url,configuration,options)



Calls fetch(), but sets the method to 'POST'.

**Signature:** _public post(url: string, configuration: [HttpClientConfiguration](../../sp-http.api/class/httpclientconfiguration.md),
    options: [IHttpClientOptions](../../sp-http.api/interface/ihttpclientoptions.md)): [Promise](../../web-apis.api/class/promise.md)<[HttpClientResponse](../../sp-http.api/class/httpclientresponse.md)>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<[`HttpClientResponse`](../../sp-http.api/class/httpclientresponse.md)>



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`HttpClientConfiguration`](../../sp-http.api/class/httpclientconfiguration.md) | determines the default behavior of HttpClient; normally this should be the latest version number from HttpClientConfigurations |
| `options`    | [`IHttpClientOptions`](../../sp-http.api/interface/ihttpclientoptions.md) | additional options that affect the request |


