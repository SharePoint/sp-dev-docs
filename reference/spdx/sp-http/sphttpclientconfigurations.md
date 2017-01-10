# SPHttpClientConfigurations class







This class provides standard predefined SPHttpClientConfiguration objects for use with the SPHttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.)



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`none`     | `public` | [`SPHttpClientConfiguration`](../sp-http/sphttpclientconfiguration.md) | This configuration turns off every feature switch for HttpClient. The fetch() behavior will be essentially identical to the WHATWG standard API that is documented here: https://fetch.spec.whatwg.org/ |
|`v1`     | `public` | [`SPHttpClientConfiguration`](../sp-http/sphttpclientconfiguration.md) | Version 1 enables these switches: consoleLogging = true; jsonRequest = true; jsonResponse = true; defaultSameOriginCredentials = true; defaultODataVersion = ODataVersion.v4; requestDigest = true |







