# post(url,configuration,options)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Calls fetch(), but sets the method to 'POST'.

**Signature:** _public post(url: string, configuration: [GraphHttpClientConfiguration](../../sp-http.api/class/graphhttpclientconfiguration.md),
    options: [IGraphHttpClientOptions](../../sp-http.api/interface/igraphhttpclientoptions.md)): [Promise](../../web-apis.api/class/promise.md)<GraphHttpClientResponse>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<GraphHttpClientResponse>



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`GraphHttpClientConfiguration`](../../sp-http.api/class/graphhttpclientconfiguration.md) | determines the default behavior of GraphHttpClient; normally this should be the latest version number from GraphHttpClientConfigurations |
| `options`    | [`IGraphHttpClientOptions`](../../sp-http.api/interface/igraphhttpclientoptions.md) | additional options that affect the request |


