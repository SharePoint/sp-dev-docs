# get(url,configuration,options)



Calls fetch(), but sets the method to 'GET'.

**Signature:** _public get(url: string, configuration: [SPHttpClientConfiguration](../../sp-http.api/class/sphttpclientconfiguration.md),
    options?: [ISPHttpClientOptions](../../sp-http.api/interface/isphttpclientoptions.md)): [Promise](../../web-apis.api/class/promise.md)<[SPHttpClientResponse](../../sp-http.api/class/sphttpclientresponse.md)>;_

**Returns**: [`Promise`](../../web-apis.api/class/promise.md)<[`SPHttpClientResponse`](../../sp-http.api/class/sphttpclientresponse.md)>



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`SPHttpClientConfiguration`](../../sp-http.api/class/sphttpclientconfiguration.md) | determines the default behavior of SPHttpClient; normally this should be the latest version number from SPHttpClientConfigurations |
| `options`    | [`ISPHttpClientOptions`](../../sp-http.api/interface/isphttpclientoptions.md) | _Optional._ additional options that affect the request |


