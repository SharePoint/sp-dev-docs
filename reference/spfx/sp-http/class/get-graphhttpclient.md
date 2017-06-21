# get(url,configuration,options)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Calls fetch(), but sets the method to 'GET'.

**Signature:** _public get(url: string, configuration: [GraphHttpClientConfiguration](../../sp-http/class/graphhttpclientconfiguration.md),
    options?: [IGraphHttpClientOptions](../../sp-http/interface/igraphhttpclientoptions.md)): [Promise](../../web-apis/class/promise.md)<GraphHttpClientResponse>;_

**Returns**: [`Promise`](../../web-apis/class/promise.md)<GraphHttpClientResponse>



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`GraphHttpClientConfiguration`](../../sp-http/class/graphhttpclientconfiguration.md) | determines the default behavior of GraphHttpClient; normally this should be the latest version number from GraphHttpClientConfigurations |
| `options`    | [`IGraphHttpClientOptions`](../../sp-http/interface/igraphhttpclientoptions.md) | _Optional._ additional options that affect the request |


