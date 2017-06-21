# ExtensionContext class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The base class for context objects for client-side extensions.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`graphHttpClient`     | `public` | [`GraphHttpClient`](../../sp-http/class/graphhttpclient.md) | _Read-only._ The instance of GraphHttpClient created for this instance of extension |
|`httpClient`     | `public` | [`HttpClient`](../../sp-http/class/httpclient.md) | _Read-only._ The instance of HttpClient created for this instance of extension |
|`spHttpClient`     | `public` | [`SPHttpClient`](../../sp-http/class/sphttpclient.md) | _Read-only._ The instance of SpHttpClient created for this instance of extension |







### Remarks

The constructor for this class is marked as internal; third party code should not inherit directly from this base class.

