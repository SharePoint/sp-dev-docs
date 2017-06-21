# sp-http package

Base communication layer for the SharePoint Framework

This package defines the base communication layer for the SharePoint Framework. For REST calls, it handles authentication, logging, diagnostics, and batching. It also simplifies requests by adding default headers that follow the recommended best practices.


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`GraphClientResponse`](./sp-http/class/graphclientresponse.md)     | The Response subclass returned by methods such as GraphHttpClient.fetch(). |
| [`GraphHttpClient`](./sp-http/class/graphhttpclient.md)     | GraphHttpClient is used to perform REST calls against Microsoft Graph. It adds default headers and collects telemetry that helps the service to monitor the performance of an application. https://developer.microsoft.com/en-us/graph/ For communicating with non-Graph services, use the HttpClient or SPHttpClient class instead. |
| [`GraphHttpClientConfiguration`](./sp-http/class/graphhttpclientconfiguration.md)     | The GraphHttpClientConfiguration object provides a set of switches for enabling/disabling various features of the GraphHttpClient class. Normally these switches are set (e.g. when calling GraphHttpClient.fetch()) by providing one of the predefined defaults from GraphHttpClientConfigurations, however switches can also be changed via the GraphHttpClientConfiguration.overrideWith() method. |
| [`HttpClient`](./sp-http/class/httpclient.md)     | HttpClient implements a basic set of features for performing REST operations. The subclass SPHttpClient extends this basic functionality with SharePoint-specific enhancements. |
| [`HttpClientConfiguration`](./sp-http/class/httpclientconfiguration.md)     | The HttpClientConfiguration object provides a set of switches for enabling/disabling various features of the HttpClient class. Normally these switches are set (e.g. when calling HttpClient.fetch()) by providing one of the predefined defaults from HttpClientConfigurations, however switches can also be changed via the HttpClientConfiguration.overrideWith() method. |
| [`HttpClientResponse`](./sp-http/class/httpclientresponse.md)     | The Response subclass returned by methods such as HttpClient.fetch(). |
| [`ODataVersion`](./sp-http/class/odataversion.md)     | Represents supported version of the 'OData-Version' header, which is part of the Open Data Protocol standard. |
| [`SPHttpClient`](./sp-http/class/sphttpclient.md)     | SPHttpClient is used to perform REST calls against SharePoint. It adds default headers, manages the digest needed for writes, and collects telemetry that helps the service to monitor the performance of an application. For communicating with non-SharePoint services, use the HttpClient class instead. |
| [`SPHttpClientCommonConfiguration`](./sp-http/class/sphttpclientcommonconfiguration.md)     | Common base class for SPHttpClientConfiguration and SPHttpClientBatchConfiguration. |
| [`SPHttpClientConfiguration`](./sp-http/class/sphttpclientconfiguration.md)     | The SPHttpClientConfiguration object provides a set of switches for enabling/disabling various features of the SPHttpClient class. Normally these switches are set (e.g. when calling SPHttpClient.fetch()) by providing one of the predefined defaults from SPHttpClientConfigurations, however switches can also be changed via the SPHttpClientConfiguration.overrideWith() method. |
| [`SPHttpClientResponse`](./sp-http/class/sphttpclientresponse.md)     | The Response subclass returned by methods such as SPHttpClient.fetch(). |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IGraphHttpClientConfiguration`](./sp-http/interface/igraphhttpclientconfiguration.md)   | Flags interface for GraphHttpClientCommonConfiguration  |
| [`IGraphHttpClientConfigurations`](./sp-http/interface/igraphhttpclientconfigurations.md)   | This interface provides standard predefined GraphHttpClientConfiguration objects for use with the GraphHttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.)  |
| [`IGraphHttpClientOptions`](./sp-http/interface/igraphhttpclientoptions.md)   | This interface defines the options for the GraphHttpClient operations such as get(), post(), fetch(), etc. It is based on the WHATWG API standard parameters that are documented here: https://fetch.spec.whatwg.org/  |
| [`IHttpClientConfiguration`](./sp-http/interface/ihttpclientconfiguration.md)   | Flags interface for HttpClientConfiguration.  |
| [`IHttpClientConfigurations`](./sp-http/interface/ihttpclientconfigurations.md)   | This interface provides standard predefined HttpClientConfiguration objects for use with the HttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.)  |
| [`IHttpClientOptions`](./sp-http/interface/ihttpclientoptions.md)   | This interface defines the options for the HttpClient operations such as get(), post(), fetch(), etc. It is based on the whatwg API standard parameters that are documented here: https://fetch.spec.whatwg.org/  |
| [`ISPHttpClientCommonConfiguration`](./sp-http/interface/isphttpclientcommonconfiguration.md)   | Flags interface for SPHttpClientCommonConfiguration  |
| [`ISPHttpClientConfiguration`](./sp-http/interface/isphttpclientconfiguration.md)   | Flags interface for SPHttpClientConfiguration.  |
| [`ISPHttpClientConfigurations`](./sp-http/interface/isphttpclientconfigurations.md)   | This interface provides standard predefined SPHttpClientConfiguration objects for use with the SPHttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.)  |
| [`ISPHttpClientOptions`](./sp-http/interface/isphttpclientoptions.md)   | This interface defines the options for the SPHttpClient operations such as get(), post(), fetch(), etc. It is based on the WHATWG API standard parameters that are documented here: https://fetch.spec.whatwg.org/  |






