# IHttpClientConfigurations interface







This interface provides standard predefined HttpClientConfiguration objects for use with the HttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.)




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`v1`      | [`HttpClientConfiguration`](../../sp-http.api/class/httpclientconfiguration.md) | This configuration turns off every feature switch for HttpClient. The fetch() behavior will be essentially identical to the WHATWG standard API that is documented here: https://fetch.spec.whatwg.org/ |






