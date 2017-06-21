# IGraphHttpClientConfigurations interface





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

This interface provides standard predefined GraphHttpClientConfiguration objects for use with the GraphHttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.)




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`v1`      | [`GraphHttpClientConfiguration`](../../sp-http.api/class/graphhttpclientconfiguration.md) | This configuration turns off every feature switch for HttpClient. The fetch() behavior will be essentially identical to the WHATWG standard API that is documented here: https://fetch.spec.whatwg.org/ |






