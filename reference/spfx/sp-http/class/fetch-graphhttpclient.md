# fetch(url,configuration,options)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Generally, the parameters and semantics for HttpClient.fetch() are essentially the same as the WHATWG API standard that is documented here: https://fetch.spec.whatwg.org/ The GraphHttpClient subclass adds some additional behaviors that are convenient when working with SharePoint ODATA API's (which can be avoided by using HttpClient instead): - Default "Accept" and "Content-Type" headers are added if not explicitly specified.

**Signature:** _public fetch(url: string,
    configuration: [GraphHttpClientConfiguration](../../sp-http/class/graphhttpclientconfiguration.md),
    options: [IGraphHttpClientOptions](../../sp-http/interface/igraphhttpclientoptions.md)): [Promise](../../web-apis/class/promise.md)<GraphHttpClientResponse>;_

**Returns**: [`Promise`](../../web-apis/class/promise.md)<GraphHttpClientResponse>



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | The url string should be relative to the graph server. Good: 'v1.0/me/events' Bad: '/v1.0/me/events', 'https://graph.microsoft.com/v1.0/me/events' |
| `configuration`    | [`GraphHttpClientConfiguration`](../../sp-http/class/graphhttpclientconfiguration.md) | determines the default behavior of GraphHttpClient; normally this should be the latest version number from GraphHttpClientConfigurations |
| `options`    | [`IGraphHttpClientOptions`](../../sp-http/interface/igraphhttpclientoptions.md) | additional options that affect the request |


