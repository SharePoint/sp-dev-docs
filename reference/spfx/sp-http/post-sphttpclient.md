# post(url,configuration,options)




Calls fetch(), but sets the method to 'POST'.

**Signature:** _@override public post(url: string, configuration: [SPHttpClientConfiguration](../sp-http/sphttpclientconfiguration.md),
    options: [ISPHttpClientOptions](../sp-http/isphttpclientoptions.md)): Promise<[SPHttpClientResponse](../sp-http/sphttpclientresponse.md)>;_

**Returns**: `Promise<SPHttpClientResponse>`



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`SPHttpClientConfiguration`](../sp-http/sphttpclientconfiguration.md) | determines the default behavior of SPHttpClient; normally this should be the latest version number from SPHttpClientConfigurations |
| `options`    | [`ISPHttpClientOptions`](../sp-http/isphttpclientoptions.md) | additional options that affect the request |


