# post(url,configuration,options)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Calls fetch(), but sets the method to 'POST'.

**Signature:** _@override public post(url: string, configuration: [SPHttpClientConfiguration](../sp-http/class/sphttpclientconfiguration.md),
    options: [ISPHttpClientOptions](../sp-http/interface/isphttpclientoptions.md)): Promise<[SPHttpClientResponse](../sp-http/class/sphttpclientresponse.md)>;_

**Returns**: `Promise<SPHttpClientResponse>`



a promise that will return the result

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to fetch |
| `configuration`    | [`SPHttpClientConfiguration`](../sp-http/class/sphttpclientconfiguration.md) | determines the default behavior of SPHttpClient; normally this should be the latest version number from SPHttpClientConfigurations |
| `options`    | [`ISPHttpClientOptions`](../sp-http/interface/isphttpclientoptions.md) | additional options that affect the request |


